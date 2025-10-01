import type { Meta, StoryObj } from '@storybook/react'
import CopyLinkButton from '.'
import LibraryContextProvider from 'utils/context/libraryContext'
import { ThemeProvider } from '@vtex/brand-ui'
import { exampleContextProps } from 'utils/storybook-constants'

const meta = {
  title: 'Example/CopyLinkButton',
  component: CopyLinkButton,
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
} satisfies Meta<typeof CopyLinkButton>

export default meta
type Story = StoryObj<typeof meta>

export const CopyLink: Story = {
  args: {},
}
