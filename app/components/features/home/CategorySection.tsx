"use client";

import React from "react";

const categories = [
  { name: "Electronics", img: "/images/landingPage/ShopByCategories/1.png" },
  { name: "Fashion", img: "/images/landingPage/ShopByCategories/2.png" },
  { name: "Beauty", img: "/images/landingPage/ShopByCategories/3.png" },
  { name: "Packaging", img: "/images/landingPage/ShopByCategories/4.png" },
  { name: "Water Bottle", img: "/images/landingPage/ShopByCategories/5.png" },
  { name: "Back Pack", img: "/images/landingPage/ShopByCategories/6.png" },
  { name: "Kids", img: "/images/landingPage/ShopByCategories/7.png" },
  { name: "Jewelry", img: "/images/landingPage/ShopByCategories/8.png" },
  { name: "Home Appliance", img: "/images/landingPage/ShopByCategories/9.png" },
  { name: "Pet Care", img: "/images/landingPage/ShopByCategories/10.png" },
  { name: "Office", img: "/images/landingPage/ShopByCategories/11.png" },
  { name: "Toys", img: "/images/landingPage/ShopByCategories/12.png" },
];

const CategorySection = () => {
  return (
    <div className="w-full bg-white py-4 lg:py-12">
      <div className=" px-4 mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-l md:text-4xl font-bold text-gray-900">
            Shop By Categories
          </h2>
          <a
            href="#"
          className="text-[#E07A06] text-sm md:text-base font-medium hover:text-[#c76a00] flex items-center gap-1 transition-colors"
          >
            View All
            <span>&gt;</span>
          </a>
        </div>

        {/* Grid Container */}
        <div className="bg-gray-200 border border-gray-200 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-white p-6 flex flex-col items-center justify-center hover:bg-gray-50 transition-colors group cursor-pointer"
            >
              {/* Image Circle */}
              <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-4 overflow-hidden p-1">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-125 transition-transform duration-300 ease-in-out"
                  style={{ transformOrigin: "center" }}
                />
              </div>

              {/* Category Name */}
              <h3 className="text-sm font-medium text-gray-800 text-center">
                {cat.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
