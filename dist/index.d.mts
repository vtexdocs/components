import * as react_jsx_runtime from 'react/jsx-runtime';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { SxStyleProp, IconProps, TooltipProps } from '@vtex/brand-ui';
import * as React$1 from 'react';
import React__default, { ReactNode, Dispatch, SetStateAction } from 'react';
import { AlgoliaSearchOptions } from 'algoliasearch/lite';

interface MarkdownRendererProps {
    serialized: MDXRemoteSerializeResult;
    customComponents?: {
        [name: string]: any;
    };
    scope?: {
        [name: string]: any;
    };
}

declare const MarkdownRenderer: ({ serialized, customComponents, scope, }: MarkdownRendererProps) => react_jsx_runtime.JSX.Element;

interface SubItem {
    title: string;
    slug: string;
}
interface Item extends SubItem {
    children: SubItem[];
}

interface Props$4 {
    /** List of headings in the current documentation page */
    headingList?: Item[];
    children?: React.ReactNode;
}
/** Table of contents for documentation pages. */
declare const TableOfContents: ({ headingList, children }: Props$4) => react_jsx_runtime.JSX.Element;

interface OnThisPageProps {
    /** List of headings in the current documentation page */
    headingList?: Item[];
}

/** Mobile floating table of contents for documentation pages. */
declare const OnThisPage: ({ headingList }: OnThisPageProps) => react_jsx_runtime.JSX.Element;

interface ContributorsType {
    name: string;
    login: string;
    avatar: string;
    userPage: string;
}
interface ContributorsProps {
    /** GitHub contributors of the current documentation page. */
    contributors: ContributorsType[];
}

/** List of GitHub contributors for a documentation page. */
declare const Contributors: ({ contributors }: ContributorsProps) => react_jsx_runtime.JSX.Element;

interface SideBarSectionState {
    /** Array containing the name of the parents of the expanded page in the menu. */
    parentsArray?: string[];
}
/**
 * Sidebar component.
 */
declare const Sidebar: ({ parentsArray }: SideBarSectionState) => react_jsx_runtime.JSX.Element;

interface HamburgerMenuProps {
    /** Array that contains the name of the sections in the menu that should be expanded. */
    parentsArray?: string[];
}
/** Hamburger Menu component, the menu uses the sidebar components internally, but it is only visible on the smaller breakpoints. */
declare const HamburgerMenu: ({ parentsArray }: HamburgerMenuProps) => react_jsx_runtime.JSX.Element;

interface FeedbackSectionProps {
    /** Slug that corresponds to the current page. */
    slug?: string;
    /** Github edit URL to the corresponding documentation file. */
    urlToEdit?: string;
    /** Whether is possible for the user to suggest edits or not. */
    suggestEdits?: boolean;
    /** Include or not a share button. */
    shareButton?: boolean;
    /**
     * Canonical page URL stored with the vote.
     * Defaults to `window.location.href` so Help Center and Developer Portal
     * both record the page the user is on.
     */
    pageUrl?: string;
    /** Endpoint that receives the like/dislike payload. Defaults to `/api/feedback/`. */
    feedbackEndpoint?: string;
    /** Override the default POST. Receives whether the vote was positive (liked). */
    sendFeedback?: (liked: boolean) => Promise<void>;
    /** Whether to render the small version of the component or not. */
    small?: boolean;
}
/** @deprecated Use FeedbackSectionProps */
type DocPath = FeedbackSectionProps;
declare const FeedbackSection: ({ slug, urlToEdit, suggestEdits, shareButton, pageUrl, feedbackEndpoint, sendFeedback, small, }: FeedbackSectionProps) => react_jsx_runtime.JSX.Element;

type FeedbackModalPayload = {
    name: string;
    email: string;
    type: string;
    feedback: string;
    url: string;
};
interface FeedbackModalProps {
    isOpen: boolean;
    onClose: () => void;
    /**
     * Canonical page URL prefilled in the Article field.
     * Defaults to `window.location.href` so Help Center and Developer Portal
     * both record the page the user is on.
     */
    pageUrl?: string;
    /**
     * @deprecated Use `pageUrl`.
     */
    initialMessage?: string;
    /** Endpoint that receives the form payload. Defaults to `/api/feedback-google`. */
    feedbackEndpoint?: string;
    /** Override the default POST. */
    sendFeedback?: (payload: FeedbackModalPayload) => Promise<void>;
}
declare const FeedbackModal: ({ isOpen, onClose, pageUrl, initialMessage, feedbackEndpoint, sendFeedback, }: FeedbackModalProps) => react_jsx_runtime.JSX.Element;

declare const Search: () => react_jsx_runtime.JSX.Element;

type SearchInputVariant = 'default' | 'modal';

interface SearchInputProps {
    /** `modal` renders a full-width input with results in the document flow. */
    variant?: SearchInputVariant;
    autoFocus?: boolean;
    onClose?: () => void;
}
declare function SearchInput({ variant, autoFocus, onClose, }: SearchInputProps): react_jsx_runtime.JSX.Element;

interface MobileSearchProps {
    /** Called when the search modal opens, e.g. to close the hamburger menu. */
    onOpen?: () => void;
}
declare const MobileSearch: ({ onOpen }: MobileSearchProps) => react_jsx_runtime.JSX.Element;

interface Props$3 {
    onAccept: () => void;
}
declare const CookieBar: ({ onAccept }: Props$3) => react_jsx_runtime.JSX.Element;

type WhatsNextDataElement = {
    title: string;
    description?: string;
    linkTitle?: string;
    linkTo: string;
    image?: string;
};
declare const WhatsNextCard: ({ title, description, linkTitle, linkTo, image, }: WhatsNextDataElement) => react_jsx_runtime.JSX.Element;

interface Props$2 {
    url: string;
    sx?: SxStyleProp;
}
declare const ShareButton: ({ url, sx }: Props$2) => react_jsx_runtime.JSX.Element;

declare const CopyLinkButton: () => react_jsx_runtime.JSX.Element;

type CopyButtonProps = {
    code: string;
    sx?: SxStyleProp;
};
declare const CopyButton: ({ code, sx }: CopyButtonProps) => JSX.Element;

type AskAIProvider = {
    id: string;
    name: string;
    href?: string;
    onClick?: () => void;
};
type AskAIMenuProps = {
    /** Markdown file path sent to `contentEndpoint` and appended to `rawContentBaseUrl`. */
    filePath: string;
    /** Public page URL included in AI prompts. */
    pageUrl: string;
    /** Base URL for viewing raw markdown. `filePath` is appended. */
    rawContentBaseUrl: string;
    providers?: AskAIProvider[];
    onOpenProvider?: (provider: AskAIProvider) => void;
    /** Endpoint that returns markdown for `filePath`. */
    contentEndpoint?: string;
    /** Override the default fetch used by Copy page. */
    onCopyPage?: () => Promise<string>;
};
declare const AskAIMenu: ({ filePath, pageUrl, rawContentBaseUrl, providers, onOpenProvider, contentEndpoint, onCopyPage, }: AskAIMenuProps) => react_jsx_runtime.JSX.Element;

type Section = {
    id: string;
    link: string;
    title: string;
    description: string;
    Icon: (props: IconProps) => JSX.Element;
    isExternalLink?: boolean;
};
type IconComponent = (props: IconProps) => JSX.Element;

type AssistantStreamEvent = {
    type: string;
    name?: string;
    arguments?: Record<string, unknown>;
    output?: string;
    is_final_answer?: boolean;
    content?: string;
};
type ProcessStep = {
    id: string;
    name: string;
    status: 'running' | 'complete';
};
type ChatMessage = {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    steps?: ProcessStep[];
    status: 'streaming' | 'complete' | 'error';
};
type HistoryConversation = {
    id: string;
    title: string;
    messages: ChatMessage[];
};
type AskAssistantFeedback = {
    query: string;
    answer: string;
    liked: boolean;
};
type AskAssistantExampleCategory = {
    id: string;
    title: string;
    Icon?: IconComponent;
    questions: string[];
};
type AssistantStreamHandler = (query: string, signal: AbortSignal, onEvent: (event: AssistantStreamEvent) => void) => Promise<void>;
type AskAssistantProps = {
    /**
     * SSE endpoint. Relative paths are resolved against the current origin.
     */
    streamUrl?: string;
    /** Override the default SSE client (useful in Storybook and tests). */
    stream?: AssistantStreamHandler;
    /** Controlled open state. */
    open?: boolean;
    /** Uncontrolled initial open state. */
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    /** Hide the pill trigger and only render the panel. */
    hideTrigger?: boolean;
    /** Register ⌘/Ctrl + I to toggle the panel. Defaults to true. */
    enableShortcut?: boolean;
    /** Seed the panel with an existing conversation. */
    initialMessages?: ChatMessage[];
    /**
     * Suggested questions shown in the empty state, grouped by category.
     * Dev Portal and Help Center should pass portal-specific lists.
     * Defaults to `DEFAULT_ASK_ASSISTANT_EXAMPLES`. Pass `[]` to hide.
     */
    examples?: AskAssistantExampleCategory[];
    /** Seed the history popover. Replaced by localStorage once a conversation is saved. */
    initialHistory?: HistoryConversation[];
    onAsk?: (query: string) => void;
    onFeedback?: (payload: AskAssistantFeedback) => void;
};

declare const DEFAULT_ASK_ASSISTANT_EXAMPLES: AskAssistantExampleCategory[];

declare const AskAssistant: ({ streamUrl, stream, open, defaultOpen, onOpenChange, hideTrigger, enableShortcut, initialMessages, examples, initialHistory, onAsk, onFeedback, }: AskAssistantProps) => react_jsx_runtime.JSX.Element;

type CopyHeadingLinkProps = {
    /**
     * Heading `id` used as the URL hash. An empty slug means the heading is an
     * h1 (the page title), so the copied URL has no hash.
     */
    slug?: string;
    size?: number;
    sx?: SxStyleProp;
};
declare const CopyHeadingLink: ({ slug, size, sx, }: CopyHeadingLinkProps) => react_jsx_runtime.JSX.Element;

type BreadcrumbItem = {
    slug: string;
    name: string;
    type: string;
};
type BreadcrumbProps = {
    breadcrumbList?: BreadcrumbItem[];
    /** @deprecated Use `breadcrumbList`. Kept for callers that still pass the old typo. */
    breadcumbList?: BreadcrumbItem[];
};
declare const Breadcrumb: ({ breadcrumbList, breadcumbList, }: BreadcrumbProps) => react_jsx_runtime.JSX.Element;

interface InputProps {
    value: string;
    Icon?: IconComponent;
    placeholder?: string;
    onChange: (value: string) => void;
}
declare const Input: ({ value, onChange, placeholder, Icon }: InputProps) => react_jsx_runtime.JSX.Element;

declare const SubscriptionList: React__default.FC;

type FooterLink = {
    label: string;
    href: string;
};
type FooterVariant = 'helpcenter' | 'devportal';
type FooterProps = {
    /**
     * Which site is rendering the Footer. Help Center shows a Developer Portal
     * link; Developer Portal shows a Help Center link.
     */
    variant?: FooterVariant;
    /** Overrides the default GitHub, cross-site, Community, and Feedback links. */
    links?: FooterLink[];
    githubUrl?: string;
    developerPortalUrl?: string;
    helpCenterUrl?: string;
    communityUrl?: string;
    feedbackUrl?: string;
    /** App-specific locale switcher rendered at the end of the link row. */
    localeSwitcher?: ReactNode;
};
declare const Footer: ({ variant, links, githubUrl, developerPortalUrl, helpCenterUrl, communityUrl, feedbackUrl, localeSwitcher, }: FooterProps) => react_jsx_runtime.JSX.Element;

type DropdownMenuProps = {
    sections: Section[][];
};
declare const DropdownMenu: ({ sections }: DropdownMenuProps) => react_jsx_runtime.JSX.Element;

type HeaderVariant = 'helpcenter' | 'devportal';
type HeaderProps = {
    /**
     * Which site is rendering the Header. Controls the default logo.
     * Help Center is the default; Developer Portal should pass `devportal`.
     */
    variant?: HeaderVariant;
    /** When true, the docs dropdown shows `editorSections` instead of docs sections. */
    isEditor?: boolean;
    /**
     * Sections shown in the docs dropdown. Defaults to the hamburger sections
     * from LibraryContext.
     */
    dropdownSections?: Section[][];
    /** Sections shown in the dropdown when `isEditor` is true. */
    editorSections?: Section[];
    /** Slot rendered above the header bar (e.g. AnnouncementBar). */
    announcement?: ReactNode;
    homeHref?: string;
    /** When set, shows the feedback link in the header. Hidden otherwise. */
    feedbackUrl?: string;
    /** Overrides the default logo for the selected variant. */
    logo?: ReactNode;
    /**
     * App-specific items rendered after the docs dropdown (e.g. Help Center
     * announcements). Hidden on small viewports together with RightLinks.
     */
    extraRightLinks?: ReactNode;
    /** App-specific locale switcher rendered next to the hamburger menu. */
    localeSwitcher?: ReactNode;
    /** Parent slugs of the current article, used to expand the mobile sidebar. */
    parentsArray?: string[];
    /**
     * When true, renders AskAssistant next to the search input.
     * Hidden on small viewports together with search.
     */
    showAssistant?: boolean;
    /** Props forwarded to AskAssistant when `showAssistant` is true. */
    assistant?: AskAssistantProps;
};
declare const Header: ({ variant, isEditor, dropdownSections, editorSections, announcement, homeHref, feedbackUrl, logo, extraRightLinks, localeSwitcher, parentsArray, showAssistant, assistant, }: HeaderProps) => react_jsx_runtime.JSX.Element;

type AnnouncementBarType = 'warning' | 'new';
type AnnouncementBarAction = {
    href: string;
    tag?: string;
    button?: string;
    target?: string;
};
type AnnouncementBarProps = {
    type: AnnouncementBarType;
    label?: string;
    closable: boolean;
    action: AnnouncementBarAction;
    children?: ReactNode;
};
declare const AnnouncementBar: ({ closable, type, action: { tag, button, href, target }, label, children, }: AnnouncementBarProps) => react_jsx_runtime.JSX.Element | null;

type TagColor = 'Default' | 'Selected' | 'New' | 'Gray' | 'Blue' | 'Green' | 'Deprecation' | 'Backlog' | 'Fixed' | 'Closed' | 'Scheduled' | 'No_Fix';
type TagProps = {
    sx?: SxStyleProp;
    children: React.ReactNode;
    color?: TagColor;
    onClick?: () => void;
};
declare const Tag: ({ sx, children, color, onClick }: TagProps) => react_jsx_runtime.JSX.Element;

type FilterOption = {
    id: string;
    name: string;
};
type FilterGroup = {
    name: string;
    options: FilterOption[];
};
type ListingFilterLabels = {
    button?: string;
    modalTitle?: string;
    remove?: string;
    apply?: string;
};
type ListingFilterSelection = {
    tag: string[];
    checklist: string[];
};

type ListingFilterProps = {
    tagFilter?: FilterGroup | string[];
    tagFilterName?: string;
    checkBoxFilter?: FilterGroup | string[];
    checkBoxFilters?: FilterGroup[];
    filterName?: string;
    selectedCheckboxes?: string[];
    selectedTags?: string[];
    onApply: (filters: ListingFilterSelection) => void;
    labels?: ListingFilterLabels;
    buttonSx?: SxStyleProp;
    centeredTagOptions?: boolean;
};
declare const ListingFilter: ({ tagFilter, tagFilterName, checkBoxFilter, checkBoxFilters, filterName, onApply, selectedCheckboxes, selectedTags, labels, buttonSx, centeredTagOptions, }: ListingFilterProps) => react_jsx_runtime.JSX.Element;

type ChipFilterCategory = {
    type: string;
    title: string;
    Icon?: IconComponent;
};
type ChipFilterProps = {
    filters: string[];
    categories: ChipFilterCategory[];
    applyCategory: (option: string) => void;
    resetFilters: () => void;
    removeCategory: (option: string) => void;
    getCategoryAmount: (category: string) => number;
    allResultsLabel?: string;
};
declare const ChipFilter: ({ filters, categories, applyCategory, resetFilters, removeCategory, getCategoryAmount, allResultsLabel, }: ChipFilterProps) => react_jsx_runtime.JSX.Element;

interface Props$1 extends Pick<TooltipProps, 'children' | 'label' | 'placement'> {
    sx?: SxStyleProp;
    isCard?: boolean;
    /** When true, the tooltip stays visible even without hover. */
    open?: boolean;
    wrapperSx?: SxStyleProp;
}
declare const Tooltip: ({ children, label, placement, sx, isCard, open, wrapperSx, }: Props$1) => react_jsx_runtime.JSX.Element;

type AuthorProps = {
    contributor: ContributorsType;
};
declare const Author: ({ contributor }: AuthorProps) => react_jsx_runtime.JSX.Element;

type TimeToReadProps = {
    minutes: string;
};
declare const TimeToRead: ({ minutes }: TimeToReadProps) => react_jsx_runtime.JSX.Element;

type TroubleshootingItem = {
    slug: string;
    title: string;
    description?: string;
    tags?: string[];
    domainFilters?: string[];
    symptomFilters?: string[];
};
type TroubleshootingFilterState = {
    search: string;
    domainFilters: string[];
    symptomFilters: string[];
};

type TroubleshootingCardVariant = 'devportal' | 'helpcenter';
type TroubleshootingCardProps = TroubleshootingItem & {
    href?: string;
    basePath?: string;
    variant?: TroubleshootingCardVariant;
};
declare const TroubleshootingCard: ({ title, description, slug, tags, domainFilters, symptomFilters, href, basePath, variant, }: TroubleshootingCardProps) => react_jsx_runtime.JSX.Element;

declare function filterTroubleshootingItems<T extends TroubleshootingItem>(items: T[], { search, domainFilters, symptomFilters }: TroubleshootingFilterState): T[];

declare function collectTroubleshootingFilterOptions<T extends Pick<TroubleshootingItem, 'domainFilters' | 'symptomFilters'>>(items: T[]): {
    domainFilters: string[];
    symptomFilters: string[];
};

declare const getDaysElapsed: (date: Date) => number;

interface Props extends Partial<ContextType> {
    children: ReactNode;
    /** The navigation array containing the list of documentations shown in the sidebar. */
    fallback?: any;
    /** Documentation sections, the same sections that divide the fallback. */
    sections: Section[][];
    /** Whether is a branch preview or not. */
    isPreview: boolean;
    /** The section currently selected. */
    sectionSelected: string;
    /** The sections to be used on the hamburguer menu */
    hamburguerMenuSections: Section[][];
    /** The portal language. The default is english. */
    locale?: 'en' | 'pt' | 'es';
}
type ContextType = {
    headingItems: Item[];
    setHeadingItems: Dispatch<SetStateAction<Item[]>>;
    activeItem: ActiveItem;
    setActiveItem: Dispatch<SetStateAction<ActiveItem>>;
    goToPreviousItem: () => void;
    goToPreviousSubItem: () => void;
    isEditorPreview: boolean;
    sidebarSectionHidden: boolean;
    activeSectionName: string;
    activeSidebarElement: string;
    sidebarDataMaster: any;
    sidebarElementStatus: Map<string, boolean>;
    setSidebarDataMaster: Dispatch<SetStateAction<any>>;
    setIsEditorPreview: Dispatch<SetStateAction<boolean>>;
    setSidebarSectionHidden: Dispatch<SetStateAction<boolean>>;
    setActiveSectionName: Dispatch<SetStateAction<string>>;
    setActiveSidebarElement: Dispatch<SetStateAction<string>>;
    toggleSidebarElementStatus: (title: string, currentlyOpen?: boolean) => void;
    openSidebarElement: (title: string) => void;
    closeSidebarElements: (parentsArray: string[]) => void;
    setOpenSidebarElements: (parentsArray: string[]) => void;
    sidebarSections: Section[][];
    setSidebarSections: Dispatch<SetStateAction<Section[][]>>;
    hamburguerSections: Section[][];
    setHamburguerSections: Dispatch<SetStateAction<Section[][]>>;
    locale: 'en' | 'pt' | 'es';
};
type ActiveItem = {
    item: string;
    subItem: string;
};
declare const LibraryContext: React$1.Context<ContextType>;
/** Provider for the LibraryContext created with React.createContext. The context is used in the following components: feedback, search, sidebar, hamburger menu, markdown renderer and table of contents. */
declare const LibraryContextProvider: ({ children, ...props }: Props) => react_jsx_runtime.JSX.Element;

interface AlgoliaConfig {
    appId: string;
    apiKey: string;
    index: string;
    algoliaOptions?: AlgoliaSearchOptions;
    customOptions?: any;
    instantSearchConfigs?: any;
    useLanguageFilter?: boolean;
}
interface HybridSearchConfig {
    apiEndpoint: string;
    source: 'help-center' | 'dev-portal';
    defaultLimit?: number;
    itemsPerPage?: number;
    useLanguageFilter?: boolean;
    /**
     * Max number of results to request from the upstream API in a single call.
     * The Hybrid Search upstream does not support pagination, so the adapter
     * fetches a large slice once and paginates / filters client-side.
     * Defaults to 100 (the upstream HS_MAX_LIMIT).
     */
    upstreamFetchSize?: number;
    /**
     * TTL (ms) for the in-memory response cache keyed by query+locale.
     * A short TTL is enough to let `connectInfiniteHits` page through the
     * results without re-fetching the upstream on every refineNext call.
     * Defaults to 60_000 ms.
     */
    cacheTtlMs?: number;
}
type SearchBackendConfig = {
    backend: 'algolia';
    algolia: AlgoliaConfig;
} | {
    backend: 'hybrid';
    hybrid: HybridSearchConfig;
    index: string;
};
declare function SearchConfig(config: SearchBackendConfig | AlgoliaConfig): void;

declare const APIGuidesIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const APIReferenceIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const AppDevelopmentIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const ReleaseNotesIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const StorefrontDevelopmentIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const TroubleshootingIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const GearTroubleshootingIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const VTEXIOAppsIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const DocumentationUpdatesIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const HelpCenterIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const DeveloperPortalIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const FAQIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const KnownIssueIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const MegaphoneIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const GraphIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const WarningIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const PaperIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const StartHereIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const TutorialsIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const AnnouncementIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const VTEXDevPortalIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const VTEXHelpCenterIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const AddedIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const DeprecatedIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const FixedIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const ImprovedIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const RemovedIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const InfoIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const NewIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const EmailIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const FacebookIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const LinkedinIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const LinkIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const ShareIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const TwitterIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const GithubIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const CommunityIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const FacebookCircleIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const LinkedinCircleIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const TwitterCircleIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const YoutubeIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const IgIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const ChatGPTIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const ClaudeIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const GeminiIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const CopilotIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const CloseFilterIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const CloseIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const CopyIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const EditIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

interface ExpandedResultsProps extends IconProps {
    active: boolean;
}
declare const ExpandedResultsIcon: ({ active }: ExpandedResultsProps) => react_jsx_runtime.JSX.Element;

declare const SearchIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const SideBarToggleIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const GridIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const TrashcanIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const FilterIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const MenuIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

interface CheckboxProps extends IconProps {
    checked: boolean;
}
declare const CheckboxIcon: (props: CheckboxProps) => react_jsx_runtime.JSX.Element;

declare const ResizeIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const SparkleIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const ExpandIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const CollapseIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const SendIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const RefreshIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const NewChatIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const ArrowLeftIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const ArrowRightIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const CaretIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const LongArrowIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const VTEXLogoFooter: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const LikeIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const LikeSelectedIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

export { APIGuidesIcon, APIReferenceIcon, AddedIcon, type AlgoliaConfig, AnnouncementBar, type AnnouncementBarAction, type AnnouncementBarProps, type AnnouncementBarType, AnnouncementIcon, AppDevelopmentIcon, ArrowLeftIcon, ArrowRightIcon, AskAIMenu, type AskAIMenuProps, type AskAIProvider, AskAssistant, type AskAssistantExampleCategory, type AskAssistantFeedback, type AskAssistantProps, type AssistantStreamEvent, type AssistantStreamHandler, Author, type AuthorProps, Breadcrumb, type BreadcrumbItem, type BreadcrumbProps, CaretIcon, ChatGPTIcon, type ChatMessage, CheckboxIcon, ChipFilter, type ChipFilterCategory, type ChipFilterProps, ClaudeIcon, CloseFilterIcon, CloseIcon, CollapseIcon, CommunityIcon, Contributors, type ContributorsProps, type ContributorsType, CookieBar, CopilotIcon, CopyButton, type CopyButtonProps, CopyHeadingLink, type CopyHeadingLinkProps, CopyIcon, CopyLinkButton, DEFAULT_ASK_ASSISTANT_EXAMPLES, DeprecatedIcon, DeveloperPortalIcon, type DocPath, DocumentationUpdatesIcon, DropdownMenu, type DropdownMenuProps, EditIcon, EmailIcon, ExpandIcon, ExpandedResultsIcon, FAQIcon, FacebookCircleIcon, FacebookIcon, FeedbackModal, type FeedbackModalPayload, type FeedbackModalProps, FeedbackSection, type FeedbackSectionProps, ListingFilter as Filter, type FilterGroup, FilterIcon, type FilterOption, FixedIcon, Footer, type FooterLink, type FooterProps, type FooterVariant, GearTroubleshootingIcon, GeminiIcon, GithubIcon, GraphIcon, GridIcon, HamburgerMenu, Header, type HeaderProps, type HeaderVariant, HelpCenterIcon, type HistoryConversation, type HybridSearchConfig, ImprovedIcon, InfoIcon, Input, IgIcon as InstagramIcon, type Item, KnownIssueIcon as KnownIssuesIcon, LibraryContext, LibraryContextProvider, LikeIcon, LikeSelectedIcon, LinkIcon, LinkedinCircleIcon, LinkedinIcon, ListingFilter, type ListingFilterLabels, type ListingFilterProps, type ListingFilterSelection, LongArrowIcon, MarkdownRenderer, MegaphoneIcon, MenuIcon, MobileSearch, type MobileSearchProps, NewChatIcon, NewIcon, OnThisPage, type OnThisPageProps, PaperIcon, type ProcessStep, RefreshIcon, ReleaseNotesIcon, RemovedIcon, ResizeIcon, Search, type SearchBackendConfig, SearchConfig, SearchIcon, SearchInput, type SearchInputProps, type Section, SendIcon, ShareButton, ShareIcon, SideBarToggleIcon, Sidebar, SparkleIcon, StartHereIcon, StorefrontDevelopmentIcon, SubscriptionList, TableOfContents, Tag, type TagColor, type TagProps, TimeToRead, type TimeToReadProps, Tooltip, TrashcanIcon, TroubleshootingCard, type TroubleshootingCardProps, type TroubleshootingCardVariant, type TroubleshootingFilterState, TroubleshootingIcon, type TroubleshootingItem, TutorialsIcon, TwitterCircleIcon, TwitterIcon, VTEXDevPortalIcon, VTEXHelpCenterIcon, VTEXIOAppsIcon, VTEXLogoFooter, WarningIcon, WhatsNextCard, type WhatsNextDataElement, YoutubeIcon, collectTroubleshootingFilterOptions, filterTroubleshootingItems, getDaysElapsed };
