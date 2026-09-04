import { u } from 'unist-builder'
import { visit, SKIP } from 'unist-util-visit'
import type { Node, Parent } from 'unist'

const extendedNames: Record<string, RegExp> = {
  info: /^ℹ️/,
  warning: /^\u26A0/,
  danger: /^\u2757/,
  success: /^\u2705/,
}

interface TextNode extends Node {
  type: 'text'
  value: string
}

interface ParentNode extends Node {
  children: Node[]
}

/**
 * Plugin to add extended blockquote formatting.
 */
export default function remarkBlockquote() {
  return (tree: Node) => {
    visit(tree, (node: Node, index, parent: Parent | undefined) => {
      if (node.type !== 'blockquote') return
      if (typeof index !== 'number' || !parent) return

      const { children = [] } = node as ParentNode
      const firstChild = children[0] as ParentNode | undefined
      const textNode = firstChild?.children?.[0] as TextNode | undefined
      if (
        !textNode ||
        textNode.type !== 'text' ||
        typeof textNode.value !== 'string'
      ) {
        return
      }

      const result = Object.entries(extendedNames).find(([, regex]) =>
        regex.test(textNode.value)
      )
      if (!result) return

      textNode.value = textNode.value.substring(2)

      const newChild = {
        type: 'paragraph',
        children,
      }

      const props = {
        data: {
          hProperties: {
            icon: result[0],
          },
        },
      }

      parent.children.splice(
        index,
        1,
        u('blockquote', props, [u('paragraph', [newChild])])
      )
      return [SKIP, index]
    })
  }
}
