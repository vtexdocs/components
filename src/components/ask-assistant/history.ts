import type { ChatMessage, HistoryConversation } from './types'

export const HISTORY_STORAGE_KEY = 'vtex-ask-assistant-history'
export const MAX_HISTORY_ITEMS = 20

const isChatMessage = (value: unknown): value is ChatMessage => {
  if (!value || typeof value !== 'object') return false
  const message = value as ChatMessage
  return (
    typeof message.id === 'string' &&
    (message.role === 'user' || message.role === 'assistant') &&
    typeof message.content === 'string' &&
    (message.status === 'streaming' ||
      message.status === 'complete' ||
      message.status === 'error')
  )
}

const parseConversation = (value: unknown): HistoryConversation | null => {
  if (!value || typeof value !== 'object') return null
  const item = value as HistoryConversation
  if (typeof item.id !== 'string' || !Array.isArray(item.messages)) return null
  const messages = item.messages.filter(isChatMessage)
  const title =
    typeof item.title === 'string' && item.title.trim()
      ? item.title.trim()
      : messages.find((message) => message.role === 'user')?.content.trim()
  if (!title || messages.length === 0) return null
  return { id: item.id, title, messages }
}

export const conversationTitle = (messages: ChatMessage[]) =>
  messages.find((message) => message.role === 'user')?.content.trim() ?? ''

export const freezeMessages = (messages: ChatMessage[]): ChatMessage[] =>
  messages.map((message) =>
    message.status === 'streaming'
      ? {
          ...message,
          status: message.content ? 'complete' : 'error',
          steps: message.steps?.map((step) => ({
            ...step,
            status: 'complete' as const,
          })),
        }
      : message
  )

export const readHistory = (
  key = HISTORY_STORAGE_KEY
): HistoryConversation[] => {
  if (typeof window === 'undefined') return []

  try {
    const raw = window.localStorage.getItem(key)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed
      .map(parseConversation)
      .filter((item): item is HistoryConversation => Boolean(item))
  } catch {
    return []
  }
}

export const writeHistory = (
  items: HistoryConversation[],
  key = HISTORY_STORAGE_KEY
): void => {
  if (typeof window === 'undefined') return

  try {
    window.localStorage.setItem(key, JSON.stringify(items))
  } catch {
    // Ignore quota / private-mode failures.
  }
}

export const upsertHistory = (
  current: HistoryConversation[],
  conversation: HistoryConversation
): HistoryConversation[] => {
  const title = conversation.title.trim()
  const messages = freezeMessages(conversation.messages)
  if (!title || messages.length === 0) return current

  return [
    { ...conversation, title, messages },
    ...current.filter((item) => item.id !== conversation.id),
  ].slice(0, MAX_HISTORY_ITEMS)
}
