import { Box, Flex, Text, IconCaret, Tooltip } from '@vtex/brand-ui'
import { useContext, useEffect, useState, MouseEvent } from 'react'
import { useRouter } from 'next/router.js'
import Link from 'next/link.js'
import { Hit } from 'react-instantsearch-core'

import styles from './styles'
import CustomHighlight, {
  HighlightQuery,
} from 'components/search-input/customHighlight'
import { LibraryContext } from 'utils/context/libraryContext'
import { messages } from 'utils/get-message'
import ExpandedResultsIcon from 'components/icons/expanded-results-icon'
import CopyIcon from 'components/icons/copy-icon'
import ExternalLinkIcon from 'components/icons/external-link-icon'
import PaperIcon from 'components/icons/paper-icon'
import MethodCategory from 'components/method-category'
import { IconComponent, MethodType } from 'utils/typings/types'
import { ActionType, getAction } from 'utils/search-utils'

export type FilteredHit = Hit & { filteredMatches?: Hit[] }
interface SearchCardProps {
  doc: string
  title: string
  breadcrumbs?: string[]
  method?: MethodType
  actionType?: ActionType
  Icon?: IconComponent
  url: string
  hit: FilteredHit
}

const SearchCard = ({
  Icon,
  title,
  method,
  breadcrumbs,
  actionType,
  url,
  hit,
}: SearchCardProps) => {
  const actionValue = actionType ? getAction(actionType) : null
  const [toggleChildResults, setToggleChildResults] = useState<boolean>(false)
  const [copied, setCopied] = useState(false)
  const { locale } = useContext(LibraryContext)
  const router = useRouter()
  const query = String(router.query.keyword ?? '')
  const DocIcon = Icon || PaperIcon
  const displayTitle =
    title === 'overview' && hit.doccategory
      ? `${hit.doccategory} ${title}`
      : title
  const crumbs = (breadcrumbs || []).filter(
    (crumb): crumb is string => Boolean(crumb)
  )

  useEffect(() => {
    if (!copied) return
    const timeout = window.setTimeout(() => setCopied(false), 2000)
    return () => window.clearTimeout(timeout)
  }, [copied])

  const handleCopy = async (event: MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()
    try {
      await navigator.clipboard.writeText(`${window.location.origin}${url}`)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  const handleOpenNewTab = (event: MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <Flex sx={styles.containerActive(method)}>
      <Link href={url} legacyBehavior>
        <a>
          <Flex sx={styles.cardBody}>
            <Box className="search-card-icon-wrap" sx={styles.iconWrap}>
              <DocIcon className="search-card-icon" sx={styles.icon} />
            </Box>
            <Box sx={styles.cardText}>
              <Text className="searchCardTitle" sx={styles.title}>
                {method ? (
                  <MethodCategory
                    sx={styles.httpMethod}
                    origin="search"
                    method={method}
                    active={false}
                  />
                ) : null}
                <Text as="span" sx={styles.titleText}>
                  <HighlightQuery text={displayTitle} query={query} />
                </Text>
              </Text>
              <Text className="searchCardDescription" sx={styles.description}>
                <CustomHighlight
                  hit={hit}
                  attribute="content"
                  {...{ searchPage: true }}
                />
                {toggleChildResults &&
                  hit.filteredMatches?.map((childHit, index: number) => (
                    <Box
                      sx={styles.descriptionExpandedItem}
                      key={`search-card-${hit.objectID}-${index}`}
                    >
                      <CustomHighlight
                        hit={childHit}
                        attribute="content"
                        {...{ searchPage: true }}
                      />
                    </Box>
                  ))}
              </Text>
              {crumbs.length > 0 ? (
                <Box sx={styles.breadcrumbsContainer}>
                  <Text sx={styles.breadcrumbsIn}>
                    {messages[locale]['search_card.in'] || 'In'}
                  </Text>
                  {crumbs.map((breadcrumb, index) => (
                    <Flex
                      sx={
                        index === 0 ? styles.documentation : styles.alignCenter
                      }
                      key={`${breadcrumb}${index}`}
                    >
                      <Tooltip label={breadcrumb} placement="top">
                        <Text sx={styles.breadcrumb}>{breadcrumb}</Text>
                      </Tooltip>
                      {index < crumbs.length - 1 ? (
                        <IconCaret
                          direction="right"
                          sx={styles.breadcrumbsArrow}
                        />
                      ) : null}
                    </Flex>
                  ))}
                </Box>
              ) : null}
              {actionValue ? (
                <Flex sx={styles.actionContainer}>
                  <actionValue.Icon sx={styles.actionIcon} />{' '}
                  <Text>{actionValue?.title}</Text>
                </Flex>
              ) : null}
            </Box>
          </Flex>
        </a>
      </Link>
      <Flex sx={styles.cardToolbar}>
        <Flex className="search-card-actions" sx={styles.cardActions}>
          <Box
            as="button"
            type="button"
            sx={copied ? styles.actionButtonCopied : styles.actionButton}
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
            onClick={handleCopy}
            onMouseDown={(event: MouseEvent) => event.preventDefault()}
          >
            <CopyIcon size={14} />
          </Box>
          <Box
            as="button"
            type="button"
            sx={styles.actionButton}
            aria-label={
              messages[locale]['search_input.open_new_tab'] || 'Open in new tab'
            }
            title={
              messages[locale]['search_input.open_new_tab'] || 'Open in new tab'
            }
            onClick={handleOpenNewTab}
            onMouseDown={(event: MouseEvent) => event.preventDefault()}
          >
            <ExternalLinkIcon size={14} />
          </Box>
        </Flex>
        {hit.filteredMatches && hit.filteredMatches.length > 0 && (
          <Box
            sx={styles.descriptionToggle}
            onClick={(event: Event) => {
              setToggleChildResults(!toggleChildResults)
              event.stopPropagation()
            }}
          >
            <ExpandedResultsIcon active={toggleChildResults} />
          </Box>
        )}
      </Flex>
    </Flex>
  )
}

export default SearchCard
