import { useRouter } from 'next/router.js'
import Link from 'next/link.js'
import { useContext, useEffect, useState, MouseEvent } from 'react'
import {
  connectStateResults,
  connectHitInsights,
} from 'react-instantsearch-dom'
import {
  Hit,
  StateResultsProvided,
  WrappedInsightsClient,
} from 'react-instantsearch-core'
import aa from 'search-insights'
import { Box, Flex, IconCaret, Text } from '@vtex/brand-ui'

import {
  getIconFromSection,
  getRelativeURL,
  getSearchBreadcrumbs,
} from 'utils/search-utils'
import CustomHighlight, { HighlightQuery } from './customHighlight'
import styles from './styles'
import { LibraryContext } from 'utils/context/libraryContext'
import { messages } from 'utils/get-message'
import CopyIcon from 'components/icons/copy-icon'
import ExternalLinkIcon from 'components/icons/external-link-icon'
import PaperIcon from 'components/icons/paper-icon'
import { SearchInputVariant } from './types'

const VISIBLE_HITS = 7
const VISIBLE_HITS_MODAL = 5

interface HitProps {
  hit: Hit
  insights: WrappedInsightsClient
  query?: string
  isActive?: boolean
  copied?: boolean
  variant?: SearchInputVariant
  onCopy: (event: MouseEvent, url: string, objectID: string) => void
  onOpenNewTab: (event: MouseEvent, url: string) => void
  onMouseEnter: () => void
}

interface HitsBoxProps extends StateResultsProvided {
  changeFocus: (value: boolean) => void
  variant?: SearchInputVariant
}

const Hit2 = ({
  hit,
  insights,
  query,
  isActive,
  copied,
  variant = 'default',
  onCopy,
  onOpenNewTab,
  onMouseEnter,
}: HitProps) => {
  const { sidebarSections, sidebarDataMaster, locale } =
    useContext(LibraryContext)
  const DocIcon = getIconFromSection(sidebarSections, hit.doctype) || PaperIcon
  const title = typeof hit.doctitle === 'string' ? hit.doctitle : ''
  const relativeUrl = getRelativeURL(hit.url)
  const breadcrumbs = getSearchBreadcrumbs({
    hit,
    navigation: sidebarDataMaster,
    sections: sidebarSections,
    locale,
  })
  const isModal = variant === 'modal'

  return (
    <Box
      sx={isModal ? styles.hitBoxModal : styles.hitBox}
      data-active={String(Boolean(isActive))}
      onMouseEnter={onMouseEnter}
    >
      <Link href={relativeUrl} legacyBehavior>
        <a
          onClick={() =>
            insights('clickedObjectIDsAfterSearch', {
              eventName: 'Search in top bar',
              objectIDs: [hit.objectID],
            })
          }
        >
          <Flex sx={isModal ? styles.hitLinkModal : styles.hitLink}>
            <Box
              className="hit-icon-wrap"
              sx={isModal ? styles.hitIconWrapModal : styles.hitIconWrap}
            >
              <DocIcon
                className="hit-icon"
                sx={isModal ? styles.hitIconModal : styles.hitIcon}
              />
            </Box>
            <Box sx={styles.hitText}>
              {title ? (
                <Text sx={isModal ? styles.hitTitleModal : styles.hitTitle}>
                  <HighlightQuery text={title} query={query} />
                </Text>
              ) : null}
              {!isModal && hit.content ? (
                <CustomHighlight hit={hit} attribute="content" />
              ) : null}
              {typeof hit.doctype === 'string' && (
                <Flex sx={styles.hitBreadcrumbs}>
                  {isModal ? (
                    (breadcrumbs.length
                      ? breadcrumbs
                      : [String(hit.doctype)]
                    ).map((filter: string, index: number) => (
                      <Flex sx={styles.alignCenter} key={`${filter}${index}`}>
                        {index > 0 && (
                          <IconCaret
                            direction="right"
                            sx={styles.hitBreadCrumbArrow}
                          />
                        )}
                        <Text sx={styles.hitBreadCrumb}>
                          {filter || hit.doctype}
                        </Text>
                      </Flex>
                    ))
                  ) : (
                    <>
                      <Text sx={styles.hitBreadCrumbIn}>
                        {`${messages[locale]['search_card.in'] || 'In'} ${
                          breadcrumbs[0] || hit.doctype
                        }`}
                      </Text>
                      {breadcrumbs
                        .slice(1)
                        .map((filter: string, index: number) => (
                          <Flex
                            sx={styles.alignCenter}
                            key={`${filter}${index}`}
                          >
                            <IconCaret
                              direction="right"
                              sx={styles.hitBreadCrumbArrow}
                            />
                            <Text sx={styles.hitBreadCrumb}>{filter}</Text>
                          </Flex>
                        ))}
                    </>
                  )}
                </Flex>
              )}
            </Box>
          </Flex>
        </a>
      </Link>
      {!isModal && (
        <Flex className="hit-actions" sx={styles.hitActions}>
          <Box
            as="button"
            type="button"
            sx={copied ? styles.hitActionButtonCopied : styles.hitActionButton}
            aria-label={
              copied
                ? messages[locale]['search_input.copied'] || 'Copied'
                : messages[locale]['search_input.copy_link'] || 'Copy link'
            }
            title={
              copied
                ? messages[locale]['search_input.copied'] || 'Copied'
                : messages[locale]['search_input.copy_link'] || 'Copy link'
            }
            onClick={(event: MouseEvent) =>
              onCopy(event, relativeUrl, hit.objectID)
            }
            onMouseDown={(event: MouseEvent) => event.preventDefault()}
          >
            <CopyIcon size={14} />
          </Box>
          <Box
            as="button"
            type="button"
            sx={styles.hitActionButton}
            aria-label={
              messages[locale]['search_input.open_new_tab'] || 'Open in new tab'
            }
            title={
              messages[locale]['search_input.open_new_tab'] || 'Open in new tab'
            }
            onClick={(event: MouseEvent) => onOpenNewTab(event, relativeUrl)}
            onMouseDown={(event: MouseEvent) => event.preventDefault()}
          >
            <ExternalLinkIcon size={14} />
          </Box>
        </Flex>
      )}
    </Box>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const HitWithInsights = connectHitInsights(aa)(Hit2) as any

const HitsBox = connectStateResults<HitsBoxProps>(
  ({ searchState, searchResults, changeFocus, variant = 'default' }) => {
    const router = useRouter()
    const { locale } = useContext(LibraryContext)
    const [activeIndex, setActiveIndex] = useState(-1)
    const [copiedId, setCopiedId] = useState<string | null>(null)
    const isModal = variant === 'modal'
    const maxHits = isModal ? VISIBLE_HITS_MODAL : VISIBLE_HITS

    const visibleHits = searchResults
      ? searchResults.hits.slice(0, maxHits)
      : []
    const hasSeeAll = Boolean(
      searchResults && searchResults.hits.length > maxHits
    )
    const itemCount = visibleHits.length + (hasSeeAll ? 1 : 0)

    const seeAllSubmit = (keyword: string) => {
      router.push({
        pathname: '/search',
        query: { keyword },
      })
      changeFocus(false)
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const setQueryIDAndPosition = (hit: Hit, index: number): any => {
      return {
        ...hit,
        __queryID: searchResults.queryID || '',
        __position: searchResults.hitsPerPage * searchResults.page + index + 1,
      }
    }

    const handleCopy = async (
      event: MouseEvent,
      url: string,
      objectID: string
    ) => {
      event.preventDefault()
      event.stopPropagation()
      try {
        await navigator.clipboard.writeText(`${window.location.origin}${url}`)
        setCopiedId(objectID)
      } catch {
        setCopiedId(null)
      }
    }

    const handleOpenNewTab = (event: MouseEvent, url: string) => {
      event.preventDefault()
      event.stopPropagation()
      window.open(url, '_blank', 'noopener,noreferrer')
    }

    useEffect(() => {
      setActiveIndex(-1)
    }, [searchState.query])

    useEffect(() => {
      if (!copiedId) return
      const timeout = window.setTimeout(() => setCopiedId(null), 2000)
      return () => window.clearTimeout(timeout)
    }, [copiedId])

    useEffect(() => {
      const activeHit = document.querySelector('[data-active="true"]')
      activeHit?.scrollIntoView({ block: 'nearest' })
    }, [activeIndex])

    useEffect(() => {
      const onKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          changeFocus(false)
          return
        }

        if (!itemCount) return

        if (event.key === 'ArrowDown') {
          event.preventDefault()
          setActiveIndex((current) => (current + 1) % itemCount)
        } else if (event.key === 'ArrowUp') {
          event.preventDefault()
          setActiveIndex((current) =>
            current <= 0 ? itemCount - 1 : current - 1
          )
        } else if (event.key === 'Enter' && activeIndex >= 0) {
          event.preventDefault()
          event.stopPropagation()
          if (hasSeeAll && activeIndex === visibleHits.length) {
            seeAllSubmit(searchState.query || '')
            return
          }
          const hit = visibleHits[activeIndex]
          if (hit) {
            router.push(getRelativeURL(hit.url))
            changeFocus(false)
          }
        }
      }

      window.addEventListener('keydown', onKeyDown, true)
      return () => window.removeEventListener('keydown', onKeyDown, true)
    }, [
      activeIndex,
      changeFocus,
      hasSeeAll,
      itemCount,
      router,
      searchState.query,
      visibleHits,
    ])

    if (isModal && !searchState.query) return null

    return (
      <>
        {searchResults && (
          <Box
            sx={
              isModal
                ? styles.resultsOuterContainerModal
                : styles.resultsOuterContainer
            }
          >
            <Box
              sx={
                isModal
                  ? styles.resultsInnerContainerModal
                  : styles.resultsInnerContainer
              }
            >
              <Box
                sx={
                  searchResults.hits.length &&
                  (isModal ? styles.resultsBoxModal : styles.resultsBox)
                }
              >
                {visibleHits.map((searchResult, index) => (
                  <Box
                    key={searchResult.objectID || `matched-result-${index}`}
                    onClick={() => changeFocus(false)}
                  >
                    <HitWithInsights
                      hit={setQueryIDAndPosition(searchResult, index)}
                      query={searchState.query}
                      isActive={activeIndex === index}
                      copied={copiedId === searchResult.objectID}
                      variant={variant}
                      onCopy={handleCopy}
                      onOpenNewTab={handleOpenNewTab}
                      onMouseEnter={() => setActiveIndex(index)}
                    />
                  </Box>
                ))}
              </Box>
              {searchResults.hits.length > 0 && (
                <Flex
                  sx={
                    isModal
                      ? styles.resultsFooterModal(hasSeeAll)
                      : styles.resultsFooter(hasSeeAll)
                  }
                >
                  {!isModal && (
                    <Flex sx={styles.keyboardHints}>
                      <Flex sx={styles.keyboardHint}>
                        <Text as="span" sx={styles.kbd}>
                          ↑
                        </Text>
                        <Text as="span" sx={styles.kbd}>
                          ↓
                        </Text>
                        <Text>
                          {messages[locale]['search_input.navigate'] ||
                            'Navigate'}
                        </Text>
                      </Flex>
                      <Flex sx={styles.keyboardHint}>
                        <Text as="span" sx={styles.kbd}>
                          ↵
                        </Text>
                        <Text>
                          {messages[locale]['search_input.open'] || 'Open'}
                        </Text>
                      </Flex>
                      <Flex sx={styles.keyboardHint}>
                        <Text as="span" sx={styles.kbd}>
                          esc
                        </Text>
                        <Text>
                          {messages[locale]['search_input.close'] || 'Close'}
                        </Text>
                      </Flex>
                    </Flex>
                  )}
                  {hasSeeAll && (
                    <Box
                      sx={styles.seeAll}
                      data-active={String(activeIndex === visibleHits.length)}
                      onMouseEnter={() => setActiveIndex(visibleHits.length)}
                      onClick={() => seeAllSubmit(searchState.query || '')}
                    >
                      <Text>
                        {messages[locale]['search_input.see_all'] ||
                          'See all results'}
                      </Text>
                      <IconCaret direction="right" sx={styles.seeAllCaret} />
                    </Box>
                  )}
                </Flex>
              )}
              {!searchResults.hits.length && (
                <Flex sx={styles.noResults}>
                  <Text>
                    {messages[locale]['search_input.empty'] ||
                      'No results found. Try different search terms.'}
                  </Text>
                </Flex>
              )}
            </Box>
          </Box>
        )}
      </>
    )
  }
)

export default HitsBox
