import {
  Header,
  HamburgerMenu as VtexHamburgerMenu,
  Box,
  IconCaret,
  Button,
} from '@vtex/brand-ui'
import styles from './styles'

import { useContext, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router.js'
import DocumentationCard from 'components/documentation-card'
import SidebarSection, { SidebarSectionProps } from 'components/sidebar-section'
import { updateOpenPage, getSectionLabel } from 'utils/sidebar-utils'
import { getDocumentationType } from 'utils/navigation-utils'
import { LibraryContext } from 'utils/context/libraryContext'
import MobileSearch from 'components/mobile-search'

function getRouteSlug(slug: string | string[] | undefined): string {
  if (typeof slug === 'string') return slug
  if (Array.isArray(slug)) return slug[0] ?? ''
  return ''
}

export interface HamburgerMenuProps {
  /** Array that contains the name of the sections in the menu that should be expanded. */
  parentsArray?: string[]
}

/** Hamburger Menu component, the menu uses the sidebar components internally, but it is only visible on the smaller breakpoints. */
const HamburgerMenu = ({ parentsArray = [] }: HamburgerMenuProps) => {
  const router = useRouter()
  const hamburgerRef = useRef<HTMLDivElement>(null)
  const context = useContext(LibraryContext)
  const {
    sidebarDataMaster,
    sidebarSectionHidden,
    activeSectionName,
    setActiveSectionName,
    setSidebarSectionHidden,
    hamburguerSections,
    locale,
  } = context

  const [userOpenedSection, setUserOpenedSection] = useState(false)
  const articleSlug = getRouteSlug(router.query.slug)
  const isListedArticle =
    parentsArray.length > 0 ||
    (Boolean(articleSlug) &&
      getDocumentationType(sidebarDataMaster, articleSlug) != null)
  const showNestedSidebar =
    Boolean(activeSectionName) &&
    !sidebarSectionHidden &&
    (userOpenedSection || isListedArticle || !articleSlug)

  const closeMenu = () => {
    const toggleButton = hamburgerRef.current?.querySelector<HTMLElement>(
      '[aria-expanded="true"]'
    )
    toggleButton?.click()
  }

  const openSection = (sectionId: string) => {
    setActiveSectionName(sectionId)
    setSidebarSectionHidden(false)
    setUserOpenedSection(true)
  }

  useEffect(() => {
    setUserOpenedSection(false)
  }, [articleSlug])

  useEffect(() => {
    router.events?.on('routeChangeStart', closeMenu)
    router.events?.on('hashChangeStart', closeMenu)

    return () => {
      router.events?.off('routeChangeStart', closeMenu)
      router.events?.off('hashChangeStart', closeMenu)
    }
  }, [router.events])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isDocument = (sections: any, documentID: string) => {
    let isDoc = false

    if (Array.isArray(sections)) {
      isDoc = sections.find((section) => section.documentation === documentID)
    }

    return isDoc
  }

  updateOpenPage({ parentsArray, context })

  return (
    <Header.ActionButton sx={styles.headerActions}>
      <MobileSearch onOpen={closeMenu} />
      <Box ref={hamburgerRef} sx={{ display: 'contents' }}>
        <VtexHamburgerMenu sx={styles.hamburgerContainer}>
          <Box sx={styles.backdrop} aria-hidden="true" onClick={closeMenu} />
          <VtexHamburgerMenu.Menu sx={styles.innerHambugerContainer}>
            <Box sx={styles.menuContainer}>
              <Box sx={styles.cardContainer}>
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
                      <Box sx={styles.innerCardContainer} key={card.id}>
                        <Box sx={styles.innerCardContent}>
                          <DocumentationCard
                            containerType="mobile"
                            {...card}
                            title={getSectionLabel(
                              card,
                              sidebarDataMaster,
                              locale
                            )}
                            onClick={() => {
                              if (isDocument(sidebarDataMaster, card.id)) {
                                openSection(card.id)
                              } else {
                                setActiveSectionName(card.id)
                              }
                            }}
                          />
                        </Box>
                        {isDocument(sidebarDataMaster, card.id) ? (
                          <Button
                            aria-label={'Open sidebar'}
                            size="regular"
                            variant="tertiary"
                            icon={() => (
                              <IconCaret direction="right" size={20} />
                            )}
                            sx={
                              activeSectionName === card.id && showNestedSidebar
                                ? styles.arrowIconActive
                                : styles.arrowIcon
                            }
                            onClick={() => openSection(card.id)}
                          />
                        ) : null}
                      </Box>
                    ))}
                  </Box>
                ))}
              </Box>
              <Box
                className={showNestedSidebar ? 'menuHidden' : ''}
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
      </Box>
    </Header.ActionButton>
  )
}

export default HamburgerMenu
