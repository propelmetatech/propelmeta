import { Layout } from "@/components/Layout";
import { usePost } from "@/hooks/use-posts";
import { useRoute } from "wouter";
import { format } from "date-fns";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug || "";
  const { data: post, isLoading, error } = usePost(slug);

  if (isLoading) return (
    <Layout>
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
      </div>
    </Layout>
  );

  if (error || !post) return (
    <Layout>
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Post not found</h1>
        <Link href="/blog" className="text-primary hover:underline">← Back to Blog</Link>
      </div>
    </Layout>
  );

  return (
    <Layout>
      <article className="pb-24">
        {/* Header */}
        <div className="bg-slate-50 pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <Link href="/blog" className="inline-flex items-center text-slate-500 hover:text-slate-900 mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold font-display text-slate-900 mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-slate-500 text-sm">
              <span className="font-medium text-slate-900">{post.author}</span>
              <span>•</span>
              <time>{format(new Date(post.createdAt || new Date()), 'MMMM d, yyyy')}</time>
            </div>
          </div>
        </div>

        {/* Cover Image */}
        <div className="container mx-auto px-4 max-w-4xl -mt-8 mb-16">
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full rounded-3xl shadow-2xl"
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg prose-slate prose-headings:font-display prose-headings:font-bold prose-a:text-primary">
            {post.content.split('\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
    </Layout>
  );
}
