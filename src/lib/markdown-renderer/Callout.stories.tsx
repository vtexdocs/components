import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from '@vtex/brand-ui'
import { Callout } from './components'

const meta = {
  title: 'Example/MarkdownRenderer/Callout',
  component: Callout,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Callout>

export default meta
type Story = StoryObj<typeof meta>

export const Info: Story = {
  args: {
    node: {},
    icon: 'info',
    children: 'This is an info callout.',
  },
}

export const Warning: Story = {
  args: {
    node: {},
    icon: 'warning',
    children: 'This is a warning callout.',
  },
}

export const Danger: Story = {
  args: {
    node: {},
    icon: 'danger',
    children: 'This is a danger callout.',
  },
}

export const Success: Story = {
  args: {
    node: {},
    icon: 'success',
    children: 'This is a success callout.',
  },
}
