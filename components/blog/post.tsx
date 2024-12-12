import Link from "next/link";
import { Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import type { BlogPost } from "@/lib/blog";

export function BlogPost({ post }: { post: BlogPost }) {
  return (
    <article className="prose prose-navy max-w-none">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-navy/60 mb-4">
          <Link href="/blog">Blog</Link>
          <span>→</span>
          <span>{post.category}</span>
        </div>
        <h1 className="text-4xl font-bold text-navy mb-6">{post.title}</h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src={post.author.image} alt={post.author.name} />
              <AvatarFallback>{post.author.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium text-navy">{post.author.name}</div>
              <div className="text-sm text-navy/60">
                {post.date} · {post.readTime} min read
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Share2 className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Facebook className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <div className="aspect-video relative bg-navy/10 mb-8" />
      <div className="text-navy/80" dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}