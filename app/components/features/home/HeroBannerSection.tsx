'use client';

import React from 'react';
import Image from 'next/image';

const HeroBannerSection = () => {
  return (
    <section className="w-full bg-[#F9FAFB] py-16 px-4 md:px-8 overflow-hidden">
      {/* Container: Flex on Desktop, Stack on Mobile */}
      <div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* === Left Side: Typography Content === */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start z-10">
          
          {/* Big Bold Headline */}
          {/* Leading-tight pulls the lines closer together like the design */}
          <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-black text-[#0B132B] leading-[1] tracking-tight mb-10 space-y  -4">
            <div className="block mb-2">PRESS IT.</div>
            <div className="block mb-2">WEAR IT.</div>
            <div className="block">LOVE IT.</div>
          </h1>

          {/* Descriptive Text with Better Spacing */}
          <div className="space-y-6 max-w-lg">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Empower your brand with advanced heat press technology creating vibrant, durable t-shirts, mugs, phone cases, tote bags, wall art, and personalized gifts.
            </p>
            <p className="text-lg md:text-xl font-semibold text-gray-900">
              Inspire and grow with OnePrint!
            </p>
          </div>
        </div>

        {/* === Right Side: Product Image Composition === */}
        <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] flex items-center justify-center">
          
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