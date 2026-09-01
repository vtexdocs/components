import type { SxStyleProp } from '@vtex/brand-ui'

const muted = '#A1AAB7'
const mutedHover = '#5E6E84'
const pink = '#E31C58'

const tooltipWrapper: SxStyleProp = {
  display: 'inline-flex',
  verticalAlign: 'middle',
  position: 'relative',
  lineHeight: 0,
}

const button: SxStyleProp = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  ml: '8px',
  p: 0,
  border: 'none',
  background: 'transparent',
  color: muted,
  cursor: 'pointer',
  verticalAlign: 'middle',
  lineHeight: 0,
  userSelect: 'none',
  transition: 'color 0.15s ease',
  ':hover': {
    color: mutedHover,
  },
  ':focus-visible': {
    outline: `2px solid ${pink}`,
    outlineOffset: '2px',
    borderRadius: '2px',
  },
}

const buttonCopied: SxStyleProp = {
  ...button,
  color: mutedHover,
}

export default { tooltipWrapper, button, buttonCopied }
