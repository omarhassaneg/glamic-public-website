import Link from "next/link";
import { Card } from "@/components/ui/card";
import { blogPosts } from "@/lib/blog";

export function BlogGrid() {
  return (
    <section className="container px-4 md:px-6 py-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative bg-navy/10" />
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm text-navy/60">{post.category}</span>
                  <span className="text-sm text-navy/60">{post.readTime} min read</span>
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2">{post.title}</h3>
                <p className="text-navy/70 line-clamp-2">{post.excerpt}</p>
                <div className="mt-4 text-gold font-medium">Read more →</div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}