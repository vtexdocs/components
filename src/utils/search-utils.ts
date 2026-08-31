import { Hit } from 'react-instantsearch-core'

import APIGuidesIcon from 'components/icons/api-guides-icon'
import APIReferenceIcon from 'components/icons/api-reference-icon'
import AppDevelopmentIcon from 'components/icons/app-development-icon'
import ReleaseNotesIcon from 'components/icons/release-notes-icon'
import StorefrontDevelopmentIcon from 'components/icons/storefront-development-icon'
import VTEXIOAppsIcon from 'components/icons/vtex-io-apps-icon'
import TroubleshootingIcon from 'components/icons/troubleshooting-icon'
import { IconComponent, MethodType, Section } from './typings/types'
import AddedIcon from 'components/icons/added-icon'
import DeprecatedIcon from 'components/icons/deprecated-icon'
import FixedIcon from 'components/icons/fixed-icon'
import ImprovedIcon from 'components/icons/improved-icon'
import RemovedIcon from 'components/icons/removed-icon'

export const getBreadcrumbs = (hit: Hit) => {
  const breadcrumbs: string[] = []
  if (hit.doctype === 'API Reference' && hit.doccategory)
    breadcrumbs.push(hit.doccategory)
  breadcrumbs.push(hit.doctitle)
  return breadcrumbs
}

export const getRelativeURL = (url: string) => {
  const relativeURL = url.replace(/^(?:\/\/|[^/]+)*\//, '')
  return '/' + relativeURL
}

const HTTP_METHODS: readonly MethodType[] = [
  'POST',
  'GET',
  'PUT',
  'DELETE',
  'PATCH',
]

const isMethodType = (value: string): value is MethodType =>
  (HTTP_METHODS as readonly string[]).includes(value)

/** HTTP method badge for API Reference hits, matching the search results page. */
export const getSearchHitMethod = (hit: Hit): MethodType | undefined => {
  const raw = typeof hit.method === 'string' ? hit.method.toUpperCase() : ''
  if (isMethodType(raw)) return raw

  const url = typeof hit.url === 'string' ? hit.url : ''
  const hash = url.includes('#') ? url.slice(url.indexOf('#') + 1) : ''
  const fromHash = hash.split('-')[0]?.toUpperCase() || ''
  if (isMethodType(fromHash)) return fromHash

  return undefined
}

/** Display cap for tab counts; values at or above this render as "999+". */
export const HYBRID_SEARCH_COUNT_CAP = 1000

export function formatSearchTabCount(
  count: number | undefined
): string | undefined {
  if (count === undefined) return undefined
  if (count >= HYBRID_SEARCH_COUNT_CAP) return '999+'
  return String(count)
}

interface IconsI {
  name: string
  Icon: IconComponent
}

const iconsMap: IconsI[] = [
  {
    Icon: APIGuidesIcon,
    name: 'Guides',
  },
  {
    Icon: APIReferenceIcon,
    name: 'API Reference',
  },
  {
    Icon: AppDevelopmentIcon,
    name: 'App Development',
  },
  {
    Icon: StorefrontDevelopmentIcon,
    name: 'Storefront Development',
  },
  {
    Icon: VTEXIOAppsIcon,
    name: 'VTEX IO Apps',
  },
  {
    Icon: TroubleshootingIcon,
    name: 'Troubleshooting',
  },
  {
    Icon: ReleaseNotesIcon,
    name: 'Release Notes',
  },
]

export const getIcon = (name: string) => {
  return iconsMap.find((icon) => icon.name === name)?.Icon
}

export const getIconFromSection = (sections: Section[][], id: string) => {
  return sections.flat().find((section) => section.id === id)?.Icon
}

export type ActionType =
  | 'added'
  | 'deprecated'
  | 'fixed'
  | 'improved'
  | 'removed'
export interface Action {
  type: ActionType
  title: string
  Icon: IconComponent
}

const actions: Action[] = [
  {
    type: 'added',
    title: 'Added',
    Icon: AddedIcon,
  },
  {
    type: 'deprecated',
    title: 'Deprecated',
    Icon: DeprecatedIcon,
  },
  {
    type: 'fixed',
    title: 'Fixed',
    Icon: FixedIcon,
  },
  {
    type: 'improved',
    title: 'Improved',
    Icon: ImprovedIcon,
  },
  {
    type: 'removed',
    title: 'Removed',
    Icon: RemovedIcon,
  },
]

export const getAction = (actionType: ActionType): Action => {
  return actions.find((action) => action.type === actionType) as Action
}

export const getTitleById = (sections: Section[][], id: string) => {
  return sections.flat().find((item) => item.id === id)?.title || id
}

type LocalizedField = string | { en: string; pt: string; es: string }

type NavigationNode = {
  name?: LocalizedField
  slug?: LocalizedField
  children?: NavigationNode[]
  categories?: NavigationNode[]
  documentation?: string
  slugPrefix?: string
}

function resolveLocalized(
  value: LocalizedField | undefined,
  locale: 'en' | 'pt' | 'es'
): string {
  if (!value) return ''
  if (typeof value === 'string') return value
  return value[locale] || value.en || ''
}

function urlMatchesSlug(
  relativeUrl: string,
  slugPrefix: string,
  slug: string
): boolean {
  if (!slug) return false
  const url = relativeUrl.replace(/\/$/, '').split('#')[0].split('?')[0]
  const expected = `/${slugPrefix}/${slug}`.replace(/\/{2,}/g, '/')
  return url === expected || url.endsWith(expected) || url.endsWith(`/${slug}`)
}

function nodeContainsHit(
  node: NavigationNode,
  relativeUrl: string,
  slugPrefix: string,
  locale: 'en' | 'pt' | 'es'
): boolean {
  const slug = resolveLocalized(node.slug, locale)
  if (slug && urlMatchesSlug(relativeUrl, slugPrefix, slug)) return true
  return (node.children || []).some((child) =>
    nodeContainsHit(child, relativeUrl, slugPrefix, locale)
  )
}

/**
 * Builds search breadcrumbs as [section, parent category, page title].
 * API Reference omits the category and uses [section, page title].
 */
export function getSearchBreadcrumbs({
  hit,
  navigation,
  sections,
  locale = 'en',
}: {
  hit: Hit
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: any
  sections: Section[][]
  locale?: 'en' | 'pt' | 'es'
}): string[] {
  const sectionTitle = getTitleById(sections, hit.doctype)
  const title = typeof hit.doctitle === 'string' ? hit.doctitle : ''
  const crumbs = [sectionTitle]
  const isApiReference =
    String(hit.doctype).toLowerCase() === 'api reference'

  if (isApiReference) {
    if (title && title !== sectionTitle) crumbs.push(title)
    return crumbs.filter(Boolean)
  }

  const relativeUrl = typeof hit.url === 'string' ? getRelativeURL(hit.url) : ''

  const navigationList: NavigationNode[] = Array.isArray(navigation)
    ? navigation
    : []
  const navSection = navigationList.find(
    (item) =>
      item.documentation === hit.doctype ||
      String(item.documentation).toLowerCase() ===
        String(hit.doctype).toLowerCase()
  )

  let categoryName = ''
  if (navSection?.categories?.length) {
    const slugPrefix = navSection.slugPrefix || ''
    const category = navSection.categories.find((cat) =>
      nodeContainsHit(cat, relativeUrl, slugPrefix, locale)
    )
    categoryName = resolveLocalized(category?.name, locale)
  }

  if (!categoryName && typeof hit.doccategory === 'string' && hit.doccategory) {
    categoryName = hit.doccategory
  }

  if (categoryName && categoryName !== sectionTitle && categoryName !== title) {
    crumbs.push(categoryName)
  }

  if (title && crumbs[crumbs.length - 1] !== title) {
    crumbs.push(title)
  }

  return crumbs.filter(Boolean)
}
