import algoliasearch, { AlgoliaSearchOptions } from 'algoliasearch/lite'
import aa from 'search-insights'
import {
  MultipleQueriesQuery,
  MultipleQueriesResponse,
} from '@algolia/client-search'
import { stripMarkdownForSnippet } from '../string-utils'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export let searchClient: any = {}
export let searchIndex = ''
export let hitsPerPage = 10 // Default page size for search results

export interface AlgoliaConfig {
  appId: string
  apiKey: string
  index: string
  algoliaOptions?: AlgoliaSearchOptions
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  customOptions?: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  instantSearchConfigs?: any
  useLanguageFilter?: boolean
}

export interface HybridSearchConfig {
  apiEndpoint: string
  source: 'help-center' | 'dev-portal'
  defaultLimit?: number
  itemsPerPage?: number // Alias for defaultLimit (for backward compatibility)
  useLanguageFilter?: boolean
  /**
   * Max number of results to request from the upstream API in a single call.
   * The Hybrid Search upstream does not support pagination, so the adapter
   * fetches a large slice once and paginates / filters client-side.
   * Defaults to 100 (the upstream HS_MAX_LIMIT).
   */
  upstreamFetchSize?: number
  /**
   * TTL (ms) for the in-memory response cache keyed by query+locale.
   * A short TTL is enough to let `connectInfiniteHits` page through the
   * results without re-fetching the upstream on every refineNext call.
   * Defaults to 60_000 ms.
   */
  cacheTtlMs?: number
}

export type SearchBackendConfig =
  | { backend: 'algolia'; algolia: AlgoliaConfig }
  | { backend: 'hybrid'; hybrid: HybridSearchConfig; index: string }

const createAlgoliaClient = (config: AlgoliaConfig) => {
  const {
    apiKey,
    appId,
    index,
    algoliaOptions,
    customOptions,
    instantSearchConfigs,
    useLanguageFilter = true,
  } = config
  searchIndex = index

  aa('init', {
    appId: appId || '',
    apiKey: apiKey || '',
    useCookie: false,
  })

  aa('getUserToken', null, (err) => {
    if (err) {
      console.error(err)
      return
    }
  })

  const algoliaClient = algoliasearch(appId || '', apiKey || '', algoliaOptions)

  searchClient = {
    ...algoliaClient,
    ...customOptions,
    instantSearchConfigs,
    useLanguageFilter,
    search(requests: MultipleQueriesQuery[]) {
      if (requests.every(({ params }) => !params?.query)) return
      return algoliaClient.search(requests)
    },
  }
}

// Upstream hard cap (must match HS_MAX_LIMIT in the API proxy).
const HYBRID_UPSTREAM_MAX_LIMIT = 100

type HybridCacheEntry = {
  key: string
  ts: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  hits: any[]
}

const createHybridClient = (config: HybridSearchConfig) => {
  const {
    apiEndpoint,
    defaultLimit,
    itemsPerPage,
    useLanguageFilter = true,
    upstreamFetchSize = HYBRID_UPSTREAM_MAX_LIMIT,
    cacheTtlMs = 60_000,
  } = config

  // Support both defaultLimit and itemsPerPage (itemsPerPage takes precedence)
  const pageSize = itemsPerPage ?? defaultLimit ?? 10
  hitsPerPage = pageSize

  const effectiveUpstreamLimit = clampUpstreamLimit(upstreamFetchSize)
  const cache: HybridCacheEntry[] = []

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getCached = (key: string): any[] | undefined => {
    const now = Date.now()
    for (let i = cache.length - 1; i >= 0; i--) {
      if (now - cache[i].ts > cacheTtlMs) {
        cache.splice(i, 1)
      }
    }
    return cache.find((e) => e.key === key)?.hits
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setCached = (key: string, hits: any[]) => {
    cache.push({ key, ts: Date.now(), hits })
    while (cache.length > 20) cache.shift()
  }

  // Initialize minimal analytics (disabled for hybrid)
  aa('init', {
    appId: 'hybrid-search',
    apiKey: 'none',
    useCookie: false,
  })

  searchClient = {
    appId: 'hybrid-search',
    apiKey: 'hybrid',
    useLanguageFilter,
    instantSearchConfigs: null,

    async search(
      requests: MultipleQueriesQuery[]
    ): Promise<MultipleQueriesResponse<any> | undefined> {
      if (requests.every(({ params }) => !params?.query)) {
        return undefined
      }

      try {
        // Find the first request with a non-empty query
        const request =
          requests.find(({ params }) => params?.query) || requests[0]
        const params = request.params || {}
        const query = params.query || ''
        const hitsPerPage = params.hitsPerPage || pageSize
        const page = params.page || 0

        const { locale, doctypes } = extractHybridFilters(params)

        // The upstream Hybrid Search API does not support pagination or doctype
        // filtering, so we always fetch a large slice once per (query, locale)
        // pair and paginate / doctype-filter client-side.
        const cacheKey = JSON.stringify({
          q: query,
          locale: useLanguageFilter ? locale || '' : '',
          limit: effectiveUpstreamLimit,
        })

        const cachedHits = getCached(cacheKey)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let allHits: any[]
        if (cachedHits) {
          allHits = cachedHits
        } else {
          const url = new URL(apiEndpoint, window.location.origin)
          url.searchParams.set('q', query)
          url.searchParams.set('limit', String(effectiveUpstreamLimit))
          if (useLanguageFilter && locale) {
            url.searchParams.set('locale', locale)
          }

          const response = await fetch(url.toString())
          if (!response.ok) {
            throw new Error(`Hybrid search failed: ${response.status}`)
          }

          const data = await response.json()
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const rawResults: any[] = Array.isArray(data?.results)
            ? data.results
            : []
          allHits = rawResults.map(transformHybridToAlgolia)
          setCached(cacheKey, allHits)
        }

        // Doctype filter is applied client-side because the upstream API
        // does not understand it. Facet counts are computed on `allHits`
        // (i.e. ignoring the doctype filter) so that the tabs keep showing
        // counts for the other doctypes.
        const filteredHits = filterHitsByDoctype(allHits, doctypes)
        const nbHits = filteredHits.length
        const nbPages = Math.max(1, Math.ceil(nbHits / hitsPerPage))
        const start = page * hitsPerPage
        const pageHits = filteredHits.slice(start, start + hitsPerPage)

        const facets = extractFacetsFromHits(allHits)

        return {
          results: [
            {
              hits: pageHits,
              nbHits,
              page,
              nbPages,
              hitsPerPage,
              exhaustiveNbHits: true,
              query,
              params: '',
              index: request.indexName || '',
              processingTimeMS: 0,
              facets: facets.facets,
              facets_stats: {},
              exhaustiveFacetsCount: true,
              queryID: generateQueryID(),
            },
          ],
        }
      } catch (error) {
        console.error('Hybrid search error:', error)
        return {
          results: [
            {
              hits: [],
              nbHits: 0,
              page: 0,
              nbPages: 0,
              hitsPerPage: pageSize,
              exhaustiveNbHits: true,
              query: requests[0]?.params?.query || '',
              params: '',
              index: requests[0]?.indexName || '',
              processingTimeMS: 0,
            },
          ],
        }
      }
    },
  }
}

function clampUpstreamLimit(raw: number): number {
  if (!Number.isFinite(raw) || raw <= 0) return HYBRID_UPSTREAM_MAX_LIMIT
  return Math.min(HYBRID_UPSTREAM_MAX_LIMIT, Math.max(1, Math.floor(raw)))
}

/**
 * Extracts the language and doctype filters from an InstantSearch request.
 *
 * Two filter shapes need to be supported:
 *  1. `Configure.filters` (a single string like
 *     `language:en AND doctype:"tutorials"`), used by the full Search page.
 *  2. `Configure.facetFilters` (an array like `['language:en']`), used by
 *     the SearchInput dropdown in the header.
 */
function extractHybridFilters(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any
): { locale: string; doctypes: string[] } {
  let locale = ''
  const doctypes: string[] = []

  const pushDoctype = (raw: string) => {
    const value = raw.replace(/^"|"$/g, '').trim()
    if (value && !doctypes.includes(value)) doctypes.push(value)
  }

  // 1) Configure.filters as a string expression
  const filtersStr = typeof params?.filters === 'string' ? params.filters : ''
  if (filtersStr) {
    const langMatch = filtersStr.match(/language\s*:\s*([\w-]+)/i)
    if (langMatch) locale = langMatch[1]

    const doctypeRegex = /doctype\s*:\s*(?:"([^"]+)"|([^\s)]+))/gi
    let m: RegExpExecArray | null
    while ((m = doctypeRegex.exec(filtersStr)) !== null) {
      pushDoctype(m[1] || m[2] || '')
    }
  }

  // 2) facetFilters (string | string[] | (string | string[])[])
  const facetFilters = params?.facetFilters
  const visit = (entry: unknown) => {
    if (typeof entry === 'string') {
      if (!locale && entry.startsWith('language:')) {
        locale = entry.slice('language:'.length)
      } else if (entry.startsWith('doctype:')) {
        pushDoctype(entry.slice('doctype:'.length))
      }
    } else if (Array.isArray(entry)) {
      entry.forEach(visit)
    }
  }
  visit(facetFilters)

  return { locale, doctypes }
}

function filterHitsByDoctype<T extends { doctype?: string }>(
  hits: T[],
  doctypes: string[]
): T[] {
  if (!doctypes.length) return hits
  const wanted = new Set(doctypes.map((d) => d.toLowerCase()))
  return hits.filter((h) =>
    wanted.has(String(h.doctype || '').toLowerCase())
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function transformHybridToAlgolia(result: any): any {
  const filePath = result.filePath || ''
  const doctype = deriveDoctypeFromFilePath(filePath)

  const hierarchy = {
    lvl0: doctype,
    lvl1: result.title || 'Untitled',
    lvl2: deriveCategoryFromFilePath(filePath),
  }

  const url = buildUrlFromFilePath(filePath)

  // Strip markdown syntax from snippets for display
  const rawContent = result.snippet || result.content || ''
  const cleanContent = stripMarkdownForSnippet(rawContent)

  return {
    objectID: String(result.id),
    ...result,
    url,
    url_without_anchor: url.split('#')[0],
    doctype,
    doctitle: result.title || 'Untitled',
    content: cleanContent,
    hierarchy,
    language: result.metadata?.locale || 'en',
    type: 'content',
    _highlightResult: {
      content: {
        value: cleanContent,
        matchLevel: 'full',
        fullyHighlighted: false,
        matchedWords: [],
      },
      hierarchy: {
        lvl0: {
          value: hierarchy.lvl0,
          matchLevel: 'none',
        },
        lvl1: {
          value: hierarchy.lvl1,
          matchLevel: result.title ? 'partial' : 'none',
        },
      },
    },
    _snippetResult: {
      content: {
        value: result.snippet ? stripMarkdownForSnippet(result.snippet) : '',
        matchLevel: 'full',
      },
    },
  }
}

const LOCALE_SEGMENT = /^(en|es|pt)$/i

/**
 * Derives the doctype id from a filePath returned by the Hybrid Search upstream.
 *
 * Supports the two layouts currently produced by the help-center / dev-portal
 * content repositories:
 *  - `docs/<locale>/<doctype>/...`  →  doctype = 3rd segment
 *  - `<doctype>/<locale>/...`       →  doctype = 1st segment
 *  - `<doctype>/...`                →  doctype = 1st segment (fallback)
 *
 * Returns 'documentation' as a safe default so SearchCard rendering does not
 * break. The id is kept lowercase so it can be matched against the
 * `filterSelectedSection` values defined in the consuming app
 * (e.g. 'tutorials', 'faq', 'known-issues', 'troubleshooting', 'announcements').
 */
function deriveDoctypeFromFilePath(filePath: string): string {
  const parts = filePath.split('/').filter(Boolean)
  if (parts.length === 0) return 'documentation'

  if (parts[0] === 'docs' && parts.length > 2) {
    return parts[2].toLowerCase()
  }

  if (parts.length > 1 && LOCALE_SEGMENT.test(parts[1])) {
    return parts[0].toLowerCase()
  }

  return parts[0].toLowerCase()
}

function deriveCategoryFromFilePath(filePath: string): string | null {
  const parts = filePath.split('/').filter(Boolean)
  if (parts[0] === 'docs' && parts.length > 3) return parts[3]
  if (parts.length > 2 && LOCALE_SEGMENT.test(parts[1])) return parts[2]
  if (parts.length > 1) return parts[1]
  return null
}

function buildUrlFromFilePath(filePath: string): string {
  const parts = filePath.split('/').filter(Boolean)
  if (parts.length === 0) return '/'

  const stripExt = (s: string) => s.replace(/\.mdx?$/, '')

  // docs/<locale>/tracks/<path>/<slug> → /<locale>/docs/tracks/<slug>
  // Special handling for tracks: only use the last segment
  if (parts[0] === 'docs' && parts.length > 3 && parts[2] === 'tracks') {
    const locale = parts[1]
    const slug = stripExt(parts[parts.length - 1])
    return `/${locale}/docs/tracks/${slug}`
  }

  // docs/<locale>/<doctype>/<slug>...
  if (parts[0] === 'docs' && parts.length > 2) {
    return `/docs/${stripExt(parts.slice(2).join('/'))}`
  }

  // <doctype>/<locale>/<slug>... (announcements, faq, known-issues, troubleshooting, ...)
  if (parts.length > 2 && LOCALE_SEGMENT.test(parts[1])) {
    return `/${parts[0]}/${stripExt(parts.slice(2).join('/'))}`
  }

  return '/' + stripExt(parts.join('/'))
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractFacetsFromHits(
  hits: any[]
): { facets: Record<string, Record<string, number>> } {
  const facets: Record<string, Record<string, number>> = {
    doctype: {},
    language: {},
  }

  hits.forEach((hit) => {
    const doctype = hit.doctype || 'Other'
    facets.doctype[doctype] = (facets.doctype[doctype] || 0) + 1

    const language = hit.language || 'en'
    facets.language[language] = (facets.language[language] || 0) + 1
  })

  return { facets }
}

function generateQueryID(): string {
  return `hybrid_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

export default function SearchConfig(config: SearchBackendConfig | AlgoliaConfig) {
  // Backward compatibility: if config doesn't have 'backend', assume Algolia
  if ('backend' in config) {
    if (config.backend === 'hybrid') {
      searchIndex = config.index
      createHybridClient(config.hybrid)
    } else {
      createAlgoliaClient(config.algolia)
    }
  } else {
    // Old API: direct AlgoliaConfig
    createAlgoliaClient(config as AlgoliaConfig)
  }
}
