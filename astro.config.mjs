import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://vs-theme-builder.nachop.xyz",
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
          label: "Guides",
          items: [
            // "docs/guides/my-first-theme",
            "docs/guides/how-nachop-theme-is-built",
          ],
        },
        {
          label: "Functions",
          items: [
            "docs/functions/build-theme-from-colors",
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
