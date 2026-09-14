import type { Meta, StoryObj } from '@storybook/react'
import { useEffect, useState } from 'react'
import { ThemeProvider } from '@vtex/brand-ui'
import { useRouter } from 'next/router.js'

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
import { dividerNavigation } from './fixtures/divider-navigation'

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

type NavNode = {
  slug?: string | Record<string, string>
  children?: NavNode[]
}

const nodeSlug = (node: NavNode, locale: 'en' | 'pt' | 'es') =>
  typeof node.slug === 'string' ? node.slug : node.slug?.[locale] ?? ''

/** Ancestors of `slug`, matching what the app computes server-side per route. */
const findParents = (
  nodes: NavNode[],
  slug: string,
  locale: 'en' | 'pt' | 'es',
  trail: string[] = []
): string[] | null => {
  for (const node of nodes) {
    const current = nodeSlug(node, locale)
    const path = current ? [...trail, current] : trail
    if (current === slug) return path

    const found = findParents(node.children ?? [], slug, locale, path)
    if (found) return found
  }
  return null
}

/**
 * The app re-renders each route with a server-computed `parentsArray`. Stories
 * mimic it so clicking a doc keeps its branch open instead of collapsing.
 */
const InteractiveSidebar = ({
  navigation,
  locale,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: any[]
  locale: 'en' | 'pt' | 'es'
}) => {
  const router = useRouter()
  const [parentsArray, setParentsArray] = useState<string[]>([])

  useEffect(() => {
    const onRouteChange = (url: string) => {
      const slug = url
        .split('#')[0]
        .split('?')[0]
        .split('/')
        .filter(Boolean)
        .pop()
      if (!slug) return
      const sections = navigation.flatMap((section) => section.categories ?? [])
      setParentsArray(findParents(sections, slug, locale) ?? [])
    }

    router.events.on('routeChangeStart', onRouteChange)
    return () => router.events.off('routeChangeStart', onRouteChange)
  }, [navigation, locale, router.events])

  return <Sidebar parentsArray={parentsArray} />
}

const withDividerNav =
  (locale: 'en' | 'pt' | 'es' = 'en') =>
  (Story: () => JSX.Element) =>
    (
      <ThemeProvider>
        <LibraryContextProvider
          sections={helpSections}
          hamburguerMenuSections={helpSections}
          isPreview={false}
          sectionSelected="tracks"
          fallback={dividerNavigation}
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
  render: () => (
    <InteractiveSidebar navigation={developersNavigation} locale="en" />
  ),
  decorators: [withDevelopersNav('API Reference')],
}

/** Desktop sidebar scrolled so the active doc is in view. */
export const SidebarWithActiveDoc: Story = {
  render: () => <Sidebar parentsArray={['b2b-buyer-portal']} />,
  decorators: [withDevelopersNav('API Reference')],
}

/** help.vtex.com/navigation.json — English locale. */
export const SidebarEnglish: Story = {
  render: () => <InteractiveSidebar navigation={helpNavigation} locale="en" />,
  decorators: [withHelpNav('en')],
}

/** help.vtex.com/navigation.json — Portuguese locale. */
export const SidebarWithLocale: Story = {
  render: () => <InteractiveSidebar navigation={helpNavigation} locale="pt" />,
  decorators: [withHelpNav('pt')],
}

/** help.vtex.com/navigation.json — Spanish locale. */
export const SidebarSpanish: Story = {
  render: () => <InteractiveSidebar navigation={helpNavigation} locale="es" />,
  decorators: [withHelpNav('es')],
}

/** `divider` nodes: section titles with no doc of their own. */
export const SidebarWithDivider: Story = {
  render: () => (
    <InteractiveSidebar navigation={dividerNavigation} locale="en" />
  ),
  decorators: [withDividerNav('en')],
}

/** A category inside a `divider` section, expanded on the active doc. */
export const SidebarWithDividerExpanded: Story = {
  render: () => (
    <Sidebar parentsArray={['vtex-store-overview', 'introduction-to-vtex']} />
  ),
  decorators: [withDividerNav('en')],
}

/** `divider` names are localized like any other node. */
export const SidebarWithDividerPtBr: Story = {
  render: () => (
    <InteractiveSidebar navigation={dividerNavigation} locale="pt" />
  ),
  decorators: [withDividerNav('pt')],
}
