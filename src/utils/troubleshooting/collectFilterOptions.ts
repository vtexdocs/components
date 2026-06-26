import type { TroubleshootingItem } from './types'

export function collectTroubleshootingFilterOptions<
  T extends Pick<TroubleshootingItem, 'domainFilters' | 'symptomFilters'>
>(items: T[]) {
  const domainFilters = new Set<string>()
  const symptomFilters = new Set<string>()

  items.forEach((item) => {
    item.domainFilters?.forEach((filter) => domainFilters.add(filter))
    item.symptomFilters?.forEach((filter) => symptomFilters.add(filter))
  })

  return {
    domainFilters: Array.from(domainFilters).sort(),
    symptomFilters: Array.from(symptomFilters).sort(),
  }
}
