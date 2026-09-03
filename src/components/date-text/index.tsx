import { useContext } from 'react'
import { Flex, Text } from '@vtex/brand-ui'

import { LibraryContext } from 'utils/context/libraryContext'
import { messages } from 'utils/get-message'
import styles from './styles'

export type DateTextProps = {
  createdAt: Date
  updatedAt: Date
}

const formatDate = (date: Date, locale: string) =>
  new Intl.DateTimeFormat(locale).format(date)

const DateText = ({ createdAt, updatedAt }: DateTextProps) => {
  const { locale } = useContext(LibraryContext)
  const createdLabel = messages[locale]['date_text.created'] || 'Published on'
  const updatedLabel =
    messages[locale]['date_text.updated'] || 'Last updated on'

  return (
    <Flex sx={styles.dateContainer}>
      <Text sx={styles.dateItem}>
        <Text as="span" sx={styles.dateLabel}>
          {createdLabel}
        </Text>
        {formatDate(createdAt, locale)}
      </Text>
      <Text sx={styles.dateSeparator}>•</Text>
      <Text sx={styles.dateItem}>
        <Text as="span" sx={styles.dateLabel}>
          {updatedLabel}
        </Text>
        {formatDate(updatedAt, locale)}
      </Text>
    </Flex>
  )
}

export default DateText
