import type { IconProps } from '@vtex/brand-ui'
import { Icon } from '@vtex/brand-ui'

const SendIcon = (props: IconProps) => (
  <Icon
    {...props}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 12.5V3.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.5 8L8 3.5L12.5 8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
)

export default SendIcon
