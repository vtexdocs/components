import { connectHighlight } from 'react-instantsearch-dom'
import { HighlightProps, Hit } from 'react-instantsearch-core'
import { Flex, Text } from '@vtex/brand-ui'
import styles from './styles'

interface HitHighlightProps {
  value: string
  isHighlighted: boolean
}
interface CustomHighlightProps extends HighlightProps {
  searchPage?: boolean
}

function clipAroundHighlight(
  parts: HitHighlightProps[],
  maxChars: number
): HitHighlightProps[] {
  if (!parts.length) return parts

  const full = parts.map((part) => part.value).join('')
  if (full.length <= maxChars) {
    return parts.map((part) => ({ ...part }))
  }

  const firstHighlight = parts.findIndex((part) => part.isHighlighted)
  let start = 0
  if (firstHighlight > 0) {
    const beforeLength = parts
      .slice(0, firstHighlight)
      .reduce((sum, part) => sum + part.value.length, 0)
    start = Math.max(0, beforeLength - 36)
  }

  if (start > 0) {
    const space = full.lastIndexOf(' ', start)
    if (space >= 0) start = space + 1
  }

  let end = Math.min(full.length, start + maxChars)
  if (end < full.length) {
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

const Highlight = ({
  highlight,
  attribute,
  hit,
  searchPage,
}: CustomHighlightProps) => {
  const hitHighlights: HitHighlightProps[] = highlight({
    highlightProperty: '_highlightResult',
    attribute: hit.type != 'content' ? `hierarchy.${hit.type}` : attribute,
    hit,
  })
  const displayParts = clipAroundHighlight(
    hitHighlights,
    searchPage ? 700 : 160
  )

  return (
    <Flex className="hit-content-title" sx={styles.hitContentContainer}>
      <Text sx={searchPage ? styles.hitContent : styles.hitContentSmall}>
        {displayParts.map((part: HitHighlightProps, index: number) =>
          part.isHighlighted ? (
            <mark key={index} style={styles.hitContentHighlighted}>
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
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const connectedHighlight: React.ComponentClass<HighlightPassedThru<any>> =
  connectHighlight(Highlight)

export default connectedHighlight
