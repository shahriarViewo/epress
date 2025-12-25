"use client";

import React, { useState, useEffect } from "react";

const HeroSection = () => {
  // 1. State for the active slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // 2. Data for the Carousel Slides
  const slides = [
    {
      id: 1,
      bgImage: '/images/hero/background.jpg',
      heroImage: '/images/hero/hero1.png',
      title: "American Top Choice for custom Heat Press Creations",
      subtitle: "Unleash your vision with bold, lasting t-shirts, mugs, phone cases, tot bags, wall art, and unique gifts. Spark inspiration and fuel your brand growth with OnePrint!",
      cta: "Explore Hats",
      color: "bg-[#E07A06]"
    },
    {
      id: 2,
      bgImage: '/images/hero/background.jpg', 
      heroImage: '/images/hero/hero2.png',
      title: "America's Leading Hub for Custom Heat Press Creations",
      subtitle: "Unleash your vision with bold, lasting t-shirts, mugs, phone cases, tote bags, wall art, and unique gifts. Spark inspiration and fuel your brand growth with PrintPress!",
      cta: "Explore T-Shirt",
      color: "bg-[#A55536]"
    },
    {
      id: 3,
      bgImage: '/images/hero/background.jpg',
      heroImage: '/images/hero/hero3.png',
      title: "Printing 21st Century Technology for Professional Custom Creations",
      subtitle: "Unleash your vision with bold, lasting t-shirts, mugs, phone cases, tot bags, wall art, and unique gifts. Spark inspiration and fuel your brand growth with PrintPress!",
      cta: "Explore Mug",
      color: "bg-blue-600"
    }
  ];

  // 3. Auto-play logic
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <div className="w-full px-4 py-4 lg:py-16 lg:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* === Left Main Card (Carousel Banner) === */}
        <div className="lg:col-span-2 relative rounded-[2rem] overflow-hidden group bg-gray-900 min-h-[260px] md:min-h-[380px] lg:min-h-[400px] xl:min-h-[500px]">
          {/* Slide Renderer */}
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                index === currentSlide
                  ? "opacity-100 z-10"
                  : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url("${slide.bgImage}")` }}
              >
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
              </div>

              {/* Hero Image */}
              <img
                src={slide.heroImage}
                alt={slide.title}
                className="absolute right-0 bottom-0 
                   h-[160px] max-w-[50%] 
                   md:h-[90%] md:max-w-[45%] 
                   lg:max-w-[50%] xl:max-w-none 
                   w-auto object-contain object-bottom 
                   transition-transform duration-700 ease-out transform translate-x-0"
              />

              {/* Content Overlay (Text Top / Button Bottom) */}
              <div className="relative z-10 h-full flex flex-col justify-between p-6 pt-8 pb-14 md:p-8 md:pb-12 lg:p-10 lg:pb-12 xl:p-12 xl:pb-16 w-full md:max-w-lg xl:max-w-xl">
                {/* TOP: Title & Subtitle */}
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-4xl xl:text-5xl font-bold text-white leading-tight mb-2 md:mb-3 xl:mb-4 animate-fadeIn">
                    {slide.title}
                  </h2>

                  {/* Description hidden on mobile, shown on md+ */}
                  <p className="hidden md:block text-white/90 text-sm md:text-base xl:text-lg md:max-w-[80%] lg:max-w-md line-clamp-3 md:line-clamp-3 xl:line-clamp-none">
                    {slide.subtitle}
                  </p>
                </div>

                {/* BOTTOM: Button */}
                <div>
                  <button
                    type="button"
                    className="relative flex items-center justify-center overflow-hidden bg-white text-black hover:text-white font-semibold text-xs md:text-sm xl:text-base py-2 px-6 md:py-2 md:px-6 xl:py-3 xl:px-8 rounded-full w-fit shadow-lg transition-colors duration-200 transition-[text-shadow] before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600/30 hover:before:h-56 hover:before:w-56 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                  >
                    <span className="relative z-10">
                      {slide.cta}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Carousel Dots */}
          <div className="absolute bottom-6 right-6 md:right-6 lg:bottom-8 lg:right-8 z-20 flex gap-2 bg-white/20 p-2 rounded-full backdrop-blur-sm w-fit">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 md:w-2.5 md:h-2.5 xl:w-3 xl:h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? `${slides[index].color} scale-110`
                    : "bg-white/60 hover:bg-white"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* === Right Column (Stacked Cards) === */}
        <div className="flex flex-col gap-6 h-full">
          {/* Top Right Card */}
          <div className="flex-1 relative rounded-[32px] overflow-hidden bg-[#A55536] flex flex-col justify-between p-6 lg:p-6 xl:p-8 min-h-[240px]">
            {/* Text Section (Top) */}
            <div className="z-10 w-1/2 lg:w-3/5 xl:w-1/2">
              <h3 className="text-3xl lg:text-2xl xl:text-3xl font-bold text-white mb-2">
                Comfort <br /> Meets Style
              </h3>
              
              {/* === MODIFIED: Added hidden md:block === */}
              <p className="hidden md:block text-white/80 text-sm mb-6 lg:mb-4 xl:mb-6">
                Soft, breathable, and made for every moment.
              </p>
            </div>

            {/* Button Section (Bottom) */}
            <div className="z-10 relative">
              <button
                type="button"
                className="relative flex items-center justify-center overflow-hidden bg-white text-black hover:text-white font-bold py-2 px-6 lg:px-5 lg:text-xs xl:text-sm xl:px-6 rounded-full w-fit shadow-md transition-colors duration-200 before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600/30 hover:before:h-56 hover:before:w-56 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                <span className="relative z-10">
                  Shop Now
                </span>
              </button>
            </div>

            {/* Image (Bottom Right) */}
            <img
              src="/images/hero/hero2.png"
              alt="Comfort Style"
              className="absolute right-0 bottom-0 h-[90%] w-auto max-w-[60%] lg:max-w-[50%] xl:max-w-[60%] object-contain object-bottom"
            />
          </div>

          {/* Bottom Right Card */}
          <div className="flex-1 relative rounded-[32px] overflow-hidden bg-[#E07A06] flex flex-col justify-between p-6 lg:p-6 xl:p-8 min-h-[240px]">
            {/* Text Section (Top) */}
            <div className="z-10 w-3/5 lg:w-2/3 xl:w-3/5">
              <h3 className="text-3xl lg:text-2xl xl:text-3xl font-bold text-white mb-2">
                Serve Style <br /> with Sip
              </h3>
              
              {/* === MODIFIED: Added hidden md:block === */}
              <p className="hidden md:block text-white/80 text-sm mb-6 lg:mb-4 xl:mb-6">
                Premium ceramic mugs in custom designs.
              </p>
            </div>

            {/* Button Section (Bottom) */}
            <div className="z-10 relative">
              <button
                type="button"
                className="relative flex items-center justify-center overflow-hidden bg-white text-black hover:text-white font-bold py-2 px-6 lg:px-5 lg:text-xs xl:text-sm xl:px-6 rounded-full w-fit shadow-md transition-colors duration-200 before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600/30 hover:before:h-56 hover:before:w-56 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                <span className="relative z-10">
                  Shop Now
                </span>
              </button>
            </div>

            {/* Image (Bottom Right) */}
            <img
              src="/images/hero/hero3.png"
              alt="Stylish Accessories"
              className="absolute right-0 bottom-0 h-[90%] w-auto max-w-[65%] lg:max-w-[55%] xl:max-w-[65%] object-contain object-bottom drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;