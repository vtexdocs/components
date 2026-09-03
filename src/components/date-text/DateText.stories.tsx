import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from '@vtex/brand-ui'
import DateText from './index'
import LibraryContextProvider from 'utils/context/libraryContext'
import { exampleContextProps } from 'utils/storybook-constants'

const sampleDates = {
  createdAt: new Date('2024-03-12T12:00:00.000Z'),
  updatedAt: new Date('2026-09-03T12:00:00.000Z'),
}

const meta = {
  title: 'Example/DateText',
  component: DateText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: sampleDates,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <LibraryContextProvider {...exampleContextProps}>
          <div style={{ maxWidth: '720px' }}>
            <Story />
          </div>
        </LibraryContextProvider>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof DateText>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const SameDay: Story = {
  args: {
    createdAt: new Date('2026-09-03T12:00:00.000Z'),
    updatedAt: new Date('2026-09-03T18:00:00.000Z'),
  },
}

export const Spanish: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <LibraryContextProvider {...exampleContextProps} locale="es">
          <div style={{ maxWidth: '720px' }}>
            <Story />
          </div>
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
          <div style={{ maxWidth: '720px' }}>
            <Story />
          </div>
        </LibraryContextProvider>
      </ThemeProvider>
    ),
  ],
}
