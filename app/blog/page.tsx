import { BlogHero } from "@/components/blog/sections/hero";
import { BlogGrid } from "@/components/blog/sections/grid";
import { BlogCategories } from "@/components/blog/sections/categories";
import { BlogPageLayout } from "@/components/blog/layout/page-layout";

export default function BlogPage() {
  return (
    <BlogPageLayout>
      <BlogHero />
      <BlogCategories />
      <BlogGrid />
    </BlogPageLayout>
  );
}