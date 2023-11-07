import type { Meta, StoryObj } from '@storybook/react'
import Sidebar from './index'
import LibraryContextProvider from 'utils/context/libraryContext'
import { exampleContextProps } from 'utils/storybook-constants'

const meta = {
  title: 'Example/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <LibraryContextProvider {...exampleContextProps}>
        <Story />
      </LibraryContextProvider>
    ),
  ],
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const SimpleSidebar: Story = {
  args: {
    parentsArray: [],
  },
}
