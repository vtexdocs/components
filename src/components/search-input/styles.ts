import type { SxStyleProp } from '@vtex/brand-ui'

const resultsOuterContainer: SxStyleProp = {
  position: 'relative',
}

const searchWidth = ['288px', '458px', '288px', '288px', '416px', '544px']
const keyboardHintsDisplay = ['none', 'flex', 'flex', 'none', 'flex', 'flex']

const resultsInnerContainer: SxStyleProp = {
  top: '4px',
  position: 'absolute',
  width: searchWidth,
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

const resultsFooter = (hasSeeAll: boolean): SxStyleProp => ({
  display: hasSeeAll ? 'flex' : keyboardHintsDisplay,
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '8px 12px',
  padding: ['8px 12px', '8px 16px'],
  borderTop: '1px solid #E7E9EE',
  background: '#FAFAFB',
})

const resultsFooterModal = (hasSeeAll: boolean): SxStyleProp => ({
  display: hasSeeAll ? 'flex' : 'none',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: '4px 8px 8px',
  borderTop: 'none',
  background: 'transparent',
})

const keyboardHints: SxStyleProp = {
  display: keyboardHintsDisplay,
  alignItems: 'center',
  gap: '12px',
  flexWrap: 'wrap',
  flex: '1 1 200px',
  minWidth: 0,
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
  justifyContent: [
    'space-between',
    'flex-start',
    'flex-start',
    'space-between',
    'flex-start',
  ],
  gap: '4px',
  width: ['100%', 'auto', 'auto', '100%', 'auto'],
  maxWidth: '100%',
  boxSizing: 'border-box',
  ml: ['0', 'auto', 'auto', '0', 'auto'],
  flex: '0 1 auto',
  minWidth: 0,
  padding: '6px 10px',
  borderRadius: '6px',
  color: '#D71D55',
  fontSize: '13px',
  fontWeight: '600',
  lineHeight: '16px',
  cursor: 'pointer',
  whiteSpace: ['normal', 'nowrap', 'nowrap', 'normal', 'nowrap'],
  '& p': {
    minWidth: 0,
    flex: [1, 'none', 'none', 1, 'none'],
  },
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
  wordBreak: 'break-word',
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
}

const hitTitle: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
  minWidth: 0,
  color: '#142032',
  fontSize: ['14px', '15px'],
  fontWeight: '600',
  lineHeight: ['20px', '22px'],
}

const hitTitleText: SxStyleProp = {
  minWidth: 0,
  flex: 1,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}

const httpMethod: SxStyleProp = {
  mr: '8px',
  flexShrink: 0,
  alignSelf: 'center',
}

const hitContent: SxStyleProp = {
  color: 'muted.0',
  fontSize: ['13px', '16px'],
  lineHeight: ['18px', '22px'],
  width: '100%',
  minWidth: 0,
  ...snippetText,
  WebkitLineClamp: [3, 4],
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
  width: '100%',
  background: 'none',
  border: 'none',
  outline: 'none',
  color: '#142032',
  fontSize: ['14px'],
  flex: 1,
  minWidth: 0,
}

const searchIcon: SxStyleProp = {
  minWidth: '16px',
  minHeight: '16px',
  width: '16px',
  mr: '8px',
  flex: 0,
  maxWidth: 'fit-content',
  color: '#5E6E84',
  path: {
    fill: '#5E6E84',
  },
}

const searchContainer: SxStyleProp = {
  paddingLeft: '12px',
  paddingRight: '8px',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#FFFFFF',
  width: searchWidth,
  height: '40px',
  boxSizing: 'border-box',
  borderRadius: '8px',
  border: '1px solid #E7E9EE',
  transition:
    'background 0.2s ease-out, border-color 0.2s ease-out, box-shadow 0.2s ease-out',
  cursor: 'pointer',
  'input[type="search"]::-webkit-search-cancel-button': {
    display: 'none',
  },
  'input[type="search"]::-webkit-search-decoration': {
    display: 'none',
  },
  ':hover': {
    borderColor: '#C7CDD6',
  },
  ':focus-within': {
    background: '#FFFFFF',
    borderColor: '#E31C58',
    boxShadow: '0 0 0 3px rgba(227, 28, 88, 0.16)',
    '[data-search-shortcut]': {
      display: 'none',
    },
  },
}

const shortcutHint: SxStyleProp = {
  display: ['none', 'flex', 'none', 'none', 'flex', 'flex'],
  alignItems: 'center',
  gap: '4px',
  ml: '8px',
  flexShrink: 0,
  pointerEvents: 'none',
}

const shortcutKbd: SxStyleProp = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '20px',
  height: '20px',
  px: '5px',
  borderRadius: '4px',
  border: '1px solid #E7E9EE',
  background: '#FAFAFB',
  boxShadow: '0 1px 0 #E7E9EE',
  fontSize: '11px',
  fontFamily: 'inherit',
  color: '#4A596B',
  lineHeight: '20px',
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

const searchContainerModal: SxStyleProp = {
  paddingLeft: '16px',
  paddingRight: '12px',
  alignItems: 'center',
  background: 'transparent',
  width: '100%',
  minHeight: '56px',
  borderRadius: 0,
  cursor: 'text',
  'input[type="search"]::-webkit-search-cancel-button': {
    display: 'none',
  },
  'input[type="search"]::-webkit-search-decoration': {
    display: 'none',
  },
  ':hover': {
    border: 'none',
  },
  ':focus-within': {
    background: 'transparent',
    border: 'none',
    boxShadow: 'none',
  },
}

const searchIconModal: SxStyleProp = {
  minWidth: '18px',
  minHeight: '18px',
  width: '18px',
  height: '18px',
  mr: '12px',
  flex: 0,
  color: '#A1A8B3',
  path: {
    fill: '#A1A8B3',
  },
}

const searchInputModal = {
  width: '100%',
  background: 'none',
  border: 'none',
  outline: 'none',
  color: '#142032',
  fontSize: '16px',
  lineHeight: '24px',
  flex: 1,
  minWidth: 0,
}

const modalRoot: SxStyleProp = {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  minHeight: 0,
  maxHeight: 'min(80vh, 640px)',
}

const modalSearchBox: SxStyleProp = {
  flexShrink: 0,
  borderBottom: '1px solid #F0F0F0',
}

const modalResults: SxStyleProp = {
  flex: 1,
  minHeight: 0,
  overflowY: 'auto',
}

const resultsOuterContainerModal: SxStyleProp = {
  position: 'relative',
  height: '100%',
}

const resultsInnerContainerModal: SxStyleProp = {
  position: 'relative',
  top: 0,
  width: '100%',
  border: 'none',
  borderRadius: 0,
  background: 'transparent',
  boxShadow: 'none',
  overflow: 'visible',
}

const resultsBoxModal: SxStyleProp = {
  padding: '8px',
  maxHeight: 'none',
  overflowY: 'visible',
}

const hitBoxModal: SxStyleProp = {
  position: 'relative',
  display: 'flex',
  alignItems: 'flex-start',
  padding: '10px 12px',
  cursor: 'pointer',
  borderRadius: '12px',
  a: {
    minWidth: 0,
    flex: 1,
    textDecoration: 'none',
    color: 'inherit',
  },
  ':hover, &[data-active="true"]': {
    backgroundColor: '#F4F4F5',
    '.hit-content-title': {
      color: '#142032',
    },
  },
}

const hitLinkModal: SxStyleProp = {
  display: 'flex',
  alignItems: 'flex-start',
  minWidth: 0,
  flex: 1,
  textDecoration: 'none',
  color: 'inherit',
  pr: 0,
}

const hitIconWrapModal: SxStyleProp = {
  flexShrink: 0,
  width: '24px',
  height: '24px',
  borderRadius: 0,
  backgroundColor: 'transparent',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  mr: '10px',
  mt: '2px',
}

const hitIconModal: SxStyleProp = {
  width: '16px',
  height: '16px',
  color: '#8A8A8A',
}

const hitTitleModal: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
  minWidth: 0,
  color: '#142032',
  fontSize: '15px',
  fontWeight: '600',
  lineHeight: '22px',
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
  resultsFooterModal,
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
  hitTitleText,
  httpMethod,
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
  shortcutHint,
  shortcutKbd,
  searchContainerModal,
  searchIconModal,
  searchInputModal,
  clearButton,
  alignCenter,
  noResults,
  hitContentHighlighted,
  modalRoot,
  modalSearchBox,
  modalResults,
  resultsOuterContainerModal,
  resultsInnerContainerModal,
  resultsBoxModal,
  hitBoxModal,
  hitLinkModal,
  hitIconWrapModal,
  hitIconModal,
  hitTitleModal,
}
