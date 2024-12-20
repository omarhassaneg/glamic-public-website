"use client";

const portfolioImages = [
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=300&h=200&fit=crop",
  "https://images.unsplash.com/photo-1526045478516-99145907023c?w=300&h=200&fit=crop",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&h=200&fit=crop",
];

export function PreviewContent() {
  return (
    <div className="p-6 space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-navy dark:text-white">Portfolio</h3>
        <div className="grid grid-cols-3 gap-3">
          {portfolioImages.map((image, index) => (
            <div key={index} className="aspect-[3/2] rounded-lg overflow-hidden">
              <img 
                src={image} 
                alt={`Portfolio ${index + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="text-sm text-navy/70 dark:text-white/70">
        * Preview shown. Customize colors, layout, and content to match your brand.
      </div>
    </div>
  );
}