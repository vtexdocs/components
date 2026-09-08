import { useContext } from 'react'
import Link from 'next/link.js'
import { Flex, Text, Box } from '@vtex/brand-ui'

import { LibraryContext } from 'utils/context/libraryContext'
import { messages } from 'utils/get-message'
import styles from './styles'

export type ArticlePaginationDoc = {
  slug: string | null
  name: string | null
}

export type ArticlePaginationData = {
  previousDoc: ArticlePaginationDoc
  nextDoc: ArticlePaginationDoc
}

export type ArticlePaginationProps = {
  pagination: ArticlePaginationData
  hidePaginationPrevious?: boolean
  hidePaginationNext?: boolean
}

const ArticlePagination = ({
  pagination,
  hidePaginationNext = false,
  hidePaginationPrevious = false,
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
              </Box>
            </Link>
          </Box>
        )}
      </Flex>
    </Box>
  )
}

export default ArticlePagination
