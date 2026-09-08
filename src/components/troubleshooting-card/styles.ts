import type { SxStyleProp } from '@vtex/brand-ui'

const devportalContainer: SxStyleProp = {
  mt: '16px',
  padding: '25px',
  borderRadius: '4px',
  border: '1px solid #E7E9EE',
  width: '100%',
  transition: 'all 0.3s ease-out',
  ':hover': {
    cursor: 'pointer',
  },
  ':active, :hover': {
    borderColor: 'muted.2',
    boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3 ease-out',

    '.title, .description': {
      transition: 'all 0.3s ease-out',
      color: '#000711',
    },
  },
}

const helpcenterContainer: SxStyleProp = {
  px: ['20px', '32px', '36px', '48px'],
  py: ['20px', '24px'],
  display: 'flex',
  flexDirection: 'column',
  gap: ['12px', '16px'],
  borderRadius: '4px',
  border: '1px solid #E7E9EE',
  width: '100%',
  maxWidth: '100%',
  minWidth: 0,
  boxSizing: 'border-box',
  transition: 'all 0.3s ease-out',
  ':hover': {
    cursor: 'pointer',
  },
  ':active, :hover': {
    boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3 ease-out',

    '.title': {
      transition: 'all 0.3s ease-out',
      color: '#000711',
    },
  },
}

const title: SxStyleProp = {
  mb: '8px',
  fontSize: ['16px', '18px', '20px'],
  fontWeight: '400',
  lineHeight: ['24px', '28px', '30px'],
  color: 'muted.0',
  overflowWrap: 'anywhere',
}

const description: SxStyleProp = {
  fontSize: '16px',
  lineHeight: '22px',
  fontWeight: '400',
  color: 'muted.1',
  overflow: 'hidden',
  width: '100%',
  height: '50%',
  display: ['none', 'none', 'block', 'block', 'block', 'block', 'block'],
}

const tag: SxStyleProp = {
  width: 'max-content',
  maxWidth: '100%',
  px: '8px',
  margin: '4px',
  overflowWrap: 'anywhere',
}

const tagsContainer: SxStyleProp = {
  display: 'flex',
  flexWrap: 'wrap',
  mt: '12px',
  gap: '16px',
}

const tagGroup: SxStyleProp = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
}

const groupsContainer: SxStyleProp = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '12px 20px',
}

const groupContainer: SxStyleProp = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '8px',
  flex: '0 1 auto',
  maxWidth: '100%',
}

const helpcenterTagsContainer: SxStyleProp = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
}

export default {
  devportalContainer,
  helpcenterContainer,
  title,
  description,
  tag,
  tagsContainer,
  tagGroup,
  groupsContainer,
  groupContainer,
  helpcenterTagsContainer,
}
