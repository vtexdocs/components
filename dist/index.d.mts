import * as react_jsx_runtime from 'react/jsx-runtime';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import * as react from 'react';
import { ReactNode, Dispatch, SetStateAction } from 'react';
import { IconProps } from '@vtex/brand-ui';

interface MarkdownRendererProps {
    serialized: MDXRemoteSerializeResult;
}

declare const MarkdownRenderer: ({ serialized }: MarkdownRendererProps) => react_jsx_runtime.JSX.Element;

declare const TableOfContents: () => react_jsx_runtime.JSX.Element;

interface SideBarSectionState {
    parentsArray?: string[];
}
declare const Sidebar: ({ parentsArray }: SideBarSectionState) => react_jsx_runtime.JSX.Element;

interface HamburgerMenuProps {
    parentsArray?: string[];
}
declare const HamburgerMenu: ({ parentsArray }: HamburgerMenuProps) => react_jsx_runtime.JSX.Element;

interface DocPath {
    slug?: string;
    urlToEdit?: string;
    suggestEdits?: boolean;
    sendFeedback: (comment: string, liked: boolean) => Promise<void>;
}
declare const FeedbackSection: ({ slug, urlToEdit, suggestEdits, sendFeedback, }: DocPath) => react_jsx_runtime.JSX.Element;

interface SubItem {
    title: string;
    slug: string;
}
interface Item extends SubItem {
    children: SubItem[];
}

type Section = {
    link: string;
    title: string;
    description: string;
    Icon: (props: IconProps) => JSX.Element;
};

interface Props extends Partial<ContextType> {
    children: ReactNode;
    fallback?: any;
    sections: Section[][];
    isPreview: boolean;
    sectionSelected: string;
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
};
type ActiveItem = {
    item: string;
    subItem: string;
};
declare const LibraryContext: react.Context<ContextType>;
declare const LibraryContextProvider: ({ children, ...props }: Props) => react_jsx_runtime.JSX.Element;

export { FeedbackSection, HamburgerMenu, LibraryContext, LibraryContextProvider, MarkdownRenderer, Sidebar, TableOfContents };
