import { type ReactNode, useEffect } from 'react'
import Head from 'next/head.js'
import { Box, Flex, Text } from '@vtex/brand-ui'
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'

import AskAIMenu from 'components/ask-ai'
import ArticlePagination from 'components/article-pagination'
import type { ArticlePaginationData } from 'components/article-pagination'
import SeeAlsoSection from 'components/see-also-section'
import type { SeeAlsoDoc } from 'components/see-also-section'
import Author from 'components/author'
import Breadcrumb from 'components/breadcrumb'
import type { BreadcrumbItem } from 'components/breadcrumb'
import CopyHeadingLink from 'components/copy-heading-link'
import FeedbackModal from 'components/feedback-modal'
import FeedbackSection from 'components/feedback-section'
import SuggestEdits from 'components/suggest-edits'
import TimeToRead from 'components/time-to-read'
import MarkdownRenderer from 'lib/markdown-renderer'
import type { MarkdownRendererProps } from 'lib/markdown-renderer/MarkdownRenderer.types'
import Contributors from 'lib/contributors'
import type { ContributorsType } from 'lib/contributors'
import OnThisPage from 'lib/on-this-page'
import TableOfContents from 'lib/table-of-contents'
import type { Item } from 'lib/table-of-contents'
import { useLocale, useTocActions } from 'utils/context/libraryContext'
import {
  formatArticleDate,
  parseArticleDate,
} from 'utils/format-article-date'
import { messages } from 'utils/get-message'
import useMediaQuery from 'utils/hooks/useMediaQuery'
import styles, { ARTICLE_SIDEBAR_MQ } from './styles'

export type ArticleRenderProps = {
  serialized: MDXRemoteSerializeResult
  breadcrumbList: BreadcrumbItem[]
  slug: string
  path: string
  type: string
  pageUrl: string
  urlToEdit: string
  rawContentBaseUrl: string
  contributors?: ContributorsType[]
  headings?: Item[]
  headingList?: Item[]
  pagination?: ArticlePaginationData
  paginationPreviousChildren?: ReactNode
  paginationNextChildren?: ReactNode
  children?: ReactNode
  seeAlso?: SeeAlsoDoc[] | ReactNode
  customComponents?: MarkdownRendererProps['customComponents']
  scope?: MarkdownRendererProps['scope']
  /** Wrap the markdown output without remounting it on parent re-renders. */
  renderMarkdown?: (markdown: ReactNode) => ReactNode
  showReadingTime?: boolean
  showAskAIMenu?: boolean
  showAuthor?: boolean
  showContributors?: boolean
  showFeedbackSection?: boolean
  showSuggestEdits?: boolean
  showArticlePagination?: boolean
  showSeeAlso?: boolean
  showTableOfContents?: boolean
  /** Hide the right-hand table of contents. Also respects `frontmatter.hideTOC`. */
  hideTOC?: boolean
  showCreatedAt?: boolean
  createdAtFormat?: 'long' | 'published'
  showUpdatedAt?: boolean
}

const readingTimeLabel = (readingTime: unknown) => {
  if (readingTime == null || readingTime === '') return undefined
  if (
    typeof readingTime === 'object' &&
    readingTime !== null &&
    'text' in readingTime
  ) {
    const text = (readingTime as { text?: unknown }).text
    return text != null ? String(text) : undefined
  }
  return String(readingTime)
}

const isSameUtcDay = (a: Date, b: Date) =>
  a.getUTCFullYear() === b.getUTCFullYear() &&
  a.getUTCMonth() === b.getUTCMonth() &&
  a.getUTCDate() === b.getUTCDate()

const EMPTY_HEADINGS: Item[] = []
const EMPTY_CONTRIBUTORS: ContributorsType[] = []
const EMPTY_SCOPE: MarkdownRendererProps['scope'] = {}

const ArticleRender = ({
  serialized,
  headings = EMPTY_HEADINGS,
  headingList,
  breadcrumbList,
  contributors = EMPTY_CONTRIBUTORS,
  path,
  pagination,
  paginationPreviousChildren,
  paginationNextChildren,
  slug,
  type,
  pageUrl,
  urlToEdit,
  rawContentBaseUrl,
  children,
  seeAlso,
  customComponents,
  scope = EMPTY_SCOPE,
  renderMarkdown,
  showReadingTime = true,
  showAskAIMenu = true,
  showAuthor = false,
  showContributors = true,
  showFeedbackSection = true,
  showSuggestEdits = true,
  showArticlePagination = true,
  showSeeAlso = true,
  showTableOfContents = true,
  hideTOC = false,
  showCreatedAt = false,
  createdAtFormat = 'long',
  showUpdatedAt = false,
}: ArticleRenderProps) => {
  const locale = useLocale()
  const localeMessages = messages[locale] ?? messages.en
  const { setHeadingItems } = useTocActions()
  const isDesktop = useMediaQuery(ARTICLE_SIDEBAR_MQ)
  const tocHeadings = headingList?.length ? headingList : headings
  const readingTime = readingTimeLabel(serialized?.frontmatter?.readingTime)
  const createdAt = parseArticleDate(serialized?.frontmatter?.createdAt)
  const updatedAt = parseArticleDate(serialized?.frontmatter?.updatedAt)
  const createdAtDate = createdAt
    ? formatArticleDate(
        createdAt,
        locale,
        createdAtFormat === 'published' ? 'short' : 'long'
      )
    : undefined
  const publishedLabel =
    localeMessages['date_text.created'] || 'Published on'
  const createdAtLabel = createdAtDate
    ? createdAtFormat === 'published'
      ? `${publishedLabel}: ${createdAtDate}`
      : createdAtDate
    : undefined
  const hasDistinctUpdatedAt = Boolean(
    updatedAt && (!createdAt || !isSameUtcDay(createdAt, updatedAt))
  )
  const updatedAtLabel =
    hasDistinctUpdatedAt && updatedAt
      ? formatArticleDate(updatedAt, locale, 'short')
      : undefined
  const lastUpdateLabel =
    localeMessages['date_text.last_update'] || 'Last update:'
  const hideToc =
    hideTOC || serialized?.frontmatter?.hideTOC === true
  const shouldShowTableOfContents = showTableOfContents && !hideToc
  const showBottomSection = showContributors || showFeedbackSection
  const showSidebar =
    !hideToc && (showContributors || shouldShowTableOfContents)
  const showDesktopSidebar = showSidebar && isDesktop === true
  const showMobileBottomSection =
    showBottomSection && (isDesktop === false || !showSidebar)
  const showMobileToc =
    shouldShowTableOfContents && tocHeadings.length > 0 && isDesktop === false

  useEffect(() => {
    if (!shouldShowTableOfContents) return
    setHeadingItems(tocHeadings)
  }, [shouldShowTableOfContents, tocHeadings, setHeadingItems])

  const markdown = (
    <MarkdownRenderer
      serialized={serialized}
      customComponents={customComponents}
      scope={scope}
    />
  )

  return (
    <>
      <Head>
        <>
          <meta name="docsearch:doctype" content={type} />
          {serialized?.frontmatter?.title && (
            <title>{serialized?.frontmatter?.title as string}</title>
          )}
          {serialized?.frontmatter?.title && (
            <meta
              name="docsearch:doctitle"
              content={serialized?.frontmatter?.title as string}
            />
          )}
          {serialized.frontmatter?.hidden && (
            <meta name="robots" content="noindex" />
          )}
          {serialized.frontmatter?.excerpt && (
            <meta
              property="og:description"
              content={serialized.frontmatter?.excerpt as string}
            />
          )}
        </>
      </Head>
      <Flex sx={styles.innerContainer}>
        <Box sx={styles.articleBox} data-article-box>
          <Box sx={styles.contentContainer}>
            <Flex sx={styles.breadcrumbRow}>
              <Breadcrumb breadcrumbList={breadcrumbList} />
            </Flex>
            <Box sx={styles.textContainer}>
              <article>
                <header>
                  <>
                    <Text as="h1" sx={styles.documentationTitle} className="title">
                      <CopyHeadingLink>
                        {serialized.frontmatter?.title as ReactNode}
                      </CopyHeadingLink>
                    </Text>
                    {children && (
                      <Box sx={styles.articleHeaderExtra}>{children}</Box>
                    )}
                    {showAuthor && contributors[0]?.avatar && (
                      <Author contributor={contributors[0]} />
                    )}
                    {serialized.frontmatter?.excerpt && (
                      <Text as="p" sx={styles.documentationExcerpt}>
                        {serialized.frontmatter?.excerpt}
                      </Text>
                    )}
                  </>
                </header>

                <Flex sx={styles.articleMeta}>
                  {((showCreatedAt && createdAtLabel) ||
                    (showReadingTime && readingTime)) && (
                    <Flex sx={styles.articleMetaInfo}>
                      {showCreatedAt && createdAtLabel && (
                        <Text sx={styles.articleCreatedAt}>{createdAtLabel}</Text>
                      )}
                      {showReadingTime && readingTime && (
                        <Box sx={styles.articleReadingTime}>
                          <TimeToRead minutes={readingTime} />
                        </Box>
                      )}
                    </Flex>
                  )}
                  <Flex sx={styles.articleActions}>
                    <FeedbackModal pageUrl={pageUrl} />
                    {showAskAIMenu && (
                      <AskAIMenu
                        filePath={path}
                        pageUrl={pageUrl}
                        rawContentBaseUrl={rawContentBaseUrl}
                      />
                    )}
                  </Flex>
                </Flex>
                {renderMarkdown ? renderMarkdown(markdown) : markdown}
              </article>
              {showSeeAlso &&
                (Array.isArray(seeAlso)
                  ? seeAlso.length > 0 && <SeeAlsoSection docs={seeAlso} />
                  : seeAlso)}
              {showUpdatedAt && updatedAtLabel && (
                <Text sx={styles.articleLastUpdate}>
                  {lastUpdateLabel} {updatedAtLabel}
                </Text>
              )}
            </Box>
          </Box>

          {showMobileBottomSection && (
            <Box sx={styles.bottomContributorsContainer}>
              {showContributors && (
                <Box sx={styles.bottomContributors}>
                  <Contributors contributors={contributors} />
                </Box>
              )}
              {showFeedbackSection && (
                <FeedbackSection
                  slug={slug}
                  urlToEdit={urlToEdit}
                  pageUrl={pageUrl}
                  suggestEdits={showSuggestEdits}
                />
              )}
            </Box>
          )}

          {showArticlePagination && pagination && (
            <ArticlePagination
              hidePaginationNext={
                Boolean(serialized.frontmatter?.hidePaginationNext) || false
              }
              hidePaginationPrevious={
                Boolean(serialized.frontmatter?.hidePaginationPrevious) || false
              }
              pagination={pagination}
              previousChildren={paginationPreviousChildren}
              nextChildren={paginationNextChildren}
            />
          )}
        </Box>
        {showSidebar && isDesktop !== false && (
          <Box sx={styles.rightContainer} data-article-aside>
            {showDesktopSidebar && (
              <>
                {showContributors && (
                  <Contributors contributors={contributors} />
                )}
                {shouldShowTableOfContents && (
                  <TableOfContents headingList={tocHeadings}>
                    {(showFeedbackSection || showSuggestEdits) && (
                      <Box sx={styles.divider}>
                        {showFeedbackSection && (
                          <FeedbackSection
                            slug={slug}
                            small
                            suggestEdits={false}
                          />
                        )}
                        {showSuggestEdits && (
                          <SuggestEdits
                            urlToEdit={urlToEdit}
                            small
                            sx={styles.editContainer}
                          />
                        )}
                      </Box>
                    )}
                  </TableOfContents>
                )}
              </>
            )}
          </Box>
        )}
        {showMobileToc && <OnThisPage headingList={tocHeadings} />}
      </Flex>
    </>
  )
}

export default ArticleRender
