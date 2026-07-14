import { useRouter } from 'next/router.js'
import { useContext, useEffect, useState } from 'react'

import { LibraryContext } from 'utils/context/libraryContext'
import { messages } from 'utils/get-message'
import { Box, Text } from '@vtex/brand-ui'

import { Configure, InstantSearch } from 'react-instantsearch-dom'
import { SearchState } from 'react-instantsearch-core'
import InfiniteHits from './infiniteHits'

import styles from './styles'
import { SearchContext } from 'utils/context/search'
import {
  searchClient,
  searchIndex,
  hitsPerPage,
} from 'utils/config/search-config'
import { formatSearchTabCount } from 'utils/search-utils'

const SearchResults = () => {
  const router = useRouter()
  const { filterSelectedSection, ocurrenceCount } = useContext(SearchContext)
  const { locale } = useContext(LibraryContext)
  const filters = [
    `language:${locale}`,
    filterSelectedSection ? `doctype:"${filterSelectedSection}"` : '',
  ]
    .filter(Boolean)
    .join(' AND ')
  const keyword = String(router.query.keyword ?? '')
  const [prevFilter, setPrevFilter] = useState('')
  const [prevKeyword, setPrevKeyword] = useState(keyword)
  const [searchState, setSearchState] = useState<SearchState>({})

  useEffect(() => {
    if (!keyword || keyword === prevKeyword) return
    setPrevKeyword(keyword)
    setSearchState((currentState) => ({
      ...currentState,
      page: 1,
    }))
  }, [keyword, prevKeyword])

  const updateSearchState = (currentState: SearchState) => {
    const keywordChanged = keyword !== prevKeyword
    const filterChanged = filters !== prevFilter
    const page = keywordChanged || filterChanged ? 1 : currentState.page || 1
    if (keywordChanged) setPrevKeyword(keyword)
    setPrevFilter(filters)
    setSearchState({
      ...currentState,
      page,
    })
  }

  return (
    <Box sx={styles.resultContainer}>
      <Text sx={styles.resultText}>
        {`${messages[locale]['search_results.showing'] || 'Showing'} ${
          formatSearchTabCount(ocurrenceCount[filterSelectedSection]) ?? ''
        } ${messages[locale]['search_results.results_for'] || 'results for'} ${
          router.query.keyword
        } ${messages[locale]['search_results.in'] || 'in'} ${
          !filterSelectedSection
            ? messages[locale]['search_results.all_lowercase'] || 'all results'
            : filterSelectedSection
        }`}
      </Text>
      <hr />
      <Box>
        <InstantSearch
          searchClient={searchClient}
          indexName={searchIndex}
          searchState={searchState}
          onSearchStateChange={(currentState) =>
            updateSearchState(currentState)
          }
        >
          <Configure
            filters={filters}
            query={router.query.keyword}
            clickAnalytics={true}
            hitsPerPage={hitsPerPage}
            facets={['doctype', 'language']}
            facetingAfterDistinct={true}
          />
          <InfiniteHits key={keyword} />
        </InstantSearch>
      </Box>
    </Box>
  )
}

export default SearchResults
