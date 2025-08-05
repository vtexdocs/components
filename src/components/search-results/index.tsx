import { useRouter } from 'next/router.js'
import { useContext, useState } from 'react'

import { Box, Text } from '@vtex/brand-ui'

import { Configure, InstantSearch } from 'react-instantsearch-dom'
import { SearchState } from 'react-instantsearch-core'
import InfiniteHits from './infiniteHits'

import styles from './styles'
import { SearchContext } from 'utils/context/search'
import { searchClient, searchIndex } from 'utils/config/search-config'
import { LibraryContext } from 'utils/context/libraryContext'

const SearchResults = () => {
  const router = useRouter()
  const { locale } = useContext(LibraryContext)
  const { filterSelectedSection, ocurrenceCount } = useContext(SearchContext)
  const filters = [
    `language:${locale}`,
    filterSelectedSection ? `doctype:"${filterSelectedSection}"` : '',
  ]
    .filter(Boolean)
    .join(' AND ')
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
        Showing {ocurrenceCount[filterSelectedSection]} results for "
        {router.query.keyword}" in{' '}
        {!filterSelectedSection ? `all results` : filterSelectedSection}
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
            facets={['doctype', 'language']}
            facetingAfterDistinct={true}
          />
          <InfiniteHits />
        </InstantSearch>
      </Box>
    </Box>
  )
}

export default SearchResults
