import type { StorybookConfig } from '@storybook/react-vite'
import path from 'path'
import { mergeConfig } from 'vite'

const srcPath = path.resolve(__dirname, '../src')
const mocksPath = path.resolve(__dirname, 'mocks')

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  typescript: {
    reactDocgen: 'react-docgen',
  },
  env: (config) => ({
    ...config,
    NEXT_PUBLIC_ALGOLIA_APP_ID: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '',
    NEXT_PUBLIC_ALGOLIA_SEARCH_KEY:
      process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY || '',
    NEXT_PUBLIC_INDEX: process.env.NEXT_PUBLIC_INDEX || 'devportal-docs',
  }),
  viteFinal: async (config) =>
    mergeConfig(config, {
      define: {
        'process.env': JSON.stringify({
          NODE_ENV: process.env.NODE_ENV || 'development',
          NEXT_PUBLIC_ALGOLIA_APP_ID:
            process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '',
          NEXT_PUBLIC_ALGOLIA_SEARCH_KEY:
            process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY || '',
          NEXT_PUBLIC_INDEX: process.env.NEXT_PUBLIC_INDEX || 'devportal-docs',
          NEXT_PUBLIC_NEWSLETTER_API_KEY:
            process.env.NEXT_PUBLIC_NEWSLETTER_API_KEY || '',
        }),
      },
      resolve: {
        alias: {
          components: path.join(srcPath, 'components'),
          utils: path.join(srcPath, 'utils'),
          lib: path.join(srcPath, 'lib'),
          'next/image.js': path.join(mocksPath, 'next-image.tsx'),
          'next/link.js': path.join(mocksPath, 'next-link.tsx'),
          'next/router.js': path.join(mocksPath, 'next-router.ts'),
          'next/image': path.join(mocksPath, 'next-image.tsx'),
          'next/link': path.join(mocksPath, 'next-link.tsx'),
          'next/router': path.join(mocksPath, 'next-router.ts'),
        },
      },
    }),
}

export default config
