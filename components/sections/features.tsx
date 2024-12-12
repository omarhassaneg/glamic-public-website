import { Card } from "@/components/ui/card";
import { Calendar, CreditCard, Globe } from "lucide-react";

const features = [
  {
    title: "Automated Scheduling Made Simple",
    description: "Say goodbye to manual scheduling and hello to automation.",
    icon: Calendar,
  },
  {
    title: "Secure Payment Processing for Your Clients",
    description: "Easily accept cash and card payments with confidence.",
    icon: CreditCard,
  },
  {
    title: "Custom Booking Websites Tailored for You",
    description: "Create a unique online presence that reflects your brand.",
    icon: Globe,
  },
];

export function FeaturesSection() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Revolutionize Your Booking Experience Today
          </h2>
          <p className="text-navy/70 max-w-2xl mx-auto">
            Glamic offers a seamless solution for beauty professionals, streamlining their scheduling and booking processes.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center">
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-gold" />
              <h3 className="text-xl font-semibold text-navy mb-2">{feature.title}</h3>
              <p className="text-navy/70">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}