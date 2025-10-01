import { Button } from '@vtex/brand-ui'
import Tooltip from 'components/tooltip'
import CopyIcon from '../icons/copy-icon'
import { useState } from 'react'
import styles from './styles'

export default function CopyLinkButton() {
  const [tooltipText, setTooltipText] = useState('Copy')

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href)
    setTooltipText('Copy')

    setTimeout(() => {
      setTooltipText('Copied!')
    }, 2000)
  }

  return (
    <Tooltip label={tooltipText} placement="bottom">
      <Button onClick={handleCopy} sx={styles.copyLinkButton}>
        <CopyIcon sx={styles.copyIcon} size={16} />
      </Button>
    </Tooltip>
  )
}
