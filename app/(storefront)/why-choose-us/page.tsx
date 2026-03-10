"use client";

import React from "react";
import TestingBanner from "@/app/components/delete/TestingBanner";
import FeaturesSection from "@/app/components/features/home/FeaturesSection";

export default function WhyChooseUsPage() {
  return (
    <>
      <TestingBanner pageType="why-choose-us" />
      
      {/* Page Container */}
      <main className="min-h-screen bg-gray-50/50 p-4 lg:p-8 font-sans">
        
        <FeaturesSection pageType="why-choose-us" />

      </main>
    </>
  );
}
