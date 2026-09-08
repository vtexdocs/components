export type FilterOption = {
  id: string
  name: string
}

export type FilterGroup = {
  name: string
  options: FilterOption[]
}

export type ListingFilterLabels = {
  button?: string
  modalTitle?: string
  remove?: string
  apply?: string
}

export type ListingFilterSelection = {
  tag: string[]
  checklist: string[]
}
