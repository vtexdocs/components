import type { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from '@vtex/brand-ui'
import FeedbackModal from './index'
import LibraryContextProvider from 'utils/context/libraryContext'
import { exampleContextProps } from 'utils/storybook-constants'

type FeedbackModalStoryArgs = ComponentProps<typeof FeedbackModal> & {
  locale?: 'en' | 'pt' | 'es'
}

const meta = {
  title: 'Example/FeedbackModal',
  component: FeedbackModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    locale: {
      control: 'select',
      options: ['en', 'pt', 'es'],
      description: 'Language used for the modal labels',
    },
  },
  args: {
    locale: 'en',
    pageUrl: 'https://developers.vtex.com/docs/guides/example',
    sendFeedback: async () => undefined,
  },
  decorators: [
    (Story, { args }) => (
      <ThemeProvider>
        <LibraryContextProvider
          {...exampleContextProps}
          locale={args.locale ?? 'en'}
        >
          <Story />
        </LibraryContextProvider>
      </ThemeProvider>
    ),
  ],
  render: ({ locale, ...args }) => (
    <FeedbackModal key={locale} {...args} />
  ),
} satisfies Meta<FeedbackModalStoryArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Open: Story = {
  args: {
    defaultOpen: true,
  },
}

export const HelpCenter: Story = {
  args: {
    defaultOpen: true,
    pageUrl: 'https://help.vtex.com/docs/tutorials/example',
  },
}

export const ErrorState: Story = {
  args: {
    defaultOpen: true,
    sendFeedback: async () => {
      throw new Error('Network error')
    },
  },
}

export const Spanish: Story = {
  args: {
    locale: 'es',
    defaultOpen: true,
  },
}

export const Portuguese: Story = {
  args: {
    locale: 'pt',
    defaultOpen: true,
  },
}
