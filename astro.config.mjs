import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    starlight({
      title: "VS Theme Builder",
      logo: {
        src: "./public/favicon.svg",
      },
      lastUpdated: true,
      disable404Route: true,
      sidebar: [
        { slug: "docs/getting-started" },
        {
          label: "How to use",
          items: [],
        },
        {
          label: "Functions",
          items: [
            "docs/functions/build-theme-from-scheme",
            "docs/functions/create-scheme-from-colors",
          ],
        },
        {
          label: "Types",
          items: ["docs/types/full-theme", "docs/types/color-scheme"],
        },
      ],
      credits: true,
      editLink: {
        baseUrl: "https://github.com/nachop51/vs-theme-web/tree/main/",
      },
    }),
  ],
});
