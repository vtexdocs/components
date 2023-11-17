import type { Meta, StoryObj } from '@storybook/react'
import HamburgerMenu from './index'
import LibraryContextProvider from 'utils/context/libraryContext'
import { exampleContextProps } from 'utils/storybook-constants'
import { ThemeProvider } from '@vtex/brand-ui'

const meta = {
  title: 'Example/HamburgerMenu',
  component: HamburgerMenu,
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
} satisfies Meta<typeof HamburgerMenu>

export default meta
type Story = StoryObj<typeof meta>

export const SimpleHamburgerMenu: Story = {
  args: {
    parentsArray: [],
  },
}
