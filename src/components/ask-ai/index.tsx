import { useContext, useEffect, useRef, useState } from 'react'
import copy from 'copy-text-to-clipboard'
import { Box, Text, IconCaret } from '@vtex/brand-ui'

import ChatGPTIcon from 'components/icons/chatgpt-icon'
import CopilotIcon from 'components/icons/copilot-icon'
import ClaudeIcon from 'components/icons/claude-icon'
import GeminiIcon from 'components/icons/gemini-icon'
import LongArrowIcon from 'components/icons/long-arrow-icon'
import MarkdownIcon from 'components/icons/markdown-icon'
import CheckIcon from 'components/icons/check-icon'
import { LibraryContext } from 'utils/context/libraryContext'
import { messages } from 'utils/get-message'
import styles from './styles'

export type AskAIProvider = {
  id: string
  name: string
  href?: string
  onClick?: () => void
}

export type AskAIMenuProps = {
  /** Markdown file path sent to `contentEndpoint` and appended to `rawContentBaseUrl`. */
  filePath: string
  /** Public page URL included in AI prompts. */
  pageUrl: string
  /** Base URL for viewing raw markdown. `filePath` is appended. */
  rawContentBaseUrl: string
  providers?: AskAIProvider[]
  onOpenProvider?: (provider: AskAIProvider) => void
  /** Endpoint that returns markdown for `filePath`. */
  contentEndpoint?: string
  /** Override the default fetch used by Copy page. */
  onCopyPage?: () => Promise<string>
}

const DEFAULT_PROVIDERS: AskAIProvider[] = [
  { id: 'chatgpt', name: 'ChatGPT', href: 'https://chat.openai.com/' },
  { id: 'copilot', name: 'Copilot', href: 'https://copilot.microsoft.com/' },
  { id: 'claude', name: 'Claude', href: 'https://claude.ai/' },
  { id: 'gemini', name: 'Gemini', href: 'https://gemini.google.com/app' },
]

const DEFAULT_CONTENT_ENDPOINT = '/api/llm-content'

const joinUrl = (base: string, path: string) =>
  `${base.replace(/\/?$/, '/')}${path.replace(/^\//, '')}`

const getMarkdownFromResponse = (data: {
  content?: string | { result?: string }
}) => {
  if (typeof data.content === 'string') return data.content
  return data.content?.result
}

const fetchMarkdown = async (filePath: string, contentEndpoint: string) => {
  const params = new URLSearchParams({ path: filePath })
  const res = await fetch(`${contentEndpoint}?${params.toString()}`)
  if (!res.ok) {
    const errorText = await res.text()
    throw new Error(`Failed to fetch content: ${res.status} ${errorText}`)
  }
  const data = await res.json()
  return getMarkdownFromResponse(data)
}

const ProviderIcon = ({ id, size = 14 }: { id: string; size?: number }) => {
  switch (id) {
    case 'chatgpt':
      return <ChatGPTIcon size={size} />
    case 'copilot':
      return <CopilotIcon size={size} />
    case 'claude':
      return <ClaudeIcon size={size} />
    case 'gemini':
      return <GeminiIcon size={size} />
    default:
      return null
  }
}

const AskAIMenu = ({
  filePath,
  pageUrl,
  rawContentBaseUrl,
  providers = DEFAULT_PROVIDERS,
  onOpenProvider,
  contentEndpoint = DEFAULT_CONTENT_ENDPOINT,
  onCopyPage,
}: AskAIMenuProps) => {
  const { locale } = useContext(LibraryContext)
  const localizedMessages = messages[locale] ?? messages.en
  const copyLabel = localizedMessages['ask_ai.copy'] || 'Copy markdown'
  const viewLabel = localizedMessages['ask_ai.view'] || 'View markdown'
  const copiedLabel = localizedMessages['ask_ai.copied'] || 'Copied'
  const [open, setOpen] = useState(false)
  const [isCopied, setIsCopied] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const handleProvider = (provider: AskAIProvider) => {
    onOpenProvider?.(provider)

    if (provider.onClick) {
      provider.onClick()
    } else if (provider.href) {
      let url = provider.href
      const prompt = `You are a helpful assistant specialized in VTEX documentation. Answer questions based on the following documentation: ${pageUrl}`

      if (provider.id === 'chatgpt') {
        url = `https://chat.openai.com/?q=${encodeURIComponent(prompt)}`
      } else if (provider.id === 'copilot') {
        url = `https://copilot.microsoft.com/?q=${encodeURIComponent(prompt)}`
      }
      window.open(url, '_blank', 'noopener,noreferrer')
    }

    setOpen(false)
  }

  const handleCopy = async () => {
    if (isLoading) return
    if (isCopied) {
      setIsCopied(false)
      return
    }
    setIsLoading(true)
    try {
      const markdown = onCopyPage
        ? await onCopyPage()
        : await fetchMarkdown(filePath, contentEndpoint)

      if (!markdown) {
        throw new Error('No content received from API')
      }

      const success = copy(markdown)
      if (success) {
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 2000)
      } else {
        throw new Error('Failed to copy to clipboard')
      }
    } catch {
      setIsCopied(false)
    } finally {
      setIsLoading(false)
    }
  }

  const handleView = () => {
    if (filePath && rawContentBaseUrl) {
      window.open(
        joinUrl(rawContentBaseUrl, filePath),
        '_blank',
        'noopener,noreferrer'
      )
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open])

  return (
    <Box ref={menuRef} sx={styles.container}>
      <Box sx={styles.group}>
        <Box
          as="button"
          type="button"
          sx={styles.primaryBtn}
          onClick={handleCopy}
          aria-label={isCopied ? copiedLabel : copyLabel}
          disabled={isLoading}
        >
          {isCopied ? <CheckIcon size={14} /> : <MarkdownIcon size={14} />}
          <Text>{isCopied ? copiedLabel : copyLabel}</Text>
        </Box>

        <Box
          as="button"
          type="button"
          sx={styles.caretBtn}
          onClick={() => setOpen((isOpen) => !isOpen)}
          aria-haspopup="menu"
          aria-expanded={open}
          aria-controls="askai-menu"
        >
          <IconCaret direction={open ? 'up' : 'down'} />
        </Box>
      </Box>

      {open && (
        <Box id="askai-menu" sx={styles.askaiMenu} role="menu">
          <Box sx={styles.askaiSection}>
            {providers.map((provider) => (
              <Box
                as="button"
                key={`lu-${provider.id}`}
                sx={styles.askaiItem}
                onClick={() => handleProvider(provider)}
                role="menuitem"
                aria-label={`Open ${provider.name}`}
              >
                <ProviderIcon id={provider.id} size={12} />
                <span>
                  {provider.name} <LongArrowIcon size={12} />
                </span>
              </Box>
            ))}
          </Box>

          <Box sx={styles.askaiSection}>
            <Box
              as="button"
              sx={styles.askaiItem}
              onClick={handleView}
              aria-label={viewLabel}
            >
              <MarkdownIcon size={12} />
              {viewLabel}
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default AskAIMenu
