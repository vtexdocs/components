import { Text } from '@vtex/brand-ui'

import { useLocale } from 'utils/context/libraryContext'
import { messages } from 'utils/get-message'
import styles from './styles'

export type TimeToReadProps = {
  minutes: string
}

const TimeToRead = ({ minutes }: TimeToReadProps) => {
  const locale = useLocale()
  const template =
    messages[locale]['documentation_reading_time.text'] || '{minutes} min read'

  return (
    <Text sx={styles.readingTime}>
      {template.replace('{minutes}', minutes)}
    </Text>
  )
}

export default TimeToRead
