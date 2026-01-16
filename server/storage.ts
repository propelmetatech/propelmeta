import { type Lead, type InsertLead, type Post, type InsertPost } from "@shared/schema";

export interface IStorage {
  createLead(lead: InsertLead): Promise<Lead>;
  getPosts(): Promise<Post[]>;
  getPostBySlug(slug: string): Promise<Post | undefined>;
  createPost(post: InsertPost): Promise<Post>;
}

export class InMemoryStorage implements IStorage {
  private leads: Lead[] = [];
  private posts: Post[] = [];
  private nextLeadId = 1;
  private nextPostId = 1;

  async createLead(insertLead: InsertLead): Promise<Lead> {
    const lead: Lead = {
      id: this.nextLeadId++,
      ...insertLead,
      createdAt: new Date(),
    };
    this.leads.push(lead);
    return lead;
  }

  async getPosts(): Promise<Post[]> {
    return [...this.posts].sort((a, b) =>
      new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
    );
  }

  async getPostBySlug(slug: string): Promise<Post | undefined> {
    return this.posts.find(post => post.slug === slug);
  }

  async createPost(insertPost: InsertPost): Promise<Post> {
    const post: Post = {
      id: this.nextPostId++,
      ...insertPost,
      createdAt: new Date(),
    };
    this.posts.push(post);
    return post;
  }
}

// Use in-memory storage instead of database
export const storage = new InMemoryStorage();
