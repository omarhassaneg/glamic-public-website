"use client";

import { TermsContent } from "@/components/legal/terms/content";
import { LegalPageLayout } from "@/components/legal/layout";

export default function TermsOfUsePage() {
  return (
    <LegalPageLayout 
      title="Terms of Use" 
      description="Read our terms and conditions for using Glamic services"
    >
      <TermsContent />
    </LegalPageLayout>
  );
}