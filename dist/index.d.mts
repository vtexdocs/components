import * as react_jsx_runtime from 'react/jsx-runtime';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { SxStyleProp, IconProps } from '@vtex/brand-ui';
import * as react from 'react';
import { ReactNode, Dispatch, SetStateAction } from 'react';
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

interface Props$3 {
    /** List of headings in the current documentation page */
    headingList?: Item[];
    children?: React.ReactNode;
}
/** Table of contents for documentation pages. */
declare const TableOfContents: ({ headingList, children }: Props$3) => react_jsx_runtime.JSX.Element;

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

interface DocPath {
    /** Slug that corresponds to the current page. */
    slug?: string;
    /** Github edit URL to the corresponding documentation file. */
    urlToEdit?: string;
    /** Whether is possible for the user to suggest edits or not. */
    suggestEdits?: boolean;
    /** Include or not a share button. */
    shareButton?: boolean;
    /** Executes when the user sends the feedback. Receives whether it was positive (liked). */
    sendFeedback: (liked: boolean) => Promise<void>;
    /** Whether to render the small version of the component or not. */
    small?: boolean;
}
declare const FeedbackSection: ({ slug, urlToEdit, suggestEdits, shareButton, sendFeedback, small, }: DocPath) => react_jsx_runtime.JSX.Element;

declare const Search: () => react_jsx_runtime.JSX.Element;

declare function SearchInput(): react_jsx_runtime.JSX.Element;

interface Props$2 {
    onAccept: () => void;
}
declare const CookieBar: ({ onAccept }: Props$2) => react_jsx_runtime.JSX.Element;

interface Props$1 {
    url: string;
    sx?: SxStyleProp;
}
declare const ShareButton: ({ url, sx }: Props$1) => react_jsx_runtime.JSX.Element;

declare const CopyLinkButton: () => react_jsx_runtime.JSX.Element;

type Section = {
    id: string;
    link: string;
    title: string;
    description: string;
    Icon: (props: IconProps) => JSX.Element;
    isExternalLink?: boolean;
};
type IconComponent = (props: IconProps) => JSX.Element;

interface InputProps {
    value: string;
    Icon?: IconComponent;
    placeholder?: string;
    onChange: (value: string) => void;
}
declare const Input: ({ value, onChange, placeholder, Icon }: InputProps) => react_jsx_runtime.JSX.Element;

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
    toggleSidebarElementStatus: (title: string) => void;
    openSidebarElement: (title: string) => void;
    closeSidebarElements: (parentsArray: string[]) => void;
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
declare const LibraryContext: react.Context<ContextType>;
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
declare const createAlgoliaClient: (config: AlgoliaConfig) => void;

<<<<<<< HEAD
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

declare const ArrowLeftIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const ArrowRightIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const CaretIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const LongArrowIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const VTEXLogoFooter: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const LikeIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

declare const LikeSelectedIcon: (props: IconProps) => react_jsx_runtime.JSX.Element;

export { APIGuidesIcon, APIReferenceIcon, AddedIcon, AnnouncementIcon, AppDevelopmentIcon, ArrowLeftIcon, ArrowRightIcon, CaretIcon, ChatGPTIcon, CheckboxIcon, ClaudeIcon, CloseFilterIcon, CloseIcon, CommunityIcon, CookieBar, CopilotIcon, CopyIcon, CopyLinkButton, DeprecatedIcon, DeveloperPortalIcon, DocumentationUpdatesIcon, EditIcon, EmailIcon, ExpandedResultsIcon, FAQIcon, FacebookCircleIcon, FacebookIcon, FeedbackSection, FilterIcon, FixedIcon, GearTroubleshootingIcon, GeminiIcon, GithubIcon, GraphIcon, GridIcon, HamburgerMenu, HelpCenterIcon, ImprovedIcon, InfoIcon, Input, IgIcon as InstagramIcon, type Item, KnownIssueIcon as KnownIssuesIcon, LibraryContext, LibraryContextProvider, LikeIcon, LikeSelectedIcon, LinkIcon, LinkedinCircleIcon, LinkedinIcon, LongArrowIcon, MarkdownRenderer, MegaphoneIcon, MenuIcon, NewIcon, PaperIcon, ReleaseNotesIcon, RemovedIcon, ResizeIcon, Search, createAlgoliaClient as SearchConfig, SearchIcon, SearchInput, ShareButton, ShareIcon, SideBarToggleIcon, Sidebar, StartHereIcon, StorefrontDevelopmentIcon, TableOfContents, TrashcanIcon, TroubleshootingIcon, TutorialsIcon, TwitterCircleIcon, TwitterIcon, VTEXDevPortalIcon, VTEXHelpCenterIcon, VTEXIOAppsIcon, VTEXLogoFooter, WarningIcon, YoutubeIcon, getDaysElapsed };
=======
export { CookieBar, CopyLinkButton, FeedbackSection, HamburgerMenu, Input, Item, LibraryContext, LibraryContextProvider, MarkdownRenderer, Search, createAlgoliaClient as SearchConfig, SearchInput, ShareButton, Sidebar, TableOfContents };
>>>>>>> 168317c (build: update dist files)
