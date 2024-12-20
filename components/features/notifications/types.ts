import { LucideIcon } from "lucide-react";

export interface NotificationFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface NotificationChannel {
  icon: LucideIcon;
  name: string;
}

export interface NotificationExample {
  type: string;
  message: string;
  time: string;
}