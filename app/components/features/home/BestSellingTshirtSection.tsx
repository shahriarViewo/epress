'use client';

import React from 'react';
import ProductCard from '@/app/components/ui/card/ProductCard';

// Mock Data for t-shirts
const tshirts = [
  {
    id: 1,
    title: 'Pure Press Tee',
    description: 'Sustainable, soft, simple & stylish',
    price: 9.99,
    rating: 4.5,
    imageUrl: '/images/landingPage/BestSellingT-Shirt/1.png',
  },
  {
    id: 2,
    title: 'Pure Press Tee',
    description: 'Sustainable, soft, simple & stylish',
    price: 9.99,
    rating: 4.5,
    imageUrl: '/images/landingPage/BestSellingT-Shirt/2.png',
  },
  {
    id: 3,
    title: 'Pure Press Tee',
    description: 'Sustainable, soft, simple & stylish',
    price: 9.99,
    rating: 4.5,
    imageUrl: '/images/landingPage/BestSellingT-Shirt/3.png',
  },
  {
    id: 4,
    title: 'Pure Press Tee',
    description: 'Sustainable, soft, simple & stylish',
    price: 9.99,
    rating: 4.5,
    imageUrl: '/images/landingPage/BestSellingT-Shirt/4.png',
  },
  {
    id: 5,
    title: 'Tag & trend Tee',
    description: 'Design for the city creator',
    price: 9.99,
    rating: 4.5,
    imageUrl: '/images/landingPage/BestSellingT-Shirt/5.png',
  },
  {
    id: 6,
    title: 'Tag & trend Tee',
    description: 'Design for the city creator',
    price: 9.99,
    rating: 4.5,
    imageUrl: '/images/landingPage/BestSellingT-Shirt/6.png',
  },
  {
    id: 7,
    title: 'Tag & trend Tee',
    description: 'Design for the city creator',
    price: 9.99,
    rating: 4.5,
    imageUrl: '/images/landingPage/BestSellingT-Shirt/7.png',
  },
  {
    id: 8,
    title: 'Tag & trend Tee',
    description: 'Design for the city creator',
    price: 9.99,
    rating: 4.5,
    imageUrl: '/images/landingPage/BestSellingT-Shirt/8.png',
  }
];

const BestSellingTshirtSection = () => {
  return (
    <section className="w-full py-12 px-[64px] mx-auto">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-10 w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Best Selling T-Shirts
        </h2>
        
        <a 
          href="#" 
          className="text-[#E07A06] font-medium hover:text-[#c76a00] flex items-center gap-1 transition-colors"
        >
          View All T-Shirts
          <span>&gt;</span>
        </a>
      </div>
      
      <div className="w-full grid gap-y-10 gap-x-6 justify-between [grid-template-columns:repeat(auto-fit,310px)]">
        {tshirts.map((tshirt) => (
          <ProductCard
            key={tshirt.id}
            title={tshirt.title}
            description={tshirt.description}
            price={tshirt.price}
            rating={tshirt.rating}
            imageUrl={tshirt.imageUrl}
            onAddToCart={() => console.log(`Added ${tshirt.title} to cart`)}
            onWishlistToggle={() => console.log(`Toggled wishlist for ${tshirt.title}`)}
          />
        ))}
      </div>
    </section>
  );
};

export default BestSellingTshirtSection;
