import type { SxStyleProp } from '@vtex/brand-ui'

const container: SxStyleProp = {
  alignItems: 'center',
  columnGap: ['8px', '10px', '16px'],
  pt: ['8px', '12px', '14px'],
}

const photo: SxStyleProp = {
  flexShrink: 0,
  width: ['24px', '28px', '32px'],
  height: ['24px', '28px', '32px'],
  img: {
    width: '100%',
    height: '100%',
    borderRadius: '100%',
  },
}

const name: SxStyleProp = {
  color: '#4A596B',
  fontSize: ['14px', '14px', '16px'],
  lineHeight: ['20px', '20px', '22px'],
  fontWeight: '400',
  overflowWrap: 'anywhere',
}

export default {
  container,
  photo,
  name,
}
