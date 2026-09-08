import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from '@vtex/brand-ui'
import ShareButton from './index'

const meta = {
  title: 'Example/ShareButton',
  component: ShareButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    url: 'https://developers.vtex.com',
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ minHeight: 280, minWidth: 200 }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof ShareButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
