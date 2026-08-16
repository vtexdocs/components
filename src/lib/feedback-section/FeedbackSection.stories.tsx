import type { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import FeedbackSection from './index'
import LibraryContextProvider from 'utils/context/libraryContext'
import { exampleContextProps } from 'utils/storybook-constants'
import { ThemeProvider } from '@vtex/brand-ui'

type FeedbackSectionStoryArgs = ComponentProps<typeof FeedbackSection> & {
  locale?: 'en' | 'pt' | 'es'
}

const meta = {
  title: 'Example/FeedbackSection',
  component: FeedbackSection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    locale: {
      control: 'select',
      options: ['en', 'pt', 'es'],
      description: 'Language used for the feedback labels',
    },
  },
  args: {
    locale: 'en',
    sendFeedback: async () => alert('Send feedback'),
    urlToEdit: 'https://github.com/vtexdocs/devportal',
    suggestEdits: true,
    shareButton: false,
    small: false,
  },
  decorators: [
    (Story, { args }) => (
      <ThemeProvider>
        <LibraryContextProvider
          {...exampleContextProps}
          locale={args.locale ?? 'en'}
        >
          <div style={{ width: 640 }}>
            <Story />
          </div>
        </LibraryContextProvider>
      </ThemeProvider>
    ),
  ],
  render: ({ locale, ...args }) => <FeedbackSection key={locale} {...args} />,
} satisfies Meta<FeedbackSectionStoryArgs>

export default meta
type Story = StoryObj<typeof meta>

export const SimpleFeedbackSection: Story = {}

/** Compact version used below the table of contents. */
export const Small: Story = {
  args: {
    small: true,
  },
}

export const WithShareButton: Story = {
  args: {
    shareButton: true,
  },
}

export const WithoutSuggestEdits: Story = {
  args: {
    suggestEdits: false,
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
