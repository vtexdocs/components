import type { ReactNode } from 'react'
import { Box } from '@vtex/brand-ui'

import AnswerSources, { splitAnswerSources } from './sources'
import styles from './styles'

const ANSWER_METADATA_RE =
  /(?:\r?\n[ \t]*){0,3}(?:[*_]{1,2}[ \t]*)?Language:[ \t]*[^\n|]+[ \t]*\|[ \t]*Confidence:[ \t]*[^\n*_]+(?:[ \t]*[*_]{1,2})?[ \t]*$/i

export const stripAnswerMetadata = (content: string) =>
  content.replace(ANSWER_METADATA_RE, '').trimEnd()

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

const LIST_ITEM_RE = /^(\s*)([-*]|\d+\.)\s+(.*)$/

type ListMarker = {
  indent: number
  ordered: boolean
  text: string
}

const parseListMarker = (line: string): ListMarker | null => {
  const match = line.match(LIST_ITEM_RE)
  if (!match) return null

  return {
    indent: match[1].length,
    ordered: /^\d+\.$/.test(match[2]),
    text: match[3],
  }
}

const nextNonBlank = (lines: string[], from: number) => {
  let index = from
  while (index < lines.length && !lines[index].trim()) index += 1
  return index
}

const renderList = (
  lines: string[],
  start: number,
  minIndent: number
): { items: ReactNode[]; ordered: boolean; end: number } => {
  const first = parseListMarker(lines[start])
  if (!first) return { items: [], ordered: false, end: start }

  const baseIndent = first.indent
  const ordered = first.ordered
  const items: ReactNode[] = []
  let index = start

  while (index < lines.length) {
    const itemIndex = nextNonBlank(lines, index)
    if (itemIndex >= lines.length) break

    const marker = parseListMarker(lines[itemIndex])
    if (
      !marker ||
      marker.indent < minIndent ||
      marker.indent !== baseIndent ||
      marker.ordered !== ordered
    ) {
      break
    }

    index = itemIndex + 1
    const children: ReactNode[] = [
      ...renderInline(marker.text, `li-${itemIndex}`),
    ]

    const nestedIndex = nextNonBlank(lines, index)
    const nestedMarker =
      nestedIndex < lines.length ? parseListMarker(lines[nestedIndex]) : null

    if (nestedMarker && nestedMarker.indent > baseIndent) {
      const nested = renderList(lines, nestedIndex, baseIndent + 1)
      children.push(
        <Box
          as={nested.ordered ? 'ol' : 'ul'}
          key={`list-${nestedIndex}`}
          sx={
            nested.ordered
              ? styles.markdownOrderedList
              : styles.markdownUnorderedList
          }
        >
          {nested.items}
        </Box>
      )
      index = nested.end
    }

    items.push(
      <Box as="li" key={`li-${itemIndex}`} sx={styles.markdownListItem}>
        {children}
      </Box>
    )
  }

  return { items, ordered, end: index }
}

const MarkdownMessage = ({ content }: { content: string }) => {
  const { body, sources } = splitAnswerSources(stripAnswerMetadata(content))
  const lines = body.replace(/\r\n/g, '\n').split('\n')
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

    if (parseListMarker(line)) {
      const list = renderList(lines, index, 0)
      nodes.push(
        <Box
          as={list.ordered ? 'ol' : 'ul'}
          key={`list-${index}`}
          sx={
            list.ordered
              ? styles.markdownOrderedList
              : styles.markdownUnorderedList
          }
        >
          {list.items}
        </Box>
      )
      index = list.end
      continue
    }

    const paragraph: string[] = []
    const paragraphIndex = index
    while (
      index < lines.length &&
      lines[index].trim() &&
      !lines[index].match(/^#{1,6}\s+/) &&
      !parseListMarker(lines[index]) &&
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

  return (
    <Box sx={styles.markdown}>
      {nodes}
      <AnswerSources sources={sources} />
    </Box>
  )
}

export default MarkdownMessage
