import { z } from "zod";

import { insertLeadSchema } from "./schema";

const postSchema = z.object({
  slug: z.string(),
  title: z.string(),
  excerpt: z.string(),
  content: z.string(),
  coverImage: z.string(),
  author: z.string(),
  createdAt: z.string().optional().nullable(),
});

const postListSchema = z.array(postSchema);

export type InsertLead = z.infer<typeof insertLeadSchema>;

export const api = {
  leads: {
    create: {
      method: "POST",
      path: "/api/leads",
      responses: {
        201: insertLeadSchema,
      },
    },
  },
  posts: {
    list: {
      method: "GET",
      path: "/api/posts",
      responses: {
        200: postListSchema,
      },
    },
    get: {
      method: "GET",
      path: "/api/posts/:slug",
      responses: {
        200: postSchema,
      },
    },
  },
} as const;

type PathParams = Record<string, string | number | null | undefined>;

export function buildUrl(path: string, params: PathParams = {}) {
  let url = path;
  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null) continue;
    url = url.replace(`:${key}`, encodeURIComponent(String(value)));
  }
  return url;
}
