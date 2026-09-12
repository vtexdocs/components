export type SearchHitLike = {
  filePath?: unknown
  url?: unknown
  url_without_anchor?: unknown
  doctype?: unknown
  objectID?: unknown
  content?: unknown
  doctitle?: unknown
  filteredMatches?: SearchHitLike[]
}

const asString = (value: unknown) => (typeof value === 'string' ? value : '')

export function slugFromPath(path: string): string {
  if (!path) return ''
  const clean = path
    .replace(/^https?:\/\/[^/]+/i, '')
    .split('#')[0]
    .split('?')[0]
  const parts = clean.split('/').filter(Boolean)
  const last = parts[parts.length - 1] || ''
  return last.replace(/\.mdx?$/i, '').toLowerCase()
}

export function getSearchHitSlug(hit: SearchHitLike): string {
  return (
    slugFromPath(asString(hit.filePath)) ||
    slugFromPath(asString(hit.url_without_anchor) || asString(hit.url))
  )
}

/** One article per doctype + slug (or URL / objectID when slug is missing). */
export function getSearchHitArticleKey(hit: SearchHitLike): string {
  const slug = getSearchHitSlug(hit)
  const doctype = asString(hit.doctype).toLowerCase()
  if (slug) return `${doctype}::${slug}`
  return (
    asString(hit.url_without_anchor) ||
    asString(hit.url) ||
    String(hit.objectID ?? '')
  )
}

export function uniqueHitsByArticle<T extends SearchHitLike>(hits: T[]): T[] {
  const seen = new Set<string>()
  const unique: T[] = []

  for (const hit of hits) {
    const key = getSearchHitArticleKey(hit)
    if (!key || seen.has(key)) continue
    seen.add(key)
    unique.push(hit)
  }

  return unique
}

export function mergeHitsByArticle<T extends SearchHitLike>(hits: T[]): T[] {
  const merged: T[] = []
  const indexByKey = new Map<string, number>()

  for (const hit of hits) {
    const key = getSearchHitArticleKey(hit)
    const existingIndex = indexByKey.get(key)
    const copy = { ...hit, filteredMatches: hit.filteredMatches || [] }

    if (existingIndex !== undefined) {
      merged[existingIndex].filteredMatches?.push(copy)
    } else {
      indexByKey.set(key, merged.length)
      merged.push(copy)
    }
  }

  return merged
}

export function stripLeadingTitleFromSnippet(
  text: string,
  title: string
): string {
  if (!text || !title) return text

  const normalizedTitle = title.trim()
  if (!normalizedTitle) return text
  if (text.trim().toLowerCase() === normalizedTitle.toLowerCase()) return ''

  const escaped = normalizedTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const stripped = text
    .replace(new RegExp(`^${escaped}(?:\\s*[-–—:]\\s*|\\s+)`, 'i'), '')
    .trim()

  if (stripped.toLowerCase() === normalizedTitle.toLowerCase()) return ''
  return stripped
}
