import { entriesToBaseListingMetadata } from "./index";
import { readEntries } from "../../utils/frontmatter";
import { fixText } from "../../utils/text";
import { pathJoin } from "../../utils/files";
import { datedPagesSorter } from "../../utils/contents";
import { renderMarkdown } from "../../utils/markdown";
import { Layout } from "../../layouts/main";
import ContentBlock from "../../components/contentBlock";
import Paragraph from "../../components/p";
import type { News, NewsFrontmatterMetadata } from "../../utils/news";
import type { GetStaticProps, GetStaticPaths } from "next";

type Params = { id: string };
type Props = {
  entry: News;
};

const BlogPost = ({ entry }: Props) => {
  return (
    <Layout
      title={`${fixText(entry.title)}`}
      description={fixText(entry.description)}
      image={"/" + entry.illustration?.url}
    >
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
      <style>{`
      @media print {
        aside {
          display: none;
        }
      }
      `}</style>
    </Layout>
  );
};

export default BlogPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const baseProps = entriesToBaseListingMetadata(
    await readEntries<NewsFrontmatterMetadata>(
      pathJoin(".", "contents", "news")
    )
  );

  const paths = baseProps.entries.map((entry) => ({
    params: { id: entry.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const baseProps = entriesToBaseListingMetadata(
    await readEntries<NewsFrontmatterMetadata>(
      pathJoin(".", "contents", "news")
    )
  );
  const entry = baseProps.entries.find(({ id }) => id === (params || {}).id);

  if (!entry) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      entry,
    },
  };
};
