import { defineCollection, z } from "astro:content";
import type { icons as lucideIcons } from "@iconify-json/lucide/icons.json";
import type { icons as simpleIcons } from "@iconify-json/simple-icons/icons.json";
import { file, glob } from "astro/loaders";

const other = defineCollection({
	loader: glob({ base: "src/content/other", pattern: "**/*.{md,mdx}" }),
});

const lucideIconSchema = z.object({
	type: z.literal("lucide"),
	name: z.custom<keyof typeof lucideIcons>(),
});

const simpleIconSchema = z.object({
	type: z.literal("simple-icons"),
	name: z.custom<keyof typeof simpleIcons>(),
});

const quickInfo = defineCollection({
	loader: file("src/content/info.json"),
	schema: z
		.object({
			id: z.number(),
			icon: z.union([lucideIconSchema, simpleIconSchema]),
			text: z.string().optional(),
			lines: z.array(z.string()).min(1).optional(),
		})
		.superRefine((data, ctx) => {
			const hasText = data.text != null && data.text.length > 0;
			const hasLines = data.lines != null && data.lines.length > 0;
			if (hasText === hasLines) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message: "Provide either text or lines (not both, not neither).",
				});
			}
		}),
});

const socials = defineCollection({
	loader: file("src/content/socials.json"),
	schema: z.object({
		id: z.number(),
		icon: z.union([lucideIconSchema, simpleIconSchema]),
		text: z.string(),
		link: z.string().url(),
	}),
});

const workExperience = defineCollection({
	loader: file("src/content/work.json"),
	schema: z.object({
		id: z.number(),
		title: z.string(),
		company: z.string(),
		duration: z.string(),
	}),
});

const projects = defineCollection({
	loader: glob({ base: "src/content/projects", pattern: "**/*.{md,mdx}" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			date: z.coerce.date(),
			image: image(),
			link: z.string().url().optional(),
			info: z.array(
				z.object({
					text: z.string(),
					icon: z.union([lucideIconSchema, simpleIconSchema]),
					link: z.string().url().optional(),
				}),
			),
		}),
});

export const collections = {
	projects,
	other,
	quickInfo,
	socials,
	workExperience,
};
