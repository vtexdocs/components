import { Flex, Text, Link } from '@vtex/brand-ui'
import EditIcon from 'components/icons/edit-icon'
import LikeIcon from 'components/icons/like-icon'
import LikeSelectedIcon from 'components/icons/like-selected-icon'
import { useContext, useEffect, useState } from 'react'
import styles from './styles'
import { LibraryContext } from 'utils/context/libraryContext'
import { messages } from 'utils/get-message'
import ShareButton from 'components/share-button'

const DEFAULT_FEEDBACK_ENDPOINT = '/api/feedback/'

export interface FeedbackSectionProps {
  /** Slug that corresponds to the current page. */
  slug?: string
  /** Github edit URL to the corresponding documentation file. */
  urlToEdit?: string
  /** Whether is possible for the user to suggest edits or not. */
  suggestEdits?: boolean
  /** Include or not a share button. */
  shareButton?: boolean
  /**
   * Canonical page URL stored with the vote.
   * Defaults to `window.location.href` so Help Center and Developer Portal
   * both record the page the user is on.
   */
  pageUrl?: string
  /** Endpoint that receives the like/dislike payload. Defaults to `/api/feedback/`. */
  feedbackEndpoint?: string
  /** Override the default POST. Receives whether the vote was positive (liked). */
  sendFeedback?: (liked: boolean) => Promise<void>
  /** Whether to render the small version of the component or not. */
  small?: boolean
}

/** @deprecated Use FeedbackSectionProps */
export type DocPath = FeedbackSectionProps

const postFeedback = async (
  liked: boolean,
  pageUrl: string,
  endpoint: string
) => {
  await fetch(endpoint, {
    method: 'POST',
    body: JSON.stringify({
      data: [
        new Date().toISOString(),
        pageUrl,
        liked ? 'positive' : 'negative',
      ],
    }),
  })
}

const FeedbackSection = ({
  slug,
  urlToEdit,
  suggestEdits = true,
  shareButton = false,
  pageUrl,
  feedbackEndpoint = DEFAULT_FEEDBACK_ENDPOINT,
  sendFeedback,
  small = false,
}: FeedbackSectionProps) => {
  const [feedback, setFeedback] = useState<boolean | undefined>(undefined)
  const { locale } = useContext(LibraryContext)

  useEffect(() => {
    setFeedback(undefined)
  }, [slug])

  const handleSend = async (liked: boolean) => {
    if (feedback !== undefined) return
    setFeedback(liked)
    const resolvedPageUrl =
      pageUrl ?? (typeof window !== 'undefined' ? window.location.href : '')
    try {
      if (sendFeedback) {
        await sendFeedback(liked)
      } else {
        await postFeedback(liked, resolvedPageUrl, feedbackEndpoint)
      }
    } catch (e) {
      setFeedback(undefined)
    }
  }

  return (
    <Flex sx={styles.container({ small })} data-cy="feedback-section">
      <Flex sx={styles.likeContainer}>
        <Text sx={styles.question({ small })}>
          {feedback !== undefined
            ? messages[locale]['feedback_section.response']
            : messages[locale]['feedback_section.question']}
        </Text>

        <Flex sx={styles.iconsContainer({ small })}>
          <Flex
            sx={
              feedback === undefined
                ? styles.button
                : feedback === true
                ? styles.selectedButton
                : styles.disabled
            }
            onClick={() => handleSend(true)}
            role="button"
            aria-pressed={feedback === true}
            data-cy="feedback-section-like"
          >
            {feedback === true ? (
              <LikeSelectedIcon size={small ? 18 : 24} sx={styles.likeIcon} />
            ) : (
              <LikeIcon size={small ? 18 : 24} sx={styles.likeIcon} />
            )}
            {!small && (
              <Text>{messages[locale]['feedback_section.positive']}</Text>
            )}
          </Flex>

          <Flex
            sx={
              feedback === undefined
                ? styles.button
                : feedback === false
                ? styles.selectedButton
                : styles.disabled
            }
            onClick={() => handleSend(false)}
            role="button"
            aria-pressed={feedback === false}
            data-cy="feedback-section-dislike"
          >
            {feedback === false ? (
              <LikeSelectedIcon
                size={small ? 18 : 24}
                sx={styles.dislikeIcon}
              />
            ) : (
              <LikeIcon size={small ? 18 : 24} sx={styles.dislikeIcon} />
            )}
            {!small && (
              <Text>{messages[locale]['feedback_section.negative']}</Text>
            )}
          </Flex>
        </Flex>
      </Flex>
      {suggestEdits && (
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={urlToEdit}
          sx={styles.editContainer({ small })}
        >
          <EditIcon size={small ? 18 : 24} sx={styles.editIcon} />
          <Text>{messages[locale]['feedback_section.edit']}</Text>
        </Link>
      )}
      {shareButton && (
        <ShareButton url={window.location.href} sx={styles.shareButton} />
      )}
    </Flex>
  )
}

export default FeedbackSection
