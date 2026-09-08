import { useContext } from 'react'
import { Flex, Text } from '@vtex/brand-ui'

import { LibraryContext } from 'utils/context/libraryContext'
import { messages } from 'utils/get-message'
import styles from './styles'

export type DateTextProps = {
  createdAt: Date
  updatedAt: Date
}

const formatDate = (date: Date, locale: string) => {
  if (Number.isNaN(date.getTime())) return undefined
  return new Intl.DateTimeFormat(locale).format(date)
}

const DateText = ({ createdAt, updatedAt }: DateTextProps) => {
  const { locale } = useContext(LibraryContext)
  const createdLabel = messages[locale]['date_text.created'] || 'Published on'
  const updatedLabel =
    messages[locale]['date_text.updated'] || 'Last updated on'
  const created = formatDate(createdAt, locale)
  const updated = formatDate(updatedAt, locale)

  if (!created && !updated) return null

  return (
    <Flex sx={styles.dateContainer}>
      {created && (
        <Text sx={styles.dateItem}>
          <Text as="span" sx={styles.dateLabel}>
            {createdLabel}
          </Text>
          {created}
        </Text>
      )}
      {created && updated && <Text sx={styles.dateSeparator}>•</Text>}
      {updated && (
        <Text sx={styles.dateItem}>
          <Text as="span" sx={styles.dateLabel}>
            {updatedLabel}
          </Text>
          {updated}
        </Text>
      )}
    </Flex>
  )
}

export default DateText
