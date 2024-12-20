import { LucideIcon } from "lucide-react";

export interface AIFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ChatMessage {
  type: "client" | "ai";
  message: string;
}