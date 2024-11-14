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
}
/** Table of contents for documentation pages. */
declare const TableOfContents: ({ headingList }: Props$3) => react_jsx_runtime.JSX.Element;

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
    /** Github edit URL to the correspoding documentation file. */
    urlToEdit?: string;
    /** Whether is possible for the user to suggest edits or not. */
    suggestEdits?: boolean;
    /** Include or not a share button. */
    shareButton?: boolean;
    /** Function that executes when the user sends the feedback. The function receives the user comment and whether it was a positive (liked = true) or negative feedback. */
    sendFeedback: (comment: string, liked: boolean) => Promise<void>;
}
/** Component that can be used on each documentation page, so the user can give feedback of whether or not it has helpful. When liked or disliked it opens a modal with a field to add a comment and send feedback. */
declare const FeedbackSection: ({ slug, urlToEdit, suggestEdits, shareButton, sendFeedback, }: DocPath) => react_jsx_runtime.JSX.Element;

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

type Section = {
    id: string;
    link: string;
    title: string | {
        en: string;
        pt: string;
        es: string;
    };
    description: string;
    Icon: (props: IconProps) => JSX.Element;
};

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
    setLocale: Dispatch<SetStateAction<ContextType["locale"]>>;
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

export { CookieBar, FeedbackSection, HamburgerMenu, type Item, LibraryContext, LibraryContextProvider, MarkdownRenderer, Search, createAlgoliaClient as SearchConfig, SearchInput, ShareButton, Sidebar, TableOfContents };
