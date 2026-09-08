import type { IconProps } from '@vtex/brand-ui'
import { Icon } from '@vtex/brand-ui'

const HistoryIcon = (props: IconProps) => (
  <Icon
    {...props}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.2 5A5.5 5.5 0 1 1 2.5 8"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <path
      d="M3.2 2.4V5.2H6"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 5.4V8.2L10 9.3"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
)

export default HistoryIcon
