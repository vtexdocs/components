import { useContext, useState } from 'react'
import { Box, Flex, Text } from '@vtex/brand-ui'
import AnimateHeight from 'react-animate-height'

import TableOfContents from 'lib/table-of-contents'
import MenuIcon from 'components/icons/menu-icon'
import CloseIcon from 'components/icons/close-icon'
import { LibraryContext } from 'utils/context/libraryContext'
import { messages } from 'utils/get-message'

import styles from './styles'
import { OnThisPageProps } from './OnThisPage.types'

/** Mobile floating table of contents for documentation pages. */
const OnThisPage = ({ headingList }: OnThisPageProps) => {
  const { locale } = useContext(LibraryContext)
  const [isOpen, setIsOpen] = useState(false)
  const title = messages[locale]['on_this_page.title']

  return (
    <Flex sx={styles.container}>
      <AnimateHeight
        duration={300}
        delay={isOpen ? 300 : 0}
        height={isOpen ? 'auto' : 0}
      >
        <Box sx={styles.contentContainer}>
          <Text sx={styles.onThisPageTitle}>{title}</Text>
          <Box>
            <TableOfContents headingList={headingList} />
          </Box>
        </Box>
      </AnimateHeight>

      <Flex
        sx={styles.buttonContainer}
        onClick={() => setIsOpen((open) => !open)}
      >
        <Text sx={styles.title(isOpen)}>{title}</Text>
        <Box sx={styles.iconContainer}>
          {!isOpen ? <MenuIcon size={32} /> : <CloseIcon size={32} />}
        </Box>
      </Flex>
    </Flex>
  )
}

export default OnThisPage
