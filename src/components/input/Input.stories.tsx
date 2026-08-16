import { useState, type ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from '@vtex/brand-ui'
import Input from './index'
import SearchIcon from 'components/icons/search-icon'

const meta = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    value: '',
    placeholder: 'Search',
    onChange: () => undefined,
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ width: 320 }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

const StatefulInput = (args: ComponentProps<typeof Input>) => {
  const [value, setValue] = useState(args.value)

  return <Input {...args} value={value} onChange={setValue} />
}

export const Default: Story = {
  render: (args) => <StatefulInput {...args} />,
}

export const WithIcon: Story = {
  args: {
    Icon: SearchIcon,
    placeholder: 'Search documentation',
  },
  render: (args) => <StatefulInput {...args} />,
}

export const WithValue: Story = {
  args: {
    value: 'checkout',
    Icon: SearchIcon,
  },
  render: (args) => <StatefulInput {...args} />,
}
