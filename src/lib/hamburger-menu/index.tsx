import {
  Header,
  HamburgerMenu as VtexHamburgerMenu,
  Box,
  IconCaret,
  Button,
} from '@vtex/brand-ui'
import styles from './styles'

import { useContext } from 'react'
import DocumentationCard from 'components/documentation-card'
import SidebarSection, { SidebarSectionProps } from 'components/sidebar-section'
import { updateOpenPage } from 'utils/sidebar-utils'
import { LibraryContext } from 'utils/context/libraryContext'
import SearchInput from 'components/search-input'

export interface HamburgerMenuProps {
  /** Array that contains the name of the sections in the menu that should be expanded. */
  parentsArray?: string[]
}

/** Hamburger Menu component, the menu uses the sidebar components internally, but it is only visible on the smaller breakpoints. */
const HamburgerMenu = ({ parentsArray = [] }: HamburgerMenuProps) => {
  const context = useContext(LibraryContext)
  const {
    sidebarDataMaster,
    sidebarSectionHidden,
    activeSectionName,
    setActiveSectionName,
    setSidebarSectionHidden,
    hamburguerSections,
  } = context

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isDocument = (sections: any, documentID: string) => {
    let isDoc = false

    if (Array.isArray(sections)) {
      isDoc = sections.find((section) => section.documentation === documentID)
    }

    return isDoc
  }

  updateOpenPage({ parentsArray, context })
  console.log('activeSectionName --------------------')
  console.log('.../hamburger-menu/index.tsx --------------------')
  console.log(activeSectionName)

  return (
    <Header.ActionButton>
      <VtexHamburgerMenu sx={styles.hamburgerContainer}>
        <VtexHamburgerMenu.Menu sx={styles.innerHambugerContainer}>
          <Box sx={styles.menuContainer}>
            <Box sx={styles.cardContainer}>
              <Box sx={styles.hamburgerSearchContainer}>
                <SearchInput />
              </Box>
              {hamburguerSections.map((section, id) => (
                <Box
                  sx={
                    id > 0
                      ? styles.updatesContainer
                      : styles.documentationContainer
                  }
                  key={id}
                  data-cy="dropdown-menu-first-section"
                >
                  {section.map((card) => (
                    <Box sx={styles.innerCardContainer} key={card.title}>
                      <DocumentationCard containerType="mobile" {...card} />
                      {isDocument(sidebarDataMaster, card.id) ? (
                        <Button
                          aria-label={'Open sidebar'}
                          size="regular"
                          variant="tertiary"
                          icon={() => <IconCaret direction="right" size={32} />}
                          sx={
                            activeSectionName === card.id &&
                            !sidebarSectionHidden
                              ? styles.arrowIconActive
                              : styles.arrowIcon
                          }
                          onClick={() => {
                            setActiveSectionName(card.id)
                            setSidebarSectionHidden(false)
                          }}
                        />
                      ) : null}
                    </Box>
                  ))}
                </Box>
              ))}
            </Box>
            <Box
              className={
                sidebarSectionHidden || !activeSectionName ? '' : 'menuHidden'
              }
              sx={styles.sideMenuContainer}
            >
              {activeSectionName ? (
                <SidebarSection
                  isHamburgerMenu={true}
                  {...(Array.isArray(sidebarDataMaster)
                    ? sidebarDataMaster?.find(
                        (section: SidebarSectionProps) =>
                          section.documentation === activeSectionName
                      )
                    : null)}
                />
              ) : null}
            </Box>
          </Box>
        </VtexHamburgerMenu.Menu>
      </VtexHamburgerMenu>
    </Header.ActionButton>
  )
}

export default HamburgerMenu
