import { AIHero } from "@/components/ai/hero";
import { AIFeatures } from "@/components/ai/features";
import { AIWorkflow } from "@/components/ai/workflow";
import { AIBenefits } from "@/components/ai/benefits";
import { AIChannels } from "@/components/ai/channels";
import { AICTA } from "@/components/ai/cta";

export default function AIPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AIHero />
      <AIFeatures />
      <AIWorkflow />
      <AIBenefits />
      <AIChannels />
      <AICTA />
    </div>
  );
}