import type { SxStyleProp } from '@vtex/brand-ui'

const container: SxStyleProp = {
  mt: '16px',
  borderRadius: '4px',
  border: '1px solid #E7E9EE',
  width: ['100%', '49%'],
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
    '.link, .caret': {
      transition: 'all 0.3s ease-out',
      color: 'muted.0',
    },
  },
}

const title: SxStyleProp = {
  mb: '8px',
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: ['22px', '18px'],
  color: 'muted.0',
}

const imageTitle: SxStyleProp = {
  padding: '16px',
  fontSize: '16px',
  fontWeight: '400',
  color: 'muted.0',
  ':after': {
    content: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='rgb(74 89 108)' %3E%3Cpath fill-rule='evenodd' d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z' clip-rule='evenodd' /%3E%3C/svg%3E")`,
    position: 'absolute',
    height: '16px',
    width: '16px',
    marginLeft: '3px',
    lineHeight: '30px',
  },
}

const description: SxStyleProp = {
  fontSize: '14px',
  fontWeight: '400',
  lineHeight: '20px',
  color: 'muted.0',
}

const linkContainer: SxStyleProp = {
  mt: '8px',
  alignItems: 'center',
}

const link: SxStyleProp = {
  ...description,
  color: 'muted.1',
}

export default {
  container,
  title,
  imageTitle,
  description,
  linkContainer,
  link,
}