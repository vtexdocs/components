import { useRouter } from 'next/router.js'
import { Fragment, memo, useContext } from 'react'
import {
  Box,
  Flex,
  Link,
  Button,
  IconCaret,
  IconExternalLink,
} from '@vtex/brand-ui'

import MethodCategory from 'components/method-category'

import { isInActivePath, styleByLevelNormal, textStyle } from './functions'
import styles from './styles'
import { MethodType } from 'utils/typings/types'
import { LibraryContext } from 'utils/context/libraryContext'
import { getDocumentationType } from 'utils/navigation-utils'

export interface SidebarElement {
  name: string | { en: string; pt: string; es: string }
  slug: string | { en: string; pt: string; es: string }
  origin: string
  type: string
  method?: MethodType
  endpoint?: string
  children: SidebarElement[]
  /** When true, the category starts expanded instead of collapsed. */
  defaultOpen?: boolean
}

export interface SidebarProps {
  slugPrefix?: string
  items: SidebarElement[]
  subItemLevel: number
  /** Expand every branch, used while search/method filters are active. */
  forceOpen?: boolean
  isHamburgerMenu?: boolean
}

const SidebarElements = ({
  slugPrefix,
  items,
  subItemLevel,
  forceOpen = false,
  isHamburgerMenu = false,
}: SidebarProps) => {
  const {
    isEditorPreview,
    activeSidebarElement,
    sidebarElementStatus,
    toggleSidebarElementStatus,
    sidebarDataMaster,
    locale,
  } = useContext(LibraryContext)
  const router = useRouter()

  const isElementOpen = (slug: string, defaultOpen?: boolean) =>
    forceOpen ||
    (sidebarElementStatus.has(slug)
      ? sidebarElementStatus.get(slug)
      : !!defaultOpen)

  const handleClick = (
    e: { preventDefault: () => void },
    pathSuffix: string,
    slug: string
  ) => {
    e.preventDefault()
    const hasEndpointQuery = router.query.endpoint
    const href = getHref(slugPrefix || '', pathSuffix, slug)
    router.push(href, href, { locale }).then(() => {
      if (hasEndpointQuery) router.reload()
    })
  }

  const getHref = (slugPrefix: string, pathSuffix: string, slug: string) => {
    const validLocales = ['pt', 'es']
    const localePrefix =
      locale && validLocales.includes(locale) ? `/${locale}` : ''
    const href =
      slugPrefix === 'docs/api-reference'
        ? `/${slugPrefix}/${slug}/${pathSuffix}`
        : `${localePrefix}/${slugPrefix}/${slug}`
    return href.replaceAll('//', '/')
  }

  const ElementRoot = ({
    slug,
    name,
    method,
    endpoint,
    children,
    defaultOpen,
  }: SidebarElement) => {
    const localizedName: string = typeof name === 'string' ? name : name[locale]
    const localizedSlug: string = typeof slug === 'string' ? slug : slug[locale]
    const isExpandable = children.length > 0
    const isOpen = isElementOpen(localizedSlug, defaultOpen)
    const pathSuffix = method ? `#${method.toLowerCase()}-${endpoint}` : ''
    const activeItem = method ? `${localizedSlug}${pathSuffix}` : localizedSlug
    const isArrowActive = isInActivePath(
      { slug, method, endpoint, children },
      activeSidebarElement,
      locale
    )
    const documentationType = getDocumentationType(
      sidebarDataMaster,
      localizedSlug
    )
    return (
      <Box
        sx={
          isHamburgerMenu
            ? styles.elementContainerHamburger
            : styles.elementContainer
        }
      >
        <Flex sx={styleByLevelNormal(isHamburgerMenu)}>
          {isExpandable ? (
            <Button
              aria-label={isOpen ? 'Collapse category' : 'Expand category'}
              size="regular"
              variant="tertiary"
              sx={
                isHamburgerMenu
                  ? isArrowActive
                    ? styles.arrowIconActiveHamburger
                    : styles.arrowIconHamburger
                  : isArrowActive
                  ? styles.arrowIconActive
                  : styles.arrowIcon
              }
              icon={() => (
                <IconCaret
                  direction={isOpen ? 'down' : 'right'}
                  size={16}
                />
              )}
              onClick={() => toggleSidebarElementStatus(localizedSlug, isOpen)}
            />
          ) : (
            <Box
              sx={
                isHamburgerMenu
                  ? styles.arrowIconSpacerHamburger
                  : styles.arrowIconSpacer
              }
              aria-hidden="true"
            />
          )}
          {documentationType !== 'category' && documentationType !== 'link' ? (
            <Link
              sx={textStyle(
                activeSidebarElement === activeItem,
                isHamburgerMenu,
                isExpandable
              )}
              onClick={(e: { preventDefault: () => void }) => {
                if (!isEditorPreview) {
                  handleClick(e, pathSuffix, localizedSlug)
                }
                toggleSidebarElementStatus(activeItem)
              }}
              href={getHref(slugPrefix || '', pathSuffix, localizedSlug)}
              target={isEditorPreview === true ? '_blank' : '_self'}
              locale={locale}
            >
              {method && (
                <MethodCategory
                  sx={styles.methodBox}
                  active={activeSidebarElement === activeItem}
                  origin="sidebar"
                  method={method}
                />
              )}
              {localizedName}
            </Link>
          ) : documentationType === 'link' ? (
            <Link
              href={localizedSlug}
              target="_blank"
              sx={textStyle(false, isHamburgerMenu, false)}
            >
              <IconExternalLink size={16} sx={{ marginRight: '10px' }} />
              {localizedName}
            </Link>
          ) : (
            <Box
              sx={textStyle(
                activeSidebarElement === localizedSlug,
                isHamburgerMenu,
                isExpandable
              )}
              onClick={() => {
                toggleSidebarElementStatus(localizedSlug, isOpen)
              }}
            >
              {method && (
                <MethodCategory
                  sx={styles.methodBox}
                  active={activeSidebarElement === localizedSlug}
                  origin="sidebar"
                  method={method}
                />
              )}
              {localizedName}
            </Box>
          )}
        </Flex>
      </Box>
    )
  }

  const ElementChildren = ({ slug, children, defaultOpen }: SidebarElement) => {
    const isExpandable = children.length > 0
    // const newPathPrefix =
    //   slugPrefix === 'api-reference' ? `/api-reference/${slug}` : slugPrefix

    const localizedSlug: string = typeof slug === 'string' ? slug : slug[locale]
    return isExpandable && isElementOpen(localizedSlug, defaultOpen) ? (
      <Box
        sx={
          subItemLevel === 0
            ? isHamburgerMenu
              ? styles.nestedGroupHamburgerFirst
              : styles.nestedGroupFirst
            : isHamburgerMenu
            ? styles.nestedGroupHamburger
            : styles.nestedGroup
        }
      >
        <SidebarElements
          slugPrefix={slugPrefix}
          items={children}
          subItemLevel={subItemLevel + 1}
          forceOpen={forceOpen}
          isHamburgerMenu={isHamburgerMenu}
          key={`${localizedSlug}sd`}
        />
      </Box>
    ) : null
  }

  return (
    <Box className="sidebar-component">
      {items?.map((item, index) => {
        const key =
          typeof item.slug === 'string'
            ? String(item.slug) + String(index)
            : String(item.slug[locale]) + String(index)
        const slug =
          typeof item.slug === 'string'
            ? `${item.slug}`
            : `${item.slug[locale]}`

        return (
          <Fragment key={String(key)}>
            <ElementRoot {...item} slug={slug} />
            <Box>
              <ElementChildren {...item} slug={slug} />
            </Box>
            {subItemLevel == 0 && !isHamburgerMenu ? (
              <Box sx={styles.sectionDivider}>
                <hr />
              </Box>
            ) : null}
          </Fragment>
        )
      })}
    </Box>
  )
}

export default memo(SidebarElements)
