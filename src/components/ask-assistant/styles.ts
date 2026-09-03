import type { SxStyleProp } from '@vtex/brand-ui'

const focusRing: SxStyleProp = {
  ':focus-visible': {
    outline: '2px solid #E31C58',
    outlineOffset: '2px',
  },
}

const trigger: SxStyleProp = {
  display: 'inline-flex',
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

const triggerIcon: SxStyleProp = {
  flexShrink: 0,
}

const triggerShortcut: SxStyleProp = {
  display: ['none', 'inline-flex'],
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

const overlay: SxStyleProp = {
  display: ['block', 'none'],
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(20, 32, 50, 0.32)',
  backdropFilter: 'blur(2px)',
  WebkitBackdropFilter: 'blur(2px)',
  zIndex: 10000,
}

const panel = (expanded: boolean): SxStyleProp => ({
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 10001,
  display: 'flex',
  flexDirection: 'column',
  width: expanded
    ? ['100vw', 'min(720px, 80vw)']
    : ['100vw', 'min(400px, 100vw)'],
  maxWidth: '100vw',
  backgroundColor: '#FFFFFF',
  borderLeft: '1px solid #E7E9EE',
  boxShadow: '-8px 0 32px rgba(20, 32, 50, 0.12)',
  overscrollBehavior: 'contain',
  transition: 'width 0.2s ease',
})

const header: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  px: '16px',
  py: '12px',
  borderBottom: '1px solid #E7E9EE',
  backgroundColor: '#FFFFFF',
}

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
}

const emptyHero: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  mb: '20px',
}

const emptyHeroIcon: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '48px',
  height: '48px',
  borderRadius: '8px',
  backgroundColor: '#F4F2FA',
  color: '#E31C58',
}

const examples: SxStyleProp = {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  width: '100%',
  px: '16px',
  pt: '12px',
  pb: '16px',
}

const examplesLabel: SxStyleProp = {
  color: 'muted.1',
  fontSize: '12px',
  fontWeight: '600',
  lineHeight: '16px',
  textTransform: 'uppercase',
  letterSpacing: '0.04em',
}

const examplePills: SxStyleProp = {
  display: 'flex',
  flexWrap: 'nowrap',
  gap: '8px',
  overflowX: 'auto',
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
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
  border: `1px solid ${active ? '#D8D8E3' : '#E7E9EE'}`,
  borderRadius: '16px',
  backgroundColor: active ? '#F8F7FC' : '#FFFFFF',
  color: '#4A596B',
  fontSize: '13px',
  fontWeight: active ? '600' : '500',
  lineHeight: '16px',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  flexShrink: 0,
  transition: 'background-color 0.15s ease, border-color 0.15s ease',
  ':hover': {
    borderColor: '#3A4F66',
    color: '#4A596B',
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
}

const exampleQuestion: SxStyleProp = {
  display: 'block',
  width: '100%',
  px: '12px',
  py: '10px',
  border: '1px solid #E7E9EE',
  borderRadius: '8px',
  background: '#FFFFFF',
  color: '#4A596B',
  fontSize: '13px',
  lineHeight: '20px',
  textAlign: 'left',
  cursor: 'pointer',
  transition:
    'background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease',
  ':hover': {
    backgroundColor: '#F8F7FC',
    borderColor: '#D8D8E3',
    color: '#142032',
  },
  ...focusRing,
}

const inputBox: SxStyleProp = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  px: '12px',
  pt: '10px',
  pb: '10px',
  border: '1px solid #E7E9EE',
  borderRadius: '8px',
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
  borderRadius: '6px',
  backgroundColor: '#142032',
  color: '#FFFFFF',
  opacity: enabled ? 1 : 0.55,
  cursor: enabled ? 'pointer' : 'not-allowed',
  transition: 'background-color 0.15s ease, opacity 0.15s ease',
  ':hover': {
    backgroundColor: enabled ? '#000711' : '#142032',
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
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
}

const nestedListItem: SxStyleProp = {
  ml: '8px',
  listStyleType: 'disc',
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
  examples,
  examplesLabel,
  examplePills,
  examplePill,
  examplePillIcon,
  exampleQuestions,
  exampleQuestion,
  inputBox,
  textarea,
  inputFooter,
  sendButton,
  markdown,
  markdownParagraph,
  markdownHeading,
  markdownList,
  nestedListItem,
  markdownLink,
  markdownRule,
  inlineCode,
  errorText,
}
