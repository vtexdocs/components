import { Box, Flex } from '@vtex/brand-ui'
import { useContext, useEffect, useState, MouseEvent } from 'react'
import { useRouter } from 'next/router.js'

import SearchInput from 'components/search-input'
import SearchIcon from 'components/icons/search-icon'
import { LibraryContext } from 'utils/context/libraryContext'
import { messages } from 'utils/get-message'
import styles from './styles'

export interface MobileSearchProps {
  /** Called when the search modal opens, e.g. to close the hamburger menu. */
  onOpen?: () => void
}

const MobileSearch = ({ onOpen }: MobileSearchProps) => {
  const router = useRouter()
  const { locale } = useContext(LibraryContext)
  const [isOpen, setIsOpen] = useState(false)

  const openLabel =
    messages[locale]['search_input.open_search'] ||
    messages[locale]['search_input.placeholder'] ||
    'Search'

  const openModal = () => {
    onOpen?.()
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    if (!isOpen) return

    const html = document.documentElement
    const previousOverflow = html.style.overflow
    html.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      html.style.overflow = previousOverflow
    }
  }, [isOpen])

  useEffect(() => {
    const handleRouteChange = () => closeModal()
    router.events?.on('routeChangeStart', handleRouteChange)
    router.events?.on('hashChangeStart', handleRouteChange)
    return () => {
      router.events?.off('routeChangeStart', handleRouteChange)
      router.events?.off('hashChangeStart', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Box
        as="button"
        type="button"
        sx={styles.trigger}
        aria-label={openLabel}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        onClick={openModal}
      >
        <SearchIcon sx={{ width: '24px', height: '24px' }} />
      </Box>
      {isOpen && (
        <Flex
          sx={styles.overlay}
          role="dialog"
          aria-modal="true"
          aria-label={openLabel}
          onClick={closeModal}
        >
          <Flex
            sx={styles.card}
            onClick={(event: MouseEvent) => event.stopPropagation()}
          >
            <SearchInput variant="modal" autoFocus onClose={closeModal} />
          </Flex>
        </Flex>
      )}
    </>
  )
}

export default MobileSearch
