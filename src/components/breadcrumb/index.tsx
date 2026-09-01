import { Flex } from '@vtex/brand-ui'
import Link from 'next/link.js'

import styles from './styles'

export type BreadcrumbItem = {
  slug: string
  name: string
  type: string
}

export type BreadcrumbProps = {
  breadcrumbList?: BreadcrumbItem[]
  /** @deprecated Use `breadcrumbList`. Kept for callers that still pass the old typo. */
  breadcumbList?: BreadcrumbItem[]
}

const Breadcrumb = ({
  breadcrumbList,
  breadcumbList,
}: BreadcrumbProps) => {
  const items = (breadcrumbList ?? breadcumbList ?? []).slice(0, -1)

  return (
    <Flex as="nav" aria-label="Breadcrumb" sx={styles.breadcrumb}>
      {items.map((item, idx) => {
        const label = item.name || 'Untitled'

        return (
          <Flex as="span" key={item.slug || idx} sx={styles.crumb}>
            {item.type === 'markdown' ? (
              <Link href={item.slug}>{label}</Link>
            ) : (
              <span data-breadcrumb-label>{label}</span>
            )}
          </Flex>
        )
      })}
    </Flex>
  )
}

export default Breadcrumb
