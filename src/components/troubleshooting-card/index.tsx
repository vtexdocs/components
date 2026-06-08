import { Box, Link, Text } from '@vtex/brand-ui'
import Tag from 'components/tag'

import type { TroubleshootingItem } from '../../utils/troubleshooting/types'
import styles from './styles'

export type TroubleshootingCardVariant = 'devportal' | 'helpcenter'

export type TroubleshootingCardProps = TroubleshootingItem & {
  href?: string
  basePath?: string
  variant?: TroubleshootingCardVariant
}

function buildHref({
  slug,
  href,
  basePath = '/docs/troubleshooting',
}: Pick<TroubleshootingCardProps, 'slug' | 'href' | 'basePath'>) {
  if (href) return href

  const normalizedBasePath = basePath.replace(/\/$/, '')
  return `${normalizedBasePath}/${slug}`
}

const TroubleshootingCard = ({
  title,
  description,
  slug,
  tags,
  domainFilters,
  symptomFilters,
  href,
  basePath,
  variant = 'devportal',
}: TroubleshootingCardProps) => {
  const cardHref = buildHref({ slug, href, basePath })
  const resolvedSymptomFilters = symptomFilters?.filter(Boolean) ?? []
  const resolvedDomainFilters = domainFilters?.filter(Boolean) ?? []
  const fallbackTags = tags?.filter(Boolean) ?? []
  const hasStructuredTags =
    resolvedSymptomFilters.length > 0 || resolvedDomainFilters.length > 0

  if (variant === 'helpcenter') {
    return (
      <Link href={cardHref}>
        <Box sx={styles.helpcenterContainer}>
          <Text sx={styles.title} className="title">
            {title}
          </Text>
          {hasStructuredTags ? (
            <Box sx={styles.groupsContainer}>
              {resolvedSymptomFilters.length > 0 && (
                <Box sx={styles.groupContainer}>
                  <Box sx={styles.helpcenterTagsContainer}>
                    {resolvedSymptomFilters.map((filter) => (
                      <Tag
                        key={`symptom-${filter}`}
                        sx={styles.tag}
                        color="Blue"
                      >
                        {filter}
                      </Tag>
                    ))}
                  </Box>
                </Box>
              )}
              {resolvedDomainFilters.length > 0 && (
                <Box sx={styles.groupContainer}>
                  <Box sx={styles.helpcenterTagsContainer}>
                    {resolvedDomainFilters.map((filter) => (
                      <Tag key={`domain-${filter}`} sx={styles.tag} color="Gray">
                        {filter}
                      </Tag>
                    ))}
                  </Box>
                </Box>
              )}
            </Box>
          ) : null}
        </Box>
      </Link>
    )
  }

  return (
    <Link href={cardHref} sx={styles.devportalContainer}>
      <Box>
        <Text sx={styles.title} className="title">
          {title}
        </Text>
        {description ? (
          <Text sx={styles.description} className="description">
            {description}
          </Text>
        ) : null}
        <Box sx={styles.tagsContainer}>
          {resolvedSymptomFilters.length > 0 && (
            <Box sx={styles.tagGroup}>
              {resolvedSymptomFilters.map((filter) => (
                <Tag sx={styles.tag} color="Blue" key={`symptom-${filter}`}>
                  {filter}
                </Tag>
              ))}
            </Box>
          )}
          {resolvedDomainFilters.length > 0 && (
            <Box sx={styles.tagGroup}>
              {resolvedDomainFilters.map((filter) => (
                <Tag sx={styles.tag} color="Gray" key={`domain-${filter}`}>
                  {filter}
                </Tag>
              ))}
            </Box>
          )}
          {!hasStructuredTags &&
            fallbackTags.map((moduleTag) => (
              <Tag sx={styles.tag} color="Gray" key={`tags-${moduleTag}`}>
                {moduleTag}
              </Tag>
            ))}
        </Box>
      </Box>
    </Link>
  )
}

export default TroubleshootingCard
