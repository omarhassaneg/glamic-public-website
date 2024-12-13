import { Card } from "@/components/ui/card";
import { TrendingUp, DollarSign, Smile } from "lucide-react";

const benefits = [
  {
    title: "Increased Revenue",
    description: "Ensure only serious customers proceed by qualifying them and collecting deposits, reducing no-shows.",
    icon: TrendingUp,
  },
  {
    title: "Cost Savings",
    description: "Automate booking management, reducing manual administrative work.",
    icon: DollarSign,
  },
  {
    title: "Improved Experience",
    description: "Offer a streamlined booking experience with flexibility for businesses to intervene as needed.",
    icon: Smile,
  },
];

export function AIBenefits() {
  return (
    <section className="w-full py-20 bg-background dark:bg-navy">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold text-navy dark:text-white mb-4">Business Benefits</h2>
          <p className="text-navy/70 dark:text-white/70 max-w-2xl">
            Discover how AI-powered smart booking transforms your business operations
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-8 flex flex-col items-center text-center bg-white dark:bg-navy/50"
            >
              <div className="mb-6">
                <benefit.icon className="h-12 w-12 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-navy dark:text-white mb-4">
                {benefit.title}
              </h3>
              <p className="text-navy/70 dark:text-white/70">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
