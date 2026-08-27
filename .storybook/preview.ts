import type { Preview } from '@storybook/react'
import SearchConfig from '../src/utils/config/search-config'

const algoliaAppId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID
const algoliaSearchKey = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY
const algoliaIndex = process.env.NEXT_PUBLIC_INDEX || 'devportal-docs'

if (algoliaAppId && algoliaSearchKey) {
  SearchConfig({
    appId: algoliaAppId,
    apiKey: algoliaSearchKey,
    index: algoliaIndex,
  })
}

const customViewports = {
  mobileSmall: {
    name: 'Mobile Small',
    styles: {
      width: '360px',
      height: '640px',
    },
  },
  mobileMedium: {
    name: 'Mobile Medium',
    styles: {
      width: '640px',
      height: '640px',
    },
  },
  tabletSmall: {
    name: 'Tablet Small',
    styles: {
      width: '832px',
      height: '1024px',
    },
  },
  tabletMedium: {
    name: 'Tablet Medium',
    styles: {
      width: '1024px',
      height: '768px',
    },
  },
  desktopSmall: {
    name: 'Desktop Small',
    styles: {
      width: '1280px',
      height: '800px',
    },
  },
  desktopLarge: {
    name: 'Desktop Large',
    styles: {
      width: '1920px',
      height: '1080px',
    },
  },
  desktopXLarge: {
    name: 'Desktop Extra Large',
    styles: {
      width: '2560px',
      height: '1440px',
    },
  },
};

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: {
        ...customViewports
      },
      defaultViewport: 'desktopSmall'
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      router: {
        basePath: '/',
      },
    },
  },
}

export default preview
