// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://joaobomfim.com.br",
	integrations: [mdx(), sitemap()],
	vite: {
		resolve: {
			alias: {
				"@components": "src/components",
				"@": "src/",
			},
		},
	},
});
