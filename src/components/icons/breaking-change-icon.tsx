import type { IconProps } from '@vtex/brand-ui'
import { Icon } from '@vtex/brand-ui'

const BreakingChangeIcon = (props: IconProps) => (
  <Icon
    {...props}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="8" cy="8" r="8" fill="#FFF3DA" />
    <path
      d="M9.2 3.4 6 8.25h2.05L6.85 12.6l3.4-5.05H8.15L9.2 3.4Z"
      fill="#D77809"
      stroke="#D77809"
      strokeWidth="0.6"
      strokeLinejoin="round"
    />
  </Icon>
)

export default BreakingChangeIcon
