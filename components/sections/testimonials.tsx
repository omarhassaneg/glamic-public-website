"use client";

import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "This platform has transformed how we operate. The analytics tools are incredibly powerful and intuitive.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
  },
  {
    name: "Michael Chen",
    role: "Operations Director, GrowthCo",
    content: "The collaboration features have made our remote team work seamlessly. It's been a game-changer for us.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, InnovateNow",
    content: "Security was our top concern, and this platform exceeded our expectations. Highly recommended!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
  },
];

export function TestimonialsSection() {
  return (
    <section className="w-full py-20 bg-[#112840]">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#FBFBFB] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-[#BDCAD9] max-w-2xl mx-auto">
            Discover why businesses trust our platform for their growth
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-[#FBFBFB] p-6">
              <Quote className="h-8 w-8 text-[#957F5A] mb-4" />
              <p className="text-[#112840] mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-4">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold text-[#112840]">{testimonial.name}</h4>
                  <p className="text-sm text-[#112840]/70">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}