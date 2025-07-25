import { useContext } from 'react'
import { useIntl } from 'react-intl'
import { Flex, Text } from '@vtex/brand-ui'

import styles from './styles'
import { SearchContext } from 'utils/context/search'
import { LibraryContext } from 'utils/context/libraryContext'

const SearchFilterTab = ({ filter }: { filter: string }) => {
  const { filterSelectedSection, changeFilterSelectedSection, ocurrenceCount } =
    useContext(SearchContext)
  const intl = useIntl()

  return (
    <Flex
      sx={styles.tab(filterSelectedSection === filter)}
      onClick={() => changeFilterSelectedSection(filter)}
    >
      <Text sx={styles.tabTitle(filterSelectedSection === filter)}>
        {filter || intl.formatMessage({ id: 'search_results.all', defaultMessage: 'All Results' })}
      </Text>
      <Text sx={styles.tabCount}>{ocurrenceCount[filter] || 0}</Text>
    </Flex>
  )
}

const SearchFilterTabBar = () => {
  const { sidebarSections } = useContext(LibraryContext)
  return (
    <Flex sx={styles.container}>
      <SearchFilterTab filter="" />
      {sidebarSections.flat().map((section) => {
        return <SearchFilterTab key={section.title} filter={section.title} />
      })}
    </Flex>
  )
}

export default SearchFilterTabBar
