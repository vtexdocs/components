import type { IconProps } from '@vtex/brand-ui'
import { Icon } from '@vtex/brand-ui'

const BookIcon = (props: IconProps) => (
  <Icon
    {...props}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.5 3.25c0-.414.336-.75.75-.75H8v10.5H3.25a.75.75 0 0 1-.75-.75V3.25Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <path
      d="M13.5 3.25c0-.414-.336-.75-.75-.75H8v10.5h4.75a.75.75 0 0 0 .75-.75V3.25Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <path
      d="M8 2.5v10.5"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </Icon>
)

export default BookIcon
