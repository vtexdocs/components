import type { Meta, StoryObj } from '@storybook/react'
import { Flex, ThemeProvider } from '@vtex/brand-ui'
import Tag from './index'

const meta = {
  title: 'Example/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: [
        'Default',
        'Selected',
        'New',
        'Gray',
        'Blue',
        'Green',
        'Deprecation',
        'Backlog',
        'Fixed',
        'Closed',
        'Scheduled',
        'No_Fix',
      ],
    },
  },
  args: {
    children: 'Tag',
    color: 'Default',
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Tag>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Selected: Story = {
  args: {
    color: 'Selected',
    children: 'Selected',
  },
}

export const New: Story = {
  args: {
    color: 'New',
    children: 'New',
  },
}

export const AllColors: Story = {
  render: () => (
    <Flex sx={{ gap: '8px', flexWrap: 'wrap', maxWidth: 480 }}>
      {(
        [
          'Default',
          'Selected',
          'New',
          'Gray',
          'Blue',
          'Green',
          'Deprecation',
          'Backlog',
          'Fixed',
          'Closed',
          'Scheduled',
          'No_Fix',
        ] as const
      ).map((color) => (
        <Tag key={color} color={color}>
          {color.replace('_', ' ')}
        </Tag>
      ))}
    </Flex>
  ),
}
