import { SxStyleProp } from '@vtex/brand-ui'

const sidebarContainer: SxStyleProp = {
  position: 'relative',
  width: 'auto',
  height: 'inherit',
  minHeight: 0,
  overflow: 'visible',
  borderRight: '1px solid #E7E9EE',
  zIndex: '1',
  'body:has(.modal[data-open="true"]) &': {
    zIndex: 0,
  },
  left: '0',
  transition: 'all 0.3s ease-in-out',
  '.toggleIcon': {
    opacity: '0',
    transition: 'all 0.3s ease-out',
  },
  '.sidebarHide': {
    opacity: '0',
    transition: 'all 0.5s ease-out',
  },
  ':hover': {
    '.toggleIcon': {
      opacity: '100',
      transition: 'all 0.3s ease-out',
    },
  },
}

const sidebarContainerHamburger: SxStyleProp = {
  width: '100%',
  height: '100%',
  zIndex: '1',
}

const sidebarContainerBox: SxStyleProp = {
  opacity: '100',
  paddingTop: '34px',
  paddingBottom: '24px',
  width: '300px',
  overflowY: 'auto',
  height: 'inherit',
  maskImage:
    'linear-gradient(to top, transparent, black), linear-gradient(to left, transparent 17px, black 17px)',
  maskSize: '100% 20000px',
  maskPosition: 'left bottom',
  transition: 'mask-position 0.3s, -webkit-mask-position 0.3s',
  ':hover': {
    maskPosition: 'left top',
  },
}

const sidebarContainerBoxHamburger: SxStyleProp = {
  opacity: '100',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  background: '#FFFFFF',
  overflow: 'hidden',
}

const sidebarContainerBody: SxStyleProp = {
  px: '16px',
}

const sidebarContainerHeader: SxStyleProp = {
  px: '16px',
}

const sidebarContainerTitle: SxStyleProp = {
  alignItems: 'center',
  minHeight: '52px',
  padding: '4px 16px 4px 8px',
  borderBottom: '1px solid #E7E9EE',
  flexShrink: 0,
  position: 'sticky',
  top: 0,
  zIndex: 2,
  'body:has(.modal[data-open="true"]) &': {
    zIndex: 0,
  },
  background: '#FFFFFF',
  px: '16px',
}

const sidebarTitle: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
  fontSize: '16px',
  lineHeight: '18px',
}

const sidebarTitleHamburger: SxStyleProp = {
  flex: 1,
  minWidth: 0,
  fontSize: '16px',
  lineHeight: '24px',
  color: '#4a596b',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  pl: '8px',
}

const sidebarTitleIcon: SxStyleProp = {
  width: '24px',
  height: '24px',
  minWidth: '24px',
  flexShrink: 0,
  color: '#4A596B',
}

const sidebarContainerFilterHamburger: SxStyleProp = {
  px: '16px',
  pt: '16px',
  pb: 0,
  flexShrink: 0,
  background: '#FFFFFF',
}

const sidebarContainerBodyHamburger: SxStyleProp = {
  px: '8px',
  pt: '8px',
  pb: 'calc(24px + env(safe-area-inset-bottom, 0px))',
  flex: 1,
  minHeight: 0,
  overflowY: 'auto',
}

const sidebarHelpIcon: SxStyleProp = {
  ml: '4px',
  width: '24px',
  height: '24px',
}

const searchBox: SxStyleProp = {
  mt: '16px',
  mb: '20px',
  alignItems: 'center',
  borderRadius: '4px',
  background: '#F4F4F4',
  width: '265px',
  height: '40px',
  paddingLeft: '12px',
  paddingRight: '8px',
}

const searchInput: SxStyleProp = {
  width: 'auto',
  flex: '1',
  minWidth: 0,
  background: '#F4F4F4',
  border: '#F4F4F4',
  color: '#545454',
  fontSize: ['14px'],
  outline: 'none',
}

const searchIcon: SxStyleProp = {
  minWidth: '16px',
  minHeight: '16px',
  width: '16px',
  mr: '8px',
}

const clearButton: SxStyleProp = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '24px',
  height: '24px',
  ml: '4px',
  padding: 0,
  border: 'none',
  borderRadius: '50%',
  background: 'transparent',
  color: '#4A596B',
  cursor: 'pointer',
  flexShrink: 0,
  ':hover': {
    background: '#EDEDED',
    color: '#142032',
  },
}

const clearIcon: SxStyleProp = {
  width: '14px',
  height: '14px',
}

const toggleIconBox: SxStyleProp = {
  justifyContent: 'center',
  alignItems: 'center',
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  border: '1px solid #E7E9EE',
  background: '#FFFFFF',
  boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.1)',
  position: 'absolute',
  top: '32px',
  right: '-16px',
  cursor: 'pointer',
  zIndex: 3,
  'body:has(.modal[data-open="true"]) &': {
    zIndex: 0,
  },
}

const toggleIconBoxActive: SxStyleProp = {
  ...toggleIconBox,
  opacity: '100 !important',
}

const toggleIcon: SxStyleProp = {
  transform: 'scaleX(-1)',
}

const arrowButton: SxStyleProp = {
  padding: '0px',
  width: '40px',
  minWidth: '40px',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#4A596B',
  flexShrink: 0,
}

const previewMode: SxStyleProp = {
  display: 'flex',
  color: '#A87600',
  backgroundColor: '#ffe5b5',
  padding: '10px',
  borderRadius: '10px',
  fontWeight: '600',
  fontSize: '14px',
  lineHeight: '20px',
  letterSpacing: '0.5px',
  mb: '20px',
  svg: {
    width: '20px',
    mr: '10px',
  },
}

export default {
  sidebarContainer,
  sidebarContainerHamburger,
  sidebarContainerBox,
  sidebarContainerBoxHamburger,
  sidebarContainerBodyHamburger,
  sidebarContainerFilterHamburger,
  sidebarContainerBody,
  sidebarContainerHeader,
  sidebarContainerTitle,
  sidebarTitle,
  sidebarTitleHamburger,
  sidebarTitleIcon,
  sidebarHelpIcon,
  searchBox,
  searchInput,
  searchIcon,
  clearButton,
  clearIcon,
  toggleIconBox,
  toggleIconBoxActive,
  toggleIcon,
  arrowButton,
  previewMode,
}
