import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    remark: 'src/remark/index.ts',
  },
  sourcemap: true,
  clean: true,
  dts: true,
  format: 'esm',
  splitting: false,
  loader: {
    '.css': 'local-css',
  },
})
