import { SxStyleProp } from '@vtex/brand-ui'

const container: SxStyleProp = {
  display: ['flex', 'flex', 'flex', 'none'],
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '8px',
  px: ['16px', '24px'],
  pt: ['12px', '16px'],
  pb: ['4px', '8px'],
}

const tab: (active: boolean) => SxStyleProp = (active) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  height: '32px',
  minHeight: '32px',
  px: '12px',
  py: 0,
  borderRadius: '16px',
  border: `1px solid ${active ? '#F8E3EC' : '#E7E9EE'}`,
  backgroundColor: active ? '#F8E3EC' : '#FFFFFF',
  cursor: 'pointer',
  minWidth: 'max-content',
  ':hover': {
    borderColor: active ? '#F8E3EC' : '#D8D8E3',
    backgroundColor: active ? '#F8E3EC' : '#F8F7FC',
  },
})

const tabIcon: (active: boolean) => SxStyleProp = (active) => ({
  width: '14px',
  height: '14px',
  minWidth: '14px',
  minHeight: '14px',
  color: active ? '#D71D55' : '#4A596B',
  flexShrink: 0,
})

const tabTitle: (active: boolean) => SxStyleProp = (active) => ({
  fontSize: '13px',
  fontWeight: active ? '600' : '500',
  lineHeight: '16px',
  whiteSpace: 'nowrap',
  color: active ? '#D71D55' : '#4A596B',
})

const tabCount: (active: boolean) => SxStyleProp = (active) => ({
  px: '6px',
  fontSize: '11px',
  fontWeight: '500',
  lineHeight: '16px',
  borderRadius: '24px',
  backgroundColor: active ? '#FFFFFF' : '#EDEAF6',
  color: active ? '#D71D55' : '#4A596B',
})

export default { container, tab, tabIcon, tabTitle, tabCount }
