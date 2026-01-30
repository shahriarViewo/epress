"use client";

import React from "react";
import Image from "next/image";
import { colors } from "../../../config/colors";
import { typography } from "../../../config/typography";

const PromoGridSection = () => {
  return (
    <section className={`w-full py-12 px-4 lg:px-16 ${colors.background}`}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
        {/* === Card 1: Cyan (Mug) === */}
        <div className="relative rounded-4xl p-8 overflow-hidden min-h-[400px] flex flex-col justify-between group" style={{ backgroundColor: colors.promoCard1 }}>
          {/* Text Content */}
          <div className="relative z-10 max-w-[70%]">
            <h2 className={`${typography.sectionTitle} leading-tight mb-6`} style={{ color: colors.textStrong }}>
              Vibrant, <br />
              Personalized, <br />
              Durable Tote
            </h2>
          </div>

          {/* Button (Positioned at bottom relative to flex container) */}
          <div className="relative z-10">
                          <button
                type="button"
                className="relative flex items-center justify-center overflow-hidden text-white font-semibold py-2.5 px-6 rounded-full gap-2 transition-all duration-200 before:absolute before:h-0 before:w-0 before:rounded-full before:bg-white before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56 hover:border focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ backgroundColor: colors.button }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = colors.buttonHover;
                  e.currentTarget.style.color = colors.primary;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = colors.button;
                  e.currentTarget.style.color = 'white';
                }}
              >
                <span className="relative z-10">
                  Shop Now
                </span>
              </button>
          </div>

          {/* Image: Mug */}
          {/* Positioned absolute right-center/bottom to overlap nicely */}
          <div className="absolute right-[-30px] bottom-10 w-[60%] h-[60%]">
            <Image
              src="/images/landingPage/PromoGridSection/1.png"
              alt="Vibrant Tote Bag"
              fill
              className="object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
        </div>

        {/* === Card 2: Pink (Tote Bag) === */}
        <div className="relative rounded-4xl p-8 overflow-hidden min-h-[400px] flex flex-col justify-between group" style={{ backgroundColor: colors.promoCard2 }}>
          <div className="relative z-10 max-w-[60%]">
            <h2 className={`${typography.sectionTitle} leading-tight mb-6`} style={{ color: colors.textStrong }}>
              Stylish, <br />
              Custom, <br />
              Eco-Friendly
            </h2>
          </div>

          <div className="relative z-10">
                         <button
                type="button"
                className="relative flex items-center justify-center overflow-hidden text-white font-semibold py-2.5 px-6 rounded-full gap-2 transition-all duration-200 before:absolute before:h-0 before:w-0 before:rounded-full before:bg-white before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56 hover:border focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ backgroundColor: colors.button }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = colors.buttonHover;
                  e.currentTarget.style.color = colors.primary;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = colors.button;
                  e.currentTarget.style.color = 'white';
                }}
              >
                <span className="relative z-10">
                  Shop Now
                </span>
              </button>
          </div>

          {/* Image: Tote Bag */}
          {/* Hanging from top-right style placement */}
          <div className="absolute -right-5 top-[10%] w-[55%] h-[85%]">
            <Image
              src="/images/landingPage/PromoGridSection/2.png"
              alt="Stylish Tote Bag"
              fill
              className="object-contain drop-shadow-xl group-hover:rotate-3 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
        </div>

        {/* === Card 3: Green (T-Shirt Model) === */}
        <div className="relative rounded-4xl p-8 overflow-hidden min-h-[400px] flex flex-col justify-between group" style={{ backgroundColor: colors.promoCard3 }}>
          <div className="relative z-10 max-w-[60%]">
            <h2 className={`${typography.sectionTitle} leading-tight mb-6`} style={{ color: colors.textStrong }}>
              Bold, <br />
              Unique, <br />
              Long Lasting
            </h2>
          </div>

          <div className="relative z-10">
                          <button
                type="button"
                className="relative flex items-center justify-center overflow-hidden text-white font-semibold py-2.5 px-6 rounded-full gap-2 transition-all duration-200 before:absolute before:h-0 before:w-0 before:rounded-full before:bg-white before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56 hover:border focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ backgroundColor: colors.button }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = colors.buttonHover;
                  e.currentTarget.style.color = colors.primary;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = colors.button;
                  e.currentTarget.style.color = 'white';
                }}
              >
                <span className="relative z-10">
                  Shop Now
                </span>
              </button>
          </div>

          {/* Image: Model */}
          <div className="absolute right-[-100px] bottom-0 w-[90%] h-[85%]">
            <Image
              src="/images/landingPage/PromoGridSection/3.png"
              alt="Bold T-Shirt"
              fill
              className="object-contain drop-shadow-xl group-hover:translate-x-2 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoGridSection;
