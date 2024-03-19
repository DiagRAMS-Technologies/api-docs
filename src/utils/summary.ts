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

  if (nodeHeadings.length > 1)
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
            const deeperHeadingLevel =
              headingNode.depth - 1 > itemsStack.length;
            const shallowerHeadingLevel =
              headingNode.depth - 1 < itemsStack.length;

            if (deeperHeadingLevel) {
              const levelsToRaise = headingNode.depth - itemsStack.length - 1;

              for (let i = levelsToRaise; i > 0; i--) {
                const newList = {
                  type: "list",
                  ordered: true,
                  spread: false,
                  children: [],
                } as MarkdownListNode;
                const listItemAlreadyExists =
                  !!itemsStack[itemsStack.length - 1].children.length;

                if (listItemAlreadyExists) {
                  (
                    itemsStack[itemsStack.length - 1].children[
                      itemsStack[itemsStack.length - 1].children.length - 1
                    ] as MarkdownListItemNode
                  ).children.push(newList);
                } else {
                  itemsStack[itemsStack.length - 1].children.push({
                    type: "listItem",
                    spread: false,
                    children: [newList],
                  } as MarkdownListItemNode);
                }
                itemsStack.push(newList);
              }
            } else if (shallowerHeadingLevel) {
              const levelsToDrop = itemsStack.length - headingNode.depth + 1;

              for (let i = levelsToDrop; i > 0; i--) {
                itemsStack.pop();
              }
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
        ...rootNode.children.slice(1),
      ],
    };
  else {
    return rootNode;
  }
}
