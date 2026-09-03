import AppDevelopmentIcon from 'components/icons/app-development-icon'
import APIGuidesIcon from 'components/icons/api-guides-icon'
import APIReferenceIcon from 'components/icons/api-reference-icon'
import StorefrontDevelopmentIcon from 'components/icons/storefront-development-icon'
import TroubleshootingIcon from 'components/icons/troubleshooting-icon'
import VTEXIOAppsIcon from 'components/icons/vtex-io-apps-icon'

export const sections = [
  [
    {
      id: 'Guides',
      Icon: APIGuidesIcon,
      title: 'Guides',
      description: 'Learn how to use our APIs and extend the VTEX platform.',
      link: '/docs/guides',
    },
    {
      id: 'API Reference',
      Icon: APIReferenceIcon,
      title: 'API Reference',
      description: 'Explore detailed information about our endpoints.',
      link: '/docs/api-reference',
    },
    {
      id: 'App Development',
      Icon: AppDevelopmentIcon,
      title: 'App Development',
      description: 'Learn how to build cloud-based apps and integrations.',
      link: '/docs/app-development',
    },
    {
      id: 'Storefront Development',
      Icon: StorefrontDevelopmentIcon,
      title: 'Storefront Development',
      description: 'Express your brand identity creating unique storefronts.',
      link: '/docs/storefront-development',
    },
    {
      id: 'VTEX IO Apps',
      Icon: VTEXIOAppsIcon,
      title: 'VTEX IO Apps',
      description: 'Find pre-built solutions to grow your business.',
      link: '/docs/vtex-io-apps',
    },
    {
      id: 'Troubleshooting',
      Icon: TroubleshootingIcon,
      title: 'Troubleshooting',
      description: 'Find practical solutions to common development issues.',
      link: '/docs/troubleshooting',
    },
  ],
]

export const navigationLocale = [
  {
    documentation: 'Guides',
    name: { en: 'Guides', es: 'Guías', pt: 'Guias' },
    slugPrefix: 'docs/guides',
    categories: [
      {
        name: {
          en: 'Getting Started',
          es: 'Primeros pasos',
          pt: 'Primeiros passos',
        },
        slug: 'getting-started',
        origin: '',
        type: 'markdown',
        defaultOpen: true,
        children: [
          {
            name: {
              en: 'Platform  overview',
              es: 'Vista General de la plataforma',
              pt: 'Visão geral da plataforma',
            },
            slug: 'getting-started-platform-overview',
            origin: '',
            type: 'markdown',
            children: [],
          },
        ],
      },
    ],
  },
  {
    documentation: 'Reference',
    name: { en: 'Reference', es: 'Referencia', pt: 'Referência' },
    slugPrefix: 'docs/reference',
    categories: [],
  },
]

export const navigation = [
  {
    documentation: 'Guides',
    name: 'Guides',
    slugPrefix: 'docs/guides',
    categories: [
      {
        name: 'Getting Started',
        slug: 'getting-started',
        origin: '',
        type: 'markdown',
        children: [
          {
            name: 'Platform  overview',
            slug: 'getting-started-platform-overview',
            origin: '',
            type: 'markdown',
            children: [],
          },

          {
            name: 'Getting Started',
            slug: 'faststore/docs-getting-started-overview',
            origin: '',
            type: 'markdown',
            children: [
              {
                name: 'Requirements',
                slug: 'faststore/docs-getting-started-requirements',
                origin: '',
                type: 'markdown',
                children: [],
              },
              {
                name: '1. FastStore onboarding',
                slug: 'faststore/getting-started-1-faststore-onboarding',
                origin: '',
                type: 'markdown',
                children: [
                  {
                    name: 'Starting a new FastStore project',
                    slug: 'faststore/1-faststore-onboarding-onboarding',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                  {
                    name: 'Dashboard',
                    slug: 'faststore/1-faststore-onboarding-dashboard',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                ],
              },
              {
                name: '2. Setting up the project',
                slug: 'faststore/getting-started-2-setting-up-the-project',
                origin: '',
                type: 'markdown',
                children: [],
              },
              {
                name: '3. FastStore CLI',
                slug: 'faststore/getting-started-4-faststore-cli',
                origin: '',
                type: 'markdown',
                children: [],
              },
              {
                name: '5. Next steps',
                slug: 'faststore/getting-started-5-next-steps',
                origin: '',
                type: 'markdown',
                children: [],
              },
              {
                name: 'Glossary',
                slug: 'faststore/docs-getting-started-glossary',
                origin: '',
                type: 'markdown',
                children: [],
              },
            ],
          },
          {
            name: 'UI components',
            slug: 'faststore/components-index',
            origin: '',
            type: 'markdown',
            children: [
              {
                name: 'Getting started',
                slug: 'faststore/components-getting-started',
                origin: '',
                type: 'markdown',
                children: [],
              },
              {
                name: 'Atoms',
                slug: 'faststore/atoms',
                origin: '',
                type: 'category',
                defaultOpen: true,
                children: [
                  {
                    name: 'Badge',
                    slug: 'faststore/atoms-badge',
                    type: 'markdown',
                    origin: '',
                    children: [],
                  },
                  {
                    name: 'Button',
                    slug: 'faststore/atoms-button',
                    type: 'markdown',
                    origin: '',
                    children: [],
                  },
                  {
                    name: 'Checkbox',
                    slug: 'faststore/atoms-checkbox',
                    type: 'markdown',
                    origin: '',
                    children: [],
                  },
                  {
                    name: 'Icon',
                    slug: 'faststore/atoms-icon',
                    type: 'markdown',
                    origin: '',
                    children: [],
                  },
                ],
              },
              {
                name: 'Molecules',
                slug: 'faststore/molecules',
                origin: '',
                type: 'category',
                children: [
                  {
                    name: 'Accordion',
                    slug: 'faststore/molecules-accordion',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                  {
                    name: 'Alert',
                    slug: 'faststore/molecules-alert',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                  {
                    name: 'Breadcrumb',
                    slug: 'faststore/molecules-breadcrumb',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    documentation: 'API Reference',
    name: 'API Reference',
    slugPrefix: 'docs/api-reference',
    categories: [
      {
        name: 'Anti-fraud Provider API',
        slug: 'antifraud-provider-protocol',
        origin: '',
        type: 'openapi',
        children: [
          {
            name: 'Anti-fraud Flow',
            slug: 'antifraud-provider-protocol-antifraud-flow',
            type: 'category',
            children: [
              {
                name: 'Send Anti-fraud Pre-Analysis Data (optional)',
                slug: 'antifraud-provider-protocol',
                type: 'openapi',
                method: 'POST',
                origin: '',
                endpoint: '/pre-analysis',
                children: [],
              },
              {
                name: 'Send Anti-fraud Data',
                slug: 'antifraud-provider-protocol',
                type: 'openapi',
                method: 'POST',
                origin: '',
                endpoint: '/transactions',
                children: [],
              },
              {
                name: 'Update Anti-fraud Transactions (optional)',
                slug: 'antifraud-provider-protocol',
                type: 'openapi',
                method: 'PUT',
                origin: '',
                endpoint: '/transactions/-transactionId-',
                children: [],
              },
              {
                name: 'List Anti-fraud Provider Manifest',
                slug: 'antifraud-provider-protocol',
                type: 'openapi',
                method: 'GET',
                origin: '',
                endpoint: '/manifest',
                children: [],
              },
              {
                name: 'Get Anti-fraud Status',
                slug: 'antifraud-provider-protocol',
                type: 'openapi',
                method: 'GET',
                origin: '',
                endpoint: '/transactions/-transactions.id-',
                children: [],
              },
              {
                name: 'Stop Anti-fraud Analysis (optional)',
                slug: 'antifraud-provider-protocol',
                type: 'openapi',
                method: 'DELETE',
                origin: '',
                endpoint: '/transactions/-transactions.Id-',
                children: [],
              },
            ],
          },
          {
            name: 'OAuth Flow',
            slug: 'antifraud-provider-protocol-oauth-flow',
            type: 'category',
            children: [
              {
                name: '1. Retrieve Token',
                slug: 'antifraud-provider-protocol',
                type: 'openapi',
                method: 'POST',
                origin: '',
                endpoint: '/authorization/token',
                children: [],
              },
              {
                name: '2. Redirect',
                slug: 'antifraud-provider-protocol',
                type: 'openapi',
                method: 'GET',
                origin: '',
                endpoint: '/redirect',
                children: [],
              },
              {
                name: '3. Return to VTEX',
                slug: 'antifraud-provider-protocol',
                type: 'openapi',
                method: 'GET',
                origin: '',
                endpoint: '/authorizationCode',
                children: [],
              },
              {
                name: '4. Get Credentials',
                slug: 'antifraud-provider-protocol',
                type: 'openapi',
                method: 'GET',
                origin: '',
                endpoint: '/authorization/credentials',
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
]

const locale: 'en' | 'pt' | 'es' = 'pt'

export const exampleContextProps = {
  sections: sections,
  isPreview: false,
  sectionSelected: '',
  fallback: navigation,
  hamburguerMenuSections: sections,
}

export const exampleContextPropsLocale = {
  sections: sections,
  isPreview: false,
  sectionSelected: '',
  fallback: navigationLocale,
  hamburguerMenuSections: sections,
  locale,
}
