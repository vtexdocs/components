import type { SxStyleProp } from '@vtex/brand-ui'

type StyleFn = (opts?: { small?: boolean }) => SxStyleProp

const container: StyleFn = ({ small } = {}) => ({
  alignItems: 'center',
  gap: '4px',
  fontSize: small ? '12px' : '16px',
  lineHeight: '22px',
  color: '#4A596B !important',
  display: 'flex',
  ':hover': {
    color: '#000711 !important',
    cursor: 'pointer',
  },
})

const icon: SxStyleProp = {
  flexShrink: 0,
}

export default { container, icon }
