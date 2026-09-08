import { Node } from 'unist';
import { Plugin } from 'unified';

declare function remarkMermaid(): (ast: Node) => void;

/**
 * Plugin to add extended blockquote formatting.
 */
declare function remarkBlockquote(): (tree: Node) => void;

declare const remarkReadingTime: Plugin;

export { remarkBlockquote, remarkMermaid, remarkReadingTime };
