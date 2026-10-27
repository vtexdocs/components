import type { SxStyleProp } from '@vtex/brand-ui'

import landingTokens from '../../styles/tokens'

const { cardGap, cardsPerRow, contentMaxWidth } = landingTokens
const rowGap = cardGap[cardGap.length - 1]

const cardWidth = (perRow: number) =>
  `calc((100% - ${perRow - 1} * ${rowGap}) / ${perRow})`

const container: SxStyleProp = {
  width: '100%',
  maxWidth: contentMaxWidth,
  mx: 'auto',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'stretch',
  gap: [...cardGap],
}

const item: SxStyleProp = {
  display: 'flex',
  flexGrow: 0,
  flexShrink: 0,
  flexBasis: ['100%', cardWidth(2), cardWidth(2), cardWidth(cardsPerRow)],
  minWidth: 0,
}

export default {
  container,
  item,
}
