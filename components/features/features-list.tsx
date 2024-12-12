import { Card } from "@/components/ui/card";
import { Calendar, CreditCard, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Seamless Payment Processing",
    description: "Our platform automates your scheduling, allowing you to focus on your craft.",
    icon: CreditCard,
    action: "Learn More",
  },
  {
    title: "Custom Booking Websites",
    description: "Stand out with a personalized booking site that reflects your brand.",
    icon: Globe,
    action: "Sign Up",
  },
  {
    title: "User-Friendly Interface",
    description: "Our intuitive dashboard makes managing appointments a breeze for beauty professionals.",
    icon: Calendar,
    action: "Get Started",
  },
];

export function FeaturesList() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Experience Effortless Automated Scheduling for Your Beauty Services Today!
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 flex flex-col items-center text-center">
              <feature.icon className="h-12 w-12 text-gold mb-4" />
              <h3 className="text-xl font-semibold text-navy mb-2">{feature.title}</h3>
              <p className="text-navy/70 mb-6">{feature.description}</p>
              <Button variant="outline" className="mt-auto border-gold text-gold hover:bg-gold hover:text-white">
                {feature.action}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}