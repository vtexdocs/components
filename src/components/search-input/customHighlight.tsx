import { connectHighlight } from 'react-instantsearch-dom'
import { HighlightProps, Hit } from 'react-instantsearch-core'
import { Flex, Text } from '@vtex/brand-ui'
import styles from './styles'
import { stripLeadingTitleFromSnippet } from 'utils/search-hit'

interface HitHighlightProps {
  value: string
  isHighlighted: boolean
}
interface CustomHighlightProps extends HighlightProps {
  searchPage?: boolean
  query?: string
}

function partsFromQuery(text: string, query?: string): HitHighlightProps[] {
  if (!text) return []
  if (!query?.trim()) return [{ value: text, isHighlighted: false }]

  const escaped = query.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const regex = new RegExp(`(${escaped})`, 'ig')
  const normalizedQuery = query.trim().toLowerCase()

  return text
    .split(regex)
    .filter(Boolean)
    .map((part) => ({
      value: part,
      isHighlighted: part.toLowerCase() === normalizedQuery,
    }))
}

function clipAroundHighlight(
  parts: HitHighlightProps[],
  maxChars: number,
  contextBefore = 36
): HitHighlightProps[] {
  if (!parts.length) return parts

  const full = parts.map((part) => part.value).join('')
  const firstHighlight = parts.findIndex((part) => part.isHighlighted)
  const highlightStart =
    firstHighlight < 0
      ? -1
      : parts
          .slice(0, firstHighlight)
          .reduce((sum, part) => sum + part.value.length, 0)
  const highlightEnd =
    highlightStart < 0
      ? -1
      : highlightStart + parts[firstHighlight].value.length

  let start = 0
  if (highlightStart >= 0 && highlightEnd > maxChars) {
    start = Math.max(0, highlightStart - contextBefore)
  }

  if (start > 0) {
    const space = full.lastIndexOf(' ', start)
    if (space >= 0) start = space + 1
  }

  let end = Math.min(full.length, start + maxChars)
  if (highlightEnd >= 0 && end < highlightEnd) {
    end = Math.min(full.length, highlightEnd + 24)
    start = Math.max(0, end - maxChars)
    const space = full.lastIndexOf(' ', start)
    if (start > 0 && space >= 0) start = space + 1
  } else if (end < full.length) {
    const space = full.lastIndexOf(' ', end)
    if (space > start) end = space
  }

  const result: HitHighlightProps[] = []
  let cursor = 0
  for (const part of parts) {
    const partStart = cursor
    const partEnd = cursor + part.value.length
    cursor = partEnd

    if (partEnd <= start || partStart >= end) continue

    const sliceFrom = Math.max(0, start - partStart)
    const sliceTo = Math.min(part.value.length, end - partStart)
    const value = part.value.slice(sliceFrom, sliceTo)
    if (!value) continue
    result.push({ value, isHighlighted: part.isHighlighted })
  }

  if (start > 0 && result.length) {
    result[0] = { ...result[0], value: `...${result[0].value}` }
  }
  if (end < full.length && result.length) {
    const last = result[result.length - 1]
    result[result.length - 1] = { ...last, value: `${last.value}...` }
  }

  return result
}

function stripLeadingTitleFromParts(
  parts: HitHighlightProps[],
  title?: string
): HitHighlightProps[] {
  if (!parts.length || !title?.trim()) return parts

  const full = parts.map((part) => part.value).join('')
  const stripped = stripLeadingTitleFromSnippet(full, title)
  if (stripped === full) return parts
  if (!stripped) return []

  const cut = full.length - stripped.length
  const result: HitHighlightProps[] = []
  let cursor = 0

  for (const part of parts) {
    const partStart = cursor
    const partEnd = cursor + part.value.length
    cursor = partEnd
    if (partEnd <= cut) continue
    const value = part.value.slice(Math.max(0, cut - partStart))
    if (!value) continue
    result.push({ ...part, value })
  }

  return result
}

export const HighlightQuery = ({
  text,
  query,
}: {
  text: string
  query?: string
}) => {
  if (!query?.trim() || !text) return <>{text}</>
  const escaped = query.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const regex = new RegExp(`(${escaped})`, 'ig')
  const parts = text.split(regex)
  const normalizedQuery = query.trim().toLowerCase()

  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === normalizedQuery ? (
          <mark key={index} style={styles.hitSnippetHighlighted}>
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </>
  )
}

const Highlight = ({
  highlight,
  attribute,
  hit,
  searchPage,
  query,
}: CustomHighlightProps) => {
  const hitHighlights: HitHighlightProps[] = highlight({
    highlightProperty: '_highlightResult',
    attribute: hit.type != 'content' ? `hierarchy.${hit.type}` : attribute,
    hit,
  })
  const title = typeof hit.doctitle === 'string' ? hit.doctitle : ''
  const strippedParts = stripLeadingTitleFromParts(hitHighlights, title)
  let snippetText = strippedParts.map((part) => part.value).join('')
  const normalizedQuery = query?.trim().toLowerCase() || ''
  if (
    normalizedQuery &&
    !snippetText.toLowerCase().includes(normalizedQuery)
  ) {
    const fallback =
      typeof hit.content === 'string'
        ? stripLeadingTitleFromSnippet(hit.content, title)
        : ''
    if (fallback.toLowerCase().includes(normalizedQuery)) {
      snippetText = fallback
    }
  }
  const queryParts = partsFromQuery(snippetText, query)
  const sourceParts = queryParts.some((part) => part.isHighlighted)
    ? queryParts
    : strippedParts
  const displayParts = clipAroundHighlight(
    sourceParts,
    searchPage ? 700 : 64,
    searchPage ? 48 : 16
  )

  if (!displayParts.length) return null

  return (
    <Flex className="hit-content-title" sx={styles.hitContentContainer}>
      <Text sx={searchPage ? styles.hitContent : styles.hitContentSmall}>
        {displayParts.map((part: HitHighlightProps, index: number) =>
          part.isHighlighted ? (
            <mark key={index} style={styles.hitSnippetHighlighted}>
              {part.value}
            </mark>
          ) : (
            part.value
          )
        )}
      </Text>
    </Flex>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface HighlightPassedThru<TDoc = any> {
  hit: Hit<TDoc>
  attribute: string
  highlightProperty?: string | undefined
  query?: string
  searchPage?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const connectedHighlight: React.ComponentClass<HighlightPassedThru<any>> =
  connectHighlight(Highlight)

export default connectedHighlight
