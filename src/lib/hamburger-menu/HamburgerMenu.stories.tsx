import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import HamburgerMenu from './index'
import LibraryContextProvider from 'utils/context/libraryContext'
import { exampleContextProps } from 'utils/storybook-constants'
import { Header, ThemeProvider } from '@vtex/brand-ui'

const openHamburger = async (canvasElement: HTMLElement) => {
  const toggle = canvasElement.querySelector<HTMLElement>(
    'button[role="presentation"]'
  )
  if (toggle) {
    await userEvent.click(toggle)
  }
}

const meta = {
  title: 'Example/HamburgerMenu',
  component: HamburgerMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobileSmall',
    },
  },
  decorators: [
    (Story, context) => (
      <ThemeProvider>
        <LibraryContextProvider
          {...exampleContextProps}
          sectionSelected={context.parameters.sectionSelected ?? ''}
        >
          <Header>
            <Story />
          </Header>
        </LibraryContextProvider>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof HamburgerMenu>

export default meta
type Story = StoryObj<typeof meta>

export const SimpleHamburgerMenu: Story = {
  args: {
    parentsArray: [],
  },
  play: async ({ canvasElement }) => {
    await openHamburger(canvasElement)
  },
}

export const SimpleHamburgerMenuTablet: Story = {
  args: {
    parentsArray: [],
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobileMedium',
    },
  },
  play: async ({ canvasElement }) => {
    await openHamburger(canvasElement)
  },
}

export const ApiReferenceMenu: Story = {
  args: {
    parentsArray: [],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await openHamburger(canvasElement)
    const openButtons = await canvas.findAllByLabelText('Open sidebar')
    await userEvent.click(openButtons[1])
  },
}

export const GuidesMenu: Story = {
  args: {
    parentsArray: [],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await openHamburger(canvasElement)
    const openButtons = await canvas.findAllByLabelText('Open sidebar')
    await userEvent.click(openButtons[0])
  },
}

/** Article exists but is not in navigation.json — hamburger stays on the section cards. */
export const UnlistedArticle: Story = {
  args: {
    parentsArray: [],
  },
  parameters: {
    sectionSelected: 'Guides',
    nextjs: {
      router: {
        query: { slug: 'article-not-in-navigation' },
      },
    },
  },
  play: async ({ canvasElement }) => {
    await openHamburger(canvasElement)
  },
}

/** Same unlisted-article case on tablet. */
export const UnlistedArticleTablet: Story = {
  args: {
    parentsArray: [],
  },
  parameters: {
    sectionSelected: 'Guides',
    viewport: {
      defaultViewport: 'mobileMedium',
    },
    nextjs: {
      router: {
        query: { slug: 'article-not-in-navigation' },
      },
    },
  },
  play: async ({ canvasElement }) => {
    await openHamburger(canvasElement)
  },
}
