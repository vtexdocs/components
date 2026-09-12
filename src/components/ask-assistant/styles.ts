import type { SxStyleProp } from '@vtex/brand-ui'

const focusRing: SxStyleProp = {
  ':focus-visible': {
    outline: '2px solid #E31C58',
    outlineOffset: '2px',
  },
}

const trigger: SxStyleProp = {
  display: ['none', 'none', 'none', 'inline-flex'],
  alignItems: 'center',
  gap: '8px',
  height: '36px',
  px: '12px',
  border: '1px solid #E7E9EE',
  borderRadius: '6px',
  backgroundColor: '#FFFFFF',
  color: 'muted.0',
  fontSize: '13px',
  fontWeight: '500',
  lineHeight: '16px',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  transition:
    'background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease',
  ':hover': {
    backgroundColor: '#F8F7FC',
    borderColor: '#D8D8E3',
    color: '#000711',
  },
  ...focusRing,
}

/** Brand UI 4th breakpoint (`64em`). FAB is hidden from this width up. */
export const DESKTOP_TRIGGER_MQ = '(min-width: 64em)'
/** Matches the mobile On This Page pill so the two controls read as a pair. */
export const FLOATING_TRIGGER_SIZE = 44
export const FLOATING_TRIGGER_GAP = 12

const FLOATING_SHADOW =
  '0 8px 24px rgba(20, 32, 50, 0.12), 0 1px 2px rgba(20, 32, 50, 0.06)'

const floatingTrigger = (hidden = false): SxStyleProp => ({
  display: ['inline-flex', 'inline-flex', 'inline-flex', 'none'],
  position: 'fixed',
  right: '16px',
  bottom: 'calc(16px + env(safe-area-inset-bottom, 0px))',
  zIndex: 10001,
  alignItems: 'center',
  justifyContent: 'center',
  width: `${FLOATING_TRIGGER_SIZE}px`,
  height: `${FLOATING_TRIGGER_SIZE}px`,
  padding: 0,
  border: '1px solid #E7E9EE',
  borderRadius: '50%',
  backgroundColor: '#FFFFFF',
  color: '#142032',
  cursor: hidden ? 'default' : 'pointer',
  boxShadow: FLOATING_SHADOW,
  opacity: hidden ? 0 : 1,
  visibility: hidden ? 'hidden' : 'visible',
  pointerEvents: hidden ? 'none' : 'auto',
  transform: hidden ? 'translateY(10px)' : 'none',
  transition:
    'background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease, box-shadow 0.15s ease, transform 0.2s ease, opacity 0.2s ease, visibility 0.2s ease',
  ':hover': {
    backgroundColor: '#F8F7FC',
    borderColor: '#D8D8E3',
  },
  ':active': {
    transform: hidden ? 'translateY(10px)' : 'scale(0.96)',
  },
  ...focusRing,
})

const triggerIcon: SxStyleProp = {
  flexShrink: 0,
}

const triggerShortcut: SxStyleProp = {
  display: ['none', 'none', 'none', 'none', 'inline-flex'],
  alignItems: 'center',
  gap: '4px',
  ml: '2px',
}

const triggerKbd: SxStyleProp = {
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
  fontWeight: '400',
  fontFamily: 'inherit',
  color: '#4A596B',
  lineHeight: '20px',
  letterSpacing: 0,
}

/** First Brand UI / Theme UI breakpoint — panel is a side column, not a sheet. */
export const SPLIT_VIEW_MQ = '(min-width: 40em)'
export const PANEL_WIDTH = 'min(400px, 100vw)'
export const PANEL_EXPANDED_WIDTH = 'min(720px, 80vw)'

export const splitViewCss = `
@media not screen and ${DESKTOP_TRIGGER_MQ} {
  html:has([data-ask-assistant-fab]) {
    --ask-assistant-fab-offset: ${FLOATING_TRIGGER_SIZE + FLOATING_TRIGGER_GAP}px;
  }
}
@media screen and ${SPLIT_VIEW_MQ} {
  html:has([data-ask-assistant-panel]) {
    --ask-assistant-width: ${PANEL_WIDTH};
    --ask-assistant-top: 0px;
  }
  html:has([data-ask-assistant-panel][data-expanded="true"]) {
    --ask-assistant-width: ${PANEL_EXPANDED_WIDTH};
  }
  html:has([data-ask-assistant-panel]) [data-docs-header] {
    max-width: none;
  }
  html:has([data-ask-assistant-panel]) [data-docs-header] ~ * {
    box-sizing: border-box;
    padding-right: var(--ask-assistant-width) !important;
  }
  html:has([data-ask-assistant-panel]) [data-article-aside] {
    display: none !important;
  }
  html:has([data-ask-assistant-panel]):not(:has([data-docs-header])) body {
    box-sizing: border-box;
    padding-right: var(--ask-assistant-width);
  }
}
`

const overlay: SxStyleProp = {
  display: ['block', 'none'],
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(20, 32, 50, 0.32)',
  backdropFilter: 'blur(2px)',
  WebkitBackdropFilter: 'blur(2px)',
  zIndex: 10000,
}

const EMPTY_STATE_BACKGROUND = [
  'radial-gradient(120% 80% at 0% 0%, #E8E6F2 0%, rgba(232, 230, 242, 0) 54%)',
  'radial-gradient(110% 85% at 100% 100%, #D2EEF8 0%, rgba(210, 238, 248, 0) 56%)',
  'linear-gradient(135deg, #F7F8FC 0%, #F6F8FD 50%, #EEF7FC 100%)',
].join(', ')

const panel = (expanded: boolean, isEmpty = false): SxStyleProp => ({
  position: 'fixed',
  top: [0, 'var(--ask-assistant-top, 0px)'],
  right: 0,
  bottom: 0,
  zIndex: [10001, 40],
  display: 'flex',
  flexDirection: 'column',
  width: expanded ? ['100vw', PANEL_EXPANDED_WIDTH] : ['100vw', PANEL_WIDTH],
  maxWidth: '100vw',
  backgroundColor: isEmpty ? '#F7F8FC' : '#FFFFFF',
  backgroundImage: isEmpty ? EMPTY_STATE_BACKGROUND : 'none',
  borderLeft: '1px solid #E7E9EE',
  boxShadow: ['-8px 0 32px rgba(20, 32, 50, 0.12)', 'none'],
  overscrollBehavior: 'contain',
  transition: 'width 0.2s ease',
})

const header = (isEmpty = false): SxStyleProp => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  px: '16px',
  py: '12px',
  borderBottom: isEmpty ? '1px solid transparent' : '1px solid #E7E9EE',
  backgroundColor: isEmpty ? 'transparent' : '#FFFFFF',
})

const headerTitle: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  color: '#142032',
  fontSize: '14px',
  fontWeight: '600',
  lineHeight: '20px',
  letterSpacing: '-0.01em',
}

const headerActions: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
  gap: '2px',
}

const iconButton: SxStyleProp = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '32px',
  height: '32px',
  padding: 0,
  border: 'none',
  borderRadius: '6px',
  background: 'transparent',
  color: '#4A596B',
  cursor: 'pointer',
  transition: 'background-color 0.15s ease, color 0.15s ease',
  ':hover': {
    backgroundColor: '#F8F7FC',
    color: '#142032',
  },
  ':disabled': {
    color: '#C7CDD6',
    cursor: 'default',
    backgroundColor: 'transparent',
  },
  ':disabled:hover': {
    color: '#C7CDD6',
    backgroundColor: 'transparent',
  },
  ...focusRing,
}

const iconButtonActive: SxStyleProp = {
  ...iconButton,
  backgroundColor: '#F8F7FC',
  color: '#142032',
}

const historyWrap: SxStyleProp = {
  position: 'relative',
}

const historyMenu: SxStyleProp = {
  position: 'absolute',
  top: 'calc(100% + 6px)',
  right: 0,
  zIndex: 2,
  display: 'flex',
  flexDirection: 'column',
  width: '260px',
  maxWidth: 'min(260px, calc(100vw - 24px))',
  py: '8px',
  backgroundColor: '#FFFFFF',
  border: '1px solid #E7E9EE',
  borderRadius: '8px',
  boxShadow:
    '0 8px 24px rgba(18, 21, 26, 0.12), 0 2px 6px rgba(18, 21, 26, 0.08)',
  overflow: 'hidden',
}

const historyHeader: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '12px',
  px: '12px',
  pb: '8px',
}

const historyTitle: SxStyleProp = {
  color: 'muted.1',
  fontSize: '12px',
  fontWeight: '600',
  lineHeight: '16px',
  textTransform: 'uppercase',
  letterSpacing: '0.04em',
}

const historyClear: SxStyleProp = {
  padding: 0,
  border: 'none',
  background: 'transparent',
  color: '#D71D55',
  fontSize: '13px',
  fontWeight: '600',
  lineHeight: '16px',
  cursor: 'pointer',
  ':hover': {
    color: '#C81E51',
    textDecoration: 'underline',
  },
  ...focusRing,
}

const historyList: SxStyleProp = {
  display: 'flex',
  flexDirection: 'column',
  maxHeight: '280px',
  overflowY: 'auto',
  px: '4px',
}

const historyItem: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  width: '100%',
  px: '8px',
  py: '8px',
  border: 'none',
  borderRadius: '6px',
  background: 'transparent',
  color: '#142032',
  fontSize: '13px',
  fontWeight: '400',
  lineHeight: '18px',
  textAlign: 'left',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: '#F8F7FC',
  },
  ...focusRing,
}

const historyItemIcon: SxStyleProp = {
  flexShrink: 0,
  color: '#4A596B',
}

const historyItemText: SxStyleProp = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
}

const messages: SxStyleProp = {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  minHeight: 0,
  gap: '16px',
  px: '16px',
  py: '16px',
  overflowY: 'auto',
}

const userBubble: SxStyleProp = {
  alignSelf: 'flex-end',
  maxWidth: '85%',
  px: '12px',
  py: '8px',
  borderRadius: '8px',
  backgroundColor: '#F8F7FC',
  border: '1px solid #EDEAF6',
  color: '#142032',
  fontSize: '14px',
  lineHeight: '20px',
  wordBreak: 'break-word',
}

const assistantBlock: SxStyleProp = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '12px',
  width: '100%',
}

const process: SxStyleProp = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  width: '100%',
}

const processHeader: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  color: '#5B6E84',
  fontSize: '13px',
  fontWeight: '400',
  lineHeight: '20px',
}

const processCheck: SxStyleProp = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '16px',
  height: '16px',
  borderRadius: '50%',
  backgroundColor: '#38853C',
  color: '#FFFFFF',
  flexShrink: 0,
}

const processSpinner: SxStyleProp = {
  width: '14px',
  height: '14px',
  borderRadius: '50%',
  border: '2px solid #E7E9EE',
  borderTopColor: '#5B6E84',
  flexShrink: 0,
  animation: 'askAssistantSpin 0.8s linear infinite',
  '@keyframes askAssistantSpin': {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
  },
}

const processSteps: SxStyleProp = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
}

const processStep: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  color: '#142032',
  fontSize: '13px',
  fontWeight: '400',
  lineHeight: '18px',
}

const processBadge: SxStyleProp = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '20px',
  px: '8px',
  borderRadius: '4px',
  backgroundColor: '#F4F5F7',
  color: '#4A596B',
  fontSize: '12px',
  fontWeight: '500',
  lineHeight: '16px',
  flexShrink: 0,
}

const processStepIcon: SxStyleProp = {
  flexShrink: 0,
  color: '#4A596B',
}

const processBookIcon: SxStyleProp = {
  flexShrink: 0,
  color: '#E31C58',
}

const processStepLabel: SxStyleProp = {
  color: '#142032',
  fontSize: '13px',
  lineHeight: '18px',
}

const messageActions: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  mt: '4px',
}

const actionButton: SxStyleProp = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '28px',
  height: '28px',
  padding: 0,
  border: '1px solid transparent',
  borderRadius: '6px',
  background: 'transparent',
  color: '#A1A8B3',
  cursor: 'pointer',
  transition:
    'background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease',
  ':hover': {
    backgroundColor: '#FFFFFF',
    borderColor: '#E7E9EE',
    color: '#4A596B',
  },
  ...focusRing,
}

const actionButtonActive: SxStyleProp = {
  ...actionButton,
  color: '#142032',
  backgroundColor: '#F8F7FC',
  borderColor: '#EDEAF6',
}

const dislikeIcon: SxStyleProp = {
  transform: 'rotate(180deg)',
}

const inputWrap: SxStyleProp = {
  flexShrink: 0,
  px: '16px',
  pb: '16px',
  pt: '12px',
  borderTop: '1px solid #E7E9EE',
  backgroundColor: '#FFFFFF',
}

const inputWrapCentered: SxStyleProp = {
  flexShrink: 0,
  width: '100%',
  px: '16px',
  pb: '8px',
}

const emptyState: SxStyleProp = {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  minHeight: 0,
  overflowY: 'auto',
}

const emptyMain: SxStyleProp = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'center',
  flex: 1,
  minHeight: '200px',
  py: ['24px', '32px'],
}

const emptyHero: SxStyleProp = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  px: '24px',
  mb: '24px',
}

const emptyHeroIcon: SxStyleProp = {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '48px',
  height: '48px',
  mb: '14px',
  borderRadius: '50%',
  color: '#142032',
  background:
    'linear-gradient(180deg, rgba(255, 255, 255, 0.96) 0%, rgba(248, 247, 252, 0.9) 100%)',
  border: '1px solid rgba(231, 233, 238, 0.95)',
  boxShadow:
    '0 0 0 8px rgba(20, 32, 50, 0.04), 0 1px 2px rgba(20, 32, 50, 0.04), 0 10px 24px rgba(20, 32, 50, 0.08)',
  svg: {
    overflow: 'visible',
  },
  path: {
    strokeWidth: '1.15',
    strokeLinecap: 'round',
  },
}

const emptyHeroCopy: SxStyleProp = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
  textAlign: 'center',
}

const emptyHeroTitle: SxStyleProp = {
  m: 0,
  color: '#142032',
  fontSize: '24px',
  fontWeight: '600',
  lineHeight: '32px',
  letterSpacing: '-0.03em',
}

const emptyHeroSubtitle: SxStyleProp = {
  m: 0,
  color: '#5B6E84',
  fontSize: '14px',
  fontWeight: '400',
  lineHeight: '20px',
}

const examples: SxStyleProp = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  width: '100%',
  px: '16px',
  pt: '20px',
  pb: '8px',
}

const examplesLabel: SxStyleProp = {
  color: '#7C879A',
  fontSize: '11px',
  fontWeight: '600',
  lineHeight: '16px',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
}

const examplePills: SxStyleProp = {
  display: 'flex',
  flexWrap: 'nowrap',
  gap: '8px',
  overflowX: 'auto',
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  WebkitOverflowScrolling: 'touch',
  maskImage:
    'linear-gradient(90deg, #000 0%, #000 calc(100% - 28px), transparent 100%)',
  WebkitMaskImage:
    'linear-gradient(90deg, #000 0%, #000 calc(100% - 28px), transparent 100%)',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
}

const examplePill = (active: boolean): SxStyleProp => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  height: '32px',
  px: '12px',
  border: `1px solid ${active ? '#D8D8E3' : 'rgba(231, 233, 238, 0.9)'}`,
  borderRadius: '999px',
  backgroundColor: active
    ? 'rgba(248, 247, 252, 0.96)'
    : 'rgba(255, 255, 255, 0.58)',
  color: active ? '#142032' : '#4A596B',
  fontSize: '13px',
  fontWeight: active ? '600' : '500',
  lineHeight: '16px',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  flexShrink: 0,
  boxShadow: active ? '0 1px 3px rgba(20, 32, 50, 0.06)' : 'none',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  transition:
    'background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease, box-shadow 0.15s ease',
  ':hover': {
    borderColor: '#C7CDD6',
    backgroundColor: 'rgba(255, 255, 255, 0.96)',
    color: '#142032',
  },
  ...focusRing,
})

const examplePillIcon: SxStyleProp = {
  width: '14px',
  height: '14px',
  minWidth: '14px',
  minHeight: '14px',
  flexShrink: 0,
}

const exampleQuestions: SxStyleProp = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  mt: '4px',
}

const exampleQuestion: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '12px',
  width: '100%',
  px: '14px',
  py: '12px',
  border: '1px solid rgba(231, 233, 238, 0.9)',
  borderRadius: '12px',
  background: 'rgba(255, 255, 255, 0.78)',
  color: '#142032',
  fontSize: '13px',
  lineHeight: '20px',
  textAlign: 'left',
  cursor: 'pointer',
  boxShadow: '0 1px 2px rgba(20, 32, 50, 0.03)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  transition:
    'background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease, transform 0.15s ease',
  ':hover': {
    backgroundColor: '#FFFFFF',
    borderColor: '#D8D8E3',
    boxShadow: '0 8px 20px rgba(20, 32, 50, 0.08)',
    transform: 'translateY(-1px)',
    svg: {
      color: '#142032',
      opacity: 1,
      transform: 'translateX(2px)',
    },
  },
  ...focusRing,
}

const exampleQuestionText: SxStyleProp = {
  minWidth: 0,
  flex: 1,
}

const exampleQuestionArrow: SxStyleProp = {
  flexShrink: 0,
  color: '#C7CDD6',
  opacity: 0.85,
  transition:
    'color 0.15s ease, opacity 0.15s ease, transform 0.15s ease',
  path: {
    stroke: 'currentColor',
  },
}

const inputBox: SxStyleProp = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  px: '12px',
  pt: '10px',
  pb: '10px',
  border: '1px solid #E7E9EE',
  borderRadius: '12px',
  backgroundColor: '#FFFFFF',
  transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
  ':hover': {
    borderColor: '#C7CDD6',
  },
  ':focus-within': {
    borderColor: '#E31C58',
    boxShadow: '0 0 0 3px rgba(227, 28, 88, 0.16)',
  },
}

const inputBoxEmpty: SxStyleProp = {
  ...inputBox,
  borderRadius: '12px',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  borderColor: 'rgba(231, 233, 238, 0.95)',
  boxShadow:
    '0 1px 2px rgba(20, 32, 50, 0.04), 0 12px 32px rgba(20, 32, 50, 0.08)',
  backdropFilter: 'blur(18px)',
  WebkitBackdropFilter: 'blur(18px)',
  ':hover': {
    borderColor: '#C7CDD6',
  },
  ':focus-within': {
    borderColor: '#E31C58',
    boxShadow:
      '0 0 0 3px rgba(227, 28, 88, 0.14), 0 12px 32px rgba(20, 32, 50, 0.08)',
  },
}

const textarea: SxStyleProp = {
  width: '100%',
  minHeight: '44px',
  maxHeight: '120px',
  border: 'none',
  outline: 'none',
  resize: 'none',
  background: 'transparent',
  color: '#142032',
  fontSize: '14px',
  lineHeight: '20px',
  fontFamily: 'inherit',
  '::placeholder': {
    color: '#A1A8B3',
  },
  ':disabled': {
    color: '#4A596B',
  },
}

const inputFooter: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
}

const sendButton = (enabled: boolean): SxStyleProp => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '32px',
  height: '32px',
  padding: 0,
  border: 'none',
  borderRadius: '50%',
  backgroundColor: enabled ? '#142032' : '#EEF1F5',
  color: enabled ? '#FFFFFF' : '#A1A8B3',
  cursor: enabled ? 'pointer' : 'not-allowed',
  flexShrink: 0,
  transition: 'background-color 0.15s ease, color 0.15s ease, transform 0.15s ease',
  ':hover': {
    backgroundColor: enabled ? '#000711' : '#EEF1F5',
  },
  ':active': {
    transform: enabled ? 'scale(0.96)' : 'none',
  },
  ...focusRing,
})

const markdown: SxStyleProp = {
  width: '100%',
  color: '#142032',
  fontSize: '14px',
  lineHeight: '22px',
}

const markdownParagraph: SxStyleProp = {
  margin: 0,
  '& + &': {
    mt: '10px',
  },
}

const markdownHeading: SxStyleProp = {
  margin: '0 0 8px',
  fontSize: '15px',
  fontWeight: '600',
  lineHeight: '22px',
  letterSpacing: '-0.01em',
  color: '#142032',
}

const markdownList: SxStyleProp = {
  margin: '8px 0',
  paddingLeft: '20px',
  listStylePosition: 'outside',
  'li + li': {
    mt: '6px',
  },
  'ol, ul': {
    mt: '6px',
    mb: 0,
  },
}

const markdownOrderedList: SxStyleProp = {
  ...markdownList,
  listStyleType: 'decimal',
}

const markdownUnorderedList: SxStyleProp = {
  ...markdownList,
  listStyleType: 'disc',
}

const markdownListItem: SxStyleProp = {
  display: 'list-item',
}

const markdownLink: SxStyleProp = {
  color: '#D71D55',
  fontWeight: '600',
  textDecoration: 'none',
  ':hover': {
    color: '#C81E51',
    textDecoration: 'underline',
    textUnderlineOffset: '2px',
  },
}

const markdownRule: SxStyleProp = {
  border: 'none',
  borderTop: '1px solid #E7E9EE',
  my: '12px',
}

const inlineCode: SxStyleProp = {
  px: '4px',
  py: '1px',
  borderRadius: '4px',
  border: '1px solid #E7E9EE',
  backgroundColor: '#F8F7FC',
  fontSize: '13px',
  fontFamily: 'monospace',
}

const sources: SxStyleProp = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  width: '100%',
  mt: '16px',
  pt: '14px',
  borderTop: '1px solid #E7E9EE',
}

const sourcesLabel: SxStyleProp = {
  color: 'muted.1',
  fontSize: '12px',
  fontWeight: '600',
  lineHeight: '16px',
  textTransform: 'uppercase',
  letterSpacing: '0.04em',
}

const sourcesList: SxStyleProp = {
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
}

const sourceCard: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  width: '100%',
  px: '10px',
  py: '8px',
  border: '1px solid #E7E9EE',
  borderRadius: '8px',
  backgroundColor: '#FFFFFF',
  color: 'inherit',
  textDecoration: 'none',
  cursor: 'pointer',
  transition:
    'background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease',
  ':hover': {
    backgroundColor: '#F8F7FC',
    borderColor: '#D8D8E3',
    '.source-title': {
      color: '#000711',
    },
    '.source-arrow': {
      color: '#4A596B',
    },
  },
  ':focus-visible': {
    outline: '2px solid #E31C58',
    outlineOffset: '2px',
  },
}

const sourceIcon: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '28px',
  height: '28px',
  borderRadius: '6px',
  backgroundColor: '#F8F7FC',
  color: '#4A596B',
  flexShrink: 0,
}

const sourceCopy: SxStyleProp = {
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
  minWidth: 0,
  flex: 1,
}

const sourceTitle: SxStyleProp = {
  color: '#142032',
  fontSize: '13px',
  fontWeight: '500',
  lineHeight: '18px',
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
}

const sourceMeta: SxStyleProp = {
  color: '#5B6E84',
  fontSize: '12px',
  fontWeight: '400',
  lineHeight: '16px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
}

const sourceArrow: SxStyleProp = {
  display: 'inline-flex',
  flexShrink: 0,
  color: '#C7CDD6',
  transition: 'color 0.15s ease',
}

const errorText: SxStyleProp = {
  width: '100%',
  padding: '12px 14px',
  background: '#FFF6F4',
  border: '1px solid #F8D0C8',
  borderRadius: '8px',
  color: '#8A1F11',
  fontSize: '13px',
  lineHeight: '18px',
}

export default {
  trigger,
  triggerIcon,
  triggerShortcut,
  triggerKbd,
  floatingTrigger,
  overlay,
  panel,
  header,
  headerTitle,
  headerActions,
  iconButton,
  iconButtonActive,
  historyWrap,
  historyMenu,
  historyHeader,
  historyTitle,
  historyClear,
  historyList,
  historyItem,
  historyItemIcon,
  historyItemText,
  messages,
  userBubble,
  assistantBlock,
  process,
  processHeader,
  processCheck,
  processSpinner,
  processSteps,
  processStep,
  processBadge,
  processStepIcon,
  processBookIcon,
  processStepLabel,
  messageActions,
  actionButton,
  actionButtonActive,
  dislikeIcon,
  inputWrap,
  inputWrapCentered,
  emptyState,
  emptyMain,
  emptyHero,
  emptyHeroIcon,
  emptyHeroCopy,
  emptyHeroTitle,
  emptyHeroSubtitle,
  examples,
  examplesLabel,
  examplePills,
  examplePill,
  examplePillIcon,
  exampleQuestions,
  exampleQuestion,
  exampleQuestionText,
  exampleQuestionArrow,
  inputBox,
  inputBoxEmpty,
  textarea,
  inputFooter,
  sendButton,
  markdown,
  markdownParagraph,
  markdownHeading,
  markdownList,
  markdownOrderedList,
  markdownUnorderedList,
  markdownListItem,
  markdownLink,
  markdownRule,
  inlineCode,
  sources,
  sourcesLabel,
  sourcesList,
  sourceCard,
  sourceIcon,
  sourceCopy,
  sourceTitle,
  sourceMeta,
  sourceArrow,
  errorText,
}
