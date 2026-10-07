import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import { Box, Flex, Text } from '@vtex/brand-ui'
import LikeIcon from 'components/icons/like-icon'
import LikeSelectedIcon from 'components/icons/like-selected-icon'
import CheckIcon from 'components/icons/check-icon'
import WarningIcon from 'components/icons/warning-icon'
import styles from './styles'
import { useLocale } from 'utils/context/libraryContext'
import { messages } from 'utils/get-message'
import ShareButton from 'components/share-button'
import SuggestEdits from 'components/suggest-edits'

const DEFAULT_FEEDBACK_ENDPOINT = '/api/feedback/'
const DEFAULT_DETAILED_FEEDBACK_ENDPOINT = '/api/feedback/'

export type DetailedFeedbackPayload = {
  /** 'positive' | 'negative', matching the original vote. */
  type: string
  /** Optional free-text comment left by the user. */
  feedback: string
  /** Optional email left by the user for a follow-up. */
  email: string
  url: string
}

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
  /**
   * Whether to show the inline follow-up panel (optional comment + email)
   * right after the user votes. Defaults to `true`.
   */
  collectDetailedFeedback?: boolean
  /**
   * Endpoint that receives the detailed follow-up payload (comment + email).
   * Appends a second row to the same spreadsheet as the vote.
   * Defaults to `/api/feedback/`.
   */
  detailedFeedbackEndpoint?: string
  /** Override the default POST for the detailed follow-up. */
  sendDetailedFeedback?: (payload: DetailedFeedbackPayload) => Promise<void>
  /** Force the initial state of the follow-up panel. Useful for Storybook. */
  defaultPanelStage?: PanelStage
}

/** @deprecated Use FeedbackSectionProps */
export type DocPath = FeedbackSectionProps

type PanelStage = 'closed' | 'open' | 'submitted' | 'error'

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

const postDetailedFeedback = async (
  payload: DetailedFeedbackPayload,
  endpoint: string
) => {
  // Appends a second, independent row to the same spreadsheet used for the
  // vote, keeping the same column convention: timestamp, url, sentiment,
  // plus the optional comment and email in the following columns.
  const res = await fetch(endpoint, {
    method: 'POST',
    body: JSON.stringify({
      data: [
        new Date().toISOString(),
        payload.url,
        payload.type,
        payload.feedback,
        payload.email,
      ],
    }),
  })
  if (!res.ok) {
    throw new Error('Failed to send detailed feedback')
  }
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
  collectDetailedFeedback = true,
  detailedFeedbackEndpoint = DEFAULT_DETAILED_FEEDBACK_ENDPOINT,
  sendDetailedFeedback,
  defaultPanelStage = 'closed',
}: FeedbackSectionProps) => {
  const [feedback, setFeedback] = useState<boolean | undefined>(undefined)
  const [panelStage, setPanelStage] = useState<PanelStage>(defaultPanelStage)
  const [comment, setComment] = useState('')
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  const locale = useLocale()

  useEffect(() => {
    setFeedback(undefined)
    setPanelStage('closed')
    setComment('')
    setEmail('')
  }, [slug])

  useEffect(() => {
    if (panelStage === 'open') {
      textareaRef.current?.focus()
    }
  }, [panelStage])

  const resolvedPageUrl =
    pageUrl ?? (typeof window !== 'undefined' ? window.location.href : '')

  const handleSend = async (liked: boolean) => {
    if (feedback !== undefined) return
    setFeedback(liked)
    if (collectDetailedFeedback) {
      setPanelStage('open')
    }

    try {
      if (sendFeedback) {
        await sendFeedback(liked)
      } else {
        await postFeedback(liked, resolvedPageUrl, feedbackEndpoint)
      }
    } catch (e) {
      setFeedback(undefined)
      setPanelStage('closed')
      return
    }
  }

  const handleSkip = () => {
    setPanelStage('closed')
  }

  const handleSubmitDetails = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!comment.trim() && !email.trim()) {
      setPanelStage('closed')
      return
    }

    setSubmitting(true)
    const payload: DetailedFeedbackPayload = {
      type: feedback === true ? 'positive' : 'negative',
      feedback: comment.trim(),
      email: email.trim(),
      url: resolvedPageUrl,
    }

    try {
      if (sendDetailedFeedback) {
        await sendDetailedFeedback(payload)
      } else {
        await postDetailedFeedback(payload, detailedFeedbackEndpoint)
      }
      setPanelStage('submitted')
    } catch (e) {
      setPanelStage('error')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Flex sx={styles.wrapper({ small })}>
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
        {suggestEdits && urlToEdit && (
          <SuggestEdits urlToEdit={urlToEdit} small={small} />
        )}
        {shareButton && (
          <ShareButton url={window.location.href} sx={styles.shareButton} />
        )}
      </Flex>

      {collectDetailedFeedback && panelStage !== 'closed' && (
        <Box
          sx={styles.panel({ small })}
          aria-live="polite"
          data-cy="feedback-section-panel"
        >
          {panelStage === 'submitted' ? (
            <Flex sx={styles.panelSuccess} role="status">
              <CheckIcon size={16} sx={styles.panelSuccessIcon} />
              <Text sx={styles.panelSuccessText}>
                {messages[locale]['feedback_section.followup_success']}
              </Text>
            </Flex>
          ) : (
            <Box as="form" sx={styles.panelForm} onSubmit={handleSubmitDetails}>
              {panelStage === 'error' && (
                <Flex role="alert" sx={styles.panelErrorText}>
                  <WarningIcon sx={styles.panelErrorIcon} />
                  {messages[locale]['feedback_section.followup_error']}
                </Flex>
              )}
              <Box
                as="textarea"
                ref={textareaRef}
                value={comment}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  setComment(e.target.value)
                }
                rows={small ? 3 : 4}
                placeholder={
                  messages[locale]['feedback_section.followup_placeholder']
                }
                sx={styles.panelTextarea}
                data-cy="feedback-section-followup-textarea"
              />
              <Box
                as="input"
                type="email"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                placeholder={
                  messages[locale][
                    'feedback_section.followup_email_placeholder'
                  ]
                }
                sx={styles.panelEmailInput}
                data-cy="feedback-section-followup-email"
              />
              <Flex sx={styles.panelActions}>
                <Box
                  as="button"
                  type="button"
                  onClick={handleSkip}
                  sx={styles.panelSkipButton}
                  data-cy="feedback-section-followup-skip"
                >
                  {messages[locale]['feedback_section.followup_skip']}
                </Box>
                <Box
                  as="button"
                  type="submit"
                  disabled={submitting}
                  sx={styles.panelSendButton}
                  data-cy="feedback-section-followup-send"
                >
                  {messages[locale]['feedback_section.followup_send']}
                </Box>
              </Flex>
            </Box>
          )}
        </Box>
      )}
    </Flex>
  )
}

export default FeedbackSection
