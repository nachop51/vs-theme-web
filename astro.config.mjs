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
      ],
      credits: true,
    }),
  ],
});
