import { useContext } from 'react'
import { Flex, Text } from '@vtex/brand-ui'

import styles from './styles'
import { SearchContext } from 'utils/context/search'
import { LibraryContext } from 'utils/context/libraryContext'
import { messages } from 'utils/get-message'

const SearchFilterTab = ({ filter }: { filter: string }) => {
  const { filterSelectedSection, changeFilterSelectedSection, ocurrenceCount } =
    useContext(SearchContext)
  const { locale } = useContext(LibraryContext)

  return (
    <Flex
      sx={styles.tab(filterSelectedSection === filter)}
      onClick={() => changeFilterSelectedSection(filter)}
      data-testid="doctype-filter-tab"
      data-filter={filter}
      data-active={String(filterSelectedSection === filter)}
    >
      <Text
        sx={styles.tabTitle(filterSelectedSection === filter)}
        data-testid="doctype-filter-tab-title"
      >
        {filter || messages[locale]['search_results.all'] || 'All results'}
      </Text>
      <Text sx={styles.tabCount} data-testid="doctype-filter-tab-count">
        {ocurrenceCount[filter] || 0}
      </Text>
    </Flex>
  )
}

const SearchFilterTabBar = () => {
  const { sidebarSections } = useContext(LibraryContext)
  return (
    <Flex sx={styles.container} data-testid="doctype-filter-tab-bar">
      <SearchFilterTab filter="" />
      {sidebarSections
        .flat()
        .filter((section) => !section.excludeFromSearch)
        .map((section) => {
          return <SearchFilterTab key={section.id} filter={section.id} />
        })}
    </Flex>
  )
}

export default SearchFilterTabBar
