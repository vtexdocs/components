import type { TroubleshootingFilterState, TroubleshootingItem } from './types'

export function filterTroubleshootingItems<T extends TroubleshootingItem>(
  items: T[],
  { search, domainFilters, symptomFilters }: TroubleshootingFilterState
): T[] {
  const selectedDomainFilters = new Set(
    domainFilters.map((filter) => filter.toLowerCase())
  )
  const selectedSymptomFilters = new Set(
    symptomFilters.map((filter) => filter.toLowerCase())
  )
  const hasDomainFilters = selectedDomainFilters.size > 0
  const hasSymptomFilters = selectedSymptomFilters.size > 0
  const normalizedSearch = search.toLowerCase()

  return items.filter((item) => {
    const matchesSearch =
      !normalizedSearch ||
      item.title.toLowerCase().includes(normalizedSearch)

    const itemDomainFiltersLower = (item.domainFilters ?? []).map((filter) =>
      filter.toLowerCase()
    )
    const itemSymptomFiltersLower = (item.symptomFilters ?? []).map((filter) =>
      filter.toLowerCase()
    )
    const matchesDomainFilters =
      !hasDomainFilters ||
      itemDomainFiltersLower.some((filter) =>
        selectedDomainFilters.has(filter)
      )
    const matchesSymptomFilters =
      !hasSymptomFilters ||
      itemSymptomFiltersLower.some((filter) =>
        selectedSymptomFilters.has(filter)
      )

    return matchesSearch && matchesDomainFilters && matchesSymptomFilters
  })
}
