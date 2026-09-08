import type { SxStyleProp } from '@vtex/brand-ui'
import type { CSSProperties } from 'react'

const wrapper: SxStyleProp = {
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  my: '16px',
}

const container: SxStyleProp = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '8px',
}

const input: CSSProperties = {
  width: '280px',
  height: '40px',
  padding: '0 12px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  fontSize: '14px',
  boxSizing: 'border-box',
  transition: 'border-color 0.3s ease-out',
}

const inputError: CSSProperties = {
  borderColor: '#E31C58',
  outline: 'none',
}

const button: CSSProperties = {
  height: '40px',
  padding: '0 16px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  fontSize: '14px',
  background: 'transparent',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  transition: 'all 0.3s ease-out',
}

const buttonHover: CSSProperties = {
  background: '#F8F7FC',
  borderColor: '#5E6E84',
  color: '#E31C58',
}

const errorText: SxStyleProp = {
  fontSize: '12px',
  color: '#E31C58',
}

export default {
  wrapper,
  container,
  input,
  inputError,
  button,
  buttonHover,
  errorText,
}
