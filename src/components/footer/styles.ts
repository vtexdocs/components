import { SxStyleProp } from '@vtex/brand-ui'

const DESKTOP_FROM = '1024px'

const outerBox: SxStyleProp = {
  bg: '#142032',
  display: 'flex',
  flexDirection: 'column',
  px: ['24px', '32px', '48px', '64px'],
  py: ['32px', '40px', '48px'],
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: ['24px', '32px'],
  width: '100%',
  boxSizing: 'border-box',
  [`@media screen and (min-width: ${DESKTOP_FROM})`]: {
    flexDirection: 'row',
    alignItems: 'center',
  },
}

const brandAndSocial: SxStyleProp = {
  display: 'flex',
  flexDirection: ['column', 'row'],
  alignItems: ['flex-start', 'center'],
  gap: ['16px', '24px', '32px'],
  flexShrink: 0,
  width: '100%',
  [`@media screen and (min-width: ${DESKTOP_FROM})`]: {
    width: 'auto',
  },
}

const logo: SxStyleProp = {
  width: '61px',
  height: '22px',
  flexShrink: 0,
}

const socialMediaIcons: SxStyleProp = {
  gap: ['12px', '16px'],
  alignItems: 'center',
  flexWrap: 'wrap',
  a: {
    display: 'flex',
    alignItems: 'center',
    lineHeight: 0,
  },
}

const textLinkItems: SxStyleProp = {
  fontSize: ['14px', '16px'],
  gap: ['12px 20px', '16px 24px', '24px 32px', '45px'],
  flexWrap: 'wrap',
  alignItems: 'center',
  minWidth: 0,
  maxWidth: '100%',
  width: '100%',
  a: {
    color: '#CCCED8',
    whiteSpace: 'nowrap',
  },
  [`@media screen and (min-width: ${DESKTOP_FROM})`]: {
    width: 'auto',
    flex: 1,
    justifyContent: 'flex-end',
  },
}

const localeSwitch: SxStyleProp = {
  flexShrink: 0,
}

const icon: SxStyleProp = {
  size: [28, 32],
  color: '#CCCED7',
  transition: 'all 0.3s ease-out',
  borderRadius: '50%',
  ':hover': {
    color: 'white',
    backgroundColor: 'rgba(204, 206, 215, 0.3)',
  },
}

export default {
  outerBox,
  brandAndSocial,
  logo,
  socialMediaIcons,
  textLinkItems,
  localeSwitch,
  icon,
}
