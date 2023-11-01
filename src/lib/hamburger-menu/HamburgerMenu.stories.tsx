import type { Meta, StoryObj } from '@storybook/react'
import HamburgerMenu from './index'
import LibraryContextProvider from 'utils/context/libraryContext'
import { exampleContextProps } from 'utils/storybook-constants'

const meta = {
  title: 'Example/HamburgerMenu',
  component: HamburgerMenu,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <LibraryContextProvider {...exampleContextProps}>
        <Story />
      </LibraryContextProvider>
    ),
  ],
} satisfies Meta<typeof HamburgerMenu>

export default meta
type Story = StoryObj<typeof meta>

export const SimpleHamburgerMenu: Story = {
  args: {
    parentsArray: [],
  },
}
