import type { StorybookConfig } from '@storybook/react-vite'
import fs from 'fs'
import path from 'path'
import { mergeConfig, type Plugin } from 'vite'

const srcPath = path.resolve(__dirname, '../src')
const mocksPath = path.resolve(__dirname, 'mocks')
const mdxExamplePath = path.resolve(__dirname, 'mdx-example.md')

const VIRTUAL_MDX_ID = 'virtual:storybook-mdx'
const RESOLVED_VIRTUAL_MDX_ID = `\0${VIRTUAL_MDX_ID}`

// `next-mdx-remote` picks the JSX runtime from NODE_ENV when it evaluates the
// compiled source: `jsx-dev-runtime` only exposes `jsxDEV`, while
// `jsx-runtime` exposes `jsx`/`jsxs`. Compiling for the other mode makes the
// generated code destructure a function that isn't there.
const nodeEnv = process.env.NODE_ENV || 'development'

// `next-mdx-remote/serialize` runs the whole MDX compiler and only works in
// Node, so the example content is serialized here and shipped to the browser
// as plain data.
const serializedMdxPlugin = (): Plugin => ({
  name: 'storybook-serialized-mdx',
  resolveId: (id) => (id === VIRTUAL_MDX_ID ? RESOLVED_VIRTUAL_MDX_ID : null),
  load: async (id) => {
    if (id !== RESOLVED_VIRTUAL_MDX_ID) return null

    const { serialize } = await import('next-mdx-remote/serialize')
    const serialized = await serialize(fs.readFileSync(mdxExamplePath, 'utf8'), {
      mdxOptions: { development: nodeEnv === 'development' },
    })

    return `export default ${JSON.stringify(serialized)}`
  },
  handleHotUpdate: ({ file, server }) => {
    if (file !== mdxExamplePath) return

    const mod = server.moduleGraph.getModuleById(RESOLVED_VIRTUAL_MDX_ID)

    if (mod) server.moduleGraph.invalidateModule(mod)
  },
})

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
      plugins: [serializedMdxPlugin()],
      define: {
        'process.env': JSON.stringify({
          NODE_ENV: nodeEnv,
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
          'next/head.js': path.join(mocksPath, 'next-head.tsx'),
          'next/image': path.join(mocksPath, 'next-image.tsx'),
          'next/link': path.join(mocksPath, 'next-link.tsx'),
          'next/router': path.join(mocksPath, 'next-router.ts'),
          'next/head': path.join(mocksPath, 'next-head.tsx'),
        },
      },
    }),
}

export default config
