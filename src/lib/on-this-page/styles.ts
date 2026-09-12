import type { SxStyleProp } from '@vtex/brand-ui'

const INK = '#142032'
const MUTED = '#4A596B'
const BORDER = '#E7E9EE'
const BORDER_HOVER = '#D8D8E3'
const SURFACE = '#FFFFFF'
const SURFACE_HOVER = '#F8F7FC'
const PINK = '#E31C58'
const OVERLAY = 'rgba(20, 32, 50, 0.28)'
const SHADOW_BUTTON =
  '0 8px 24px rgba(20, 32, 50, 0.12), 0 1px 2px rgba(20, 32, 50, 0.06)'

const focusRing: SxStyleProp = {
  ':focus-visible': {
    outline: `2px solid ${PINK}`,
    outlineOffset: '2px',
  },
}

const overlay: SxStyleProp = {
  display: ['block', 'block', 'block', 'block', 'none'],
  position: 'fixed',
  inset: 0,
  backgroundColor: OVERLAY,
  backdropFilter: 'blur(2px)',
  WebkitBackdropFilter: 'blur(2px)',
  zIndex: 10000,
}

const container = (hidden = false): SxStyleProp => ({
  position: 'fixed',
  right: 'calc(16px + var(--ask-assistant-fab-offset, 0px))',
  bottom: 'calc(16px + env(safe-area-inset-bottom, 0px))',
  zIndex: 10001,
  display: ['flex', 'flex', 'flex', 'flex', 'none'],
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: '10px',
  maxWidth:
    'min(320px, calc(100vw - 32px - var(--ask-assistant-fab-offset, 0px)))',
  opacity: hidden ? 0 : 1,
  visibility: hidden ? 'hidden' : 'visible',
  pointerEvents: 'none',
  transform: hidden ? 'translateY(10px)' : 'none',
  transition:
    'right 0.2s ease, max-width 0.2s ease, transform 0.2s ease, opacity 0.2s ease, visibility 0.2s ease',
  '> *': {
    pointerEvents: hidden ? 'none' : 'auto',
  },
})

const panelSlot: SxStyleProp = {
  width: '100%',
  filter:
    'drop-shadow(0 16px 28px rgba(20, 32, 50, 0.14)) drop-shadow(0 2px 6px rgba(20, 32, 50, 0.06))',
}

const panel: SxStyleProp = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxHeight: 'min(60dvh, 420px)',
  padding: '12px 8px 12px',
  borderRadius: '16px',
  backgroundColor: SURFACE,
  border: `1px solid ${BORDER}`,
  overflow: 'hidden',
}

const panelBody: SxStyleProp = {
  overflowY: 'auto',
  overscrollBehavior: 'contain',
  WebkitOverflowScrolling: 'touch',
  px: '8px',
  pb: '4px',
  '[data-cy="table-of-contents"]': {
    position: 'static',
    top: 'auto',
  },
  '[data-cy="table-of-contents"] > div:last-of-type': {
    mb: 0,
  },
}

const button: SxStyleProp = {
  appearance: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  height: '44px',
  px: '12px',
  m: 0,
  border: `1px solid ${BORDER}`,
  borderRadius: '999px',
  backgroundColor: SURFACE,
  boxShadow: SHADOW_BUTTON,
  color: INK,
  cursor: 'pointer',
  fontFamily: 'inherit',
  ':hover': {
    backgroundColor: SURFACE_HOVER,
    borderColor: BORDER_HOVER,
  },
  '&[aria-expanded="true"]': {
    borderColor: BORDER_HOVER,
    backgroundColor: SURFACE_HOVER,
  },
  ...focusRing,
}

const iconWrap: (open: boolean) => SxStyleProp = (open) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '24px',
  height: '24px',
  flexShrink: 0,
  borderRadius: '999px',
  backgroundColor: open ? '#FFE0EF' : SURFACE_HOVER,
  color: open ? PINK : MUTED,
})

const title: SxStyleProp = {
  color: INK,
  fontSize: '13px',
  fontWeight: '600',
  lineHeight: '16px',
  letterSpacing: '-0.01em',
  whiteSpace: 'nowrap',
}

const caret: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: MUTED,
  flexShrink: 0,
}

export default {
  overlay,
  container,
  panelSlot,
  panel,
  panelBody,
  button,
  iconWrap,
  title,
  caret,
}
