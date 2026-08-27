import { useContext } from 'react'
import { Flex, Text } from '@vtex/brand-ui'

import styles from './styles'
import { SearchContext } from 'utils/context/search'
import { LibraryContext } from 'utils/context/libraryContext'
import { messages } from 'utils/get-message'
import { formatSearchTabCount } from 'utils/search-utils'
import { getSectionLabel } from 'utils/sidebar-utils'

const SearchFilterTab = ({
  filter,
  label,
}: {
  filter: string
  label?: string
}) => {
  const { filterSelectedSection, changeFilterSelectedSection, ocurrenceCount } =
    useContext(SearchContext)
  const { locale } = useContext(LibraryContext)

  const count = ocurrenceCount[filter]
  const isAllTab = filter === ''
  const isDisabled = !isAllTab && count === 0
  const formattedCount = formatSearchTabCount(count)
  const isActive = filterSelectedSection === filter

  const handleClick = () => {
    if (isDisabled) return
    changeFilterSelectedSection(filter)
  }

  return (
    <Flex
      sx={styles.tab(isActive, isDisabled)}
      onClick={handleClick}
      data-testid="doctype-filter-tab"
      data-filter={filter}
      data-active={String(isActive)}
      data-disabled={String(isDisabled)}
    >
      <Text
        sx={styles.tabTitle(isActive, isDisabled)}
        data-testid="doctype-filter-tab-title"
      >
        {isAllTab
          ? messages[locale]['search_results.all'] || 'All results'
          : label || filter}
      </Text>
      {formattedCount !== undefined && (
        <Text sx={styles.tabCount} data-testid="doctype-filter-tab-count">
          {formattedCount}
        </Text>
      )}
    </Flex>
  )
}

const SearchFilterTabBar = () => {
  const { sidebarSections, sidebarDataMaster, locale } =
    useContext(LibraryContext)
  return (
    <Flex sx={styles.container} data-testid="doctype-filter-tab-bar">
      <SearchFilterTab filter="" />
      {sidebarSections.flat().map((section) => {
        return (
          <SearchFilterTab
            key={section.id}
            filter={section.id}
            label={getSectionLabel(section, sidebarDataMaster, locale)}
          />
        )
      })}
    </Flex>
  )
}

export default SearchFilterTabBar
