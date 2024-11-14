import type { SxStyleProp } from '@vtex/brand-ui'

const overviewCard: SxStyleProp = {
  alignItems: 'flex-start',
  margin: '20px 0px',
  border: '1px solid #E7E9EE',
  borderRadius: '4px',
  padding: '18px 24px 4px',
  color: '#4A596B',
  ':active, :hover': {
    borderColor: 'muted.2',
    boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3 ease-out',
    '*':{
      color: '#000711',
    }
  },
  ul: {
    borderLeft: '1px rgb(202, 203, 204) solid',
    fontSize: '0.9em',
    mt: '0',
    paddingLeft: '1.5em',
    listStyleType: 'none',
    display: 'block',
    textDecoration: 'none',
  },
  'h3, h4': {
    color: '#4A596B',
    fontSize: '1.125em',
    fontWeight: '400',
    my: '0',
  },
}

const overviewIcon: SxStyleProp = {
  marginRight: '1.25em',
  marginTop: '0.375em',
}

export default {
  overviewCard,
  overviewIcon,
}
