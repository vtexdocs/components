import { useContext } from 'react'
import { Link, Text } from '@vtex/brand-ui'
import type { SxStyleProp } from '@vtex/brand-ui'

import EditIcon from 'components/icons/edit-icon'
import { LibraryContext } from 'utils/context/libraryContext'
import { messages } from 'utils/get-message'
import styles from './styles'

export type SuggestEditsProps = {
  /** GitHub edit URL for the current documentation file. */
  urlToEdit: string
  /** Compact size used next to the table of contents. */
  small?: boolean
  sx?: SxStyleProp
}

const SuggestEdits = ({
  urlToEdit,
  small = false,
  sx = {},
}: SuggestEditsProps) => {
  const { locale } = useContext(LibraryContext)
  const label =
    messages[locale]['feedback_section.edit'] || 'Suggest Edits (GitHub)'

  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      href={urlToEdit}
      sx={{ ...styles.container({ small }), ...sx }}
    >
      <EditIcon size={small ? 18 : 24} sx={styles.icon} />
      <Text>{label}</Text>
    </Link>
  )
}

export default SuggestEdits
