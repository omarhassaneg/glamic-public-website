"use client";

const images = [
  // Row 1
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1526045478516-99145907023c?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=300&h=400&fit=crop",
  // Row 2
  "https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?w=300&h=400&fit=crop"
];

export function ImageMasonry() {
  return (
    <div className="w-full overflow-hidden">
      {/* First Row */}
      <div className="relative">
        <div className="flex gap-4 animate-scroll">
          {[...images.slice(0, 5), ...images.slice(0, 5)].map((src, index) => (
            <div
              key={index}
              className="relative flex-none w-[300px] h-[200px] rounded-xl overflow-hidden"
            >
              <img
                src={src}
                alt={`Beauty service ${index + 1}`}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
            </div>
          ))}
        </div>
      </div>

      {/* Second Row */}
      <div className="relative mt-4">
        <div className="flex gap-4 animate-scroll-reverse">
          {[...images.slice(5, 10), ...images.slice(5, 10)].map((src, index) => (
            <div
              key={index}
              className="relative flex-none w-[300px] h-[200px] rounded-xl overflow-hidden"
            >
              <img
                src={src}
                alt={`Beauty service ${index + 6}`}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}