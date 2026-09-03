import type { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from '@vtex/brand-ui'
import SuggestEdits from './index'
import LibraryContextProvider from 'utils/context/libraryContext'
import { exampleContextProps } from 'utils/storybook-constants'

type SuggestEditsStoryArgs = ComponentProps<typeof SuggestEdits> & {
  locale?: 'en' | 'pt' | 'es'
}

const meta = {
  title: 'Example/SuggestEdits',
  component: SuggestEdits,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    locale: {
      control: 'select',
      options: ['en', 'pt', 'es'],
      description: 'Language used for the edit label',
    },
  },
  args: {
    locale: 'en',
    urlToEdit:
      'https://github.com/vtexdocs/help-center-content/edit/main/docs/tutorials/example.md',
    small: false,
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
  render: ({ locale, ...args }) => <SuggestEdits key={locale} {...args} />,
} satisfies Meta<SuggestEditsStoryArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Small: Story = {
  args: {
    small: true,
  },
}

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
