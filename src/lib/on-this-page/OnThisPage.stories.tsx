import type { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import OnThisPage from './index'
import LibraryContextProvider from 'utils/context/libraryContext'
import { exampleContextProps } from 'utils/storybook-constants'
import { ThemeProvider } from '@vtex/brand-ui'
import { Item } from 'lib/table-of-contents/TableOfContents.types'

type OnThisPageStoryArgs = ComponentProps<typeof OnThisPage> & {
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

const meta = {
  title: 'Example/OnThisPage',
  component: OnThisPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobileSmall',
    },
  },
  argTypes: {
    locale: {
      control: 'select',
      options: ['en', 'pt', 'es'],
      description: 'Language used for the on this page labels',
    },
  },
  args: {
    locale: 'en',
    headingList,
  },
  decorators: [
    (Story, { args }) => (
      <ThemeProvider>
        <LibraryContextProvider
          {...exampleContextProps}
          locale={args.locale ?? 'en'}
        >
          <div style={{ minHeight: '100vh', padding: 24 }}>
            <p style={{ color: '#4A4A4A', maxWidth: 360 }}>
              Mobile floating table of contents. Tap the control at the bottom
              right to open it.
            </p>
            <Story />
          </div>
        </LibraryContextProvider>
      </ThemeProvider>
    ),
  ],
  render: ({ locale, ...args }) => <OnThisPage key={locale} {...args} />,
} satisfies Meta<OnThisPageStoryArgs>

export default meta
type Story = StoryObj<typeof meta>

export const SimpleOnThisPage: Story = {}

export const FlatHeadings: Story = {
  args: {
    headingList: [
      { title: 'Overview', slug: 'overview', children: [] },
      { title: 'Prerequisites', slug: 'prerequisites', children: [] },
      { title: 'Next steps', slug: 'next-steps', children: [] },
    ],
  },
}

export const Empty: Story = {
  args: {
    headingList: [],
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
