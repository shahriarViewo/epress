"use client";

import React from "react";
import ProductCard from "@/app/components/ui/card/ProductCard";
import Link from "next/link";

// Mock Data - You can replace this with actual related products from your data
const relatedProducts = [
  {
    id: 1,
    title: "Ink Hustle Cap",
    description: "Hustle hard looks harder",
    price: 9.99,
    rating: 4.5,
    imageUrl: "/images/landingPage/TopSellingProducts/1.png",
  },
  {
    id: 2,
    title: "Daily Grind Cup",
    description: "Fuel your hustle in style",
    price: 12.99,
    rating: 4.3,
    imageUrl: "/images/landingPage/TopSellingProducts/2.png",
  },
  {
    id: 3,
    title: "Pure Press Tee",
    description: "Sustainable, soft, simple & stylish",
    price: 24.99,
    rating: 4.7,
    imageUrl: "/images/landingPage/TopSellingProducts/3.png",
  },
  {
    id: 4,
    title: "Create Mode Cap",
    description: "Switch on your creative vibe",
    price: 14.99,
    rating: 4.4,
    imageUrl: "/images/landingPage/TopSellingProducts/4.png",
  },
];

const RelatedProducts = () => {
  return (
    <section className="w-full py-8 lg:py-12 px-3 lg:px-16 mx-auto">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6 lg:mb-10 w-full">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          You May Also Like
        </h2>

        <Link
          href="/products"
          className="text-[#E07A06] text-sm md:text-base font-medium hover:text-[#c76a00] flex items-center gap-1 transition-colors"
        >
          View All
          <span>&gt;</span>
        </Link>
      </div>

      <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-6 gap-y-6 lg:gap-y-10">
        {relatedProducts?.map((product) => (
          <ProductCard
            key={product?.id}
            title={product?.title}
            description={product?.description}
            price={product?.price}
            rating={product?.rating}
            imageUrl={product?.imageUrl}
            onAddToCart={() => console.log(`Added ${product.title} to cart`)}
            onWishlistToggle={() =>
              console.log(`Toggled wishlist for ${product.title}`)
            }
          />
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
