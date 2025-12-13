'use client';

import React from 'react';
import Image from 'next/image';

const PromoGridSection = () => {
  return (
    <section className="w-full py-12 px-16 bg-white">
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
        
        {/* === Card 1: Cyan (Mug) === */}
        <div className="relative bg-[#D6F3F5] rounded-[32px] p-8 overflow-hidden min-h-[400px] flex flex-col justify-between group">
          
          {/* Text Content */}
          <div className="relative z-10 max-w-[70%]">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] leading-tight mb-6">
              Vibrant, <br />
              Personalized, <br />
              Durable Tote
            </h2>
          </div>

          {/* Button (Positioned at bottom relative to flex container) */}
          <div className="relative z-10">
            <button className="bg-[#EF5A2B] hover:bg-[#d64b1f] text-white font-bold py-3 px-8 rounded-full transition-colors shadow-sm">
              Shop Now
            </button>
          </div>

          {/* Image: Mug */}
          {/* Positioned absolute right-center/bottom to overlap nicely */}
          <div className="absolute right-[-30px] bottom-[40px] w-[60%] h-[60%]">
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
        <div className="relative bg-[#FBE4E7] rounded-[32px] p-8 overflow-hidden min-h-[400px] flex flex-col justify-between group">
          
          <div className="relative z-10 max-w-[60%]">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] leading-tight mb-6">
              Stylish, <br />
              Custom, <br />
              Eco-Friendly
            </h2>
          </div>

          <div className="relative z-10">
            <button className="bg-[#EF5A2B] hover:bg-[#d64b1f] text-white font-bold py-3 px-8 rounded-full transition-colors shadow-sm">
              Shop Now
            </button>
          </div>

          {/* Image: Tote Bag */}
          {/* Hanging from top-right style placement */}
          <div className="absolute right-[-20px] top-[10%] w-[55%] h-[85%]">
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
        <div className="relative bg-[#D9F7E8] rounded-[32px] p-8 overflow-hidden min-h-[400px] flex flex-col justify-between group">
          
          <div className="relative z-10 max-w-[60%]">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] leading-tight mb-6">
              Bold, <br />
              Unique, <br />
              Long Lasting
            </h2>
          </div>

          <div className="relative z-10">
            <button className="bg-[#EF5A2B] hover:bg-[#d64b1f] text-white font-bold py-3 px-8 rounded-full transition-colors shadow-sm">
              Shop Now
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
