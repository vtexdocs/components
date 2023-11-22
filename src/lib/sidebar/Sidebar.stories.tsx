import type { Meta, StoryObj } from '@storybook/react'
import Sidebar from './index'
import LibraryContextProvider from 'utils/context/libraryContext'
import {
  exampleContextProps,
  exampleContextPropsLocale,
} from 'utils/storybook-constants'
import { ThemeProvider } from '@vtex/brand-ui'

const meta = {
  title: 'Example/Sidebar',
  component: Sidebar,
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
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const SimpleSidebar: Story = {
  args: {
    parentsArray: [],
  },
}

/** Story in which the navigation file contains the translations in english, spanish and portuguese for each page name. */
export const SidebarWithLocale: Story = {
  args: {
    parentsArray: [],
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <LibraryContextProvider {...exampleContextPropsLocale}>
          <Story />
        </LibraryContextProvider>
      </ThemeProvider>
    ),
  ],
}
