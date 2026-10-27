import { useContext } from 'react'
import Head from 'next/head.js'
import { Box, Flex, Text } from '@vtex/brand-ui'

import Breadcrumb from 'components/breadcrumb'
import type { BreadcrumbItem } from 'components/breadcrumb'
import WhatsNextCard from 'components/whats-next-card'
import { LibraryContext } from 'utils/context/libraryContext'
import { messages } from 'utils/get-message'
import styles from './styles'

export type ArticleIndexingItem = {
  name: string
  url: string
  description?: string
}

export type ArticleIndexingProps = {
  title: string
  items: ArticleIndexingItem[]
  breadcrumbList?: BreadcrumbItem[]
  /** Link label shown on each card. Defaults to a localized "See more". */
  linkTitle?: string
  /** Value for the `docsearch:doctype` meta tag. */
  type?: string
}

const ArticleIndexing = ({
  title,
  items,
  breadcrumbList = [],
  linkTitle,
  type,
}: ArticleIndexingProps) => {
  const { locale } = useContext(LibraryContext)
  const pageTitle = title || 'Untitled'
  const cardLinkTitle =
    linkTitle ?? (messages[locale]['article_indexing.see_more'] || 'See more')

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} key="title" />
        <meta name="docsearch:doctitle" content={pageTitle} />
        {type && <meta name="docsearch:doctype" content={type} />}
      </Head>
      <Flex sx={styles.container}>
        <Box sx={styles.content}>
          <Box sx={styles.breadcrumb}>
            {breadcrumbList.length > 0 && (
              <Breadcrumb breadcrumbList={breadcrumbList} />
            )}
          </Box>
          <Text as="h1" sx={styles.title}>
            {pageTitle}
          </Text>
          <Box sx={styles.grid}>
            {items.map((item) => (
              <WhatsNextCard
                key={item.url}
                title={item.name}
                description={item.description}
                linkTitle={cardLinkTitle}
                linkTo={item.url}
              />
            ))}
          </Box>
        </Box>
        <Box sx={styles.asideSpacer} aria-hidden />
      </Flex>
    </>
  )
}

export default ArticleIndexing
