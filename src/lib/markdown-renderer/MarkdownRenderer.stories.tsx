import type { Meta, StoryObj } from '@storybook/react'
import { MarkdownRenderer } from 'index'
import LibraryContextProvider from 'utils/context/libraryContext'
import { exampleContextProps, serialized } from 'utils/storybook-constants'

const meta = {
  title: 'Example/MarkdownRenderer',
  component: MarkdownRenderer,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <LibraryContextProvider {...exampleContextProps}>
        <Story />
      </LibraryContextProvider>
    ),
  ],
} satisfies Meta<typeof MarkdownRenderer>

export default meta
type Story = StoryObj<typeof meta>

export const SimpleMarkdownRenderer: Story = {
  args: {
    serialized: serialized,
  },
}
