import { Box, Flex, Text } from '@vtex/brand-ui'
import { useContext, useEffect } from 'react'

import styles from './styles'
import { useRouter } from 'next/router.js'
import { FilterType, SearchContext } from 'utils/context/search'
import { Section } from 'utils/typings/types'

interface SearchSectionProps {
  dataElement: Section | null
  index?: number
}

const SearchSection = ({ dataElement, index }: SearchSectionProps) => {
  const router = useRouter()
  const { filterSelectedSection, ocurrenceCount, changeFilterSelectedSection } =
    useContext(SearchContext)

  const updateFilter = (value: FilterType) => {
    router.query.filter = value
    changeFilterSelectedSection(value)
  }

  useEffect(() => {
    updateFilter('')
  }, [router.query])

  return !dataElement ? (
    <Flex sx={styles.sectionContainer} onClick={() => updateFilter('')}>
      <Text
        className="search-section-title"
        sx={
          filterSelectedSection
            ? styles.allResultsText
            : styles.allResultsTextActive
        }
      >
        All results
      </Text>
      <Box className="search-section-count" sx={styles.sectionCount}>
        {ocurrenceCount['']}
      </Box>
    </Flex>
  ) : (
    <Flex
      sx={styles.sectionContainer}
      key={`search-section-${dataElement.id}${index}`}
      onClick={() => updateFilter(dataElement.id)}
    >
      <Flex sx={styles.sectionIconTitleBox}>
        <dataElement.Icon sx={styles.sectionIcon} />
        <Text
          className="search-section-title"
          sx={
            filterSelectedSection === dataElement.id
              ? styles.sectionTitleActive
              : styles.sectionTitle
          }
        >
          {dataElement.title}
        </Text>
      </Flex>
      <Box className="search-section-count" sx={styles.sectionCount}>
        {ocurrenceCount[dataElement.id] || 0}
      </Box>
    </Flex>
  )
}

export default SearchSection
