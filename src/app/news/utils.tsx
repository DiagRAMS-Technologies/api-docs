import { toASCIIString } from "../../utils/ascii";
import { parseMarkdown } from "../../utils/markdown";
import { datedPagesSorter } from "../../utils/contents";
import { type FrontMatterResult } from "front-matter";
import { type MarkdownRootNode } from "../../utils/markdown";
import { type News, type NewsFrontmatterMetadata } from "../../utils/news";

export const POSTS_PER_PAGE = 10;

export function entriesToBaseListingMetadata(
  baseEntries: FrontMatterResult<NewsFrontmatterMetadata>[],
) {
  const title = `Developer news`;
  const description = "Discover the latest technical news from DiagRAMS.";
  const entries = baseEntries
    .map<News>((entry) => ({
      ...entry.attributes,
      id: entry.attributes.leafname || toASCIIString(entry.attributes.title),
      content: parseMarkdown(entry.body) as MarkdownRootNode,
    }))
    .filter((entry) => !entry.draft || process.env.NODE_ENV === "development")
    .sort(datedPagesSorter);
  const pagesCount = Math.ceil(entries.length / POSTS_PER_PAGE);

  return {
    title,
    description,
    entries,
    pagesCount,
  };
}
