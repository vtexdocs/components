import { Configure, InstantSearch } from 'react-instantsearch-dom'
import SearchBox from './search-box'
import Results from './results-box'
import { Box } from '@vtex/brand-ui'
import { useContext, useRef, useState } from 'react'
import useClickOutside from 'utils/hooks/useClickOutside'
import { searchClient, searchIndex } from 'utils/config/search-config'
import { LibraryContext } from 'utils/context/libraryContext'

export default function SearchInput() {
  const { locale } = useContext(LibraryContext)
  const [focusOut, setfocusOut] = useState<{ modaltoggle: boolean }>({
    modaltoggle: true,
  })
  const resultsBox = useRef<HTMLElement>()
  useClickOutside(resultsBox, setfocusOut)

  const changeFocus = (value: boolean) => {
    setfocusOut({ modaltoggle: value })
  }

  return (
    <InstantSearch searchClient={searchClient} indexName={searchIndex}>
      {
        searchClient.instantSearchConfigs && <Configure {...searchClient.instantSearchConfigs} />
      }
      <Configure clickAnalytics={true} facetFilters={[`language:${locale}`]} />
      <Box onFocus={() => setfocusOut({ modaltoggle: true })} ref={resultsBox}>
        <SearchBox changeFocus={changeFocus} />
        {focusOut.modaltoggle && <Results changeFocus={changeFocus} />}
      </Box>
    </InstantSearch>
  )
}
