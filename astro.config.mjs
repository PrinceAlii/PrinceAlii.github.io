import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://princealii.github.io",
	output: "static",
	prefetch: { defaultStrategy: "viewport" },
	// Keep smart quotes and ellipses, but never turn "--" or "---" into en or em dashes.
	markdown: {
		smartypants: { dashes: false },
	},
	integrations: [mdx()],
});
