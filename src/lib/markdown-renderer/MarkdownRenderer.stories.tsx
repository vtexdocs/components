import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from '@vtex/brand-ui'
import { MarkdownRenderer } from 'index'
import LibraryContextProvider from 'utils/context/libraryContext'
import {
  TestComponent,
  exampleContextProps,
  serialized,
} from 'utils/storybook-constants'

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
