import { u } from 'unist-builder'
import { visit, SKIP } from 'unist-util-visit'
import type { Node, Parent } from 'unist'

interface MermaidCodeNode extends Node {
  type: string
  lang?: string | null
}

export default function remarkMermaid() {
  return (ast: Node) => {
    visit(
      ast,
      { type: 'code', lang: 'mermaid' },
      (node: MermaidCodeNode, index, parent: Parent | undefined) => {
        if (typeof index !== 'number' || !parent) return

        node.type = 'text'

        const props = {
          data: {
            hProperties: {
              className: ['mermaid'],
            },
            hName: 'pre',
          },
        }

        parent.children.splice(index, 1, u('pre', props, [node]))

        return [SKIP, index]
      }
    )
  }
}
