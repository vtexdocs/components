import type { IconComponent } from 'utils/typings/types'

export type AssistantStreamEvent = {
  type: string
  name?: string
  arguments?: Record<string, unknown>
  output?: string
  is_final_answer?: boolean
  content?: string
}

export type ProcessStep = {
  id: string
  name: string
  status: 'running' | 'complete'
}

export type ChatMessage = {
  id: string
  role: 'user' | 'assistant'
  content: string
  steps?: ProcessStep[]
  status: 'streaming' | 'complete' | 'error'
}

export type HistoryConversation = {
  id: string
  title: string
  messages: ChatMessage[]
}

export type AskAssistantFeedback = {
  query: string
  answer: string
  liked: boolean
}

export type AskAssistantExampleCategory = {
  id: string
  title: string
  Icon?: IconComponent
  questions: string[]
}

export type AssistantStreamHandler = (
  query: string,
  signal: AbortSignal,
  onEvent: (event: AssistantStreamEvent) => void
) => Promise<void>

export type AskAssistantProps = {
  /**
   * SSE endpoint. Relative paths are resolved against the current origin.
   */
  streamUrl?: string
  /** Override the default SSE client (useful in Storybook and tests). */
  stream?: AssistantStreamHandler
  /** Controlled open state. */
  open?: boolean
  /** Uncontrolled initial open state. */
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  /** Hide the pill trigger and only render the panel. */
  hideTrigger?: boolean
  /** Register ⌘/Ctrl + I to toggle the panel. Defaults to true. */
  enableShortcut?: boolean
  /** Seed the panel with an existing conversation. */
  initialMessages?: ChatMessage[]
  /**
   * Suggested questions shown in the empty state, grouped by category.
   * Dev Portal and Help Center should pass portal-specific lists.
   * Defaults to `DEFAULT_ASK_ASSISTANT_EXAMPLES`. Pass `[]` to hide.
   */
  examples?: AskAssistantExampleCategory[]
  /** Seed the history popover. Replaced by localStorage once a conversation is saved. */
  initialHistory?: HistoryConversation[]
  onAsk?: (query: string) => void
  onFeedback?: (payload: AskAssistantFeedback) => void
}
