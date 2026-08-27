import { useRef, KeyboardEvent, MouseEvent, useContext } from 'react'
import { useRouter } from 'next/router.js'
import { Flex } from '@vtex/brand-ui'
import { connectSearchBox } from 'react-instantsearch-dom'
import { SearchBoxProvided } from 'react-instantsearch-core'

import SearchIcon from 'components/icons/search-icon'
import CloseIcon from 'components/icons/close-icon'
import styles from './styles'
import { messages } from 'utils/get-message'
import { LibraryContext } from 'utils/context/libraryContext'

interface SearchBoxProps extends SearchBoxProvided {
  changeFocus: (value: boolean) => void
}

const SearchBoxComponent = ({
  currentRefinement,
  refine,
  changeFocus,
}: SearchBoxProps) => {
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)
  const { locale } = useContext(LibraryContext)

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
    <Flex sx={styles.searchContainer} onClick={handleClick}>
      <SearchIcon sx={styles.searchIcon} />
      <input
        style={styles.searchInput}
        ref={inputRef}
        className="searchComponent"
        type="text"
        placeholder={messages[locale]['search_input.placeholder']}
        value={currentRefinement}
        data-cy="search"
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
      ) : null}
    </Flex>
  )
}

const SearchBox = connectSearchBox(SearchBoxComponent)

export default SearchBox
