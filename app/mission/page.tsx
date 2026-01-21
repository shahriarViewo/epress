"use client";

import React from "react";
// Ensure this path matches where you saved the component
import MissionVisionSection from "../components/features/misionvision/MissionVisionSection";
import FeaturesSection from "../components/features/home/FeaturesSection";
import FaqSection from "../components/features/home/FaqSection";
import HelpBanner from "../components/banners/HelpBanner";

export default function MissionVisionPage() {
  return (
    <div className="min-h-screen bg-gray-50/50 font-sans">
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
      {/* Main Container 
        - space-y-24 lg:space-y-32: Adds a large vertical gap between the two sections 
      */}
      <main className="w-full">
        
        {/* === SECTION 1: MISSION STATEMENT === 
            Layout: Image Left | Text Right (Default behavior)
        */}
        <MissionVisionSection
          title="Mission Statement"
          description="To empower creators of all sizes to launch, scale, and profit from their ideas – without limits. We make merch easy, impactful, and accessible. One design, one link, one print at a time."
          imageSrc="/images/missionvision/1.png"
          imageAlt="Woman in white jacket representing our mission"
          isReversed={false}
        />

        {/* === SECTION 2: VISION STATEMENT === 
            Layout: Text Left | Image Right (Reversed behavior)
        */}
        {/* <MissionVisionSection
          title="Vision Statement"
          description="To empower creators to design, launch, and sell without limits – turning bold ideas into products that move people."
          imageSrc="/images/missionvision/2.png" // ⚠️ Replace with your actual image path
          imageAlt="Man in orange hoodie representing our vision"
          isReversed={true}
        /> */}

      </main>
            {/* Features Section */}
      <FeaturesSection />
      {/* FAQ Section */}
      <FaqSection />
    </div>
  );
}