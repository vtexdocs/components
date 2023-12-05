import type { Meta, StoryObj } from '@storybook/react'
import CookieBar from '.'

const meta = {
  title: 'Example/CookieBar',
  component: CookieBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onAccept: () => alert('Accept cookies'),
  },
} satisfies Meta<typeof CookieBar>

export default meta
type Story = StoryObj<typeof meta>

export const SimpleCookieBar: Story = {
  args: {
    onAccept: async () => alert('Accept cookies'),
  },
}
