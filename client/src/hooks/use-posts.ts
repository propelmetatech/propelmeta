import { useQuery } from "@tanstack/react-query";
import { api, buildUrl } from "@/lib/api";
import { BLOG_POSTS } from "@/data/blogPosts";

export function usePosts() {
  return useQuery({
    queryKey: [api.posts.list.path],
    queryFn: async () => {
      try {
        const res = await fetch(api.posts.list.path);
        if (!res.ok) throw new Error("Failed to fetch posts");
        return api.posts.list.responses[200].parse(await res.json());
      } catch {
        return BLOG_POSTS;
      }
    },
    initialData: BLOG_POSTS,
  });
}

export function usePost(slug: string) {
  return useQuery({
    queryKey: [api.posts.get.path, slug],
    queryFn: async () => {
      const fallback = BLOG_POSTS.find((post) => post.slug === slug) ?? null;

      try {
        const url = buildUrl(api.posts.get.path, { slug });
        const res = await fetch(url);
        if (res.status === 404) return fallback;
        if (!res.ok) throw new Error("Failed to fetch post");
        return api.posts.get.responses[200].parse(await res.json());
      } catch {
        return fallback;
      }
    },
    enabled: !!slug,
    initialData: BLOG_POSTS.find((post) => post.slug === slug) ?? null,
  });
}
