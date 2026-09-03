declare module 'virtual:storybook-mdx' {
  import type { MDXRemoteSerializeResult } from 'next-mdx-remote'

  const serialized: MDXRemoteSerializeResult
  export default serialized
}
