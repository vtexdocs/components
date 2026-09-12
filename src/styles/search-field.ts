import type { SxStyleProp } from '@vtex/brand-ui'

export const searchFieldShell: SxStyleProp = {
  alignItems: 'center',
  justifyContent: 'center',
  paddingLeft: '12px',
  paddingRight: '8px',
  height: '40px',
  boxSizing: 'border-box',
  background: '#FFFFFF',
  border: '1px solid #E7E9EE',
  borderRadius: '8px',
  transition:
    'background 0.2s ease-out, border-color 0.2s ease-out, box-shadow 0.2s ease-out',
  cursor: 'text',
  input: {
    fontFamily: 'inherit',
  },
  'input::placeholder': {
    color: '#5E6E84',
  },
  'input[type="search"]::-webkit-search-cancel-button': {
    display: 'none',
  },
  'input[type="search"]::-webkit-search-decoration': {
    display: 'none',
  },
  ':hover': {
    borderColor: '#C7CDD6',
  },
  ':focus-within': {
    background: '#FFFFFF',
    borderColor: '#E31C58',
    boxShadow: '0 0 0 3px rgba(227, 28, 88, 0.16)',
  },
}

export const searchFieldInput: SxStyleProp = {
  width: '100%',
  background: 'transparent',
  border: 'none',
  outline: 'none',
  color: '#142032',
  fontSize: '14px',
  lineHeight: '20px',
  flex: 1,
  minWidth: 0,
  appearance: 'none',
  WebkitAppearance: 'none',
}

export const searchFieldIcon: SxStyleProp = {
  minWidth: '16px',
  minHeight: '16px',
  width: '16px',
  mr: '8px',
  flex: 0,
  maxWidth: 'fit-content',
  color: '#5E6E84',
  path: {
    fill: '#5E6E84',
  },
}

export const searchFieldClearButton: SxStyleProp = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '24px',
  height: '24px',
  ml: '4px',
  padding: 0,
  border: 'none',
  borderRadius: '50%',
  background: 'transparent',
  color: '#4A596B',
  cursor: 'pointer',
  flexShrink: 0,
  ':hover': {
    background: '#EDEDED',
    color: '#142032',
  },
}
