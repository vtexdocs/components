import type { FilterGroup } from './types'

export function isFilterGroup(value: unknown): value is FilterGroup {
  return (
    typeof value === 'object' &&
    value !== null &&
    'name' in value &&
    'options' in value &&
    Array.isArray((value as FilterGroup).options)
  )
}

export function toFilterGroup(
  input: FilterGroup | string[] | undefined,
  name = ''
): FilterGroup | undefined {
  if (!input) return undefined

  if (isFilterGroup(input)) {
    return input
  }

  return {
    name,
    options: input.map((option) => ({ id: option, name: option })),
  }
}

export function toFilterGroups(
  checkBoxFilter: FilterGroup | string[] | undefined,
  checkBoxFilters: FilterGroup[] | undefined,
  filterName = ''
): FilterGroup[] {
  if (checkBoxFilters?.length) {
    return checkBoxFilters
  }

  const normalized = toFilterGroup(checkBoxFilter, filterName)
  return normalized ? [normalized] : []
}
