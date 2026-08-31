import type { Meta, StoryObj } from '@storybook/react'
import { Header, ThemeProvider } from '@vtex/brand-ui'
import MobileSearch from './index'
import LibraryContextProvider from 'utils/context/libraryContext'
import { exampleContextProps } from 'utils/storybook-constants'

const meta = {
  title: 'Example/MobileSearch',
  component: MobileSearch,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobileSmall',
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <LibraryContextProvider {...exampleContextProps}>
          <Header>
            <Header.Brand>Docs</Header.Brand>
            <Story />
          </Header>
        </LibraryContextProvider>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof MobileSearch>

export default meta
type Story = StoryObj<typeof meta>

export const Closed: Story = {
  args: {},
}
