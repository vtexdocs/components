import {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
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

  return (
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
}

export default CopyHeadingLink
