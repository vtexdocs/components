import { SxStyleProp } from '@vtex/brand-ui'

type StyleFn = (opts?: { small?: boolean }) => SxStyleProp

const container: StyleFn = ({ small } = {}) => ({
  width: '100%',
  paddingBottom: '16px',
  borderBottom: small ? 'none' : ['none', '1px solid #E7E9EE'],
  flexDirection: small ? 'column' : ['column', 'row'],
  alignItems: small ? 'flex-start' : 'center',
  alignContent: ['initial', 'space-between'],
  justifyContent: ['initial', 'space-between'],
  marginTop: small ? '0px' : '32px',
  marginBottom: '16px',
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
  gap: small ? '2px' : '4px',
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

const box: StyleFn = ({ small } = {}) => ({
  alignItems: 'center',
  color: 'muted.0',
  fontSize: small ? '12px' : '16px',
  lineHeight: '22px',
})

const editContainer: StyleFn = ({ small } = {}) => ({
  ...box({ small }),
  ...button,
  ':hover': {
    color: '#000711 !important',
  },
  // ml: ['0', 'auto'],
  color: '#4A596B !important',
  display: 'flex',
})

const editIcon: SxStyleProp = { mr: '4px' }

const shareButton: SxStyleProp = {
  // ml: ['0', 'auto'],
}

export default {
  container,
  question,
  likeContainer,
  likeIcon,
  dislikeIcon,
  editContainer,
  editIcon,
  box,
  button,
  buttonActive,
  selectedButton,
  shareButton,
  iconsContainer,
}
