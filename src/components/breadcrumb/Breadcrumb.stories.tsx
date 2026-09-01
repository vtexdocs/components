import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from '@vtex/brand-ui'
import Breadcrumb from './index'

const meta = {
  title: 'Example/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: {
    breadcrumbList: [
      { slug: '/docs/tracks', name: 'Start here', type: 'markdown' },
      {
        slug: '/docs/tracks/getting-started',
        name: 'Getting started',
        type: 'markdown',
      },
      {
        slug: '/docs/tracks/getting-started/overview',
        name: 'Overview',
        type: 'markdown',
      },
    ],
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Breadcrumb>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithCategory: Story = {
  args: {
    breadcrumbList: [
      { slug: '/docs/tracks', name: 'Start here', type: 'markdown' },
      { slug: '/docs/tracks/orders', name: 'Orders', type: 'category' },
      {
        slug: '/docs/tracks/orders/invoices',
        name: 'Invoices',
        type: 'markdown',
      },
    ],
  },
}

export const LongLabels: Story = {
  args: {
    breadcrumbList: [
      { slug: '/docs/tracks', name: 'Start here', type: 'markdown' },
      {
        slug: '/docs/tracks/payments',
        name: 'Payment methods and anti-fraud configuration',
        type: 'markdown',
      },
      {
        slug: '/docs/tracks/payments/providers',
        name: 'Current page',
        type: 'markdown',
      },
    ],
  },
}
