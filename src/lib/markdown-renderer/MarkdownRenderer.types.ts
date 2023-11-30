/* eslint-disable @typescript-eslint/no-explicit-any */
import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export type Component = {
  node: object
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export interface MarkdownRendererProps {
  serialized: MDXRemoteSerializeResult
  customComponents?: {
    [name: string]: any
  }
  scope?: {
    [name: string]: any
  }
}

export interface ObservableHeadingProps {
  level: 2 | 3
  onEnterView: (slug: string) => void
  onLeaveView: (
    slug: string,
    entry: IntersectionObserverEntry,
    y: number
  ) => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}
