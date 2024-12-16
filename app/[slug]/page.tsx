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
    if (!post) {
      notFound();
    }
    
    return (
      <BlogPageLayout>
        <div className="container px-4 md:px-6 py-8">
          <div className="max-w-3xl mx-auto">
            <BlogPost post={post} />
          </div>
        </div>
      </BlogPageLayout>
    );
  } catch (error) {
    notFound();
  }
}