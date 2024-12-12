import { BlogHero } from "@/components/blog/hero";
import { BlogGrid } from "@/components/blog/grid";
import { BlogCategories } from "@/components/blog/categories";

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <BlogHero />
      <BlogCategories />
      <BlogGrid />
    </div>
  );
}