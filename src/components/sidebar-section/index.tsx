// Sidebar Section
import { Flex, Box, Text, Button } from '@vtex/brand-ui'
import {
  memo,
  useContext,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import styles from './styles'
import { SidebarElement } from '../sidebar-elements'
import SectionFilter from '../sidebar-section-filter'
import SideBarElements from '../sidebar-elements'
import SearchIcon from 'components/icons/search-icon'
import CloseIcon from 'components/icons/close-icon'
import SideBarToggleIcon from 'components/icons/sidebar-toggle-icon'
import ArrowLeftIcon from 'components/icons/arrow-left-icon'
import { getIcon } from 'utils/sidebar-utils'
import { LibraryContext } from 'utils/context/libraryContext'
import { messages } from 'utils/get-message'

export interface SidebarSectionProps {
  documentation: string
  name: string | { en: string; es: string; pt: string }
  categories: SidebarElement[]
  slugPrefix: string
  isHamburgerMenu: boolean
}

type MethodFilter = {
  name: string
  active: boolean
}

function localizedName(
  name: SidebarElement['name'],
  locale: 'en' | 'pt' | 'es'
): string {
  return typeof name === 'string' ? name : name[locale]
}

function matchesQuery(
  name: SidebarElement['name'],
  query: string,
  locale: 'en' | 'pt' | 'es'
): boolean {
  if (!query) return true
  return localizedName(name, locale).toLowerCase().includes(query)
}

function matchesMethodFilter(
  node: SidebarElement,
  methodFilterList: MethodFilter[],
  filterStatus: boolean
): boolean {
  if (!filterStatus || !node.method) return true
  return methodFilterList.some(
    (methodFilter) => methodFilter.name === node.method && methodFilter.active
  )
}

function filterSidebarNode(
  node: SidebarElement,
  query: string,
  methodFilterList: MethodFilter[],
  filterStatus: boolean,
  locale: 'en' | 'pt' | 'es'
): SidebarElement | null {
  const selfMatches =
    matchesQuery(node.name, query, locale) &&
    matchesMethodFilter(node, methodFilterList, filterStatus)
  const children = node.children || []

  if (selfMatches && !filterStatus) {
    return node
  }

  const filteredChildren = children
    .map((child) =>
      filterSidebarNode(
        child,
        selfMatches ? '' : query,
        methodFilterList,
        filterStatus,
        locale
      )
    )
    .filter((child): child is SidebarElement => child != null)

  if (filteredChildren.length > 0) {
    return { ...node, children: filteredChildren }
  }

  if (selfMatches && children.length === 0) {
    return node
  }

  return null
}

function scrollDesktopSidebarToActiveItem(container: HTMLElement) {
  const activeEl = container.querySelector<HTMLElement>(
    '[data-sidebar-active="true"]'
  )
  if (!activeEl) return false

  const containerRect = container.getBoundingClientRect()
  const elRect = activeEl.getBoundingClientRect()
  const isFullyVisible =
    elRect.top >= containerRect.top && elRect.bottom <= containerRect.bottom

  if (isFullyVisible) return true

  const topInsideContainer =
    elRect.top - containerRect.top + container.scrollTop
  const centered =
    topInsideContainer - container.clientHeight / 2 + elRect.height / 2

  container.scrollTop = Math.max(0, centered)
  return true
}

function filterSidebarCategories(
  categories: SidebarElement[] | undefined,
  searchValue: string,
  methodFilterList: MethodFilter[],
  filterStatus: boolean,
  locale: 'en' | 'pt' | 'es'
): SidebarElement[] | undefined {
  if (!categories?.length || (!filterStatus && searchValue === '')) {
    return categories
  }

  const query = searchValue.toLowerCase()

  return categories
    .map((category) =>
      filterSidebarNode(category, query, methodFilterList, filterStatus, locale)
    )
    .filter((category): category is SidebarElement => category != null)
}

const SidebarSearchBox = ({
  value,
  placeholder,
  onChange,
}: {
  value: string
  placeholder: string
  onChange: (value: string) => void
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { locale } = useContext(LibraryContext)
  const clearLabel = messages[locale]['search_input.clear'] || 'Clear search'

  return (
    <Flex sx={styles.searchBox}>
      <SearchIcon sx={styles.searchIcon} />
      <input
        ref={inputRef}
        style={styles.searchInput}
        className="searchComponent"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
      {value ? (
        <Flex
          as="button"
          type="button"
          sx={styles.clearButton}
          aria-label={clearLabel}
          title={clearLabel}
          onClick={() => {
            onChange('')
            inputRef.current?.focus()
          }}
        >
          <CloseIcon sx={styles.clearIcon} />
        </Flex>
      ) : null}
    </Flex>
  )
}

const SidebarSection = ({
  documentation,
  name,
  categories,
  slugPrefix,
  isHamburgerMenu = false,
}: SidebarSectionProps) => {
  const [searchValue, setSearchValue] = useState('')
  const sidebarBoxRef = useRef<HTMLDivElement>(null)
  const {
    isEditorPreview,
    sidebarSectionHidden,
    setSidebarSectionHidden,
    sidebarSections,
    activeSidebarElement,
    locale,
  } = useContext(LibraryContext)
  const [methodFilterList, setMethodFilterList] = useState([
    { name: 'POST', active: false },
    { name: 'GET', active: false },
    { name: 'PUT', active: false },
    { name: 'DELETE', active: false },
    { name: 'PATCH', active: false },
  ])

  const filterStatus = methodFilterList.some(
    (methodFilter) => methodFilter.active
  )

  const filteredResult = useMemo(
    () =>
      filterSidebarCategories(
        categories,
        searchValue,
        methodFilterList,
        filterStatus,
        locale
      ),
    [filterStatus, methodFilterList, categories, searchValue, locale]
  )

  useLayoutEffect(() => {
    if (isHamburgerMenu || !activeSidebarElement) return
    const container = sidebarBoxRef.current
    if (!container) return

    const tryScroll = () => scrollDesktopSidebarToActiveItem(container)
    if (tryScroll()) return

    const observer = new MutationObserver(() => {
      if (tryScroll()) observer.disconnect()
    })
    observer.observe(container, { childList: true, subtree: true })
    const timeout = window.setTimeout(() => observer.disconnect(), 1500)

    return () => {
      observer.disconnect()
      window.clearTimeout(timeout)
    }
  }, [activeSidebarElement, filteredResult, isHamburgerMenu])

  const DocIcon = getIcon(documentation, sidebarSections)

  let localizedSectionTitle = ''

  if (!categories || categories.length <= 0) {
    return <></>
  } else {
    localizedSectionTitle = typeof name === 'string' ? name : name[locale]
  }

  return isHamburgerMenu ? (
    <Box
      className={sidebarSectionHidden ? 'active' : ''}
      sx={styles.sidebarContainerHamburger}
    >
      <Box
        className={sidebarSectionHidden ? 'sidebarHide' : ''}
        sx={styles.sidebarContainerBoxHamburger}
      >
        <Flex sx={styles.sidebarContainerTitle}>
          <Button
            sx={styles.arrowButton}
            aria-label={'Go back'}
            size="small"
            variant="tertiary"
            icon={() => <ArrowLeftIcon size={24} />}
            onClick={() => {
              setSidebarSectionHidden(true)
            }}
          />
          {DocIcon && <DocIcon size={24} sx={styles.sidebarTitleIcon} />}
          <Text sx={styles.sidebarTitleHamburger}>{localizedSectionTitle}</Text>
        </Flex>
        {documentation == 'API Reference' && (
          <Box sx={styles.sidebarContainerFilterHamburger}>
            <SectionFilter
              isHamburgerMenu
              methodFilterList={methodFilterList}
              setMethodFilter={setMethodFilterList}
            />
          </Box>
        )}
        <Box sx={styles.sidebarContainerBodyHamburger}>
          <SideBarElements
            items={filteredResult ?? []}
            subItemLevel={0}
            slugPrefix={slugPrefix}
            forceOpen={searchValue !== '' || filterStatus}
            isHamburgerMenu
          />
        </Box>
      </Box>
    </Box>
  ) : (
    <Box
      className={sidebarSectionHidden ? 'active' : ''}
      sx={styles.sidebarContainer}
    >
      <Box
        ref={sidebarBoxRef}
        className={sidebarSectionHidden ? 'sidebarHide' : ''}
        sx={styles.sidebarContainerBox}
        data-cy="sidebar-section"
      >
        <Box sx={styles.sidebarContainerHeader}>
          {isEditorPreview && (
            <Text sx={styles.previewMode}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="72"
                height="72"
                viewBox="0 0 72 72"
                fill="none"
              >
                <circle cx="36" cy="36" r="36" fill="#FFB100" />
                <path
                  d="M40.4202 22.6818H31.8152V42.6377H40.4202V22.6818Z"
                  fill="white"
                />
                <path
                  d="M36.1177 54.6113C38.4939 54.6113 40.4202 52.8244 40.4202 50.6201C40.4202 48.4158 38.4939 46.6289 36.1177 46.6289C33.7415 46.6289 31.8152 48.4158 31.8152 50.6201C31.8152 52.8244 33.7415 54.6113 36.1177 54.6113Z"
                  fill="white"
                />
              </svg>
              PREVIEW MODE
            </Text>
          )}
          <Text sx={styles.sidebarTitle}>{localizedSectionTitle}</Text>
          <SidebarSearchBox
            value={searchValue}
            placeholder={
              messages[locale]['sidebar_search.placeholder'] +
              ' ' +
              localizedSectionTitle
            }
            onChange={setSearchValue}
          />
        </Box>
        {documentation == 'API Reference' && (
          <SectionFilter
            methodFilterList={methodFilterList}
            setMethodFilter={setMethodFilterList}
          />
        )}
        <Box sx={styles.sidebarContainerBody}>
          <SideBarElements
            items={filteredResult ?? []}
            subItemLevel={0}
            slugPrefix={slugPrefix}
            forceOpen={searchValue !== '' || filterStatus}
          />
        </Box>
      </Box>
      <Flex
        className="toggleIcon"
        sx={
          sidebarSectionHidden
            ? styles.toggleIconBoxActive
            : styles.toggleIconBox
        }
      >
        <SideBarToggleIcon
          onClick={() => {
            setSidebarSectionHidden(
              (sidebarSectionHidden) => !sidebarSectionHidden
            )
          }}
          sx={sidebarSectionHidden ? styles.toggleIcon : {}}
        />
      </Flex>
    </Box>
  )
}

export default memo(SidebarSection)
