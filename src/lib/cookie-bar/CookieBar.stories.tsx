import type { Meta, StoryObj } from '@storybook/react'
import CookieBar from '.'
import LibraryContextProvider from 'utils/context/libraryContext'
import { ThemeProvider } from '@vtex/brand-ui'
import { exampleContextProps } from 'utils/storybook-constants'

const meta = {
  title: 'Example/CookieBar',
  component: CookieBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onAccept: () => alert('Accept cookies'),
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <LibraryContextProvider {...exampleContextProps}>
          <Story />
        </LibraryContextProvider>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof CookieBar>

export default meta
type Story = StoryObj<typeof meta>

export const SimpleCookieBar: Story = {
  args: {
    onAccept: async () => alert('Accept cookies'),
  },
}
