export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: number;
  category: string;
  image: string;
  author: {
    name: string;
    image: string;
  };
}

export interface BlogPostMetadata {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: number;
  category: string;
  image: string;
  author: {
    name: string;
    image: string;
  };
}