import { insertSummary, collectNodesByType } from "./summary";
import type { MarkdownRootNode } from "./markdown";

describe("summary", () => {
  describe("collectNodesByType", () => {
    it("should collect first level node", () => {
      expect(
        collectNodesByType(
          [
            {
              type: "heading",
              depth: 1,
              children: [
                {
                  type: "text",
                  value: "test heading",
                },
              ],
            },
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  value: "test paragraph",
                },
              ],
            },
          ],

          "heading"
        )
      ).toMatchInlineSnapshot(`
        [
          {
            "children": [
              {
                "type": "text",
                "value": "test heading",
              },
            ],
            "depth": 1,
            "type": "heading",
          },
        ]
      `);
    });
  });
});

describe("insertSummary", () => {
  it("returns the expected summary for a given AST", () => {
    // Define the input AST
    const rootNode: MarkdownRootNode = {
      type: "root",
      children: [
        {
          type: "heading",
          depth: 1,
          children: [{ type: "text", value: "Heading 1" }],
        },
        {
          type: "heading",
          depth: 2,
          children: [{ type: "text", value: "Heading 2" }],
        },
        {
          type: "heading",
          depth: 3,
          children: [{ type: "text", value: "Heading 3" }],
        },
      ],
    };

    const result = insertSummary(rootNode);

    expect(result).toMatchInlineSnapshot(`
      {
        "children": [
          {
            "children": [
              {
                "type": "text",
                "value": "Summary",
              },
            ],
            "depth": 2,
            "type": "heading",
          },
          {
            "children": [
              {
                "children": [
                  {
                    "children": [
                      {
                        "type": "text",
                        "value": "Heading 1",
                      },
                    ],
                    "type": "link",
                    "url": "#heading-1",
                  },
                ],
                "spread": false,
                "type": "listItem",
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "type": "text",
                        "value": "Heading 2",
                      },
                    ],
                    "type": "link",
                    "url": "#heading-2",
                  },
                ],
                "spread": false,
                "type": "listItem",
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "type": "text",
                        "value": "Heading 3",
                      },
                    ],
                    "type": "link",
                    "url": "#heading-3",
                  },
                ],
                "spread": false,
                "type": "listItem",
              },
            ],
            "ordered": false,
            "spread": false,
            "type": "list",
          },
          {
            "children": [
              {
                "type": "text",
                "value": "Heading 1",
              },
            ],
            "depth": 1,
            "type": "heading",
          },
          {
            "children": [
              {
                "type": "text",
                "value": "Heading 2",
              },
            ],
            "depth": 2,
            "type": "heading",
          },
          {
            "children": [
              {
                "type": "text",
                "value": "Heading 3",
              },
            ],
            "depth": 3,
            "type": "heading",
          },
        ],
        "type": "root",
      }
    `);
  });
});
