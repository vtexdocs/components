import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from '@vtex/brand-ui'
import WhatsNextCard from './index'

const meta = {
  title: 'Example/WhatsNextCard',
  component: WhatsNextCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    title: 'Getting started',
    description:
      'Learn how to set up your storefront and publish the first page.',
    linkTitle: 'See the guide',
    linkTo: '#',
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ width: 320 }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof WhatsNextCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const TitleOnly: Story = {
  args: {
    description: undefined,
    linkTitle: undefined,
  },
}
