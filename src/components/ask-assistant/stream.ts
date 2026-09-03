import type { AssistantStreamEvent, AssistantStreamHandler } from './types'

const parseSseBlock = (block: string): AssistantStreamEvent | null => {
  let eventName = 'message'
  const dataLines: string[] = []

  for (const rawLine of block.split('\n')) {
    const line = rawLine.replace(/\r$/, '')
    if (!line || line.startsWith(':')) continue
    if (line.startsWith('event:')) {
      eventName = line.slice(6).trim()
      continue
    }
    if (line.startsWith('data:')) {
      dataLines.push(line.slice(5).trimStart())
    }
  }

  if (eventName === 'done') return { type: 'done' }

  const data = dataLines.join('\n')
  if (!data) return null

  try {
    return JSON.parse(data) as AssistantStreamEvent
  } catch {
    return null
  }
}

export const countSearchResults = (markdown = '') =>
  (markdown.match(/^## \d+\./gm) ?? []).length

export const isInternalEvent = (type: string) =>
  type === 'ActionStep' || type === 'ActionOutput'

const splitSseEvents = (buffer: string) => buffer.split(/\r\n\r\n|\n\n/)

export const streamAssistant = async (
  url: string,
  signal: AbortSignal,
  onEvent: (event: AssistantStreamEvent) => void
) => {
  const response = await fetch(url, {
    signal,
    headers: { Accept: 'text/event-stream' },
  })

  if (!response.ok || !response.body) {
    throw new Error(`Assistant request failed (${response.status})`)
  }

  const reader = response.body.getReader()
  const decoder = new TextDecoder()
  let buffer = ''

  while (true) {
    const { done, value } = await reader.read()
    if (done) break

    buffer += decoder.decode(value, { stream: true })
    const parts = splitSseEvents(buffer)
    buffer = parts.pop() ?? ''

    for (const part of parts) {
      const event = parseSseBlock(part)
      if (event) onEvent(event)
    }
  }

  const trailing = parseSseBlock(buffer)
  if (trailing) onEvent(trailing)
}

export const createDefaultStream =
  (streamUrl: string, locale?: string): AssistantStreamHandler =>
  async (query, signal, onEvent) => {
    const base =
      typeof window !== 'undefined' ? window.location.origin : undefined
    const url = new URL(streamUrl, base)
    url.searchParams.set('q', query)
    if (locale) url.searchParams.set('locale', locale)
    await streamAssistant(url.toString(), signal, onEvent)
  }
