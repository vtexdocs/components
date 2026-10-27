import type { SxStyleProp } from '@vtex/brand-ui'

import articleStyles from '../article-render/styles'

// Mirrors the article page layout so the title and cards line up with the
// article text column, leaving the table-of-contents column empty.
const container: SxStyleProp = {
  ...articleStyles.innerContainer,
  color: '#4A4A4A',
}

const content: SxStyleProp = {
  flex: '1 1 auto',
  width: '100%',
  minWidth: 0,
}

const asideSpacer: SxStyleProp = articleStyles.rightContainer

const breadcrumb: SxStyleProp = {
  mb: '16px',
}

const title: SxStyleProp = {
  display: 'block',
  mb: ['24px', '32px'],
  pb: ['12px', '16px'],
  borderBottom: '1px solid #E7E9EE',
  fontSize: ['28px', '36px'],
  lineHeight: ['36px', '44px'],
  fontWeight: '400',
  color: '#4A4A4A',
}

const grid: SxStyleProp = {
  display: 'grid !important',
  gridTemplateColumns: ['1fr', 'repeat(2, minmax(0, 1fr))'],
  gap: ['12px', '16px'],
  width: '100%',
  minWidth: 0,
  alignItems: 'stretch',
}

export default {
  container,
  content,
  asideSpacer,
  breadcrumb,
  title,
  grid,
}
