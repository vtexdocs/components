import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  sourcemap: true,
  clean: true,
  dts: true,
  format: 'esm',
  loader: {
    '.css': 'local-css',
  },
  external: ['next', 'next/image', 'next/router', 'next/image.js', 'next/router.js'],
})
