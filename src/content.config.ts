import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const experience = defineCollection({
	loader: glob({ base: "./src/content/experience", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		title: z.string(),
		company: z.string(),
		location: z.string(),
		startDate: z.coerce.date(),
		endDate: z.union([z.coerce.date(), z.literal("Present")]),
		skills: z.array(z.string()).default([]),
	}),
});

const projects = defineCollection({
	loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		techStack: z.array(z.string()),
		githubLink: z.url().optional(),
		liveLink: z.url().optional(),
		featured: z.boolean().default(false),
	}),
});

const writing = defineCollection({
	loader: glob({ base: "./src/content/writing", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		publishedDate: z.coerce.date(),
		draft: z.boolean().default(false),
	}),
});

export const collections = {
	experience,
	projects,
	writing,
};
