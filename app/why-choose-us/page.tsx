"use client";

import React from "react";
import WhyChooseUsSection from "../components/features/why-choose-us/WhyChooseUsSection";
import FaqSection from "../components/features/home/FaqSection";

export default function WhyChooseUsPage() {
  return (
    <div className="min-h-screen bg-gray-50/50 font-sans">
      <main className="w-full">
        <WhyChooseUsSection />
        <FaqSection />
      </main>
    </div>
  );
}