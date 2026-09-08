type Query = Record<string, string | string[] | undefined>

type UrlObject = {
  pathname?: string
  query?: Query
  hash?: string
}

type Url = string | UrlObject

type RouterEvent = 'routeChangeStart' | 'hashChangeStart'

const listeners: Record<RouterEvent, Set<(url: string) => void>> = {
  routeChangeStart: new Set(),
  hashChangeStart: new Set(),
}

const parseUrl = (url: Url) => {
  if (typeof url === 'string') {
    const [pathAndQuery, hash] = url.split('#')
    const [pathname, search = ''] = pathAndQuery.split('?')
    const query: Query = {}
    new URLSearchParams(search).forEach((value, key) => {
      query[key] = value
    })
    return {
      pathname,
      query,
      asPath: url,
      hash: hash ? `#${hash}` : '',
    }
  }

  const pathname = url.pathname ?? '/'
  const query = { ...(url.query ?? {}) }
  const search = new URLSearchParams(
    Object.entries(query).flatMap(([key, value]) =>
      value == null ? [] : [[key, String(value)]]
    )
  ).toString()
  const hash = url.hash ?? ''
  const asPath = `${pathname}${search ? `?${search}` : ''}${hash}`
  return { pathname, query, asPath, hash }
}

const emit = (event: RouterEvent, url: string) => {
  listeners[event].forEach((listener) => listener(url))
}

export const router = {
  pathname: '/',
  asPath: '/',
  route: '/',
  query: {} as Query,
  locale: 'en',
  locales: ['en', 'pt', 'es'],
  defaultLocale: 'en',
  basePath: '',
  isReady: true,
  isFallback: false,
  isLocaleDomain: false,
  events: {
    on: (event: RouterEvent, listener: (url: string) => void) => {
      listeners[event]?.add(listener)
    },
    off: (event: RouterEvent, listener: (url: string) => void) => {
      listeners[event]?.delete(listener)
    },
    emit,
  },
  push: async (url: Url) => {
    const next = parseUrl(url)
    emit('routeChangeStart', next.asPath)
    router.pathname = next.pathname
    router.route = next.pathname
    router.query = next.query
    router.asPath = next.asPath
    return true
  },
  replace: async (url: Url) => router.push(url),
  prefetch: async () => undefined,
  reload: () => undefined,
  back: () => undefined,
  beforePopState: () => undefined,
}

export const useRouter = () => router

export default { useRouter, router }
