import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from '@vtex/brand-ui'

import SectionCard from './index'
import SectionCardGrid from '../section-card-grid'
import {
  APIGuidesIcon,
  APIReferenceIcon,
  AppDevelopmentIcon,
  FAQIcon,
  StartHereIcon,
  TutorialsIcon,
} from '../icons'

const meta = {
  title: 'Example/SectionCard',
  component: SectionCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: {
    Icon: StartHereIcon,
    title: 'Start here',
    description: 'Learn the basics to set up and operate your store.',
    link: '#',
    ctaLabel: 'Learn more',
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof SectionCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [
    (Story) => (
      <SectionCardGrid>
        <Story />
      </SectionCardGrid>
    ),
  ],
}

export const ExternalLink: Story = {
  args: {
    Icon: FAQIcon,
    title: 'Developer Portal',
    description: 'Technical documentation for developers.',
    ctaLabel: 'Access portal',
    isExternalLink: true,
  },
  decorators: Default.decorators,
}

export const TwoCards: Story = {
  render: (args) => (
    <SectionCardGrid>
      <SectionCard {...args} />
      <SectionCard
        {...args}
        Icon={TutorialsIcon}
        title="Tutorials"
        description="Step-by-step instructions for each module."
      />
    </SectionCardGrid>
  ),
}

export const FourCards: Story = {
  render: (args) => (
    <SectionCardGrid>
      <SectionCard {...args} Icon={APIGuidesIcon} title="Guides" />
      <SectionCard {...args} Icon={APIReferenceIcon} title="API Reference" />
      <SectionCard
        {...args}
        Icon={AppDevelopmentIcon}
        title="App Development"
      />
      <SectionCard {...args} Icon={FAQIcon} title="FAQ" />
    </SectionCardGrid>
  ),
}
