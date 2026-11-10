import { defineCollection, z } from 'astro:content';
export const collections = { blog: defineCollection({ type:'content', schema: z.object({
  title:z.string().max(70), description:z.string().max(170), date:z.coerce.date(), updated:z.coerce.date().optional(),
  city:z.string().optional(), tag:z.string().default('AI'), image:z.string().optional(), draft:z.boolean().default(false) }) }) };
