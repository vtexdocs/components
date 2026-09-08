import type { ReactNode } from 'react'
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
import DateText from 'components/date-text'
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
import styles from './styles'

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
  showDateText?: boolean
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

const parseFrontmatterDate = (value: unknown) => {
  if (value == null || value === '') return undefined
  const date = new Date(String(value))
  return Number.isNaN(date.getTime()) ? undefined : date
}

const ArticleRender = ({
  serialized,
  headings = [],
  headingList,
  breadcrumbList,
  contributors = [],
  path,
  pagination,
  slug,
  type,
  pageUrl,
  urlToEdit,
  rawContentBaseUrl,
  children,
  seeAlso,
  customComponents,
  scope = {},
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
  showDateText = false,
}: ArticleRenderProps) => {
  const tocHeadings = headingList?.length ? headingList : headings
  const readingTime = readingTimeLabel(serialized?.frontmatter?.readingTime)
  const createdAt = parseFrontmatterDate(serialized?.frontmatter?.createdAt)
  const updatedAt = parseFrontmatterDate(serialized?.frontmatter?.updatedAt)
  const hasDates = Boolean(createdAt && updatedAt)
  const showBottomSection = showContributors || showFeedbackSection
  const showSidebar = showContributors || showTableOfContents
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
                      {serialized.frontmatter?.title}
                      <CopyHeadingLink />
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
                  {((showDateText && hasDates) ||
                    (showReadingTime && readingTime)) && (
                    <Flex sx={styles.articleMetaInfo}>
                      {showDateText && hasDates && createdAt && updatedAt && (
                        <DateText
                          createdAt={createdAt}
                          updatedAt={updatedAt}
                        />
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
            </Box>
          </Box>

          {showBottomSection && (
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
            />
          )}
        </Box>
        {showSidebar && (
          <Box sx={styles.rightContainer} data-article-aside>
            {showContributors && <Contributors contributors={contributors} />}
            {showTableOfContents && (
              <TableOfContents headingList={tocHeadings}>
                {(showFeedbackSection || showSuggestEdits) && (
                  <Box sx={styles.divider}>
                    {showFeedbackSection && (
                      <FeedbackSection slug={slug} small suggestEdits={false} />
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
          </Box>
        )}
        {showTableOfContents && tocHeadings.length > 0 && (
          <OnThisPage headingList={tocHeadings} />
        )}
      </Flex>
    </>
  )
}

export default ArticleRender
