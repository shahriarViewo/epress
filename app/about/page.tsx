"use client";

import React from "react";
import AboutSection from "../components/features/about/AboutSection";
import FeaturesSection from "../components/features/home/FeaturesSection";
import TopSellingSection from "../components/features/home/TopSellingSection";
import HelpBanner from "../components/banners/HelpBanner";

export default function AboutPage() {
  return (
    <main className="min-h-screen max-w-[1600px] mx-auto ">
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