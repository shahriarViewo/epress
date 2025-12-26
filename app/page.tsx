import HeroSection from "./components/features/home/HeroSection";
import CategorySection from "./components/features/home/CategorySection";
import TopSellingSection from "./components/features/home/TopSellingSection";
import PromoDealsSection from "./components/features/home/PromoDealSection";
import HeroBannerSection from "./components/features/home/HeroBannerSection";
import BestSellingTshirtSection from "./components/features/home/BestSellingTshirtSection";
import WhyShopSection from "./components/features/home/WhyShopSection";
import TwoColumnBanner from "./components/features/home/TwoColumnBanner";
import PromoGridSection from "./components/features/home/PromoGridSection";
import TestimonialSection from "./components/features/home/TestimonialSection";
import TShirtCollectionGrid from "./components/features/home/TShirtCollectionGrid";
import PromotionalBanner from "./components/features/home/PromotionalBanner";
import FaqSection from "./components/features/home/FaqSection";
import FeaturesSection from "./components/features/home/FeaturesSection";
import CtaSection from "./components/features/home/CtaSection";
import OurFeaturedCaps from "./components/features/home/OurFeaturedCaps";
import BestsellersSection from "./components/features/home/BestsellersSection";
import ProductCarousel from "./components/features/home/ProductCarousel";
export default function Home() {
  return (
    <>
      <main className="min-h-screen max-w-[1600px] mx-auto">
        <HeroSection />
        <CategorySection />
        <TopSellingSection />
        <PromoDealsSection />
        <HeroBannerSection />
        <BestSellingTshirtSection />
        <BestsellersSection />
        <WhyShopSection />
        <TwoColumnBanner />
        <OurFeaturedCaps />
        <PromoGridSection />
        <TestimonialSection />
        <TShirtCollectionGrid />
        <PromotionalBanner />
        <ProductCarousel />
        <FaqSection />
        <FeaturesSection />
      </main>
      <CtaSection />
    </>
  );
}
