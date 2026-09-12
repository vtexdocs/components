import { memo, useMemo } from 'react'
import { Box } from '@vtex/brand-ui'
import { MDXRemote } from 'next-mdx-remote'
import { MarkdownRendererProps } from './MarkdownRenderer.types'
import components from './components'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MDXRemote2 = MDXRemote as any

const MarkdownRenderer = ({
  serialized,
  customComponents,
  scope,
}: MarkdownRendererProps) => {
  const mergedComponents = useMemo(
    () =>
      customComponents ? { ...components, ...customComponents } : components,
    [customComponents]
  )

  return (
    <Box data-markdown-renderer>
      <MDXRemote2
        components={mergedComponents}
        lazy
        {...serialized}
        {...(scope ? { scope } : {})}
      />
    </Box>
  )
}

export default memo(MarkdownRenderer)
