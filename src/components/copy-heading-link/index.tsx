import {
  Children,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from 'react'
import { Box } from '@vtex/brand-ui'
import type { SxStyleProp } from '@vtex/brand-ui'
import copy from 'copy-text-to-clipboard'

import LinkIcon from 'components/icons/link-icon'
import Tooltip from 'components/tooltip'
import { LibraryContext } from 'utils/context/libraryContext'
import { messages } from 'utils/get-message'
import styles from './styles'

export type CopyHeadingLinkProps = {
  /**
   * Heading `id` used as the URL hash. An empty slug means the heading is an
   * h1 (the page title), so the copied URL has no hash.
   */
  slug?: string
  size?: number
  sx?: SxStyleProp
  /**
   * Heading text. When set, the copy control is glued to the last word so it
   * never wraps onto a line by itself.
   */
  children?: ReactNode
}

const LAST_WORD = /^(.*?)(\s+)(\S+)$/su

const glueToLastWord = (content: ReactNode, tail: ReactNode): ReactNode => {
  const glued = (word: ReactNode) => (
    <Box as="span" sx={styles.lastWord}>
      {word}
      {tail}
    </Box>
  )

  if (content == null || typeof content === 'boolean') return tail

  if (typeof content === 'string' || typeof content === 'number') {
    const text = String(content)
    const match = text.match(LAST_WORD)
    if (!match) return glued(text)
    return (
      <>
        {match[1]}
        {match[2]}
        {glued(match[3])}
      </>
    )
  }

  const items = Children.toArray(content)
  if (items.length === 0) return tail

  const last = items[items.length - 1]
  const gluedLast =
    typeof last === 'string' || typeof last === 'number'
      ? glueToLastWord(last, tail)
      : glued(last)

  if (items.length === 1) return gluedLast

  return (
    <>
      {items.slice(0, -1)}
      {gluedLast}
    </>
  )
}

export const getHeadingUrl = (slug = '') => {
  const { origin, pathname, search } = window.location
  const pageUrl = `${origin}${pathname}${search}`
  if (!slug) return pageUrl

  const hash = slug.startsWith('#') ? slug : `#${slug}`
  return `${pageUrl}${hash}`
}

const CopyHeadingLink = ({
  slug = '',
  size = 16,
  sx = {},
  children,
}: CopyHeadingLinkProps) => {
  const { locale } = useContext(LibraryContext)
  const [copied, setCopied] = useState(false)
  const copyTimeout = useRef<number | undefined>(undefined)

  const copyLabel = messages[locale]['heading_link.copy'] || 'Copy link'
  const copiedLabel = messages[locale]['heading_link.copied'] || 'Copied'
  const label = copied ? copiedLabel : copyLabel

  const handleCopy = useCallback(
    (event: MouseEvent) => {
      event.preventDefault()
      event.stopPropagation()

      copy(getHeadingUrl(slug))
      setCopied(true)
      window.clearTimeout(copyTimeout.current)
      copyTimeout.current = window.setTimeout(() => {
        setCopied(false)
      }, 2000)
    },
    [slug]
  )

  useEffect(() => () => window.clearTimeout(copyTimeout.current), [])

  const control = (
    <Tooltip
      label={label}
      placement="top"
      open={copied}
      wrapperSx={styles.tooltipWrapper}
    >
      <Box
        as="button"
        type="button"
        data-copy-heading-link
        sx={{ ...(copied ? styles.buttonCopied : styles.button), ...sx }}
        aria-label={label}
        onClick={handleCopy}
        onMouseDown={(event: MouseEvent) => event.preventDefault()}
      >
        <LinkIcon size={size} />
      </Box>
    </Tooltip>
  )

  if (children == null) return control
  return <>{glueToLastWord(children, control)}</>
}

export default CopyHeadingLink
