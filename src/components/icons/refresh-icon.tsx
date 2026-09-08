import type { IconProps } from '@vtex/brand-ui'
import { Icon } from '@vtex/brand-ui'

const RefreshIcon = (props: IconProps) => (
  <Icon
    {...props}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.5 8A5.5 5.5 0 1 1 11.4 3.35"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.5 2.5V6H10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
)

export default RefreshIcon
