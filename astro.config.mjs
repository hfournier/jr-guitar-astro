import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap()],
  site: "http://127.0.0.1:3001",

  vite: {
    plugins: [tailwindcss()],
  },
});