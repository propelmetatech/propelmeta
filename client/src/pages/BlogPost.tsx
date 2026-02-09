import { Layout } from "@/components/Layout";
import { usePost } from "@/hooks/use-posts";
import { useRoute } from "wouter";
import { format } from "date-fns";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

function renderBlogContent(content: string) {
  const lines = content.split("\n");
  const blocks: JSX.Element[] = [];
  let listItems: string[] = [];
  let key = 0;

  const flushList = () => {
    if (!listItems.length) return;
    blocks.push(
      <ul key={`ul-${key++}`} className="list-disc pl-6">
        {listItems.map((item, idx) => (
          <li key={`li-${key}-${idx}`}>{item}</li>
        ))}
      </ul>,
    );
    listItems = [];
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      flushList();
      continue;
    }

    if (line.startsWith("## ")) {
      flushList();
      blocks.push(<h2 key={`h2-${key++}`}>{line.slice(3)}</h2>);
      continue;
    }

    if (line.startsWith("### ")) {
      flushList();
      blocks.push(<h3 key={`h3-${key++}`}>{line.slice(4)}</h3>);
      continue;
    }

    if (line.startsWith("- ")) {
      listItems.push(line.slice(2));
      continue;
    }

    flushList();
    blocks.push(<p key={`p-${key++}`}>{line}</p>);
  }

  flushList();
  return blocks;
}

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug || "";
  const { data: post, isLoading, error } = usePost(slug);

  if (isLoading)
    return (
      <Layout>
        <div className="flex justify-center items-center min-h-[50vh]">
          <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
        </div>
      </Layout>
    );

  if (error || !post)
    return (
      <Layout>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">
            Post not found
          </h1>
          <Link href="/blog" className="text-primary hover:underline">
            Back to Blog
          </Link>
        </div>
      </Layout>
    );

  return (
    <Layout>
      <article className="pb-16 sm:pb-24">
        <section className="relative overflow-hidden bg-slate-50 pt-16 sm:pt-24 pb-12 sm:pb-16">
          <div className="absolute inset-0">
            <div className="absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute bottom-0 left-[-5%] h-64 w-64 rounded-full bg-indigo-300/40 blur-3xl" />
          </div>
          <div className="relative container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2">
              <div>
                <Link
                  href="/blog"
                  className="inline-flex items-center text-slate-500 hover:text-slate-900 mb-6 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blog
                </Link>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-slate-900 leading-tight">
                  {post.title}
                </h1>
                <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-xl">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4 text-slate-500 text-sm">
                  <span className="font-medium text-slate-900">
                    {post.author}
                  </span>
                  <span>-</span>
                  <time>
                    {format(new Date(post.createdAt || new Date()), "MMMM d, yyyy")}
                  </time>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="w-full max-w-lg overflow-hidden rounded-3xl shadow-2xl shadow-slate-900/10">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="h-64 sm:h-80 w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6 max-w-3xl mt-10 sm:mt-12">
          <div className="prose prose-base sm:prose-lg prose-slate prose-headings:font-display prose-headings:font-bold prose-a:text-primary">
            {renderBlogContent(post.content)}
          </div>
        </section>
      </article>
    </Layout>
  );
}
