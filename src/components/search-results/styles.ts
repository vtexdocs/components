import { SxStyleProp } from '@vtex/brand-ui'

const resultContainer: SxStyleProp = {
  width: ['100%', '100%', '544px', '544px', '720px', '720px', '1400px'],
  maxWidth: '100%',
  boxSizing: 'border-box',
  px: ['16px', '24px', 0, 0, 0, 0, 0],
  paddingTop: ['12px', '16px', '24px', '32px'],
  paddingBottom: ['24px', '24px', '24px', '32px'],
  overflowX: 'hidden',
  hr: {
    marginTop: '16px',
    borderTop: 'none',
    borderColor: '#DDDDDD',
    display: ['none', 'none', 'none', 'block'],
  },
}

const resultText: SxStyleProp = {
  mb: ['12px', '12px', '16px'],
  fontSize: ['13px', '14px', '16px'],
  lineHeight: ['18px', '20px', '22px'],
  color: 'muted.0',
  display: 'block',
}

const resultCount: SxStyleProp = {
  fontWeight: '600',
  color: '#142032',
}

const resultKeyword: SxStyleProp = {
  fontWeight: '600',
  color: '#142032',
  background: '#F8E3EC',
  borderRadius: '4px',
  px: '6px',
  py: '1px',
  wordBreak: 'break-word',
}

const paginationContainer: SxStyleProp = {
  mt: ['48px', '115px'],
  mb: '34px',
  justifyContent: 'center',
}

const paginationLink: SxStyleProp = {
  fontSize: '16px',
  lineHeight: '20px',
  color: '#EE2565',
  cursor: 'pointer',
}

const paginationLinkDisabled: SxStyleProp = {
  ...paginationLink,
  color: 'muted.1',
}

const paginationNumber: SxStyleProp = {
  display: 'flex',
  fontSize: ['14px', '16px'],
  lineHeight: '20px',
  color: '#4A596B',
  mx: ['18px', '27px'],
}

const paginationActualNumber: SxStyleProp = {
  fontWeight: '700',
  mx: '4px',
}

const noResults: SxStyleProp = {
  justifyContent: 'center',
  alignContent: 'center',
  padding: ['24px 8px', '12px'],
  textAlign: 'center',
}

const hitListItem: SxStyleProp = {
  width: '100%',
  minWidth: 0,
}

export default {
  resultContainer,
  resultText,
  resultCount,
  resultKeyword,
  paginationContainer,
  paginationLink,
  paginationLinkDisabled,
  paginationNumber,
  paginationActualNumber,
  noResults,
  hitListItem,
}
