const INTERNAL_HOSTS = ['developers.vtex.com', 'help.vtex.com']

const getHost = (href: string): string | null => {
  const match = href.match(/^(?:https?:)?\/\/([^/?#]+)/i)
  return match ? match[1].toLowerCase() : null
}

/**
 * Whether a markdown link should open in the current tab.
 * Relative links (no scheme/host) and absolute links to VTEX documentation
 * domains are treated as internal; everything else opens in a new tab.
 */
export const isInternalLink = (href?: string): boolean => {
  if (!href) return false

  const host = getHost(href)
  if (!host) {
    return !/^[a-z][a-z0-9+.-]*:/i.test(href)
  }

  return INTERNAL_HOSTS.some(
    (internalHost) => host === internalHost || host.endsWith(`.${internalHost}`)
  )
}

export const getLinkTargetProps = (href?: string) =>
  isInternalLink(href)
    ? {}
    : { target: '_blank' as const, rel: 'noopener noreferrer' }
