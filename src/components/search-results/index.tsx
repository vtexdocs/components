import { useRouter } from 'next/router.js'
import { useContext, useState } from 'react'

import { LibraryContext } from 'utils/context/libraryContext'
import { messages } from 'utils/get-message'
import { Box, Text } from '@vtex/brand-ui'

import { Configure, InstantSearch } from 'react-instantsearch-dom'
import { SearchState } from 'react-instantsearch-core'
import InfiniteHits from './infiniteHits'

import styles from './styles'
import { SearchContext } from 'utils/context/search'
import { searchClient, searchIndex } from 'utils/config/search-config'

const SearchResults = () => {
  const router = useRouter()
  const { filterSelectedSection, ocurrenceCount } = useContext(SearchContext)
  const { locale } = useContext(LibraryContext)
  const filters = filterSelectedSection
    ? `doctype: "${filterSelectedSection}"`
    : ''
  const [prevFilter, setPrevFilter] = useState('')
  const [searchState, setSearchState] = useState({})

  const updateSearchState = (currentState: SearchState) => {
    const page = filters !== prevFilter ? 1 : currentState.page || 1
    setPrevFilter(filters)
    setSearchState({
      ...currentState,
      page,
    })
  }

  return (
    <Box sx={styles.resultContainer}>
      <Text sx={styles.resultText}>
        {`${messages[locale]['search_results.showing'] || 'Showing'} ${(ocurrenceCount && ocurrenceCount[filterSelectedSection]) ?? ''} ${messages[locale]['search_results.results_for'] || 'results for'} ${router.query.keyword} ${messages[locale]['search_results.in'] || 'in'} ${!filterSelectedSection ? (messages[locale]['search_results.all_lowercase'] || 'all results') : filterSelectedSection}`}
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
            hitsPerPage={6}
            facets={['doctype']}
            facetingAfterDistinct={true}
          />
          <InfiniteHits />
        </InstantSearch>
      </Box>
    </Box>
  )
}

export default SearchResults
