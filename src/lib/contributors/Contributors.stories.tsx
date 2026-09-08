import type { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Contributors from './index'
import LibraryContextProvider from 'utils/context/libraryContext'
import { exampleContextProps } from 'utils/storybook-constants'
import { ThemeProvider } from '@vtex/brand-ui'
import { ContributorsType } from './Contributors.types'

type ContributorsStoryArgs = ComponentProps<typeof Contributors> & {
  locale?: 'en' | 'pt' | 'es'
}

const avatar = (color: string, initial: string) =>
  `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <circle cx="16" cy="16" r="16" fill="${color}"/>
      <text x="16" y="21" text-anchor="middle" fill="white" font-size="14" font-family="sans-serif">${initial}</text>
    </svg>`
  )}`

const people: Array<[string, string, string, string]> = [
  ['Carolina Menezes', 'carolinamenezes', '#E31C58', 'C'],
  ['Alice Johnson', 'alice', '#142032', 'A'],
  ['Bob Smith', 'bob', '#2953E0', 'B'],
  ['Carol Williams', 'carol', '#38853C', 'C'],
  ['David Brown', 'david', '#D56A00', 'D'],
  ['Eve Davis', 'eve', '#7C3AED', 'E'],
  ['Frank Miller', 'frank', '#0F766E', 'F'],
  ['Grace Wilson', 'grace', '#9F1239', 'G'],
  ['Henry Taylor', 'henry', '#0369A1', 'H'],
  ['Ivy Martinez', 'ivy', '#B45309', 'I'],
  ['Jack Anderson', 'jack', '#6D28D9', 'J'],
  ['Kara Thomas', 'kara', '#BE185D', 'K'],
]

const sampleContributors: ContributorsType[] = people.map(
  ([name, login, color, initial]) => ({
    name,
    login,
    avatar: avatar(color, initial),
    userPage: `https://github.com/${login}`,
  })
)

const meta = {
  title: 'Example/Contributors',
  component: Contributors,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    locale: {
      control: 'select',
      options: ['en', 'pt', 'es'],
      description: 'Language used for the contributors labels',
    },
  },
  args: {
    locale: 'en',
    contributors: sampleContributors,
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
  render: ({ locale, ...args }) => <Contributors key={locale} {...args} />,
} satisfies Meta<ContributorsStoryArgs>

export default meta
type Story = StoryObj<typeof meta>

/** Enough contributors to show the expand/collapse control. */
export const SimpleContributors: Story = {}

export const FewContributors: Story = {
  args: {
    contributors: sampleContributors.slice(0, 3),
  },
}

export const Empty: Story = {
  args: {
    contributors: [],
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
