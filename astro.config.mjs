import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({ site: 'https://autenflo.com', trailingSlash: 'always', build:{format:'directory'},
  integrations: [sitemap({ changefreq:'weekly', priority:0.7, lastmod:new Date(), filter:p=>!p.includes('/admin') && !p.includes('/404') })] });
