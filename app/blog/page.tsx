import { BlogHero } from "@/components/blog/sections/hero";
import { BlogGrid } from "@/components/blog/sections/grid";
import { BlogCategories } from "@/components/blog/sections/categories";
import { BlogPageLayout } from "@/components/blog/layout/page-layout";
import { getBlogPosts } from "@/lib/blog/server";

export default async function BlogPage() {
  const posts = await getBlogPosts();
  
  return (
    <BlogPageLayout>
      <BlogHero />
      <BlogCategories />
      <BlogGrid posts={posts} />
    </BlogPageLayout>
  );
}