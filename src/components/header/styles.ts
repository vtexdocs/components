import type { SxStyleProp } from '@vtex/brand-ui'

const headerContainer: SxStyleProp = {
  position: 'sticky',
  zIndex: 9999,
  width: '100%',
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
  pr: '48px',
}

const rightLinksItem: SxStyleProp = {
  display: ['none', 'none', 'none', 'flex'],
  alignItems: 'center',
  padding: '0 !important',
  margin: '0 0 0 32px !important',
  svg: {
    mr: '8px',
  },

  ':hover': {
    color: '#C81E51',
    'svg > path': {
      stroke: '#C81E51',
    },
  },
}

const dropdownContainer: SxStyleProp = {
  textTransform: 'none',
  justifyContent: 'flex-end',
  height: 'calc(100% + 1px)',
  cursor: 'pointer',
  position: 'relative',
}

const dropdownButton: (active: boolean) => SxStyleProp = (active: boolean) => ({
  color: active ? '#D71D55' : '#4A596B',
  alignItems: 'center',
  svg: {
    mr: '8px',
    path: {
      fill: active ? '#D71D55' : '#4A596B',
    },
  },

  ':hover': {
    color: '#C81E51',
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
}
