import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from '@vtex/brand-ui'

import Sidebar from './index'
import LibraryContextProvider from 'utils/context/libraryContext'
import { Section } from 'utils/typings/types'
import APIGuidesIcon from 'components/icons/api-guides-icon'
import APIReferenceIcon from 'components/icons/api-reference-icon'
import AppDevelopmentIcon from 'components/icons/app-development-icon'
import StorefrontDevelopmentIcon from 'components/icons/storefront-development-icon'
import VTEXIOAppsIcon from 'components/icons/vtex-io-apps-icon'
import TroubleshootingIcon from 'components/icons/troubleshooting-icon'
import ReleaseNotesIcon from 'components/icons/release-notes-icon'
import StartHereIcon from 'components/icons/start-here-icon'
import TutorialsIcon from 'components/icons/tutorials-icon'
import FAQIcon from 'components/icons/faq-icon'
import KnownIssuesIcon from 'components/icons/known-issues-icon'
import GearTroubleshootingIcon from 'components/icons/gear-troubleshooting-icon'
import AnnouncementIcon from 'components/icons/announcement-icon'
import {
  developersNavigation,
  helpNavigation,
} from './fixtures/navigation-data.js'

const developerSections: Section[][] = [
  [
    {
      id: 'Guides',
      Icon: APIGuidesIcon,
      title: 'Guides',
      description: 'Guides',
      link: '/guides',
    },
    {
      id: 'API Reference',
      Icon: APIReferenceIcon,
      title: 'API Reference',
      description: 'API Reference',
      link: '/api-reference',
    },
    {
      id: 'App Development',
      Icon: AppDevelopmentIcon,
      title: 'App Development',
      description: 'App Development',
      link: '/app-development',
    },
    {
      id: 'Storefront Development',
      Icon: StorefrontDevelopmentIcon,
      title: 'Storefront Development',
      description: 'Storefront Development',
      link: '/storefront-development',
    },
    {
      id: 'VTEX IO Apps',
      Icon: VTEXIOAppsIcon,
      title: 'VTEX IO Apps',
      description: 'VTEX IO Apps',
      link: '/vtex-io-apps',
    },
  ],
  [
    {
      id: 'Troubleshooting',
      Icon: TroubleshootingIcon,
      title: 'Troubleshooting',
      description: 'Troubleshooting',
      link: '/troubleshooting',
    },
    {
      id: 'Release Notes',
      Icon: ReleaseNotesIcon,
      title: 'Release Notes',
      description: 'Release Notes',
      link: '/updates',
    },
  ],
]

const helpSections: Section[][] = [
  [
    {
      id: 'tracks',
      Icon: StartHereIcon,
      title: 'Start here',
      description: 'Start here',
      link: '#',
    },
    {
      id: 'tutorials',
      Icon: TutorialsIcon,
      title: 'Tutorials',
      description: 'Tutorials',
      link: '#',
    },
    {
      id: 'faq',
      Icon: FAQIcon,
      title: 'FAQ',
      description: 'FAQ',
      link: '#',
    },
    {
      id: 'known-issues',
      Icon: KnownIssuesIcon,
      title: 'Known Issues',
      description: 'Known Issues',
      link: '#',
    },
    {
      id: 'troubleshooting',
      Icon: GearTroubleshootingIcon,
      title: 'Troubleshooting',
      description: 'Troubleshooting',
      link: '#',
    },
  ],
  [
    {
      id: 'announcements',
      Icon: AnnouncementIcon,
      title: 'Announcements',
      description: 'Announcements',
      link: '#',
    },
  ],
]

const withDevelopersNav =
  (sectionSelected: string) => (Story: () => JSX.Element) =>
    (
      <ThemeProvider>
        <LibraryContextProvider
          sections={developerSections}
          hamburguerMenuSections={developerSections}
          isPreview={false}
          sectionSelected={sectionSelected}
          fallback={developersNavigation}
        >
          <Story />
        </LibraryContextProvider>
      </ThemeProvider>
    )

const withHelpNav =
  (locale: 'en' | 'pt' | 'es', sectionSelected = 'tutorials') =>
  (Story: () => JSX.Element) =>
    (
      <ThemeProvider>
        <LibraryContextProvider
          sections={helpSections}
          hamburguerMenuSections={helpSections}
          isPreview={false}
          sectionSelected={sectionSelected}
          fallback={helpNavigation}
          locale={locale}
        >
          <Story />
        </LibraryContextProvider>
      </ThemeProvider>
    )

const meta = {
  title: 'Example/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

/** developers.vtex.com/navigation.json — API Reference section. */
export const SidebarWithApiReference: Story = {
  args: {
    parentsArray: [],
  },
  decorators: [withDevelopersNav('API Reference')],
}

/** help.vtex.com/navigation.json — English locale. */
export const SidebarEnglish: Story = {
  args: {
    parentsArray: [],
  },
  decorators: [withHelpNav('en')],
}

/** help.vtex.com/navigation.json — Portuguese locale. */
export const SidebarWithLocale: Story = {
  args: {
    parentsArray: [],
  },
  decorators: [withHelpNav('pt')],
}

/** help.vtex.com/navigation.json — Spanish locale. */
export const SidebarSpanish: Story = {
  args: {
    parentsArray: [],
  },
  decorators: [withHelpNav('es')],
}
