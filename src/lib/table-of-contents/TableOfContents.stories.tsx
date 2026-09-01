import type { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import TableOfContents from './index'
import LibraryContextProvider from 'utils/context/libraryContext'
import { exampleContextProps } from 'utils/storybook-constants'
import { ThemeProvider } from '@vtex/brand-ui'
import FeedbackSection from 'lib/feedback-section'
import { Item } from './TableOfContents.types'

type TableOfContentsStoryArgs = ComponentProps<typeof TableOfContents> & {
  locale?: 'en' | 'pt' | 'es'
}

const headingList: Item[] = [
  { title: 'Before you begin', slug: 'before-you-begin', children: [] },
  {
    title: 'Configuration',
    slug: 'configuration',
    children: [
      { title: 'Environment variables', slug: 'environment-variables' },
      { title: 'Authentication', slug: 'authentication' },
    ],
  },
  {
    title: 'Usage',
    slug: 'usage',
    children: [
      { title: 'Creating a client', slug: 'creating-a-client' },
      { title: 'Making requests', slug: 'making-requests' },
    ],
  },
  { title: 'Troubleshooting', slug: 'troubleshooting', children: [] },
]

const feedback = (
  <FeedbackSection sendFeedback={async () => alert('Send feedback')} small />
)

const meta = {
  title: 'Example/TableOfContents',
  component: TableOfContents,
  tags: ['autodocs'],
  argTypes: {
    locale: {
      control: 'select',
      options: ['en', 'pt', 'es'],
      description: 'Language used for the table of contents title',
    },
  },
  args: {
    locale: 'en',
    headingList,
    children: feedback,
  },
  decorators: [
    (Story, { args }) => (
      <ThemeProvider>
        <LibraryContextProvider
          {...exampleContextProps}
          locale={args.locale ?? 'en'}
        >
          <div style={{ maxWidth: 240, padding: 16 }}>
            <Story />
          </div>
        </LibraryContextProvider>
      </ThemeProvider>
    ),
  ],
  render: ({ locale, ...args }) => <TableOfContents key={locale} {...args} />,
} satisfies Meta<TableOfContentsStoryArgs>

export default meta
type Story = StoryObj<typeof meta>

/** Typical docs sidebar: headings plus the compact feedback section. */
export const SimpleTableOfContents: Story = {}

export const WithoutFeedback: Story = {
  args: {
    children: undefined,
  },
}

export const FlatHeadings: Story = {
  args: {
    headingList: [
      { title: 'Overview', slug: 'overview', children: [] },
      { title: 'Prerequisites', slug: 'prerequisites', children: [] },
      { title: 'Next steps', slug: 'next-steps', children: [] },
    ],
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

/** Auto-discovers h2+ headings inside MarkdownRenderer, ignoring page headings. */
export const FromMarkdownRenderer: Story = {
  args: {
    headingList: [],
    children: undefined,
  },
  render: ({ locale, ...args }) => (
    <>
      <h1 id="page-title">Page title</h1>
      <h2 id="outside-markdown">Outside markdown</h2>
      <div data-markdown-renderer>
        <h2 id="overview">Overview</h2>
        <h3 id="installation">Installation</h3>
        <h2 id="usage">Usage</h2>
        <h4 id="details">Details</h4>
      </div>
      <TableOfContents key={locale} {...args} />
    </>
  ),
}
