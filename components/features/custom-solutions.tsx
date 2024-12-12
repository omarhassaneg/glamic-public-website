import { Check } from "lucide-react";

const features = [
  "Automated Scheduling - Effortlessly manage your time",
  "Payment Processing - Secure and seamless transactions",
  "Your Own Website - Showcase your brand with ease",
  "SMS Appointment Reminders - Keep clients informed",
  "Social Media Integration (Coming Soon) - Expand your reach",
  "Industry Policies - Access ready-to-use templates",
  "Provider Locator Tool - Help clients find you easily",
];

export function CustomSolutions() {
  return (
    <section className="w-full py-20 bg-background dark:bg-navy">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] bg-gradient-to-br from-navy/20 to-gold/20 dark:from-white/20 dark:to-gold/20 rounded-lg" />
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-navy dark:text-white">
              Custom Solutions Crafted for Independent Beauty Professionals Like You
            </h2>
            <p className="text-navy/70 dark:text-white/70">
              Our platform is specifically designed to meet the unique needs of independent beauty service providers. Streamline your booking process and enhance client interactions effortlessly.
            </p>
            <div className="grid gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-gold" />
                  <span className="text-navy dark:text-white">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}