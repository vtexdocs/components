import React from 'react'
import { Box, Flex, IconCaret, Text, Link } from '@vtex/brand-ui'
import styles from './styles'
import NextImage from 'next/image.js'
const Image = (NextImage as any).default || NextImage

export type WhatsNextDataElement = {
  title: string
  description?: string
  linkTitle?: string
  linkTo: string
  image?: string
}

const WhatsNextCard = ({
  title,
  description,
  linkTitle,
  linkTo,
  image,
}: WhatsNextDataElement) => {
  return (
    <Link href={linkTo} sx={styles.container}>
      {image ? (
        <Box>
          <Image
            src={image}
            alt={title}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
          <Text sx={styles.imageTitle} className="title">
            {title}
          </Text>
        </Box>
      ) : (
        <Box sx={{ padding: '16px' }}>
          <Text sx={styles.title} className="title">
            {title}
          </Text>
          {description && (
            <Text sx={styles.description} className="description">
              {description}
            </Text>
          )}
          {linkTitle && (
            <Flex sx={styles.linkContainer}>
              <Text sx={styles.link} className="link">
                {linkTitle}
              </Text>
              <IconCaret
                className="caret"
                color="#A1A8B3"
                direction="right"
                size={16}
              />
            </Flex>
          )}
        </Box>
      )}
    </Link>
  )
}

export default WhatsNextCard
