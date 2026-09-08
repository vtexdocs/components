import type { SxStyleProp } from '@vtex/brand-ui'

const container: SxStyleProp = {
  alignItems: 'center',
  columnGap: '16px',
  pt: '14px',
}

const photo: SxStyleProp = {
  width: '32px',
  height: '32px',
  img: {
    width: '32px',
    height: '32px',
    borderRadius: '100%',
  },
}

export default {
  container,
  photo,
}
