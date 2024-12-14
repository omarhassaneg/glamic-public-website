"use client";

const serviceAreas = [
  { zone: "Zone 1 (0-5 miles)", fee: "$0" },
  { zone: "Zone 2 (5-10 miles)", fee: "$15" },
  { zone: "Zone 3 (10-15 miles)", fee: "$25" }
];

export function ServiceAreaConfig() {
  return (
    <div className="space-y-4">
      <h4 className="text-sm font-medium text-navy/70 dark:text-white/70">
        Travel Fee Zones
      </h4>
      <div className="space-y-3">
        {serviceAreas.map((area, index) => (
          <div
            key={index}
            className="flex justify-between p-3 bg-white/50 dark:bg-white/5 rounded-lg"
          >
            <span className="text-sm text-navy/70 dark:text-white/70">{area.zone}</span>
            <span className="text-sm font-medium text-navy dark:text-white">{area.fee}</span>
          </div>
        ))}
      </div>
      <p className="text-xs text-navy/60 dark:text-white/60 text-center">
        * Customize zones and fees based on your business needs
      </p>
    </div>
  );
}