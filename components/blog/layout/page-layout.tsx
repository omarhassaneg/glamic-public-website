"use client";

interface BlogPageLayoutProps {
  children: React.ReactNode;
}

export function BlogPageLayout({ children }: BlogPageLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background dark:bg-navy">
      <main className="flex-1 pt-24">
        {children}
      </main>
    </div>
  );
}