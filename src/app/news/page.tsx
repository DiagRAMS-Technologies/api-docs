import styles from "./page.module.scss";
import { readEntries } from "../../utils/frontmatter";
import { toASCIIString } from "../../utils/ascii";
import { readParams } from "../../utils/params";
import { parseMarkdown } from "../../utils/markdown";
import { datedPagesSorter } from "../../utils/contents";
import { pathJoin } from "../../utils/files";
import ContentBlock from "../contentBlock";
import Heading1 from "../../components/h1";
import Paragraph from "../../components/p";
import Anchor from "../../components/a";
import Items from "./items";
import type { BasePagingPageMetadata } from "../../utils/contents";
import type { FrontMatterResult } from "front-matter";
import type { MarkdownRootNode } from "../../utils/markdown";
import type { News, NewsFrontmatterMetadata } from "../../utils/news";

import { type Metadata } from "next";
import buildMetadata from "@/utils/metadata";

export async function generateMetadata(props: {
  params?: Promise<{ page: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = params?.page || 1;

  const title = `News${page && page !== 1 ? ` - page ${page}` : ""}`;
  const description = "Discover DiagRAMS developer news.";

  const metadata = await buildMetadata({
    pathname: `/news${page && page !== 1 ? `/pages/${page}` : ""}`,
    title,
    description,
  });

  return {
    ...metadata,
    alternates: {
      ...(metadata.alternates || {}),
      types: {
        ...(metadata.alternates?.types || {}),
        "application/rss+xml": [{ url: "/news.rss", title: `${title} (RSS)` }],
        "application/atom+xml": [
          { url: "/news.atom", title: `${title} (Atom)` },
        ],
      },
    },
  };
}

export type Props = BasePagingPageMetadata<News>;

const PARAMS_DEFINITIONS = {
  page: {
    type: "number",
    mode: "unique",
  },
} as const;

export type Params = { page: string };

const POSTS_PER_PAGE = 10;

export default async function Page(props: { params: Promise<Params> }) {
  const params = await props.params;
  const castedParams = readParams<{ page: number }>(
    PARAMS_DEFINITIONS,
    params || {},
  );
  const page = castedParams?.page || 1;

  const baseProps = entriesToBaseListingMetadata(
    await readEntries<NewsFrontmatterMetadata>(
      pathJoin(".", "contents", "news"),
    ),
  );
  const title = `${baseProps.title}${
    page && page !== 1 ? ` - page ${page}` : ""
  }`;
  const entries = baseProps.entries.slice(
    (page - 1) * POSTS_PER_PAGE,
    (page - 1) * POSTS_PER_PAGE + POSTS_PER_PAGE,
  );

  return (
    <ContentBlock className="title">
      <Heading1 className="title">{title}</Heading1>
      <Paragraph>Discover the latest technical news from DiagRAMS.</Paragraph>

      <Items entries={entries} base={"/news/"} />

      <nav className="pagination">
        {page > 1 ? (
          <Anchor
            icon="arrow-left"
            href={page > 2 ? `/news/pages/${page - 1}` : "/news"}
            rel="previous"
          >
            Previous
          </Anchor>
        ) : null}{" "}
        {page < baseProps.pagesCount ? (
          <Anchor
            icon="arrow-right"
            iconPosition="last"
            href={`/news/pages/${page + 1}`}
            rel="next"
          >
            Next
          </Anchor>
        ) : null}
      </nav>
    </ContentBlock>
  );
}

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
