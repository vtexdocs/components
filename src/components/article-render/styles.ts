import type { SxStyleProp } from '@vtex/brand-ui'

const MUTED = '#5E6E84'

const innerContainer: SxStyleProp = {
  justifyContent: 'center',
  width: '100%',
  minWidth: 0,
  boxSizing: 'border-box',
  pt: ['24px', '32px', '3em'],
  mx: 'auto',
  px: ['18px', '24px', '32px', '40px', '48px', '64px', '20em'],
  pb: ['48px', '64px', '72px'],
}

const articleBox: SxStyleProp = {
  fontSize: '1em',
  lineHeight: '1.75em',
  flex: '1 1 auto',
  width: '100%',
  minWidth: 0,
  maxWidth: '100%',
  color: 'rgb(51, 65, 85)',
  overflowWrap: 'anywhere',
  img: {
    maxWidth: '100%',
    height: 'auto',
  },
  pre: {
    maxWidth: '100%',
    overflowX: 'auto',
  },
  iframe: {
    maxWidth: '100%',
  },
  a: {
    color: '#E31C58',
    textDecoration: 'none',
    fontWeight: '500',
  },
  ul: {
    pl: '1.5em',
    mt: '1.25em',
    mb: '1.25em',
    li: {
      mt: '0.5em',
      mb: '0.5em',
    },
    listStyleType: 'disc',
    'ul, ol': {
      mt: '0.5em',
      mb: '0.5em',
    },
  },
  ol: {
    pl: '1.5em',
    mt: '1.25em',
    mb: '1.25em',
    li: {
      mt: '0.5em',
      mb: '0.5em',
    },
    'ul, ol': {
      mt: '0.5em',
      mb: '0.5em',
    },
  },
  header: {
    marginTop: ['8px', '16px'],
    borderBottom: '1px solid #E7E9EE',
    marginBottom: ['8px', '12px'],
    pb: ['12px', '16px'],
  },
  h2: {
    fontSize: '1.375em',
    lineHeight: '1.3em',
    fontWeight: '700',
    mt: ['1.5em', '2em'],
    mb: ['0.75em', '1em'],
    overflowWrap: 'anywhere',
    color: 'rgb(15, 23, 42)',
  },
  h3: {
    fontSize: '1.125em',
    fontWeight: '600',
    lineHeight: '1.6em',
    mt: '1.6em',
    mb: '0.6em',
    overflowWrap: 'anywhere',
  },
  h4: {
    fontSize: '1em',
    fontWeight: '600',
    lineHeight: '1.5em',
    mt: '1.5em',
    mb: '0.5em',
    color: 'rgb(15, 23, 42)',
    overflowWrap: 'anywhere',
  },
  h5: {
    fontSize: '0.9375em',
    fontWeight: '600',
    lineHeight: '1.5em',
    mt: '1.25em',
    mb: '0.5em',
    color: 'rgb(71, 85, 105)',
    overflowWrap: 'anywhere',
  },
  h6: {
    fontSize: '0.9375em',
    fontWeight: '600',
    lineHeight: '1.5em',
    mt: '1.25em',
    mb: '0.5em',
    color: 'rgb(100, 116, 139)',
    overflowWrap: 'anywhere',
  },
  strong: {
    fontWeight: '600',
    overflowWrap: 'break-word',
  },
  hr: {
    border: '0.5px solid #E7E9EE',
    my: ['2em', '3em'],
  },
}

const contentContainer: SxStyleProp = {
  width: '100%',
  minWidth: 0,
  maxWidth: '100%',
}

const documentationTitle: SxStyleProp = {
  display: 'block',
  marginTop: ['16px', '16px', '24px'],
  marginBottom: 0,
  fontSize: ['28px', '28px', '30px'],
  lineHeight: ['36px', '36px', '38px'],
  fontWeight: '400',
  color: '#142032',
  overflowWrap: 'anywhere',
}

const documentationExcerpt: SxStyleProp = {
  display: 'block',
  color: '#4A596B',
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: '400',
  mt: '12px',
  mb: 0,
  overflowWrap: 'anywhere',
}

const breadcrumbRow: SxStyleProp = {
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  gap: '8px',
  width: '100%',
  minWidth: 0,
}

const articleHeaderExtra: SxStyleProp = {
  mt: ['8px', '10px'],
  width: '100%',
  minWidth: 0,
}

const articleMeta: SxStyleProp = {
  flexDirection: 'column-reverse',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  gap: '10px',
  marginBottom: ['16px', '20px'],
  marginTop: '0',
  width: '100%',
  minWidth: 0,
  '@media screen and (min-width: 40em)': {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '8px 16px',
  },
}

const articleMetaInfo: SxStyleProp = {
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  gap: '2px',
  minWidth: 0,
  width: '100%',
  flex: '0 0 auto',
  '@media screen and (min-width: 40em)': {
    width: 'auto',
    flex: '1 1 auto',
  },
}

const articleReadingTime: SxStyleProp = {
  color: MUTED,
  fontSize: '13px',
  lineHeight: '20px',
  '& > *': {
    color: 'inherit !important',
    fontSize: 'inherit !important',
    lineHeight: 'inherit !important',
  },
}

const articleActions: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '8px',
  flexShrink: 0,
  ml: 0,
  width: '100%',
  minWidth: 0,
  '& > div': {
    width: 'max-content',
    flexShrink: 0,
  },
  '& [role="menu"]': {
    right: 0,
  },
  '@media screen and (min-width: 40em)': {
    justifyContent: 'flex-end',
    ml: 'auto',
    width: 'auto',
  },
}

const bottomContributorsContainer: SxStyleProp = {
  display: ['flex', 'flex', 'flex', 'flex', 'none'],
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  minWidth: 0,
  pt: ['20px', '24px'],
  gap: ['24px', '24px'],
  '[data-cy="feedback-section"]': {
    marginTop: '0',
    marginBottom: '0',
    gap: '12px',
    '& > div:first-of-type': {
      borderBottom: 'none',
      paddingBottom: 0,
      marginBottom: 0,
      marginTop: 0,
    },
  },
}

const bottomContributors: SxStyleProp = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '& > div': {
    alignItems: 'center !important',
    width: 'auto !important',
    mb: '0 !important',
  },
  '[data-cy="contributors-container"]': {
    display: 'flex !important',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: 'auto !important',
    maxWidth: '232px',
  },
}

const rightContainer: SxStyleProp = {
  ml: [0, 0, 0, 0, '48px', '68px', '200px'],
  display: [
    'none !important',
    'none !important',
    'none !important',
    'none !important',
    'initial !important',
  ],
  flexShrink: 0,
  width: [0, 0, 0, 0, '240px', '240px', '284px'],
}

const divider: SxStyleProp = {
  borderTop: '1px solid #E7E9EE',
  pt: 4,
  mt: 4,
}

const textContainer: SxStyleProp = {
  width: '100%',
  minWidth: 0,
  maxWidth: '100%',
  gap: '8px',
  pb: ['16px', '24px', '32px'],
  mb: ['8px', '24px', '48px'],
}

const editContainer: SxStyleProp = {
  my: 3,
  gap: 2,
}

export default {
  innerContainer,
  articleBox,
  contentContainer,
  documentationTitle,
  documentationExcerpt,
  breadcrumbRow,
  articleHeaderExtra,
  articleMeta,
  articleMetaInfo,
  articleReadingTime,
  articleActions,
  bottomContributorsContainer,
  bottomContributors,
  rightContainer,
  divider,
  textContainer,
  editContainer,
}
