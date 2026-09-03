import type { ReactNode } from 'react'
import { Box } from '@vtex/brand-ui'

import styles from './styles'

const INLINE_TOKEN =
  /(\[[^\]]+\]\([^)\s]+(?:\s+"[^"]*")?\)|\*\*[^*]+\*\*|`[^`]+`)/g

const renderInline = (text: string, keyPrefix: string): ReactNode[] => {
  const parts = text.split(INLINE_TOKEN)

  return parts.map((part, index) => {
    const key = `${keyPrefix}-${index}`
    if (!part) return null

    const link = part.match(/^\[([^\]]+)\]\(([^)\s]+)(?:\s+"[^"]*")?\)$/)
    if (link) {
      return (
        <Box
          as="a"
          key={key}
          href={link[2]}
          target="_blank"
          rel="noreferrer"
          sx={styles.markdownLink}
        >
          {renderInline(link[1], key)}
        </Box>
      )
    }

    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={key}>{renderInline(part.slice(2, -2), key)}</strong>
    }

    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <Box as="code" key={key} sx={styles.inlineCode}>
          {part.slice(1, -1)}
        </Box>
      )
    }

    return part
  })
}

const headingTag = (level: number) => {
  if (level <= 1) return 'h1'
  if (level === 2) return 'h2'
  if (level === 3) return 'h3'
  return 'h4'
}

const isListItem = (line: string) =>
  /^\s*[-*]\s+/.test(line) || /^\s*\d+\.\s+/.test(line)

const listItemText = (line: string) => line.replace(/^\s*(?:[-*]|\d+\.)\s+/, '')

const MarkdownMessage = ({ content }: { content: string }) => {
  const lines = content.replace(/\r\n/g, '\n').split('\n')
  const nodes: ReactNode[] = []
  let index = 0

  while (index < lines.length) {
    const line = lines[index]

    if (!line.trim()) {
      index += 1
      continue
    }

    const heading = line.match(/^(#{1,6})\s+(.*)$/)
    if (heading) {
      const Tag = headingTag(heading[1].length)
      nodes.push(
        <Box as={Tag} key={`h-${index}`} sx={styles.markdownHeading}>
          {renderInline(heading[2], `h-${index}`)}
        </Box>
      )
      index += 1
      continue
    }

    if (/^---+$/.test(line.trim())) {
      nodes.push(<Box as="hr" key={`hr-${index}`} sx={styles.markdownRule} />)
      index += 1
      continue
    }

    if (isListItem(line)) {
      const ordered = /^\s*\d+\.\s+/.test(line)
      const items: ReactNode[] = []
      const listIndex = index

      while (index < lines.length && isListItem(lines[index])) {
        const nested = /^\s{2,}/.test(lines[index])
        items.push(
          <Box
            as="li"
            key={`li-${index}`}
            sx={nested ? styles.nestedListItem : undefined}
          >
            {renderInline(listItemText(lines[index]), `li-${index}`)}
          </Box>
        )
        index += 1
      }

      nodes.push(
        <Box
          as={ordered ? 'ol' : 'ul'}
          key={`list-${listIndex}`}
          sx={styles.markdownList}
        >
          {items}
        </Box>
      )
      continue
    }

    const paragraph: string[] = []
    const paragraphIndex = index
    while (
      index < lines.length &&
      lines[index].trim() &&
      !lines[index].match(/^#{1,6}\s+/) &&
      !isListItem(lines[index]) &&
      !/^---+$/.test(lines[index].trim())
    ) {
      paragraph.push(lines[index])
      index += 1
    }

    nodes.push(
      <Box as="p" key={`p-${paragraphIndex}`} sx={styles.markdownParagraph}>
        {renderInline(paragraph.join(' '), `p-${paragraphIndex}`)}
      </Box>
    )
  }

  return <Box sx={styles.markdown}>{nodes}</Box>
}

export default MarkdownMessage
