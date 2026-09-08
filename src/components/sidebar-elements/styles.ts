import { SxStyleProp } from '@vtex/brand-ui'

const elementContainer: SxStyleProp = {
  maxWidth: '100%',
  background: '#FFFFFF',
  borderRadius: '8px',
  ':hover': {
    background: '#F8F7FC',
    a: {
      color: '#142032',
      textDecoration: 'none',
    },
  },
}

const elementContainerHamburger: SxStyleProp = {
  ...elementContainer,
  borderRadius: '8px',
  px: '8px',
}

const linkReset: SxStyleProp = {
  pl: "1px",
  textDecoration: 'none !important',
  ':hover, :focus, :visited, :active': {
    textDecoration: 'none !important',
  },
}

const elementText: SxStyleProp = {
  color: '#4A596B',
  fontSize: '14px',
  lineHeight: '20px',
  fontWeight: '400',
  textAlign: 'initial',
  paddingBlock: '8px',
  display: 'flex',
  alignItems: 'flex-start',
  gap: '8px',
  flex: 1,
  minWidth: 0,
  whiteSpace: 'normal',
  overflowWrap: 'break-word',
  cursor: 'pointer',
  ...linkReset,
}

const elementActive: SxStyleProp = {
  ...elementText,
  color: '#D71D55 !important',
}

const arrowIcon: SxStyleProp = {
  padding: '0',
  margin: '0',
  color: '#A1A8B3',
  height: '36px',
  minHeight: '36px',
  minWidth: '16px',
  width: '16px',
  maxWidth: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
}

const arrowIconHamburger: SxStyleProp = {
  ...arrowIcon,
  height: '44px',
  minHeight: '44px',
  minWidth: '20px',
  width: '20px',
  maxWidth: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  color: '#A1A8B3',
}

const arrowIconSpacer: SxStyleProp = {
  width: '6px',
  minWidth: '6px',
  maxWidth: '16px',
  flexShrink: 0,
}

const arrowIconSpacerHamburger: SxStyleProp = {
  width: '8px',
  minWidth: '8px',
  maxWidth: '20px',
  flexShrink: 0,
}

const nestedGroup: SxStyleProp = {
  ml: '8px',
  pl: '8px',
  borderLeft: '1px solid #E7E9EE',
}

const nestedGroupFirst: SxStyleProp = {
  pl: '16px',
}

const nestedGroupHamburger: SxStyleProp = {
  ml: '12px',
  pl: '8px',
  borderLeft: '1px solid #E7E9EE',
}

const nestedGroupHamburgerFirst: SxStyleProp = {
  pl: '20px',
}

const arrowIconActive: SxStyleProp = {
  ...arrowIcon,
  color: '#D71D55',
}

const arrowIconActiveHamburger: SxStyleProp = {
  ...arrowIconHamburger,
  color: '#D71D55',
}

const elementButton: SxStyleProp = {
  textTransform: 'initial',
  fontVariationSettings: 'unset',
  padding: '0',
  margin: '0',
  textDecoration: 'none !important',
}

const methodBox: SxStyleProp = {
  mr: 0,
  flexShrink: 0,
}

const sectionDivider: SxStyleProp = {
  hr: {
    border: '1px solid #E7E9EE',
    borderTop: 'none',
  },
}

export default {
  elementContainer,
  elementContainerHamburger,
  elementText,
  elementActive,
  arrowIcon,
  arrowIconHamburger,
  arrowIconSpacer,
  arrowIconSpacerHamburger,
  arrowIconActive,
  arrowIconActiveHamburger,
  nestedGroup,
  nestedGroupFirst,
  nestedGroupHamburger,
  nestedGroupHamburgerFirst,
  elementButton,
  methodBox,
  sectionDivider,
}
