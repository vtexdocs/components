import { SxStyleProp, Text } from '@vtex/brand-ui'

import styles from './styles'

export type TagColor =
  | 'Default'
  | 'Selected'
  | 'New'
  | 'Gray'
  | 'Blue'
  | 'Green'
  | 'Deprecation'
  | 'Backlog'
  | 'Fixed'
  | 'Closed'
  | 'Scheduled'
  | 'No_Fix'

export type TagProps = {
  sx?: SxStyleProp
  children: React.ReactNode
  color?: TagColor
  onClick?: () => void
}

const Tag = ({ sx = {}, children, color = 'Default', onClick }: TagProps) => {
  return (
    <Text
      sx={{ ...styles.tag, ...sx, ...styles.statusColors[color] }}
      onClick={onClick}
    >
      {children}
    </Text>
  )
}

export default Tag
