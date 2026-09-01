import { useContext } from 'react'
import { Text } from '@vtex/brand-ui'

import { LibraryContext } from 'utils/context/libraryContext'
import { messages } from 'utils/get-message'
import styles from './styles'

export type TimeToReadProps = {
  minutes: string
}

const TimeToRead = ({ minutes }: TimeToReadProps) => {
  const { locale } = useContext(LibraryContext)
  const template =
    messages[locale]['documentation_reading_time.text'] || '{minutes} min read'

  return (
    <Text sx={styles.readingTime}>
      {template.replace('{minutes}', minutes)}
    </Text>
  )
}

export default TimeToRead
