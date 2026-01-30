'use client';

import React from 'react';
import Image from 'next/image';
import { colors } from "../../../config/colors";
import { typography } from "../../../config/typography";

const TwoColumnBanner = () => {
  return (
    <section className={`w-full py-12 px-4 md:px-16 ${colors.background}`}>
      
      {/* Grid Layout: Stacks on mobile, 2 columns on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        
        {/* === Left Card: Pink (Caps) === */}
        <div className={`relative rounded-[32px] p-8 md:p-12 overflow-hidden flex flex-col justify-center min-h-[360px] md:min-h-[400px]`} style={{ backgroundColor: colors.backgroundSecondary }}>
          
          {/* Text Content */}
          <div className="relative z-10 max-w-[60%] flex flex-col items-start h-full justify-center">
            <h2 className={`${typography.h2} ${colors.textStrong} leading-tight mb-4`}>
              Buy a Cap, Boost <br /> Your Style
            </h2>
            <p className={`${colors.textMuted} text-base md:text-lg mb-8 max-w-xs leading-relaxed`}>
              Exclusive styles crafted for everyday confidence. Shop the offer today.
            </p>
              <button
                type="button"
                className={`relative flex items-center justify-center overflow-hidden text-white font-semibold ${typography.buttonText} py-2.5 px-6 rounded-full gap-2 transition-all duration-200 before:absolute before:h-0 before:w-0 before:rounded-full before:bg-white before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56 hover:border focus:outline-none focus:ring-2 focus:ring-offset-2`}
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

          {/* Image (Pink Cap) */}
          <div className="absolute right-[-20px] bottom-[20px] w-[55%] h-[70%] md:w-[50%] md:h-[80%]">
             <Image 
               src="/images/landingPage/Banner/1.png"
               alt="Pink Cap"
               fill
               className="object-contain"
               style={{
                 objectFit: 'contain',
                 objectPosition: 'center bottom'
               }}
               priority
             />
          </div>
        </div>

        {/* === Right Card: Green (Mugs) === */}
        <div className={`relative rounded-[32px] p-8 md:p-12 overflow-hidden flex flex-col justify-center min-h-[360px] md:min-h-[400px]`} style={{ backgroundColor: colors.categoryBackground }}>
          
          {/* Text Content */}
          <div className="relative z-10 max-w-[60%] flex flex-col items-start h-full justify-center">
            <h2 className={`${typography.h2} ${colors.textStrong} leading-tight mb-4`}>
              Your Favorite Mug, <br /> Now on Sale
            </h2>
            <p className={`${colors.textMuted} text-base md:text-lg mb-8 max-w-xs leading-relaxed`}>
              Limited-time offer on bestselling designs. Don't miss your perfect fit.
            </p>
              <button
                type="button"
                className={`relative flex items-center justify-center overflow-hidden text-white font-semibold ${typography.buttonText} py-2.5 px-6 rounded-full gap-2 transition-all duration-200 before:absolute before:h-0 before:w-0 before:rounded-full before:bg-white before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56 hover:border focus:outline-none focus:ring-2 focus:ring-offset-2`}
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

          {/* Image (UK Flag Mug) */}
          <div className="absolute right-[-10px] bottom-[30px] w-[50%] h-[70%] md:w-[45%] md:h-[80%]">
             <Image 
               src="/images/landingPage/Banner/2.png"
               alt="UK Flag Mug"
               fill
               className="object-contain"
               style={{
                 objectFit: 'contain',
                 objectPosition: 'center bottom'
               }}
               priority
             />
          </div>
        </div>

      </div>
    </section>
  );
};

export default TwoColumnBanner;
