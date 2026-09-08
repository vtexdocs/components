import { Section } from './typings/types'
import { flattenJSON, getKeyByEndpoint, getParents } from './navigation-utils'
import { useRouter } from 'next/router.js'
import { useEffect } from 'react'
import { ContextType } from './context/libraryContext'

export const getIcon = (doc: string, sections: Section[][]) => {
  return sections.flat().find((icon) => icon.id === doc || icon.title === doc)
    ?.Icon
}

type LocalizedField = string | { en: string; pt: string; es: string }

export function resolveLocalizedName(
  value: LocalizedField | undefined,
  locale: 'en' | 'pt' | 'es'
): string {
  if (!value) return ''
  if (typeof value === 'string') return value
  return value[locale] || value.en || ''
}

/** Label for a sidebar section, preferring the localized `name` from navigation. */
export function getSectionLabel(
  section: { id: string; title: string },
  navigation: unknown,
  locale: 'en' | 'pt' | 'es'
): string {
  if (Array.isArray(navigation)) {
    const navSection = navigation.find(
      (item: { documentation?: string; name?: LocalizedField }) =>
        item.documentation === section.id
    )
    const fromNav = resolveLocalizedName(navSection?.name, locale)
    if (fromNav) return fromNav
  }
  return section.title
}

interface updateOpenPageProps {
  parentsArray?: string[]
  context: ContextType
}
export const updateOpenPage = ({
  parentsArray = [],
  context,
}: updateOpenPageProps) => {
  const { sidebarDataMaster, setActiveSidebarElement, setOpenSidebarElements } =
    context
  const router = useRouter()
  const parentsKey = parentsArray.join('\0')

  useEffect(() => {
    const expandedSlugs = parentsArray.slice()
    let activeSlug = ''
    const querySlug = router.query.slug

    if (querySlug && router.pathname === '/docs/api-reference/[slug]') {
      const flattenedSidebar = flattenJSON(sidebarDataMaster)
      activeSlug = router.asPath.replace('/docs/api-reference/', '')
      const docPath = activeSlug.split('/')
      const hasHashTag = router.asPath.indexOf('#') > -1
      const apiSlug = docPath[0].split(hasHashTag ? '#' : '?endpoint=')[0]
      const endpoint = '/' + docPath.splice(1, docPath.length).join('/')
      let keyPath
      if (endpoint == '/') {
        activeSlug = apiSlug
        keyPath = getKeyByEndpoint(flattenedSidebar, '', apiSlug)
      } else {
        const method = docPath[0]
          .split(hasHashTag ? '#' : '?endpoint=')[1]
          .split('-')[0]
        keyPath = getKeyByEndpoint(flattenedSidebar, endpoint, apiSlug, method)
      }
      expandedSlugs.push(activeSlug)
      if (keyPath) {
        getParents(keyPath, 'slug', flattenedSidebar, expandedSlugs)
      }
    } else {
      activeSlug = expandedSlugs[expandedSlugs.length - 1]
    }

    setOpenSidebarElements(expandedSlugs)
    setActiveSidebarElement(activeSlug?.replace('?endpoint=', '#'))
  }, [
    parentsKey,
    router.asPath,
    router.pathname,
    router.query.slug,
    sidebarDataMaster,
    setActiveSidebarElement,
    setOpenSidebarElements,
  ])
}
