import Head from 'next/head.js'
import { Box, Flex, Link, Text } from '@vtex/brand-ui'

import Breadcrumb from 'components/breadcrumb'
import type { BreadcrumbItem } from 'components/breadcrumb'
import WhatsNextCard from 'components/whats-next-card'
import styles from './styles'

export type ArticleIndexingItem = {
  name: string
  url: string
  description?: string
}

export type ArticleIndexingVariant = 'cards' | 'list'

export type ArticleIndexingProps = {
  title: string
  items: ArticleIndexingItem[]
  breadcrumbList?: BreadcrumbItem[]
  /** `cards` renders a grid of cards; `list` renders a list of links under a section title. */
  variant?: ArticleIndexingVariant
  /** Heading shown above the items in the `list` variant. */
  sectionTitle?: string
  /** Link label shown on each card in the `cards` variant. */
  linkTitle?: string
  /** Value for the `docsearch:doctype` meta tag. */
  type?: string
}

const ArticleIndexing = ({
  title,
  items,
  breadcrumbList = [],
  variant = 'cards',
  sectionTitle = 'In this section',
  linkTitle = 'See more',
  type,
}: ArticleIndexingProps) => {
  const pageTitle = title || 'Untitled'

  const head = (
    <Head>
      <title>{pageTitle}</title>
      <meta property="og:title" content={pageTitle} key="title" />
      <meta name="docsearch:doctitle" content={pageTitle} />
      {type && <meta name="docsearch:doctype" content={type} />}
    </Head>
  )

  const breadcrumb = breadcrumbList.length > 0 && (
    <Breadcrumb breadcrumbList={breadcrumbList} />
  )

  if (variant === 'list') {
    return (
      <>
        {head}
        <Flex sx={styles.listInnerContainer}>
          <Box sx={styles.listArticleBox}>
            <Box sx={styles.listContentContainer}>
              <Flex sx={styles.breadcrumbRow}>{breadcrumb}</Flex>
              <Box sx={styles.listTextContainer}>
                <article>
                  <header>
                    <Text as="h1" sx={styles.listTitle}>
                      {pageTitle}
                    </Text>
                  </header>
                  <Box sx={styles.listTextContainer}>
                    <Text sx={styles.listSectionTitle}>{sectionTitle}</Text>
                    <Flex sx={styles.listLinksContainer}>
                      {items.map((item) => (
                        <Link
                          href={item.url}
                          key={item.url}
                          sx={styles.listItem}
                        >
                          <Text sx={styles.listItemName}>
                            {item.name || 'Untitled'}
                          </Text>
                          {item.description && (
                            <Text sx={styles.listItemDescription}>
                              {item.description}
                            </Text>
                          )}
                        </Link>
                      ))}
                    </Flex>
                  </Box>
                </article>
              </Box>
            </Box>
          </Box>
        </Flex>
      </>
    )
  }

  return (
    <>
      {head}
      <Box sx={styles.cardsContainer}>
        <Box sx={styles.cardsBreadcrumb}>{breadcrumb}</Box>
        <Text as="h1" sx={styles.cardsTitle}>
          {pageTitle}
        </Text>
        <Box sx={styles.cardsGrid}>
          {items.map((item) => (
            <WhatsNextCard
              key={item.url}
              title={item.name}
              description={item.description}
              linkTitle={linkTitle}
              linkTo={item.url}
            />
          ))}
        </Box>
      </Box>
    </>
  )
}

export default ArticleIndexing
