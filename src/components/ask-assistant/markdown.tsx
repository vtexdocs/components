import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { Box, Text } from '@vtex/brand-ui'
import copy from 'copy-text-to-clipboard'

import { getLinkTargetProps } from 'utils/link-utils'
import AnswerSources, { splitAnswerSources } from './sources'
import styles from './styles'

const ANSWER_METADATA_RE =
  /(?:\r?\n[ \t]*){0,3}(?:[*_]{1,2}[ \t]*)?Language:[ \t]*[^\n|]+[ \t]*\|[ \t]*Confidence:[ \t]*[^\n*_]+(?:[ \t]*[*_]{1,2})?[ \t]*$/i

export const stripAnswerMetadata = (content: string) =>
  content.replace(ANSWER_METADATA_RE, '').trimEnd()

// Order matters: inline code must win over emphasis/link markers inside it,
// and markdown links must win over the bare URL autolink.
// The outer capturing group makes String.split keep the matched tokens.
const INLINE_TOKEN = new RegExp(
  `(${[
    '`[^`\\n]+`',
    '\\[[^\\]\\n]+\\]\\([^)\\s]+(?:\\s+"[^"]*")?\\)',
    '\\*\\*[^*\\n]+\\*\\*',
    '__[^_\\n]+__',
    '~~[^~\\n]+~~',
    '\\*(?!\\s)[^*\\n]+?(?<!\\s)\\*',
    '(?<![\\w`])_(?!\\s)[^_\\n]+?(?<!\\s)_(?!\\w)',
    'https?:\\/\\/[^\\s<>()]+[^\\s<>().,;:!?\'"]',
  ].join('|')})`,
  'g'
)

const LINK_RE = /^\[([^\]]+)\]\(([^)\s]+)(?:\s+"[^"]*")?\)$/
const BARE_URL_RE = /^https?:\/\//

const renderInline = (text: string, keyPrefix: string): ReactNode[] => {
  const parts = text.split(INLINE_TOKEN)

  return parts.map((part, index) => {
    const key = `${keyPrefix}-${index}`
    if (!part) return null

    if (part.startsWith('`') && part.endsWith('`') && part.length > 2) {
      return (
        <Box as="code" key={key} sx={styles.inlineCode}>
          {part.slice(1, -1)}
        </Box>
      )
    }

    const link = part.match(LINK_RE)
    if (link) {
      return (
        <Box
          as="a"
          key={key}
          href={link[2]}
          {...getLinkTargetProps(link[2])}
          sx={styles.markdownLink}
        >
          {renderInline(link[1], key)}
        </Box>
      )
    }

    if (BARE_URL_RE.test(part)) {
      return (
        <Box
          as="a"
          key={key}
          href={part}
          {...getLinkTargetProps(part)}
          sx={styles.markdownLink}
        >
          {part}
        </Box>
      )
    }

    if (
      part.length > 4 &&
      ((part.startsWith('**') && part.endsWith('**')) ||
        (part.startsWith('__') && part.endsWith('__')))
    ) {
      return <strong key={key}>{renderInline(part.slice(2, -2), key)}</strong>
    }

    if (part.length > 4 && part.startsWith('~~') && part.endsWith('~~')) {
      return <del key={key}>{renderInline(part.slice(2, -2), key)}</del>
    }

    if (
      part.length > 2 &&
      ((part.startsWith('*') && part.endsWith('*')) ||
        (part.startsWith('_') && part.endsWith('_')))
    ) {
      return <em key={key}>{renderInline(part.slice(1, -1), key)}</em>
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

const FENCE_RE = /^\s*(`{3,}|~{3,})\s*([\w+#.-]*)\s*$/
const HEADING_RE = /^(#{1,6})\s+(.*)$/
const RULE_RE = /^(?:-{3,}|\*{3,}|_{3,})$/
const QUOTE_RE = /^\s*>\s?(.*)$/
const TABLE_DIVIDER_RE = /^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)*\|?\s*$/
const LIST_ITEM_RE = /^(\s*)([-*+]|\d+[.)])\s+(.*)$/

const isFenceStart = (line: string) => FENCE_RE.test(line)
const isHeading = (line: string) => HEADING_RE.test(line)
const isRule = (line: string) => RULE_RE.test(line.trim())
const isQuote = (line: string) => /^\s*>/.test(line)
const isTableStart = (lines: string[], index: number) =>
  lines[index].includes('|') &&
  index + 1 < lines.length &&
  TABLE_DIVIDER_RE.test(lines[index + 1])

const startsBlock = (lines: string[], index: number) => {
  const line = lines[index]
  return (
    !line.trim() ||
    isFenceStart(line) ||
    isHeading(line) ||
    isRule(line) ||
    isQuote(line) ||
    isTableStart(lines, index) ||
    parseListMarker(line) !== null
  )
}

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
    ordered: /^\d+[.)]$/.test(match[2]),
    text: match[3],
  }
}

const nextNonBlank = (lines: string[], from: number) => {
  let index = from
  while (index < lines.length && !lines[index].trim()) index += 1
  return index
}

const CodeBlock = ({ code, language }: { code: string; language: string }) => {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timeout = window.setTimeout(() => setCopied(false), 1500)
    return () => window.clearTimeout(timeout)
  }, [copied])

  return (
    <Box sx={styles.codeBlock}>
      <Box sx={styles.codeBlockHeader}>
        <Text sx={styles.codeBlockLanguage}>{language || 'code'}</Text>
        <Box
          as="button"
          type="button"
          aria-label="Copy code"
          sx={styles.codeBlockCopy}
          onClick={() => {
            copy(code)
            setCopied(true)
          }}
        >
          {copied ? 'Copied' : 'Copy'}
        </Box>
      </Box>
      <Box as="pre" sx={styles.codeBlockPre}>
        <Box as="code" sx={styles.codeBlockCode}>
          {code}
        </Box>
      </Box>
    </Box>
  )
}

const splitTableRow = (line: string) =>
  line
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split(/(?<!\\)\|/)
    .map((cell) => cell.trim().replace(/\\\|/g, '|'))

const parseAlignments = (divider: string) =>
  splitTableRow(divider).map((cell) => {
    const left = cell.startsWith(':')
    const right = cell.endsWith(':')
    if (left && right) return 'center'
    if (right) return 'right'
    return 'left'
  })

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

    // Lazy continuation: indented plain lines belong to the current item.
    const textLines = [marker.text]
    while (
      index < lines.length &&
      lines[index].trim() &&
      !parseListMarker(lines[index]) &&
      !isFenceStart(lines[index]) &&
      /^\s+/.test(lines[index])
    ) {
      textLines.push(lines[index].trim())
      index += 1
    }

    const children: ReactNode[] = [
      ...renderInline(textLines.join(' '), `li-${itemIndex}`),
    ]

    // Indented fenced code inside a list item.
    const fenceIndex = nextNonBlank(lines, index)
    if (
      fenceIndex < lines.length &&
      /^\s+/.test(lines[fenceIndex]) &&
      isFenceStart(lines[fenceIndex])
    ) {
      const block = readFence(lines, fenceIndex)
      children.push(
        <CodeBlock
          key={`code-${fenceIndex}`}
          code={block.code}
          language={block.language}
        />
      )
      index = block.end
    }

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

const readFence = (
  lines: string[],
  start: number
): { code: string; language: string; end: number } => {
  const open = lines[start].match(FENCE_RE)
  const marker = open ? open[1] : '```'
  const language = open ? open[2].toLowerCase() : ''
  const fenceIndent = lines[start].match(/^\s*/)?.[0].length ?? 0
  const closeRe = new RegExp(`^\\s*${marker[0]}{${marker.length},}\\s*$`)
  const body: string[] = []
  let index = start + 1

  // While streaming the closing fence may not have arrived yet; render what
  // we have as code instead of leaking it into paragraphs.
  while (index < lines.length && !closeRe.test(lines[index])) {
    const line = lines[index]
    const dedent = Math.min(fenceIndent, line.match(/^\s*/)?.[0].length ?? 0)
    body.push(line.slice(dedent))
    index += 1
  }

  return {
    code: body.join('\n').replace(/\s+$/, ''),
    language,
    end: Math.min(index + 1, lines.length),
  }
}

const renderBlocks = (lines: string[], keyPrefix = 'b'): ReactNode[] => {
  const nodes: ReactNode[] = []
  let index = 0

  while (index < lines.length) {
    const line = lines[index]
    const key = `${keyPrefix}-${index}`

    if (!line.trim()) {
      index += 1
      continue
    }

    if (isFenceStart(line)) {
      const block = readFence(lines, index)
      nodes.push(
        <CodeBlock
          key={`code-${key}`}
          code={block.code}
          language={block.language}
        />
      )
      index = block.end
      continue
    }

    const heading = line.match(HEADING_RE)
    if (heading) {
      const Tag = headingTag(heading[1].length)
      nodes.push(
        <Box as={Tag} key={`h-${key}`} sx={styles.markdownHeading}>
          {renderInline(heading[2].replace(/\s+#+$/, ''), `h-${key}`)}
        </Box>
      )
      index += 1
      continue
    }

    if (isRule(line)) {
      nodes.push(<Box as="hr" key={`hr-${key}`} sx={styles.markdownRule} />)
      index += 1
      continue
    }

    if (isQuote(line)) {
      const quoteLines: string[] = []
      while (index < lines.length && isQuote(lines[index])) {
        quoteLines.push(lines[index].match(QUOTE_RE)?.[1] ?? '')
        index += 1
      }
      nodes.push(
        <Box as="blockquote" key={`q-${key}`} sx={styles.markdownQuote}>
          {renderBlocks(quoteLines, `q-${key}`)}
        </Box>
      )
      continue
    }

    if (isTableStart(lines, index)) {
      const header = splitTableRow(lines[index])
      const alignments = parseAlignments(lines[index + 1])
      const rows: string[][] = []
      index += 2
      while (
        index < lines.length &&
        lines[index].trim() &&
        lines[index].includes('|')
      ) {
        rows.push(splitTableRow(lines[index]))
        index += 1
      }

      nodes.push(
        <Box key={`t-${key}`} sx={styles.markdownTableWrapper}>
          <Box as="table" sx={styles.markdownTable}>
            <thead>
              <tr>
                {header.map((cell, cellIndex) => (
                  <Box
                    as="th"
                    key={`th-${key}-${cellIndex}`}
                    sx={{
                      ...styles.markdownTableHeadCell,
                      textAlign: alignments[cellIndex] ?? 'left',
                    }}
                  >
                    {renderInline(cell, `th-${key}-${cellIndex}`)}
                  </Box>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={`tr-${key}-${rowIndex}`}>
                  {header.map((_, cellIndex) => (
                    <Box
                      as="td"
                      key={`td-${key}-${rowIndex}-${cellIndex}`}
                      sx={{
                        ...styles.markdownTableCell,
                        textAlign: alignments[cellIndex] ?? 'left',
                      }}
                    >
                      {renderInline(
                        row[cellIndex] ?? '',
                        `td-${key}-${rowIndex}-${cellIndex}`
                      )}
                    </Box>
                  ))}
                </tr>
              ))}
            </tbody>
          </Box>
        </Box>
      )
      continue
    }

    if (parseListMarker(line)) {
      const list = renderList(lines, index, 0)
      nodes.push(
        <Box
          as={list.ordered ? 'ol' : 'ul'}
          key={`list-${key}`}
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
    const paragraphKey = key
    paragraph.push(lines[index])
    index += 1
    while (index < lines.length && !startsBlock(lines, index)) {
      paragraph.push(lines[index])
      index += 1
    }

    nodes.push(
      <Box as="p" key={`p-${paragraphKey}`} sx={styles.markdownParagraph}>
        {renderInline(
          paragraph.map((part) => part.trim()).join(' '),
          `p-${paragraphKey}`
        )}
      </Box>
    )
  }

  return nodes
}

const MarkdownMessage = ({ content }: { content: string }) => {
  const { body, sources } = splitAnswerSources(stripAnswerMetadata(content))
  const lines = body.replace(/\r\n/g, '\n').split('\n')

  return (
    <Box sx={styles.markdown}>
      {renderBlocks(lines)}
      <AnswerSources sources={sources} />
    </Box>
  )
}

export default MarkdownMessage
