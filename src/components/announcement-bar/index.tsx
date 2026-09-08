import { useEffect, useState, type ReactNode } from 'react'
import { Box, Button, Text, Link, Icon } from '@vtex/brand-ui'
import type { IconProps } from '@vtex/brand-ui'
import styles from './styles'

export type AnnouncementBarType = 'warning' | 'new'

export type AnnouncementBarAction = {
  href: string
  tag?: string
  button?: string
  target?: string
}

export type AnnouncementBarProps = {
  type: AnnouncementBarType
  label?: string
  closable: boolean
  action: AnnouncementBarAction
  children?: ReactNode
}

const CloseIcon = (props: IconProps) => (
  <Icon {...props}>
    <path
      d="M8 8L16 16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 8L8 16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
)

const AnnouncementBar = ({
  closable,
  type,
  action: { tag, button, href, target = '_blank' },
  label,
  children,
}: AnnouncementBarProps) => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (!closable || !visible) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setVisible(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [closable, visible])

  if (!visible) return null

  return (
    <Box sx={styles.container(type)} role="status" aria-label="Announcement">
      <Box sx={styles.box}>
        {tag && <Text sx={styles.label(type)}>{tag}</Text>}
        {children ? <Text sx={styles.text}>{children}</Text> : null}
        {label ? <Text sx={styles.text}>{label}</Text> : null}
        {button && (
          <Link sx={styles.button(type)} target={target} href={href}>
            {button}
          </Link>
        )}
      </Box>
      {closable && (
        <Box>
          <Button
            aria-label="Close Announcement Bar"
            sx={styles.closeIcon}
            variant="tertiary"
            size="small"
            onClick={(event) => {
              event.stopPropagation()
              setVisible(false)
            }}
            icon={() => <CloseIcon />}
          />
        </Box>
      )}
    </Box>
  )
}

export default AnnouncementBar
