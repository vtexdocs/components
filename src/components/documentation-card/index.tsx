import Link from 'next/link.js'
import { Box, Flex, Text } from '@vtex/brand-ui'

import {
  cardContainer,
  cardTitle,
  cardDescription,
  titleContainer,
} from './functions'
import styles from './styles'
import { MouseEventHandler } from 'react'
import { DataElement } from 'utils/typings/types'

export interface DocumentProps extends DataElement {
  title: string
}
export interface CardProps extends DocumentProps {
  containerType: 'dropdown' | 'see-also' | 'mobile'
  onClick?: MouseEventHandler<HTMLAnchorElement> | undefined
  isExternalLink?: boolean
}
const DocumentationCard = ({
  title,
  description,
  link,
  containerType,
  Icon,
  onClick,
  isExternalLink,
}: CardProps) => {
  return (
    <Link href={link} legacyBehavior>
      <a
        onClick={onClick}
        target={isExternalLink ? '_blank' : undefined}
        rel={isExternalLink ? 'noreferrer' : undefined}
        style={{
          width: '100%',
          maxWidth: '100%',
          height: containerType === 'see-also' ? '100%' : undefined,
          display: 'block',
          overflow: 'hidden',
          textDecoration: 'none',
          color: 'inherit',
        }}
      >
        <Box sx={cardContainer(containerType)}>
          <Flex sx={titleContainer(containerType)}>
            {containerType === 'dropdown' ? (
              <Flex sx={styles.dropdownIcon}>
                <Icon sx={{ color: '#4A596B' }} size={20} />
              </Flex>
            ) : containerType === 'see-also' ? (
              <Flex sx={styles.seeAlsoIcon}>
                <Icon sx={{ color: '#4A596B' }} size={18} />
              </Flex>
            ) : (
              <Icon
                sx={{ color: '#4A596B', flexShrink: 0, mt: '2px' }}
                size={24}
              />
            )}
            <Box sx={{ minWidth: 0, flex: 1 }}>
              <Text className="title" sx={cardTitle(containerType)}>
                {title}
              </Text>
              <Text
                className="description"
                sx={cardDescription(containerType)}
              >
                {description}
              </Text>
            </Box>
          </Flex>
        </Box>
      </a>
    </Link>
  )
}

export default DocumentationCard
