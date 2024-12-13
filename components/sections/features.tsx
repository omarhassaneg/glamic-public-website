import { FeaturesGrid } from "../features/features-grid";

export function FeaturesSection() {
  return (
    <section className="w-full py-20 bg-background dark:bg-navy">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy dark:text-white mb-4">
            Everything you need to run your business - at one low price!
          </h2>
          <p className="text-navy/70 dark:text-white/70 max-w-2xl mx-auto">
            Comprehensive tools and features designed specifically for beauty professionals
          </p>
        </div>
        <FeaturesGrid />
      </div>
    </section>
  );
}