// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://earth-walker.github.io",
  base: "/bdt-docs",
  integrations: [
    starlight({
      title: "My Docs",
      logo: {
        src: "./src/assets/my-logo.svg",
        replacesTitle: true,
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Reference",
          items: ["reference/example"],
        },
        {
          label: "Category",
          items: ["category/test", "category/second-test"],
        },
      ],
    }),
  ],
});
