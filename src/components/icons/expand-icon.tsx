import type { IconProps } from '@vtex/brand-ui'
import { Icon } from '@vtex/brand-ui'

const ExpandIcon = (props: IconProps) => (
  <Icon
    {...props}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.5 2.5H13.5V6.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.5 13.5H2.5V9.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.5 2.5L9 7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.5 13.5L7 9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
)

export default ExpandIcon
