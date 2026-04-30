import styles from "./page.module.scss";
import { pathJoin } from "../../../../utils/files";
import { readEntries } from "../../../../utils/frontmatter";
import { buildAssets } from "../../../../utils/build";
import NewsEntries, {
  type Params,
  entriesToBaseListingMetadata,
  generateMetadata,
} from "../../page";
import { type NewsFrontmatterMetadata } from "../../../../utils/news";

export { generateMetadata };

export default NewsEntries;

export const generateStaticParams = async (): Promise<Params[]> => {
  const baseProps = entriesToBaseListingMetadata(
    await readEntries<NewsFrontmatterMetadata>(
      pathJoin(".", "contents", "news"),
    ),
  );

  // WARNING: This is not a nice way to generate the news feeds
  // but having scripts run in the NextJS build context is a real
  // pain
  await buildAssets(baseProps, "/news");

  const params = new Array(baseProps.pagesCount)
    .fill("")
    .map((_, index) => index + 1)
    .filter((page) => page !== 1)
    .map((page) => ({ page: page.toString() }));

  return params;
};
