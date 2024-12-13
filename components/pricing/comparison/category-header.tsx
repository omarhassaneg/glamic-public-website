"use client";

interface CategoryHeaderProps {
  category: string;
}

export function CategoryHeader({ category }: CategoryHeaderProps) {
  return (
    <div className="col-span-4 bg-navy/5 dark:bg-white/5 px-4 py-2 mt-6 first:mt-0">
      <h3 className="font-semibold text-navy dark:text-white">{category}</h3>
    </div>
  );
}