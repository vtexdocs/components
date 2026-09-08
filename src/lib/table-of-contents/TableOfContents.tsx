import { useContext, useEffect } from 'react'
import Link from 'next/link.js'
import { useRouter } from 'next/router.js'
import { Box, Text } from '@vtex/brand-ui'
import AnimateHeight from 'react-animate-height'

import { removeHTML } from 'utils/string-utils'
import { Item } from './TableOfContents.types'

import { LibraryContext } from 'utils/context/libraryContext'
import { messages } from 'utils/get-message'

import styles from './styles'

const MARKDOWN_HEADINGS_SELECTOR = [
  '[data-markdown-renderer] h2',
  '[data-markdown-renderer] h3',
  '[data-markdown-renderer] h4',
  '[data-markdown-renderer] h5',
  '[data-markdown-renderer] h6',
].join(', ')

const headingTitle = (heading: Element) => {
  const clone = heading.cloneNode(true) as HTMLElement
  clone
    .querySelectorAll('[data-copy-heading-link]')
    .forEach((node) => node.remove())
  return removeHTML(clone.innerHTML).replace(':', '').trim()
}

const collectHeadingsFromDom = (): Item[] => {
  const headings: Item[] = []
  document.querySelectorAll(MARKDOWN_HEADINGS_SELECTOR).forEach((heading) => {
    const item = {
      title: headingTitle(heading),
      slug: heading.id,
    }

    if (heading.tagName === 'H2') {
      headings.push({ ...item, children: [] })
    } else if (headings.length > 0) {
      headings[headings.length - 1].children.push({ ...item })
    } else {
      headings.push({ ...item, children: [] })
    }
  })
  return headings
}

interface Props {
  /** List of headings in the current documentation page */
  headingList?: Item[]
  children?: React.ReactNode
}

/** Table of contents for documentation pages. */
const TableOfContents = ({ headingList, children }: Props) => {
  const router = useRouter()
  const { headingItems, activeItem, setHeadingItems, setActiveItem, locale } =
    useContext(LibraryContext)

  useEffect(() => {
    if (headingList) {
      setHeadingItems(headingList)
      return
    }

    const applyFromDom = () => {
      const headings = collectHeadingsFromDom()
      if (!headings.length) return false
      setHeadingItems(headings)
      return true
    }

    if (applyFromDom()) return

    // MarkdownRenderer uses `lazy`, so headings may appear after this effect.
    const observer = new MutationObserver(() => {
      if (applyFromDom()) observer.disconnect()
    })
    observer.observe(document.body, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [router.asPath, headingList, setHeadingItems])

  const items = headingList?.length ? headingList : headingItems

  const Item = ({
    title,
    slug,
    level,
    active,
  }: {
    title: string
    slug: string
    level: number
    active: boolean
  }) => {
    return (
      <Link
        href={`#${slug}`}
        onClick={() => {
          setActiveItem(({ item }) => ({
            item: level === 1 ? slug : item,
            subItem: level === 1 ? '' : slug,
          }))
        }}
      >
        <Text sx={styles.item(level, active)}>{title}</Text>
      </Link>
    )
  }

  return (
    <Box sx={styles.itemsContainer} data-cy="table-of-contents">
      {items.length > 0 && (
        <Text sx={styles.tocTitle}>
          {messages[locale]['on_this_page.title']}
        </Text>
      )}
      <Box sx={styles.headings}>
        {items.map((item) => (
          <Box key={item.slug}>
            <Item
              title={item.title}
              slug={item.slug}
              level={1}
              active={item.slug === activeItem.item}
            />
            <AnimateHeight
              duration={300}
              height={item.slug === activeItem.item ? 'auto' : 0}
            >
              <Box sx={styles.subItemsContainer}>
                {item.children.map((subItem) => (
                  <Item
                    key={subItem.slug}
                    title={subItem.title}
                    slug={subItem.slug}
                    level={2}
                    active={subItem.slug === activeItem.subItem}
                  />
                ))}
              </Box>
            </AnimateHeight>
          </Box>
        ))}
      </Box>
      {children}
    </Box>
  )
}

export default TableOfContents
