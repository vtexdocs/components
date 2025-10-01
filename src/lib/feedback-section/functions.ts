import { SxStyleProp } from '@vtex/brand-ui'
import { ModalProps } from 'components/feedback-modal'
import styles from './styles'

export const setButtonStyle = (
  feedback: boolean | undefined,
  modalState: ModalProps,
  like: boolean
): SxStyleProp => {
  const buttonactive =
    modalState.modalOpen && like === modalState.liked
      ? styles.buttonActive
      : styles.button
  if (feedback === undefined) return { ...styles.box, ...buttonactive }
  if (like === feedback) return { ...styles.box, ...styles.selectedButton }
  return { display: 'none !important' }
}
