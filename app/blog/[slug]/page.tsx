import { BlogPost } from "@/components/blog/post/post";
import { BlogSidebar } from "@/components/blog/post/sidebar";
import { BlogPageLayout } from "@/components/blog/layout/page-layout";
import { getBlogPost, blogPosts } from "@/lib/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  
  return (
    <BlogPageLayout>
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
    </BlogPageLayout>
  );
}