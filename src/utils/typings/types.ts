import { IconProps } from '@vtex/brand-ui'

export type Section = {
  id: string
  link: string
  title: string
  description: string
  Icon: (props: IconProps) => JSX.Element
  isExternalLink?: boolean
}

export type MethodType = 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH'

export type DataElement = {
  link: string
  Icon: IconComponent
  description: string
}

export type IconComponent = (props: IconProps) => JSX.Element
