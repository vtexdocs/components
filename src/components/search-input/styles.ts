import type { SxStyleProp } from '@vtex/brand-ui'

const resultsOuterContainer: SxStyleProp = {
  position: 'relative',
}

const resultsInnerContainer: SxStyleProp = {
  top: '4px',
  position: 'absolute',
  width: ['288px', '458px', '458px', '288px', '416px', '544px'],
  border: '1px solid #E7E9EE',
  borderRadius: '8px',
  background: '#FFFFFF',
  boxShadow: '0 12px 32px rgba(20, 32, 50, 0.12)',
  overflow: 'hidden',
  zIndex: 20,
}

const resultsBox: SxStyleProp = {
  padding: '8px',
  maxHeight: 'min(60vh, 420px)',
  overflowY: 'auto',
}

const resultsFooter = (showOnMobile: boolean): SxStyleProp => ({
  display: showOnMobile ? 'flex' : ['none', 'flex'],
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '12px',
  padding: '8px 16px',
  borderTop: '1px solid #E7E9EE',
  background: '#FAFAFB',
})

const keyboardHints: SxStyleProp = {
  display: ['none', 'flex'],
  alignItems: 'center',
  gap: '12px',
  flexWrap: 'wrap',
}

const keyboardHint: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  color: 'muted.1',
  fontSize: '12px',
  lineHeight: '16px',
  whiteSpace: 'nowrap',
}

const kbd: SxStyleProp = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '20px',
  height: '20px',
  px: '5px',
  borderRadius: '4px',
  border: '1px solid #E7E9EE',
  background: '#FFFFFF',
  boxShadow: '0 1px 0 #E7E9EE',
  fontSize: '11px',
  fontFamily: 'inherit',
  color: '#4A596B',
  lineHeight: '20px',
}

const seeAllCaret: SxStyleProp = {
  width: '16px',
  height: '16px',
  color: '#D71D55',
  flexShrink: 0,
}

const seeAll: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  ml: 'auto',
  padding: '6px 10px',
  borderRadius: '6px',
  color: '#D71D55',
  fontSize: '13px',
  fontWeight: '600',
  lineHeight: '16px',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  ':hover, &[data-active="true"]': {
    background: '#F8E3EC',
  },
}

const hitBox: SxStyleProp = {
  position: 'relative',
  display: 'flex',
  alignItems: 'flex-start',
  padding: '10px 12px',
  cursor: 'pointer',
  borderRadius: '8px',
  a: {
    minWidth: 0,
    flex: 1,
    textDecoration: 'none',
    color: 'inherit',
  },
  '.hit-actions': {
    opacity: [1, 0],
  },
  ':hover, &[data-active="true"]': {
    backgroundColor: '#F8F7FC',
    '.hit-content-title': {
      color: '#000711',
    },
    '.hit-icon': {
      '> path': {
        stroke: '#000711',
      },
    },
    '.hit-icon-wrap': {
      backgroundColor: '#EDEAF6',
    },
    '.hit-actions': {
      opacity: 1,
    },
  },
}

const hitLink: SxStyleProp = {
  display: 'flex',
  alignItems: 'flex-start',
  minWidth: 0,
  flex: 1,
  textDecoration: 'none',
  color: 'inherit',
  pr: ['0', '64px'],
}

const hitIconWrap: SxStyleProp = {
  flexShrink: 0,
  width: '32px',
  height: '32px',
  borderRadius: '8px',
  backgroundColor: '#F4F2FA',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  mr: '12px',
  mt: '1px',
}

const hitIcon: SxStyleProp = {
  width: '16px',
  height: '16px',
  color: '#4A596B',
}

const hitText: SxStyleProp = {
  minWidth: 0,
  flex: 1,
}

const hitContentContainer: SxStyleProp = {
  width: '100%',
  minWidth: 0,
  overflow: 'hidden',
}

const snippetText: SxStyleProp = {
  overflowWrap: 'break-word',
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
}

const hitTitle: SxStyleProp = {
  color: '#142032',
  fontSize: ['14px', '15px'],
  fontWeight: '600',
  lineHeight: ['20px', '22px'],
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}

const hitContent: SxStyleProp = {
  color: 'muted.0',
  fontSize: ['14px', '16px'],
  lineHeight: ['20px', '22px'],
  width: '100%',
  minWidth: 0,
  ...snippetText,
  WebkitLineClamp: 4,
}

const hitContentSmall: SxStyleProp = {
  color: 'muted.1',
  fontSize: '13px',
  lineHeight: '18px',
  width: '100%',
  minWidth: 0,
  mt: '2px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}

const hitActions: SxStyleProp = {
  position: ['static', 'absolute'],
  top: '8px',
  right: '8px',
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  ml: ['8px', 0],
  flexShrink: 0,
}

const hitActionButton: SxStyleProp = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '28px',
  height: '28px',
  padding: 0,
  border: '1px solid #E7E9EE',
  borderRadius: '6px',
  background: '#FFFFFF',
  color: '#4A596B',
  cursor: 'pointer',
  ':hover': {
    background: '#FFFFFF',
    borderColor: '#C7CDD6',
    color: '#142032',
  },
}

const hitActionButtonCopied: SxStyleProp = {
  ...hitActionButton,
  borderColor: '#8CD2A8',
  color: '#36875A',
  background: '#F0FAF4',
}

const alignCenter: SxStyleProp = {
  alignItems: 'center',
}

const hitBreadcrumbs: SxStyleProp = {
  alignItems: 'center',
  minWidth: 0,
  mt: '4px',
}

const hitBreadCrumb: SxStyleProp = {
  color: 'muted.1',
  fontSize: '12px',
  lineHeight: '16px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}

const hitBreadCrumbIn: SxStyleProp = {
  ...hitBreadCrumb,
  minWidth: 'fit-content',
}

const hitBreadCrumbArrow: SxStyleProp = {
  width: '16px',
  height: '16px',
  color: 'muted.2',
  flexShrink: 0,
}

const searchInput: SxStyleProp = {
  width: '76px',
  background: 'none',
  border: '#F4F4F4',
  color: '#545454',
  fontSize: ['14px'],
  flex: 0,
  transition: 'flex 0.3s',
}

const searchIcon: SxStyleProp = {
  minWidth: '16px',
  minHeight: '16px',
  width: '16px',
  mr: '8px',
  flex: 0,
  maxWidth: 'fit-content',
}

const searchContainer: SxStyleProp = {
  paddingLeft: '12px',
  paddingRight: '8px',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#F4F4F4',
  width: '288px',
  height: '40px',
  borderRadius: '4px',
  transition: 'all 0.3s ease-out',
  cursor: 'pointer',
  ':hover': {
    transition: 'all 0.3s ease-out',
    width: ['288px', '458px', '458px', '288px', '416px', '544px'],
    border: '1px solid #3B3B3B',
  },
  ':focus-within': {
    background: '#FFFFFF',
    width: ['288px', '458px', '458px', '288px', '416px', '544px'],
    transition: 'all 0.3s ease-out',
    border: '1px solid #3B3B3B',
    boxShadow: '0px 0px 0px 1px #FFFFFF, 0px 0px 0px 3px #B9B9B9',
    flex: 'auto',
    '.searchComponent': {
      flex: '1 !important',
    },
  },
  '.searchComponent': {
    ':placeholder-shown': {
      width: '76px',
    },
    ':not(:placeholder-shown)': {
      flex: '1 !important',
    },
  },
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

const noResults: SxStyleProp = {
  justifyContent: 'center',
  alignContent: 'center',
  padding: '20px 12px',
  color: 'muted.1',
  textAlign: 'center',
}

const hitContentHighlighted: SxStyleProp = {
  background: '#F8E3EC',
  color: '#142032',
  borderRadius: '3px',
  padding: '0 2px',
  fontWeight: '600',
  display: 'inline',
}

export default {
  resultsOuterContainer,
  resultsInnerContainer,
  resultsBox,
  resultsFooter,
  keyboardHints,
  keyboardHint,
  kbd,
  seeAll,
  seeAllCaret,
  hitBox,
  hitLink,
  hitIconWrap,
  hitIcon,
  hitText,
  hitContentContainer,
  hitTitle,
  hitContent,
  hitContentSmall,
  hitActions,
  hitActionButton,
  hitActionButtonCopied,
  hitBreadcrumbs,
  hitBreadCrumb,
  hitBreadCrumbIn,
  hitBreadCrumbArrow,
  searchInput,
  searchIcon,
  searchContainer,
  clearButton,
  alignCenter,
  noResults,
  hitContentHighlighted,
}
