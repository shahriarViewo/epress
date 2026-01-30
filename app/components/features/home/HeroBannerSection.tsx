'use client';

import React from 'react';
import Image from 'next/image';
import { colors } from "../../../config/colors";
import { typography } from "../../../config/typography";

const HeroBannerSection = () => {
  return (
    <section className={`w-full ${colors.backgroundSecondary} py-16 px-4 md:px-8 overflow-hidden`}>
      {/* Container: Flex on Desktop, Stack on Mobile */}
      <div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 px-4 sm:px-6">
        
        {/* === Left Side: Typography Content === */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start z-10">
          
          {/* Big Bold Headline */}
          <h1 className={`${typography.display} font-black ${colors.textStrong} leading-tight tracking-tight mb-6 md:mb-10 space-y-2 md:space-y-4`}>
            <div className="block">PRESS IT.</div>
            <div className="block">WEAR IT.</div>
            <div className="block">LOVE IT.</div>
          </h1>

          {/* Descriptive Text with Better Spacing */}
          <div className="space-y-4 md:space-y-6 max-w-lg">
            <p className={`${typography.body} ${colors.textMuted} leading-relaxed`}>
              Empower your brand with advanced heat press technology creating vibrant, durable t-shirts, mugs, phone cases, tote bags, wall art, and personalized gifts.
            </p>
            <p className={`${typography.body} font-semibold ${colors.textStrong}`}>
              Inspire and grow with OnePrint!
            </p>
          </div>
        </div>

        {/* === Right Side: Product Image Composition === */}
        <div className="w-full md:w-1/2 relative h-[300px] sm:h-[350px] md:h-[500px] flex items-center justify-center -mt-4 md:mt-0">
          
          {/* PLACEHOLDER IMAGE 
            When you have the real image:
            1. Use a PNG with a transparent background.
            2. It should contain the group of shirts/jerseys as one image file.
          */}
          <div className="relative w-full h-full">
            <Image
              src="/images/landingPage/common/shirt.png"
              alt="Custom Printed T-Shirts and Jerseys"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroBannerSection;