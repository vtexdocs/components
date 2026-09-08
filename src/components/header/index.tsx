import * as BrandUI from '@vtex/brand-ui'
import { Link as VtexLink, Flex, Text, Box } from '@vtex/brand-ui'
import { useContext, useEffect, useRef, useState, type ReactNode } from 'react'
import { useRouter } from 'next/router.js'
import HamburgerMenu from 'lib/hamburger-menu'
import AskAssistant, {
  type AskAssistantProps,
} from 'components/ask-assistant'
import SearchInput from 'components/search-input'
import VTEXDevPortalIcon from 'components/icons/vtex-devportal-icon'
import VTEXHelpCenterIcon from 'components/icons/vtex-helpcenter-icon'
import GridIcon from 'components/icons/grid-icon'
import LongArrowIcon from 'components/icons/long-arrow-icon'
import { LibraryContext } from 'utils/context/libraryContext'
import { messages } from 'utils/get-message'
import type { Section } from 'utils/typings/types'
import DropdownMenu from './dropdown-menu'
import styles from './styles'

const HeaderBrand = BrandUI.Header

export type HeaderVariant = 'helpcenter' | 'devportal'

export type HeaderProps = {
  /**
   * Which site is rendering the Header. Controls the default logo.
   * Help Center is the default; Developer Portal should pass `devportal`.
   */
  variant?: HeaderVariant
  /** When true, the docs dropdown shows `editorSections` instead of docs sections. */
  isEditor?: boolean
  /**
   * Sections shown in the docs dropdown. Defaults to the hamburger sections
   * from LibraryContext.
   */
  dropdownSections?: Section[][]
  /** Sections shown in the dropdown when `isEditor` is true. */
  editorSections?: Section[]
  /** Slot rendered above the header bar (e.g. AnnouncementBar). */
  announcement?: ReactNode
  homeHref?: string
  /** When set, shows the feedback link in the header. Hidden otherwise. */
  feedbackUrl?: string
  /** Overrides the default logo for the selected variant. */
  logo?: ReactNode
  /**
   * App-specific items rendered after the docs dropdown (e.g. Help Center
   * announcements). Hidden on small viewports together with RightLinks.
   */
  extraRightLinks?: ReactNode
  /** App-specific locale switcher rendered next to the hamburger menu. */
  localeSwitcher?: ReactNode
  /** Parent slugs of the current article, used to expand the mobile sidebar. */
  parentsArray?: string[]
  /**
   * When true, renders AskAssistant next to the search input on desktop.
   * Search stays hidden on small viewports (use the search icon). On mobile
   * the assistant is a floating action button in the bottom-right corner.
   */
  showAssistant?: boolean
  /** Props forwarded to AskAssistant when `showAssistant` is true. */
  assistant?: AskAssistantProps
}

const Header = ({
  variant = 'helpcenter',
  isEditor = false,
  dropdownSections,
  editorSections = [],
  announcement,
  homeHref = '/',
  feedbackUrl,
  logo,
  extraRightLinks,
  localeSwitcher,
  parentsArray,
  showAssistant = false,
  assistant,
}: HeaderProps) => {
  const router = useRouter()
  const { locale, hamburguerSections } = useContext(LibraryContext)
  const localizedMessages = messages[locale] ?? messages.en

  const modalOpen = useRef(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const headerElement = useRef<HTMLElement | null>(null)

  const docsSections = dropdownSections ?? hamburguerSections
  const menuSections =
    isEditor && editorSections.length > 0 ? [editorSections] : docsSections

  const defaultLogo =
    variant === 'devportal' ? (
      <VTEXDevPortalIcon sx={styles.logoSize} />
    ) : (
      <VTEXHelpCenterIcon sx={styles.logoSize} />
    )

  useEffect(() => {
    const body = document.body

    const observer = new MutationObserver(() => {
      modalOpen.current = !modalOpen.current
      if (headerElement.current) {
        if (modalOpen.current) {
          const headerHeight = headerElement.current.offsetHeight
          headerElement.current.style.top = `-${headerHeight}px`
        } else {
          headerElement.current.style.top = '0'
        }
      }
    })
    observer.observe(body, {
      attributeFilter: ['style'],
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setShowDropdown(false)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const hideDropdown = () => {
      setShowDropdown(false)
    }

    router.events?.on('routeChangeStart', hideDropdown)
    return () => {
      router.events?.off('routeChangeStart', hideDropdown)
    }
  }, [router.events])

  return (
    <Box ref={headerElement} sx={styles.headerContainer} data-docs-header>
      {announcement ?? <div />}
      <HeaderBrand sx={styles.headerBrand}>
        <VtexLink
          aria-label={localizedMessages['header.home_aria']}
          href={homeHref}
          sx={styles.headerBrandLink}
        >
          {logo ?? defaultLogo}
        </VtexLink>

        <Box sx={styles.searchRow}>
          <Box sx={styles.searchContainer}>
            <SearchInput />
          </Box>
          {showAssistant ? (
            <Box sx={styles.assistantSlot}>
              <AskAssistant {...assistant} />
            </Box>
          ) : null}
        </Box>

        <HeaderBrand.RightLinks sx={styles.rightLinks}>
          <Flex
            sx={styles.dropdownContainer}
            onMouseOver={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <Flex sx={styles.dropdownButton(showDropdown)}>
              <GridIcon />
              <Text sx={styles.rightButtonsText} data-cy="docs-dropdown">
                {isEditor
                  ? localizedMessages['header.admin_tools']
                  : localizedMessages['header.docs']}
              </Text>
            </Flex>

            {showDropdown && <DropdownMenu sections={menuSections} />}
          </Flex>

          {extraRightLinks ? (
            <Box sx={styles.extraRightLinks}>{extraRightLinks}</Box>
          ) : null}

          {feedbackUrl ? (
            <VtexLink
              sx={styles.rightLinksItem}
              href={feedbackUrl}
              target="_blank"
              rel="noreferrer"
              title={localizedMessages['header.feedback']}
              aria-label={localizedMessages['header.feedback']}
            >
              <LongArrowIcon />
              <Text sx={styles.rightButtonsText}>
                {localizedMessages['header.feedback']}
              </Text>
            </VtexLink>
          ) : null}
        </HeaderBrand.RightLinks>
        {localeSwitcher ? (
          <Flex sx={styles.headerEndActions}>
            <Box sx={styles.hamburgerMenuToggle}>
              <HamburgerMenu parentsArray={parentsArray} />
            </Box>
            <Box sx={styles.localeSwitcherSlot}>{localeSwitcher}</Box>
          </Flex>
        ) : (
          <Box sx={styles.hamburgerMenuToggle}>
            <HamburgerMenu parentsArray={parentsArray} />
          </Box>
        )}
      </HeaderBrand>
    </Box>
  )
}

export default Header
export { default as DropdownMenu } from './dropdown-menu'
export type { DropdownMenuProps } from './dropdown-menu'
