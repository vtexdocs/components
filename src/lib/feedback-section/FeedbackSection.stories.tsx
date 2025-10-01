import type { Meta, StoryObj } from '@storybook/react'
import FeedbackSection from './index'

const meta = {
  title: 'Example/FeedbackSection',
  component: FeedbackSection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    sendFeedback: () => alert('Send feedback'),
  },
} satisfies Meta<typeof FeedbackSection>

export default meta
type Story = StoryObj<typeof meta>

export const SimpleFeedbackSection: Story = {
  args: {
    sendFeedback: async () => alert('Send feedback'),
    small: true,
  },
}
