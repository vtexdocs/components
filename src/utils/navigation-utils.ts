export const flattenJSON = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  obj: any = {},
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  res: any = {},
  extraKey = ''
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): any => {
  if (!obj || typeof obj !== 'object') return res

  for (const key in obj) {
    const value = obj[key]
    if (value !== null && typeof value === 'object') {
      flattenJSON(value, res, `${extraKey}${key}.`)
    } else {
      res[extraKey + key] = value
    }
  }
  return res
}

const documentationTypeCache = new WeakMap<object, Map<string, string>>()

function indexDocumentationTypes(
  data: unknown,
  index: Map<string, string>
): void {
  if (!data || typeof data !== 'object') return

  if (Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      indexDocumentationTypes(data[i], index)
    }
    return
  }

  const node = data as { slug?: unknown; type?: unknown }
  if (typeof node.type === 'string' && node.slug != null) {
    if (typeof node.slug === 'string') {
      index.set(node.slug, node.type)
    } else if (typeof node.slug === 'object') {
      for (const value of Object.values(node.slug as Record<string, unknown>)) {
        if (typeof value === 'string' && value) {
          index.set(value, node.type)
        }
      }
    }
  }

  for (const value of Object.values(data as Record<string, unknown>)) {
    if (value && typeof value === 'object') {
      indexDocumentationTypes(value, index)
    }
  }
}

/** O(1) lookup of a nav node's `type` (`markdown` | `category` | `link`). */
export function getDocumentationType(
  sidebarData: unknown,
  slug: string
): string | undefined {
  if (!sidebarData || typeof sidebarData !== 'object') return undefined

  let index = documentationTypeCache.get(sidebarData)
  if (!index) {
    index = new Map()
    indexDocumentationTypes(sidebarData, index)
    documentationTypeCache.set(sidebarData, index)
  }

  return index.get(slug)
}

export const getKeyByEndpoint = (
  object: { [x: string]: string },
  endpoint: string,
  slug: string,
  method?: string
) => {
  const slugPaths = Object.keys(object).filter((key) => object[key] === slug)
  let path = ''
  slugPaths?.map((el) => {
    if (
      method &&
      object[`${el.replace('.slug', '.method')}`] == method?.toUpperCase() &&
      object[`${el.replace('.slug', '.endpoint')}`] == endpoint
    ) {
      path = el
    } else if (hasChildren(object, el.replace('.slug', '.children'))) {
      path = el
    }
  })
  return path
}

function hasChildren(
  flattenedJson: { [x: string]: string },
  elementKey: string
): boolean {
  for (const key in flattenedJson) {
    if (key.startsWith(`${elementKey}.`)) {
      return true
    }
  }
  return false
}

export const getParents = (
  path: string,
  data: string,
  flattenedSidebar: { [x: string]: string },
  parentsArray: string[],
  parent?: string
) => {
  const pathParts = path?.split('children')
  pathParts?.splice(-1)
  let prev = ''
  pathParts?.map((el) => {
    el = prev + el
    prev = el + 'children'

    if (!parent || flattenedSidebar[`${el}${data}`].includes(parent)) {
      parentsArray.push(flattenedSidebar[`${el}${data}`])
    }
  })
  return parentsArray
}
