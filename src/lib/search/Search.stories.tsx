import type { Meta, StoryObj } from '@storybook/react'
import LibraryContextProvider from 'utils/context/libraryContext'
import { exampleContextProps } from 'utils/storybook-constants'
import Search from './index'

const meta = {
  title: 'Example/Search',
  component: Search,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <LibraryContextProvider {...exampleContextProps}>
        <Story />
      </LibraryContextProvider>
    ),
  ],
} satisfies Meta<typeof Search>

export default meta
type Story = StoryObj<typeof meta>

export const SimpleSearch: Story = {
  args: {},
}
