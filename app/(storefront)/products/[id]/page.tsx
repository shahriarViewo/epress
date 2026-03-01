import React from 'react';
import Breadcrumbs from '../../components/ui/layout/Breadcrumbs';
import ProductDetails from '../../components/features/product/ProductDetails';
import ProductTabs from '../../components/features/product/ProductTabs';
import ServiceInfo from '../../components/features/product/ServiceInfo';
import RelatedProducts from '../../components/features/product/RelatedProducts';
import FeaturesSection from '../../components/features/home/FeaturesSection';
import FaqSection from '../../components/features/home/FaqSection';

// --- MOCK DATA ---
const MOCK_PRODUCT = {
  id: "1",
  title: "Press Power Snapback Cap",
  price: 9.99,
  originalPrice: 16.99,
  rating: 4.5,
  stock: 22,
  description: "Classic snapback with premium texture.",
  sizes: ["22.05in", "22.44in", "22.83in", "23.62in", "24.02in"],
  colors: [
    { name: "Black", class: "bg-black" },
    { name: "White", class: "bg-white border-gray-200 border" },
    { name: "Navy", class: "bg-blue-900" },
    { name: "Yellow", class: "bg-yellow-400" },
    { name: "Red", class: "bg-red-700" },
  ],
  images: [
    "/images/productDetials/cap%20Images/1.png",
    "/images/productDetials/cap%20Images/2.png",
    "/images/productDetials/cap%20Images/3.png",
    "/images/productDetials/cap%20Images/4.png",
    "/images/productDetials/cap%20Images/5.png"
  ]
};

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
}

export default function ProductPage({ params }: { params: { id: string } }) {
  
  return (
    <div className="max-w-[1600px] mx-auto">
      <div className="w-full px-4 py-4 lg:py-16 lg:px-16">
      <div className="mb-6 ">
        <Breadcrumbs />
      </div>

      <ProductDetails product={MOCK_PRODUCT} />

      {/* 2. New Content Section (Description + Delivery Grid) */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-start">
        
        {/* Left Column: Product Tabs (Spans 8 cols on desktop) */}
        <div className="lg:col-span-8">
          <ProductTabs />
        </div>

        {/* Right Column: Delivery Info (Spans 4 cols on desktop) */}
        {/* Removed the dashed border container wrapper */}
        <div className="hidden lg:block lg:col-span-4 sticky top-24"> 
           <ServiceInfo />
        </div>

      </div>

      {/* Related Products Section */}
      <div className="mt-16">
        <RelatedProducts />
      </div>

      {/* Features Section */}
      <div className="mt-16">
        <FeaturesSection />
      </div>
      </div>
      {/* FAQ Section */}
      <div className="mt-16">
        <FaqSection />
      </div>
    </div>
  );
}