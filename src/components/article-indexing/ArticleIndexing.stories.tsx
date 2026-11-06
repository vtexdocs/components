import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from '@vtex/brand-ui'
import ArticleIndexing from './index'

const sampleBreadcrumb = [
  { slug: '/docs/vtex-io-apps', name: 'VTEX IO Apps', type: 'markdown' },
  { slug: '/docs/guides/b2b-suite', name: 'B2B Suite', type: 'markdown' },
]

const sampleItems = [
  { name: 'B2B Organizations', url: '/docs/apps/vtex.b2b-organizations' },
  { name: 'B2B Quotes', url: '/docs/apps/vtex.b2b-quotes' },
  {
    name: 'B2B Checkout Settings',
    url: '/docs/apps/vtex.b2b-checkout-settings',
  },
  { name: 'B2B Theme', url: '/docs/apps/vtex.b2b-theme' },
  {
    name: 'Storefront Permissions',
    url: '/docs/apps/vtex.storefront-permissions',
  },
]

const meta = {
  title: 'Example/ArticleIndexing',
  component: ArticleIndexing,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    title: 'B2B Suite',
    items: sampleItems,
    breadcrumbList: sampleBreadcrumb,
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof ArticleIndexing>

export default meta
type Story = StoryObj<typeof meta>

export const Cards: Story = {}

export const CardsWithDescriptions: Story = {
  args: {
    items: sampleItems.map((item) => ({
      ...item,
      description: `Learn how to configure ${item.name}.`,
    })),
  },
}

export const CustomLabels: Story = {
  args: {
    title: 'Pedidos',
    linkTitle: 'Ver mais',
    items: [
      {
        name: 'Gerenciar pedidos',
        url: '/pt/docs/tutorials/gerenciar-pedidos',
      },
      { name: 'Cancelar pedidos', url: '/pt/docs/tutorials/cancelar-pedidos' },
    ],
    breadcrumbList: [],
  },
}

export const WithoutBreadcrumb: Story = {
  args: {
    breadcrumbList: [],
  },
}
