'use client';

import React from 'react';
import ProductCard from '@/app/components/ui/card/ProductCard';

// Mock Data matching your screenshot
const products = [
  {
    id: 1,
    title: 'Ink Hustle Cap',
    description: 'Hustle hard looks harder',
    price: 9.99,
    rating: 4.5,
    imageUrl: '/images/landingPage/TopSellingProducts/1.png',
  },
  {
    id: 2,
    title: 'Daily Grind Cup',
    description: 'Fuel your hustle in style',
    price: 9.99,
    rating: 4.5,
    imageUrl: '/images/landingPage/TopSellingProducts/2.png',
  },
  {
    id: 3,
    title: 'Pure Press Tee',
    description: 'Sustainable, soft, simple & stylish',
    price: 9.99,
    rating: 4.5,
    imageUrl: '/images/landingPage/TopSellingProducts/3.png',
  },
  {
    id: 4,
    title: 'Create Mode Cap',
    description: 'Switch on your creative vibe',
    price: 9.99,
    rating: 4.5,
    imageUrl: '/images/landingPage/TopSellingProducts/4.png',
  },
  {
    id: 5,
    title: 'Tag & trend Tee',
    description: 'Design for the city creator',
    price: 9.99,
    rating: 4.5,
    imageUrl: '/images/landingPage/TopSellingProducts/5.png',
  },
  {
    id: 6,
    title: 'Press the Crown',
    description: 'Street energy, OnePrint precision',
    price: 9.99,
    rating: 4.5,
    imageUrl: '/images/landingPage/TopSellingProducts/6.png',
  },
  {
    id: 7,
    title: 'Platinum pour Cup',
    description: 'Every sip feels exclusive',
    price: 9.99,
    rating: 4.5,
    imageUrl: '/images/landingPage/TopSellingProducts/7.png',
  },
  {
    id: 8,
    title: 'Heat Street Series',
    description: 'Bold, urban, unapologetic',
    price: 9.99,
    rating: 4.3,
    imageUrl: '/images/landingPage/TopSellingProducts/8.png',
  },
  {
    id: 9,
    title: 'Urban Explorer Backpack',
    description: 'Carry your world in style',
    price: 29.99,
    rating: 4.7,
    imageUrl: 'https://placehold.co/400x400/F3F4F6/2F4F4F?text=Backpack',
  },
  {
    id: 10,
    title: 'Night Owl Cap',
    description: 'For those who create after dark',
    price: 14.99,
    rating: 4.4,
    imageUrl: 'https://placehold.co/400x400/F3F4F6/000000?text=Black+Cap',
  },
  {
    id: 11,
    title: 'Code Breaker Tee',
    description: 'Debug your style',
    price: 12.99,
    rating: 4.6,
    imageUrl: 'https://placehold.co/400x400/F3F4F6/4B0082?text=Purple+Tee',
  },
  {
    id: 12,
    title: 'Designer Mug',
    description: 'Perfect for your morning brew',
    price: 8.99,
    rating: 4.8,
    imageUrl: 'https://placehold.co/400x400/F3F4F6/8B0000?text=Red+Mug',
  },
  {
    id: 13,
    title: 'Street Art Cap',
    description: 'Wearable urban art',
    price: 16.99,
    rating: 4.5,
    imageUrl: 'https://placehold.co/400x400/F3F4F6/FF4500?text=Orange+Cap',
  },
  {
    id: 14,
    title: 'Minimalist Tee',
    description: 'Less is more',
    price: 11.99,
    rating: 4.3,
    imageUrl: 'https://placehold.co/400x400/F3F4F6/808080?text=Grey+Tee',
  },
  {
    id: 15,
    title: 'Vintage Cap',
    description: 'Classic never goes out of style',
    price: 15.99,
    rating: 4.7,
    imageUrl: 'https://placehold.co/400x400/F3F4F6/8B4513?text=Brown+Cap',
  },
  {
    id: 16,
    title: 'Tech Tee',
    description: 'For the tech-savvy',
    price: 13.99,
    rating: 4.6,
    imageUrl: 'https://placehold.co/400x400/F3F4F6/000080?text=Navy+Tee',
  },
  {
    id: 17,
    title: 'Artist Mug',
    description: 'Sip in style',
    price: 9.49,
    rating: 4.4,
    imageUrl: 'https://placehold.co/400x400/F3F4F6/008000?text=Green+Mug',
  },
  {
    id: 18,
    title: 'Skater Cap',
    description: 'For the urban rider',
    price: 14.99,
    rating: 4.5,
    imageUrl: 'https://placehold.co/400x400/F3F4F6/FF0000?text=Red+Cap',
  },
  {
    id: 19,
    title: 'Graphic Tee',
    description: 'Make a statement',
    price: 12.99,
    rating: 4.6,
    imageUrl: 'https://placehold.co/400x400/F3F4F6/FF69B4?text=Pink+Tee',
  },
  {
    id: 20,
    title: 'Retro Cap',
    description: 'Vintage vibes',
    price: 15.99,
    rating: 4.7,
    imageUrl: 'https://placehold.co/400x400/F3F4F6/800080?text=Purple+Cap',
  },
];

const TopSellingSection = () => {
  return (
    <section className="w-full py-12 px-[64px] mx-auto">
      
      {/* Header Section */}
      <div className="flex justify-between items-center mb-10 w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Top Selling Product
        </h2>
        
        <a 
          href="#" 
          className="text-[#E07A06] font-medium hover:text-[#c76a00] flex items-center gap-1 transition-colors"
        >
          View All products 
          <span>&gt;</span>
        </a>
      </div>
      <div className="w-full grid gap-y-10 gap-x-6 justify-between [grid-template-columns:repeat(auto-fit,310px)]">
        {products.slice(0, 8).map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            rating={product.rating}
            imageUrl={product.imageUrl}
            onAddToCart={() => console.log(`Added ${product.title} to cart`)}
            onWishlistToggle={() => console.log(`Toggled wishlist for ${product.title}`)}
          />
        ))}
      </div>
    </section>
  );
};

export default TopSellingSection;