import { Flex, Text, Link } from '@vtex/brand-ui'
import EditIcon from 'components/icons/edit-icon'
import LikeIcon from 'components/icons/like-icon'
import LikeSelectedIcon from 'components/icons/like-selected-icon'
import { useContext, useRef, useState } from 'react'
import { setButtonStyle } from './functions'
import FeedbackModal, { ModalProps } from 'components/feedback-modal'

import styles from './styles'
import { LibraryContext } from 'utils/context/libraryContext'
import { messages } from 'utils/get-message'
import ShareButton from 'components/share-button'

export interface DocPath {
  /** Slug that corresponds to the current page. */
  slug?: string
  /** Github edit URL to the correspoding documentation file. */
  urlToEdit?: string
  /** Whether is possible for the user to suggest edits or not. */
  suggestEdits?: boolean
  /** Include or not a share button. */
  shareButton?: boolean
  /** Function that executes when the user sends the feedback. The function receives the user comment and whether it was a positive (liked = true) or negative feedback. */
  sendFeedback: (comment: string, liked: boolean) => Promise<void>
}

/** Component that can be used on each documentation page, so the user can give feedback of whether or not it has helpful. When liked or disliked it opens a modal with a field to add a comment and send feedback. */
const FeedbackSection = ({
  slug,
  urlToEdit,
  suggestEdits = true,
  shareButton = false,
  sendFeedback,
}: DocPath) => {
  const [feedback, changeFeedback] = useState<boolean | undefined>(undefined)
  const [prevSlug, setPrevSlug] = useState(slug)
  const [modalState, changeModalState] = useState<ModalProps>({
    modalOpen: false,
  })
  const likeButton = useRef<HTMLElement>()
  const dislikeButton = useRef<HTMLElement>()
  const { locale } = useContext(LibraryContext)

  if (slug !== prevSlug) {
    setPrevSlug(slug)
    changeModalState({ modalOpen: false })
    changeFeedback(undefined)
  }

  const openModal = (choice: boolean) => {
    changeModalState({
      modalOpen: true,
      liked: choice,
    })
  }

  return (
    <Flex sx={styles.container} data-cy="feedback-section">
      <Text sx={styles.question}>
        {feedback !== undefined
          ? messages[locale]['feedback_section.response']
          : messages[locale]['feedback_section.question']}
      </Text>
      <Flex sx={styles.likeContainer}>
        <Flex
          ref={likeButton}
          sx={setButtonStyle(feedback, modalState, true)}
          onClick={feedback === undefined ? () => openModal(true) : null}
          data-cy="feedback-section-like"
        >
          {feedback === undefined || !feedback ? (
            <LikeIcon size={24} sx={styles.likeIcon} />
          ) : (
            <LikeSelectedIcon size={24} sx={styles.likeIcon} />
          )}
          <Text>{messages[locale]['feedback_section.positive']}</Text>
        </Flex>
        <Flex
          ref={dislikeButton}
          sx={setButtonStyle(feedback, modalState, false)}
          onClick={feedback === undefined ? () => openModal(false) : null}
        >
          {feedback === undefined || feedback ? (
            <LikeIcon size={24} sx={styles.dislikeIcon} />
          ) : (
            <LikeSelectedIcon size={24} sx={styles.dislikeIcon} />
          )}
          <Text>{messages[locale]['feedback_section.negative']}</Text>
        </Flex>
      </Flex>
      {suggestEdits && (
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={urlToEdit}
          sx={styles.editContainer}
        >
          <EditIcon size={24} sx={styles.editIcon} />
          <Text>{messages[locale]['feedback_section.edit']}</Text>
        </Link>
      )}
      {shareButton && (
        <ShareButton url={window.location.href} sx={styles.shareButton} />
      )}
      {modalState.modalOpen ? (
        <FeedbackModal
          changeFeedBack={changeFeedback}
          changeModalState={changeModalState}
          modalState={modalState}
          chosenButtonRef={modalState.liked ? likeButton : dislikeButton}
          onSubmit={(comment) =>
            sendFeedback(comment, modalState.liked ?? false)
          }
        />
      ) : null}
    </Flex>
  )
}

export default FeedbackSection
