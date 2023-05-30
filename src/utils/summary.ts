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
  ).filter((node) => node.depth > 1);

  return {
    type: "root",
    children: [
      ...rootNode.children.slice(0, 1),
      {
        type: "heading",
        depth: 2,
        children: [{ type: "text", value: "Summary" }],
      },
      nodeHeadings.reduce(
        (itemsStack, headingNode) => {
          if (headingNode.depth - 1 > itemsStack.length) {
            const newList = {
              type: "list",
              ordered: true,
              spread: false,
              children: [],
            } as MarkdownListNode;

            if (itemsStack[itemsStack.length - 1].children.length) {
              (itemsStack[itemsStack.length - 1].children[0] as MarkdownListItemNode).children.push(
                newList
              );
            } else {
              itemsStack[itemsStack.length - 1].children.push({
                type: "listItem",
                spread: false,
                children: [newList],
              } as MarkdownListItemNode);
            }
            itemsStack.push(newList);
          } else if (headingNode.depth - 1 < itemsStack.length) {
            itemsStack.pop();
          }

          const text = collectMarkdownText(headingNode);

          itemsStack[itemsStack.length - 1].children.push({
            type: "listItem",
            spread: false,
            children: [
              {
                type: "link",
                url: `#${toASCIIString(text)}`,
                children: [{ type: "text", value: text }],
              } as MarkdownLinkNode,
            ],
          } as MarkdownListItemNode);

          return itemsStack;
        },
        [
          {
            type: "list",
            ordered: true,
            spread: false,
            children: [],
          } as MarkdownListNode,
        ]
      )[0],
      // {
      //   type: "list",
      //   ordered: true,
      //   spread: false,
      //   xchildren: nodeHeadings.map<MarkdownListItemNode>((headingNode) => {
      //     const text = collectMarkdownText(headingNode);

      //     return {
      //       type: "listItem",
      //       spread: false,
      //       children: [
      //         {
      //           type: "link",
      //           url: `#${toASCIIString(text)}`,
      //           children: [{ type: "text", value: text }],
      //         } as MarkdownLinkNode,
      //       ],
      //     };
      //   }),
      // } as MarkdownListNode,
      ...rootNode.children.slice(1),
    ],
  };
}
