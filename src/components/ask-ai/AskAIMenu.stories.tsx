import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider, Box } from '@vtex/brand-ui'
import AskAIMenu from './index'

const meta = {
  title: 'Example/AskAIMenu',
  component: AskAIMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    filePath: 'docs/guides/getting-started.md',
    pageUrl: 'https://developers.vtex.com/docs/guides/getting-started',
    rawContentBaseUrl:
      'https://raw.githubusercontent.com/vtexdocs/dev-portal-content/main/',
    onCopyPage: async () =>
      '# Getting started\n\nSample markdown copied from the page.',
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Box sx={{ minHeight: 280, minWidth: 220 }}>
          <Story />
        </Box>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof AskAIMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
