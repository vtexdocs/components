import { useContext, useEffect, useMemo, useRef } from 'react'
import {
  connectInfiniteHits,
  connectStateResults,
} from 'react-instantsearch-dom'
import {
  Hit,
  InfiniteHitsProvided,
  StateResultsProvided,
} from 'react-instantsearch-core'
import SearchCard from 'components/search-card'
import {
  ActionType,
  getIconFromSection,
  getRelativeURL,
  getTitleById,
} from 'utils/search-utils'
import { Box, Flex } from '@vtex/brand-ui'
import { MethodType } from 'utils/typings/types'
import { SearchContext } from 'utils/context/search'
import { LibraryContext } from 'utils/context/libraryContext'

export type FilteredHit2 = Hit & { filteredMatches?: Hit[] }

interface HitProps {
  hit: FilteredHit2
}

const HitCard = ({ hit }: HitProps) => {
  const { sidebarSections } = useContext(LibraryContext)
  const breadcrumbTitle = getTitleById(sidebarSections, hit.doctype)

  const breadcrumbs = [
    breadcrumbTitle,
    ...(hit.doccategory ? [hit.doccategory] : []),
    ,
    hit.doctitle,
  ]
  const DocIcon = getIconFromSection(sidebarSections, hit.doctype)

  return (
    <SearchCard
      doc={hit.doctype}
      Icon={DocIcon}
      title={hit.doctitle}
      method={(hit.method as MethodType) || undefined}
      breadcrumbs={(breadcrumbs as string[]) || []}
      actionType={(hit.actiontype as ActionType) || undefined}
      url={getRelativeURL(hit.url)}
      hit={hit}
    />
  )
}

const StateResults = connectStateResults(
  ({ searchResults }: StateResultsProvided) => {
    const { updateOcurrenceCount } = useContext(SearchContext)

    useEffect(() => {
      if (!searchResults) return

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const results = searchResults as any
      const isFilteringByDoctype =
        typeof results?.filters === 'string' &&
        results.filters.includes('doctype:')

      const facets = results?.facets as
        | Array<{
            name: string
            data: Record<string, number>
            exhaustive?: boolean
          }>
        | undefined

      const doctypeFacet = facets?.find((facet) => facet.name === 'doctype')
      const nbHits = results?.nbHits ?? 0

      const formattedFacets: Record<string, number> = {}

      if (doctypeFacet?.data) {
        Object.entries(doctypeFacet.data).forEach(([key, value]) => {
          if (typeof value === 'number') {
            formattedFacets[key] = value
          }
        })
      }

      formattedFacets[''] = nbHits

      if (!isFilteringByDoctype) {
        updateOcurrenceCount(formattedFacets)
      }
    }, [searchResults?.queryID])

    return null
  }
)

const InfiniteHits = ({ hits, hasMore, refineNext }: InfiniteHitsProvided) => {
  const scrollRef = useRef<HTMLSpanElement>(null)

  function onSentinelIntersection(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting && hasMore) {
        refineNext()
      }
    })
  }

  const filteredResult = useMemo(() => {
    const mergeHits: FilteredHit2[] = [] //hitsData
    hits.forEach((hit) => {
      const alreadyExists = mergeHits.findIndex(
        (e) => e.url_without_anchor === hit.url_without_anchor
      )
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const filteredHit: any = { ...hit, filteredMatches: [] }
      if (alreadyExists >= 0) {
        mergeHits[alreadyExists].filteredMatches?.push(filteredHit)
      } else mergeHits.push(filteredHit)
    })
    return mergeHits
  }, [hits])

  useEffect(() => {
    const observer = new IntersectionObserver(onSentinelIntersection, {})

    if (scrollRef.current) observer.observe(scrollRef.current)
    return () => {
      observer.disconnect()
    }
  }, [hits])
  return (
    <Box>
      <StateResults />
      {filteredResult.map((hit: Hit, index: number) => (
        <Flex key={hit.objectID}>
          <HitCard hit={hit} key={index} />
        </Flex>
      ))}
      <span ref={scrollRef}></span>
    </Box>
  )
}

export default connectInfiniteHits(InfiniteHits)
