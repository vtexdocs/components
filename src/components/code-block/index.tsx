import React from 'react'
import CopyCode from 'components/copy-code'
import { Box, Text } from '@vtex/brand-ui'
import { childrenToString } from 'utils/string-utils'
import styles from './styles'

type Component = {
  node: object
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

const CodeBlock = ({ ...props }: Component) => {
  return (
    <Box sx={styles.CodeBlock}>
      <pre>
        <CopyCode code={childrenToString(props.children)} />
        <Text sx={styles.CodeContent} {...props} />
      </pre>
    </Box>
  )
}

export default CodeBlock
