export interface PlanFeature {
  name: string;
  pro: boolean | string;
  proAI: boolean | string;
  proAIPlus: boolean | string;
}

export interface Plan {
  name: string;
  price: number;
  isComingSoon?: boolean;
}