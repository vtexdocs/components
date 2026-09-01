import type { ComponentProps } from 'react'
import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from '@vtex/brand-ui'
import FeedbackModal from './index'
import LibraryContextProvider from 'utils/context/libraryContext'
import { exampleContextProps } from 'utils/storybook-constants'

type FeedbackModalStoryArgs = ComponentProps<typeof FeedbackModal> & {
  locale?: 'en' | 'pt' | 'es'
}

const InteractiveModal = (args: FeedbackModalStoryArgs) => {
  const [isOpen, setIsOpen] = useState(false)
  const { locale, ...rest } = args

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)}>
        Send feedback
      </button>
      <FeedbackModal
        key={locale}
        {...rest}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  )
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
    isOpen: true,
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
    <FeedbackModal key={locale} onClose={() => undefined} {...args} />
  ),
} satisfies Meta<FeedbackModalStoryArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Interactive: Story = {
  args: {
    isOpen: false,
  },
  render: (args) => <InteractiveModal {...args} />,
}

export const HelpCenter: Story = {
  args: {
    pageUrl: 'https://help.vtex.com/docs/tutorials/example',
  },
}

export const ErrorState: Story = {
  args: {
    sendFeedback: async () => {
      throw new Error('Network error')
    },
  },
}

export const Spanish: Story = {
  args: {
    locale: 'es',
  },
}

export const Portuguese: Story = {
  args: {
    locale: 'pt',
  },
}
