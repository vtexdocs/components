import getReadingTime from 'reading-time'
import { toString } from 'mdast-util-to-string'
import type { Node } from 'unist'

interface FileWithMatter {
  data: {
    matter?: Record<string, unknown>
  }
}

export function remarkReadingTime() {
  return function (tree: Node, file: FileWithMatter) {
    const textOnPage = toString(tree)
    const readingTime = getReadingTime(textOnPage)
    file.data.matter ??= {}
    file.data.matter.readingTime = Math.ceil(readingTime.minutes)
  }
}
