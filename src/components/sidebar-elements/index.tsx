import { useRouter } from 'next/router.js'
import React, { Fragment, useContext } from 'react'
import {
  Box,
  Flex,
  Link,
  Button,
  IconCaret,
  IconExternalLink,
} from '@vtex/brand-ui'

import MethodCategory from 'components/method-category'

import { styleByLevelNormal, textStyle } from './functions'
import styles from './styles'
import { MethodType } from 'utils/typings/types'
import { LibraryContext } from 'utils/context/libraryContext'

export interface SidebarElement {
  name: string | { en: string; pt: string; es: string }
  slug: string | { en: string; pt: string; es: string }
  origin: string
  type: string
  method?: MethodType
  endpoint?: string
  children: SidebarElement[]
}

export interface SidebarProps {
  slugPrefix?: string
  items: SidebarElement[]
  subItemLevel: number
}

const SidebarElements = ({ slugPrefix, items, subItemLevel }: SidebarProps) => {
  const {
    isEditorPreview,
    activeSidebarElement,
    sidebarElementStatus,
    toggleSidebarElementStatus,
    sidebarDataMaster,
    locale,
  } = useContext(LibraryContext)
  const router = useRouter()

  const handleClick = (
    e: { preventDefault: () => void },
    pathSuffix: string,
    slug: string
  ) => {
    e.preventDefault()
    const hasEndpointQuery = router.query.endpoint
    router.push(getHref(slugPrefix || '', pathSuffix, slug)).then(() => {
      if (hasEndpointQuery) router.reload()
    })
  }

  // eslint-disable-next-line
  // @ts-ignore
  const checkDocumentationType = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    sidebarData: any,
    slug: string,
    type: string
  ) => {
    if (
      !sidebarData ||
      (typeof sidebarData !== 'object' && !Array.isArray(sidebarData))
    ) {
      return false
    } else if (sidebarData?.slug == slug && sidebarData?.type == type) {
      return true
    } else if (Array.isArray(sidebarData)) {
      for (let i = 0; i < sidebarData.length; i++) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const result = checkDocumentationType(sidebarData[i], slug, type)
        if (result) {
          return result
        }
      }
    } else {
      for (const k in sidebarData) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const result = checkDocumentationType(sidebarData[k], slug, type)
        if (result) {
          return result
        }
      }
    }

    return false
  }

  const getHref = (slugPrefix: string, pathSuffix: string, slug: string) => {
    const href =
      slugPrefix === 'docs/api-reference'
        ? `/${slugPrefix}/${slug}/${pathSuffix}`
        : `/${slugPrefix}/${slug}`
    return href.replaceAll('//', '/')
  }

  const ElementRoot = ({
    slug,
    name,
    method,
    endpoint,
    children,
  }: SidebarElement) => {
    const localizedName: string = typeof name === 'string' ? name : name[locale]
    const localizedSlug: string = typeof slug === 'string' ? slug : slug[locale]
    const isExpandable = children.length > 0
    const pathSuffix = method ? `#${method.toLowerCase()}-${endpoint}` : ''
    const activeItem = method ? `${localizedSlug}${pathSuffix}` : localizedSlug
    return (
      <Box sx={styles.elementContainer}>
        <Flex sx={styleByLevelNormal(subItemLevel, isExpandable || false)}>
          {isExpandable && (
            <Button
              aria-label={
                sidebarElementStatus.has(localizedSlug) && sidebarElementStatus.get(localizedSlug)
                  ? 'Collapse category'
                  : 'Expand category'
              }
              size="regular"
              variant="tertiary"
              sx={
                sidebarElementStatus.has(localizedSlug) && sidebarElementStatus.get(localizedSlug)
                  ? styles.arrowIconActive
                  : styles.arrowIcon
              }
              icon={() => (
                <IconCaret
                  direction={
                    sidebarElementStatus.has(localizedSlug) &&
                    sidebarElementStatus.get(localizedSlug)
                      ? 'down'
                      : 'right'
                  }
                  size={24}
                />
              )}
              onClick={() => toggleSidebarElementStatus(localizedSlug)}
            />
          )}
          {!checkDocumentationType(sidebarDataMaster, localizedSlug, 'category') &&
          !checkDocumentationType(sidebarDataMaster, localizedSlug, 'link') ? (
            <Link
              sx={textStyle(activeSidebarElement === activeItem, isExpandable)}
              onClick={(e: { preventDefault: () => void }) => {
                if (!isEditorPreview) {
                  handleClick(e, pathSuffix, localizedSlug)
                }
                toggleSidebarElementStatus(activeItem)
              }}
              href={getHref(slugPrefix || '', pathSuffix, localizedSlug)}
              target={isEditorPreview === true ? '_blank' : '_self'}
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
          ) : checkDocumentationType(sidebarDataMaster, localizedSlug, 'link') ? (
            <Link href={localizedSlug} target="_blank" sx={styles.elementText}>
              <IconExternalLink size={16} sx={{ marginRight: '10px' }} />
              {localizedName}
            </Link>
          ) : (
            <Box
              sx={textStyle(activeSidebarElement === localizedSlug, isExpandable)}
              onClick={() => {
                toggleSidebarElementStatus(localizedSlug)
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
  
  const ElementChildren = ({ slug, children }: SidebarElement) => {
    const isExpandable = children.length > 0
    // const newPathPrefix =
    //   slugPrefix === 'api-reference' ? `/api-reference/${slug}` : slugPrefix

    const localizedSlug: string = typeof slug === 'string' ? slug : slug[locale]
    return isExpandable &&
      sidebarElementStatus.has(localizedSlug) &&
      sidebarElementStatus.get(localizedSlug) ? (
      <Box>
        <SidebarElements
          slugPrefix={slugPrefix}
          items={children}
          subItemLevel={subItemLevel + 1}
          key={`${localizedSlug}sd`}
        />
      </Box>
    ) : null
  }

  return (
    <Box className="sidebar-component">
      {items?.map((item, index) => {
        const key = typeof item.slug === 'string' ? String(item.slug) + String(index) : String(item.slug[locale]) + String(index)
        const slug = typeof item.slug === 'string' ? `${item.slug}` : `${item.slug[locale]}`
  
        return (
          <Fragment key={String(key)}>
            <ElementRoot {...item} slug={slug} />
            <Box>
              <ElementChildren {...item} slug={slug} />
            </Box>
            {subItemLevel == 0 ? (
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

export default SidebarElements
