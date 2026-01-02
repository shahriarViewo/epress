// import HeroSection from "./components/features/home/HeroSection";
// import CategorySection from "./components/features/home/CategorySection";
// import TopSellingSection from "./components/features/home/TopSellingSection";
// import PromoDealsSection from "./components/features/home/PromoDealSection";
// import HeroBannerSection from "./components/features/home/HeroBannerSection";
// import BestSellingTshirtSection from "./components/features/home/BestSellingTshirtSection";
// import WhyShopSection from "./components/features/home/WhyShopSection";
// import TwoColumnBanner from "./components/features/home/TwoColumnBanner";
// import PromoGridSection from "./components/features/home/PromoGridSection";
// import TestimonialSection from "./components/features/home/TestimonialSection";
// import TShirtCollectionGrid from "./components/features/home/TShirtCollectionGrid";
// import PromotionalBanner from "./components/features/home/PromotionalBanner";
// import FaqSection from "./components/features/home/FaqSection";
// import FeaturesSection from "./components/features/home/FeaturesSection";
// import CtaSection from "./components/features/home/CtaSection";
// import OurFeaturedCaps from "./components/features/home/OurFeaturedCaps";
// import BestsellersSection from "./components/features/home/BestsellersSection";
// import CapCarousel from "./components/features/home/CapCarousel";
// import TshirtCarousel from './components/features/home/TshirtCarousel';
// export default function Home() {
//   return (
//     <>
//       <main className="min-h-screen max-w-[1600px] mx-auto">
//         <HeroSection />
//         <CategorySection />
//         <TopSellingSection />
//         <PromoDealsSection />
//         <HeroBannerSection />
//         <BestSellingTshirtSection />
//         <BestsellersSection />
//         <WhyShopSection />
//         <TwoColumnBanner />
//         <OurFeaturedCaps />
//         <PromoGridSection />
//         <TestimonialSection />
//         <TShirtCollectionGrid />
//         <PromotionalBanner />
//         <CapCarousel />
//         <TshirtCarousel />
//         <FaqSection />
//         <FeaturesSection />
//       </main>
//       <CtaSection />
//     </>
//   );
// }



import Link from 'next/link';

async function getProducts() {
  // We use "no-store" to ensure we always get fresh data (Dynamic Fetching)
  try {
    const res = await fetch('http://127.0.0.1:8000/api/v1/products/', { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch');
    return res.json();
  } catch (error) {
    return [];
  }
}

export default async function HomePage() {
  const products = await getProducts();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">New Arrivals Summer Collection</h1>
          <p className="text-lg text-gray-300 mb-8">Discover the latest trends from our top vendors.</p>
          <button className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition">
            Shop Now
          </button>
        </div>
      </section>

      {/* Product Grid */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Featured Products</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.length === 0 ? (
            <p className="text-gray-500">No products available yet.</p>
          ) : (
            products.map((product: any) => (
              <Link href={`/products/${product.id}`} key={product.id} className="group">
                <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition border border-gray-100 overflow-hidden">
                  {/* Image Area */}
                  <div className="h-64 bg-gray-200 w-full relative">
                    {product.images && product.images.length > 0 ? (
                      <img 
                        src={product.images[0].image_details.file} 
                        alt={product.product_name}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-400">No Image</div>
                    )}
                  </div>
                  
                  {/* Details */}
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-900 truncate">{product.product_name}</h3>
                    <p className="text-sm text-gray-500 mb-2">{product.category_details?.category_name || 'Uncategorized'}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-blue-600">${product.price_range}</span>
                      <button className="text-xs bg-gray-900 text-white px-3 py-1 rounded hover:bg-gray-700">
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </section>
    </div>
  );
}