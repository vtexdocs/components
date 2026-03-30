import type { Meta, StoryObj } from '@storybook/react'
import SubscriptionList from '.'
import LibraryContextProvider from 'utils/context/libraryContext'
import { ThemeProvider } from '@vtex/brand-ui'
import { exampleContextProps } from 'utils/storybook-constants'

const meta = {
  title: 'Example/SubscriptionList',
  component: SubscriptionList,
  parameters: {
    layout: 'fullscreen',
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
} satisfies Meta<typeof SubscriptionList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Spanish: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <LibraryContextProvider {...exampleContextProps} locale="es">
          <Story />
        </LibraryContextProvider>
      </ThemeProvider>
    ),
  ],
  args: {},
}

export const Portuguese: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <LibraryContextProvider {...exampleContextProps} locale="pt">
          <Story />
        </LibraryContextProvider>
      </ThemeProvider>
    ),
  ],
  args: {},
}
