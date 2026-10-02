import { SxStyleProp } from '@vtex/brand-ui'

type StyleFn = (opts?: { small?: boolean }) => SxStyleProp

const wrapper: StyleFn = () => ({
  width: '100%',
  flexDirection: 'column',
})

const container: StyleFn = ({ small } = {}) => ({
  width: '100%',
  flexDirection: small ? 'column' : ['column', 'row'],
  alignItems: small ? 'flex-start' : 'center',
  alignContent: ['initial', 'space-between'],
  justifyContent: ['initial', 'space-between'],
  marginTop: small ? '0px' : '32px',
  marginBottom: small ? '0px' : '16px',
  gap: small ? '8px' : '0px',
})

const question: StyleFn = ({ small } = {}) => ({
  fontSize: small ? '12px' : '16px',
  lineHeight: '18px',
  color: '#4A596B',
})

const iconsContainer: StyleFn = ({ small } = {}) => ({
  display: 'flex',
  alignItems: 'center',
  gap: small ? '0px' : '4px',
  ml: small ? '3px' : '6px',
})

const likeContainer: SxStyleProp = {
  paddingBottom: ['16px', '0'],
  borderBottom: ['1px solid #E7E9EE', 'none'],
  mt: ['8px', '0'],
  mb: ['16px', '0'],
  width: ['100%', 'auto'],
  justifyContent: ['center', 'initial'],
  alignItems: 'center',
}

const likeIcon: SxStyleProp = {
  mr: '2px',
}

const dislikeIcon: SxStyleProp = {
  mr: '2px',
  transform: 'rotateX(180deg) rotateY(180deg)',
}

const button: SxStyleProp = {
  ':hover': {
    cursor: 'pointer',
    color: '#000711',
    'svg > path': {
      stroke: '#000711',
    },
  },
}

const buttonActive: SxStyleProp = {
  cursor: 'pointer',
  color: '#000711',
  'svg > path': {
    stroke: '#000711',
  },
}

const selectedButton: SxStyleProp = {
  color: 'muted.1',
}

const disabled: SxStyleProp = {
  display: 'none !important',
}

const shareButton: SxStyleProp = {}

const panelControl: SxStyleProp = {
  width: '100%',
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

const panel: StyleFn = ({ small } = {}) => ({
  width: '100%',
  marginTop: small ? '8px' : '12px',
  padding: small ? '12px' : '16px',
  border: '1px solid #E7E9EE',
  borderRadius: '8px',
  background: '#FAFAFB',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
})

const panelForm: SxStyleProp = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
}

const panelTextarea: SxStyleProp = {
  ...panelControl,
  minHeight: '80px',
  resize: 'vertical',
}

const panelEmailInput: SxStyleProp = {
  ...panelControl,
  height: '38px',
}

const panelActions: SxStyleProp = {
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
  justifyContent: 'flex-end',
}

const panelSkipButton: SxStyleProp = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '36px',
  px: '14px',
  background: 'transparent',
  color: '#4A596B',
  border: '1px solid #E7E9EE',
  borderRadius: '8px',
  cursor: 'pointer',
  fontFamily: 'inherit',
  fontSize: '13px',
  fontWeight: '600',
  ':hover': {
    background: '#F8F7FC',
    color: '#142032',
  },
}

const panelSendButton: SxStyleProp = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '36px',
  px: '14px',
  background: '#142032',
  color: '#FFFFFF',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontFamily: 'inherit',
  fontSize: '13px',
  fontWeight: '600',
  transition: 'background 0.15s ease, opacity 0.15s ease',
  ':hover': {
    background: '#000711',
  },
  ':disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
}

const panelSuccess: SxStyleProp = {
  alignItems: 'center',
  gap: '8px',
}

const panelSuccessIcon: SxStyleProp = {
  flexShrink: 0,
  color: '#36875A',
}

const panelSuccessText: SxStyleProp = {
  fontSize: '13px',
  color: '#142032',
}

const panelErrorText: SxStyleProp = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '8px',
  padding: '10px 12px',
  background: '#FFF6F4',
  border: '1px solid #F8D0C8',
  borderRadius: '8px',
  color: '#8A1F11',
  fontSize: '13px',
  lineHeight: '18px',
}

const panelErrorIcon: SxStyleProp = {
  flexShrink: 0,
  width: '16px',
  height: '16px',
  mt: '1px',
  color: '#D44333',
}

export default {
  disabled,
  wrapper,
  container,
  question,
  likeContainer,
  likeIcon,
  dislikeIcon,
  button,
  buttonActive,
  selectedButton,
  shareButton,
  iconsContainer,
  panel,
  panelForm,
  panelTextarea,
  panelEmailInput,
  panelActions,
  panelSkipButton,
  panelSendButton,
  panelSuccess,
  panelSuccessIcon,
  panelSuccessText,
  panelErrorText,
  panelErrorIcon,
}
