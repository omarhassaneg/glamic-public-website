import { Card } from "@/components/ui/card";
import { MessageSquare, Instagram, Facebook, Mail, MessageCircle, Linkedin } from "lucide-react";

const channels = [
  { name: "Google Ads", icon: MessageSquare },
  { name: "Instagram", icon: Instagram },
  { name: "Facebook", icon: Facebook },
  { name: "WhatsApp", icon: MessageCircle },
  { name: "Email", icon: Mail },
  { name: "LinkedIn", icon: Linkedin },
];

export function AIChannels() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-4">Available Channels</h2>
          <p className="text-navy/70 max-w-2xl mx-auto">
            Connect with clients across multiple platforms while maintaining consistent service quality
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {channels.map((channel) => (
            <Card key={channel.name} className="p-6 flex flex-col items-center text-center">
              <channel.icon className="h-8 w-8 text-gold mb-2" />
              <span className="text-navy font-medium">{channel.name}</span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}