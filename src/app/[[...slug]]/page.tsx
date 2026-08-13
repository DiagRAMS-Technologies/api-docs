import styles from "./page.module.scss";
import ContentBlock from "../contentBlock";
import { fixText } from "../../utils/text";
import { parseMarkdown, renderMarkdown } from "../../utils/markdown";
import { readEntry } from "../../utils/frontmatter";
import { pathJoin, readDirDeep } from "../../utils/files";
import { toASCIIString } from "../../utils/ascii";
import { insertSummary } from "../../utils/summary";
import { type Metadata } from "next";
import { type MarkdownRootNode } from "../../utils/markdown";
import buildMetadata from "../../utils/metadata";

type PageFrontmatterMetadata = {
  date: string;
  title: string;
  description: string;
  author: string;
  illustration?: {
    href: string;
    alt: string;
  };
};
type Entry = {
  id: string;
  content: MarkdownRootNode;
} & PageFrontmatterMetadata;

type Params = Awaited<PageProps<"/[[...slug]]">["params"]>;

export async function generateMetadata(
  props: PageProps<"/[[...slug]]">,
): Promise<Metadata> {
  const { slug = [] } = await props.params;
  const entry = await parsePage(slug);

  return buildMetadata({
    pathname: "/" + slug.join("/"),
    title: fixText(entry.title),
    description: fixText(entry.description),
    ...(entry.illustration?.href
      ? {
          image: {
            url: entry.illustration.href,
            alt: entry.illustration.alt,
          },
        }
      : {}),
  });
}

export default async function Page(props: PageProps<"/[[...slug]]">) {
  const { slug } = await props.params;
  const entry = await parsePage(slug);
  const contentWithSummary = insertSummary(entry.content);

  return (
    <ContentBlock>
      {renderMarkdown({ index: 0 }, contentWithSummary)}
      <div className={styles.clear}></div>
    </ContentBlock>
  );
}

export async function generateStaticParams(): Promise<Params[]> {
  const base = pathJoin(".", "contents", "pages");
  const paths = (await readDirDeep(`${base}/**/*.md`)).map((path) => {
    const slug = path
      .replace(base + "/", "")
      .replace(".md", "")
      .split("/");

    if (slug[slug.length - 1] === "index") {
      slug.pop();
    }

    return { slug };
  });
  return paths;
}

async function parsePage(slug: string[] = []): Promise<Entry> {
  const path = pathJoin("contents", "pages", ...slug);
  let result;

  try {
    result = await readEntry<PageFrontmatterMetadata>(path + ".md");
  } catch {
    result = await readEntry<PageFrontmatterMetadata>(path + "/index.md");
  }

  return {
    ...result.attributes,
    id: toASCIIString(result.attributes.title),
    content: parseMarkdown(result.body) as MarkdownRootNode,
  };
}
