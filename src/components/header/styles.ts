import type { SxStyleProp } from '@vtex/brand-ui'

const navItem: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
  height: '36px',
  px: '10px',
  borderRadius: '6px',
  color: '#4A596B',
  transition: 'background-color 0.15s ease, color 0.15s ease',
  ':hover': {
    color: '#C81E51',
    backgroundColor: '#FFF3F6',
  },
}

const headerContainer: SxStyleProp = {
  position: 'sticky',
  top: 0,
  zIndex: 9999,
  width: '100%',
  transition: 'top 0.3s',
  'body:has(.modal[data-open="true"]) &': {
    zIndex: 0,
  },
  maxWidth: '2024px',
  mx: 'auto',
}

const headerBrand: SxStyleProp = {
  gridTemplateColumns: '1fr 1fr 0fr 1fr',
  width: '100%',
  position: 'relative',
  transition: 'top 0.3s',
  'button[role="presentation"]': {
    borderLeft: 'none',
    svg: {
      rect: {
        fill: '#4A596B',
      },
    },
  },
}

const hamburgerMenuToggle: SxStyleProp = {
  display: ['contents', 'contents', 'none', 'none'],
}

const extraRightLinks: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  position: 'relative',
}

const headerEndActions: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  gridArea: 'actionbutton',
  justifyContent: 'flex-end',
  borderLeft: ['none', 'none', '1px solid #E7E9EE', '1px solid #E7E9EE'],
}

const localeSwitcherSlot: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: ['56px', '56px', 'auto', 'auto'],
  minWidth: ['56px', '56px', 0, 0],
  paddingLeft: [0, 0, '12px', '12px'],
  paddingRight: [0, 0, '12px', '12px'],
  zIndex: 1,
  '& button': {
    borderLeft: 'none !important',
    padding: [
      '0 !important',
      '0 !important',
      '0 10px !important',
      '0 10px !important',
    ],
    width: ['100%', '100%', 'auto', 'auto'],
    height: ['100%', '100%', '36px !important', '36px !important'],
    justifyContent: 'center',
    lineHeight: 0,
    borderRadius: '6px',
    transition: 'background-color 0.15s ease, color 0.15s ease',
    ':hover': {
      backgroundColor: ['transparent', 'transparent', '#FFF3F6', '#FFF3F6'],
      color: '#C81E51',
    },
  },
}

const headerBrandLink: SxStyleProp = {
  width: 'fit-content',
  justifyContent: 'center',
  gridArea: 'brand',
  marginLeft: [4, 6, 6],
  marginBottom: 1,
  '> svg': {
    width: 'auto',
  },
}

const logoSize: SxStyleProp = {
  width: ['172px', '172px', '204px'],
  height: ['24px', '24px', '32px'],
}

const rightLinks: SxStyleProp = {
  display: ['none', 'none', 'flex !important', 'flex !important'],
  width: 'auto',
  height: '100%',
  alignItems: 'center',
  gap: '8px',
  pr: ['16px', '16px', '16px', '16px'],
  '> a': {
    marginX: '0 !important',
  },
}

const rightLinksItem: SxStyleProp = {
  ...navItem,
  display: ['none', 'none', 'none', 'flex'],
  justifyContent: 'center',
  width: '36px',
  px: '0 !important',
  svg: {
    mr: '0',
  },
  ':hover': {
    color: '#C81E51',
    backgroundColor: '#FFF3F6',
    'svg > path': {
      stroke: '#C81E51',
    },
  },
}

const dropdownContainer: SxStyleProp = {
  textTransform: 'none',
  justifyContent: 'flex-end',
  alignItems: 'center',
  height: 'calc(100% + 1px)',
  cursor: 'pointer',
  position: 'relative',
}

const dropdownButton: (active: boolean) => SxStyleProp = (active: boolean) => ({
  ...navItem,
  color: active ? '#D71D55' : '#4A596B',
  backgroundColor: active ? '#FFF3F6' : 'transparent',
  svg: {
    mr: '8px',
    path: {
      fill: active ? '#D71D55' : '#4A596B',
    },
  },
  ':hover': {
    color: '#C81E51',
    backgroundColor: '#FFF3F6',
    'svg > path': {
      fill: '#C81E51',
    },
  },
})

const rightButtonsText: SxStyleProp = {
  fontWeight: 'normal',
  fontSize: '13px',
  lineHeight: '22px',
  fontFamily: 'VTEX Trust Medium !important',
  textTransform: 'none',
}

const searchContainer: SxStyleProp = {
  display: ['none', 'none', 'flex', 'flex'],
  justifyContent: 'center',
  paddingBlock: '18px',
  height: 'auto',
}

export default {
  logoSize,
  headerContainer,
  headerBrand,
  headerBrandLink,
  searchContainer,
  rightLinks,
  rightLinksItem,
  rightButtonsText,
  dropdownButton,
  dropdownContainer,
  hamburgerMenuToggle,
  extraRightLinks,
  headerEndActions,
  localeSwitcherSlot,
}
