import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://princealii.github.io",
	output: "static",
	integrations: [mdx()],
});
