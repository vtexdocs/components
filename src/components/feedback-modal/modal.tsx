import { useEffect, useState, type MouseEvent, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { Box, Flex, Text } from '@vtex/brand-ui'
import CloseIcon from 'components/icons/close-icon'
import styles from './styles'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description?: string
  closeLabel: string
  children: ReactNode
}

const Modal = ({
  isOpen,
  onClose,
  title,
  description,
  closeLabel,
  children,
}: ModalProps) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const html = document.documentElement
    const previousOverflow = html.style.overflow
    html.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      html.style.overflow = previousOverflow
    }
  }, [isOpen, onClose])

  if (!isOpen || !mounted) return null

  return createPortal(
    <Box
      sx={styles.wrapContainer}
      onClick={onClose}
      className="modal"
      data-open="true"
      data-cy="feedback-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="feedback-modal-title"
      aria-describedby={description ? 'feedback-modal-description' : undefined}
    >
      <Box
        sx={styles.innerContainer}
        onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        <Box sx={styles.header}>
          <Flex sx={styles.headerTop}>
            <Text id="feedback-modal-title" sx={styles.modalTitle}>
              {title}
            </Text>
            <Box
              as="button"
              type="button"
              onClick={onClose}
              sx={styles.modalButton}
              aria-label={closeLabel}
            >
              <CloseIcon sx={{ width: '16px', height: '16px' }} />
            </Box>
          </Flex>
          {description ? (
            <Text id="feedback-modal-description" sx={styles.modalDescription}>
              {description}
            </Text>
          ) : null}
        </Box>

        <Box sx={styles.body}>{children}</Box>
      </Box>
    </Box>,
    document.body
  )
}

export default Modal
