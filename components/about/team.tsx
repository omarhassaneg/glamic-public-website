import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const team = [
  {
    name: "Emma Thompson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    bio: "15+ years in beauty industry technology",
  },
  {
    name: "David Chen",
    role: "Head of Product",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    bio: "Product strategy expert with startup experience",
  },
  {
    name: "Sarah Miller",
    role: "Lead Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    bio: "UX specialist focused on beauty tech",
  },
];

export function AboutTeam() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-4">Meet Our Team</h2>
          <p className="text-navy/70 max-w-2xl mx-auto">
            The passionate individuals behind Glamic&apos;s success
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {team.map((member, index) => (
            <Card key={index} className="p-6">
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name[0]}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold text-navy">{member.name}</h3>
                <p className="text-gold mb-2">{member.role}</p>
                <p className="text-navy/70">{member.bio}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}