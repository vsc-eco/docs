import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://docs.magi.eco",
  integrations: [
    starlight({
      title: "Magi Documentation",
      social: [
        { icon: "github", label: "GitHub", href: "https://github.com/vsc-eco" },
      ],
      // no sidebar config here — Starlight auto-generates sidebar from your content folder
    }),
  ],
});
