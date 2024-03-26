import type { BaseContentPageMetadata } from "./contents";
import type { MarkdownRootNode } from "./markdown";

export type NewsFrontmatterMetadata = {
  leafname?: string;
  title: string;
  description: string;
  date: string;
  draft: boolean;
  illustration?: {
    url: string;
    alt: string;
  };
};

export type News = {
  id: string;
  content: MarkdownRootNode;
} & NewsFrontmatterMetadata &
  BaseContentPageMetadata;
