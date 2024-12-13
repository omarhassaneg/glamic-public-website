import { LucideIcon } from "lucide-react";

export interface Feature {
  title: string;
  icon: LucideIcon;
  details: string[];
  comingSoon?: boolean;
}