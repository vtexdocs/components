import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from '@vtex/brand-ui'
import Card from './index'

const meta = {
  title: 'Example/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ width: 320 }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const FromMarkdown: Story = {
  render: () => (
    <Card>
      <p>
        <strong>Developer experience</strong>
      </p>
      <p>
        Discover how our platform enhances the developer experience, making it
        easy for your team to build and deploy applications.
      </p>
      <p>
        <a href="https://developers.vtex.com/docs/guides/developer-experience">
          See more
        </a>
      </p>
    </Card>
  ),
}

export const WithImage: Story = {
  render: () => (
    <Card>
      <p>
        <img
          src="https://placehold.co/640x320/png"
          alt="Developer experience"
        />
      </p>
      <p>
        <strong>Developer experience</strong>
      </p>
      <p>
        Discover how our platform enhances the developer experience, making it
        easy for your team to build and deploy applications.
      </p>
      <p>
        <a href="https://developers.vtex.com/docs/guides/developer-experience">
          See more
        </a>
      </p>
    </Card>
  ),
}

export const FromProps: Story = {
  args: {
    title: 'Getting started',
    description:
      'Learn how to set up your storefront and publish the first page.',
    linkTitle: 'See the guide',
    linkTo: '#',
  },
}

export const TitleOnly: Story = {
  args: {
    title: 'Getting started',
    linkTo: '#',
  },
}
