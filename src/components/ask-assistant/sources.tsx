import { useContext } from 'react'
import { Box, Flex, Text } from '@vtex/brand-ui'

import ExternalLinkIcon from 'components/icons/external-link-icon'
import PaperIcon from 'components/icons/paper-icon'
import { LibraryContext } from 'utils/context/libraryContext'
import { messages } from 'utils/get-message'

import styles from './styles'

export type AnswerSource = {
  title: string
  href: string
}

const SOURCES_HEADING_RE =
  /^(?:#{1,6}\s+)?\*{0,2}(?:references?|sources?|fontes?|refer[eê]ncias?|fuentes?)\*{0,2}:?\*{0,2}\s*$/i

const LINK_RE = /\[([^\]]+)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/

export const splitAnswerSources = (content: string) => {
  const lines = content.replace(/\r\n/g, '\n').split('\n')
  let headingIndex = -1

  for (let i = lines.length - 1; i >= 0; i -= 1) {
    if (SOURCES_HEADING_RE.test(lines[i].trim())) {
      headingIndex = i
      break
    }
  }

  if (headingIndex === -1) {
    return { body: content, sources: [] as AnswerSource[] }
  }

  const seen = new Set<string>()
  const sources: AnswerSource[] = []

  for (let i = headingIndex + 1; i < lines.length; i += 1) {
    const line = lines[i].trim()
    if (!line || /^---+$/.test(line)) continue
    const match = line.match(LINK_RE)
    if (!match) continue
    const href = match[2]
    if (seen.has(href)) continue
    seen.add(href)
    sources.push({
      title: match[1].replace(/\*\*/g, '').trim() || href,
      href,
    })
  }

  if (!sources.length) {
    return { body: content, sources: [] as AnswerSource[] }
  }

  let end = headingIndex
  while (
    end > 0 &&
    (!lines[end - 1].trim() || /^---+$/.test(lines[end - 1].trim()))
  ) {
    end -= 1
  }

  return {
    body: lines.slice(0, end).join('\n').trimEnd(),
    sources,
  }
}

const originLabel = (href: string) => {
  try {
    const host = new URL(href).hostname.replace(/^www\./, '')
    if (host === 'help.vtex.com') return 'Help Center'
    if (host === 'developers.vtex.com') return 'Developers'
    return host
  } catch {
    return ''
  }
}

const AnswerSources = ({ sources }: { sources: AnswerSource[] }) => {
  const { locale } = useContext(LibraryContext)
  const localized = messages[locale] ?? messages.en
  const title = localized['ask_assistant.sources'] || 'Sources'

  if (!sources.length) return null

  return (
    <Box sx={styles.sources}>
      <Text sx={styles.sourcesLabel}>{title}</Text>
      <Box sx={styles.sourcesList}>
        {sources.map((source) => {
          const origin = originLabel(source.href)
          return (
            <Box
              as="a"
              key={source.href}
              href={source.href}
              target="_blank"
              rel="noreferrer"
              sx={styles.sourceCard}
            >
              <Flex sx={styles.sourceIcon} aria-hidden>
                <PaperIcon size={14} />
              </Flex>
              <Box sx={styles.sourceCopy}>
                <Text className="source-title" sx={styles.sourceTitle}>
                  {source.title}
                </Text>
                {origin ? <Text sx={styles.sourceMeta}>{origin}</Text> : null}
              </Box>
              <Box as="span" className="source-arrow" sx={styles.sourceArrow}>
                <ExternalLinkIcon size={12} />
              </Box>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

export default AnswerSources
