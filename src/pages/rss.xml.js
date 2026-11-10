import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
export async function GET(ctx){const posts=(await getCollection('blog',p=>!p.data.draft)).sort((a,b)=>+b.data.date-+a.data.date);
return rss({title:'autenflo blog',description:'Bihar, UP aur Jharkhand ke business ke liye AI',site:ctx.site,items:posts.map(p=>({title:p.data.title,description:p.data.description,pubDate:p.data.date,link:`/blog/${p.slug}/`})),customData:'<language>hi-in</language>'});}
