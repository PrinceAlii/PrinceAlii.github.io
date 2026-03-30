import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    link: z.string().url().optional(),
    order: z.number(),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  projects,
};
