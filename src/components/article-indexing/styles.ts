import type { SxStyleProp } from '@vtex/brand-ui'

const cardsContainer: SxStyleProp = {
  mx: 'auto',
  px: ['16px', '32px'],
  py: ['24px', '48px'],
  width: '100%',
  // 720px content width (same as the `list` variant used in Help Center) + 2 * 32px horizontal padding
  maxWidth: ['100%', '100%', '100%', '100%', '784px'],
  boxSizing: 'border-box',
  color: '#4A4A4A',
}

const cardsBreadcrumb: SxStyleProp = {
  mb: '16px',
}

const cardsTitle: SxStyleProp = {
  mb: ['24px', '32px'],
  fontSize: ['28px', '36px'],
  lineHeight: ['36px', '44px'],
  fontWeight: '400',
  color: '#4A4A4A',
}

const cardsGrid: SxStyleProp = {
  display: 'grid !important',
  gridTemplateColumns: ['1fr', 'repeat(2, minmax(0, 1fr))'],
  gap: ['12px', '16px'],
  width: '100%',
  minWidth: 0,
  alignItems: 'stretch',
}

const breadcrumbRow: SxStyleProp = {
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  gap: '8px',
  width: '100%',
  minWidth: 0,
}

const listInnerContainer: SxStyleProp = {
  justifyContent: 'center',
  width: '100%',
  minWidth: 0,
  boxSizing: 'border-box',
  pt: ['24px', '32px', '3em'],
  mx: 'auto',
  px: ['18px', '24px', '32px', '40px', '48px', '64px', '20em'],
  pb: ['48px', '64px', '72px'],
}

const listArticleBox: SxStyleProp = {
  fontSize: '1em',
  lineHeight: '1.75em',
  flex: '1 1 auto',
  width: '100%',
  minWidth: 0,
  maxWidth: '100%',
  color: 'rgb(51, 65, 85)',
  overflowWrap: 'anywhere',
  a: {
    color: '#E31C58',
    textDecoration: 'none',
    fontWeight: '500',
  },
  header: {
    marginTop: ['8px', '16px'],
    borderBottom: '1px solid #E7E9EE',
    marginBottom: ['8px', '12px'],
    pb: ['12px', '16px'],
  },
}

const listContentContainer: SxStyleProp = {
  width: '100%',
  minWidth: 0,
  maxWidth: ['100%', '100%', '100%', '100%', '720px', '720px', '720px'],
}

const listTextContainer: SxStyleProp = {
  width: '100%',
  minWidth: 0,
  maxWidth: '100%',
  gap: '8px',
  pb: ['16px', '24px', '32px'],
  mb: ['8px', '24px', '48px'],
}

const listTitle: SxStyleProp = {
  display: 'block',
  marginTop: ['16px', '16px', '24px'],
  marginBottom: 0,
  fontSize: ['28px', '28px', '36px'],
  lineHeight: ['36px', '36px', '44px'],
  fontWeight: '400',
  color: '#142032',
  overflowWrap: 'anywhere',
}

const listSectionTitle: SxStyleProp = {
  fontSize: '1.375em',
}

const listLinksContainer: SxStyleProp = {
  flexWrap: 'wrap',
  gap: '16px',
  mt: '32px',
}

const listItem: SxStyleProp = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  padding: '16px 20px',
  border: '1px solid',
  borderColor: 'muted.3',
  borderRadius: '8px',
  cursor: 'pointer',
  width: [
    '100%',
    '100%',
    'calc(50% - 8px)',
    'calc(50% - 8px)',
    'calc(50% - 8px)',
    'calc(50% - 8px)',
    'calc(50% - 8px)',
  ],
  color: 'muted.0',
  textDecoration: 'none',
  ':hover': {
    backgroundColor: 'muted.4',
    borderColor: '#C0C8D2',
  },
}

const listItemName: SxStyleProp = {
  fontWeight: 'medium',
  fontSize: '16px',
}

const listItemDescription: SxStyleProp = {
  mt: '6px',
  fontSize: '14px',
  lineHeight: '20px',
  color: 'muted.1',
}

export default {
  cardsContainer,
  cardsBreadcrumb,
  cardsTitle,
  cardsGrid,
  breadcrumbRow,
  listInnerContainer,
  listArticleBox,
  listContentContainer,
  listTextContainer,
  listTitle,
  listSectionTitle,
  listLinksContainer,
  listItem,
  listItemName,
  listItemDescription,
}
