import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from '@vtex/brand-ui'
import ArticlePagination from './index'
import LibraryContextProvider from 'utils/context/libraryContext'
import { exampleContextProps } from 'utils/storybook-constants'

const samplePagination = {
  previousDoc: {
    slug: '/docs/tutorials/getting-started',
    name: 'Getting started',
  },
  nextDoc: {
    slug: '/docs/tutorials/catalog',
    name: 'Catalog',
  },
}

const meta = {
  title: 'Example/ArticlePagination',
  component: ArticlePagination,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: {
    pagination: samplePagination,
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
} satisfies Meta<typeof ArticlePagination>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const PreviousOnly: Story = {
  args: {
    pagination: {
      previousDoc: samplePagination.previousDoc,
      nextDoc: { slug: null, name: null },
    },
  },
}

export const NextOnly: Story = {
  args: {
    pagination: {
      previousDoc: { slug: null, name: null },
      nextDoc: samplePagination.nextDoc,
    },
  },
}

export const HiddenPrevious: Story = {
  args: {
    hidePaginationPrevious: true,
  },
}

export const WithCreatedAt: Story = {
  args: {
    pagination: {
      previousDoc: {
        ...samplePagination.previousDoc,
        createdAt: '2026-09-03T12:00:00.000Z',
      },
      nextDoc: {
        ...samplePagination.nextDoc,
        createdAt: '2026-09-08T12:00:00.000Z',
      },
    },
  },
}

export const WithChildren: Story = {
  args: {
    pagination: {
      previousDoc: {
        ...samplePagination.previousDoc,
        children: 'Sep 3, 2026',
      },
      nextDoc: {
        ...samplePagination.nextDoc,
        children: 'Sep 8, 2026',
      },
    },
  },
}

export const LongTitles: Story = {
  args: {
    pagination: {
      previousDoc: {
        slug: '/docs/tutorials/payment-methods',
        name: 'Payment methods and anti-fraud configuration for marketplaces',
      },
      nextDoc: {
        slug: '/docs/tutorials/shipping-strategies',
        name: 'Shipping strategies, carriers, and delivery windows',
      },
    },
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
