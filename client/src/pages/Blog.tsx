import { Layout } from "@/components/Layout";
import { usePosts } from "@/hooks/use-posts";
import { Link } from "wouter";
import { format } from "date-fns";

export default function Blog() {
  const { data: posts, isLoading, error } = usePosts();

  return (
    <Layout>
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold font-display mb-6">Insights & Resources</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Tips, trends, and guides to help you grow your business.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block h-full">
                <article className="flex flex-col h-full bg-white rounded-2xl border border-slate-100 shadow-lg shadow-slate-200/50 overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.coverImage} 
                      alt={post.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="text-sm text-primary font-semibold mb-3">
                      {format(new Date(post.createdAt || new Date()), 'MMM d, yyyy')}
                    </div>
                    <h2 className="text-xl font-bold font-display text-slate-900 mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-slate-600 mb-6 flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-sm font-medium text-slate-900">
                      <span>Read Article</span>
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
