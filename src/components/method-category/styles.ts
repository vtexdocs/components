import { SxStyleProp } from '@vtex/brand-ui'

const container: SxStyleProp = {
  border: '1px solid #DDDDDD',
  borderRadius: '6px',
  boxSizing: 'border-box',
  width: '24px',
  minWidth: '24px',
  height: '24px',
  minHeight: '24px',
  flexShrink: 0,
  alignItems: 'center',
  justifyContent: 'center',
  px: 0,
}

const text: SxStyleProp = {
  fontWeight: '600',
  fontSize: '11px',
  lineHeight: '14px',
  letterSpacing: '0.02em',
  whiteSpace: 'nowrap',
}

const filled: SxStyleProp = {
  border: 'none',
  borderRadius: '4px',
  width: '48px',
  minWidth: '48px',
  maxWidth: '48px',
  height: '20px',
  minHeight: '20px',
  px: '3px',
}

const closeIcon: SxStyleProp = {
  minWidth: '12px',
  minHeight: '12px',
  height: '12px',
  width: '12px',
  ml: '4px',
}

export default {
  container,
  filled,
  text,
  closeIcon,
}
