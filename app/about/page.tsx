import { AboutHero } from "@/components/about/hero";
import { AboutTeam } from "@/components/about/team";
import { AboutMission } from "@/components/about/mission";
import { AboutValues } from "@/components/about/values";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <AboutTeam />
    </div>
  );
}