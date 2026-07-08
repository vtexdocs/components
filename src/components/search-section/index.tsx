import { Box, Flex, Text } from '@vtex/brand-ui'
import { useContext, useEffect } from 'react'
import { LibraryContext } from 'utils/context/libraryContext'
import { messages } from 'utils/get-message'
import styles from './styles'
import { useRouter } from 'next/router.js'
import { FilterType, SearchContext } from 'utils/context/search'
import { Section } from 'utils/typings/types'
import { formatSearchTabCount } from 'utils/search-utils'

interface SearchSectionProps {
  dataElement: Section | null
  index?: number
}

const SearchSection = ({ dataElement, index }: SearchSectionProps) => {
  const router = useRouter()
  const { filterSelectedSection, ocurrenceCount, changeFilterSelectedSection } =
    useContext(SearchContext)
  const { locale } = useContext(LibraryContext)

  const updateFilter = (value: FilterType) => {
    router.query.filter = value
    changeFilterSelectedSection(value)
  }

  useEffect(() => {
    updateFilter('')
  }, [router.query])

  const allCountLabel = formatSearchTabCount(ocurrenceCount[''])

  if (!dataElement) {
    return (
      <Flex sx={styles.sectionContainer()} onClick={() => updateFilter('')}>
        <Text
          className="search-section-title"
          sx={
            filterSelectedSection
              ? styles.allResultsText
              : styles.allResultsTextActive
          }
        >
          {messages[locale]['search_results.all'] || 'All results'}
        </Text>
        {allCountLabel !== undefined && (
          <Box className="search-section-count" sx={styles.sectionCount}>
            {allCountLabel}
          </Box>
        )}
      </Flex>
    )
  }

  const count = ocurrenceCount[dataElement.id]
  const isDisabled = count === 0
  const countLabel = formatSearchTabCount(count)

  return (
    <Flex
      sx={styles.sectionContainer(isDisabled)}
      key={`search-section-${dataElement.id}${index}`}
      onClick={() => {
        if (isDisabled) return
        updateFilter(dataElement.id)
      }}
      data-disabled={String(isDisabled)}
    >
      <Flex sx={styles.sectionIconTitleBox}>
        <dataElement.Icon sx={styles.sectionIcon(isDisabled)} />
        <Text
          className="search-section-title"
          sx={
            filterSelectedSection === dataElement.id
              ? styles.sectionTitleActive
              : styles.sectionTitle(isDisabled)
          }
        >
          {dataElement.title}
        </Text>
      </Flex>
      {countLabel !== undefined && (
        <Box className="search-section-count" sx={styles.sectionCount}>
          {countLabel}
        </Box>
      )}
    </Flex>
  )
}

export default SearchSection
