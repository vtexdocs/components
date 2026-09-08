import { useState, type ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from '@vtex/brand-ui'
import ListingFilter from './index'
import type { ListingFilterSelection } from './types'

const meta = {
  title: 'Example/ListingFilter',
  component: ListingFilter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    tagFilterName: 'Status',
    tagFilter: ['Open', 'Closed', 'Backlog'],
    filterName: 'Product',
    checkBoxFilter: ['Checkout', 'Catalog', 'Payments'],
    onApply: () => undefined,
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof ListingFilter>

export default meta
type Story = StoryObj<typeof meta>

const FilterWithState = (args: ComponentProps<typeof ListingFilter>) => {
  const [selection, setSelection] = useState<ListingFilterSelection>({
    tag: args.selectedTags ?? [],
    checklist: args.selectedCheckboxes ?? [],
  })

  return (
    <ListingFilter
      {...args}
      selectedTags={selection.tag}
      selectedCheckboxes={selection.checklist}
      onApply={setSelection}
    />
  )
}

export const Default: Story = {
  render: (args) => <FilterWithState {...args} />,
}

export const WithAppliedFilters: Story = {
  args: {
    selectedTags: ['Open'],
    selectedCheckboxes: ['Checkout', 'Payments'],
  },
  render: (args) => <FilterWithState {...args} />,
}

export const MultipleCheckboxGroups: Story = {
  args: {
    checkBoxFilter: undefined,
    filterName: undefined,
    checkBoxFilters: [
      {
        name: 'Product',
        options: [
          { id: 'checkout', name: 'Checkout' },
          { id: 'catalog', name: 'Catalog' },
        ],
      },
      {
        name: 'Channel',
        options: [
          { id: 'store', name: 'Store' },
          { id: 'admin', name: 'Admin' },
        ],
      },
    ],
  },
  render: (args) => <FilterWithState {...args} />,
}
