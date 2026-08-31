import { SxStyleProp } from '@vtex/brand-ui'
import styles from './styles'

type NestedSidebarNode = {
  slug: string | { en: string; pt: string; es: string }
  method?: string
  endpoint?: string
  children: NestedSidebarNode[]
}

export const isInActivePath = (
  node: NestedSidebarNode,
  activeSlug: string,
  locale: 'en' | 'pt' | 'es'
): boolean => {
  const slug = typeof node.slug === 'string' ? node.slug : node.slug[locale]
  const item = node.method
    ? `${slug}#${node.method.toLowerCase()}-${node.endpoint}`
    : slug

  if (item === activeSlug || slug === activeSlug) return true

  return node.children.some((child) =>
    isInActivePath(child, activeSlug, locale)
  )
}

export const styleByLevelNormal = (isHamburgerMenu = false) => {
  const normal: SxStyleProp = {
    gap: isHamburgerMenu ? '8px' : '3px',
    alignItems: 'flex-start',
    ...(isHamburgerMenu
      ? {
          minHeight: '44px',
          alignItems: 'center',
        }
      : {}),
  }

  return normal
}

export const textStyle = (
  active: boolean,
  isHamburgerMenu = false,
  isExpandable = false
) => {
  const hamburgerText: SxStyleProp = isHamburgerMenu
    ? {
        fontSize: '15px',
        lineHeight: '22px',
        paddingBlock: '11px',
        minHeight: '44px',
        color: active ? '#D71D55' : '#4A596B',
        fontWeight: '400',
        flex: 1,
        minWidth: 0,
        whiteSpace: 'normal',
        overflowWrap: 'break-word',
        alignItems: 'center',
      }
    : isExpandable
    ? {
        fontWeight: '500',
      }
    : {}

  if (active) {
    const textStyleActive: SxStyleProp = {
      ...styles.elementActive,
      ...hamburgerText,
    }
    return textStyleActive
  }
  const textStyle: SxStyleProp = {
    ...styles.elementText,
    ...hamburgerText,
  }

  return textStyle
}
