import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from '@vtex/brand-ui'
import AnnouncementBar from '.'

const meta = {
  title: 'Example/AnnouncementBar',
  component: AnnouncementBar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof AnnouncementBar>

export default meta
type Story = StoryObj<typeof meta>

export const Warning: Story = {
  args: {
    closable: false,
    type: 'warning',
    label:
      'You are currently using a preview branch. This content may differ from the published version.',
    action: {
      button: 'EXIT PREVIEW MODE',
      href: '#',
      target: '_self',
    },
  },
}

export const Closable: Story = {
  args: {
    closable: true,
    type: 'new',
    label: 'We want to know more about you and how you use our docs. ',
    action: {
      button: 'Fill in our survey! It takes less than 5 minutes.',
      href: 'https://forms.gle/5EvnahjuwQqwumDd9',
    },
  },
}
