export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  createdAt: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "ai-automation-for-growth",
    title: "How AI Automation Gives Small Teams Enterprise Speed",
    excerpt:
      "Automation is no longer just for big companies. See how lean teams can streamline sales, support, and marketing with practical AI workflows.",
    content:
      "Small teams win when they remove repetitive work. AI automation helps you respond to leads faster, keep customers informed, and move projects forward without adding headcount.\n" +
      "Start by mapping the top three processes that slow your week down. Lead follow-up, proposal creation, and reporting are great first wins. Automate those, then measure the time saved.\n" +
      "The best results come from connecting your CRM, website forms, and marketing tools. When data flows automatically, you can focus on strategy and customer experience.\n" +
      "If you are not sure where to begin, pick one high-volume task and automate it end-to-end. The goal is to remove busywork and keep your team focused on growth.",
    coverImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    author: "PropelMeta Team",
    createdAt: "2026-01-15",
  },
  {
    slug: "conversion-ready-website-fixes",
    title: "5 Website Fixes That Lift Conversions in 30 Days",
    excerpt:
      "A high-converting site is about clarity and speed. These five quick improvements can increase trust and turn more visits into demos.",
    content:
      "Conversion starts with clarity. Your headline should say exactly what you do and who it is for. If visitors cannot understand your offer in five seconds, you lose them.\n" +
      "Speed is the second lever. Compress large images, reduce heavy scripts, and make sure your page loads fast on mobile. Every second matters.\n" +
      "Add proof close to your CTA. Testimonials, case study stats, and client logos reduce doubt and help people commit.\n" +
      "Improve your forms. Ask only what you need, use clear labels, and show a helpful success state. Small changes here have a big impact.\n" +
      "Finally, make your next step obvious. A single, well-labeled CTA beats three competing buttons every time.",
    coverImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    author: "PropelMeta Team",
    createdAt: "2026-01-22",
  },
];
