import type { StorybookConfig } from '@storybook/nextjs'
const path = require('path');

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  env: (config) => ({
    ...config,
    NEXT_PUBLIC_ALGOLIA_APP_ID: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '',
    NEXT_PUBLIC_ALGOLIA_SEARCH_KEY:
      process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY || '',
    NEXT_PUBLIC_INDEX: process.env.NEXT_PUBLIC_INDEX || 'devportal-docs',
  }),
  webpackFinal: async (config, { configType }) => {
    if (config.resolve)
      config.resolve.modules = [
        path.resolve(__dirname, "..", "src"),
        "node_modules",
      ]
    return config;
  }
}
export default config
