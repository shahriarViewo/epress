"use client";

import React from "react";
import Image from "next/image";

const PromoDealsSection = () => {
  return (
    <section className="w-full py-12 px-4 lg:px-16 bg-white">
      <div className="w-full">
        {/* FIX: 
           1. Added 'lg:h-[500px]' to force the grid to exactly 500px height on large screens.
           2. Kept 'h-auto' for mobile so it stacks naturally without squishing.
        */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:h-[500px] h-auto">
          {/* === 1. Left Large Card (Blue) === */}
          <div className="lg:col-span-2 relative bg-[#3B75B8] rounded-[32px] overflow-hidden p-6 md:p-8 lg:p-10 flex flex-col justify-between h-full min-h-[400px] lg:min-h-0 group">
            {/* Top Section: Text */}
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                Level Up Your Look <br /> with Exclusive Cap <br /> Deals
              </h2>
              <p className="text-white/90 text-lg">
                From sporty to streetwear, elevate every
                <br /> outfit at an unbeatable price.
              </p>
            </div>

            {/* Bottom Section: Button */}
            <div className="relative z-10">
              <button className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors">
                Shop Now
              </button>
            </div>

            {/* Model Image */}
            <div className="absolute right-0 bottom-0 h-full w-1/2 md:w-2/5">
              <Image
                src="/images/landingPage/PromoDealsSection/1.png"
                alt="Woman Model"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Red Badge */}
            <div className="absolute bottom-8 right-[25%] md:right-[35%] w-24 h-24 bg-[#EF4444] rounded-full flex flex-col items-center justify-center text-white font-bold rotate-12 shadow-lg z-20 animate-pulse-slow">
              <span className="text-xs font-normal">Up to</span>
              <span className="text-2xl leading-none">20%</span>
            </div>
          </div>

          {/* === 2. Middle Column (Stacked Cards) === */}
          {/* h-full ensures it takes the full 500px of the parent grid */}
          <div className="flex flex-col gap-6 lg:col-span-1 h-full">
            {/* Top: Purple Card (Mug) */}
            {/* Height Calculation: 50% of parent minus half the gap (12px) = Perfectly flush */}
            <div className="relative bg-[#A82897] rounded-4xl overflow-hidden p-6 flex flex-col justify-between h-[300px] lg:h-[calc(50%-12px)]">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white leading-snug">
                  Serve Style with <br /> Every Sip — Offer <br /> On Now
                </h3>
              </div>
              <div className="relative z-10">
                <a
                  href="#"
                  className="inline-block text-white underline underline-offset-4 font-medium hover:text-white/80"
                >
                  Shop Now
                </a>
              </div>
              <div className="absolute top-6 right-6 w-16 h-16 bg-[#185C37] rounded-full flex flex-col items-center justify-center text-white text-center shadow-md z-20">
                <span className="text-[10px] uppercase">Up to</span>
                <span className="text-sm font-bold">5%</span>
              </div>
              <div className="absolute right-[-10px] bottom-[-10px] w-40 h-40">
                <Image
                  src="/images/landingPage/PromoDealsSection/2.png"
                  alt="Mug"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Bottom: Cyan Card (Cap) */}
            <div className="relative bg-[#209EB8] rounded-[32px] overflow-hidden p-6 flex flex-col justify-between h-[300px] lg:h-[calc(50%-12px)]">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white leading-snug">
                  Upgrade Your <br /> Headwear Shop & <br /> Save
                </h3>
              </div>
              <div className="relative z-10">
                <a
                  href="#"
                  className="inline-block text-white underline underline-offset-4 font-medium hover:text-white/80"
                >
                  Shop Now
                </a>
              </div>
              <div className="absolute right-[-15%] bottom-0 w-4/5 h-3/4">
                <Image
                  src="/images/landingPage/PromoDealsSection/3.png"
                  alt="Cap"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* === 3. Right Vertical Card (Dark Image) === */}
          <div className="lg:col-span-1 relative bg-black rounded-[32px] overflow-hidden h-[500px] lg:h-full group">
            <Image
              src="/images/landingPage/PromoDealsSection/4.png"
              alt="Man in T-Shirt"
              fill
              className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-5 left-0 w-full p-6 text-center flex flex-col items-center">
              <span className="text-white/90 text-lg font-medium mb-1">
                Save up to
              </span>
              <h2 className="text-5xl md:text-6xl font-serif italic font-bold text-white mb-4">
                60% Off
              </h2>
              <p className="text-white/80 text-sm mb-6 max-w-[200px]">
                Comfortable, stylish, built to last. Get yours now.
              </p>
              <button className="bg-[#F05A28] hover:bg-[#d64b1f] text-white font-bold py-3 px-8 rounded-full transition-colors w-full max-w-[200px]">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoDealsSection;
