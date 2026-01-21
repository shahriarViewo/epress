"use client";

import React from "react";
import MissionVisionSection from "../components/features/misionvision/MissionVisionSection";
import FeaturesSection from "../components/features/home/FeaturesSection";
import FaqSection from "../components/features/home/FaqSection";
import HelpBanner from "../components/banners/HelpBanner";

export default function VisionPage() {
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
      <main className="w-full">
        {/* Vision Statement Section */}
        <MissionVisionSection
          title="Vision Statement"
          description="To empower creators to design, launch, and sell without limits – turning bold ideas into products that move people."
          imageSrc="/images/missionvision/2.png"
          imageAlt="Man in orange hoodie representing our vision"
          isReversed={true}
        />
      </main>
      <FeaturesSection />
      <FaqSection />
    </div>
  );
}
