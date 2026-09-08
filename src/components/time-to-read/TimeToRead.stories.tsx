import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from '@vtex/brand-ui'
import TimeToRead from './index'
import LibraryContextProvider from 'utils/context/libraryContext'
import { exampleContextProps } from 'utils/storybook-constants'

const meta = {
  title: 'Example/TimeToRead',
  component: TimeToRead,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    minutes: '5',
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
} satisfies Meta<typeof TimeToRead>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const LongRead: Story = {
  args: {
    minutes: '18',
  },
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
}
