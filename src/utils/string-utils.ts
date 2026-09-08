export const removeHTML = (str: string) => str.replace(/<\/?[^>]+>/g, '')

const SYMBOL_RUN_THRESHOLD = 3

/**
 * Strips Markdown syntax from text snippets to render as plain text.
 * Removes headings, bold, italic, inline code, images, and links while preserving
 * the readable content. Also handles tokens left truncated by the upstream
 * snippet (e.g. an image/link cut off mid-URL with no closing paren).
 */
export const stripMarkdownForSnippet = (str: string): string => {
  if (!str) return ''

  let cleaned = str
    // Drop closed fenced blocks (code, mermaid, etc.) including their contents
    .replace(/```[\s\S]*?```/g, '')
    // Drop unclosed/truncated fenced blocks at the end of a snippet
    .replace(/```[^\n]*(?:\n[\s\S]*)?$/g, '')
    // Remove markdown images ![alt](url) entirely (alt is usually a filename)
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    // Remove markdown links [text](url) - keep only the text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    // Remove truncated markdown images/links left dangling at the end of a
    // snippet (upstream cuts the string mid-token, e.g. "![alt](https://..." )
    .replace(/!?\[[^\]]*\]\([^)]*$/g, '')
    // Remove a dangling image/link label with no closing bracket ("![alt" )
    .replace(/!?\[[^\]]*$/g, '')
    // Remove markdown headings (# ## ### etc.) at line start
    .replace(/^#{1,6}\s+/gm, '')
    // Remove markdown headings anywhere in text
    .replace(/\s#{1,6}\s+/g, ' ')
    // Remove bold (**text** or __text__)
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/__(.+?)__/g, '$1')
    // Remove italic (*text* or _text_)
    .replace(/\*(.+?)\*/g, '$1')
    .replace(/_(.+?)_/g, '$1')
    // Remove inline code (`text`) — keep readable inner text
    .replace(/`([^`]+)`/g, '$1')
    // Remove horizontal rules (---, ***, ___)
    .replace(/^(\*{3,}|-{3,}|_{3,})$/gm, '')
    // Remove blockquotes (>)
    .replace(/^>\s+/gm, '')
    // Remove table separator rows (| --- | :--: | etc.)
    .replace(/^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)*\|?\s*$/gm, '')
    // Replace remaining table pipes with spaces so cell content stays readable
    .replace(/\s*\|\s*/g, ' ')
    // Collapse stray horizontal-rule / table-separator symbol runs
    .replace(new RegExp(`-{${SYMBOL_RUN_THRESHOLD},}`, 'g'), ' ')
    .replace(new RegExp(`={${SYMBOL_RUN_THRESHOLD},}`, 'g'), ' ')
    .replace(new RegExp(`\\|{${SYMBOL_RUN_THRESHOLD},}`, 'g'), ' ')
    // Remove extra whitespace and normalize spaces
    .replace(/\s+/g, ' ')
    .trim()

  // If the snippet starts mid-word (lowercase letter), try to find the start of the next word
  if (cleaned.length > 0 && /^[a-zà-ÿ]/.test(cleaned)) {
    const firstSpaceIndex = cleaned.indexOf(' ')
    if (firstSpaceIndex > 0 && firstSpaceIndex < 50) {
      cleaned = cleaned.substring(firstSpaceIndex + 1).trim()
    }
  }

  return cleaned
}

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const toCamelCase = (str: string) => {
  const [firstWord, ...otherWords] = str.split('-')
  return `${firstWord}${otherWords.map(capitalizeFirstLetter).join('')}`
}

export const slugify = (str: string) => {
  return str
    .normalize('NFD') // Decomposes diacritics (e.g., "é" → "é")
    .replace(/[\u0300-\u036f]/g, '') // Removes diacritic marks
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Removes non-word characters except spaces and hyphens
    .replace(/\s+/g, '-') // Replaces spaces with hyphens
    .replace(/-+/g, '-') // Removes multiple consecutive hyphens
    .trim() // Trims leading/trailing spaces
}

type Child = string | { props: { children: Child[] } }

export const childrenToString: (children: Child[]) => string = (children) => {
  if (!children) return ''
  else if (Array.isArray(children))
    return children
      .map((child) => {
        if (typeof child === 'string') return child
        return childrenToString(child.props.children)
      })
      .join('')
  else {
    if (typeof children === 'string') return children
    return childrenToString(children['props']['children'])
  }
}

export const matrixToMarkdownTable: (matrix: string[][]) => string = (
  matrix
) => {
  const matrixRowToMarkdownTableRow = (matrixRow: string[]) =>
    `|${matrixRow
      .map((matrixElement) => ` ${matrixElement.replace(/\n/g, '<br />')} |`)
      .join('')}`

  let table = matrixRowToMarkdownTableRow(matrix[0]) + '\n|'
  for (let i = 0; i < matrix[0].length; i++) table += ' --- |'

  table += '\n'
  for (let i = 1; i < matrix.length; i++)
    table += matrixRowToMarkdownTableRow(matrix[i]) + '\n'

  return table
}
