import type { SxStyleProp } from '@vtex/brand-ui'
import {
  searchFieldClearButton,
  searchFieldIcon,
  searchFieldInput,
  searchFieldShell,
} from 'styles/search-field'

const container: SxStyleProp = {
  ...searchFieldShell,
  width: '100%',
}

const input: SxStyleProp = searchFieldInput

const icon: SxStyleProp = searchFieldIcon

const clearButton: SxStyleProp = searchFieldClearButton

const clearIcon: SxStyleProp = {
  width: '14px',
  height: '14px',
}

export default { container, input, icon, clearButton, clearIcon }
