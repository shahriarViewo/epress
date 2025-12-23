"use client";

import React from "react";
import ProductCard from "@/app/components/ui/card/ProductCard";

// Mock Data for caps
const caps = [
  {
    id: 1,
    title: "Visionary Crown Cap",
    description: "Street energy, OnePrint precision",
    price: 9.99,
    rating: 4.5,
    imageUrl: "/images/landingPage/cap/1.png",
  },
  {
    id: 2,
    title: "Press the Crown",
    description: "Street energy, OnePrint precision",
    price: 9.99,
    rating: 4.5,
    imageUrl: "/images/landingPage/cap/2.png",
  },
  {
    id: 3,
    title: "Limitless Ink Cap",
    description: "Street energy, OnePrint precision",
    price: 9.99,
    rating: 4.5,
    imageUrl: "/images/landingPage/cap/3.png",
  },
  {
    id: 4,
    title: "The Innovator Cap",
    description: "Street energy, OnePrint precision",
    price: 9.99,
    rating: 4.5,
    imageUrl: "/images/landingPage/cap/4.png",
  },
  {
    id: 5,
    title: "PressPower Snap Cap",
    description: "Street energy, OnePrint precision",
    price: 9.99,
    rating: 4.5,
    imageUrl: "/images/landingPage/cap/5.png",
  },
  {
    id: 6,
    title: "Create Mode Cap",
    description: "Street energy, OnePrint precision",
    price: 9.99,
    rating: 4.5,
    imageUrl: "/images/landingPage/cap/6.png",
  },
  {
    id: 7,
    title: "DreamPress Heat Cap",
    description: "Street energy, OnePrint precision",
    price: 9.99,
    rating: 4.5,
    imageUrl: "/images/landingPage/cap/7.png",
  },
  {
    id: 8,
    title: "Press the Crown",
    description: "Street energy, OnePrint precision",
    price: 9.99,
    rating: 4.5,
    imageUrl: "/images/landingPage/cap/8.png",
  },
];

const OurFeaturedCaps = () => {
  return (
    <section className="w-full py-4 lg:py-12 px-3 lg:px-16 mx-auto">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6 lg:mb-10 w-full">
        <h2 className="text-xl md:text-4xl font-bold text-gray-900">
          Our Featured Caps
        </h2>

        <a
          href="#"
          className="text-[#E07A06] text-sm md:text-base font-medium hover:text-[#c76a00] flex items-center gap-1 transition-colors"
        >
          View All Caps
          <span>&gt;</span>
        </a>
      </div>

      <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-6 gap-y-6 lg:gap-y-10">
        {caps.map((cap) => (
          <ProductCard
            key={cap?.id}
            title={cap?.title}
            description={cap?.description}
            price={cap?.price}
            rating={cap?.rating}
            imageUrl={cap?.imageUrl}
            onAddToCart={() => console.log(`Added ${cap.title} to cart`)}
            onWishlistToggle={() =>
              console.log(`Toggled? wishlist for ${cap.title}`)
            }
          />
        ))}
      </div>
    </section>
  );
};

export default OurFeaturedCaps;
