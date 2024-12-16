export interface PricingFeature {
  name: string;
  description?: string;
}

export interface PricingPlan {
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  features: PricingFeature[];
  isPopular?: boolean;
  comingSoon?: boolean;
}