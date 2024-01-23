import APIGuidesIcon from 'components/icons/api-guides-icon'
import APIReferenceIcon from 'components/icons/api-reference-icon'
import { Component } from 'lib/markdown-renderer/MarkdownRenderer.types'
import { serialize } from 'next-mdx-remote/serialize'

export const sections = [
  [
    {
      Icon: APIGuidesIcon,
      title: 'Guides',
      description: 'Guides description',
      link: '#',
    },
  ],
  [
    {
      Icon: APIReferenceIcon,
      title: 'Reference',
      description: 'Reference description',
      link: '#',
    },
  ],
]

export const hamburguerSections = [
  [
    {
      Icon: APIGuidesIcon,
      title: 'Guides',
      description: 'Guides description',
      link: '#',
    },
  ],
  [
    {
      Icon: APIReferenceIcon,
      title: 'Reference',
      description: 'Reference description',
      link: '#',
    },
  ],
]

export const navigationLocale = [
  {
    documentation: 'Guides',
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
    slugPrefix: 'docs/reference',
    categories: [],
  },
]

export const navigation = [
  {
    documentation: 'Guides',
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
                  {
                    name: 'Input',
                    slug: 'faststore/atoms-input',
                    type: 'markdown',
                    origin: '',
                    children: [],
                  },
                  {
                    name: 'Label',
                    slug: 'faststore/atoms-label',
                    type: 'markdown',
                    origin: '',
                    children: [],
                  },
                  {
                    name: 'Link',
                    slug: 'faststore/atoms-link',
                    type: 'markdown',
                    origin: '',
                    children: [],
                  },
                  {
                    name: 'List',
                    slug: 'faststore/atoms-list',
                    type: 'markdown',
                    origin: '',
                    children: [],
                  },
                  {
                    name: 'Loader',
                    slug: 'faststore/atoms-loader',
                    type: 'markdown',
                    origin: '',
                    children: [],
                  },
                  {
                    name: 'Overlay',
                    slug: 'faststore/atoms-overlay',
                    type: 'markdown',
                    origin: '',
                    children: [],
                  },
                  {
                    name: 'Price',
                    slug: 'faststore/atoms-price',
                    type: 'markdown',
                    origin: '',
                    children: [],
                  },
                  {
                    name: 'Radio',
                    slug: 'faststore/atoms-radio',
                    type: 'markdown',
                    origin: '',
                    children: [],
                  },
                  {
                    name: 'Select',
                    slug: 'faststore/atoms-select',
                    type: 'markdown',
                    origin: '',
                    children: [],
                  },
                  {
                    name: 'SROnly',
                    slug: 'faststore/atoms-sr-only',
                    type: 'markdown',
                    origin: '',
                    children: [],
                  },
                  {
                    name: 'Skeleton',
                    slug: 'faststore/atoms-skeleton',
                    type: 'markdown',
                    origin: '',
                    children: [],
                  },
                  {
                    name: 'Slider',
                    slug: 'faststore/atoms-slider',
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
                  {
                    name: 'Buy button',
                    slug: 'faststore/molecules-buy-button',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                  {
                    name: 'Carousel',
                    slug: 'faststore/molecules-carousel',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                  {
                    name: 'Cart item',
                    slug: 'faststore/molecules-cart-item',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                  {
                    name: 'Checkbox field',
                    slug: 'faststore/molecules-checkbox-field',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                  {
                    name: 'Discount badge',
                    slug: 'faststore/molecules-discount-badge',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                  {
                    name: 'Dropdown',
                    slug: 'faststore/molecules-dropdown',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                  {
                    name: 'Gift',
                    slug: 'faststore/molecules-gift',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                  {
                    name: 'Icon button',
                    slug: 'faststore/molecules-icon-button',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                  {
                    name: 'Input field',
                    slug: 'faststore/molecules-input-field',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                  {
                    name: 'Link button',
                    slug: 'faststore/molecules-link-button',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                  {
                    name: 'Modal',
                    slug: 'faststore/molecules-modal',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                  {
                    name: 'Navbar links',
                    slug: 'faststore/molecules-navbar-links',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                  {
                    name: 'Order summary',
                    slug: 'faststore/molecules-order-summary',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                  {
                    name: 'Product card',
                    slug: 'faststore/molecules-product-card',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                  {
                    name: 'Product title',
                    slug: 'faststore/molecules-product-title',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                  {
                    name: 'Quantity selector',
                    slug: 'faststore/molecules-quantity-selector',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                  {
                    name: 'Radio Group',
                    slug: 'faststore/molecules-radio-group',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                  {
                    name: 'Rating',
                    slug: 'faststore/molecules-rating',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                  {
                    name: 'Region bar',
                    slug: 'faststore/molecules-region-bar',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                  {
                    name: 'Search autocomplete',
                    slug: 'faststore/molecules-search-auto-complete',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                  {
                    name: 'Search dropdown',
                    slug: 'faststore/molecules-search-dropdown',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                  {
                    name: 'Search history',
                    slug: 'faststore/molecules-search-history',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                  {
                    name: 'Search input field',
                    slug: 'faststore/molecules-search-input-field',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                  {
                    name: 'Search products',
                    slug: 'faststore/molecules-search-products',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                  {
                    name: 'Search top',
                    slug: 'faststore/molecules-search-top',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                  {
                    name: 'Select field',
                    slug: 'faststore/molecules-select-field',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                  {
                    name: 'SKU selector',
                    slug: 'faststore/molecules-sku-selector',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                  {
                    name: 'Radio field',
                    slug: 'faststore/molecules-radio-field',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                  {
                    name: 'Table',
                    slug: 'faststore/molecules-table',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                  {
                    name: 'Tag',
                    slug: 'faststore/molecules-tag',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                  {
                    name: 'Toast',
                    slug: 'faststore/molecules-toast',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                  {
                    name: 'Toggle',
                    slug: 'faststore/molecules-toggle',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                  {
                    name: 'Toggle field',
                    slug: 'faststore/molecules-toggle-field',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                ],
              },
              {
                name: 'Organisms',
                slug: 'faststore/organisms',
                origin: '',
                type: 'category',
                children: [
                  {
                    name: 'Banner Text',
                    slug: 'faststore/organisms-banner-text',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                  {
                    name: 'Cart Sidebar',
                    slug: 'faststore/organisms-cart-sidebar',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                  {
                    name: 'Empty State',
                    slug: 'faststore/organisms-empty-state',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                  {
                    name: 'Filter Slider',
                    slug: 'faststore/organisms-filter-slider',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                  {
                    name: 'Filter',
                    slug: 'faststore/organisms-filter',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                  {
                    name: 'Hero',
                    slug: 'faststore/organisms-hero',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                  {
                    name: 'Image Gallery',
                    slug: 'faststore/organisms-image-gallery',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                  {
                    name: 'Navbar Slider',
                    slug: 'faststore/organisms-navbar-slider',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                  {
                    name: 'Navbar',
                    slug: 'faststore/organisms-navbar',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                  {
                    name: 'Out Of Stock',
                    slug: 'faststore/organisms-out-of-stock',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                  {
                    name: 'Payment Methods',
                    slug: 'faststore/organisms-payment-methods',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                  {
                    name: 'Price Range',
                    slug: 'faststore/organisms-price-range',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                  {
                    name: 'Product Grid',
                    slug: 'faststore/organisms-product-grid',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                  {
                    name: 'Product Shelf',
                    slug: 'faststore/organisms-product-shelf',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                  {
                    name: 'Region Modal',
                    slug: 'faststore/organisms-region-modal',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                  {
                    name: 'Search Input',
                    slug: 'faststore/organisms-search-input',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                  {
                    name: 'Shipping Simulation',
                    slug: 'faststore/organisms-shipping-simulation',
                    origin: '',
                    type: 'markdown',
                    children: [],
                  },
                  {
                    name: 'Slide Over',
                    slug: 'faststore/organisms-slide-over',
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
    documentation: 'Reference',
    slugPrefix: 'docs/reference',
    categories: [],
  },
]

const locale: 'en' | 'pt' | 'es' = 'pt'

export const exampleContextProps = {
  sections: sections,
  isPreview: false,
  sectionSelected: '',
  fallback: navigation,
  hamburguerMenuSections: hamburguerSections,
}

export const exampleContextPropsLocale = {
  sections: sections,
  isPreview: false,
  sectionSelected: '',
  fallback: navigationLocale,
  locale,
}

const markdown_example = `
# Clients 

Systems are meant to solve real problems by communicating to the needed services. A delivery app, for example, solves the issue of the desire to eat by communicating with a local restaurant service. 

On VTEX IO architecture, the communication made by a system to request a service is so crucial that a whole concept was built for it: **Clients**.

In other words, Clients are configurations to be set up in a given system to **abstract its communications to the needed services**. 

When building software, you can tackle complexities by setting up clients and then optimizing your code. Some standard clients are already into the VTEX IO. Check them [here](https://github.com/vtex/node-vtex-api/blob/ccf4d8f8d3208007c4bfd558baf979df8d825af8/src/clients/IOClients.ts).

These are some of the features built-in our clients infrastructure:

 - Cache;
 - Native metrics support;
 - Retry and timeout options;
 - Billing tracking.

![Clients on IO Services](https://imgur.com/i45O8MN.png)

<TestComponent text="Test component prop" />

Learn how to create Clients of your own by accessing [Managing Clients](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-how-to-create-and-use-clients) documentation. 
`

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const TestComponent = ({ node, ...props }: Component) => {
  return <div>{props.text}</div>
}

export const serialized = await serialize(markdown_example, {
  mdxOptions: {
    development: true,
  },
})
