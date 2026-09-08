import type { SxStyleProp } from '@vtex/brand-ui'

const trigger: SxStyleProp = {
  display: ['flex', 'flex', 'flex', 'none'],
  alignItems: 'center',
  justifyContent: 'center',
  width: '56px',
  minWidth: '56px',
  height: '100%',
  padding: 0,
  border: 'none',
  background: 'transparent',
  color: '#4A596B',
  cursor: 'pointer',
  flexShrink: 0,
  'svg path': {
    fill: '#4A596B',
  },
  ':hover': {
    color: '#4A596B',
    'svg path': {
      fill: '#4A596B',
    },
  },
}

const overlay: SxStyleProp = {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 10000,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  padding: '16px',
  background: 'rgba(20, 32, 50, 0.45)',
  backdropFilter: 'blur(4px)',
  WebkitBackdropFilter: 'blur(4px)',
  overscrollBehavior: 'contain',
}

const card: SxStyleProp = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '560px',
  maxHeight: 'min(80vh, 640px)',
  marginTop: '8px',
  background: '#FFFFFF',
  borderRadius: '20px',
  boxShadow: '0 16px 48px rgba(20, 32, 50, 0.24)',
  overflow: 'hidden',
}

export default {
  trigger,
  overlay,
  card,
}
