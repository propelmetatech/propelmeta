import { Layout } from "@/components/Layout";
import { usePosts } from "@/hooks/use-posts";
import { Link } from "wouter";
import { format } from "date-fns";

export default function Blog() {
  const { data: posts, isLoading, error } = usePosts();

  return (
    <Layout>
      <section className="relative overflow-hidden bg-slate-50">
        <div className="absolute inset-0">
          <div className="absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute bottom-0 left-[-5%] h-64 w-64 rounded-full bg-indigo-300/40 blur-3xl" />
        </div>
        <div className="relative container mx-auto max-w-6xl px-6 py-20 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                The PropelMeta Blog
              </span>
              <h1 className="mt-6 text-4xl font-bold font-display text-slate-900 sm:text-5xl leading-tight">
                Insights on marketing, automation, and growth strategy.
              </h1>
              <p className="mt-4 text-lg text-slate-600 max-w-xl">
                Practical guides, playbooks, and experiments from the team
                building conversion-focused websites and automation.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-lg overflow-hidden rounded-3xl shadow-2xl shadow-slate-900/10">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
                  alt="Team collaboration"
                  className="h-72 w-full object-cover sm:h-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-6 py-20">
        {isLoading && (
          <div className="text-center py-20">
            <div className="animate-spin h-10 w-10 border-4 border-primary border-t-transparent rounded-full mx-auto"></div>
            <p className="mt-4 text-slate-500">Loading articles...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-20 text-red-500">
            Failed to load posts. Please try again later.
          </div>
        )}

        {posts && (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-lg shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <div className="text-sm font-semibold text-primary">
                    {format(new Date(post.createdAt || new Date()), "MMM d, yyyy")}
                  </div>
                  <h2 className="mt-3 text-xl font-bold font-display text-slate-900">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 text-slate-600 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${post.slug}`} className="mt-6 inline-flex">
                    <span className="inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-md shadow-primary/30 transition-transform group-hover:-translate-y-0.5">
                      Read More
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
