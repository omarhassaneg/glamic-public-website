import { Target } from "lucide-react";

export function AboutMission() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block text-gold text-sm font-medium mb-2">Our Mission</div>
            <h2 className="text-3xl font-bold text-navy">
              Transforming Beauty Service Management
            </h2>
            <p className="text-navy/70">
              At Glamic, we&apos;re on a mission to revolutionize how beauty professionals manage their businesses. We believe in empowering professionals with tools that simplify their daily operations, allowing them to focus on what they do best - creating beauty.
            </p>
            <div className="flex items-start space-x-3 pt-4">
              <Target className="h-6 w-6 text-gold" />
              <div>
                <h3 className="font-semibold text-navy">Our Goal</h3>
                <p className="text-sm text-navy/70">
                  To become the leading platform for beauty professionals worldwide, providing innovative solutions that drive success.
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] bg-gradient-to-br from-navy/10 to-gold/10 rounded-lg" />
        </div>
      </div>
    </section>
  );
}