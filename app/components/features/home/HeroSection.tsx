'use client';

import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  // 1. State for the active slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // 2. Data for the Carousel Slides
  const slides = [
    {
      id: 1,
      bgImage: '/images/hero/background.jpg', // Replace with your actual paths
      heroImage: '/images/hero/hero1.png',
      title: "Stunning Men's Outfit Cap",
      subtitle: "High-quality caps built for style and durability. Perfect for casual outings, sports, and everyday confidence.",
      cta: "Explore Caps",
      color: "bg-[#E07A06]" // Color for the active dot
    },
    {
      id: 2,
      bgImage: '/images/hero/background.jpg', 
      heroImage: '/images/hero/hero2.png', // Example placeholder
      title: "New Season Sneakers",
      subtitle: "Step up your game with our latest collection of urban footwear designed for comfort.",
      cta: "View Shoes",
      color: "bg-[#A55536]"
    },
    {
      id: 3,
      bgImage: '/images/hero/background.jpg',
      heroImage: '/images/hero/hero3.png', // Example placeholder
      title: "Premium Travel Bags",
      subtitle: "Durable, stylish, and spacious. The perfect companion for your next adventure.",
      cta: "Shop Bags",
      color: "bg-blue-600"
    }
  ];

  // 3. Auto-play logic (Optional: changes slide every 5 seconds)
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <div className="w-full p-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* === Left Main Card (Carousel Banner) === */}
        <div className="lg:col-span-2 relative h-[500px] rounded-[32px] overflow-hidden group bg-gray-900">
          
          {/* Slide Renderer */}
          {slides.map((slide, index) => (
            <div 
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url("${slide.bgImage}")` }}
              >
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
              </div>
              
              {/* Hero Image (Right Side) */}
              <img 
                src={slide.heroImage} 
                alt={slide.title} 
                className="absolute right-0 h-full w-auto object-contain transition-transform duration-700 ease-out transform translate-x-0"
              />
              
              {/* Content Overlay */}
              <div className="relative z-10 h-full flex flex-col justify-center p-8 md:p-12 max-w-lg">
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4 animate-fadeIn">
                  {slide.title.split(' ').map((word, i) => (
                    <span key={i} className="block">{word} </span>
                  ))}
                </h2>
                <p className="text-white/90 text-lg mb-8 max-w-md">
                  {slide.subtitle}
                </p>
                
                <a 
                  href="#" 
                  className="bg-white text-black font-semibold py-3 px-8 rounded-full w-fit hover:bg-gray-100 transition-colors"
                >
                  {slide.cta}
                </a>
              </div>
            </div>
          ))}

          {/* Carousel Dots (Interactive) */}
          <div className="absolute bottom-8 right-8 z-20 flex gap-2 bg-white/20 p-2 rounded-full backdrop-blur-sm">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? `${slides[index].color} scale-110` 
                    : 'bg-white/60 hover:bg-white'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* === Right Column (Stacked Cards) - UNCHANGED === */}
        <div className="flex flex-col gap-6">
          
          {/* Top Right Card */}
          <div className="flex-1 relative rounded-[32px] overflow-hidden bg-[#A55536] p-8 flex items-center min-h-[240px]">
            <div className="z-10 w-1/2">
              <h3 className="text-3xl font-bold text-white mb-2">
                Comfort <br /> Meets Style
              </h3>
              <p className="text-white/80 text-sm mb-6">
                Soft, breathable, and made for every moment.
              </p>
              <a 
                href="#" 
                className="bg-white text-black font-bold py-2 px-6 rounded-full text-sm hover:bg-gray-100 transition-colors"
              >
                Shop Now
              </a>
            </div>
            <img 
              src="/images/hero/hero2.png" 
              alt="Comfort Style" 
              className="absolute right-0 bottom-0 h-full w-auto max-w-[60%] object-contain object-bottom"
            />
          </div>

          {/* Bottom Right Card */}
          <div className="flex-1 relative rounded-[32px] overflow-hidden bg-[#E07A06] p-8 flex items-center min-h-[240px]">
            <div className="z-10 w-3/5">
              <h3 className="text-3xl font-bold text-white mb-2">
                Serve Style with Every Sip
              </h3>
              <p className="text-white/80 text-sm mb-6">
                Premium ceramic mugs in creative and custom designs.
              </p>
              <a 
                href="#" 
                className="bg-white text-black font-bold py-2 px-6 rounded-full text-sm hover:bg-gray-100 transition-colors"
              >
                Shop Now
              </a>
            </div>
            <img 
              src="/images/hero/hero3.png" 
              alt="Stylish Accessories" 
              className="absolute right-0 bottom-0 h-full w-auto max-w-[65%] object-contain object-bottom drop-shadow-lg"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;