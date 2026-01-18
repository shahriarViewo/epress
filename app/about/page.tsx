"use client";

import React from "react";
import AboutSection from "../components/features/about/AboutSection";
import FeaturesSection from "../components/features/home/FeaturesSection";
import TopSellingSection from "../components/features/home/TopSellingSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen max-w-[1600px] mx-auto ">
      
      {/* Page Container */}
      
      {/* You can add a Page Header here if needed later */}
      
      {/* The About Section Component */}
      <AboutSection />
      <FeaturesSection />
      <TopSellingSection />
      {/* You can add more sections below (e.g., Team, Values, etc.) */}

    </main>
  );
}