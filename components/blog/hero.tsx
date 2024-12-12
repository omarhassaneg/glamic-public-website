export function BlogHero() {
  return (
    <section className="w-full py-12 md:py-24 bg-offwhite">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="text-sm font-medium text-gold">Blog</div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-navy">
            Welcome to the Glamic Blog
          </h1>
          <p className="mx-auto max-w-[700px] text-navy/80 md:text-xl">
            Discover tips and stories for beauty professionals
          </p>
        </div>
      </div>
    </section>
  );
}