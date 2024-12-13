"use client";

import { PrivacyContent } from "@/components/legal/privacy/content";
import { LegalPageLayout } from "@/components/legal/layout";

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout 
      title="Privacy Policy" 
      description="Learn how we collect, use, and protect your personal information"
    >
      <PrivacyContent />
    </LegalPageLayout>
  );
}