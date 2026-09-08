import { Box, Flex, Text } from '@vtex/brand-ui'

import type { ContributorsType } from 'lib/contributors'
import styles from './styles'

export type AuthorProps = {
  contributor: ContributorsType
}

const Author = ({ contributor }: AuthorProps) => {
  return (
    <Flex sx={styles.container}>
      <Box sx={styles.photo} key={contributor?.login}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={contributor?.avatar}
          alt="Photo of the author"
          width={32}
          height={32}
        />
      </Box>
      <Text>{contributor?.name}</Text>
    </Flex>
  )
}

export default Author
