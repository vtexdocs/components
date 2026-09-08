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
      <CopyHeadingLink {...args}>Getting started</CopyHeadingLink>
    </h2>
  ),
}

export const HeadingLevels: Story = {
  render: () => (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 640 }}>
      <h1>
        <CopyHeadingLink slug="" size={20}>
          Page title
        </CopyHeadingLink>
      </h1>
      <h2 id="overview">
        <CopyHeadingLink slug="overview" size={18}>
          Overview
        </CopyHeadingLink>
      </h2>
      <h3 id="installation">
        <CopyHeadingLink slug="installation">Installation</CopyHeadingLink>
      </h3>
      <h4 id="prerequisites">
        <CopyHeadingLink slug="prerequisites" size={14}>
          Prerequisites
        </CopyHeadingLink>
      </h4>
    </div>
  ),
}

export const KeepsIconWithLastWord: Story = {
  render: () => (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 280 }}>
      <h1>
        <CopyHeadingLink slug="">
          Conheça o novo VTEX Sales App Extensibility
        </CopyHeadingLink>
      </h1>
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
            <CopyHeadingLink slug={`${args.slug}-${locale}`}>
              {locale.toUpperCase()}
            </CopyHeadingLink>
          </h3>
        </LibraryContextProvider>
      ))}
    </div>
  ),
}
