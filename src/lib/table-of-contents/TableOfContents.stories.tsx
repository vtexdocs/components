import type { Meta, StoryObj } from '@storybook/react'
import TableOfContents from './index'
import LibraryContextProvider from 'utils/context/libraryContext'
import { exampleContextProps } from 'utils/storybook-constants'
import { ThemeProvider } from '@vtex/brand-ui'

const meta = {
  title: 'Example/TableOfContents',
  component: TableOfContents,
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
} satisfies Meta<typeof TableOfContents>

export default meta
type Story = StoryObj<typeof meta>

export const SimpleTableOfContents: Story = {
  args: {
    headingList: [
      { title: 'Heading 1', slug: 'heading-1', children: [] },
      {
        title: 'Heading 2',
        slug: 'heading-2',
        children: [
          { title: 'Heading 3', slug: 'heading-3' },
          { title: 'Heading 4', slug: 'heading-4' },
        ],
      },
      {
        title: 'Heading 5',
        slug: 'heading-5',
        children: [],
      },
    ],
  },
}
