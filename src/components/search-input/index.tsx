import { Configure, InstantSearch } from 'react-instantsearch-dom'
import SearchBox from './search-box'
import Results from './results-box'
import { Box, Flex } from '@vtex/brand-ui'
import { useContext, useRef, useState } from 'react'
import useClickOutside from 'utils/hooks/useClickOutside'
import { searchClient, searchIndex } from 'utils/config/search-config'
import { LibraryContext } from 'utils/context/libraryContext'
import styles from './styles'
import { SearchInputVariant } from './types'

export type { SearchInputVariant }

export interface SearchInputProps {
  /** `modal` renders a full-width input with results in the document flow. */
  variant?: SearchInputVariant
  autoFocus?: boolean
  onClose?: () => void
}

export default function SearchInput({
  variant = 'default',
  autoFocus = false,
  onClose,
}: SearchInputProps) {
  const { locale } = useContext(LibraryContext)
  const isModal = variant === 'modal'
  const [focusOut, setfocusOut] = useState<{ modaltoggle: boolean }>({
    modaltoggle: true,
  })
  const resultsBox = useRef<HTMLElement>()
  useClickOutside(resultsBox, setfocusOut)

  const changeFocus = (value: boolean) => {
    setfocusOut({ modaltoggle: value })
    if (!value) onClose?.()
  }

  const searchContent = (
    <>
      <SearchBox
        changeFocus={changeFocus}
        autoFocus={autoFocus}
        variant={variant}
      />
      {(isModal || focusOut.modaltoggle) && (
        <Results changeFocus={changeFocus} variant={variant} />
      )}
    </>
  )

  return (
    <InstantSearch searchClient={searchClient} indexName={searchIndex}>
      {searchClient.instantSearchConfigs && (
        <Configure {...searchClient.instantSearchConfigs} />
      )}
      {searchClient.useLanguageFilter && (
        <Configure
          clickAnalytics={true}
          facetFilters={[`language:${locale}`]}
        />
      )}
      {!searchClient.useLanguageFilter && <Configure clickAnalytics={true} />}
      {isModal ? (
        <Flex sx={styles.modalRoot}>
          <Box sx={styles.modalSearchBox}>
            <SearchBox
              changeFocus={changeFocus}
              autoFocus={autoFocus}
              variant={variant}
            />
          </Box>
          <Box sx={styles.modalResults}>
            <Results changeFocus={changeFocus} variant={variant} />
          </Box>
        </Flex>
      ) : (
        <Box
          onFocus={() => setfocusOut({ modaltoggle: true })}
          ref={resultsBox}
        >
          {searchContent}
        </Box>
      )}
    </InstantSearch>
  )
}
