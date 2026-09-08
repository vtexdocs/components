import { Box, Button, Checkbox, Flex, SxStyleProp, Text } from '@vtex/brand-ui'
import CloseIcon from 'components/icons/close-icon'
import FilterIcon from 'components/icons/filter-icon'
import TrashcanIcon from 'components/icons/trashcan-icon'
import Tag from 'components/tag'
import { useState } from 'react'

import { toFilterGroup, toFilterGroups } from './normalize'
import styles from './styles'
import type {
  FilterGroup,
  ListingFilterLabels,
  ListingFilterSelection,
} from './types'

export type { FilterGroup, FilterOption, ListingFilterLabels, ListingFilterSelection } from './types'

export type ListingFilterProps = {
  tagFilter?: FilterGroup | string[]
  tagFilterName?: string
  checkBoxFilter?: FilterGroup | string[]
  checkBoxFilters?: FilterGroup[]
  filterName?: string
  selectedCheckboxes?: string[]
  selectedTags?: string[]
  onApply: (filters: ListingFilterSelection) => void
  labels?: ListingFilterLabels
  buttonSx?: SxStyleProp
  centeredTagOptions?: boolean
}

type SelectedFilters = ListingFilterSelection

const defaultLabels: Required<ListingFilterLabels> = {
  button: 'Filters',
  modalTitle: 'Filters',
  remove: 'Remove filters',
  apply: 'Apply filters',
}

const ListingFilter = ({
  tagFilter,
  tagFilterName,
  checkBoxFilter,
  checkBoxFilters,
  filterName = '',
  onApply,
  selectedCheckboxes,
  selectedTags,
  labels,
  buttonSx,
  centeredTagOptions = false,
}: ListingFilterProps) => {
  const resolvedLabels = { ...defaultLabels, ...labels }
  const normalizedTagFilter = toFilterGroup(tagFilter, tagFilterName)
  const checkboxGroups = toFilterGroups(
    checkBoxFilter,
    checkBoxFilters,
    filterName
  )

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [tempFilters, setTempFilters] = useState<SelectedFilters>({
    tag: [],
    checklist: [],
  })

  const numberOfFilters =
    getSelectedFiltersLength(selectedTags) +
    getSelectedFiltersLength(selectedCheckboxes)

  function getSelectedFiltersLength(filters: string[] | undefined) {
    return filters?.length ?? 0
  }

  function handleFilterClick(option: string, type: 'tag' | 'checklist') {
    setTempFilters((prev) => {
      const current = prev[type]
      const updatedFilters = current.includes(option)
        ? current.filter((filter) => filter !== option)
        : [...current, option]

      return { ...prev, [type]: updatedFilters }
    })
  }

  function isFilterSelected(option: string, type: 'tag' | 'checklist') {
    if (isModalOpen) {
      return tempFilters[type].includes(option)
    }

    if (type === 'tag') {
      return selectedTags?.includes(option) ?? false
    }

    return selectedCheckboxes?.includes(option) ?? false
  }

  const FilterButton = () => (
    <Flex
      sx={{ ...styles.filterButton, ...buttonSx }}
      onClick={() => {
        setTempFilters({
          checklist: selectedCheckboxes ?? [],
          tag: selectedTags ?? [],
        })
        setIsModalOpen(true)
      }}
    >
      <FilterIcon size={16} />
      <Text sx={styles.filterButtonText}>{resolvedLabels.button}</Text>
      {numberOfFilters > 0 && (
        <Text sx={styles.numberOfFilters}>{numberOfFilters}</Text>
      )}
    </Flex>
  )

  const TagFilter = () => {
    if (!normalizedTagFilter) return null

    return (
      <Box sx={styles.filterContainer}>
        <Text sx={styles.filterTitle}>{normalizedTagFilter.name}</Text>
        <Flex
          sx={
            centeredTagOptions
              ? styles.tagContainerCentered
              : styles.tagContainer
          }
        >
          {normalizedTagFilter.options.map((option) => (
            <Tag
              sx={styles.tag}
              key={option.id}
              color={isFilterSelected(option.id, 'tag') ? 'Selected' : 'Default'}
              onClick={() => handleFilterClick(option.id, 'tag')}
            >
              {option.name}
            </Tag>
          ))}
        </Flex>
      </Box>
    )
  }

  const CheckboxFilters = () => {
    if (checkboxGroups.length === 0) return null

    return (
      <>
        {checkboxGroups.map((group, groupIndex) => (
          <Box key={group.name}>
            {groupIndex > 0 && <Divider />}
            <Box sx={styles.filterContainer}>
              <Text sx={styles.filterTitle}>{group.name}</Text>
              <Box sx={styles.checkBoxContainer}>
                {group.options.map((option) => (
                  <Checkbox
                    key={`${group.name}-${option.id}`}
                    label={option.name}
                    checked={isFilterSelected(option.id, 'checklist')}
                    onClick={() => handleFilterClick(option.id, 'checklist')}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        ))}
      </>
    )
  }

  const Divider = () => (
    <Box sx={styles.sectionDivider}>
      <hr />
    </Box>
  )

  const FilterModal = () => (
    <>
      <Box sx={styles.blanket} onClick={() => setIsModalOpen(false)} />
      <Box sx={styles.container}>
        <Box sx={styles.topContainer}>
          <Text sx={styles.modalTitle}>{resolvedLabels.modalTitle}</Text>
          <Flex
            sx={styles.closeButtonContainer}
            onClick={() => setIsModalOpen(false)}
          >
            <CloseIcon size={32} />
          </Flex>
        </Box>
        <Box sx={styles.innerContainer}>
          <TagFilter />
          {normalizedTagFilter && checkboxGroups.length > 0 && <Divider />}
          <CheckboxFilters />
        </Box>
        <Flex sx={styles.buttonsContainer}>
          <Button
            sx={styles.removeButton}
            icon={() => <TrashcanIcon sx={{ mr: '8px' }} size={18} />}
            onClick={() => setTempFilters({ tag: [], checklist: [] })}
          >
            {resolvedLabels.remove}
          </Button>
          <Button
            onClick={() => {
              setIsModalOpen(false)
              onApply(tempFilters)
            }}
          >
            {resolvedLabels.apply}
          </Button>
        </Flex>
      </Box>
    </>
  )

  return (
    <>
      <FilterButton />
      {isModalOpen && <FilterModal />}
    </>
  )
}

export default ListingFilter
