import * as BrandUI from '@vtex/brand-ui'
import { Link as VtexLink, Flex, Text, Box } from '@vtex/brand-ui'
import { useContext, useEffect, useRef, useState, type ReactNode } from 'react'
import { useRouter } from 'next/router.js'
import HamburgerMenu from 'lib/hamburger-menu'
import SearchInput from 'components/search-input'
import VTEXDevPortalIcon from 'components/icons/vtex-devportal-icon'
import VTEXHelpCenterIcon from 'components/icons/vtex-helpcenter-icon'
import GridIcon from 'components/icons/grid-icon'
import LongArrowIcon from 'components/icons/long-arrow-icon'
import { LibraryContext } from 'utils/context/libraryContext'
import { messages } from 'utils/get-message'
import { getFeedbackURL } from 'utils/get-url'
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
  feedbackUrl?: string
  /** Overrides the default logo for the selected variant. */
  logo?: ReactNode
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
}: HeaderProps) => {
  const router = useRouter()
  const { locale, hamburguerSections } = useContext(LibraryContext)
  const localizedMessages = messages[locale] ?? messages.en

  const lastScroll = useRef(0)
  const modalOpen = useRef(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const headerElement = useRef<HTMLElement | null>(null)

  const resolvedFeedbackUrl = feedbackUrl ?? getFeedbackURL()
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
          const headerHeight = headerElement.current.children[0].clientHeight
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
      if (headerElement.current && !modalOpen.current) {
        const headerHeight = headerElement.current.children[0].clientHeight
        if (
          window.scrollY > headerHeight &&
          window.scrollY > lastScroll.current
        ) {
          headerElement.current.style.top = `-${headerHeight}px`
        } else {
          headerElement.current.style.top = '0'
        }
        lastScroll.current = window.scrollY
      }
    }

    window.removeEventListener('scroll', onScroll)
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
    <Box ref={headerElement} sx={styles.headerContainer}>
      {announcement ?? <div />}
      <HeaderBrand sx={styles.headerBrand}>
        <VtexLink
          aria-label={localizedMessages['header.home_aria']}
          href={homeHref}
          sx={styles.headerBrandLink}
        >
          {logo ?? defaultLogo}
        </VtexLink>

        <Box sx={styles.searchContainer}>
          <SearchInput />
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

          <VtexLink
            sx={styles.rightLinksItem}
            href={resolvedFeedbackUrl}
            target="_blank"
          >
            <LongArrowIcon />
            <Text sx={styles.rightButtonsText}>
              {localizedMessages['header.feedback']}
            </Text>
          </VtexLink>
        </HeaderBrand.RightLinks>
        <Box sx={styles.hamburgerMenuToggle}>
          <HamburgerMenu />
        </Box>
      </HeaderBrand>
    </Box>
  )
}

export default Header
export { default as DropdownMenu } from './dropdown-menu'
export type { DropdownMenuProps } from './dropdown-menu'
