import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from '@vtex/brand-ui'
import Author from './index'
import type { ContributorsType } from 'lib/contributors'

const avatar = (color: string, initial: string) =>
  `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <circle cx="16" cy="16" r="16" fill="${color}"/>
      <text x="16" y="21" text-anchor="middle" fill="white" font-size="14" font-family="sans-serif">${initial}</text>
    </svg>`
  )}`

const sampleContributor: ContributorsType = {
  name: 'Carolina Menezes',
  login: 'carolinamenezes',
  avatar: avatar('#E31C58', 'C'),
  userPage: 'https://github.com/carolinamenezes',
}

const meta = {
  title: 'Example/Author',
  component: Author,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    contributor: sampleContributor,
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Author>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const LongName: Story = {
  args: {
    contributor: {
      ...sampleContributor,
      name: 'Maria Carolina da Silva Menezes',
      login: 'mariacarolina',
      avatar: avatar('#142032', 'M'),
    },
  },
}
