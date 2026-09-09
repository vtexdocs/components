import {
  Children,
  createElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from 'react'

export type ParsedCardContent = {
  title?: ReactNode
  description?: ReactNode
  linkTitle?: string
  linkTo?: string
  image?: string
  imageAlt?: string
}

const MARKDOWN_LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/
const MARKDOWN_IMAGE_RE = /^!\[([^\]]*)\]\(([^)]+)\)$/
const MARKDOWN_BOLD_RE = /^\*\*(.+)\*\*$|^__(.+)__$/

const isWhitespace = (node: ReactNode) =>
  typeof node === 'string' && !node.trim()

const getTypeName = (el: ReactElement) => {
  if (typeof el.type === 'string') return el.type
  const type = el.type as { displayName?: string; name?: string }
  return type.displayName || type.name || ''
}

const isLinkElement = (el: ReactElement) => {
  const name = getTypeName(el).toLowerCase()
  return name === 'a' || typeof el.props?.href === 'string'
}

const isHeadingElement = (el: ReactElement) =>
  /^h[1-6]$/i.test(getTypeName(el))

const isParagraphElement = (el: ReactElement) =>
  getTypeName(el).toLowerCase() === 'p'

const getImageFromElement = (
  el: ReactElement
): { src: string; alt?: string } | null => {
  const src = el.props?.src
  if (typeof src !== 'string' || !src) return null

  const name = getTypeName(el).toLowerCase()
  const hasAlt = typeof el.props?.alt === 'string'
  if (name !== 'img' && !name.includes('image') && !hasAlt) return null

  return {
    src,
    alt: hasAlt ? el.props.alt : undefined,
  }
}

export const flattenText = (node: ReactNode): string => {
  if (node == null || typeof node === 'boolean') return ''
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(flattenText).join('')
  if (isValidElement(node)) return flattenText(node.props.children)
  return ''
}

const unwrapMarkdownBold = (value: string): ReactNode => {
  const match = value.trim().match(MARKDOWN_BOLD_RE)
  if (!match) return value
  return createElement('strong', null, match[1] ?? match[2])
}

const findLink = (
  node: ReactNode
): { href: string; title: string } | null => {
  if (node == null || typeof node === 'boolean') return null
  if (Array.isArray(node)) {
    for (const child of node) {
      const found = findLink(child)
      if (found) return found
    }
    return null
  }
  if (!isValidElement(node)) return null
  if (isLinkElement(node) && node.props.href) {
    return {
      href: String(node.props.href),
      title: flattenText(node.props.children) || String(node.props.href),
    }
  }
  return findLink(node.props.children)
}

const findImage = (
  node: ReactNode
): { src: string; alt?: string } | null => {
  if (node == null || typeof node === 'boolean') return null
  if (Array.isArray(node)) {
    for (const child of node) {
      const found = findImage(child)
      if (found) return found
    }
    return null
  }
  if (!isValidElement(node)) return null
  return getImageFromElement(node) ?? findImage(node.props.children)
}

const isLinkOnlyLine = (node: ReactNode) => {
  if (isValidElement(node) && isLinkElement(node)) return true
  if (typeof node === 'string') {
    const match = node.match(MARKDOWN_LINK_RE)
    return Boolean(match && node.replace(MARKDOWN_LINK_RE, '').trim() === '')
  }
  if (!isValidElement(node)) return false
  const link = findLink(node)
  if (!link) return false
  const text = flattenText(node).replace(link.title, '').trim()
  return text === ''
}

const isImageOnlyLine = (node: ReactNode) => {
  if (typeof node === 'string') return MARKDOWN_IMAGE_RE.test(node.trim())
  if (!isValidElement(node)) return false
  if (getImageFromElement(node)) return true
  if (!isParagraphElement(node)) return false
  const kids = Children.toArray(node.props.children).filter(
    (child) => !isWhitespace(child)
  )
  return (
    kids.length === 1 &&
    isValidElement(kids[0]) &&
    Boolean(getImageFromElement(kids[0]))
  )
}

const splitByNewlines = (node: ReactNode): ReactNode[] => {
  const lines: ReactNode[][] = [[]]

  const push = (item: ReactNode) => {
    if (item == null || item === '') return
    lines[lines.length - 1].push(item)
  }

  const visit = (value: ReactNode) => {
    if (value == null || typeof value === 'boolean') return
    if (typeof value === 'string' || typeof value === 'number') {
      String(value)
        .split('\n')
        .forEach((chunk, index) => {
          if (index > 0) lines.push([])
          if (chunk.trim()) push(chunk.trim())
        })
      return
    }
    if (Array.isArray(value)) {
      value.forEach(visit)
      return
    }
    if (
      isValidElement(value) &&
      (isParagraphElement(value) || isHeadingElement(value))
    ) {
      visit(value.props.children)
      return
    }
    push(value)
  }

  visit(node)

  return lines
    .map((line) => {
      if (line.length === 0) return null
      return line.length === 1 ? line[0] : line
    })
    .filter((line): line is ReactNode => line != null)
}

const joinDescription = (parts: ReactNode[]): ReactNode => {
  if (parts.length === 1) return parts[0]
  const allText = parts.every(
    (part) => typeof part === 'string' || typeof part === 'number'
  )
  if (allText) return parts.map(String).join(' ')
  return parts
}

const parseMarkdownString = (value: string): ParsedCardContent => {
  const lines = value
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean)

  let linkTitle: string | undefined
  let linkTo: string | undefined
  let image: string | undefined
  let imageAlt: string | undefined
  const contentLines: string[] = []

  for (const line of lines) {
    const imageMatch = line.match(MARKDOWN_IMAGE_RE)
    if (imageMatch) {
      imageAlt = imageMatch[1]
      image = imageMatch[2]
      continue
    }

    const linkMatch = line.match(MARKDOWN_LINK_RE)
    if (linkMatch && line.replace(MARKDOWN_LINK_RE, '').trim() === '') {
      linkTitle = linkMatch[1]
      linkTo = linkMatch[2]
      continue
    }

    if (linkMatch) {
      linkTitle = linkMatch[1]
      linkTo = linkMatch[2]
      const rest = line.replace(MARKDOWN_LINK_RE, '').trim()
      if (rest) contentLines.push(rest)
      continue
    }

    contentLines.push(line)
  }

  const [title, ...descriptionLines] = contentLines
  return {
    title: title ? unwrapMarkdownBold(title) : undefined,
    description: descriptionLines.length
      ? descriptionLines.join(' ')
      : undefined,
    linkTitle,
    linkTo,
    image,
    imageAlt,
  }
}

export const parseCardChildren = (children: ReactNode): ParsedCardContent => {
  if (children == null) return {}

  if (typeof children === 'string' || typeof children === 'number') {
    return parseMarkdownString(String(children))
  }

  const blocks = Children.toArray(children).filter(
    (child) => !isWhitespace(child)
  )

  if (
    blocks.length === 1 &&
    (typeof blocks[0] === 'string' || typeof blocks[0] === 'number')
  ) {
    return parseMarkdownString(String(blocks[0]))
  }

  const link = findLink(children)
  const image = findImage(children)
  const contentLines: ReactNode[] = []

  for (const line of splitByNewlines(children)) {
    if (isImageOnlyLine(line) || isLinkOnlyLine(line)) continue
    contentLines.push(
      typeof line === 'string' ? unwrapMarkdownBold(line) : line
    )
  }

  const [title, ...descriptionParts] = contentLines

  return {
    title,
    description: descriptionParts.length
      ? joinDescription(descriptionParts)
      : undefined,
    linkTitle: link?.title,
    linkTo: link?.href,
    image: image?.src,
    imageAlt: image?.alt,
  }
}
