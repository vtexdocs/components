import type { IconProps } from '@vtex/brand-ui'
import { Icon } from '@vtex/brand-ui'

const CheckIcon = (props: IconProps) => (
  <Icon
    {...props}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.333 4L6 11.333 2.667 8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
)

export default CheckIcon
