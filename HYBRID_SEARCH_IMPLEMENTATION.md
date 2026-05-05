# Hybrid Search Implementation for @vtexdocs/components

## Overview

This document outlines the implementation strategy to add hybrid search support to the `@vtexdocs/components` package while maintaining backward compatibility with Algolia.

## Current Architecture

The package uses a **singleton pattern** for search configuration:

```
SearchConfig() called once at app startup
    ↓
Creates global searchClient + searchIndex
    ↓
SearchInput & SearchResults import these globals
    ↓
Both wrap in InstantSearch (react-instantsearch-dom)
```

**Key Constraint:** The package is **tightly coupled to Algolia** through `react-instantsearch-dom` and expects Algolia's multi-query response format.

## Implementation Strategy: Hybrid Adapter Pattern

Instead of rewriting components, we'll create a **hybrid search adapter** that implements Algolia's client interface while calling the Help Center's `/api/search` endpoint.

### Benefits
- ✅ Minimal code changes
- ✅ Backward compatible (Algolia still works)
- ✅ Reuses existing InstantSearch components
- ✅ Feature-flagged (easy rollback)
- ✅ Works for both Help Center and Dev Portal

### Architecture

```
App calls SearchConfig({ backend: 'hybrid', ... })
    ↓
search-config.ts creates hybridSearchClient
    ↓
hybridSearchClient implements Algolia interface
    ↓
Translates InstantSearch queries → /api/search
    ↓
Transforms results → Algolia format
    ↓
InstantSearch components work unchanged
```

## Code Changes

### 1. Update search-config.ts

**File:** `src/utils/config/search-config.ts`

```typescript
import algoliasearch, { AlgoliaSearchOptions } from 'algoliasearch/lite'
import aa from 'search-insights'
import { MultipleQueriesQuery, MultipleQueriesResponse } from '@algolia/client-search'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export let searchClient: any = {}
export let searchIndex = ''

interface AlgoliaConfig {
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

interface HybridSearchConfig {
  apiEndpoint: string // e.g., '/api/search'
  source: 'help-center' | 'dev-portal'
  defaultLimit?: number
  useLanguageFilter?: boolean
}

type SearchBackendConfig =
  | { backend: 'algolia'; algolia: AlgoliaConfig }
  | { backend: 'hybrid'; hybrid: HybridSearchConfig; index: string }

// Algolia client (existing implementation)
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

// Hybrid search client (NEW)
const createHybridClient = (config: HybridSearchConfig) => {
  const {
    apiEndpoint,
    source,
    defaultLimit = 10,
    useLanguageFilter = true,
  } = config

  // Disable Algolia insights for hybrid search
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

    // Implement Algolia's multi-query search interface
    async search(requests: MultipleQueriesQuery[]): Promise<MultipleQueriesResponse | undefined> {
      // Filter out empty queries
      if (requests.every(({ params }) => !params?.query)) {
        return undefined
      }

      try {
        // Take the first request (InstantSearch typically sends one)
        const request = requests[0]
        const query = request.params?.query || ''
        const limit = request.params?.hitsPerPage || defaultLimit
        
        // Extract locale from facetFilters
        let locale = ''
        const facetFilters = request.params?.facetFilters || []
        if (Array.isArray(facetFilters)) {
          const langFilter = facetFilters.find((f: string | string[]) => 
            typeof f === 'string' && f.startsWith('language:')
          )
          if (langFilter && typeof langFilter === 'string') {
            locale = langFilter.replace('language:', '')
          }
        }

        // Call hybrid search API
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

        // Transform hybrid results to Algolia format
        const hits = (data.results || []).map(transformHybridToAlgolia)

        // Extract facets if needed
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
              exhaustiveTypo: true,
              queryID: generateQueryID(),
            },
          ],
        }
      } catch (error) {
        console.error('Hybrid search error:', error)
        // Return empty results on error
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

// Transform hybrid search result to Algolia hit format
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function transformHybridToAlgolia(result: any): any {
  // Extract path components for hierarchy and breadcrumbs
  const filePath = result.filePath || ''
  const pathParts = filePath.split('/').filter(Boolean)
  
  // Try to extract category from path (e.g., docs/en/tutorials/checkout.md)
  let doctype = 'Documentation'
  let hierarchy = {
    lvl0: 'Documentation',
    lvl1: result.title || 'Untitled',
    lvl2: null,
  }

  if (pathParts.length > 2) {
    // Path structure: docs/locale/category/...
    doctype = pathParts[2] || 'Documentation'
    hierarchy = {
      lvl0: doctype,
      lvl1: result.title || 'Untitled',
      lvl2: pathParts[3] || null,
    }
  }

  // Build URL from filePath
  const url = buildUrlFromFilePath(filePath)

  return {
    objectID: String(result.id),
    // Keep original fields for compatibility
    ...result,
    // Add Algolia-expected fields
    url,
    url_without_anchor: url.split('#')[0],
    doctype,
    doctitle: result.title || 'Untitled',
    content: result.snippet || result.content || '',
    hierarchy,
    language: result.metadata?.locale || 'en',
    type: 'content',
    // Highlighting
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
  // Transform: docs/en/tutorials/checkout.md → /docs/tutorials/checkout
  const parts = filePath.split('/')
  if (parts[0] === 'docs' && parts.length > 2) {
    // Remove 'docs', locale, and file extension
    const pathWithoutDocs = parts.slice(2)
    const pathWithoutExt = pathWithoutDocs.join('/').replace(/\.mdx?$/, '')
    return `/docs/${pathWithoutExt}`
  }
  // Fallback: just remove extension
  return '/' + filePath.replace(/\.mdx?$/, '')
}

// Extract facets from hits for filtering
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractFacetsFromHits(hits: any[]): { facets: Record<string, Record<string, number>> } {
  const facets: Record<string, Record<string, number>> = {
    doctype: {},
    language: {},
  }

  hits.forEach((hit) => {
    // Count doctypes
    const doctype = hit.doctype || 'Other'
    facets.doctype[doctype] = (facets.doctype[doctype] || 0) + 1

    // Count languages
    const language = hit.language || 'en'
    facets.language[language] = (facets.language[language] || 0) + 1
  })

  return { facets }
}

function generateQueryID(): string {
  return `hybrid_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

// Main export - now handles both backends
export default function SearchConfig(config: SearchBackendConfig) {
  if (config.backend === 'hybrid') {
    searchIndex = config.index
    createHybridClient(config.hybrid)
  } else {
    createAlgoliaClient(config.algolia)
  }
}
```

### 2. Update Help Center Configuration

**File:** `helpcenter/src/utils/libraryConfig.ts`

```typescript
import { SearchConfig } from '@vtexdocs/components'

const useHybridSearch = process.env.NEXT_PUBLIC_HYBRID_SEARCH_ENABLED === 'true'

const libraryConfig = useHybridSearch
  ? {
      backend: 'hybrid' as const,
      index: 'helpcenter-docs', // Still needed for InstantSearch
      hybrid: {
        apiEndpoint: '/api/search',
        source: 'help-center' as const,
        defaultLimit: 10,
        useLanguageFilter: true,
      },
    }
  : {
      backend: 'algolia' as const,
      algolia: {
        appId: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '',
        apiKey: process.env.NEXT_PUBLIC_ALGOLIA_WRITE_KEY || '',
        index: 'helpcenter-docs',
      },
    }

export default SearchConfig(libraryConfig)
```

### 3. Update TypeScript Exports

**File:** `src/index.ts`

Add type exports for configuration:

```typescript
// ... existing exports ...

export { default as SearchConfig } from 'utils/config/search-config'

// Export types for consumers
export type {
  SearchBackendConfig,
  AlgoliaConfig,
  HybridSearchConfig,
} from 'utils/config/search-config'
```

### 4. Update Package Dependencies

**File:** `package.json`

Ensure `swr` is available (already in dependencies ✓), and document that `algoliasearch` is optional for hybrid mode:

```json
{
  "dependencies": {
    "swr": "^1.3.0"
  },
  "peerDependencies": {
    "algoliasearch": "^4.14.2"
  },
  "peerDependenciesMeta": {
    "algoliasearch": {
      "optional": true
    }
  }
}
```

## Testing Strategy

### 1. Unit Tests for Transformer

Create `src/utils/config/__tests__/search-config.test.ts`:

```typescript
import { transformHybridToAlgolia, buildUrlFromFilePath } from '../search-config'

describe('transformHybridToAlgolia', () => {
  it('transforms hybrid result to Algolia format', () => {
    const hybridResult = {
      id: 123,
      title: 'Setting up checkout',
      filePath: 'docs/en/tutorials/checkout-setup.md',
      snippet: 'Learn how to configure <em>checkout</em> settings',
      content: 'Full content here...',
      score: 0.95,
      metadata: { locale: 'en' },
    }

    const algoliaHit = transformHybridToAlgolia(hybridResult)

    expect(algoliaHit.objectID).toBe('123')
    expect(algoliaHit.url).toBe('/docs/tutorials/checkout-setup')
    expect(algoliaHit.doctype).toBe('tutorials')
    expect(algoliaHit.hierarchy.lvl0).toBe('tutorials')
    expect(algoliaHit.hierarchy.lvl1).toBe('Setting up checkout')
    expect(algoliaHit._highlightResult.content.value).toContain('checkout')
  })

  it('handles missing fields gracefully', () => {
    const minimal = {
      id: 1,
      filePath: 'test.md',
    }

    const hit = transformHybridToAlgolia(minimal)

    expect(hit.objectID).toBe('1')
    expect(hit.doctitle).toBe('Untitled')
    expect(hit.hierarchy.lvl1).toBe('Untitled')
  })
})

describe('buildUrlFromFilePath', () => {
  it('converts filePath to URL', () => {
    expect(buildUrlFromFilePath('docs/en/tutorials/test.md')).toBe('/docs/tutorials/test')
    expect(buildUrlFromFilePath('docs/pt/faq/question.mdx')).toBe('/docs/faq/question')
  })

  it('handles non-standard paths', () => {
    expect(buildUrlFromFilePath('other/path.md')).toBe('/other/path')
  })
})
```

### 2. Integration Test with Mock API

Create `src/components/search-input/__tests__/hybrid-search.test.tsx`:

```typescript
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchInput from '../index'
import SearchConfig from 'utils/config/search-config'

// Mock fetch
global.fetch = jest.fn()

beforeEach(() => {
  jest.clearAllMocks()
})

describe('SearchInput with hybrid backend', () => {
  beforeAll(() => {
    SearchConfig({
      backend: 'hybrid',
      index: 'test-index',
      hybrid: {
        apiEndpoint: '/api/search',
        source: 'help-center',
      },
    })
  })

  it('calls hybrid API when user types', async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => ({
        results: [
          {
            id: 1,
            title: 'Test Result',
            filePath: 'docs/en/test.md',
            snippet: 'Test snippet',
          },
        ],
        total: 1,
      }),
    })

    render(<SearchInput />)

    const input = screen.getByRole('searchbox')
    await userEvent.type(input, 'checkout')

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('/api/search?q=checkout')
      )
    })
  })

  it('displays transformed results', async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => ({
        results: [
          {
            id: 1,
            title: 'Checkout Guide',
            filePath: 'docs/en/tutorials/checkout.md',
            snippet: 'How to configure checkout',
          },
        ],
        total: 1,
      }),
    })

    render(<SearchInput />)

    const input = screen.getByRole('searchbox')
    await userEvent.type(input, 'checkout')

    await waitFor(() => {
      expect(screen.getByText(/Checkout Guide/i)).toBeInTheDocument()
    })
  })
})
```

### 3. Storybook Stories

Update `src/components/search-input/SearchInput.stories.tsx`:

```typescript
import SearchInput from './index'
import SearchConfig from 'utils/config/search-config'

export default {
  title: 'Components/SearchInput',
  component: SearchInput,
}

export const AlgoliaBackend = () => {
  SearchConfig({
    backend: 'algolia',
    algolia: {
      appId: 'test',
      apiKey: 'test',
      index: 'test',
    },
  })
  return <SearchInput />
}

export const HybridBackend = () => {
  SearchConfig({
    backend: 'hybrid',
    index: 'test',
    hybrid: {
      apiEndpoint: '/api/search',
      source: 'help-center',
    },
  })
  return <SearchInput />
}
```

## Deployment Checklist

### Phase 1: Development
- [ ] Implement hybrid adapter in `search-config.ts`
- [ ] Add type definitions
- [ ] Write unit tests
- [ ] Test in Storybook
- [ ] Update documentation

### Phase 2: Package Release
- [ ] Build package: `yarn build`
- [ ] Verify dist output
- [ ] Test package locally in helpcenter
- [ ] Commit to components repo
- [ ] Tag version (e.g., `v6.1.0`)
- [ ] Push to GitHub

### Phase 3: Help Center Integration
- [ ] Update helpcenter's `package.json` to new version
- [ ] Update `libraryConfig.ts` to support hybrid
- [ ] Add feature flag in `.env.example`
- [ ] Test locally with `NEXT_PUBLIC_HYBRID_SEARCH_ENABLED=true`
- [ ] Verify API calls in Network tab
- [ ] Test search functionality

### Phase 4: Deployment
- [ ] Deploy to preview environment
- [ ] Test with real data
- [ ] Enable feature flag in Netlify
- [ ] Monitor for errors
- [ ] Collect metrics

## Rollback Plan

If issues occur:

1. **Quick rollback:** Set `NEXT_PUBLIC_HYBRID_SEARCH_ENABLED=false` in Netlify
2. **Package rollback:** Revert to previous `@vtexdocs/components` version
3. **Emergency:** The adapter returns empty results on error, so Algolia credentials can be added back

## Known Limitations

1. **Faceting:** Facets are extracted from results, not from a separate facet index (may be less accurate for large result sets)
2. **Analytics:** Algolia Insights won't work for hybrid results
3. **Query suggestions:** No autocomplete suggestions (would need separate endpoint)
4. **Performance:** Adds network hop through Next.js API route
5. **Relevance tuning:** Cannot use Algolia dashboard for ranking tweaks

## Future Enhancements

1. **Server-side rendering:** Hybrid client currently assumes `window` exists (client-side only)
2. **Facet API:** Add `/api/facets` endpoint for accurate counts
3. **Analytics:** Integrate with custom analytics instead of Algolia Insights
4. **Caching:** Add client-side SWR caching for better performance
5. **A/B testing:** Run both backends and compare quality
6. **Query suggestions:** Add autocomplete endpoint

## Resources

- Original implementation plan: `helpcenter/docs/hybrid-search-integration-plan.md`
- Backend API: `helpcenter/src/pages/api/search.ts`
- Hybrid client: `helpcenter/src/utils/hybrid-search-client.ts`
- Components repo: https://github.com/vtexdocs/components
