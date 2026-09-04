import type { Meta, StoryObj } from '@storybook/react'
import { Box, ThemeProvider } from '@vtex/brand-ui'
import Header from '.'
import AnnouncementBar from 'components/announcement-bar'
import LibraryContextProvider from 'utils/context/libraryContext'
import { exampleContextProps } from 'utils/storybook-constants'
import MenuIcon from 'components/icons/menu-icon'
import EditIcon from 'components/icons/edit-icon'
import DocumentationUpdatesIcon from 'components/icons/documentation-updates-icon'
import type { Section } from 'utils/typings/types'

const LocaleSwitcherStub = () => (
  <Box sx={{ color: '#4A596B', fontSize: '13px', px: '8px' }}>EN</Box>
)

const editorSections: Section[] = [
  {
    id: 'Sidebar Editor',
    Icon: MenuIcon,
    title: 'Sidebar Editor',
    description: 'Test and validate your changes to the sidebar.',
    link: '/editor/sidebar',
  },
  {
    id: 'API Index Generator',
    Icon: DocumentationUpdatesIcon,
    title: 'API Index Generator',
    description: 'Automatically generate API Reference overview pages.',
    link: '/editor/api-index',
  },
  {
    id: 'Markdown Preview',
    Icon: EditIcon,
    title: 'Markdown Preview',
    description: 'Preview the rendering of your markdown file in the portal.',
    link: '/editor/markdown-preview',
  },
]

const meta = {
  title: 'Example/Header',
  component: Header,
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
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const HelpCenter: Story = {
  args: {
    variant: 'helpcenter',
    localeSwitcher: <LocaleSwitcherStub />,
  },
}

export const DeveloperPortal: Story = {
  args: {
    variant: 'devportal',
  },
}

export const Editor: Story = {
  args: {
    variant: 'devportal',
    isEditor: true,
    editorSections,
  },
}

export const WithAnnouncement: Story = {
  args: {
    variant: 'devportal',
    announcement: (
      <AnnouncementBar
        closable={false}
        type="warning"
        label="You are currently using a preview branch. This content may differ from the published version."
        action={{
          button: 'EXIT PREVIEW MODE',
          href: '#',
          target: '_self',
        }}
      />
    ),
  },
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
    variant: 'helpcenter',
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
    variant: 'helpcenter',
    localeSwitcher: <LocaleSwitcherStub />,
  },
}

export const WithAssistant: Story = {
  args: {
    variant: 'helpcenter',
    showAssistant: true,
    localeSwitcher: <LocaleSwitcherStub />,
  },
}

export const WithAssistantMobile: Story = {
  args: {
    variant: 'helpcenter',
    showAssistant: true,
    localeSwitcher: <LocaleSwitcherStub />,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobileSmall',
    },
  },
}
