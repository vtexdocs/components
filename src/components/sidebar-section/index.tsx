// Sidebar Section
import { Flex, Box, Text, Button } from '@vtex/brand-ui'
import { useContext, useMemo, useState } from 'react'

import styles from './styles'
import { SidebarElement } from '../sidebar-elements'
import SectionFilter from '../sidebar-section-filter'
import SideBarElements from '../sidebar-elements'
import SearchIcon from 'components/icons/search-icon'
import SideBarToggleIcon from 'components/icons/sidebar-toggle-icon'
import ArrowLeftIcon from 'components/icons/arrow-left-icon'
import { getIcon } from 'utils/sidebar-utils'
import { LibraryContext } from 'utils/context/libraryContext'
import { messages } from 'utils/get-message'

export interface SidebarSectionProps {
  documentation: string
  name: string | { en: string, es: string, pt: string }
  categories: SidebarElement[]
  slugPrefix: string
  isHamburgerMenu: boolean
}

const SidebarSection = ({
  documentation,
  name,
  categories,
  slugPrefix,
  isHamburgerMenu = false,
}: SidebarSectionProps) => {
  const [searchValue, setSearchValue] = useState('')
  const {
    isEditorPreview,
    sidebarSectionHidden,
    setSidebarSectionHidden,
    sidebarSections,
    locale
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

  const filteredResult = useMemo(() => {
    if (!filterStatus && searchValue === '') return categories

    const dataCopy = JSON.parse(JSON.stringify(categories))

    const filteredCategories = dataCopy
      .map((category: SidebarElement) => {
        category.children = category.children
          .map((subcategory) => {
            subcategory.children = subcategory.children.filter((endpoint) => {
              const hasMethodFilter =
                !filterStatus ||
                methodFilterList.find(
                  (methodFilter) => methodFilter.name === endpoint.method
                )?.active
              const hasInputFilter =
                searchValue === '' ||
                (typeof endpoint.name === 'string'
                  ? endpoint.name
                  : endpoint.name[locale]
                )
                  .toLowerCase()
                  .includes(searchValue.toLowerCase())
              return hasMethodFilter && hasInputFilter
            })
            return subcategory
          })
          .filter(
            (subcategory) =>
              subcategory.children.length > 0 ||
              (subcategory.type === 'markdown' &&
                (typeof subcategory.name === 'string'
                  ? subcategory.name
                  : subcategory.name[locale]
                )
                  .toLowerCase()
                  .includes(searchValue.toLowerCase()))
          )
        return category
      })
      .filter((category: SidebarElement) => category.children.length > 0)
    return filteredCategories
  }, [filterStatus, methodFilterList, categories, searchValue])

  const DocIcon = getIcon(documentation, sidebarSections)

  let localizedSectionTitle = ''

  if (!categories || categories.length <= 0) {
    return <></>
  } else {
    localizedSectionTitle = typeof(name) === 'string' ? name : name[locale]
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
          {DocIcon && <DocIcon />}
          <Text sx={styles.sidebarTitle}>{localizedSectionTitle}</Text>
        </Flex>
        <Box sx={styles.sidebarContainerBody}>
          <Flex sx={styles.searchBox}>
            <SearchIcon sx={styles.searchIcon} />
            <input
              style={styles.searchInput}
              className="searchComponent"
              type="text"
              placeholder={
                messages[locale]['sidebar_search.placeholder'] +
                ' ' +
                localizedSectionTitle
              }
              value={searchValue}
              onChange={(e) => setSearchValue(e.currentTarget.value)}
            />
          </Flex>
          {documentation == 'API Reference' && (
            <SectionFilter
              methodFilterList={methodFilterList}
              setMethodFilter={setMethodFilterList}
            />
          )}
        </Box>
        <Box sx={styles.sidebarContainerBody}>
          <SideBarElements
            items={filteredResult}
            subItemLevel={0}
            slugPrefix={slugPrefix}
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
          <Flex sx={styles.searchBox}>
            <SearchIcon sx={styles.searchIcon} />
            <input
              style={styles.searchInput}
              className="searchComponent"
              type="text"
              placeholder={
                messages[locale]['sidebar_search.placeholder'] +
                ' ' +
                localizedSectionTitle
              }
              value={searchValue}
              onChange={(e) => setSearchValue(e.currentTarget.value)}
            />
          </Flex>
        </Box>
        {documentation == 'API Reference' && (
          <SectionFilter
            methodFilterList={methodFilterList}
            setMethodFilter={setMethodFilterList}
          />
        )}
        <Box sx={styles.sidebarContainerBody}>
          <SideBarElements
            items={filteredResult}
            subItemLevel={0}
            slugPrefix={slugPrefix}
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

export default SidebarSection
