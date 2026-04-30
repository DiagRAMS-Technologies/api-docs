import { writeFile } from "node:fs/promises";
import { join as joinPath } from "node:path";
import { generateAtomFeed, generateRSSFeed } from "./feeds";
import { ASSET_PREFIX, ORGANISATION_NAME } from "./constants";
import { type FeedDescription, type FeedItem } from "./feeds";
import {
  type BaseListingPageMetadata,
  type BaseContentPageMetadata,
} from "./contents";

const PROJECT_DIR = joinPath(".");
const builtAt = new Date().toISOString();

export async function buildAssets<T extends BaseContentPageMetadata>(
  props: BaseListingPageMetadata<T>,
  path: string,
) {
  await Promise.all([
    (async () => {
      const { title, description, entries } = props;
      const feedItems = entries.map((entry) => ({
        title: entry.title,
        description: entry.description,
        url: `${ASSET_PREFIX}${path}/${entry.id}`,
        updatedAt: entry.date,
        publishedAt: entry.date,
        author: {
          name: ORGANISATION_NAME,
        },
      }));
      const commonDescription: Omit<FeedDescription, "url"> = {
        title: `${title} - ${ORGANISATION_NAME}`,
        sourceURL: `${ASSET_PREFIX}${path}`,
        description,
        updatedAt: new Date(
          entries.reduce(
            (higherTimestamp, entry) =>
              Math.max(higherTimestamp, Date.parse(entry.date)),
            0,
          ),
        ).toISOString(),
        builtAt,
      };

      await Promise.all([
        buildAtomFeed(commonDescription, feedItems, path),
        buildRSSFeed(commonDescription, feedItems, path),
      ]);
    })(),
  ]);
}

async function buildAtomFeed(
  commonDescription: Omit<FeedDescription, "url">,
  feedItems: FeedItem[],
  path: string,
) {
  const content = await generateAtomFeed(
    {
      ...commonDescription,
      url: `${ASSET_PREFIX}${path}.atom`,
    },
    feedItems,
  );

  await writeFile(
    joinPath(PROJECT_DIR, "public", `${path.slice(1)}.atom`),
    content,
  );
}

async function buildRSSFeed(
  commonDescription: Omit<FeedDescription, "url">,
  feedItems: FeedItem[],
  path: string,
) {
  const content = await generateRSSFeed(
    {
      ...commonDescription,
      url: `${ASSET_PREFIX}${path}.rss`,
    },
    feedItems,
  );

  await writeFile(
    joinPath(PROJECT_DIR, "public", `${path.slice(1)}.rss`),
    content,
  );
}
