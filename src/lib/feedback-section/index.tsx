import { Flex, Text, Link } from '@vtex/brand-ui'
import EditIcon from 'components/icons/edit-icon'
import LikeIcon from 'components/icons/like-icon'
import LikeSelectedIcon from 'components/icons/like-selected-icon'
import { useContext, useEffect, useRef, useState } from 'react'
import styles from './styles'
import { LibraryContext } from 'utils/context/libraryContext'
import { messages } from 'utils/get-message'
import ShareButton from 'components/share-button'

export interface DocPath {
  /** Slug that corresponds to the current page. */
  slug?: string
  /** Github edit URL to the corresponding documentation file. */
  urlToEdit?: string
  /** Whether is possible for the user to suggest edits or not. */
  suggestEdits?: boolean
  /** Include or not a share button. */
  shareButton?: boolean
  /** Executes when the user sends the feedback. Receives whether it was positive (liked). */
  sendFeedback: (liked: boolean) => Promise<void>
  /** Whether to render the small version of the component or not. */
  small?: boolean
}

const FeedbackSection = ({
  slug,
  urlToEdit,
  suggestEdits = true,
  shareButton = false,
  sendFeedback,
  small = false,
}: DocPath) => {
  const [feedback, setFeedback] = useState<boolean | undefined>(undefined)
  const { locale } = useContext(LibraryContext)

  // Reset feedback selection whenever the page (slug) changes
  useEffect(() => {
    setFeedback(undefined)
  }, [slug])

  const handleSend = async (liked: boolean) => {
    if (feedback !== undefined) return
    setFeedback(liked)
    try {
      await sendFeedback(liked)
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
          {/* LIKE */}
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

          {/* DISLIKE */}
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
