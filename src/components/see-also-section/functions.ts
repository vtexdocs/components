import { capitalizeFirstLetter, slugify } from 'utils/string-utils'
import { getSectionLabel } from 'utils/sidebar-utils'
import PaperIcon from 'components/icons/paper-icon'
import type { DocumentProps } from 'components/documentation-card'
import type { Section } from 'utils/typings/types'

export type SeeAlsoDoc = {
  url: string
  title?: string
  category?: string
}

type CreateDocOptions = {
  locale?: 'en' | 'pt' | 'es'
  navigation?: unknown
}

const ACRONYMS: Record<string, string> = {
  api: 'API',
  cms: 'CMS',
  faq: 'FAQ',
  io: 'IO',
  sku: 'SKU',
  vtex: 'VTEX',
}

/** Alternate category names mapped onto current section ids. */
const CATEGORY_ALIASES: Record<string, string> = {
  'api-guide': 'guides',
  'api-guides': 'guides',
}

const KEBAB_SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)+$/

const normalizeKey = (value: string) => slugify(value.replace(/[_/]+/g, '-'))

const isKebabSlug = (value: string) => KEBAB_SLUG.test(value)

const humanizeSlug = (slug: string) =>
  slug
    .split('-')
    .filter(Boolean)
    .map((word) => ACRONYMS[word.toLowerCase()] ?? capitalizeFirstLetter(word))
    .join(' ')

/** Keep real titles; only humanize kebab-case slugs. */
export const displayLabel = (value: string) => {
  const cleaned = value.split('#')[0].split('?')[0].trim()
  if (!cleaned) return ''
  if (isKebabSlug(cleaned)) return humanizeSlug(cleaned)
  return cleaned
}

const pathnameFromUrl = (url: string) => {
  if (!url) return ''
  try {
    if (/^https?:\/\//i.test(url)) {
      return new URL(url).pathname
    }
  } catch {
    return url.split('#')[0].split('?')[0]
  }
  return url.split('#')[0].split('?')[0]
}

const lastPathSegment = (url: string) => {
  const path = pathnameFromUrl(url).replace(/\/+$/, '')
  const segment = path.split('/').filter(Boolean).pop() ?? ''
  try {
    return decodeURIComponent(segment)
  } catch {
    return segment
  }
}

const parentPath = (url: string) =>
  pathnameFromUrl(url).replace(/\/+$/, '').replace(/\/[^/]+$/, '')

export const findSection = (
  sections: Section[][],
  { category, url }: Pick<SeeAlsoDoc, 'category' | 'url'>
): Section | undefined => {
  const all = sections.flat()
  if (!all.length) return undefined

  const categoryKey = category ? normalizeKey(category) : ''
  const aliased = categoryKey
    ? CATEGORY_ALIASES[categoryKey] ?? categoryKey
    : ''

  if (aliased) {
    const byCategory = all.find((section) => {
      const id = normalizeKey(section.id)
      const title = normalizeKey(section.title)
      return (
        id === aliased ||
        title === aliased ||
        id === categoryKey ||
        title === categoryKey
      )
    })
    if (byCategory) return byCategory
  }

  const path = pathnameFromUrl(url).replace(/\/+$/, '')
  const isBareExternalOrigin =
    /^https?:\/\//i.test(url) && (!path || path === '/')
  if (!path || isBareExternalOrigin) return undefined

  let best: Section | undefined
  let bestLength = -1
  for (const section of all) {
    if (!section.link || section.isExternalLink) continue
    const link = section.link.replace(/\/+$/, '')
    if (!link || link === '/') continue
    if (path === link || path.startsWith(`${link}/`)) {
      if (link.length > bestLength) {
        best = section
        bestLength = link.length
      }
    }
  }
  return best
}

export const createDocFromUrl = (
  doc: SeeAlsoDoc,
  sections: Section[][] = [],
  options: CreateDocOptions = {}
): DocumentProps => {
  const section = findSection(sections, {
    category: doc.category,
    url: doc.url,
  })

  const title = displayLabel(doc.title || lastPathSegment(doc.url))
  const description = section
    ? getSectionLabel(section, options.navigation, options.locale ?? 'en')
    : displayLabel(doc.category || lastPathSegment(parentPath(doc.url)))

  return {
    title,
    description,
    link: doc.url,
    Icon: section?.Icon ?? PaperIcon,
  }
}
