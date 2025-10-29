import { Section } from './typings/types'
import { flattenJSON, getKeyByEndpoint, getParents } from './navigation-utils'
import { useRouter } from 'next/compat/router'
import { useEffect } from 'react'
import { ContextType } from './context/libraryContext'

export const getIcon = (doc: string, sections: Section[][]) => {
  for (const section of sections) {
    return section.find((icon) => icon.title === doc)?.Icon
  }
}

interface updateOpenPageProps {
  parentsArray?: string[]
  context: ContextType
}

export const updateOpenPage = ({
  parentsArray = [],
  context,
}: updateOpenPageProps) => {
  const {
    activeSidebarElement,
    sidebarDataMaster,
    setActiveSidebarElement,
    openSidebarElement,
    closeSidebarElements,
  } = context
  
  const flattenedSidebar = flattenJSON(sidebarDataMaster)
  const router = useRouter()
  const isClient = typeof window !== 'undefined'

  let activeSlug = ''
  
  // Only use router if we're on the client side
  if (isClient && router && router.query) {
    const querySlug = router.query.slug

    if (querySlug && router.pathname === '/docs/api-reference/[slug]') {
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
      parentsArray.push(activeSlug)
      if (keyPath) {
        getParents(keyPath, 'slug', flattenedSidebar, parentsArray)
      }
    } else {
      activeSlug = parentsArray[parentsArray.length - 1]
    }
  } else {
    // On server, just use the last parent
    activeSlug = parentsArray[parentsArray.length - 1] || ''
  }

  useEffect(() => {
    if (isClient) {
      closeSidebarElements(parentsArray)
      parentsArray.forEach((slug: string) => {
        openSidebarElement(slug)
      })
      setActiveSidebarElement(activeSlug?.replace('?endpoint=', '#'))
    }
  }, [activeSidebarElement, router, isClient])
}
