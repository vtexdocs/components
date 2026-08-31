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
}
const DocumentationCard = ({
  title,
  description,
  link,
  containerType,
  Icon,
  onClick,
}: CardProps) => {
  return (
    <Link href={link} legacyBehavior>
      <a
        onClick={onClick}
        style={{
          width: '100%',
          maxWidth: '100%',
          display: 'block',
          overflow: 'hidden',
          textDecoration: 'none',
        }}
      >
        <Box sx={cardContainer(containerType)}>
          {containerType === 'see-also' ? (
            <>
              <Flex sx={titleContainer(containerType)}>
                <Icon sx={{ color: '#4A596B', flexShrink: 0 }} size={24} />
                <Text className="title" sx={cardTitle(containerType)}>
                  {title}
                </Text>
              </Flex>
              <Text className="description" sx={cardDescription(containerType)}>
                {description}
              </Text>
            </>
          ) : (
            <Flex sx={titleContainer(containerType)}>
              {containerType === 'dropdown' ? (
                <Flex sx={styles.dropdownIcon}>
                  <Icon sx={{ color: '#4A596B' }} size={20} />
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
          )}
        </Box>
      </a>
    </Link>
  )
}

export default DocumentationCard
