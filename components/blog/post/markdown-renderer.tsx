"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";

interface MarkdownImageProps {
  src?: string;
  alt?: string;
}

function MarkdownImage({ src, alt }: MarkdownImageProps) {
  if (!src) return null;
  
  return (
    <figure className="my-8">
      <img
        src={src}
        alt={alt || "Blog image"}
        className="rounded-lg w-full object-cover"
      />
      {alt && <figcaption className="text-center text-sm text-navy/60 dark:text-white/60 mt-2">{alt}</figcaption>}
    </figure>
  );
}

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className={cn(
      "prose prose-navy dark:prose-invert max-w-none",
      "prose-headings:text-navy dark:prose-headings:text-white",
      "prose-p:text-navy/80 dark:prose-p:text-white/80",
      "prose-img:rounded-lg prose-img:w-full prose-img:object-cover"
    )}>
      <ReactMarkdown
        components={{
          img: MarkdownImage,
          p: ({ node, children }) => {
            // Check if paragraph contains only an image
            if (React.Children.toArray(children).length === 1 && 
                React.isValidElement(children) && 
                children.type === MarkdownImage) {
              return children;
            }
            return <p>{children}</p>;
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}