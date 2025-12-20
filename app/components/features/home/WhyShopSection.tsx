"use client";

import React from "react";
import Image from "next/image";

const WhyShopSection = () => {
  return (
    <section className="w-full bg-white py-16 px-4 lg:px-16">
      {/* Main Layout: Stacks on mobile, Side-by-side on Desktop */}
      <div className="flex flex-col lg:flex-row gap-12 items-stretch">
        {/* === Left Side: Features & Text === */}
        <div className="flex-1 flex flex-col justify-center">
          {/* Header */}
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Shop With OnePrint?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We don't just sell products — we craft everyday essentials that
              feel good, look great, and last longer. Designed with care, made
              for real-life moments.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-8">
            {/* Feature 1: Free Shipping */}
            <div className="flex flex-col items-start gap-3">
              <div className="p-0">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#E07A06"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 18h14M5 18a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v6h-3M5 18a2 2 0 0 0 0 4h14a2 2 0 0 0 0-4M15 9h5M19 17v4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Free Shipping</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Buy product over $50 and get free shipping
              </p>
            </div>

            {/* Feature 2: Easy Return Policy */}
            <div className="flex flex-col items-start gap-3">
              <div className="p-0">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#E07A06"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 14l-4-4 4-4" />
                  <path d="M5 10h11a4 4 0 1 1 0 8h-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Easy Return Policy
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Hassle-free exchanges and a friendly support team.
              </p>
            </div>

            {/* Feature 3: Secure Payment */}
            <div className="flex flex-col items-start gap-3">
              <div className="p-0">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#E07A06"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="5" width="20" height="14" rx="2" />
                  <line x1="2" y1="10" x2="22" y2="10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Secure Payment
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We confirm that payment systems are totally secure
              </p>
            </div>

            {/* Feature 4: Premium Quality */}
            <div className="flex flex-col items-start gap-3">
              <div className="p-0">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#E07A06"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="8" r="7" />
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Premium Quality
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Durable, breathable, and designed to last.
              </p>
            </div>
          </div>
        </div>

        {/* === Right Side: Promo Card === */}
        {/* Full height matching the left content, with rounded corners */}
        <div className="lg:w-[45%] relative bg-[#5236AC] rounded-[32px] overflow-hidden min-h-[400px] flex flex-col justify-center p-10 md:p-14">
          {/* Text Content */}
          <div className="relative z-10 max-w-sm">
            <span className="text-white/90 font-medium italic mb-2 block text-lg">
              Save up to 15%
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
              Your New <br /> Favorite Tee <br /> Starts Here
            </h2>
            <button className="bg-white text-[#5236AC] font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors shadow-sm">
              Shop Now
            </button>
          </div>

          {/* Background Image (Yellow Tee) */}
          <div className="absolute right-0 top-0 h-full w-[50%] md:w-[60%]">
            <Image
              src="/images/landingPage/common/yellow.png"
              alt="Yellow T-Shirt on Rack"
              fill
              className="object-cover object-left"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyShopSection;
