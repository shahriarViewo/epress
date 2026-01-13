"use client";

import React, { useRef, useState } from "react";
import Slider from "react-slick";

// // React Slick CSS ফাইল ইম্পোর্ট করতে হবে
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
  // স্লাইডার কন্ট্রোল করার জন্য Ref
  const sliderRef = useRef<Slider>(null);
  
  // বাটনের স্টাইল কন্ট্রোল করার জন্য স্টেট (অপশনাল, শুধু ডিসেবল স্টাইলের জন্য)
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,           // নিচে ডট দেখাবে না
    infinite: false,       // লুপ হবে না (আপনার আগের লজিক অনুযায়ী)
    speed: 500,            // এনিমেশন স্পিড
    slidesToShow: 2,       // ডেস্কটপে ২টা দেখাবে (যদি চান) বা ১টা রাখতে পারেন
    slidesToScroll: 1,
    arrows: false,         // ডিফল্ট অ্যারো বন্ধ (আমরা কাস্টম বাটন ব্যবহার করব)
    beforeChange: (oldIndex: number, newIndex: number) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 1024, // ট্যাবলেট বা ছোট ল্যাপটপ
        settings: {
          slidesToShow: 1, // ছোট স্ক্রিনে ১টা করে স্লাইড
        }
      },
      {
        breakpoint: 640, // মোবাইল
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  // কাস্টম বাটন হ্যান্ডলার
  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <section className="w-full py-12 px-4 bg-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Header & Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#022c22] text-center md:text-left">
            Creators Love OnePrint
          </h2>

          {/* Nav Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              disabled={currentSlide === 0}
              className={`w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center transition-colors ${
                currentSlide === 0
                  ? "opacity-50 cursor-not-allowed text-gray-300"
                  : "hover:bg-gray-50 text-gray-700"
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
            </button>

            <button
              onClick={handleNext}
              disabled={currentSlide >= testimonials.length - 1} // নোট: infinite: true হলে এটা দরকার নেই
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                currentSlide >= testimonials.length - 1
                  ? "bg-gray-200 cursor-not-allowed text-gray-400"
                  : "bg-[#EF5A2B] hover:bg-[#d64b1f] text-white shadow-md"
              }`}
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
                <div className="bg-white border border-gray-100 rounded-[24px] p-8 md:p-12 shadow-sm flex flex-col justify-between min-h-[280px]">
                  <div className="relative">
                    <span className="absolute -top-4 -left-2 text-6xl text-gray-100 font-serif leading-none select-none">
                      &ldquo;
                    </span>
                    <p className="relative z-10 text-lg font-medium text-gray-800 leading-relaxed">
                      "{item.quote}"
                    </p>
                  </div>

                  <div className="mt-8">
                    <p className="text-gray-900 font-bold text-lg">
                      {item.author},{" "}
                      <span className="font-normal text-gray-500">
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