import { SxStyleProp } from '@vtex/brand-ui'

const seeAlsoContainer: SxStyleProp = {
  width: '100%',
  maxWidth: '100%',
  minWidth: 0,
  mt: ['8px', '16px'],
  pt: ['20px', '24px'],
  borderTop: '1px solid #E7E9EE',
  a: {
    color: 'inherit',
    fontWeight: 'inherit',
  },
  h2: {
    mt: '0 !important',
    mb: ['12px', '16px'],
    fontSize: ['16px', '18px'],
    lineHeight: ['24px', '26px'],
    fontWeight: '600',
    color: '#142032',
  },
}

const sectionTitle: SxStyleProp = {
  display: 'block',
  fontSize: ['16px', '18px'],
  lineHeight: ['24px', '26px'],
  marginBottom: ['12px', '16px'],
  fontWeight: '600',
  color: '#142032',
}

const cards: SxStyleProp = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
  gap: '12px',
  width: '100%',
  minWidth: 0,
}

export default {
  seeAlsoContainer,
  sectionTitle,
  cards,
}
