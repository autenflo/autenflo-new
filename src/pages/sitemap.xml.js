import { getCollection } from 'astro:content';
import { cities, industries, services } from '../data/places';
export async function GET() {
  const B = 'https://autenflo.com';
  const posts = (await getCollection('blog', (p) => !p.data.draft));
  const rows = [
    ['/', '1.0', null],
    ['/blog/', '0.8', null],
    ...cities.map((c) => [`/city/${c.slug}/`, '0.9', null]),
    ...industries.map((i) => [`/industry/${i.slug}/`, '0.7', null]),
    ...services.map((s) => [`/service/${s.slug}/`, '0.7', null]),
    ...posts.map((p) => [`/blog/${p.slug}/`, '0.6', (p.data.updated || p.data.date).toISOString().slice(0, 10)]),
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    rows.map(([u, pr, d]) => `<url><loc>${B}${u}</loc>${d ? `<lastmod>${d}</lastmod>` : ''}<priority>${pr}</priority></url>`).join('\n') + `\n</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
