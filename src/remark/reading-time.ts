import getReadingTime from 'reading-time'
import { toString } from 'mdast-util-to-string'
import type { Plugin } from 'unified'
import type { Node } from 'unist'
import type { VFile } from 'vfile'

export const remarkReadingTime: Plugin = () => {
  return (tree: Node, file: VFile) => {
    const textOnPage = toString(tree)
    const readingTime = getReadingTime(textOnPage)
    const data = file.data as { matter?: Record<string, unknown> }
    data.matter ??= {}
    data.matter.readingTime = Math.ceil(readingTime.minutes)
  }
}
