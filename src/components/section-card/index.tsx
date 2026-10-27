import Link from 'next/link.js'
import { Box, Flex, Text } from '@vtex/brand-ui'
import type { IconProps } from '@vtex/brand-ui'

import LongArrowIcon from '../icons/long-arrow-icon'
import styles from './styles'

export type SectionCardProps = {
  Icon: (props: IconProps) => JSX.Element
  title: string
  description: string
  link: string
  ctaLabel: string
  isExternalLink?: boolean
}

const SectionCard = ({
  Icon,
  title,
  description,
  link,
  ctaLabel,
  isExternalLink = false,
}: SectionCardProps) => (
  <Box
    as={Link}
    href={link}
    target={isExternalLink ? '_blank' : undefined}
    rel={isExternalLink ? 'noopener noreferrer' : undefined}
    sx={styles.container}
  >
    <Flex sx={styles.content}>
      <Icon sx={styles.icon} />
      <Text className="title" sx={styles.title}>
        {title}
      </Text>
      <Text className="description" sx={styles.description}>
        {description}
      </Text>
    </Flex>
    <Flex className="footer" sx={styles.footer}>
      <Text sx={styles.cta}>{ctaLabel}</Text>
      {isExternalLink && <LongArrowIcon size={18} />}
    </Flex>
  </Box>
)

export default SectionCard
