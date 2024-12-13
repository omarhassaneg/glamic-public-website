"use client";

import { Check, X } from "lucide-react";
import { PlanFeature } from "./types";

interface FeatureRowProps {
  feature: PlanFeature;
  index: number;
}

export function FeatureRow({ feature, index }: FeatureRowProps) {
  const renderValue = (value: boolean | string) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="h-5 w-5 text-green-500 mx-auto" />
      ) : (
        <X className="h-5 w-5 text-red-500 mx-auto" />
      );
    }
    return <span className="text-navy/70 dark:text-white/70 text-sm">{value}</span>;
  };

  return (
    <div
      className={`grid grid-cols-[2fr,1fr,1fr,1fr] gap-4 ${
        index % 2 === 0 ? "bg-gray-50 dark:bg-navy/30" : "bg-white dark:bg-navy/10"
      } p-4 items-center`}
    >
      <div className="font-medium text-navy dark:text-white">{feature.name}</div>
      <div className="text-center">{renderValue(feature.pro)}</div>
      <div className="text-center">{renderValue(feature.proAI)}</div>
      <div className="text-center">{renderValue(feature.proAIPlus)}</div>
    </div>
  );
}