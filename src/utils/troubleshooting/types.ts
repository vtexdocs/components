export type TroubleshootingItem = {
  slug: string
  title: string
  description?: string
  tags?: string[]
  domainFilters?: string[]
  symptomFilters?: string[]
}

export type TroubleshootingFilterState = {
  search: string
  domainFilters: string[]
  symptomFilters: string[]
}
