'use client';

import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    quote: "PrintPress transformed my Etsy shop! Their t-shirts sold out in hours, and my followers can't stop raving!",
    author: "Emma L.",
    role: "Influencer"
  },
  {
    id: 2,
    quote: "The banners for my pop-up shop were a game-changer. I saw a 40% spike in foot traffic!",
    author: "Jay R.",
    role: "Entrepreneur"
  },
  {
    id: 3,
    quote: "The print quality on the mugs is incredible. My customers love the durability and vibrant colors.",
    author: "Michael T.",
    role: "Cafe Owner"
  },
  {
    id: 4,
    quote: "Fast shipping and amazing customer support. PrintPress is now my go-to for all custom merchandise.",
    author: "Sarah J.",
    role: "Designer"
  }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const handleNext = () => {
    const maxIndex = testimonials.length - 1; 
    setCurrentIndex((prev) => (prev >= maxIndex ? prev : prev + 1));
  };

  return (
    <section className="w-full py-16 px-16 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header & Navigation */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#022c22]">
            Creators Love PrintPress
          </h2>

          {/* Nav Buttons */}
          <div className="flex gap-4">
            {/* Prev Button */}
            <button 
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center transition-colors ${
                currentIndex === 0 
                  ? 'opacity-50 cursor-not-allowed text-gray-300' 
                  : 'hover:bg-gray-50 text-gray-700'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
            </button>

            {/* Next Button */}
            <button 
              onClick={handleNext}
              disabled={currentIndex >= testimonials.length - 1}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                 currentIndex >= testimonials.length - 1
                 ? 'bg-gray-200 cursor-not-allowed text-gray-400'
                 : 'bg-[#EF5A2B] hover:bg-[#d64b1f] text-white shadow-md'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Window */}
        <div className="relative w-full overflow-hidden">
          
          {/* Slider Track */}
          <div 
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{ 
              transform: `translateX(-${currentIndex * (320 + 24)}px)` 
            }}
          >
            {testimonials.map((item) => (
              <div 
                key={item.id}
                className="shrink-0 w-full md:w-[600px] bg-white border border-gray-100 rounded-[24px] p-8 md:p-12 shadow-sm flex flex-col justify-between min-h-[260px]"
              >
                <div className="relative">
                   <span className="absolute -top-4 -left-2 text-6xl text-gray-100 font-serif leading-none select-none">
                     &ldquo;
                   </span>
                   <p className="relative z-10 text-lg md:text-xl font-medium text-gray-800 leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>

                <div className="mt-8">
                  <p className="text-gray-900 font-bold text-lg">
                    {item.author}, <span className="font-normal text-gray-500">{item.role}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;
