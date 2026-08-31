import { SxStyleProp } from '@vtex/brand-ui'

const container: SxStyleProp = {
  position: 'relative',
  flexWrap: ['wrap', 'nowrap'],
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  borderRadius: ['8px', '12px'],
  border: '1px solid #E7E9EE',
  width: '100%',
  minWidth: 0,
  mb: ['12px', '16px'],
  padding: ['14px 16px', '20px 24px'],
  background: '#FFFFFF',
  cursor: 'pointer',
  a: {
    minWidth: 0,
    flex: ['1 1 100%', '1 1 auto'],
    textDecoration: 'none',
    color: 'inherit',
  },
  '.search-card-actions': {
    opacity: [1, 0],
  },
}

const containerActive: SxStyleProp = {
  ...container,
  ':hover': {
    background: '#F8F7FC',
    borderColor: '#D8D8E3',
    '.searchCardTitle, .searchCardDescription': {
      color: '#142032',
    },
    '.search-card-icon': {
      '> path': {
        stroke: '#000711',
      },
    },
    '.search-card-icon-wrap': {
      backgroundColor: '#EDEAF6',
    },
    '.search-card-actions': {
      opacity: 1,
    },
  },
}

const cardBody: SxStyleProp = {
  alignItems: 'flex-start',
  minWidth: 0,
  width: '100%',
}

const cardText: SxStyleProp = {
  minWidth: 0,
  flex: 1,
}

const iconWrap: SxStyleProp = {
  flexShrink: 0,
  width: ['32px', '36px'],
  height: ['32px', '36px'],
  borderRadius: '8px',
  backgroundColor: '#F4F2FA',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  mr: ['10px', '12px'],
  mt: '2px',
}

const title: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  fontSize: ['15px', '18px'],
  fontWeight: '600',
  lineHeight: ['20px', '24px'],
  color: '#142032',
}

const titleText: SxStyleProp = {
  minWidth: 0,
  flex: 1,
  display: 'inline',
  whiteSpace: 'normal',
  overflowWrap: 'break-word',
  wordBreak: 'break-word',
}

const httpMethod: SxStyleProp = {
  mr: '8px',
  flexShrink: 0,
  alignSelf: 'center',
}

const icon: SxStyleProp = {
  width: '18px',
  height: '18px',
  color: '#4A596B',
  path: {
    stroke: '#4A596B',
  },
}

const description: SxStyleProp = {
  fontSize: ['13px', '16px'],
  lineHeight: ['18px', '22px'],
  color: 'muted.0',
  mt: '6px',
  mb: ['6px', '8px'],
  minWidth: 0,
  overflowWrap: 'break-word',
  wordBreak: 'break-word',
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: [3, 4],
  WebkitBoxOrient: 'vertical',
}

const descriptionToggle: SxStyleProp = {
  height: 'auto',
  minWidth: 'auto',
  cursor: 'pointer',
}

const descriptionExpandedItem: SxStyleProp = {
  mt: '24px',
}

const breadcrumbsContainer: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
  minWidth: 0,
  maxWidth: '100%',
  overflow: 'hidden',
}

const alignCenter: SxStyleProp = {
  alignItems: 'center',
  minWidth: 0,
  flexShrink: 1,
}

const documentation: SxStyleProp = {
  ...alignCenter,
  minWidth: 0,
  maxWidth: ['46%', 'none'],
  flexShrink: 0,
}

const breadcrumb: SxStyleProp = {
  color: 'muted.1',
  fontSize: ['12px', '14px'],
  lineHeight: ['16px', '18px'],
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}

const lastBreadcrumb: SxStyleProp = {
  ...breadcrumb,
  margin: 'auto 0',
  display: 'block',
  overflow: 'hidden',
  maxWidth: 'max-content',
  whiteSpace: 'nowrap',
}

const breadcrumbsIn: SxStyleProp = {
  ...breadcrumb,
  mr: '4px',
  minWidth: 'fit-content',
}

const breadcrumbsArrow: SxStyleProp = {
  width: '16px',
  height: '16px',
  color: 'muted.2',
  flexShrink: 0,
}

const actionContainer: SxStyleProp = {
  alignItems: 'center',
  mt: '8px',
}

const actionIcon: SxStyleProp = {
  minWidth: '16px',
  minHeight: '16px',
  width: '16px',
  height: '16px',
  mr: '8px',
}

const cardToolbar: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: ['flex-end', 'flex-start'],
  gap: '8px',
  width: ['100%', 'auto'],
  mt: ['8px', 0],
  ml: [0, '8px'],
  flexShrink: 0,
}

const cardActions: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
}

const actionButton: SxStyleProp = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: ['28px', '32px'],
  height: ['28px', '32px'],
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

const actionButtonCopied: SxStyleProp = {
  ...actionButton,
  borderColor: '#8CD2A8',
  color: '#36875A',
  background: '#F0FAF4',
}

export default {
  containerActive,
  cardBody,
  cardText,
  iconWrap,
  title,
  titleText,
  httpMethod,
  icon,
  description,
  descriptionToggle,
  descriptionExpandedItem,
  breadcrumbsContainer,
  alignCenter,
  documentation,
  breadcrumb,
  lastBreadcrumb,
  breadcrumbsIn,
  breadcrumbsArrow,
  actionContainer,
  actionIcon,
  cardToolbar,
  cardActions,
  actionButton,
  actionButtonCopied,
}
