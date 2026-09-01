import {
  useRef,
  KeyboardEvent,
  MouseEvent,
  useContext,
  useEffect,
  useState,
} from 'react'
import { useRouter } from 'next/router.js'
import { Flex, Box } from '@vtex/brand-ui'
import { connectSearchBox } from 'react-instantsearch-dom'
import { SearchBoxProvided } from 'react-instantsearch-core'

import SearchIcon from 'components/icons/search-icon'
import CloseIcon from 'components/icons/close-icon'
import styles from './styles'
import { messages } from 'utils/get-message'
import { LibraryContext } from 'utils/context/libraryContext'
import { SearchInputVariant } from './types'

interface SearchBoxProps extends SearchBoxProvided {
  changeFocus: (value: boolean) => void
  autoFocus?: boolean
  variant?: SearchInputVariant
}

const containerStyle = (variant: SearchInputVariant) =>
  variant === 'modal' ? styles.searchContainerModal : styles.searchContainer

const iconStyle = (variant: SearchInputVariant) =>
  variant === 'modal' ? styles.searchIconModal : styles.searchIcon

const inputStyle = (variant: SearchInputVariant) =>
  variant === 'modal' ? styles.searchInputModal : styles.searchInput

const SearchBoxComponent = ({
  currentRefinement,
  refine,
  changeFocus,
  autoFocus = false,
  variant = 'default',
}: SearchBoxProps) => {
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)
  const { locale } = useContext(LibraryContext)
  const [isMac, setIsMac] = useState(false)

  useEffect(() => {
    if (autoFocus) inputRef.current?.focus()
  }, [autoFocus])

  useEffect(() => {
    setIsMac(
      /Mac|iPhone|iPad|iPod/.test(
        navigator.platform || navigator.userAgent || ''
      )
    )
  }, [])

  useEffect(() => {
    if (variant === 'modal') return

    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (!(event.metaKey || event.ctrlKey) || event.key.toLowerCase() !== 'k') {
        return
      }

      const target = event.target as HTMLElement | null
      if (
        target &&
        (target.tagName === 'TEXTAREA' || target.isContentEditable)
      ) {
        return
      }

      const input = inputRef.current
      if (!input || input.offsetParent === null) return

      event.preventDefault()
      input.focus()
      changeFocus(true)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [variant, changeFocus])

  const handleClick = () => {
    if (inputRef.current != null) inputRef.current.focus()
  }

  const keyPressed = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      changeFocus(false)
      inputRef.current?.blur()
      return
    }
    if (e.key === 'Enter') {
      router.push({
        pathname: '/search',
        query: { keyword: inputRef.current?.value },
      })
      inputRef.current?.blur()
      changeFocus(false)
    }
  }

  const handleClear = (e: MouseEvent) => {
    e.stopPropagation()
    refine('')
    inputRef.current?.focus()
  }

  return (
    <Flex sx={containerStyle(variant)} onClick={handleClick}>
      <SearchIcon sx={iconStyle(variant)} />
      <input
        style={inputStyle(variant)}
        ref={inputRef}
        className="searchComponent"
        type="search"
        enterKeyHint="search"
        autoComplete="off"
        autoCorrect="off"
        spellCheck={false}
        placeholder={messages[locale]['search_input.placeholder']}
        value={currentRefinement}
        data-cy="search"
        aria-keyshortcuts="Meta+K Control+K"
        autoFocus={autoFocus}
        onKeyDown={(e) => keyPressed(e)}
        onChange={(e) => refine(e.currentTarget.value)}
      />
      {currentRefinement ? (
        <Flex
          as="button"
          type="button"
          sx={styles.clearButton}
          aria-label={messages[locale]['search_input.clear'] || 'Clear search'}
          title={messages[locale]['search_input.clear'] || 'Clear search'}
          onClick={handleClear}
        >
          <CloseIcon sx={{ width: '14px', height: '14px' }} />
        </Flex>
      ) : variant === 'default' ? (
        <Flex sx={styles.shortcutHint} aria-hidden="true" data-search-shortcut>
          {isMac ? (
            <Box as="kbd" sx={styles.shortcutKbd}>
              ⌘
            </Box>
          ) : (
            <Box as="kbd" sx={styles.shortcutKbd}>
              Ctrl
            </Box>
          )}
          <Box as="kbd" sx={styles.shortcutKbd}>
            K
          </Box>
        </Flex>
      ) : null}
    </Flex>
  )
}

const SearchBox = connectSearchBox(SearchBoxComponent)

export default SearchBox
