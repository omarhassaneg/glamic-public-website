import { Card } from "./card";
import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
}

export function FeatureCard({ title, description, image }: FeatureCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-navy mb-2">{title}</h3>
        <p className="text-navy/70">{description}</p>
      </div>
    </Card>
  );
}