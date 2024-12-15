"use client";

interface FeaturedImageProps {
  src: string;
  alt: string;
}

export function FeaturedImage({ src, alt }: FeaturedImageProps) {
  return (
    <div className="aspect-video relative bg-navy/10 dark:bg-white/10 mb-8 rounded-lg overflow-hidden">
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover"
      />
    </div>
  );
}