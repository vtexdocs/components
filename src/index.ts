export {
  MarkdownRenderer,
  TableOfContents,
  OnThisPage,
  Contributors,
  Sidebar,
  HamburgerMenu,
  FeedbackSection,
  FeedbackModal,
  SearchInput,
  MobileSearch,
  Search,
  CookieBar,
  WhatsNextCard,
  ShareButton,
  CopyLinkButton,
  CopyButton,
  CopyHeadingLink,
  AskAIMenu,
  Breadcrumb,
  Input,
  SubscriptionList,
  Footer,
  Header,
  DropdownMenu,
  AnnouncementBar,
  Tag,
  ListingFilter,
  ChipFilter,
  Tooltip,
  Author,
  TimeToRead,
  TroubleshootingCard,
  filterTroubleshootingItems,
  collectTroubleshootingFilterOptions,
  type Item,
  type OnThisPageProps,
  type ContributorsType,
  type ContributorsProps,
  type TagColor,
  type TagProps,
  type FilterGroup,
  type FilterOption,
  type ListingFilterLabels,
  type ListingFilterProps,
  type ListingFilterSelection,
  type ChipFilterCategory,
  type ChipFilterProps,
  type AuthorProps,
  type TimeToReadProps,
  type TroubleshootingCardProps,
  type TroubleshootingCardVariant,
  type TroubleshootingItem,
  type TroubleshootingFilterState,
  type FooterProps,
  type FooterLink,
  type FooterVariant,
  type HeaderProps,
  type HeaderVariant,
  type DropdownMenuProps,
  type AnnouncementBarProps,
  type AnnouncementBarType,
  type AnnouncementBarAction,
  type Section,
  type SearchInputProps,
  type MobileSearchProps,
  type BreadcrumbItem,
  type BreadcrumbProps,
  type CopyButtonProps,
  type CopyHeadingLinkProps,
  type AskAIMenuProps,
  type AskAIProvider,
  type FeedbackSectionProps,
  type DocPath,
  type FeedbackModalProps,
  type FeedbackModalPayload,
  type WhatsNextDataElement,
} from './lib'

/** @deprecated Use ListingFilter instead */
export { ListingFilter as Filter } from './lib'
export { getDaysElapsed } from 'utils/get-days-elapsed'
export { default as LibraryContextProvider } from 'utils/context/libraryContext'
export { LibraryContext } from 'utils/context/libraryContext'
export { default as SearchConfig } from 'utils/config/search-config'
export type {
  SearchBackendConfig,
  AlgoliaConfig,
  HybridSearchConfig,
} from 'utils/config/search-config'

// Icons
// Documentation Category Icons
export {
  APIGuidesIcon,
  APIReferenceIcon,
  AppDevelopmentIcon,
  ReleaseNotesIcon,
  StorefrontDevelopmentIcon,
  TroubleshootingIcon,
  GearTroubleshootingIcon,
  VTEXIOAppsIcon,
  DocumentationUpdatesIcon,
  HelpCenterIcon,
  VTEXDevPortalIcon,
  VTEXHelpCenterIcon,
  DeveloperPortalIcon,
  FAQIcon,
  KnownIssuesIcon,
  MegaphoneIcon,
  GraphIcon,
  WarningIcon,
  PaperIcon,
  StartHereIcon,
  TutorialsIcon,
  AnnouncementIcon,
} from './components/icons'

// Status/Change Icons
export {
  AddedIcon,
  DeprecatedIcon,
  FixedIcon,
  ImprovedIcon,
  RemovedIcon,
  InfoIcon,
  NewIcon,
} from './components/icons'

// Social Media & Sharing Icons
export {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  LinkIcon,
  ShareIcon,
  TwitterIcon,
  GithubIcon,
  CommunityIcon,
  InstagramIcon,
  YoutubeIcon,
  FacebookCircleIcon,
  LinkedinCircleIcon,
  TwitterCircleIcon,
  ChatGPTIcon,
  ClaudeIcon,
  GeminiIcon,
  CopilotIcon,
} from './components/icons'

// UI Action Icons
export {
  CloseFilterIcon,
  CloseIcon,
  CopyIcon,
  EditIcon,
  ExpandedResultsIcon,
  SearchIcon,
  SideBarToggleIcon,
  TrashcanIcon,
  FilterIcon,
  CheckboxIcon,
  ResizeIcon,
  MenuIcon,
} from './components/icons'

// Navigation Icons
export {
  ArrowLeftIcon,
  ArrowRightIcon,
  CaretIcon,
  LongArrowIcon,
  GridIcon,
  VTEXLogoFooter,
} from './components/icons'

// Feedback Icons
export { LikeIcon, LikeSelectedIcon } from './components/icons'
