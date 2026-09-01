import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider, Box } from '@vtex/brand-ui'
import CopyButton from './index'

const sampleCode = `{
  "name": "helpcenter",
  "private": true
}`

const meta = {
  title: 'Example/CopyButton',
  component: CopyButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    code: sampleCode,
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof CopyButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const InCodeBlock: Story = {
  render: (args) => (
    <Box
      sx={{
        position: 'relative',
        width: 420,
        background: '#F8F7FC',
        border: '1px solid #E7E9EE',
        borderRadius: '8px',
        padding: '12px',
      }}
    >
      <CopyButton {...args} />
      <pre
        style={{
          margin: 0,
          fontFamily: 'monospace',
          fontSize: 14,
          whiteSpace: 'pre-wrap',
        }}
      >
        {args.code}
      </pre>
    </Box>
  ),
}

export const WithCustomPosition: Story = {
  args: {
    sx: {
      position: 'sticky',
      top: '8px',
      right: '8px',
      zIndex: 1,
      marginX: 0,
    },
  },
}
