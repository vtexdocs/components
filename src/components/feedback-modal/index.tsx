import { FormEvent, useContext, useEffect, useState } from 'react'
import { Box, Flex, Text } from '@vtex/brand-ui'
import { LibraryContext } from 'utils/context/libraryContext'
import { messages } from 'utils/get-message'
import CheckIcon from 'components/icons/check-icon'
import CommentIcon from 'components/icons/comment-icon'
import WarningIcon from 'components/icons/warning-icon'
import Modal from './modal'
import styles from './styles'

const DEFAULT_FEEDBACK_ENDPOINT = '/api/feedback-google'

const FEEDBACK_TYPES = [
  {
    value: 'Incorrect information',
    labelKey: 'feedback_modal.type.incorrect',
  },
  {
    value: 'Page not found',
    labelKey: 'feedback_modal.type.page_not_found',
  },
  {
    value: 'Content improvement',
    labelKey: 'feedback_modal.type.content_improvement',
  },
  {
    value: 'New documentation',
    labelKey: 'feedback_modal.type.new_documentation',
  },
  {
    value: 'Other documentation feedback',
    labelKey: 'feedback_modal.type.other',
  },
] as const

export type FeedbackModalPayload = {
  name: string
  email: string
  type: string
  feedback: string
  url: string
}

export interface FeedbackModalProps {
  /**
   * Canonical page URL prefilled in the Article field.
   * Defaults to `window.location.href` so Help Center and Developer Portal
   * both record the page the user is on.
   */
  pageUrl?: string
  /**
   * @deprecated Use `pageUrl`.
   */
  initialMessage?: string
  /** Endpoint that receives the form payload. Defaults to `/api/feedback-google`. */
  feedbackEndpoint?: string
  /** Override the default POST. */
  sendFeedback?: (payload: FeedbackModalPayload) => Promise<void>
  /** Open the modal on first render. Useful for Storybook. */
  defaultOpen?: boolean
}

const postFeedback = async (
  payload: FeedbackModalPayload,
  endpoint: string
) => {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!res.ok) {
    const data = await res.json().catch(() => ({}))
    throw new Error(data?.error || 'Failed to send feedback. Try again')
  }
}

const FeedbackModal = ({
  pageUrl,
  initialMessage,
  feedbackEndpoint = DEFAULT_FEEDBACK_ENDPOINT,
  sendFeedback,
  defaultOpen = false,
}: FeedbackModalProps) => {
  const { locale } = useContext(LibraryContext)
  const localizedMessages = messages[locale] ?? messages.en
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(false)

  const handleClose = () => setIsOpen(false)

  const articleUrl =
    pageUrl ||
    initialMessage ||
    (typeof window !== 'undefined' ? window.location.href : '')

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false)
      setSubmitting(false)
      setError(false)
    }
  }, [isOpen])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitting(true)
    setError(false)

    const form = event.currentTarget
    const formData = new FormData(form)
    const payload: FeedbackModalPayload = {
      name: String(formData.get('name') || ''),
      email: String(formData.get('email') || ''),
      type: String(formData.get('type') || 'Other documentation feedback'),
      url: String(formData.get('url') || ''),
      feedback: String(formData.get('feedback') || ''),
    }

    try {
      if (sendFeedback) {
        await sendFeedback(payload)
      } else {
        await postFeedback(payload, feedbackEndpoint)
      }
      form.reset()
      setSubmitted(true)
    } catch {
      setError(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Box sx={styles.triggerWrap}>
      <Box
        as="button"
        type="button"
        onClick={() => setIsOpen(true)}
        sx={styles.triggerButton}
      >
        <CommentIcon size={14} />
        <Text>{localizedMessages['feedback_modal.button']}</Text>
      </Box>
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        title={localizedMessages['feedback_modal.title']}
        description={
          submitted
            ? undefined
            : localizedMessages['feedback_modal.description']
        }
        closeLabel={localizedMessages['feedback_modal.close']}
      >
        {submitted ? (
          <Flex sx={styles.successState} role="status">
            <Flex sx={styles.successIconWrap} aria-hidden="true">
              <CheckIcon size={22} />
            </Flex>
            <Text sx={styles.successTitle}>
              {localizedMessages['feedback_modal.success']}
            </Text>
            <Box
              as="button"
              type="button"
              onClick={handleClose}
              sx={styles.submitButton}
            >
              {localizedMessages['feedback_modal.done']}
            </Box>
          </Flex>
        ) : (
          <Box as="form" onSubmit={handleSubmit}>
            <Box sx={styles.form}>
              {error ? (
                <Flex role="alert" sx={styles.feedbackErrorText}>
                  <WarningIcon sx={styles.errorIcon} />
                  {localizedMessages['feedback_modal.error']}
                </Flex>
              ) : null}

            <Box sx={styles.field}>
              <Text as="label" htmlFor="feedback-modal-url" sx={styles.label}>
                {localizedMessages['feedback_modal.article']}
              </Text>
              <Box
                as="input"
                id="feedback-modal-url"
                name="url"
                defaultValue={articleUrl}
                sx={styles.inputMuted}
              />
            </Box>

            <Box sx={styles.field}>
              <Text
                as="label"
                htmlFor="feedback-modal-message"
                sx={styles.label}
              >
                {localizedMessages['feedback_modal.message']}{' '}
                <Box as="span" sx={styles.requiredMark}>
                  *
                </Box>
              </Text>
              <Box
                as="textarea"
                id="feedback-modal-message"
                name="feedback"
                aria-required="true"
                required
                rows={5}
                placeholder={
                  localizedMessages['feedback_modal.message_placeholder']
                }
                sx={styles.textarea}
              />
            </Box>

            <Box sx={styles.field}>
              <Text as="label" htmlFor="feedback-modal-type" sx={styles.label}>
                {localizedMessages['feedback_modal.type']}
              </Text>
              <Box
                as="select"
                id="feedback-modal-type"
                name="type"
                sx={styles.dropdownMenu}
              >
                {FEEDBACK_TYPES.map((type) => (
                  <option key={type.value} value={type.value}>
                    {localizedMessages[type.labelKey]}
                  </option>
                ))}
              </Box>
            </Box>

            <Box sx={styles.row}>
              <Box sx={styles.field}>
                <Text
                  as="label"
                  htmlFor="feedback-modal-name"
                  sx={styles.label}
                >
                  {localizedMessages['feedback_modal.name']}
                </Text>
                <Box
                  as="input"
                  id="feedback-modal-name"
                  name="name"
                  type="text"
                  placeholder={
                    localizedMessages['feedback_modal.name_placeholder']
                  }
                  sx={styles.input}
                />
              </Box>

              <Box sx={styles.field}>
                <Text
                  as="label"
                  htmlFor="feedback-modal-email"
                  sx={styles.label}
                >
                  {localizedMessages['feedback_modal.email']}
                </Text>
                <Box
                  as="input"
                  id="feedback-modal-email"
                  name="email"
                  type="email"
                  placeholder={
                    localizedMessages['feedback_modal.email_placeholder']
                  }
                  sx={styles.input}
                />
              </Box>
            </Box>

            <Box sx={styles.actions}>
              <Box
                as="button"
                type="button"
                onClick={handleClose}
                sx={styles.cancelButton}
              >
                {localizedMessages['feedback_modal.cancel']}
              </Box>
              <Box
                as="button"
                type="submit"
                sx={styles.submitButton}
                disabled={submitting}
              >
                {submitting
                  ? localizedMessages['feedback_modal.submitting']
                  : localizedMessages['feedback_modal.submit']}
              </Box>
            </Box>
            </Box>
          </Box>
        )}
      </Modal>
    </Box>
  )
}

export default FeedbackModal
