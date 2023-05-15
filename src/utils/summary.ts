import { toASCIIString } from "./ascii";
import type {
  MarkdownHeadingNode,
  MarkdownLinkNode,
  MarkdownListItemNode,
  MarkdownListNode,
  MarkdownNode,
  MarkdownRootNode,
} from "./markdown";

export function collectMarkdownText(node: MarkdownNode, str = ""): string {
  if ("children" in node) {
    str += (node.children || [])
      .map((children) => collectMarkdownText(children))
      .join("");
  }

  if (node.type === "text") {
    str += node.value;
  }

  return str;
}

export function collectNodesByType<T extends MarkdownNode>(
  nodes: MarkdownNode[],
  type: T["type"]
): T[] {
  return nodes.reduce<T[]>((filterNodes, node) => {
    return filterNodes
      .concat(node.type === type ? [node as T] : [])
      .concat(
        "children" in node && node.children
          ? collectNodesByType(node.children, type)
          : []
      );
  }, [] as T[]);
}

export function insertSummary(rootNode: MarkdownRootNode): MarkdownRootNode {
  const nodeHeadings = collectNodesByType<MarkdownHeadingNode>(
    rootNode.children,
    "heading"
  );

  return {
    type: "root",
    children: [
      ...rootNode.children.slice(0, 1),
      {
        type: "heading",
        depth: 2,
        children: [{ type: "text", value: "Summary" }],
      },
      {
        type: "list",
        ordered: false,
        spread: false,
        children: nodeHeadings.map<MarkdownListItemNode>((headingNode) => {
          const text = collectMarkdownText(headingNode);

          return {
            type: "listItem",
            spread: false,
            children: [
              {
                type: "link",
                url: `#${toASCIIString(text)}`,
                children: [{ type: "text", value: text }],
              } as MarkdownLinkNode,
            ],
          };
        }),
      } as MarkdownListNode,
      ...rootNode.children.slice(1),
    ],
  };
}
