import type { IconProps } from '@vtex/brand-ui'
import { Icon } from '@vtex/brand-ui'

const NewChatIcon = (props: IconProps) => (
  <Icon
    {...props}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 2.5H4.5A2 2 0 0 0 2.5 4.5v7A2 2 0 0 0 4.5 13.5h7a2 2 0 0 0 2-2V8"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.15 2.4a1.05 1.05 0 0 1 1.45 1.45L8.2 9.25c-.16.16-.36.27-.58.33l-1.92.56a.33.33 0 0 1-.41-.41l.56-1.92c.06-.22.17-.42.33-.58z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
)

export default NewChatIcon
