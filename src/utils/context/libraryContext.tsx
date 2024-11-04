import type { Dispatch, ReactNode, SetStateAction } from 'react'
import { createContext, useEffect, useState } from 'react'
import { Item } from 'lib/table-of-contents/TableOfContents.types'
import { Section } from 'utils/typings/types'
import { SWRConfig } from 'swr'

interface Props extends Partial<ContextType> {
  children: ReactNode
  /** The navigation array containing the list of documentations shown in the sidebar. */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fallback?: any
  /** Documentation sections, the same sections that divide the fallback. */
  sections: Section[][]
  /** Whether is a branch preview or not. */
  isPreview: boolean
  /** The section currently selected. */
  sectionSelected: string
  /** The sections to be used on the hamburguer menu */
  hamburguerMenuSections: Section[][]
  /** The portal language. The default is english. */
  locale?: 'en' | 'pt' | 'es'
}

export type ContextType = {
  headingItems: Item[]
  setHeadingItems: Dispatch<SetStateAction<Item[]>>
  activeItem: ActiveItem
  setActiveItem: Dispatch<SetStateAction<ActiveItem>>
  goToPreviousItem: () => void
  goToPreviousSubItem: () => void
  isEditorPreview: boolean
  sidebarSectionHidden: boolean
  activeSectionName: string
  activeSidebarElement: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sidebarDataMaster: any
  sidebarElementStatus: Map<string, boolean>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setSidebarDataMaster: Dispatch<SetStateAction<any>>
  setIsEditorPreview: Dispatch<SetStateAction<boolean>>
  setSidebarSectionHidden: Dispatch<SetStateAction<boolean>>
  setActiveSectionName: Dispatch<SetStateAction<string>>
  setActiveSidebarElement: Dispatch<SetStateAction<string>>
  toggleSidebarElementStatus: (title: string) => void
  openSidebarElement: (title: string) => void
  closeSidebarElements: (parentsArray: string[]) => void
  sidebarSections: Section[][]
  setSidebarSections: Dispatch<SetStateAction<Section[][]>>
  hamburguerSections: Section[][]
  setHamburguerSections: Dispatch<SetStateAction<Section[][]>>
  locale: 'en' | 'pt' | 'es'
  setLocale: Dispatch<SetStateAction<ContextType["locale"]>>
}

type ActiveItem = {
  item: string
  subItem: string
}

export const LibraryContext = createContext<ContextType>({
  headingItems: [],
  setHeadingItems: () => undefined,
  activeItem: {
    item: '',
    subItem: '',
  },
  setActiveItem: () => undefined,
  goToPreviousItem: () => undefined,
  goToPreviousSubItem: () => undefined,
  isEditorPreview: false,
  sidebarSectionHidden: false,
  activeSectionName: '',
  activeSidebarElement: '',
  sidebarDataMaster: {},
  setIsEditorPreview: () => undefined,
  sidebarElementStatus: new Map(),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  setSidebarDataMaster: (_: any) => undefined,
  setSidebarSectionHidden: () => undefined,
  setActiveSectionName: () => undefined,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  setActiveSidebarElement: (_: any) => undefined,
  toggleSidebarElementStatus: () => undefined,
  openSidebarElement: () => undefined,
  closeSidebarElements: () => undefined,
  sidebarSections: [],
  setSidebarSections: () => undefined,
  hamburguerSections: [],
  setHamburguerSections: () => undefined,
  locale: 'en',
  setLocale: () => undefined,
})

/** Provider for the LibraryContext created with React.createContext. The context is used in the following components: feedback, search, sidebar, hamburger menu, markdown renderer and table of contents. */
const LibraryContextProvider = ({ children, ...props }: Props) => {
  const [headingItems, setHeadingItems] = useState<Item[]>([])
  const [activeItem, setActiveItem] = useState<ActiveItem>({
    item: '',
    subItem: '',
  })

  const [activeSectionName, setActiveSectionName] = useState(
    props.sectionSelected
  )
  const [sidebarSectionHidden, setSidebarSectionHidden] = useState(false)
  const [activeSidebarElement, setActiveSidebarElement] = useState('')
  const [sidebarElementStatus, setSidebarElementStatus] = useState(new Map())
  const [sidebarDataMaster, setSidebarDataMaster] = useState(props.fallback)
  const [isEditorPreview, setIsEditorPreview] = useState(props.isPreview)
  const [sidebarSections, setSidebarSections] = useState(props.sections)
  const [hamburguerSections, setHamburguerSections] = useState(
    props.hamburguerMenuSections
  )
  const [locale, setLocale] = useState<ContextType["locale"]>('en')

  useEffect(() => {
    setSidebarDataMaster(props.fallback)
  }, [props.fallback])

  useEffect(() => {
    if (props.sectionSelected === '') setSidebarSectionHidden(true)
    else if (props.sectionSelected !== activeSectionName)
      setActiveSectionName(props.sectionSelected)
  }, [props.sectionSelected])

  useEffect(() => {
    setLocale('en')
  }, [])

  const { fallback } = props

  const toggleSidebarElementStatus = (title: string) => {
    setSidebarElementStatus((sidebarElementStatus) => {
      const open =
        sidebarElementStatus.has(title) === false
          ? true
          : !sidebarElementStatus.get(title)

      return new Map(sidebarElementStatus.set(title, open))
    })
  }

  const closeSidebarElements = (parentsArray: string[]) => {
    sidebarElementStatus.forEach((_value, key) => {
      if (!parentsArray.includes(key)) {
        setSidebarElementStatus((sidebarElementStatus) => {
          return new Map(sidebarElementStatus.set(key, false))
        })
      }
    })
  }

  const openSidebarElement = (title: string) => {
    setSidebarElementStatus((sidebarElementStatus) => {
      return new Map(sidebarElementStatus.set(title, true))
    })
  }

  const goToPreviousItem = () => {
    setActiveItem(({ item, subItem }) => {
      const index = headingItems.findIndex((heading) => heading.slug === item)
      if (index === -1) return { item, subItem }

      const previousItem = !index ? '' : headingItems[index - 1].slug
      const previousChildren = !index ? [] : headingItems[index - 1].children
      const previousSubItem = !previousChildren.length
        ? ''
        : previousChildren.slice(-1)[0].slug

      return {
        item: previousItem,
        subItem: previousSubItem,
      }
    })
  }

  const goToPreviousSubItem = () => {
    setActiveItem(({ item, subItem }) => {
      const heading = headingItems.find((heading) => heading.slug === item)
      const index = heading?.children.findIndex(
        (child) => child.slug === subItem
      )

      if (!heading || index === -1) return { item, subItem }

      return {
        item,
        subItem: !index ? '' : heading.children[index - 1].slug,
      }
    })
  }

  return (
    <LibraryContext.Provider
      value={{
        headingItems,
        activeItem,
        setHeadingItems,
        setActiveItem,
        goToPreviousItem,
        goToPreviousSubItem,
        isEditorPreview,
        setIsEditorPreview,
        sidebarSectionHidden,
        activeSectionName,
        activeSidebarElement,
        sidebarElementStatus,
        setActiveSectionName,
        setSidebarSectionHidden,
        setActiveSidebarElement,
        toggleSidebarElementStatus,
        openSidebarElement,
        closeSidebarElements,
        sidebarDataMaster,
        setSidebarDataMaster,
        sidebarSections,
        setSidebarSections,
        hamburguerSections,
        setHamburguerSections,
        locale,
        setLocale,
        ...props,
      }}
    >
      <SWRConfig
        value={{
          fallback: {
            '/api/navigation': fallback ? fallback : [],
          },
        }}
      >
        {children}
      </SWRConfig>
    </LibraryContext.Provider>
  )
}

export default LibraryContextProvider
