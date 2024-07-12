import type { IconProps } from '@vtex/brand-ui'
import { Icon } from '@vtex/brand-ui'

const ShareIcon = (props: IconProps) => (
  <Icon
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m0 0h24v24h-24z" opacity="0" stroke="currentColor"/>
    <path d="m18 15a3 3 0 0 0 -2.1.86l-7.9-3.52c0-.12 0-.22 0-.34s0-.22 0-.33l7.9-3.53a3 3 0 1 0 -.9-2.14v.34l-7.9 3.52a3 3 0 1 0 0 4.28l7.9 3.53v.33a3 3 0 1 0 3-3z" fill="currentColor"/>
  </Icon>
)

export default ShareIcon

