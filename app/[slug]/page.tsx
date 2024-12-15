import { BlogPost } from "@/components/blog/post/post";
import { BlogPageLayout } from "@/components/blog/layout/page-layout";
import { getBlogPost, getBlogPosts } from "@/lib/blog/server";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  try {
    const post = await getBlogPost(params.slug);
    
    // If it's not a blog post, pass through to other routes
    if (!post) {
      notFound();
    }
    
    return (
      <BlogPageLayout>
        <div className="container px-4 md:px-6 py-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <BlogPost post={post} />
            </div>
            <div className="lg:col-span-1">
              {/* Sidebar content */}
            </div>
          </div>
        </div>
      </BlogPageLayout>
    );
  } catch (error) {
    notFound();
  }
}