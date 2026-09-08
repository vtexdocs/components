import { useState, type ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from '@vtex/brand-ui'
import ChipFilter, { type ChipFilterCategory } from './index'
import AddedIcon from 'components/icons/added-icon'
import DeprecatedIcon from 'components/icons/deprecated-icon'
import FixedIcon from 'components/icons/fixed-icon'
import ImprovedIcon from 'components/icons/improved-icon'
import RemovedIcon from 'components/icons/removed-icon'
import InfoIcon from 'components/icons/info-icon'

const categories: ChipFilterCategory[] = [
  { type: 'added', title: 'Added', Icon: AddedIcon },
  { type: 'deprecated', title: 'Deprecated', Icon: DeprecatedIcon },
  { type: 'fixed', title: 'Fixed', Icon: FixedIcon },
  { type: 'improved', title: 'Improved', Icon: ImprovedIcon },
  { type: 'removed', title: 'Removed', Icon: RemovedIcon },
  { type: 'info', title: 'Information', Icon: InfoIcon },
]

const amounts: Record<string, number> = {
  added: 12,
  deprecated: 3,
  fixed: 8,
  improved: 15,
  removed: 2,
  info: 6,
}

const meta = {
  title: 'Example/ChipFilter',
  component: ChipFilter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    filters: [],
    categories,
    applyCategory: () => undefined,
    resetFilters: () => undefined,
    removeCategory: () => undefined,
    getCategoryAmount: (category: string) => amounts[category] ?? 0,
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ width: 640 }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof ChipFilter>

export default meta
type Story = StoryObj<typeof meta>

const FilterWithState = (args: ComponentProps<typeof ChipFilter>) => {
  const [filters, setFilters] = useState<string[]>(args.filters)

  return (
    <ChipFilter
      {...args}
      filters={filters}
      applyCategory={(option) =>
        setFilters((prev) => (prev.includes(option) ? prev : [...prev, option]))
      }
      removeCategory={(option) =>
        setFilters((prev) => prev.filter((filter) => filter !== option))
      }
      resetFilters={() => setFilters([])}
    />
  )
}

export const Default: Story = {
  render: (args) => <FilterWithState {...args} />,
}

export const WithSelectedFilters: Story = {
  args: {
    filters: ['added', 'fixed'],
  },
  render: (args) => <FilterWithState {...args} />,
}

export const Overflow: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ width: 280 }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  render: (args) => <FilterWithState {...args} />,
}
