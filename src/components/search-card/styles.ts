import { SxStyleProp } from '@vtex/brand-ui'
import { methodsColors } from 'components/method-category/functions'
import { MethodType } from 'utils/typings/unionTypes'

const container: SxStyleProp = {
  position: 'relative',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  borderRadius: '12px',
  border: '1px solid #E7E9EE',
  width: '100%',
  mb: '16px',
  padding: ['16px', '20px 24px'],
  background: '#FFFFFF',
  cursor: 'pointer',
  a: {
    minWidth: 0,
    flex: 1,
    textDecoration: 'none',
    color: 'inherit',
  },
  '.search-card-actions': {
    opacity: [1, 0],
  },
}

const containerActive = (method: MethodType | undefined): SxStyleProp => {
  const methodCategory = method ? methodsColors[method] : ''
  return {
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
      '.method-category': {
        ...methodCategory,
      },
      '.search-card-actions': {
        opacity: 1,
      },
    },
  }
}

const cardBody: SxStyleProp = {
  alignItems: 'flex-start',
  minWidth: 0,
}

const cardText: SxStyleProp = {
  minWidth: 0,
  flex: 1,
}

const iconWrap: SxStyleProp = {
  flexShrink: 0,
  width: '36px',
  height: '36px',
  borderRadius: '8px',
  backgroundColor: '#F4F2FA',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  mr: '12px',
  mt: '2px',
}

const title: SxStyleProp = {
  display: 'flex',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  fontSize: ['16px', '18px'],
  fontWeight: '600',
  lineHeight: ['22px', '24px'],
  color: '#142032',
}

const httpMethod: SxStyleProp = {
  mr: '8px',
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
  fontSize: ['14px', '16px'],
  lineHeight: ['20px', '22px'],
  color: 'muted.0',
  mt: '6px',
  mb: '8px',
  minWidth: 0,
  overflowWrap: 'break-word',
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: 4,
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
  display: ['none', 'flex'],
  alignItems: 'center',
  minWidth: 0,
}

const alignCenter: SxStyleProp = {
  alignItems: 'center',
}

const documentation: SxStyleProp = {
  ...alignCenter,
  minWidth: 'max-content',
}

const breadcrumb: SxStyleProp = {
  color: 'muted.1',
  fontSize: '14px',
  lineHeight: '18px',
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
  gap: '8px',
  ml: '8px',
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
  width: '32px',
  height: '32px',
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
