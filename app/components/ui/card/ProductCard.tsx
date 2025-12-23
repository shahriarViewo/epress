"use client";

import React from "react";
import Image from "next/image";

type ProductCardProps = {
  title: string;
  description: string;
  price: number;
  rating: number;
  imageUrl: string;
  onAddToCart?: () => void;
  onWishlistToggle?: () => void;
  isWishlisted?: boolean;
};

const ProductCard: React.FC<ProductCardProps> = ({
  title = "Ink Hustle Cap",
  description = "Hustle hard looks harder",
  price = 9.99,
  rating = 4.5,
  imageUrl = "",
  onAddToCart = () => {},
  onWishlistToggle = () => {},
  isWishlisted = false,
}) => {
  return (
    /* CONTAINER LOGIC:
      - h-auto: Mobile height is flexible (depends on content).
      - lg:h-[395px]: Desktop height is fixed/tall.
    */
    <div className="w-full h-auto lg:h-[395px] bg-white rounded-xl lg:rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
      
      {/* Top Section: Image & Heart Icon */}
      {/* Mobile Height: 160px | Desktop Height: 254px */}
      <div className="relative h-[160px] lg:h-[254px] bg-[#F3F4F6] flex items-center justify-center p-4 lg:p-6">
        
        {/* Wishlist Button - Scaled down for mobile */}
        <button
          onClick={onWishlistToggle}
          className="absolute top-2 right-2 lg:top-5 lg:right-5 w-8 h-8 lg:w-10 lg:h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition-transform cursor-pointer z-10"
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={isWishlisted ? "currentColor" : "none"}
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`w-4 h-4 lg:w-5 lg:h-5 ${
              isWishlisted ? "text-red-500" : "text-gray-700 hover:text-red-500"
            } transition-colors`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>

        {/* Product Image */}
        <div className="relative w-full h-full px-4 lg:px-16">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-contain mix-blend-multiply drop-shadow-xl"
            sizes="(max-width: 768px) 50vw, 320px"
            priority={false}
          />
        </div>
      </div>

      {/* Bottom Section: Product Info */}
      <div className="p-3 lg:p-4 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-1 lg:mb-2 gap-2">
          {/* Title: Text-sm on mobile, truncated to 1 line to save space */}
          <h3 className="text-sm lg:text-lg font-semibold text-gray-900 line-clamp-1 lg:line-clamp-none">
            {title}
          </h3>
          
          <div className="flex items-center gap-1 shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-3 h-3 lg:w-4 lg:h-4 text-amber-500"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xs lg:text-sm text-gray-500">({rating})</span>
          </div>
        </div>

        {/* Description: Hidden or clamped strictly on mobile */}
        <p className="text-gray-600 text-xs lg:text-sm mb-2 lg:mb-4 flex-1 line-clamp-1">
          {description}
        </p>

        {/* Footer: Price & Button */}
        {/* On mobile, we use a smaller layout. */}
        <div className="flex justify-between items-center mt-auto gap-2">
          
          <button
            onClick={onAddToCart}
            className="bg-[#EF5A2B] hover:bg-[#d64a1f] text-white font-semibold 
                       py-1.5 px-3 lg:py-2.5 lg:px-6 
                       text-xs lg:text-base 
                       rounded-full flex items-center gap-1 lg:gap-2 transition-colors shrink-0"
            aria-label="Add to cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 lg:w-5 lg:h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            {/* Show "Cart" text only on bigger screens if it gets too tight? 
                Actually 'Cart' is short enough to keep on mobile. */}
            <span>Cart</span>
          </button>

          <span className="text-sm lg:text-lg font-bold text-gray-900">
            ${price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;