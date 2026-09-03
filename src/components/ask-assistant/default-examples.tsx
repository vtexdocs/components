import APIGuidesIcon from 'components/icons/api-guides-icon'
import APIReferenceIcon from 'components/icons/api-reference-icon'
import AppDevelopmentIcon from 'components/icons/app-development-icon'
import StorefrontDevelopmentIcon from 'components/icons/storefront-development-icon'

import type { AskAssistantExampleCategory } from './types'

export const DEFAULT_ASK_ASSISTANT_EXAMPLES: AskAssistantExampleCategory[] = [
  {
    id: 'guides',
    title: 'Guides',
    Icon: APIGuidesIcon,
    questions: [
      'How do I authenticate with the VTEX APIs?',
      'How do I get started with FastStore?',
      'How do I configure a development workspace?',
    ],
  },
  {
    id: 'api-reference',
    title: 'API Reference',
    Icon: APIReferenceIcon,
    questions: [
      'How do I get an order by ID?',
      'How do I update a product SKU?',
      'What is the Catalog API used for?',
    ],
  },
  {
    id: 'storefront',
    title: 'Storefront',
    Icon: StorefrontDevelopmentIcon,
    questions: [
      'How do I customize a FastStore component?',
      'How do I create a store theme?',
      'How do I add a custom page to my storefront?',
    ],
  },
  {
    id: 'apps',
    title: 'Apps',
    Icon: AppDevelopmentIcon,
    questions: [
      'How do I create a VTEX IO app?',
      'How do I publish an app to the VTEX App Store?',
      'How do I use React in a VTEX IO app?',
    ],
  },
]
