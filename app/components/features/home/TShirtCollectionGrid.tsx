"use client";

import React from "react";
import Image from "next/image";

const TShirtCollectionGrid = () => {
  return (
    <section className="w-full py-4 lg:py-12 px-4 lg:px-16 bg-white">
      {/* Main Grid Container */}
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 w-full lg:h-[600px]">
        {/* Left: Main Hero Card */}
        <div className="relative w-full h-[400px] lg:h-full rounded-[32px] overflow-hidden group">
          <Image
            src="/images/landingPage/TshirtCollection/1.jpg"
            alt="T-Shirt Collection"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 bg-black/10 p-8 md:p-12 flex flex-col justify-end items-start">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight drop-shadow-md">
              Heat Press T-Shirt <br /> Collection
            </h2>

                              <button
                    type="button"
                    className="relative flex items-center justify-center overflow-hidden bg-white text-black hover:text-white font-semibold text-xs md:text-sm xl:text-base py-2 px-6 md:py-2 md:px-6 xl:py-3 xl:px-8 rounded-full w-fit shadow-lg transition-colors duration-200 transition-[text-shadow] before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600/30 hover:before:h-56 hover:before:w-56 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                  >
                    <span className="relative z-10">
                      Shop Now
                    </span>
                  </button>
          </div>
        </div>

        {/* Right: 4-Item Gallery Grid */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[400px] lg:h-full">
          {/* 1. Top Left: Stack of Shirts */}
          <div className="relative rounded-3xl overflow-hidden group">
            <Image
              src="/images/landingPage/TshirtCollection/2.jpg"
              alt="T-Shirt Design 1"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              priority
            />
          </div>

          {/* 2. Top Right: Fanned Colors */}
          <div className="relative rounded-3xl overflow-hidden group">
            <Image
              src="/images/landingPage/TshirtCollection/3.jpg"
              alt="T-Shirt Design 2"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              priority
            />
          </div>

          {/* 3. Bottom Left: Red Shirt Hand */}
          <div className="relative rounded-3xl overflow-hidden group">
            <Image
              src="/images/landingPage/TshirtCollection/4.jpg"
              alt="T-Shirt Design 3"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              priority
            />
          </div>

          {/* 4. Bottom Right: Green Hanging Shirt */}
          <div className="relative rounded-3xl overflow-hidden group">
            <Image
              src="/images/landingPage/TshirtCollection/5.jpg"
              alt="T-Shirt Design 4"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TShirtCollectionGrid;
