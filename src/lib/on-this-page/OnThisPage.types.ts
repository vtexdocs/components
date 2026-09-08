import { Item } from 'lib/table-of-contents/TableOfContents.types'

export interface OnThisPageProps {
  /** List of headings in the current documentation page */
  headingList?: Item[]
}
