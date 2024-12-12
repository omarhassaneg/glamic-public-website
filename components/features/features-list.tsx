import { Card } from "@/components/ui/card";
import { Calendar, CreditCard, Globe, Bell, Instagram, ShieldCheck, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Payment Processing",
    description: "Securely accept cash and card payments with ease.",
    icon: CreditCard,
    action: "Get Started",
  },
  {
    title: "Your Own Website",
    description: "Create a custom booking website that reflects your brand.",
    icon: Globe,
    action: "Get Started",
  },
  {
    title: "SMS Appointment Reminders",
    description: "Keep your clients informed and reduce no-shows.",
    icon: Bell,
    action: "Get Started",
  },
  {
    title: "Social Media Integration (Coming Soon)",
    description: "Seamlessly connect your social platforms to streamline interactions.",
    icon: Instagram,
    action: "Get Started",
  },
  {
    title: "Industry Policies for You to Use",
    description: "Access ready-to-use policies tailored to your business.",
    icon: ShieldCheck,
    action: "Get Started",
  },
  {
    title: "Provider Locator Tool",
    description: "Help clients find you easily with our location tool.",
    icon: MapPin,
    action: "Get Started",
  },
  {
    title: "Automated Scheduling Made Simple",
    description: "Say goodbye to manual scheduling and hello to automation.",
    icon: Calendar,
    action: "Get Started",
  },
];

export function FeaturesList() {
  return (
    <section className="w-full py-20 bg-background dark:bg-navy">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy dark:text-white mb-4">
            Experience Effortless Automated Scheduling for Your Beauty Services Today!
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 flex flex-col items-center text-center bg-white dark:bg-navy/50">
              <feature.icon className="h-12 w-12 text-gold mb-4" />
              <h3 className="text-xl font-semibold text-navy dark:text-white mb-2">{feature.title}</h3>
              <p className="text-navy/70 dark:text-white/70 mb-6">{feature.description}</p>
              <Button 
                variant="outline" 
                className="mt-auto border-gold text-gold hover:bg-gold hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-navy"
              >
                {feature.action}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
