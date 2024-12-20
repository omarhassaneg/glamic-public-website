import { LucideIcon } from "lucide-react";

export interface SchedulingFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface TimeSlot {
  time: string;
  status: "available" | "booked";
}