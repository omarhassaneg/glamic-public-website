import { LucideIcon } from "lucide-react";

export interface AppointmentFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface AppointmentStat {
  label: string;
  value: string;
}

export interface Appointment {
  client: string;
  service: string;
  time: string;
  type: "studio" | "mobile";
  location?: string;
  status: "upcoming" | "confirmed" | "pending";
}