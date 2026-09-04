import { Node } from 'unist';

declare function remarkMermaid(): (ast: Node) => void;

/**
 * Plugin to add extended blockquote formatting.
 */
declare function remarkBlockquote(): (tree: Node) => void;

interface FileWithMatter {
    data: {
        matter: Record<string, unknown>;
    };
}
declare function remarkReadingTime(): (tree: Node, file: FileWithMatter) => void;

export { remarkBlockquote, remarkMermaid, remarkReadingTime };
