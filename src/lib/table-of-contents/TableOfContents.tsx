import { useContext, useEffect } from 'react'
import Link from 'next/link.js'
import { useRouter } from 'next/router.js'
import { Box, Text } from '@vtex/brand-ui'
import AnimateHeight from 'react-animate-height'

import { slugify, removeHTML } from 'utils/string-utils'
import { Item } from './TableOfContents.types'

import { LibraryContext } from 'utils/context/libraryContext'

import styles from './styles'

interface Props {
  /** List of headings in the current documentation page */
  headingList?: Item[]
}

/** Table of contents for documentation pages. */
const TableOfContents = ({ headingList }: Props) => {
  const router = useRouter()
  const { headingItems, activeItem, setHeadingItems, setActiveItem } =
    useContext(LibraryContext)

  useEffect(() => {
    const headings: Item[] = headingList ?? []
    if (!headings.length) {
      document.querySelectorAll('h2, h3').forEach((heading) => {
        const headingSlug = slugify(heading.innerHTML)
        const item = {
          title: removeHTML(heading.innerHTML).replace(':', ''),
          slug: headingSlug,
        }

        if (heading.tagName === 'H2') {
          headings.push({ ...item, children: [] })
        } else if (headings.length > 0) {
          headings[headings.length - 1].children.push({ ...item })
        } else {
          headings.push({ ...item, children: [] })
        }
      })
      setHeadingItems(headings)
    } else setHeadingItems(headings)
  }, [router.asPath, headingList])

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
      {headingItems.map((item) => (
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
  )
}

export default TableOfContents
