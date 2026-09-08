import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from '@vtex/brand-ui'
import CopyHeadingLink from './index'
import LibraryContextProvider from 'utils/context/libraryContext'
import { exampleContextProps } from 'utils/storybook-constants'

const meta = {
  title: 'Example/CopyHeadingLink',
  component: CopyHeadingLink,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: {
    slug: 'getting-started',
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
} satisfies Meta<typeof CopyHeadingLink>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <h2 id={args.slug} style={{ fontFamily: 'sans-serif' }}>
      Getting started
      <CopyHeadingLink {...args} />
    </h2>
  ),
}

export const HeadingLevels: Story = {
  render: () => (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 640 }}>
      <h1>
        Page title
        <CopyHeadingLink slug="" size={20} />
      </h1>
      <h2 id="overview">
        Overview
        <CopyHeadingLink slug="overview" size={18} />
      </h2>
      <h3 id="installation">
        Installation
        <CopyHeadingLink slug="installation" />
      </h3>
      <h4 id="prerequisites">
        Prerequisites
        <CopyHeadingLink slug="prerequisites" size={14} />
      </h4>
    </div>
  ),
}

export const Locales: Story = {
  render: (args) => (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 640 }}>
      {(['en', 'pt', 'es'] as const).map((locale) => (
        <LibraryContextProvider
          key={locale}
          {...exampleContextProps}
          locale={locale}
        >
          <h3 id={`${args.slug}-${locale}`}>
            {locale.toUpperCase()}
            <CopyHeadingLink slug={`${args.slug}-${locale}`} />
          </h3>
        </LibraryContextProvider>
      ))}
    </div>
  ),
}
