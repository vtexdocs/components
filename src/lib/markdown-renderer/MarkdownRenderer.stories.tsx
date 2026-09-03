import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from '@vtex/brand-ui'
import MarkdownRenderer from './MarkdownRenderer'
import LibraryContextProvider from 'utils/context/libraryContext'
import { exampleContextProps } from 'utils/storybook-constants'
import { TestComponent, serialized } from 'utils/storybook-mdx'

const meta = {
  title: 'Example/MarkdownRenderer',
  component: MarkdownRenderer,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <LibraryContextProvider {...exampleContextProps}>
          <Story />
        </LibraryContextProvider>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof MarkdownRenderer>

export default meta
type Story = StoryObj<typeof meta>

export const SimpleMarkdownRenderer: Story = {
  args: {
    serialized: serialized,
    customComponents: { TestComponent },
    scope: {},
  },
}
