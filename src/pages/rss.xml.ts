import type { APIContext } from "astro";
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function get(context: APIContext) {
  const posts = await getCollection("blogs");
  return rss({
    stylesheet: "/rss/styles.xsl",
    title: "JR Guitar Blog",
    description: "JR Guitar blog about issues realting to guitars",
    site: (context.site?.toString() as string) + "/blog/",
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
