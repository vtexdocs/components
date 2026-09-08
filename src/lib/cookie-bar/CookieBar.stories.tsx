import type { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import CookieBar from '.'
import LibraryContextProvider from 'utils/context/libraryContext'
import { ThemeProvider } from '@vtex/brand-ui'
import { exampleContextProps } from 'utils/storybook-constants'

type CookieBarStoryArgs = ComponentProps<typeof CookieBar> & {
  locale?: 'en' | 'pt' | 'es'
}

const meta = {
  title: 'Example/CookieBar',
  component: CookieBar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    locale: {
      control: 'select',
      options: ['en', 'pt', 'es'],
      description: 'Language used for the cookie bar labels',
    },
  },
  args: {
    locale: 'en',
    onAccept: async () => alert('Accept cookies'),
  },
  decorators: [
    (Story, { args }) => (
      <ThemeProvider>
        <LibraryContextProvider
          {...exampleContextProps}
          locale={args.locale ?? 'en'}
        >
          <Story />
        </LibraryContextProvider>
      </ThemeProvider>
    ),
  ],
  render: ({ locale, ...args }) => <CookieBar key={locale} {...args} />,
} satisfies Meta<CookieBarStoryArgs>

export default meta
type Story = StoryObj<typeof meta>

export const SimpleCookieBar: Story = {}

export const Spanish: Story = {
  args: {
    locale: 'es',
  },
}

export const Portuguese: Story = {
  args: {
    locale: 'pt',
  },
}
