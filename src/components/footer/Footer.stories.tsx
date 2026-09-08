import type { Meta, StoryObj } from '@storybook/react'
import { Box, ThemeProvider } from '@vtex/brand-ui'
import Footer from '.'
import LibraryContextProvider from 'utils/context/libraryContext'
import { exampleContextProps } from 'utils/storybook-constants'

const LocaleSwitcherStub = () => (
  <Box sx={{ color: '#CCCED8', fontSize: '16px' }}>EN</Box>
)

const meta = {
  title: 'Example/Footer',
  component: Footer,
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
} satisfies Meta<typeof Footer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'helpcenter',
    localeSwitcher: <LocaleSwitcherStub />,
  },
}

export const DeveloperPortal: Story = {
  args: {
    variant: 'devportal',
    localeSwitcher: <LocaleSwitcherStub />,
  },
}

export const WithoutLocaleSwitcher: Story = {
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
  args: {
    localeSwitcher: <LocaleSwitcherStub />,
  },
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
  args: {
    localeSwitcher: <LocaleSwitcherStub />,
  },
}
