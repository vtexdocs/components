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

import {
  HighlightedText,
  isInActivePath,
  styleByLevelNormal,
  textStyle,
} from './functions'
import styles from './styles'
import { MethodType } from 'utils/typings/types'
import { LibraryContext } from 'utils/context/libraryContext'
import { getDocumentationType } from 'utils/navigation-utils'

export interface SidebarElement {
  name: string | { en: string; pt: string; es: string }
  /** Optional for dividers; when present, it is only a stable id. */
  slug: string | { en: string; pt: string; es: string }
  origin?: string
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
  highlightQuery?: string
  /** Set when rendering the children of a divider, which own the section rule. */
  insideDivider?: boolean
}

const SidebarElements = ({
  slugPrefix,
  items,
  subItemLevel,
  forceOpen = false,
  isHamburgerMenu = false,
  highlightQuery = '',
  insideDivider = false,
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
  const navigationLocale = router.locale || locale

  const isElementOpen = (slug: string, defaultOpen?: boolean) =>
    forceOpen ||
    (sidebarElementStatus.has(slug)
      ? sidebarElementStatus.get(slug)
      : !!defaultOpen)

  const getPath = (prefix: string, pathSuffix: string, slug: string) => {
    const href =
      prefix === 'docs/api-reference'
        ? `/${prefix}/${slug}/${pathSuffix}`
        : `/${prefix}/${slug}`
    return href.replaceAll('//', '/')
  }

  const getHref = (prefix: string, pathSuffix: string, slug: string) => {
    const path = getPath(prefix, pathSuffix, slug)
    const localePrefix =
      navigationLocale && navigationLocale !== 'en'
        ? `/${navigationLocale}`
        : ''
    return `${localePrefix}${path}`.replaceAll('//', '/')
  }

  const handleClick = (
    e: { preventDefault: () => void },
    pathSuffix: string,
    slug: string
  ) => {
    e.preventDefault()
    const hasEndpointQuery = router.query.endpoint
    const path = getPath(slugPrefix || '', pathSuffix, slug)
    // Do not put the locale in both the path and the locale option. That makes
    // Next/Netlify treat shared slugs (e.g. amazon in en/es/pt) as English.
    router.push(path, undefined, { locale: navigationLocale }).then(() => {
      if (hasEndpointQuery) router.reload()
    })
  }

  const ElementDivider = ({ name }: Pick<SidebarElement, 'name'>) => {
    const localizedName: string = typeof name === 'string' ? name : name[locale]
    return (
      <Box
        as="div"
        role="separator"
        aria-label={localizedName}
        data-sidebar-divider="true"
        sx={
          isHamburgerMenu ? styles.sectionLabelHamburger : styles.sectionLabel
        }
      >
        <Flex sx={styleByLevelNormal(isHamburgerMenu)}>
          <Box
            sx={
              isHamburgerMenu
                ? styles.arrowIconSpacerHamburger
                : styles.arrowIconSpacer
            }
            aria-hidden="true"
          />
          <Box as="span" sx={styles.sectionLabelText}>
            {localizedName}
          </Box>
        </Flex>
      </Box>
    )
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
    const localizedSlug: string =
      typeof slug === 'string' ? slug : slug?.[locale] || ''
    const isExpandable = (children || []).length > 0
    const isOpen = isElementOpen(localizedSlug, defaultOpen)
    const pathSuffix = method ? `#${method.toLowerCase()}-${endpoint}` : ''
    const activeItem = method ? `${localizedSlug}${pathSuffix}` : localizedSlug
    const isActive = activeSidebarElement === activeItem
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
        data-sidebar-active={isActive ? 'true' : undefined}
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
                <IconCaret direction={isOpen ? 'down' : 'right'} size={16} />
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
              sx={textStyle(isActive, isHamburgerMenu, isExpandable)}
              onClick={(e: { preventDefault: () => void }) => {
                if (!isEditorPreview) {
                  handleClick(e, pathSuffix, localizedSlug)
                }
                toggleSidebarElementStatus(activeItem)
              }}
              href={getHref(slugPrefix || '', pathSuffix, localizedSlug)}
              target={isEditorPreview === true ? '_blank' : '_self'}
              locale={navigationLocale}
            >
              {method && (
                <MethodCategory
                  sx={styles.methodBox}
                  active={isActive}
                  origin="sidebar"
                  method={method}
                />
              )}
              <span>
                <HighlightedText text={localizedName} query={highlightQuery} />
              </span>
            </Link>
          ) : documentationType === 'link' ? (
            <Link
              href={localizedSlug}
              target="_blank"
              sx={textStyle(false, isHamburgerMenu, false)}
            >
              <IconExternalLink size={16} sx={{ marginRight: '10px' }} />
              <span>
                <HighlightedText text={localizedName} query={highlightQuery} />
              </span>
            </Link>
          ) : (
            <Box
              sx={textStyle(isActive, isHamburgerMenu, isExpandable)}
              onClick={() => {
                toggleSidebarElementStatus(localizedSlug, isOpen)
              }}
            >
              {method && (
                <MethodCategory
                  sx={styles.methodBox}
                  active={isActive}
                  origin="sidebar"
                  method={method}
                />
              )}
              <span>
                <HighlightedText text={localizedName} query={highlightQuery} />
              </span>
            </Box>
          )}
        </Flex>
      </Box>
    )
  }

  const ElementChildren = ({ slug, children, defaultOpen }: SidebarElement) => {
    const isExpandable = (children || []).length > 0
    // const newPathPrefix =
    //   slugPrefix === 'api-reference' ? `/api-reference/${slug}` : slugPrefix

    const localizedSlug: string =
      typeof slug === 'string' ? slug : slug?.[locale] || ''
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
          highlightQuery={highlightQuery}
          key={`${localizedSlug}sd`}
        />
      </Box>
    ) : null
  }

  // Sections built with dividers group their items with the section rule, so the
  // per-category rules of the classic layout would only add noise.
  const usesDividers =
    insideDivider || !!items?.some((item) => item.type === 'divider')
  const showCategoryRules =
    subItemLevel === 0 && !isHamburgerMenu && !usesDividers

  return (
    <Box className="sidebar-component">
      {items?.map((item, index) => {
        if (item.type === 'divider') {
          const dividerId =
            typeof item.slug === 'string'
              ? item.slug
              : item.slug?.[locale] ??
                (typeof item.name === 'string' ? item.name : item.name[locale])
          const dividerChildren = item.children || []
          return (
            <Fragment key={`divider-${dividerId}-${index}`}>
              <ElementDivider name={item.name} />
              {/* A divider groups its children in place: no caret, no indentation. */}
              {dividerChildren.length > 0 && (
                <SidebarElements
                  slugPrefix={slugPrefix}
                  items={dividerChildren}
                  subItemLevel={subItemLevel}
                  forceOpen={forceOpen}
                  isHamburgerMenu={isHamburgerMenu}
                  highlightQuery={highlightQuery}
                  insideDivider
                />
              )}
              {index < items.length - 1 && (
                <Box
                  aria-hidden="true"
                  sx={
                    isHamburgerMenu
                      ? styles.sectionRuleHamburger
                      : styles.sectionRule
                  }
                />
              )}
            </Fragment>
          )
        }

        const key =
          typeof item.slug === 'string'
            ? String(item.slug) + String(index)
            : String(item.slug?.[locale] ?? index) + String(index)
        const slug =
          typeof item.slug === 'string'
            ? `${item.slug}`
            : `${item.slug?.[locale] ?? ''}`

        return (
          <Fragment key={String(key)}>
            <ElementRoot {...item} slug={slug} />
            <Box>
              <ElementChildren {...item} slug={slug} />
            </Box>
            {showCategoryRules ? (
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
