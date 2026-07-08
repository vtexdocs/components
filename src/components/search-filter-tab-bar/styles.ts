import { SxStyleProp } from '@vtex/brand-ui'

const container: SxStyleProp = {
  display: ['flex', 'flex', 'flex', 'none'],
  overflowX: 'scroll',
  scrollbarWidth: 'none',
  '::-webkit-scrollbar': {
    display: 'none',
  },
}

const tab: (active: boolean, disabled?: boolean) => SxStyleProp = (
  active,
  disabled = false
) => ({
  pt: '8px',
  pb: '14px',
  px: '24px',
  cursor: disabled ? 'not-allowed' : 'pointer',
  justifyContent: 'center',
  alignItems: 'center',
  borderBottom: `${active ? 2 : 1}px solid #${active ? 'D71D55' : 'DDDDDD'}`,
  minWidth: 'max-content',
  opacity: disabled ? 0.5 : 1,
})

const tabTitle: (active: boolean, disabled?: boolean) => SxStyleProp = (
  active,
  disabled = false
) => ({
  fontSize: '14px',
  fontWeight: '600',
  lineHeight: '16.38px',
  whiteSpace: 'nowrap',
  color: `#${disabled ? 'AFAFAF' : active ? 'D71D55' : '545454'}`,
})

const tabCount: SxStyleProp = {
  px: '8px',
  ml: '2px',
  fontSize: '12px',
  fontWeight: '400',
  lineHeight: '16px',
  borderRadius: '24px',
  backgroundColor: '#F8F7FC',
}

export default { container, tab, tabTitle, tabCount }
