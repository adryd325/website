import { defineCollection, z } from "astro:content";
import type { date } from "astro:schema";

const pages = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // description: z.string(),
      // Transform string to Date object
      date: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      image: image().optional(),
      imageAlt: z.string().optional(),
      draft: z.boolean().optional(),
    }),
});

const updates = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // description: z.string(),
      date: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      image: image().optional(),
      imageAlt: z.string().optional(),
      draft: z.boolean().optional(),
    }),
});

export const collections = { updates, pages };
