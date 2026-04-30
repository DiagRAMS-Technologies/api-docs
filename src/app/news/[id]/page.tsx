import styles from "./page.module.scss";
import { entriesToBaseListingMetadata } from "../page";
import { readEntries } from "../../../utils/frontmatter";
import { fixText } from "../../../utils/text";
import { pathJoin } from "../../../utils/files";
import { renderMarkdown } from "../../../utils/markdown";
import ContentBlock from "../../contentBlock";
import Paragraph from "../../../components/p";
import type { NewsFrontmatterMetadata } from "../../../utils/news";

import { type Metadata } from "next";
import buildMetadata from "@/utils/metadata";
import { notFound } from "next/navigation";

type Params = { id: string };

export async function generateMetadata(props: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { id } = await props.params;
  const baseProps = entriesToBaseListingMetadata(
    await readEntries<NewsFrontmatterMetadata>(
      pathJoin(".", "contents", "news"),
    ),
  );
  const entry = baseProps.entries.find((entry) => entry.id === id);

  if (!entry) {
    return notFound();
  }

  return buildMetadata({
    pathname: `/news/${entry.id}`,
    title: fixText(entry.title),
    description: fixText(entry.description),
  });
}

export async function BlogPost(props: { params: Promise<Params> }) {
  const { id } = await props.params;
  const baseProps = entriesToBaseListingMetadata(
    await readEntries<NewsFrontmatterMetadata>(
      pathJoin(".", "contents", "news"),
    ),
  );
  const entry = baseProps.entries.find((entry) => entry.id === id);

  if (!entry) {
    return notFound();
  }

  return (
    <ContentBlock>
      {renderMarkdown({ index: 0 }, entry.content)}
      <Paragraph>
        Published on{" "}
        {new Intl.DateTimeFormat("en-US", {
          dateStyle: "full",
          timeStyle: "long",
          timeZone: "Europe/Paris",
        }).format(new Date(entry.date))}
        .
      </Paragraph>
    </ContentBlock>
  );
}

export default BlogPost;

export const generateStaticParams = async (): Promise<Params[]> => {
  const baseProps = entriesToBaseListingMetadata(
    await readEntries<NewsFrontmatterMetadata>(
      pathJoin(".", "contents", "news"),
    ),
  );

  const params = baseProps.entries.map((entry) => ({
    id: entry.id,
  }));

  return params;
};
