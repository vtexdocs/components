import type { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from '@vtex/brand-ui'
import ArticleRender from './index'
import LibraryContextProvider from 'utils/context/libraryContext'
import { exampleContextProps } from 'utils/storybook-constants'
import { serialized as mdxSerialized } from 'utils/storybook-mdx'
import type { ContributorsType } from 'lib/contributors'
import type { Item } from 'lib/table-of-contents'

type ArticleRenderStoryArgs = ComponentProps<typeof ArticleRender> & {
  locale?: 'en' | 'pt' | 'es'
}

const avatar = (color: string, initial: string) =>
  `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <circle cx="16" cy="16" r="16" fill="${color}"/>
      <text x="16" y="21" text-anchor="middle" fill="white" font-size="14" font-family="sans-serif">${initial}</text>
    </svg>`
  )}`

const contributors: ContributorsType[] = [
  {
    name: 'Carolina Menezes',
    login: 'carolinamenezes',
    avatar: avatar('#E31C58', 'C'),
    userPage: 'https://github.com/carolinamenezes',
  },
  {
    name: 'Alex Rivera',
    login: 'arivera',
    avatar: avatar('#142032', 'A'),
    userPage: 'https://github.com/arivera',
  },
]

const headingList: Item[] = [
  { title: 'Clients', slug: 'clients', children: [] },
  {
    title: 'Configuration',
    slug: 'configuration',
    children: [
      { title: 'Cache', slug: 'cache' },
      { title: 'Retries', slug: 'retries' },
    ],
  },
]

const serialized = {
  ...mdxSerialized,
  frontmatter: {
    ...mdxSerialized.frontmatter,
    title: 'Clients',
    excerpt: 'Abstract communication to other services with VTEX IO Clients.',
    createdAt: '2024-03-12T12:00:00.000Z',
    updatedAt: '2026-09-03T12:00:00.000Z',
    readingTime: '4 min read',
  },
}

const meta = {
  title: 'Example/ArticleRender',
  component: ArticleRender,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    locale: {
      control: 'select',
      options: ['en', 'pt', 'es'],
      description: 'Language used for article chrome',
    },
  },
  args: {
    locale: 'en',
    serialized,
    breadcrumbList: [
      { slug: '/docs/tutorials', name: 'Tutorials', type: 'category' },
      { slug: '/docs/tutorials/clients', name: 'Clients', type: 'markdown' },
    ],
    slug: 'clients',
    path: 'docs/tutorials/clients.md',
    type: 'tutorials',
    pageUrl: 'https://help.vtex.com/docs/tutorials/clients',
    urlToEdit:
      'https://github.com/vtexdocs/help-center-content/edit/main/docs/tutorials/clients.md',
    rawContentBaseUrl:
      'https://raw.githubusercontent.com/vtexdocs/help-center-content/main/',
    contributors,
    headingList,
    headings: headingList,
    pagination: {
      previousDoc: {
        slug: '/docs/tutorials/getting-started',
        name: 'Getting started',
      },
      nextDoc: {
        slug: '/docs/tutorials/catalog',
        name: 'Catalog',
      },
    },
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
  render: ({ locale, ...args }) => <ArticleRender key={locale} {...args} />,
} satisfies Meta<ArticleRenderStoryArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithAuthor: Story = {
  args: {
    showAuthor: true,
    showContributors: false,
    showSuggestEdits: false,
  },
}

export const WithoutDates: Story = {
  args: {
    showDateText: false,
  },
}

export const HeaderExtra: Story = {
  args: {
    children: <div>Known issue ID: 123456</div>,
    showSuggestEdits: false,
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
