import { fileURLToPath } from "node:url";
import { site } from "./src/content/site.ts";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: site.url || undefined,
  output: "static",
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        // Astro 7.3.0's image module imports this missing package export.
        // Remove when an Astro upgrade fixes the export; covered by the image build tests.
        "astro/_internal/logger": fileURLToPath(new URL("./node_modules/astro/dist/core/logger/core.js", import.meta.url)),
      },
    },
  },
});
