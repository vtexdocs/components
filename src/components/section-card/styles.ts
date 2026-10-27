import type { SxStyleProp } from '@vtex/brand-ui'

import landingTokens from '../../styles/tokens'

const { type } = landingTokens

const container: SxStyleProp = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  minWidth: 0,
  boxSizing: 'border-box',
  borderRadius: landingTokens.cardRadius,
  border: `1px solid ${landingTokens.border}`,
  backgroundColor: 'white',
  overflow: 'hidden',
  textDecoration: 'none',
  color: 'inherit',
  transition:
    'border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease',
  '.title, .description, .footer': {
    transition: 'color 0.2s ease, border-color 0.2s ease',
  },

  ':active, :hover': {
    cursor: 'pointer',
    borderColor: landingTokens.cardHoverBorder,
    boxShadow: landingTokens.cardShadow,
    transform: 'translateY(-2px)',

    '.description': {
      color: landingTokens.body,
    },

    '.footer': {
      borderColor: landingTokens.cardHoverBorder,
      color: landingTokens.ink,
    },
  },
}

const content: SxStyleProp = {
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  py: '28px',
  px: '24px',
  textAlign: 'center',
  backgroundColor: 'white',
}

const icon: SxStyleProp = {
  width: '28px',
  height: 'auto',
  color: landingTokens.body,
  path: {
    stroke: landingTokens.body,
  },
}

const title: SxStyleProp = {
  mt: '12px',
  mb: '8px',
  fontSize: type.cardTitle,
  lineHeight: type.cardTitleLine,
  color: landingTokens.ink,
  letterSpacing: '-0.01em',
}

const description: SxStyleProp = {
  fontSize: type.cardBody,
  lineHeight: type.cardBodyLine,
  color: landingTokens.muted,
  overflow: 'hidden',
}

const footer: SxStyleProp = {
  minHeight: '56px',
  justifyContent: 'center',
  alignItems: 'center',
  columnGap: '6px',
  borderTop: `1px solid ${landingTokens.border}`,
  backgroundColor: landingTokens.surface,
  color: landingTokens.body,
  svg: {
    color: 'inherit',
  },
}

const cta: SxStyleProp = {
  fontSize: type.cardCta,
  lineHeight: type.cardCtaLine,
  fontWeight: '500',
  color: 'inherit',
}

export default {
  container,
  content,
  icon,
  title,
  description,
  footer,
  cta,
}
