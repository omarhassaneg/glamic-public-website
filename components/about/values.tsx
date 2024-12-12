import { Heart, Shield, Zap, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const values = [
  {
    title: "Innovation",
    description: "Constantly evolving our platform with cutting-edge solutions",
    icon: Zap,
  },
  {
    title: "Trust",
    description: "Building reliable and secure services for our users",
    icon: Shield,
  },
  {
    title: "Community",
    description: "Fostering a supportive network of beauty professionals",
    icon: Users,
  },
  {
    title: "Passion",
    description: "Dedicated to the success of beauty entrepreneurs",
    icon: Heart,
  },
];

export function AboutValues() {
  return (
    <section className="w-full py-20 bg-offwhite">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-4">Our Values</h2>
          <p className="text-navy/70 max-w-2xl mx-auto">
            The principles that guide us in creating the best experience for our users
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <Card key={index} className="p-6 flex flex-col items-center text-center">
              <value.icon className="h-12 w-12 text-gold mb-4" />
              <h3 className="text-xl font-semibold text-navy mb-2">{value.title}</h3>
              <p className="text-navy/70">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}