import { SxStyleProp } from '@vtex/brand-ui'

const container: SxStyleProp = {
  px: '16px',
  pt: '8px',
  pb: '16px',
  mb: '16px',
  borderBottom: '1px solid #E7E9EE',
}

const containerHamburger: SxStyleProp = {
  px: 0,
  pt: 0,
  pb: '16px',
  mb: 0,
  borderBottom: '1px solid #E7E9EE',
}

const text: SxStyleProp = {
  mb: '10px',
}

const textHamburger: SxStyleProp = {
  mt: 0,
  mb: '10px',
  fontSize: '12px',
  lineHeight: '16px',
  letterSpacing: '0.02em',
  color: '#4A596B',
}

const methodsRow: SxStyleProp = {
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '8px',
}

const methodsRowHamburger: SxStyleProp = methodsRow

const methodButton: SxStyleProp = {
  flexShrink: 0,
}

const categoryHamburger: SxStyleProp = {
  mr: 0,
  px: '10px',
  height: '24px',
  minHeight: '24px',
  width: 'auto',
  minWidth: 'max-content',
  flexShrink: 0,
  cursor: 'pointer',
  borderRadius: '16px',
  ':hover': {
    border: '1px solid #D8D8E3',
  },
}

const clear: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
  color: 'muted.0',
  fontSize: '12px',
  lineHeight: '16px',
  whiteSpace: 'nowrap',
  flexShrink: 0,
  cursor: 'pointer',
  ':hover': {
    color: '#000711',
  },
}

export default {
  container,
  containerHamburger,
  text,
  textHamburger,
  methodsRow,
  methodsRowHamburger,
  methodButton,
  categoryHamburger,
  clear,
}
