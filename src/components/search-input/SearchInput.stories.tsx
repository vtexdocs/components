import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from '@vtex/brand-ui'
import { SearchInput } from 'index'
import LibraryContextProvider from 'utils/context/libraryContext'
import { exampleContextProps } from 'utils/storybook-constants'

const meta = {
  title: 'Example/SearchInput',
  component: SearchInput,
  parameters: {},
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <LibraryContextProvider {...exampleContextProps}>
          <div style={{ minHeight: 560, padding: 24 }}>
            <Story />
          </div>
        </LibraryContextProvider>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof SearchInput>

export default meta
type Story = StoryObj<typeof meta>

export const SimpleSearchInput: Story = {
  args: {},
}

export const ModalSearchInput: Story = {
  args: {
    variant: 'modal',
  },
  decorators: [
    (Story) => (
      <div
        style={{
          height: 560,
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid #E7E9EE',
        }}
      >
        <Story />
      </div>
    ),
  ],
}
