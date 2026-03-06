"use client";

import React from "react";
import OurValuesSection from "../../components/features/values/OurValuesSection";
import HelpBanner from "../../components/banners/HelpBanner";
export default function ValuesPage() {
  return (
    <div className="min-h-screen bg-gray-50/50 font-sans">
      <main className="w-full">
            <HelpBanner
            title="We’re Here to Help"
            subtitle={`Need product info or support? Contact us anytime.\nYour satisfaction is our priority.`}
            images={{
                leftMain: "/images/banners/Frame 1171278359.jpg",
                leftCard: "/images/banners/Frame 1171278360.jpg",
                rightMain: "/images/banners/Frame 1171278361.jpg",
                rightCard: "/images/banners/Frame 1171278362.jpg"
            }}
        />
        <OurValuesSection />
      </main>
    </div>
  );
}
