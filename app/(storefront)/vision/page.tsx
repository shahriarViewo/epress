"use client";

import React from "react";
import TestingBanner from "@/app/components/delete/TestingBanner";
import AboutSection from "@/app/components/features/about/AboutSection";
import FeaturesSection from "@/app/components/features/home/FeaturesSection";

export default function VisionPage() {
  return (
    <>
      <TestingBanner pageType="vision" />
      
      {/* Page Container */}
      <main className="min-h-screen bg-gray-50/50 p-4 lg:p-8 font-sans">
        
        {/* The About Section Component */}
        <AboutSection pageType="vision" />
        <FeaturesSection pageType="vision" />

      </main>
    </>
  );
}
