import type { Dispatch, ReactNode, SetStateAction } from 'react'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { SWRConfig } from 'swr'
import { Item } from 'lib/table-of-contents/TableOfContents.types'
import { Section } from 'utils/typings/types'

export type Locale = 'en' | 'pt' | 'es'

export type ActiveItem = {
  item: string
  subItem: string
}

export type LocaleContextType = {
  locale: Locale
}

export type TocStateContextType = {
  headingItems: Item[]
  activeItem: ActiveItem
}

export type TocActionsContextType = {
  setHeadingItems: Dispatch<SetStateAction<Item[]>>
  setActiveItem: Dispatch<SetStateAction<ActiveItem>>
  goToPreviousItem: () => void
  goToPreviousSubItem: () => void
  onHeadingEnter: (slug: string) => void
  onHeadingLeave: (
    slug: string,
    entry: IntersectionObserverEntry,
    y: number
  ) => void
  onSubHeadingEnter: (slug: string) => void
  onSubHeadingLeave: (
    slug: string,
    entry: IntersectionObserverEntry,
    y: number
  ) => void
}

/** Sidebar, preview, and locale. Does not include TOC scroll-spy state. */
export type ContextType = {
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
  toggleSidebarElementStatus: (title: string, currentlyOpen?: boolean) => void
  openSidebarElement: (title: string) => void
  closeSidebarElements: (parentsArray: string[]) => void
  setOpenSidebarElements: (parentsArray: string[]) => void
  sidebarSections: Section[][]
  setSidebarSections: Dispatch<SetStateAction<Section[][]>>
  hamburguerSections: Section[][]
  setHamburguerSections: Dispatch<SetStateAction<Section[][]>>
  locale: Locale
}

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
  locale?: Locale
}

const noop = () => undefined

export const LocaleContext = createContext<LocaleContextType>({
  locale: 'en',
})

export const TocStateContext = createContext<TocStateContextType>({
  headingItems: [],
  activeItem: { item: '', subItem: '' },
})

export const TocActionsContext = createContext<TocActionsContextType>({
  setHeadingItems: noop,
  setActiveItem: noop,
  goToPreviousItem: noop,
  goToPreviousSubItem: noop,
  onHeadingEnter: noop,
  onHeadingLeave: noop,
  onSubHeadingEnter: noop,
  onSubHeadingLeave: noop,
})

export const LibraryContext = createContext<ContextType>({
  isEditorPreview: false,
  sidebarSectionHidden: false,
  activeSectionName: '',
  activeSidebarElement: '',
  sidebarDataMaster: {},
  setIsEditorPreview: noop,
  sidebarElementStatus: new Map(),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  setSidebarDataMaster: (_: any) => undefined,
  setSidebarSectionHidden: noop,
  setActiveSectionName: noop,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  setActiveSidebarElement: (_: any) => undefined,
  toggleSidebarElementStatus: noop,
  openSidebarElement: noop,
  closeSidebarElements: noop,
  setOpenSidebarElements: noop,
  sidebarSections: [],
  setSidebarSections: noop,
  hamburguerSections: [],
  setHamburguerSections: noop,
  locale: 'en',
})

export const useLocale = () => useContext(LocaleContext).locale

export const useTocState = () => useContext(TocStateContext)

export const useTocActions = () => useContext(TocActionsContext)

/** Provider for docs UI state. Locale, TOC scroll-spy, and sidebar are separate contexts so article scroll does not re-render the page. */
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
  const locale = props.locale ?? 'en'
  const fallback = props.fallback

  const headingItemsRef = useRef(headingItems)
  headingItemsRef.current = headingItems
  const activeItemRef = useRef(activeItem)
  activeItemRef.current = activeItem

  useEffect(() => {
    setSidebarDataMaster(props.fallback)
  }, [props.fallback])

  useEffect(() => {
    if (props.sectionSelected === '') setSidebarSectionHidden(true)
    else if (props.sectionSelected !== activeSectionName)
      setActiveSectionName(props.sectionSelected)
  }, [props.sectionSelected])

  const toggleSidebarElementStatus = useCallback(
    (title: string, currentlyOpen?: boolean) => {
      setSidebarElementStatus((prev) => {
        const open = prev.has(title) ? !prev.get(title) : !currentlyOpen
        const next = new Map(prev)
        next.set(title, open)
        return next
      })
    },
    []
  )

  const closeSidebarElements = useCallback((parentsArray: string[]) => {
    const parentSet = new Set(parentsArray)
    setSidebarElementStatus((prev) => {
      let changed = false
      const next = new Map(prev)
      next.forEach((value, key) => {
        if (!parentSet.has(key) && value) {
          next.set(key, false)
          changed = true
        }
      })
      return changed ? next : prev
    })
  }, [])

  const openSidebarElement = useCallback((title: string) => {
    setSidebarElementStatus((prev) => {
      if (prev.get(title) === true) return prev
      const next = new Map(prev)
      next.set(title, true)
      return next
    })
  }, [])

  const setOpenSidebarElements = useCallback((parentsArray: string[]) => {
    if (parentsArray.length === 0) {
      setSidebarElementStatus((prev) => (prev.size === 0 ? prev : new Map()))
      return
    }

    const parentSet = new Set(parentsArray)
    setSidebarElementStatus((prev) => {
      const next = new Map(prev)
      let changed = false
      next.forEach((value, key) => {
        if (!parentSet.has(key) && value) {
          next.set(key, false)
          changed = true
        }
      })
      parentsArray.forEach((slug) => {
        if (next.get(slug) !== true) {
          next.set(slug, true)
          changed = true
        }
      })
      return changed ? next : prev
    })
  }, [])

  const goToPreviousItem = useCallback(() => {
    setActiveItem((prev) => {
      const { item, subItem } = prev
      const items = headingItemsRef.current
      const index = items.findIndex((heading) => heading.slug === item)
      if (index === -1) return prev

      const previousItem = !index ? '' : items[index - 1].slug
      const previousChildren = !index ? [] : items[index - 1].children
      const previousSubItem = !previousChildren.length
        ? ''
        : previousChildren.slice(-1)[0].slug

      if (previousItem === item && previousSubItem === subItem) return prev
      return {
        item: previousItem,
        subItem: previousSubItem,
      }
    })
  }, [])

  const goToPreviousSubItem = useCallback(() => {
    setActiveItem((prev) => {
      const { item, subItem } = prev
      const heading = headingItemsRef.current.find(
        (candidate) => candidate.slug === item
      )
      const index = heading?.children.findIndex(
        (child) => child.slug === subItem
      )

      if (!heading || index === -1) return prev

      const previousSubItem = !index ? '' : heading.children[index - 1].slug
      if (previousSubItem === subItem) return prev
      return {
        item,
        subItem: previousSubItem,
      }
    })
  }, [])

  const onHeadingEnter = useCallback((slug: string) => {
    setActiveItem((prev) => {
      if (prev.item === slug) return prev
      return { item: slug, subItem: '' }
    })
  }, [])

  const onHeadingLeave = useCallback(
    (slug: string, entry: IntersectionObserverEntry, y: number) => {
      if (
        entry.boundingClientRect.y > y &&
        activeItemRef.current.item === slug
      ) {
        goToPreviousItem()
      }
    },
    [goToPreviousItem]
  )

  const onSubHeadingEnter = useCallback((slug: string) => {
    setActiveItem((prev) => {
      if (prev.subItem === slug) return prev
      return { item: prev.item, subItem: slug }
    })
  }, [])

  const onSubHeadingLeave = useCallback(
    (slug: string, entry: IntersectionObserverEntry, y: number) => {
      if (
        entry.boundingClientRect.y > y &&
        activeItemRef.current.subItem === slug
      ) {
        goToPreviousSubItem()
      }
    },
    [goToPreviousSubItem]
  )

  const localeValue = useMemo<LocaleContextType>(() => ({ locale }), [locale])

  const tocStateValue = useMemo<TocStateContextType>(
    () => ({
      headingItems,
      activeItem,
    }),
    [headingItems, activeItem]
  )

  const tocActionsValue = useMemo<TocActionsContextType>(
    () => ({
      setHeadingItems,
      setActiveItem,
      goToPreviousItem,
      goToPreviousSubItem,
      onHeadingEnter,
      onHeadingLeave,
      onSubHeadingEnter,
      onSubHeadingLeave,
    }),
    [
      goToPreviousItem,
      goToPreviousSubItem,
      onHeadingEnter,
      onHeadingLeave,
      onSubHeadingEnter,
      onSubHeadingLeave,
    ]
  )

  const contextValue = useMemo(
    () => ({
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
      setOpenSidebarElements,
      sidebarDataMaster,
      setSidebarDataMaster,
      sidebarSections,
      setSidebarSections,
      hamburguerSections,
      setHamburguerSections,
      locale,
    }),
    [
      isEditorPreview,
      sidebarSectionHidden,
      activeSectionName,
      activeSidebarElement,
      sidebarElementStatus,
      toggleSidebarElementStatus,
      openSidebarElement,
      closeSidebarElements,
      setOpenSidebarElements,
      sidebarDataMaster,
      sidebarSections,
      hamburguerSections,
      locale,
    ]
  )

  return (
    <LocaleContext.Provider value={localeValue}>
      <TocActionsContext.Provider value={tocActionsValue}>
        <TocStateContext.Provider value={tocStateValue}>
          <LibraryContext.Provider value={contextValue}>
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
        </TocStateContext.Provider>
      </TocActionsContext.Provider>
    </LocaleContext.Provider>
  )
}

export default LibraryContextProvider
