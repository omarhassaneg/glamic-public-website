import { Check, X, Package } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    name: "Pricing Overview",
    glamic: "$29/month",
    alternatives: "$90+/month typically",
    type: "price"
  },
  { name: "Website", glamic: "Included", alternatives: "$39" },
  { name: "Website Booking addon", glamic: "Included", alternatives: "$19" },
  { name: "Payment Processing addon", glamic: "Included", alternatives: "$10" },
  { name: "SMS Reminders addon", glamic: "Included", alternatives: "Pay per use" },
  { name: "Booking policies, collect waivers addon", glamic: "Included", alternatives: "$5" },
  { name: "Automated Scheduling addon", glamic: "Included", alternatives: "$19" },
  { name: "Bi-directional Calendar Sync", glamic: "Included", alternatives: "X" },
  { name: "Custom Mobile & Studio Services Features", glamic: "Included", alternatives: "X" }
];

export function ComparisonTable() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Glamic vs. Competitors
          </h2>
          <p className="text-navy/70 max-w-2xl mx-auto">
            Discover unmatched value with Glamic&apos;s features
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            <div className="grid grid-cols-[2fr,1fr,1fr] gap-4 mb-8">
              <div></div>
              <Card className="p-6 text-center bg-navy text-white">
                <Package className="h-8 w-8 mx-auto mb-2 text-gold" />
                <h3 className="text-xl font-semibold">Glamic Platform</h3>
              </Card>
              <Card className="p-6 text-center">
                <Package className="h-8 w-8 mx-auto mb-2 text-navy/70" />
                <h3 className="text-xl font-semibold text-navy">Market Alternatives</h3>
              </Card>
            </div>

            {features.map((feature, index) => (
              <div
                key={index}
                className={`grid grid-cols-[2fr,1fr,1fr] gap-4 ${
                  index % 2 === 0 ? "bg-offwhite" : "bg-white"
                } p-4 items-center`}
              >
                <div className="font-medium text-navy">{feature.name}</div>
                <div className="text-center font-medium text-navy">
                  {feature.type === "price" ? (
                    feature.glamic
                  ) : feature.glamic === "Included" ? (
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  ) : (
                    feature.glamic
                  )}
                </div>
                <div className="text-center font-medium text-navy">
                  {feature.alternatives === "X" ? (
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  ) : (
                    feature.alternatives
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}