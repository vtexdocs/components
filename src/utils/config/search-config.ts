import algoliasearch, { AlgoliaSearchOptions } from 'algoliasearch/lite'
import aa from 'search-insights'
import {
  MultipleQueriesQuery,
  MultipleQueriesResponse,
} from '@algolia/client-search'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export let searchClient: any = {}
export let searchIndex = ''

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
  useLanguageFilter?: boolean
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

const createHybridClient = (config: HybridSearchConfig) => {
  const {
    apiEndpoint,
    defaultLimit = 10,
    useLanguageFilter = true,
  } = config

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
        const request = requests[0]
        const query = request.params?.query || ''
        const limit = request.params?.hitsPerPage || defaultLimit

        let locale = ''
        const facetFilters = request.params?.facetFilters || []
        if (Array.isArray(facetFilters)) {
          const langFilter = facetFilters.find(
            (f: string | string[]) =>
              typeof f === 'string' && f.startsWith('language:')
          )
          if (langFilter && typeof langFilter === 'string') {
            locale = langFilter.replace('language:', '')
          }
        }

        const url = new URL(apiEndpoint, window.location.origin)
        url.searchParams.set('q', query)
        url.searchParams.set('limit', String(limit))
        if (locale) {
          url.searchParams.set('locale', locale)
        }

        const response = await fetch(url.toString())
        if (!response.ok) {
          throw new Error(`Hybrid search failed: ${response.status}`)
        }

        const data = await response.json()
        const hits = (data.results || []).map(transformHybridToAlgolia)
        const facets = extractFacetsFromHits(hits)

        return {
          results: [
            {
              hits,
              nbHits: data.total || hits.length,
              page: request.params?.page || 0,
              nbPages: Math.ceil((data.total || hits.length) / limit),
              hitsPerPage: limit,
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
              hitsPerPage: defaultLimit,
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function transformHybridToAlgolia(result: any): any {
  const filePath = result.filePath || ''
  const pathParts = filePath.split('/').filter(Boolean)

  let doctype = 'Documentation'
  let hierarchy = {
    lvl0: 'Documentation',
    lvl1: result.title || 'Untitled',
    lvl2: null,
  }

  if (pathParts.length > 2) {
    doctype = pathParts[2] || 'Documentation'
    hierarchy = {
      lvl0: doctype,
      lvl1: result.title || 'Untitled',
      lvl2: pathParts[3] || null,
    }
  }

  const url = buildUrlFromFilePath(filePath)

  return {
    objectID: String(result.id),
    ...result,
    url,
    url_without_anchor: url.split('#')[0],
    doctype,
    doctitle: result.title || 'Untitled',
    content: result.snippet || result.content || '',
    hierarchy,
    language: result.metadata?.locale || 'en',
    type: 'content',
    _highlightResult: {
      content: {
        value: result.snippet || result.content || '',
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
        value: result.snippet || '',
        matchLevel: 'full',
      },
    },
  }
}

function buildUrlFromFilePath(filePath: string): string {
  const parts = filePath.split('/')
  if (parts[0] === 'docs' && parts.length > 2) {
    const pathWithoutDocs = parts.slice(2)
    const pathWithoutExt = pathWithoutDocs.join('/').replace(/\.mdx?$/, '')
    return `/docs/${pathWithoutExt}`
  }
  return '/' + filePath.replace(/\.mdx?$/, '')
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
