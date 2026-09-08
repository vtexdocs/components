import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import { Box, ThemeProvider } from '@vtex/brand-ui'
import AskAssistant from './index'
import FAQIcon from 'components/icons/faq-icon'
import PaperIcon from 'components/icons/paper-icon'
import StartHereIcon from 'components/icons/start-here-icon'
import TutorialsIcon from 'components/icons/tutorials-icon'
import LibraryContextProvider from 'utils/context/libraryContext'
import { exampleContextProps } from 'utils/storybook-constants'
import type {
  AskAssistantExampleCategory,
  AssistantStreamHandler,
  ChatMessage,
  HistoryConversation,
} from './types'

const mockStream: AssistantStreamHandler = async (query, signal, onEvent) => {
  const wait = (ms: number) =>
    new Promise<void>((resolve, reject) => {
      const timer = window.setTimeout(resolve, ms)
      signal.addEventListener('abort', () => {
        window.clearTimeout(timer)
        reject(Object.assign(new Error('Aborted'), { name: 'AbortError' }))
      })
    })

  onEvent({ type: 'ToolCall', name: 'search_documentation' })
  await wait(450)
  onEvent({
    type: 'ToolOutput',
    output: `## 1. ${query}\n**URL:** https://developers.vtex.com/docs/guides/admin-api-introduction`,
  })
  await wait(400)
  onEvent({ type: 'ToolCall', name: 'search_documentation' })
  await wait(450)
  onEvent({
    type: 'ToolOutput',
    output: `## 1. Catalog overview\n**URL:** https://developers.vtex.com/docs/guides/catalog-api-overview`,
  })
  await wait(300)
  onEvent({ type: 'ToolCall', name: 'final_answer' })
  await wait(250)
  onEvent({
    type: 'FinalAnswerStep',
    output: `The VTEX Catalog is the Admin module for managing products, SKUs, brands, categories, and specifications.\n\nStart with the **[Admin API introduction](https://developers.vtex.com/docs/guides/admin-api-introduction)** and the [Catalog API overview](https://developers.vtex.com/docs/guides/catalog-api-overview).\n\n## References\n- [Catalog - Overview](https://help.vtex.com/en/docs/tutorials/catalog-overview)\n- [Catalog API - Overview](https://developers.vtex.com/docs/guides/catalog-api-overview)`,
  })
  onEvent({ type: 'done' })
}

const completedSteps = [
  {
    id: 'step-1',
    name: 'search_documentation',
    status: 'complete' as const,
  },
  {
    id: 'step-2',
    name: 'search_documentation',
    status: 'complete' as const,
  },
  {
    id: 'step-3',
    name: 'final_answer',
    status: 'complete' as const,
  },
]

const conversation: ChatMessage[] = [
  {
    id: 'user-1',
    role: 'user',
    content: 'ada',
    status: 'complete',
  },
  {
    id: 'assistant-1',
    role: 'assistant',
    content:
      'You can get started with the **[Admin API introduction](https://developers.vtex.com/docs/guides/admin-api-introduction)**.\n\n## References\n- [Admin API introduction](https://developers.vtex.com/docs/guides/admin-api-introduction)\n- [Catalog API overview](https://developers.vtex.com/docs/guides/catalog-api-overview)',
    steps: completedSteps,
    status: 'complete',
  },
]

const historyConversations: HistoryConversation[] = [
  {
    id: 'hist-1',
    title: 'o que é a admin api?',
    messages: [
      {
        id: 'hist-1-user',
        role: 'user',
        content: 'o que é a admin api?',
        status: 'complete',
      },
      {
        id: 'hist-1-assistant',
        role: 'assistant',
        content:
          'A Admin API is the HTTP interface for VTEX Admin apps.\n\nStart with the **[Admin API introduction](https://developers.vtex.com/docs/guides/admin-api-introduction)**.',
        steps: completedSteps,
        status: 'complete',
      },
    ],
  },
  {
    id: 'hist-2',
    title: 'How do I create a product in the Catalog?',
    messages: [
      {
        id: 'hist-2-user',
        role: 'user',
        content: 'How do I create a product in the Catalog?',
        status: 'complete',
      },
      {
        id: 'hist-2-assistant',
        role: 'assistant',
        content:
          'You can create a product in the VTEX Catalog with the Catalog API or through Admin.',
        steps: completedSteps,
        status: 'complete',
      },
    ],
  },
]

const meta = {
  title: 'Example/AskAssistant',
  component: AskAssistant,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  render: (args) => <AskAssistant {...args} stream={mockStream} />,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <LibraryContextProvider {...exampleContextProps}>
          <Box sx={{ minHeight: '100vh', background: '#FFFFFF' }}>
            <Box
              sx={{
                p: '32px',
                maxWidth: '760px',
                color: '#142032',
              }}
            >
              <Box
                as="p"
                sx={{
                  m: 0,
                  mb: '16px',
                  color: '#4A596B',
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}
              >
                Help Center
              </Box>
              <Box
                as="h1"
                sx={{
                  m: 0,
                  mb: '12px',
                  fontSize: '28px',
                  lineHeight: '36px',
                  fontWeight: '400',
                }}
              >
                Catalog overview
              </Box>
              <Box
                as="p"
                sx={{
                  m: 0,
                  mb: '24px',
                  color: '#4A596B',
                  fontSize: '15px',
                  lineHeight: '24px',
                }}
              >
                Page content stays in a split view while the assistant is open.
                It should reflow beside the panel instead of sitting underneath
                it.
              </Box>
              <Story />
            </Box>
          </Box>
        </LibraryContextProvider>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof AskAssistant>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const FloatingOnMobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobileSmall',
    },
  },
}

export const Open: Story = {
  args: {
    defaultOpen: true,
  },
}

export const WithHistory: Story = {
  args: {
    defaultOpen: true,
    initialHistory: historyConversations,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body)
    await userEvent.click(
      await canvas.findByRole('button', { name: /hist[oó]rico|history/i })
    )
  },
}

export const WithConversation: Story = {
  args: {
    defaultOpen: true,
    initialMessages: conversation,
  },
}

const numberedListConversation: ChatMessage[] = [
  {
    id: 'user-list',
    role: 'user',
    content: 'How do I authenticate with VTEX APIs?',
    status: 'complete',
  },
  {
    id: 'assistant-list',
    role: 'assistant',
    content:
      'To authenticate with VTEX APIs, you can use one of the following methods:\n\n1. **API Keys:**\n   - Use an `appKey` and `appToken` generated from the [Admin](https://help.vtex.com). Learn more [here](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys).\n   - The `appKey` identifies your application, and the `appToken` authenticates it.\n\n2. **User Tokens:**\n   - Use the VTEX IO CLI or the VTEX ID API. Learn more at [API authentication using user tokens](https://developers.vtex.com/docs/guides/api-authentication-using-user-tokens).\n\n3. **Login Authentication:**\n   - Sign in with your VTEX credentials to obtain a session cookie.',
    steps: completedSteps,
    status: 'complete',
  },
]

export const WithNumberedList: Story = {
  args: {
    defaultOpen: true,
    initialMessages: numberedListConversation,
  },
}

const helpCenterExamples: AskAssistantExampleCategory[] = [
  {
    id: 'getting-started',
    title: 'Getting started',
    Icon: StartHereIcon,
    questions: [
      'How do I create a product in the Catalog?',
      'How do I set up a trade policy?',
      'How do I invite a user to my account?',
    ],
  },
  {
    id: 'orders',
    title: 'Orders',
    Icon: PaperIcon,
    questions: [
      'How do I cancel an order?',
      'How do I track an order?',
      'How do I handle order invoices?',
    ],
  },
  {
    id: 'payments',
    title: 'Payments',
    Icon: TutorialsIcon,
    questions: [
      'How do I configure a payment provider?',
      'How do I set up installment rules?',
      'What is the difference between gift cards and promotional vouchers?',
    ],
  },
  {
    id: 'faq',
    title: 'FAQ',
    Icon: FAQIcon,
    questions: [
      'How do I change my store domain?',
      'How do I set up a pickup point?',
      'How do I create a promotion?',
    ],
  },
]

export const HelpCenter: Story = {
  args: {
    defaultOpen: true,
    examples: helpCenterExamples,
  },
}
