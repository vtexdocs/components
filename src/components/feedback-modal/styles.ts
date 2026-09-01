import { SxStyleProp } from '@vtex/brand-ui'

const wrapContainer: SxStyleProp = {
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(20, 32, 50, 0.45)',
  backdropFilter: 'blur(4px)',
  WebkitBackdropFilter: 'blur(4px)',
  display: 'flex',
  alignItems: ['flex-end', 'center'],
  justifyContent: 'center',
  zIndex: 20000,
  padding: ['0', '24px'],
  overscrollBehavior: 'contain',
}

const innerContainer: SxStyleProp = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#FFFFFF',
  borderRadius: ['20px 20px 0 0', '20px'],
  boxShadow: '0 16px 48px rgba(20, 32, 50, 0.24)',
  maxWidth: '520px',
  width: '100%',
  maxHeight: ['92vh', 'min(80vh, 720px)'],
  overflow: 'hidden',
  position: 'relative',
}

const header: SxStyleProp = {
  flexShrink: 0,
  px: ['20px', '24px'],
  pt: ['20px', '24px'],
  pb: '16px',
  borderBottom: '1px solid #E7E9EE',
}

const headerTop: SxStyleProp = {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: '12px',
}

const modalButton: SxStyleProp = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  width: '32px',
  height: '32px',
  mt: '-4px',
  mr: '-4px',
  p: 0,
  background: 'transparent',
  border: 'none',
  borderRadius: '8px',
  color: '#4A596B',
  cursor: 'pointer',
  transition: 'background 0.15s ease, color 0.15s ease',
  ':hover': {
    background: '#F4F4F5',
    color: '#142032',
  },
  ':focus-visible': {
    outline: '2px solid #E31C58',
    outlineOffset: '2px',
  },
}

const modalTitle: SxStyleProp = {
  fontSize: ['18px', '20px'],
  fontWeight: '600',
  lineHeight: ['24px', '28px'],
  letterSpacing: '-0.02em',
  color: '#142032',
  pr: '8px',
}

const modalDescription: SxStyleProp = {
  mt: '6px',
  color: '#4A596B',
  fontSize: '14px',
  lineHeight: '20px',
}

const body: SxStyleProp = {
  flex: 1,
  minHeight: 0,
  overflowY: 'auto',
  px: ['20px', '24px'],
  py: ['20px', '24px'],
}

const form: SxStyleProp = {
  display: 'grid',
  gap: '16px',
}

const field: SxStyleProp = {
  display: 'grid',
  gap: '6px',
  minWidth: 0,
}

const row: SxStyleProp = {
  display: 'grid',
  gridTemplateColumns: ['1fr', '1fr 1fr'],
  gap: '12px',
}

const label: SxStyleProp = {
  fontSize: '13px',
  fontWeight: '600',
  lineHeight: '18px',
  color: '#142032',
}

const requiredMark: SxStyleProp = {
  color: '#E31C58',
}

const control: SxStyleProp = {
  width: '100%',
  minWidth: 0,
  boxSizing: 'border-box',
  padding: '10px 12px',
  border: '1px solid #E7E9EE',
  borderRadius: '8px',
  background: '#FFFFFF',
  color: '#142032',
  fontFamily: 'inherit',
  fontSize: '14px',
  lineHeight: '20px',
  outline: 'none',
  transition:
    'border-color 0.15s ease, box-shadow 0.15s ease, background 0.15s ease',
  '::placeholder': {
    color: '#A1A8B3',
  },
  ':hover': {
    borderColor: '#C7CDD6',
  },
  ':focus': {
    borderColor: '#E31C58',
    boxShadow: '0 0 0 3px rgba(227, 28, 88, 0.16)',
  },
}

const input: SxStyleProp = {
  ...control,
  height: '40px',
}

const inputMuted: SxStyleProp = {
  ...input,
  background: '#FAFAFB',
  color: '#4A596B',
  fontSize: '13px',
}

const textarea: SxStyleProp = {
  ...control,
  minHeight: '120px',
  resize: 'vertical',
}

const dropdownMenu: SxStyleProp = {
  ...input,
  appearance: 'none',
  WebkitAppearance: 'none',
  cursor: 'pointer',
  paddingRight: '36px',
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='M4 6l4 4 4-4' stroke='%234A596B' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 12px center',
}

const actions: SxStyleProp = {
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
  justifyContent: 'flex-end',
  pt: '8px',
}

const cancelButton: SxStyleProp = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '40px',
  px: '16px',
  background: 'transparent',
  color: '#4A596B',
  border: '1px solid #E7E9EE',
  borderRadius: '8px',
  cursor: 'pointer',
  fontFamily: 'inherit',
  fontSize: '14px',
  fontWeight: '600',
  lineHeight: '20px',
  transition:
    'background 0.15s ease, color 0.15s ease, border-color 0.15s ease',
  ':hover': {
    background: '#F8F7FC',
    color: '#142032',
    borderColor: '#C7CDD6',
  },
  ':focus-visible': {
    outline: '2px solid #E31C58',
    outlineOffset: '2px',
  },
}

const submitButton: SxStyleProp = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '40px',
  px: '16px',
  background: '#142032',
  color: '#FFFFFF',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontFamily: 'inherit',
  fontSize: '14px',
  fontWeight: '600',
  lineHeight: '20px',
  transition: 'background 0.15s ease, opacity 0.15s ease',
  ':hover': {
    background: '#000711',
  },
  ':disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
  ':focus-visible': {
    outline: '2px solid #142032',
    outlineOffset: '2px',
  },
}

const feedbackErrorText: SxStyleProp = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '8px',
  padding: '12px 14px',
  background: '#FFF6F4',
  border: '1px solid #F8D0C8',
  borderRadius: '8px',
  color: '#8A1F11',
  fontSize: '13px',
  lineHeight: '18px',
}

const errorIcon: SxStyleProp = {
  flexShrink: 0,
  width: '16px',
  height: '16px',
  mt: '1px',
  color: '#D44333',
}

const successState: SxStyleProp = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  py: ['16px', '24px'],
  px: '8px',
  gap: '12px',
}

const successIconWrap: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  background: '#F0FAF4',
  color: '#36875A',
}

const successTitle: SxStyleProp = {
  fontSize: '16px',
  fontWeight: '600',
  lineHeight: '22px',
  color: '#142032',
  maxWidth: '320px',
}

export default {
  wrapContainer,
  innerContainer,
  header,
  headerTop,
  modalButton,
  modalTitle,
  modalDescription,
  body,
  form,
  field,
  row,
  label,
  requiredMark,
  input,
  inputMuted,
  textarea,
  dropdownMenu,
  actions,
  cancelButton,
  submitButton,
  feedbackErrorText,
  errorIcon,
  successState,
  successIconWrap,
  successTitle,
}
