// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://earth-walker.github.io",
  base: "/bdt-docs",
  integrations: [
    starlight({
      title: "BDT",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/CodeForPhilly/benefit-decision-toolkit",
        },
      ],
      sidebar: [
        {
          label: "Category",
          items: ["category/test", "category/second-test"],
        },
      ],
    }),
  ],
});
