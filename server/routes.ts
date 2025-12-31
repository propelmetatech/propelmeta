import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.post(api.leads.create.path, async (req, res) => {
    try {
      const input = api.leads.create.input.parse(req.body);
      const lead = await storage.createLead(input);
      res.status(201).json(lead);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({ message: err.errors[0].message });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get(api.posts.list.path, async (req, res) => {
    const posts = await storage.getPosts();
    res.json(posts);
  });

  app.get(api.posts.get.path, async (req, res) => {
    const post = await storage.getPostBySlug(req.params.slug);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(post);
  });

  // Seed Data
  const existingPosts = await storage.getPosts();
  if (existingPosts.length === 0) {
    await storage.createPost({
      title: "The Future of Digital Marketing in 2025",
      slug: "future-of-digital-marketing-2025",
      excerpt: "Discover the top trends shaping the digital landscape.",
      content: "AI, automation, and personalization are key...",
      coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      author: "PropelMeta Team"
    });
    await storage.createPost({
      title: "Why Your Business Needs a Mobile App",
      slug: "business-needs-mobile-app",
      excerpt: "Mobile apps drive engagement and loyalty.",
      content: "In a mobile-first world, having an app is crucial...",
      coverImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
      author: "PropelMeta Team"
    });
    await storage.createPost({
      title: "Maximizing ROI with Marketing Automation",
      slug: "maximizing-roi-automation",
      excerpt: "Automate your workflows to save time and money.",
      content: "Marketing automation tools can streamline your...",
      coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      author: "PropelMeta Team"
    });
  }

  return httpServer;
}
