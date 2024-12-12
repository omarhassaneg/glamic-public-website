import { Card } from "@/components/ui/card";
import { Calendar, CreditCard, Globe, Bell, ShieldCheck, MapPin, Instagram } from "lucide-react";

const features = [
  {
    title: "Payment Processing",
    description: "Securely accept cash and card payments with ease.",
    icon: CreditCard,
  },
  {
    title: "Your Own Website",
    description: "Create a custom booking website that reflects your brand.",
    icon: Globe,
  },
  {
    title: "SMS Appointment Reminders",
    description: "Keep your clients informed and reduce no-shows.",
    icon: Bell,
  },
  {
    title: "Social Media Integration (Coming Soon)",
    description: "Seamlessly connect your social platforms to streamline interactions.",
    icon: Instagram,
  },
  {
    title: "Industry Policies for You to Use",
    description: "Access ready-to-use policies tailored to your business.",
    icon: ShieldCheck,
  },
  {
    title: "Provider Locator Tool",
    description: "Help clients find you easily with our location tool.",
    icon: MapPin,
  },
  {
    title: "Automated Scheduling Made Simple",
    description: "Say goodbye to manual scheduling and hello to automation.",
    icon: Calendar,
  },
];

export function FeaturesSection() {
  return (
    <section className="w-full py-20 bg-background dark:bg-navy">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy dark:text-white mb-4">
            Everything you need to run your business - at one low price!
          </h2>
          <p className="text-navy/70 dark:text-white/70 max-w-2xl mx-auto">
            Glamic offers a seamless solution for beauty professionals, streamlining their scheduling and booking processes.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center bg-white dark:bg-navy/50">
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-gold" />
              <h3 className="text-xl font-semibold text-navy dark:text-white mb-2">{feature.title}</h3>
              <p className="text-navy/70 dark:text-white/70">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}