import { Children, isValidElement, type ReactNode } from 'react'
import { Box, Flex } from '@vtex/brand-ui'
import type { SxStyleProp } from '@vtex/brand-ui'

import styles from './styles'

export type SectionCardGridProps = {
  children: ReactNode
  sx?: SxStyleProp
  'data-cy'?: string
}

const SectionCardGrid = ({ children, sx, ...props }: SectionCardGridProps) => (
  <Flex sx={{ ...styles.container, ...sx }} {...props}>
    {Children.toArray(children).map((child, index) => (
      <Box key={isValidElement(child) ? child.key : index} sx={styles.item}>
        {child}
      </Box>
    ))}
  </Flex>
)

export default SectionCardGrid
