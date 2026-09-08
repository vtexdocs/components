import type { SxStyleProp } from '@vtex/brand-ui'

const dateContainer: SxStyleProp = {
  alignItems: 'center',
  color: '#5E6E84',
  fontSize: '13px',
  lineHeight: '20px',
  fontWeight: '400',
  columnGap: '6px',
  rowGap: '2px',
  flexWrap: 'wrap',
  width: '100%',
}

const dateItem: SxStyleProp = {
  color: 'inherit',
  fontSize: 'inherit',
  lineHeight: 'inherit',
}

const dateLabel: SxStyleProp = {
  fontWeight: '500',
  paddingRight: '4px',
}

const dateSeparator: SxStyleProp = {
  color: '#8A94A3',
  flexShrink: 0,
}

export default { dateContainer, dateItem, dateLabel, dateSeparator }
