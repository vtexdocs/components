import { type ReactNode } from 'react'
import { Box, Flex, IconCaret, Text, Link } from '@vtex/brand-ui'
import styles from './styles'
import { flattenText, parseCardChildren } from './parseCardChildren'

export type WhatsNextDataElement = {
  title: string
  description?: string
  linkTitle?: string
  linkTo: string
  image?: string
}

export type CardProps = {
  children?: ReactNode
  title?: string
  description?: ReactNode
  linkTitle?: string
  linkTo?: string
  image?: string
  node?: unknown
}

const Card = ({
  children,
  title: titleProp,
  description: descriptionProp,
  linkTitle: linkTitleProp,
  linkTo: linkToProp,
  image: imageProp,
}: CardProps) => {
  const parsed = parseCardChildren(children)
  const title = parsed.title ?? titleProp
  const description = parsed.description ?? descriptionProp
  const linkTitle = parsed.linkTitle ?? linkTitleProp
  const linkTo = parsed.linkTo ?? linkToProp
  const image = parsed.image ?? imageProp
  const imageAlt = parsed.imageAlt || flattenText(title)

  const body = (
    <Box
      sx={{
        flex: 1,
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {image && (
        <Box
          as="img"
          src={image}
          alt={imageAlt}
          sx={styles.image}
        />
      )}
      {title && (
        <Text sx={styles.title} className="title">
          {title}
        </Text>
      )}
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
  )

  if (!linkTo) {
    return <Box sx={styles.container}>{body}</Box>
  }

  return (
    <Link href={linkTo} sx={styles.container}>
      {body}
    </Link>
  )
}

export default Card
