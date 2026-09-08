import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from '@vtex/brand-ui'
import TroubleshootingCard from './index'

const meta = {
  title: 'Example/TroubleshootingCard',
  component: TroubleshootingCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    slug: 'order-not-created',
    title: 'Order is not created after checkout',
    description:
      'The order stays in an incomplete state and does not appear in OMS.',
    symptomFilters: ['Order not created', 'Checkout timeout'],
    domainFilters: ['Checkout', 'OMS'],
    href: '#',
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ width: 480 }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof TroubleshootingCard>

export default meta
type Story = StoryObj<typeof meta>

export const DevPortal: Story = {
  args: {
    variant: 'devportal',
  },
}

export const HelpCenter: Story = {
  args: {
    variant: 'helpcenter',
  },
}

export const FallbackTags: Story = {
  args: {
    variant: 'devportal',
    symptomFilters: [],
    domainFilters: [],
    tags: ['Checkout', 'OMS', 'Payments'],
  },
}
