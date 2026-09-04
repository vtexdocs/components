// src/remark/mermaid.ts
import { u } from "unist-builder";
import { visit, SKIP } from "unist-util-visit";
function remarkMermaid() {
  return (ast) => {
    visit(
      ast,
      { type: "code", lang: "mermaid" },
      (node, index, parent) => {
        if (typeof index !== "number" || !parent)
          return;
        node.type = "text";
        const props = {
          data: {
            hProperties: {
              className: ["mermaid"]
            },
            hName: "pre"
          }
        };
        parent.children.splice(index, 1, u("pre", props, [node]));
        return [SKIP, index];
      }
    );
  };
}

// src/remark/blockquote.ts
import { u as u2 } from "unist-builder";
import { visit as visit2, SKIP as SKIP2 } from "unist-util-visit";
var extendedNames = {
  info: /^ℹ️/,
  warning: /^\u26A0/,
  danger: /^\u2757/,
  success: /^\u2705/
};
function remarkBlockquote() {
  return (tree) => {
    visit2(tree, (node, index, parent) => {
      if (node.type !== "blockquote")
        return;
      if (typeof index !== "number" || !parent)
        return;
      const { children = [] } = node;
      const firstChild = children[0];
      const textNode = firstChild?.children?.[0];
      if (!textNode || textNode.type !== "text" || typeof textNode.value !== "string") {
        return;
      }
      const result = Object.entries(extendedNames).find(
        ([, regex]) => regex.test(textNode.value)
      );
      if (!result)
        return;
      textNode.value = textNode.value.substring(2);
      const newChild = {
        type: "paragraph",
        children
      };
      const props = {
        data: {
          hProperties: {
            icon: result[0]
          }
        }
      };
      parent.children.splice(
        index,
        1,
        u2("blockquote", props, [u2("paragraph", [newChild])])
      );
      return [SKIP2, index];
    });
  };
}

// src/remark/reading-time.ts
import getReadingTime from "reading-time";
import { toString } from "mdast-util-to-string";
function remarkReadingTime() {
  return function(tree, file) {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);
    file.data.matter["readingTime"] = Math.ceil(readingTime.minutes);
  };
}
export {
  remarkBlockquote,
  remarkMermaid,
  remarkReadingTime
};
//# sourceMappingURL=remark.mjs.map