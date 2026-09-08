import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from '@vtex/brand-ui'
import SeeAlsoSection from './index'
import LibraryContextProvider from 'utils/context/libraryContext'
import { exampleContextProps } from 'utils/storybook-constants'

const sampleDocs = [
  {
    url: '/docs/guides/getting-started',
    title: 'getting-started',
    category: 'API Guides',
  },
  {
    url: '/docs/api-reference/catalog-api',
    title: 'catalog-api',
    category: 'api-reference',
  },
  {
    url: 'https://apps.vtex.com/',
    title: 'VTEX App Store',
    category: 'VTEX IO Apps',
  },
  {
    url: '/docs/guides/pre-order-items',
    title: 'Pre-order items',
    category: 'Guides',
  },
]

const meta = {
  title: 'Example/SeeAlsoSection',
  component: SeeAlsoSection,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: {
    docs: sampleDocs,
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <LibraryContextProvider {...exampleContextProps}>
          <div style={{ maxWidth: '720px' }}>
            <Story />
          </div>
        </LibraryContextProvider>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof SeeAlsoSection>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const SingleDoc: Story = {
  args: {
    docs: [sampleDocs[0]],
  },
}

export const InferredFromUrl: Story = {
  args: {
    docs: [
      { url: '/docs/guides/getting-started' },
      { url: '/docs/api-reference/catalog-api' },
      { url: '/docs/troubleshooting/timeout-on-checkout' },
    ],
  },
}

export const Spanish: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <LibraryContextProvider {...exampleContextProps} locale="es">
          <div style={{ maxWidth: '720px' }}>
            <Story />
          </div>
        </LibraryContextProvider>
      </ThemeProvider>
    ),
  ],
}

export const Portuguese: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <LibraryContextProvider {...exampleContextProps} locale="pt">
          <div style={{ maxWidth: '720px' }}>
            <Story />
          </div>
        </LibraryContextProvider>
      </ThemeProvider>
    ),
  ],
}
