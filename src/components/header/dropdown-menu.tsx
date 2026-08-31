import { useContext } from 'react'
import { Box } from '@vtex/brand-ui'
import DocumentationCard from 'components/documentation-card'
import { LibraryContext } from 'utils/context/libraryContext'
import { getSectionLabel } from 'utils/sidebar-utils'
import type { Section } from 'utils/typings/types'
import styles from './dropdown-menu.styles'

export type DropdownMenuProps = {
  sections: Section[][]
}

const DropdownMenu = ({ sections }: DropdownMenuProps) => {
  const { locale, sidebarDataMaster } = useContext(LibraryContext)

  return (
    <Box sx={styles.outerContainer}>
      <Box sx={styles.innerContainer} data-cy="dropdown-menu">
        {sections.map((section, id) => (
          <Box
            sx={
              id > 0 ? styles.updatesContainer : styles.documentationContainer
            }
            key={id}
            data-cy={
              id > 0
                ? 'dropdown-menu-second-section'
                : 'dropdown-menu-first-section'
            }
          >
            {section.map((card) => (
              <DocumentationCard
                containerType="dropdown"
                key={card.id}
                {...card}
                title={getSectionLabel(card, sidebarDataMaster, locale)}
              />
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default DropdownMenu
