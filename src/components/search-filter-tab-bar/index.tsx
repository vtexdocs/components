import { useContext, useEffect } from 'react'
import { Flex, Text } from '@vtex/brand-ui'

import styles from './styles'
import { SearchContext } from 'utils/context/search'
import { LibraryContext } from 'utils/context/libraryContext'
import { messages } from 'utils/get-message'
import { formatSearchTabCount } from 'utils/search-utils'
import { getSectionLabel } from 'utils/sidebar-utils'
import { IconComponent } from 'utils/typings/types'

const hasFilterResults = (
  ocurrenceCount: Record<string, number | undefined>,
  filter: string
) => {
  const count = ocurrenceCount[filter]
  return typeof count === 'number' && count > 0
}

const SearchFilterTab = ({
  filter,
  label,
  Icon,
}: {
  filter: string
  label?: string
  Icon?: IconComponent
}) => {
  const { filterSelectedSection, changeFilterSelectedSection, ocurrenceCount } =
    useContext(SearchContext)
  const { locale } = useContext(LibraryContext)

  const count = ocurrenceCount[filter]
  const formattedCount = formatSearchTabCount(count)
  const isActive = filterSelectedSection === filter

  return (
    <Flex
      sx={styles.tab(isActive)}
      onClick={() => changeFilterSelectedSection(filter)}
      data-testid="doctype-filter-tab"
      data-filter={filter}
      data-active={String(isActive)}
    >
      {Icon ? <Icon sx={styles.tabIcon(isActive)} /> : null}
      <Text
        sx={styles.tabTitle(isActive)}
        data-testid="doctype-filter-tab-title"
      >
        {filter === ''
          ? messages[locale]['search_results.all'] || 'All results'
          : label || filter}
      </Text>
      {formattedCount !== undefined && (
        <Text
          sx={styles.tabCount(isActive)}
          data-testid="doctype-filter-tab-count"
        >
          {formattedCount}
        </Text>
      )}
    </Flex>
  )
}

const SearchFilterTabBar = () => {
  const { sidebarSections, sidebarDataMaster, locale } =
    useContext(LibraryContext)
  const { ocurrenceCount, filterSelectedSection, changeFilterSelectedSection } =
    useContext(SearchContext)
  const countsLoaded = Object.keys(ocurrenceCount).length > 0
  const visibleSections = sidebarSections
    .flat()
    .filter((section) => !section.isExternalLink)
    .filter(
      (section) => !countsLoaded || hasFilterResults(ocurrenceCount, section.id)
    )

  useEffect(() => {
    if (!countsLoaded || !filterSelectedSection) return
    if (!hasFilterResults(ocurrenceCount, filterSelectedSection)) {
      changeFilterSelectedSection('')
    }
  }, [
    countsLoaded,
    filterSelectedSection,
    ocurrenceCount,
    changeFilterSelectedSection,
  ])

  return (
    <Flex sx={styles.container} data-testid="doctype-filter-tab-bar">
      <SearchFilterTab filter="" />
      {visibleSections.map((section) => (
        <SearchFilterTab
          key={section.id}
          filter={section.id}
          label={getSectionLabel(section, sidebarDataMaster, locale)}
          Icon={section.Icon}
        />
      ))}
    </Flex>
  )
}

export default SearchFilterTabBar
