import type { IconProps } from '@vtex/brand-ui'
import { Icon } from '@vtex/brand-ui'

const MarkdownIcon = (props: IconProps) => (
  <Icon
    {...props}
    viewBox="0 0 208 128"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      width="198"
      height="118"
      x="5"
      y="5"
      rx="10"
      stroke="currentColor"
      strokeWidth="10"
    />
    <path
      fill="currentColor"
      d="M30 98V30h20l20 25 20-25h20v68H90V59L70 84 50 59v39zm125 0l-30-33h20V30h20v35h20z"
    />
  </Icon>
)

export default MarkdownIcon
