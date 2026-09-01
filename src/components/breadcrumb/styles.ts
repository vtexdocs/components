import type { SxStyleProp } from '@vtex/brand-ui'

const muted = '#5E6E84'
const ink = '#142032'
const pink = '#E31C58'

const breadcrumb: SxStyleProp = {
  alignItems: 'center',
  flexWrap: 'wrap',
  rowGap: '4px',
  minWidth: 0,
  color: muted,
  fontSize: '14px',
  lineHeight: '20px',
  fontWeight: '400',
  '&& a, && [data-breadcrumb-label]': {
    color: muted,
    fontWeight: '400',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: ['180px', '280px', 'none'],
  },
  '&& a': {
    cursor: 'pointer',
    transition: 'color 0.15s ease',
    ':hover': {
      color: ink,
    },
    ':focus-visible': {
      outline: `2px solid ${pink}`,
      outlineOffset: '2px',
      borderRadius: '2px',
    },
  },
}

const crumb: SxStyleProp = {
  alignItems: 'center',
  minWidth: 0,
  '&:not(:last-child)::after': {
    content: '""',
    display: 'inline-block',
    width: '5px',
    height: '5px',
    mx: '8px',
    borderRight: '1.5px solid currentColor',
    borderTop: '1.5px solid currentColor',
    transform: 'rotate(45deg)',
    opacity: 0.55,
    flexShrink: 0,
    pointerEvents: 'none',
  },
}

export default { breadcrumb, crumb }
