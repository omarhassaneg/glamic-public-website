import { BlogPost } from "@/components/blog/post";
import { BlogSidebar } from "@/components/blog/sidebar";
import { getBlogPost, blogPosts } from "@/lib/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container px-4 md:px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <BlogPost post={post} />
          </div>
          <div className="lg:col-span-1">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}