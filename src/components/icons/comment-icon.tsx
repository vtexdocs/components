import type { IconProps } from '@vtex/brand-ui'
import { Icon } from '@vtex/brand-ui'

const CommentIcon = (props: IconProps) => (
  <Icon
    {...props}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.5 2.5H2.5C1.94772 2.5 1.5 2.94772 1.5 3.5V10.5C1.5 11.0523 1.94772 11.5 2.5 11.5H4.5V14L8 11.5H13.5C14.0523 11.5 14.5 11.0523 14.5 10.5V3.5C14.5 2.94772 14.0523 2.5 13.5 2.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
)

export default CommentIcon
