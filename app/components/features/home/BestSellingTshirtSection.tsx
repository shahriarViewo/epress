"use client";

import React from "react";
import ProductCard from "@/app/components/ui/card/ProductCard";
import Link from "next/link";
import { colors } from "../../../config/colors";

// Mock Data for t-shirts
const tshirts = [
  {
    id: 1,
    title: "Pure Press Tee",
    description: "Sustainable, soft, simple & stylish",
    price: 9.99,
    rating: 4.5,
    imageUrl: "/images/landingPage/BestSellingT-Shirt/1.png",
  },
  {
    id: 2,
    title: "Pure Press Tee",
    description: "Sustainable, soft, simple & stylish",
    price: 9.99,
    rating: 4.5,
    imageUrl: "/images/landingPage/BestSellingT-Shirt/2.png",
  },
  {
    id: 3,
    title: "Pure Press Tee",
    description: "Sustainable, soft, simple & stylish",
    price: 9.99,
    rating: 4.5,
    imageUrl: "/images/landingPage/BestSellingT-Shirt/3.png",
  },
  {
    id: 4,
    title: "Pure Press Tee",
    description: "Sustainable, soft, simple & stylish",
    price: 9.99,
    rating: 4.5,
    imageUrl: "/images/landingPage/BestSellingT-Shirt/4.png",
  },
  {
    id: 5,
    title: "Tag & trend Tee",
    description: "Design for the city creator",
    price: 9.99,
    rating: 4.5,
    imageUrl: "/images/landingPage/BestSellingT-Shirt/5.png",
  },
  {
    id: 6,
    title: "Tag & trend Tee",
    description: "Design for the city creator",
    price: 9.99,
    rating: 4.5,
    imageUrl: "/images/landingPage/BestSellingT-Shirt/6.png",
  },
  {
    id: 7,
    title: "Tag & trend Tee",
    description: "Design for the city creator",
    price: 9.99,
    rating: 4.5,
    imageUrl: "/images/landingPage/BestSellingT-Shirt/7.png",
  },
  {
    id: 8,
    title: "Tag & trend Tee",
    description: "Design for the city creator",
    price: 9.99,
    rating: 4.5,
    imageUrl: "/images/landingPage/BestSellingT-Shirt/8.png",
  },
];

const BestSellingTshirtSection = () => {
  return (
    <section className="w-full py-4 lg:py-12 px-3 lg:px-16 mx-auto">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6 lg:mb-10 w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Best Selling T-Shirts
        </h2>

        <Link
          href="#"
          className="text-sm md:text-base font-medium flex items-center gap-1 transition-colors"
          style={{ color: colors.primary }}
          onMouseEnter={(e) => e.currentTarget.style.color = colors.linkHover}
          onMouseLeave={(e) => e.currentTarget.style.color = colors.primary}
        >
          View All T-Shirts
          <span>&gt;</span>
        </Link>
      </div>

      <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-6 gap-y-6 lg:gap-y-10">
        {tshirts?.map((tshirt) => (
          <ProductCard
            key={tshirt.id}
            title={tshirt.title}
            description={tshirt.description}
            price={tshirt.price}
            rating={tshirt.rating}
            imageUrl={tshirt.imageUrl}
            onAddToCart={() => console.log(`Added ${tshirt.title} to cart`)}
            onWishlistToggle={() =>
              console.log(`Toggled wishlist for ${tshirt.title}`)
            }
          />
        ))}
      </div>
    </section>
  );
};

export default BestSellingTshirtSection;
