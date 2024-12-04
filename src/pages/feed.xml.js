import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

export async function GET(context) {
  const updates = await getCollection("updates").then((posts) =>
    posts
      .filter((a) => a.data.draft != true)
      .map((post) => ({
        ...post.data,
        pubDate: post.data.date,
        link: `/updates/${post.slug}/`,
      }))
  );
  const pages = await getCollection("pages").then((posts) =>
    posts
      .filter((a) => a.data.draft != true)
      .map((post) => ({
        ...post.data,
        pubDate: post.data.date,
        link: `/pages/${post.slug}/`,
      }))
  );
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: [...pages, ...updates],
  });
}
