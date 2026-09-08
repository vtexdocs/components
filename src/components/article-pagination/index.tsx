import { useContext, type ReactNode } from 'react'
import Link from 'next/link.js'
import { Flex, Text, Box } from '@vtex/brand-ui'

import { LibraryContext } from 'utils/context/libraryContext'
import { formatArticleDateValue } from 'utils/format-article-date'
import { messages } from 'utils/get-message'
import styles from './styles'

export type ArticlePaginationDoc = {
  slug: string | null
  name: string | null
  createdAt?: string | null
  children?: ReactNode
}

export type ArticlePaginationData = {
  previousDoc: ArticlePaginationDoc
  nextDoc: ArticlePaginationDoc
}

export type ArticlePaginationProps = {
  pagination: ArticlePaginationData
  hidePaginationPrevious?: boolean
  hidePaginationNext?: boolean
  previousChildren?: ReactNode
  nextChildren?: ReactNode
}

const ArticlePagination = ({
  pagination,
  hidePaginationNext = false,
  hidePaginationPrevious = false,
  previousChildren,
  nextChildren,
}: ArticlePaginationProps) => {
  const { locale } = useContext(LibraryContext)
  const previousLabel =
    messages[locale]['article_pagination.previous'] || 'Previous'
  const nextLabel = messages[locale]['article_pagination.next'] || 'Next'

  const showPrevious =
    !hidePaginationPrevious &&
    Boolean(pagination?.previousDoc?.slug) &&
    Boolean(pagination?.previousDoc?.name)
  const showNext =
    !hidePaginationNext &&
    Boolean(pagination?.nextDoc?.slug) &&
    Boolean(pagination?.nextDoc?.name)

  const previousExtra =
    previousChildren ??
    pagination?.previousDoc?.children ??
    formatArticleDateValue(
      pagination?.previousDoc?.createdAt,
      locale,
      'medium'
    )
  const nextExtra =
    nextChildren ??
    pagination?.nextDoc?.children ??
    formatArticleDateValue(pagination?.nextDoc?.createdAt, locale, 'medium')

  return (
    <Box as="nav" sx={styles.mainContainer}>
      <Flex sx={styles.flexContainer}>
        {showPrevious && (
          <Box sx={styles.paginationLinkPrevious}>
            <Link
              style={styles.linkReset}
              href={pagination.previousDoc.slug as string}
              locale={locale}
            >
              <Box sx={styles.paginationBox}>
                <Text sx={styles.subTitle}>{`« ${previousLabel}`}</Text>
                <Text sx={styles.paginationText}>
                  {pagination.previousDoc.name}
                </Text>
                {previousExtra != null && previousExtra !== false && (
                  <Box sx={styles.paginationChildren}>{previousExtra}</Box>
                )}
              </Box>
            </Link>
          </Box>
        )}

        {showNext && (
          <Box sx={styles.paginationLinkNext}>
            <Link
              style={styles.linkReset}
              href={pagination.nextDoc.slug as string}
              locale={locale}
            >
              <Box sx={styles.paginationBoxNext}>
                <Text sx={styles.subTitle}>{`${nextLabel} »`}</Text>
                <Text sx={styles.paginationText}>
                  {pagination.nextDoc.name}
                </Text>
                {nextExtra != null && nextExtra !== false && (
                  <Box sx={styles.paginationChildren}>{nextExtra}</Box>
                )}
              </Box>
            </Link>
          </Box>
        )}
      </Flex>
    </Box>
  )
}

export default ArticlePagination
