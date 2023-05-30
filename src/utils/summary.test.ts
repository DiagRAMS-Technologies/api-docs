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
  it("returns the expected summary for a given AST with a continuous", () => {
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
                        "value": "Heading 2",
                      },
                    ],
                    "type": "link",
                    "url": "#heading-2",
                  },
                  {
                    "children": [
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
                    "ordered": true,
                    "spread": false,
                    "type": "list",
                  },
                ],
                "spread": false,
                "type": "listItem",
              },
            ],
            "ordered": true,
            "spread": false,
            "type": "list",
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

describe("insertSummary", () => {
  it("returns the expected summary for a given AST with a gap", () => {
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
          depth: 6,
          children: [{ type: "text", value: "Heading 6" }],
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
                        "value": "Heading 2",
                      },
                    ],
                    "type": "link",
                    "url": "#heading-2",
                  },
                  {
                    "children": [
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "children": [
                                  {
                                    "children": [
                                      {
                                        "children": [
                                          {
                                            "children": [
                                              {
                                                "children": [
                                                  {
                                                    "children": [
                                                      {
                                                        "type": "text",
                                                        "value": "Heading 6",
                                                      },
                                                    ],
                                                    "type": "link",
                                                    "url": "#heading-6",
                                                  },
                                                ],
                                                "spread": false,
                                                "type": "listItem",
                                              },
                                            ],
                                            "ordered": true,
                                            "spread": false,
                                            "type": "list",
                                          },
                                        ],
                                        "spread": false,
                                        "type": "listItem",
                                      },
                                    ],
                                    "ordered": true,
                                    "spread": false,
                                    "type": "list",
                                  },
                                ],
                                "spread": false,
                                "type": "listItem",
                              },
                            ],
                            "ordered": true,
                            "spread": false,
                            "type": "list",
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
                    "ordered": true,
                    "spread": false,
                    "type": "list",
                  },
                ],
                "spread": false,
                "type": "listItem",
              },
            ],
            "ordered": true,
            "spread": false,
            "type": "list",
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
                "value": "Heading 6",
              },
            ],
            "depth": 6,
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

describe("insertSummary", () => {
  it("returns the expected summary for a given AST with nested at the good place", () => {
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
          children: [{ type: "text", value: "Heading 2 - 1" }],
        },
        {
          type: "heading",
          depth: 2,
          children: [{ type: "text", value: "Heading 2 - 2" }],
        },
        {
          type: "heading",
          depth: 2,
          children: [{ type: "text", value: "Heading 2 - 3" }],
        },
        {
          type: "heading",
          depth: 3,
          children: [{ type: "text", value: "Heading 3 - 1" }],
        },
        {
          type: "heading",
          depth: 3,
          children: [{ type: "text", value: "Heading 3 - 2" }],
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
                        "value": "Heading 2 - 1",
                      },
                    ],
                    "type": "link",
                    "url": "#heading-2-1",
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
                        "value": "Heading 2 - 2",
                      },
                    ],
                    "type": "link",
                    "url": "#heading-2-2",
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
                        "value": "Heading 2 - 3",
                      },
                    ],
                    "type": "link",
                    "url": "#heading-2-3",
                  },
                  {
                    "children": [
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "type": "text",
                                "value": "Heading 3 - 1",
                              },
                            ],
                            "type": "link",
                            "url": "#heading-3-1",
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
                                "value": "Heading 3 - 2",
                              },
                            ],
                            "type": "link",
                            "url": "#heading-3-2",
                          },
                        ],
                        "spread": false,
                        "type": "listItem",
                      },
                    ],
                    "ordered": true,
                    "spread": false,
                    "type": "list",
                  },
                ],
                "spread": false,
                "type": "listItem",
              },
            ],
            "ordered": true,
            "spread": false,
            "type": "list",
          },
          {
            "children": [
              {
                "type": "text",
                "value": "Heading 2 - 1",
              },
            ],
            "depth": 2,
            "type": "heading",
          },
          {
            "children": [
              {
                "type": "text",
                "value": "Heading 2 - 2",
              },
            ],
            "depth": 2,
            "type": "heading",
          },
          {
            "children": [
              {
                "type": "text",
                "value": "Heading 2 - 3",
              },
            ],
            "depth": 2,
            "type": "heading",
          },
          {
            "children": [
              {
                "type": "text",
                "value": "Heading 3 - 1",
              },
            ],
            "depth": 3,
            "type": "heading",
          },
          {
            "children": [
              {
                "type": "text",
                "value": "Heading 3 - 2",
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

describe("insertSummary", () => {
  it("returns the expected summary for a given AST with nested headings simply", () => {
    const rootNode: MarkdownRootNode = {
      type: "root",
      children: [
        {
          type: "heading",
          depth: 2,
          children: [{ type: "text", value: "Heading 2 - 1" }],
        },
        {
          type: "heading",
          depth: 2,
          children: [{ type: "text", value: "Heading 2 - 2" }],
        },
        {
          type: "heading",
          depth: 2,
          children: [
            { type: "text", value: "Heading 2 - 3" },
            {
              type: "heading",
              depth: 3,
              children: [
                { type: "text", value: "Nested in Heading 2 - 3" },
                {
                  type: "heading",
                  depth: 4,
                  children: [{ type: "text", value: "Nested in Heading 3" }],
                },
              ],
            },
            {
              type: "heading",
              depth: 3,
              children: [{ type: "text", value: "Nested Heading 2 - 4" }],
            },
          ],
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
                "value": "Heading 2 - 1",
              },
            ],
            "depth": 2,
            "type": "heading",
          },
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
                        "value": "Heading 2 - 1",
                      },
                    ],
                    "type": "link",
                    "url": "#heading-2-1",
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
                        "value": "Heading 2 - 2",
                      },
                    ],
                    "type": "link",
                    "url": "#heading-2-2",
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
                        "value": "Heading 2 - 3Nested in Heading 2 - 3Nested in Heading 3Nested Heading 2 - 4",
                      },
                    ],
                    "type": "link",
                    "url": "#heading-2-3nested-in-heading-2-3nested-in-heading-3nested-heading-2-4",
                  },
                  {
                    "children": [
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "type": "text",
                                "value": "Nested in Heading 2 - 3Nested in Heading 3",
                              },
                            ],
                            "type": "link",
                            "url": "#nested-in-heading-2-3nested-in-heading-3",
                          },
                          {
                            "children": [
                              {
                                "children": [
                                  {
                                    "children": [
                                      {
                                        "type": "text",
                                        "value": "Nested in Heading 3",
                                      },
                                    ],
                                    "type": "link",
                                    "url": "#nested-in-heading-3",
                                  },
                                ],
                                "spread": false,
                                "type": "listItem",
                              },
                            ],
                            "ordered": true,
                            "spread": false,
                            "type": "list",
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
                                "value": "Nested Heading 2 - 4",
                              },
                            ],
                            "type": "link",
                            "url": "#nested-heading-2-4",
                          },
                        ],
                        "spread": false,
                        "type": "listItem",
                      },
                    ],
                    "ordered": true,
                    "spread": false,
                    "type": "list",
                  },
                ],
                "spread": false,
                "type": "listItem",
              },
            ],
            "ordered": true,
            "spread": false,
            "type": "list",
          },
          {
            "children": [
              {
                "type": "text",
                "value": "Heading 2 - 2",
              },
            ],
            "depth": 2,
            "type": "heading",
          },
          {
            "children": [
              {
                "type": "text",
                "value": "Heading 2 - 3",
              },
              {
                "children": [
                  {
                    "type": "text",
                    "value": "Nested in Heading 2 - 3",
                  },
                  {
                    "children": [
                      {
                        "type": "text",
                        "value": "Nested in Heading 3",
                      },
                    ],
                    "depth": 4,
                    "type": "heading",
                  },
                ],
                "depth": 3,
                "type": "heading",
              },
              {
                "children": [
                  {
                    "type": "text",
                    "value": "Nested Heading 2 - 4",
                  },
                ],
                "depth": 3,
                "type": "heading",
              },
            ],
            "depth": 2,
            "type": "heading",
          },
        ],
        "type": "root",
      }
    `);
  });
});

describe("insertSummary", () => {
  it("returns the expected summary for a given AST with nested headings simply", () => {
    const rootNode: MarkdownRootNode = {
      type: "root",
      children: [
        {
          type: "heading",
          depth: 2,
          children: [{ type: "text", value: "Heading 2 - 1" }],
        },
        {
          type: "heading",
          depth: 2,
          children: [{ type: "text", value: "Heading 2 - 2" }],
        },
        {
          type: "heading",
          depth: 2,
          children: [
            { type: "text", value: "Heading 2 - 3" },
            {
              type: "heading",
              depth: 3,
              children: [
                { type: "text", value: "Nested in Heading 2 - 3" },
                {
                  type: "heading",
                  depth: 5,
                  children: [
                    { type: "text", value: "Nested in Heading 3" },
                    {
                      type: "heading",
                      depth: 6,
                      children: [
                        { type: "text", value: "Nested in Heading 5" },
                      ],
                    },
                  ],
                },
                {
                  type: "heading",
                  depth: 4,
                  children: [{ type: "text", value: "Nested in Heading 3" }],
                },
              ],
            },
            {
              type: "heading",
              depth: 3,
              children: [{ type: "text", value: "Nested Heading 2 - 3" }],
            },
          ],
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
                "value": "Heading 2 - 1",
              },
            ],
            "depth": 2,
            "type": "heading",
          },
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
                        "value": "Heading 2 - 1",
                      },
                    ],
                    "type": "link",
                    "url": "#heading-2-1",
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
                        "value": "Heading 2 - 2",
                      },
                    ],
                    "type": "link",
                    "url": "#heading-2-2",
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
                        "value": "Heading 2 - 3Nested in Heading 2 - 3Nested in Heading 3Nested in Heading 5Nested in Heading 3Nested Heading 2 - 3",
                      },
                    ],
                    "type": "link",
                    "url": "#heading-2-3nested-in-heading-2-3nested-in-heading-3nested-in-heading-5nested-in-heading-3nested-heading-2-3",
                  },
                  {
                    "children": [
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "type": "text",
                                "value": "Nested in Heading 2 - 3Nested in Heading 3Nested in Heading 5Nested in Heading 3",
                              },
                            ],
                            "type": "link",
                            "url": "#nested-in-heading-2-3nested-in-heading-3nested-in-heading-5nested-in-heading-3",
                          },
                          {
                            "children": [
                              {
                                "children": [
                                  {
                                    "children": [
                                      {
                                        "children": [
                                          {
                                            "children": [
                                              {
                                                "type": "text",
                                                "value": "Nested in Heading 3Nested in Heading 5",
                                              },
                                            ],
                                            "type": "link",
                                            "url": "#nested-in-heading-3nested-in-heading-5",
                                          },
                                          {
                                            "children": [
                                              {
                                                "children": [
                                                  {
                                                    "children": [
                                                      {
                                                        "type": "text",
                                                        "value": "Nested in Heading 5",
                                                      },
                                                    ],
                                                    "type": "link",
                                                    "url": "#nested-in-heading-5",
                                                  },
                                                ],
                                                "spread": false,
                                                "type": "listItem",
                                              },
                                            ],
                                            "ordered": true,
                                            "spread": false,
                                            "type": "list",
                                          },
                                        ],
                                        "spread": false,
                                        "type": "listItem",
                                      },
                                    ],
                                    "ordered": true,
                                    "spread": false,
                                    "type": "list",
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
                                        "value": "Nested in Heading 3",
                                      },
                                    ],
                                    "type": "link",
                                    "url": "#nested-in-heading-3",
                                  },
                                ],
                                "spread": false,
                                "type": "listItem",
                              },
                            ],
                            "ordered": true,
                            "spread": false,
                            "type": "list",
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
                                "value": "Nested Heading 2 - 3",
                              },
                            ],
                            "type": "link",
                            "url": "#nested-heading-2-3",
                          },
                        ],
                        "spread": false,
                        "type": "listItem",
                      },
                    ],
                    "ordered": true,
                    "spread": false,
                    "type": "list",
                  },
                ],
                "spread": false,
                "type": "listItem",
              },
            ],
            "ordered": true,
            "spread": false,
            "type": "list",
          },
          {
            "children": [
              {
                "type": "text",
                "value": "Heading 2 - 2",
              },
            ],
            "depth": 2,
            "type": "heading",
          },
          {
            "children": [
              {
                "type": "text",
                "value": "Heading 2 - 3",
              },
              {
                "children": [
                  {
                    "type": "text",
                    "value": "Nested in Heading 2 - 3",
                  },
                  {
                    "children": [
                      {
                        "type": "text",
                        "value": "Nested in Heading 3",
                      },
                      {
                        "children": [
                          {
                            "type": "text",
                            "value": "Nested in Heading 5",
                          },
                        ],
                        "depth": 6,
                        "type": "heading",
                      },
                    ],
                    "depth": 5,
                    "type": "heading",
                  },
                  {
                    "children": [
                      {
                        "type": "text",
                        "value": "Nested in Heading 3",
                      },
                    ],
                    "depth": 4,
                    "type": "heading",
                  },
                ],
                "depth": 3,
                "type": "heading",
              },
              {
                "children": [
                  {
                    "type": "text",
                    "value": "Nested Heading 2 - 3",
                  },
                ],
                "depth": 3,
                "type": "heading",
              },
            ],
            "depth": 2,
            "type": "heading",
          },
        ],
        "type": "root",
      }
    `);
  });
});
