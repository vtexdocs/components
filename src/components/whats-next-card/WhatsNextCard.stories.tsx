import type { Meta, StoryObj } from '@storybook/react'
import { Flex, ThemeProvider } from '@vtex/brand-ui'
import WhatsNextCard from './index'
import LibraryContextProvider from 'utils/context/libraryContext'
import { exampleContextProps } from 'utils/storybook-constants'

const meta = {
  title: 'Example/WhatsNextCard',
  component: WhatsNextCard,
  parameters: {},
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <LibraryContextProvider {...exampleContextProps}>
          <Flex>
            <Story />
          </Flex>
        </LibraryContextProvider>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof WhatsNextCard>

export default meta
type Story = StoryObj<typeof meta>

export const WhatsNextCardExample: Story = {
  args: {
    title: 'New to VTEX IO?',
    linkTo: 'https://developers.vtex.com/docs/guides/vtex-io-getting-started',
    description:
      'Build stores and IO apps from scratch with our learning-oriented tutorials.',
    linkTitle: 'Get started',
  },
}

export const WhatsNextCardImageExample: Story = {
  args: {
    title: 'Midnight',
    linkTo: 'https://developers.vtex.com/docs/guides/faststore/themes-midnight',
    image:
      'https://vtexhelp.vtexassets.com/assets/docs/src/midnight___197d3bec531d5cbd4959f2cddabacc46.png',
  },
}

export const WhatsNextCardSimpleExample: Story = {
  args: {
    title: 'New to VTEX IO?',
    linkTo: 'https://developers.vtex.com/docs/guides/vtex-io-getting-started',
  },
}
