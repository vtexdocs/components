import { SxStyleProp } from '@vtex/brand-ui'

const sectionContainer: (disabled?: boolean) => SxStyleProp = (
  disabled = false
) => ({
  justifyContent: 'space-between',
  padding: '8px',
  mb: '8px',
  cursor: disabled ? 'not-allowed' : 'pointer',
  opacity: disabled ? 0.5 : 1,
  ':active, :hover': disabled
    ? {}
    : {
        backgroundColor: '#F8F7FC',
        borderRadius: '4px',
        '.search-section-title': {
          color: '#000711',
        },
        '.search-section-count': {
          background: '#E7E9EE',
        },
      },
})

const sectionIconTitleBox: SxStyleProp = {
  alignItems: 'center',
}

const sectionIcon: (disabled?: boolean) => SxStyleProp = (
  disabled = false
) => ({
  width: '16px',
  height: '16px',
  minWidth: '16px',
  minHeight: '16px',
  mr: '8px',
  opacity: disabled ? 0.6 : 1,
})

const sectionTitle: (disabled?: boolean) => SxStyleProp = (
  disabled = false
) => ({
  fontSize: '12px',
  lineHeight: '16px',
  color: disabled ? '#AFAFAF' : undefined,
})

const sectionTitleActive: SxStyleProp = {
  ...sectionTitle(),
  color: '#142032',
  fontWeight: '600',
}

const sectionCount: SxStyleProp = {
  background: '#F8F7FC',
  borderRadius: '24px',
  width: 'auto',
  textAlign: 'center',
  px: '8px',
  fontSize: '12px',
  lineHeight: '16px',
}

const allResultsText: SxStyleProp = {
  ...sectionTitle(),
  ml: '24px',
}

const allResultsTextActive: SxStyleProp = {
  ...allResultsText,
  fontWeight: 'bold',
  color: '#0C1522',
}

export default {
  sectionContainer,
  sectionIconTitleBox,
  sectionIcon,
  sectionTitle,
  sectionTitleActive,
  sectionCount,
  allResultsText,
  allResultsTextActive,
}
