import { type MouseEvent, useEffect, useId, useState } from 'react'
import { Box, Flex, IconCaret, Text } from '@vtex/brand-ui'

import TableOfContents from 'lib/table-of-contents'
import { useLocale } from 'utils/context/libraryContext'
import { messages } from 'utils/get-message'
import useFooterInView from 'utils/hooks/useFooterInView'

import styles from './styles'
import { OnThisPageProps } from './OnThisPage.types'

const ListIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M5 3.5h7M5 7h7M5 10.5h7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M2.25 3.5h.01M2.25 7h.01M2.25 10.5h.01"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
)

/** Mobile floating table of contents for documentation pages. */
const OnThisPage = ({ headingList }: OnThisPageProps) => {
  const locale = useLocale()
  const panelId = useId()
  const [isOpen, setIsOpen] = useState(false)
  const footerInView = useFooterInView()
  const title = messages[locale]['on_this_page.title']

  useEffect(() => {
    if (footerInView) setIsOpen(false)
  }, [footerInView])

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen])

  return (
    <>
      {isOpen && !footerInView && (
        <Box
          className="modal"
          data-open="true"
          sx={styles.overlay}
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <Flex
        sx={styles.container(footerInView)}
        data-on-this-page=""
        aria-hidden={footerInView}
      >
        {isOpen && (
          <Box sx={styles.panelSlot}>
            <Box
              id={panelId}
              role="dialog"
              aria-label={title}
              sx={styles.panel}
            >
              <Box
                sx={styles.panelBody}
                onClick={(event: MouseEvent<HTMLDivElement>) => {
                  const target = event.target as HTMLElement | null
                  if (target?.closest('a')) setIsOpen(false)
                }}
              >
                <TableOfContents hideTitle headingList={headingList} />
              </Box>
            </Box>
          </Box>
        )}

        <Flex
          as="button"
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          aria-haspopup="dialog"
          aria-hidden={footerInView}
          tabIndex={footerInView ? -1 : undefined}
          onClick={() => setIsOpen((open) => !open)}
          sx={styles.button}
        >
          <Box sx={styles.iconWrap(isOpen)}>
            <ListIcon />
          </Box>
          <Text as="span" sx={styles.title}>
            {title}
          </Text>
          <Box sx={styles.caret}>
            <IconCaret direction={isOpen ? 'up' : 'down'} size={16} />
          </Box>
        </Flex>
      </Flex>
    </>
  )
}

export default OnThisPage
