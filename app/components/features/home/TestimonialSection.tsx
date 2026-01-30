"use client";

import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { colors } from "../../../config/colors";
import { typography } from "../../../config/typography";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    quote:
      "OnePrint transformed my Etsy shop! Their t-shirts sold out in hours, and my followers can't stop raving!",
    author: "Emma L.",
    role: "Influencer",
  },
  {
    id: 2,
    quote:
      "The banners for my pop-up shop were a game-changer. I saw a 40% spike in foot traffic!",
    author: "Jay R.",
    role: "Entrepreneur",
  },
  {
    id: 3,
    quote:
      "The print quality on the mugs is incredible. My customers love the durability and vibrant colors.",
    author: "Michael T.",
    role: "Cafe Owner",
  },
  {
    id: 4,
    quote:
      "Fast shipping and amazing customer support. OnePrint is now my go-to for all custom merchandise.",
    author: "Sarah J.",
    role: "Designer",
  },
];

const TestimonialSection = () => {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (oldIndex: number, newIndex: number) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <section className={`w-full py-12 px-4 ${colors.background}`}>
      <div className="max-w-[1440px] mx-auto">
        {/* Header & Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <h2 className={`${typography.sectionTitle} text-center md:text-left`} style={{ color: colors.textStrong }}>
            Creators Love OnePrint
          </h2>

          {/* Nav Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              disabled={currentSlide === 0}
              className={`w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center transition-colors ${
                currentSlide === 0
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-50"
              }`}
              style={{ color: currentSlide === 0 ? colors.textSubtle : colors.textMuted }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
            </button>

            <button
              onClick={handleNext}
              disabled={currentSlide >= testimonials.length - 1}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                currentSlide >= testimonials.length - 1
                  ? "bg-gray-200 cursor-not-allowed"
                  : "shadow-md"
              }`}
              style={{
                backgroundColor: currentSlide >= testimonials.length - 1 ? colors.border : colors.button,
                color: 'white'
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Area */}
        <div className="w-full">
          <Slider ref={sliderRef} {...settings} className="-mx-2">
            {testimonials.map((item) => (
              <div key={item.id} className="px-2"> {/* স্লাইডারের মাঝে গ্যাপ রাখার জন্য প্যাডিং */}
                <div className={`${colors.background} border border-gray-100 rounded-[24px] p-8 md:p-12 shadow-sm flex flex-col justify-between min-h-[280px]`}>
                  <div className="relative">
                    <span className="absolute -top-4 -left-2 text-6xl font-serif leading-none select-none" style={{ color: colors.border }}>
                      &ldquo;
                    </span>
                    <p className={`relative z-10 ${typography.body} font-medium leading-relaxed`} style={{ color: colors.textGray }}>
                      "{item.quote}"
                    </p>
                  </div>

                  <div className="mt-8">
                    <p className={`${typography.body} font-bold text-lg`} style={{ color: colors.textStrong }}>
                      {item.author},{" "}
                      <span className="font-normal" style={{ color: colors.textMuted }}>
                        {item.role}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;