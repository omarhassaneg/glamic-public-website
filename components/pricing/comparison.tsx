import { Check, X, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { name: "AI Booking Assistant", basic: "Unlimited", pro: "10" },
  { name: "Customizable Booking Page", basic: true, pro: true },
  { name: "Multiple Payment Options", basic: true, pro: true },
  { name: "24/7 Customer Support", basic: true, pro: false },
  { name: "Analytics and Reporting", basic: true, pro: false },
];

export function PricingComparison() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-gold mb-2">Affordable</p>
          <h2 className="text-3xl font-bold text-navy mb-4">Choose Your Perfect Plan</h2>
          <p className="text-navy/70">Find the right pricing tier for your needs.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-4 px-6">Plan Comparison</th>
                <th className="text-center py-4 px-6">
                  <Package className="h-8 w-8 mx-auto mb-2 text-gold" />
                  <div className="text-navy font-semibold">Basic Plan</div>
                  <div className="text-sm text-navy/70">Ideal for startups</div>
                </th>
                <th className="text-center py-4 px-6">
                  <Package className="h-8 w-8 mx-auto mb-2 text-gold" />
                  <div className="text-navy font-semibold">Pro Plan</div>
                  <div className="text-sm text-navy/70">Perfect for growing businesses</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature) => (
                <tr key={feature.name} className="border-b">
                  <td className="py-4 px-6 text-navy">{feature.name}</td>
                  <td className="text-center py-4 px-6">
                    {typeof feature.basic === "boolean" ? (
                      feature.basic ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-red-500 mx-auto" />
                      )
                    ) : (
                      <span className="text-navy">{feature.basic}</span>
                    )}
                  </td>
                  <td className="text-center py-4 px-6">
                    {typeof feature.pro === "boolean" ? (
                      feature.pro ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-red-500 mx-auto" />
                      )
                    ) : (
                      <span className="text-navy">{feature.pro}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <Button className="bg-navy hover:bg-navy/90 text-white">Sign Up</Button>
          <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}