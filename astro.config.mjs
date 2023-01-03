import { defineConfig } from "astro/config";
import sitemap from '@astrojs/sitemap';


// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site:'https://www.takinur.com',
  integrations: [tailwind(), react(), sitemap()]
});