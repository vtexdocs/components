import { useContext } from 'react'
import { Box, Text } from '@vtex/brand-ui'

import DocumentationCard from 'components/documentation-card'
import { LibraryContext } from 'utils/context/libraryContext'
import { messages } from 'utils/get-message'
import { createDocFromUrl } from './functions'
import type { SeeAlsoDoc } from './functions'

import styles from './styles'

export type { SeeAlsoDoc }

export type SeeAlsoSectionProps = {
  docs: SeeAlsoDoc[]
}

const isExternalLink = (url: string) => /^https?:\/\//.test(url)

const SeeAlsoSection = ({ docs }: SeeAlsoSectionProps) => {
  const { locale, sidebarSections, sidebarDataMaster } =
    useContext(LibraryContext)
  const title = messages[locale]['see_also_section.title'] || 'See also'
  const cards =
    docs?.map((doc) =>
      createDocFromUrl(doc, sidebarSections, {
        locale,
        navigation: sidebarDataMaster,
      })
    ) ?? []

  return (
    <Box
      as="nav"
      sx={styles.seeAlsoContainer}
      data-cy="see-also-section"
      aria-labelledby="see-also-heading"
    >
      <Text as="h2" id="see-also-heading" sx={styles.sectionTitle}>
        {title}
      </Text>
      <Box sx={styles.cards}>
        {cards.map((card) => (
          <DocumentationCard
            key={card.link}
            containerType="see-also"
            isExternalLink={isExternalLink(card.link)}
            {...card}
          />
        ))}
      </Box>
    </Box>
  )
}

export default SeeAlsoSection
