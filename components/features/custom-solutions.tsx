import { Check } from "lucide-react";

const features = [
  "Smart Booking - Manage appointments seamlessly",
  "AI Assistance - Let our AI handle client communications",
  "Custom Branding - Reflect your unique style",
  "Analytics Dashboard - Track your business growth",
  "Mobile-Friendly - Manage on the go",
  "Automated Reminders - Reduce no-shows",
];

export function CustomSolutions() {
  return (
    <section className="w-full py-20 bg-offwhite">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] bg-gradient-to-br from-navy/20 to-gold/20 rounded-lg" />
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-navy">
              Custom Solutions Crafted for Independent Beauty Professionals Like You
            </h2>
            <p className="text-navy/70">
              Our platform is specifically designed to meet the unique needs of independent beauty service providers. Streamline your booking process and enhance client interactions effortlessly.
            </p>
            <div className="grid gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-gold" />
                  <span className="text-navy">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}