import { pathJoin } from "../../../utils/files";
import { readEntries } from "../../../utils/frontmatter";
import { buildAssets } from "../../../utils/build";
import NewsEntries, {
  entriesToBaseListingMetadata,
  getStaticProps,
} from "../index";
import type { GetStaticPaths } from "next";
import type { NewsFrontmatterMetadata } from "../../../utils/news";

export { getStaticProps };
export default NewsEntries;

export const getStaticPaths: GetStaticPaths = async () => {
  const baseProps = entriesToBaseListingMetadata(
    await readEntries<NewsFrontmatterMetadata>(pathJoin(".", "contents", "news"))
  );

  // WARNING: This is not a nice way to generate the news feeds
  // but having scripts run in the NextJS build context is a real
  // pain
  await buildAssets(baseProps, "/news");

  const paths = new Array(baseProps.pagesCount)
    .fill("")
    .map((_, index) => index + 1)
    .filter((page) => page !== 1)
    .map((page) => ({
      params: { page: page.toString() },
    }));

  return { paths, fallback: false };
};
