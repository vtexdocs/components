import type { IconProps } from '@vtex/brand-ui'
import { Icon } from '@vtex/brand-ui'

const CollapseIcon = (props: IconProps) => (
  <Icon
    {...props}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.5 6.5H9.5V2.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.5 9.5H6.5V13.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.5 6.5L14 2"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.5 9.5L2 14"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
)

export default CollapseIcon
