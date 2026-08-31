import type { Meta, StoryObj } from '@storybook/react'
import LibraryContextProvider from 'utils/context/libraryContext'
import { exampleContextProps } from 'utils/storybook-constants'
import Search from './index'
import { ThemeProvider } from '@vtex/brand-ui'

const meta = {
  title: 'Example/Search',
  component: Search,
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      router: {
        pathname: '/search',
        query: {
          keyword: 'catalog',
        },
      },
    },
  },
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
} satisfies Meta<typeof Search>

export default meta
type Story = StoryObj<typeof meta>

export const SimpleSearch: Story = {
  args: {},
}

export const MobileSearch: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'mobileSmall',
    },
  },
}
