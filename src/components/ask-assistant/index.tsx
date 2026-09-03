import {
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from 'react'
import { createPortal } from 'react-dom'
import copy from 'copy-text-to-clipboard'
import { Box, Flex, Text } from '@vtex/brand-ui'

import BookIcon from 'components/icons/book-icon'
import CheckIcon from 'components/icons/check-icon'
import CloseIcon from 'components/icons/close-icon'
import CollapseIcon from 'components/icons/collapse-icon'
import CopyIcon from 'components/icons/copy-icon'
import ExpandIcon from 'components/icons/expand-icon'
import HistoryIcon from 'components/icons/history-icon'
import LikeIcon from 'components/icons/like-icon'
import LikeSelectedIcon from 'components/icons/like-selected-icon'
import RefreshIcon from 'components/icons/refresh-icon'
import SearchIcon from 'components/icons/search-icon'
import SendIcon from 'components/icons/send-icon'
import SparkleIcon from 'components/icons/sparkle-icon'
import NewChatIcon from 'components/icons/new-chat-icon'
import { LibraryContext } from 'utils/context/libraryContext'
import { messages } from 'utils/get-message'

import { DEFAULT_ASK_ASSISTANT_EXAMPLES } from './default-examples'
import {
  conversationTitle,
  readHistory,
  upsertHistory,
  writeHistory,
} from './history'
import MarkdownMessage from './markdown'
import { createDefaultStream, isInternalEvent } from './stream'
import styles from './styles'
import type {
  AskAssistantProps,
  AssistantStreamEvent,
  ChatMessage,
  HistoryConversation,
  ProcessStep,
} from './types'

const createId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`

const isMacShortcut = () =>
  typeof navigator !== 'undefined' &&
  /Mac|iPhone|iPad|iPod/.test(navigator.platform)

const toolStepLabel = (name: string, labels: Record<string, string>) => {
  if (name === 'search_documentation') return labels.stepSearchDocs
  if (name === 'search_endpoints') return labels.stepSearchEndpoints
  if (name === 'get_endpoint_details') return labels.stepReadEndpoints
  if (name === 'fetch_document') return labels.stepReadDocument
  if (name === 'final_answer') return labels.stepCreateResponse
  return labels.stepSearch
}

const processHeaderText = (
  count: number,
  complete: boolean,
  labels: Record<string, string>
) => {
  if (!complete) return labels.processRunning
  if (count === 1) return labels.processCompletedOne
  return labels.processCompleted.replace('{count}', String(count))
}

const ToolStepIcon = ({ name }: { name: string }) =>
  name === 'final_answer' || name === 'fetch_document' ? (
    <BookIcon size={14} sx={styles.processBookIcon} />
  ) : (
    <SearchIcon size={14} sx={styles.processStepIcon} />
  )

const completeSteps = (steps: ProcessStep[] = []): ProcessStep[] =>
  steps.map((step) =>
    step.status === 'complete' ? step : { ...step, status: 'complete' }
  )

const ensureFinalStep = (steps: ProcessStep[] = []): ProcessStep[] => {
  const next = completeSteps(steps)
  if (next.some((step) => step.name === 'final_answer')) return next
  return [...next, { id: createId(), name: 'final_answer', status: 'complete' }]
}

const AskAssistant = ({
  streamUrl,
  stream,
  open,
  defaultOpen = false,
  onOpenChange,
  hideTrigger = false,
  enableShortcut = true,
  initialMessages = [],
  examples = DEFAULT_ASK_ASSISTANT_EXAMPLES,
  initialHistory = [],
  onAsk,
  onFeedback,
}: AskAssistantProps) => {
  const { locale } = useContext(LibraryContext)
  const localized = messages[locale] ?? messages.en
  const titleId = useId()
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const historyRef = useRef<HTMLDivElement>(null)
  const abortRef = useRef<AbortController | null>(null)
  const pendingToolsRef = useRef<{ name: string; stepId: string }[]>([])
  const conversationIdRef = useRef<string | null>(null)
  const chatRef = useRef<ChatMessage[]>(initialMessages)

  const [mounted, setMounted] = useState(false)
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen)
  const [expanded, setExpanded] = useState(false)
  const [draft, setDraft] = useState('')
  const [chat, setChat] = useState<ChatMessage[]>(initialMessages)
  const [feedback, setFeedback] = useState<Record<string, boolean>>({})
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [activeExampleId, setActiveExampleId] = useState(examples[0]?.id ?? '')
  const [history, setHistory] = useState<HistoryConversation[]>(initialHistory)
  const [historyOpen, setHistoryOpen] = useState(false)

  const isOpen = open ?? uncontrolledOpen
  const isStreaming = chat.some((message) => message.status === 'streaming')
  const canSend = Boolean(draft.trim()) && !isStreaming

  const labels = useMemo(
    () => ({
      button: localized['ask_assistant.button'] || 'Ask Assistant',
      title: localized['ask_assistant.title'] || 'Assistant',
      placeholder:
        localized['ask_assistant.placeholder'] || 'Ask a question...',
      send: localized['ask_assistant.send'] || 'Send',
      close: localized['ask_assistant.close'] || 'Close',
      clear: localized['ask_assistant.clear'] || 'New chat',
      history: localized['ask_assistant.history'] || 'History',
      historyClear: localized['ask_assistant.history_clear'] || 'clear',
      expand: localized['ask_assistant.expand'] || 'Expand',
      collapse: localized['ask_assistant.collapse'] || 'Collapse',
      copy: localized['ask_assistant.copy'] || 'Copy',
      copied: localized['ask_assistant.copied'] || 'Copied',
      regenerate: localized['ask_assistant.regenerate'] || 'Regenerate',
      helpful: localized['ask_assistant.helpful'] || 'Helpful',
      notHelpful: localized['ask_assistant.not_helpful'] || 'Not helpful',
      error:
        localized['ask_assistant.error'] ||
        'Could not reach the assistant. Please try again.',
      searching: localized['ask_assistant.searching'] || 'Searching...',
      searchingDocs:
        localized['ask_assistant.searching_docs'] || 'Searching documentation',
      searchingEndpoints:
        localized['ask_assistant.searching_endpoints'] || 'Searching endpoints',
      readingEndpoints:
        localized['ask_assistant.reading_endpoints'] ||
        'Reading endpoint details',
      readingDocument:
        localized['ask_assistant.reading_document'] || 'Reading document',
      readFile: localized['ask_assistant.read_file'] || 'Read 1 file',
      readFiles: localized['ask_assistant.read_files'] || 'Read {count} files',
      foundEndpoint:
        localized['ask_assistant.found_endpoint'] || 'Found 1 endpoint',
      foundEndpoints:
        localized['ask_assistant.found_endpoints'] || 'Found {count} endpoints',
      examples: localized['ask_assistant.examples'] || 'Examples:',
      tool: localized['ask_assistant.tool'] || 'Tool',
      processRunning:
        localized['ask_assistant.process_running'] || 'Processing...',
      processCompleted:
        localized['ask_assistant.process_completed'] ||
        'Process completed ({count} steps)',
      processCompletedOne:
        localized['ask_assistant.process_completed_one'] ||
        'Process completed (1 step)',
      stepSearchDocs:
        localized['ask_assistant.step_search_docs'] || 'Search documentation',
      stepSearchEndpoints:
        localized['ask_assistant.step_search_endpoints'] || 'Search endpoints',
      stepReadEndpoints:
        localized['ask_assistant.step_read_endpoints'] ||
        'Read endpoint details',
      stepReadDocument:
        localized['ask_assistant.step_read_document'] || 'Read document',
      stepCreateResponse:
        localized['ask_assistant.step_create_response'] || 'Create response',
      stepSearch: localized['ask_assistant.step_search'] || 'Search',
    }),
    [localized]
  )

  const categories = useMemo(
    () =>
      examples.filter((category) =>
        category.questions.some((question) => question.trim())
      ),
    [examples]
  )

  const setOpen = useCallback(
    (next: boolean) => {
      if (open === undefined) setUncontrolledOpen(next)
      onOpenChange?.(next)
    },
    [open, onOpenChange]
  )

  const persistConversation = useCallback(
    (id: string, messages: ChatMessage[]) => {
      const title = conversationTitle(messages)
      if (!title) return

      setHistory((current) => {
        const next = upsertHistory(current, { id, title, messages })
        writeHistory(next)
        return next
      })
    },
    []
  )

  const patchAssistant = useCallback(
    (
      id: string,
      patch: Partial<ChatMessage> | ((message: ChatMessage) => ChatMessage)
    ) => {
      setChat((current) =>
        current.map((message) => {
          if (message.id !== id) return message
          return typeof patch === 'function'
            ? patch(message)
            : { ...message, ...patch }
        })
      )
    },
    []
  )

  const runStream = useCallback(
    async (query: string, assistantId: string) => {
      abortRef.current?.abort()
      const controller = new AbortController()
      abortRef.current = controller
      pendingToolsRef.current = []
      let content = ''

      const applyContent = (next: string, status?: ChatMessage['status']) => {
        if (!next) return
        content = next
        patchAssistant(assistantId, {
          content: next,
          ...(status ? { status } : {}),
        })
      }

      const handleEvent = (event: AssistantStreamEvent) => {
        if (isInternalEvent(event.type)) return

        if (event.type === 'ToolCall' && event.name) {
          const stepId = createId()
          pendingToolsRef.current.push({ name: event.name, stepId })
          patchAssistant(assistantId, (message) => ({
            ...message,
            steps: [
              ...(message.steps ?? []),
              { id: stepId, name: event.name as string, status: 'running' },
            ],
          }))
          const answer =
            event.name === 'final_answer' &&
            typeof event.arguments?.answer === 'string'
              ? event.arguments.answer
              : ''
          if (answer) applyContent(answer)
          return
        }

        if (event.type === 'ToolOutput') {
          const pending = pendingToolsRef.current.shift()
          if (pending) {
            patchAssistant(assistantId, (message) => ({
              ...message,
              steps: (message.steps ?? []).map((step) =>
                step.id === pending.stepId
                  ? { ...step, status: 'complete' }
                  : step
              ),
            }))
          }
          if (
            event.output &&
            (event.is_final_answer || pending?.name === 'final_answer')
          ) {
            applyContent(event.output)
          }
          return
        }

        if (event.type === 'FinalAnswerStep' && event.output) {
          content = event.output
          patchAssistant(assistantId, (message) => ({
            ...message,
            content: event.output as string,
            status: 'complete',
            steps: ensureFinalStep(message.steps),
          }))
        }
      }

      try {
        const run =
          stream ??
          (streamUrl ? createDefaultStream(streamUrl, locale) : undefined)
        if (!run) {
          throw new Error('AskAssistant requires stream or streamUrl')
        }
        await run(query, controller.signal, handleEvent)
        patchAssistant(assistantId, (message) => ({
          ...message,
          status: content ? 'complete' : 'error',
          content: content || labels.error,
          steps: content
            ? ensureFinalStep(message.steps)
            : completeSteps(message.steps),
        }))
      } catch (error) {
        if ((error as Error).name === 'AbortError') return
        patchAssistant(assistantId, (message) => ({
          ...message,
          status: 'error',
          content: labels.error,
          steps: completeSteps(message.steps),
        }))
      }
    },
    [labels, locale, stream, streamUrl, patchAssistant]
  )

  const submit = useCallback(
    async (text: string) => {
      const trimmed = text.trim()
      if (!trimmed || isStreaming) return

      const userMessage: ChatMessage = {
        id: createId(),
        role: 'user',
        content: trimmed,
        status: 'complete',
      }
      const assistantMessage: ChatMessage = {
        id: createId(),
        role: 'assistant',
        content: '',
        steps: [],
        status: 'streaming',
      }

      setDraft('')
      if (!conversationIdRef.current) conversationIdRef.current = createId()
      setChat((current) => {
        const next = [...current, userMessage, assistantMessage]
        chatRef.current = next
        return next
      })
      onAsk?.(trimmed)
      await runStream(trimmed, assistantMessage.id)
    },
    [isStreaming, onAsk, runStream]
  )

  const clearChat = () => {
    abortRef.current?.abort()
    if (conversationIdRef.current && chatRef.current.length > 0) {
      persistConversation(conversationIdRef.current, chatRef.current)
    }
    conversationIdRef.current = null
    setChat([])
    chatRef.current = []
    setFeedback({})
    setHistoryOpen(false)
  }

  const clearHistory = () => {
    setHistory([])
    writeHistory([])
    setHistoryOpen(false)
  }

  const openHistoryItem = (item: HistoryConversation) => {
    setHistoryOpen(false)
    if (item.id === conversationIdRef.current) return

    abortRef.current?.abort()
    if (conversationIdRef.current && chatRef.current.length > 0) {
      persistConversation(conversationIdRef.current, chatRef.current)
    }

    conversationIdRef.current = item.id
    chatRef.current = item.messages
    setChat(item.messages)
    setFeedback({})
    setDraft('')
  }

  const regenerate = (assistantId: string) => {
    const index = chat.findIndex((message) => message.id === assistantId)
    if (index < 1) return
    const userMessage = [...chat.slice(0, index)]
      .reverse()
      .find((message) => message.role === 'user')
    if (!userMessage) return

    const nextAssistant: ChatMessage = {
      id: createId(),
      role: 'assistant',
      content: '',
      steps: [],
      status: 'streaming',
    }

    setChat((current) => [
      ...current.slice(0, index),
      nextAssistant,
      ...current.slice(index + 1),
    ])
    setFeedback((current) => {
      const next = { ...current }
      delete next[assistantId]
      return next
    })
    void runStream(userMessage.content, nextAssistant.id)
  }

  const copyAnswer = (message: ChatMessage) => {
    if (!message.content) return
    copy(message.content)
    setCopiedId(message.id)
    window.setTimeout(() => setCopiedId(null), 1600)
  }

  const vote = (message: ChatMessage, liked: boolean) => {
    setFeedback((current) => ({ ...current, [message.id]: liked }))
    const messageIndex = chat.findIndex((item) => item.id === message.id)
    const query =
      chat
        .slice(0, messageIndex)
        .reverse()
        .find((item) => item.role === 'user')?.content ?? ''
    onFeedback?.({ query, answer: message.content, liked })
  }

  useEffect(() => {
    setMounted(true)
    const stored = readHistory()
    if (stored.length) setHistory(stored)
    return () => abortRef.current?.abort()
  }, [])

  useEffect(() => {
    if (!enableShortcut) return

    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'i') {
        event.preventDefault()
        setOpen(!isOpen)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [enableShortcut, isOpen, setOpen])

  useEffect(() => {
    if (!isOpen) {
      setHistoryOpen(false)
      return
    }

    const timer = window.setTimeout(() => textareaRef.current?.focus(), 50)
    return () => window.clearTimeout(timer)
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key !== 'Escape') return
      if (historyOpen) {
        setHistoryOpen(false)
        return
      }
      setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [historyOpen, isOpen, setOpen])

  useEffect(() => {
    if (!historyOpen) return

    const onPointerDown = (event: PointerEvent) => {
      if (
        historyRef.current &&
        !historyRef.current.contains(event.target as Node)
      ) {
        setHistoryOpen(false)
      }
    }

    window.addEventListener('pointerdown', onPointerDown)
    return () => window.removeEventListener('pointerdown', onPointerDown)
  }, [historyOpen])

  useEffect(() => {
    chatRef.current = chat
    if (isStreaming) return
    const id = conversationIdRef.current
    if (!id || chat.length === 0) return
    persistConversation(id, chat)
  }, [chat, isStreaming, persistConversation])

  useEffect(() => {
    const node = listRef.current
    if (node) node.scrollTop = node.scrollHeight
  }, [chat])

  useEffect(() => {
    if (!categories.some((category) => category.id === activeExampleId)) {
      setActiveExampleId(categories[0]?.id ?? '')
    }
  }, [activeExampleId, categories])

  const onDraftKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      void submit(draft)
    }
  }

  const isEmpty = chat.length === 0
  const activeCategory =
    categories.find((category) => category.id === activeExampleId) ??
    categories[0]

  const composer = (
    <Box sx={isEmpty ? styles.inputWrapCentered : styles.inputWrap}>
      <Box sx={styles.inputBox}>
        <Box
          as="textarea"
          ref={textareaRef}
          sx={styles.textarea}
          rows={2}
          value={draft}
          placeholder={labels.placeholder}
          disabled={isStreaming}
          onChange={(event: { currentTarget: { value: string } }) =>
            setDraft(event.currentTarget.value)
          }
          onKeyDown={onDraftKeyDown}
        />
        <Flex sx={styles.inputFooter}>
          <Box
            as="button"
            type="button"
            sx={styles.sendButton(canSend)}
            aria-label={labels.send}
            disabled={!canSend}
            onClick={() => void submit(draft)}
          >
            <SendIcon size={14} />
          </Box>
        </Flex>
      </Box>
    </Box>
  )

  const panel = isOpen && mounted && (
    <>
      <Box sx={styles.overlay} onClick={() => setOpen(false)} />
      <Box
        sx={styles.panel(expanded)}
        data-ask-assistant-panel
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <Flex sx={styles.header}>
          <Flex sx={styles.headerTitle} id={titleId}>
            <SparkleIcon size={16} sx={styles.triggerIcon} />
            <Text>{labels.title}</Text>
          </Flex>
          <Flex sx={styles.headerActions}>
            <Box
              as="button"
              type="button"
              sx={styles.iconButton}
              aria-label={expanded ? labels.collapse : labels.expand}
              onClick={() => setExpanded((value) => !value)}
            >
              {expanded ? <CollapseIcon size={16} /> : <ExpandIcon size={16} />}
            </Box>
            <Box
              as="button"
              type="button"
              sx={styles.iconButton}
              aria-label={labels.clear}
              disabled={isEmpty}
              onClick={clearChat}
            >
              <NewChatIcon size={16} />
            </Box>
            <Box ref={historyRef} sx={styles.historyWrap}>
              <Box
                as="button"
                type="button"
                sx={historyOpen ? styles.iconButtonActive : styles.iconButton}
                aria-label={labels.history}
                aria-haspopup="menu"
                aria-expanded={historyOpen}
                disabled={history.length === 0}
                onClick={() => setHistoryOpen((value) => !value)}
              >
                <HistoryIcon size={16} />
              </Box>
              {historyOpen && history.length > 0 ? (
                <Box
                  sx={styles.historyMenu}
                  role="menu"
                  aria-label={labels.history}
                >
                  <Flex sx={styles.historyHeader}>
                    <Text sx={styles.historyTitle}>{labels.history}</Text>
                    <Box
                      as="button"
                      type="button"
                      sx={styles.historyClear}
                      onClick={clearHistory}
                    >
                      {labels.historyClear}
                    </Box>
                  </Flex>
                  <Box sx={styles.historyList}>
                    {history.map((item) => (
                      <Box
                        key={item.id}
                        as="button"
                        type="button"
                        role="menuitem"
                        sx={styles.historyItem}
                        onClick={() => openHistoryItem(item)}
                      >
                        <HistoryIcon size={14} sx={styles.historyItemIcon} />
                        <Text sx={styles.historyItemText}>{item.title}</Text>
                      </Box>
                    ))}
                  </Box>
                </Box>
              ) : null}
            </Box>
            <Box
              as="button"
              type="button"
              sx={styles.iconButton}
              aria-label={labels.close}
              onClick={() => setOpen(false)}
            >
              <CloseIcon sx={{ width: '16px', height: '16px' }} />
            </Box>
          </Flex>
        </Flex>

        {isEmpty ? (
          <Box sx={styles.emptyState}>
            <Box sx={styles.emptyMain}>
              <Box sx={styles.emptyHero} aria-hidden>
                <Flex sx={styles.emptyHeroIcon}>
                  <SparkleIcon size={24} />
                </Flex>
              </Box>
              {composer}
              {activeCategory ? (
                <Box sx={styles.examples}>
                  <Text sx={styles.examplesLabel}>{labels.examples}</Text>
                  <Box
                    sx={styles.examplePills}
                    role="tablist"
                    aria-label={labels.examples}
                  >
                    {categories.map((category) => {
                      const Icon = category.Icon
                      const isActive = category.id === activeCategory.id
                      return (
                        <Box
                          key={category.id}
                          as="button"
                          type="button"
                          role="tab"
                          aria-selected={isActive}
                          sx={styles.examplePill(isActive)}
                          onClick={() => setActiveExampleId(category.id)}
                        >
                          {Icon ? (
                            <Icon size={14} sx={styles.examplePillIcon} />
                          ) : null}
                          {category.title}
                        </Box>
                      )
                    })}
                  </Box>
                  <Box sx={styles.exampleQuestions}>
                    {activeCategory.questions
                      .filter((question) => question.trim())
                      .map((question) => (
                        <Box
                          key={question}
                          as="button"
                          type="button"
                          sx={styles.exampleQuestion}
                          onClick={() => void submit(question)}
                        >
                          {question}
                        </Box>
                      ))}
                  </Box>
                </Box>
              ) : null}
            </Box>
          </Box>
        ) : (
          <>
            <Box ref={listRef} sx={styles.messages} aria-live="polite">
              {chat.map((message) =>
                message.role === 'user' ? (
                  <Text key={message.id} sx={styles.userBubble}>
                    {message.content}
                  </Text>
                ) : (
                  <Box key={message.id} sx={styles.assistantBlock}>
                    {message.status === 'streaming' ||
                    (message.steps && message.steps.length > 0) ? (
                      <Box sx={styles.process}>
                        {message.status === 'error' ? null : (
                          <Flex sx={styles.processHeader}>
                            {message.status === 'complete' ? (
                              <Flex sx={styles.processCheck} aria-hidden>
                                <CheckIcon size={10} />
                              </Flex>
                            ) : (
                              <Box sx={styles.processSpinner} aria-hidden />
                            )}
                            <Text>
                              {processHeaderText(
                                message.steps?.length ?? 0,
                                message.status === 'complete',
                                labels
                              )}
                            </Text>
                          </Flex>
                        )}
                        {message.steps && message.steps.length > 0 ? (
                          <Box sx={styles.processSteps}>
                            {message.steps.map((step) => (
                              <Flex key={step.id} sx={styles.processStep}>
                                <Text as="span" sx={styles.processBadge}>
                                  {labels.tool}
                                </Text>
                                <ToolStepIcon name={step.name} />
                                <Text as="span" sx={styles.processStepLabel}>
                                  {toolStepLabel(step.name, labels)}
                                </Text>
                              </Flex>
                            ))}
                          </Box>
                        ) : null}
                      </Box>
                    ) : null}
                    {message.status === 'error' ? (
                      <Text sx={styles.errorText}>{message.content}</Text>
                    ) : message.content ? (
                      <MarkdownMessage content={message.content} />
                    ) : null}
                    {message.status === 'complete' && message.content ? (
                      <Flex sx={styles.messageActions}>
                        <Box
                          as="button"
                          type="button"
                          sx={
                            feedback[message.id] === true
                              ? styles.actionButtonActive
                              : styles.actionButton
                          }
                          aria-label={labels.helpful}
                          onClick={() => vote(message, true)}
                        >
                          {feedback[message.id] === true ? (
                            <LikeSelectedIcon size={16} />
                          ) : (
                            <LikeIcon size={16} />
                          )}
                        </Box>
                        <Box
                          as="button"
                          type="button"
                          sx={
                            feedback[message.id] === false
                              ? styles.actionButtonActive
                              : styles.actionButton
                          }
                          aria-label={labels.notHelpful}
                          onClick={() => vote(message, false)}
                        >
                          <LikeIcon size={16} sx={styles.dislikeIcon} />
                        </Box>
                        <Box
                          as="button"
                          type="button"
                          sx={styles.actionButton}
                          aria-label={
                            copiedId === message.id
                              ? labels.copied
                              : labels.copy
                          }
                          onClick={() => copyAnswer(message)}
                        >
                          <CopyIcon size={14} />
                        </Box>
                        <Box
                          as="button"
                          type="button"
                          sx={styles.actionButton}
                          aria-label={labels.regenerate}
                          onClick={() => regenerate(message.id)}
                        >
                          <RefreshIcon size={14} />
                        </Box>
                      </Flex>
                    ) : null}
                  </Box>
                )
              )}
            </Box>
            {composer}
          </>
        )}
      </Box>
    </>
  )

  return (
    <>
      {hideTrigger ? null : (
        <Box
          as="button"
          type="button"
          sx={styles.trigger}
          data-ask-assistant-trigger
          aria-haspopup="dialog"
          aria-expanded={isOpen}
          onClick={() => setOpen(!isOpen)}
        >
          <SparkleIcon size={14} sx={styles.triggerIcon} />
          <Text>{labels.button}</Text>
          <Flex as="span" sx={styles.triggerShortcut} aria-hidden="true">
            <Box as="kbd" sx={styles.triggerKbd}>
              {isMacShortcut() ? '⌘' : 'Ctrl'}
            </Box>
            <Box as="kbd" sx={styles.triggerKbd}>
              I
            </Box>
          </Flex>
        </Box>
      )}
      {mounted ? createPortal(panel, document.body) : null}
    </>
  )
}

export default AskAssistant
export { DEFAULT_ASK_ASSISTANT_EXAMPLES } from './default-examples'
export type {
  AskAssistantProps,
  AskAssistantFeedback,
  AskAssistantExampleCategory,
  AssistantStreamEvent,
  AssistantStreamHandler,
  ChatMessage,
  HistoryConversation,
  ProcessStep,
} from './types'
