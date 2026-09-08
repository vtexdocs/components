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

const drawerWidth = ['100%', '280px', '280px']
const panelWidth = ['100vw', '280px', '280px']

const hamburgerContainer: SxStyleProp = {
  display: ['flex', 'flex', 'flex', 'none'],
  position: 'fixed',
  top: ['5rem', 0, 0],
  right: 0,
  bottom: 0,
  left: 0,
  marginTop: 0,
  paddingBottom: 0,
  width: '100%',
  height: ['calc(100vh - 5rem)', '100vh', '100vh'],
  flexDirection: 'column',
  alignItems: ['stretch', 'flex-start', 'flex-start'],
  justifyContent: 'flex-start',
  backgroundColor: ['#FFFFFF', 'transparent', 'transparent'],
  zIndex: [9998, 10000, 10000],
  overflow: 'hidden',
  '.menuHidden': {
    transform: 'translateX(-100%)',
  },
}

const backdrop: SxStyleProp = {
  display: ['none', 'block', 'block'],
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundColor: 'rgba(20, 32, 50, 0.45)',
  backdropFilter: 'blur(4px)',
  WebkitBackdropFilter: 'blur(4px)',
  cursor: 'pointer',
}

const innerHambugerContainer: SxStyleProp = {
  padding: '0px',
  paddingY: 0,
  position: 'relative',
  zIndex: 1,
  overflowX: 'hidden',
  overflowY: 'hidden',
  width: drawerWidth,
  maxWidth: drawerWidth,
  height: '100%',
  flexShrink: 0,
  backgroundColor: '#FFFFFF',
  boxShadow: [
    'none',
    '4px 0 24px rgba(20, 32, 50, 0.18)',
    '4px 0 24px rgba(20, 32, 50, 0.18)',
  ],
}

const menuContainer: SxStyleProp = {
  display: 'flex',
  width: 'max-content',
  height: '100%',
}

const cardContainer: SxStyleProp = {
  display: 'flex',
  flexDirection: 'column',
  width: panelWidth,
  overflowY: 'scroll',
  height: ['calc(100vh - 5rem)', '100vh', '100vh'],
  paddingBottom: 'env(safe-area-inset-bottom, 0px)',
}

const sideMenuContainer: SxStyleProp = {
  backgroundColor: '#ffff',
  height: ['calc(100vh - 5rem)', '100vh', '100vh'],
  width: panelWidth,
  overflow: 'hidden',
  transform: 'translate(0)',
  transition: 'transform .5s cubic-bezier(.4,0,.2,1)',
}

const documentationContainer: SxStyleProp = {
  px: '8px',
  pt: ['12px', '24px', '24px'],
  pb: '12px',
}

const updatesContainer: SxStyleProp = {
  px: '8px',
  py: '12px',
  borderRadius: '0px 0px 8px 8px',
  borderTop: '1px solid #E7E9EE',
}

const innerCardContainer: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '8px',
  minHeight: '72px',
  width: '100%',
  maxWidth: '100%',
  overflow: 'hidden',
  borderRadius: '12px',
  px: '16px',
  py: '14px',
  ':hover, :active': {
    backgroundColor: '#F8F7FC',
  },
}

const innerCardContent: SxStyleProp = {
  flex: 1,
  minWidth: 0,
  overflow: 'hidden',
}

const arrowIcon: SxStyleProp = {
  padding: '0',
  height: '40px',
  width: '40px',
  minWidth: '40px',
  flexShrink: 0,
  color: '#A1A8B3',
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
  backdrop,
  innerHambugerContainer,
  innerCardContainer,
  innerCardContent,
  arrowIcon,
  arrowIconActive,
}
