import {
  Children,
  cloneElement,
  isValidElement,
  type AnchorHTMLAttributes,
  type ReactElement,
  type ReactNode,
} from 'react'

type Href = string | { pathname?: string; query?: Record<string, unknown> }

type NextLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href: Href
  locale?: string
  passHref?: boolean
  legacyBehavior?: boolean
  replace?: boolean
  scroll?: boolean
  shallow?: boolean
  prefetch?: boolean
  children?: ReactNode
}

const toUrl = (href: Href) => {
  if (typeof href === 'string') return href
  return href.pathname ?? '#'
}

const Link = ({
  href,
  children,
  locale: _locale,
  passHref: _passHref,
  legacyBehavior,
  replace: _replace,
  scroll: _scroll,
  shallow: _shallow,
  prefetch: _prefetch,
  ...rest
}: NextLinkProps) => {
  const url = toUrl(href)

  if (legacyBehavior && isValidElement(children)) {
    const child = Children.only(children) as ReactElement<{ href?: string }>
    return cloneElement(child, { href: child.props.href ?? url })
  }

  return (
    <a href={url} {...rest}>
      {children}
    </a>
  )
}

export default Link
