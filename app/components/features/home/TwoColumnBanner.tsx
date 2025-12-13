'use client';

import React from 'react';
import Image from 'next/image';

const TwoColumnBanner = () => {
  return (
    <section className="w-full py-12 px-4 md:px-16 bg-white">
      
      {/* Grid Layout: Stacks on mobile, 2 columns on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        
        {/* === Left Card: Pink (Caps) === */}
        <div className="relative bg-[#EAD8D8] rounded-[32px] p-8 md:p-12 overflow-hidden flex flex-col justify-center min-h-[360px] md:min-h-[400px]">
          
          {/* Text Content */}
          <div className="relative z-10 max-w-[60%] flex flex-col items-start h-full justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] leading-tight mb-4">
              Buy a Cap, Boost <br /> Your Style
            </h2>
            <p className="text-[#4A4A4A] text-sm md:text-base mb-8 max-w-xs leading-relaxed">
              Exclusive styles crafted for everyday confidence. Shop the offer today.
            </p>
            <button className="bg-[#EF5A2B] hover:bg-[#d64b1f] text-white font-bold py-3 px-8 rounded-full transition-colors shadow-sm">
              Shop Now
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
        <div className="relative bg-[#DAEFE6] rounded-[32px] p-8 md:p-12 overflow-hidden flex flex-col justify-center min-h-[360px] md:min-h-[400px]">
          
          {/* Text Content */}
          <div className="relative z-10 max-w-[60%] flex flex-col items-start h-full justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] leading-tight mb-4">
              Your Favorite Mug, <br /> Now on Sale
            </h2>
            <p className="text-[#4A4A4A] text-sm md:text-base mb-8 max-w-xs leading-relaxed">
              Limited-time offer on bestselling designs. Don't miss your perfect fit.
            </p>
            <button className="bg-[#EF5A2B] hover:bg-[#d64b1f] text-white font-bold py-3 px-8 rounded-full transition-colors shadow-sm">
              Shop Now
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
