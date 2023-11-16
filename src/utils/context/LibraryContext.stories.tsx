import type { Meta, StoryObj } from '@storybook/react'
import LibraryContextProvider from 'utils/context/libraryContext'
import { navigation, sections } from 'utils/storybook-constants'

const meta = {
  title: 'Example/LibraryContextProvider',
  component: LibraryContextProvider,
  tags: ['autodocs'],
} satisfies Meta<typeof LibraryContextProvider>

export default meta
type Story = StoryObj<typeof meta>

export const SimpleLibraryContext: Story = {
  args: {
    isPreview: false,
    fallback: navigation,
    sections: sections,
    sectionSelected: '',
    locale: 'en',
    children: <></>,
  },
}
