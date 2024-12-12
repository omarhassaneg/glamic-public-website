"use client";

import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sophia",
    role: "Makeup Artist",
    content: "Honestly, Glamic has saved me so much time! Before, I was constantly overwhelmed trying to keep track of DMs, texts, and appointments. Now, it’s all in one app, and my clients love how simple it is to book with me. It’s like having an assistant, but way cheaper!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
  },
  {
    name: "Jasmine",
    role: "Lash Technician",
    content: "I’ll admit, I wasn’t sure about trying another app, but Glamic totally surprised me. Setting up my custom website was crazy fast, and my clients can book, check my policies, and even sign forms without me lifting a finger. It’s made my life so much easier!",
    image: "https://groomee-storage.s3.us-east-2.amazonaws.com/https___replicate.delivery_czjl_C8eWiAP9CGx4GKcffdKERxatCvaC7Ctfb1enlmYbeu5MkIieJA_tmpg4j2d8lb+(1).jpg",
  },
  {
    name: "Amara",
    role: "Nail Technician",
    content: "I used to spend so much time trying to keep my schedule straight, especially since I’m always on the go. With Glamic, everything just works. Bookings, payments, even suggesting packages—it does it all for me. I’ve actually been making more money since I started using it!",
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