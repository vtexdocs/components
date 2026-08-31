import type { SxStyleProp } from '@vtex/brand-ui'

const headerActions: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  marginLeft: 'auto',
  height: '100%',
  width: 'auto',
  minWidth: 'auto',
  maxWidth: 'none',
  flex: '0 0 auto',
  color: '#4A596B',
  'button[role="presentation"]': {
    display: ['flex', 'flex', 'flex', 'none'],
    alignItems: 'center',
    justifyContent: 'center',
    color: '#4A596B',
    border: 'none',
    borderLeft: 'none',
    outline: 'none',
    width: '56px',
    minWidth: '56px',
    maxWidth: '56px',
    height: '100%',
    padding: 0,
    background: 'transparent',
    cursor: 'pointer',
    flexShrink: 0,
    '> div': {
      color: '#4A596B',
    },
    svg: {
      color: '#4A596B',
      rect: {
        fill: '#4A596B',
      },
    },
    ':hover, :focus, :active': {
      color: '#4A596B',
      background: 'transparent',
      '> div': {
        color: '#4A596B',
      },
      svg: {
        color: '#4A596B',
        rect: {
          fill: '#4A596B',
        },
      },
    },
  },
}

const hamburgerContainer: SxStyleProp = {
  display: ['flex', 'flex', 'flex', 'none'],
  position: 'fixed',
  top: '5rem',
  right: 0,
  bottom: 0,
  left: 0,
  marginTop: 0,
  paddingBottom: 0,
  width: '100%',
  height: 'calc(100vh - 5rem)',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  backgroundColor: '#FFFFFF',
  zIndex: 9998,
  overflow: 'hidden',
  '.menuHidden': {
    transform: 'translateX(-100%)',
  },
}

const menuContainer: SxStyleProp = {
  display: 'flex',
  width: 'max-content',
}

const cardContainer: SxStyleProp = {
  display: 'flex',
  flexDirection: 'column',
  width: '100vw',
  overflowY: 'scroll',
  height: 'calc(100vh - 5rem)',
}

const sideMenuContainer: SxStyleProp = {
  backgroundColor: '#ffff',
  height: 'calc(100vh - 5rem)',
  width: '100vw',
  overflowY: 'auto',
  overflowX: 'hidden',
  transform: 'translate(0)',
  transition: 'transform .5s cubic-bezier(.4,0,.2,1)',
}

const documentationContainer: SxStyleProp = {
  px: '16px',
  paddingBottom: '8px',
}

const updatesContainer: SxStyleProp = {
  px: '16px',
  paddingTop: '8px',
  borderRadius: '0px 0px 8px 8px',
  borderTop: '1px solid #E7E9EE',
}

const innerHambugerContainer: SxStyleProp = {
  padding: '0px',
  position: 'relative',
  overflowX: 'hidden',
}

const innerCardContainer: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}

const arrowIcon: SxStyleProp = {
  padding: '0',
  height: '50px',
  width: '50px',
  color: 'muted.1',
}

const arrowIconActive: SxStyleProp = {
  ...arrowIcon,
  color: '#D71D55',
}

export default {
  headerActions,
  menuContainer,
  cardContainer,
  sideMenuContainer,
  documentationContainer,
  updatesContainer,
  hamburgerContainer,
  innerHambugerContainer,
  innerCardContainer,
  arrowIcon,
  arrowIconActive,
}
