import HeroSection from "../components/features/home/HeroSection";
import CategorySection from "../components/features/home/CategorySection";
import TopSellingSection from "../components/features/home/TopSellingSection";
import PromoDealsSection from "../components/features/home/PromoDealSection";
import HeroBannerSection from "../components/features/home/HeroBannerSection";
import BestSellingTshirtSection from "../components/features/home/BestSellingTshirtSection";
import WhyShopSection from "../components/features/home/WhyShopSection";
import TwoColumnBanner from "../components/features/home/TwoColumnBanner";
import PromoGridSection from "../components/features/home/PromoGridSection";
import TestimonialSection from "../components/features/home/TestimonialSection";
import CollectionGrid from "../components/features/home/CollectionGrid";
import PromotionalBanner from "../components/features/home/PromotionalBanner";
import FaqSection from "../components/features/home/FaqSection";
import FeaturesSection from "../components/features/home/FeaturesSection";
import CtaSection from "../components/features/home/CtaSection";
import OurFeaturedCaps from "../components/features/home/OurFeaturedCaps";
import BestsellersSection from "../components/features/home/BestsellersSection";
import CapCarousel from "../components/features/home/CapCarousel";
import TshirtCarousel from '../components/features/home/TshirtCarousel';
import HoodyCarousel from "../components/features/home/HoodyCarousel";
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
        <CollectionGrid
          title="Heat Press T-Shirt Collection"
          mainImage="/images/landingPage/TshirtCollection/1.jpg"
          galleryImages={[
            "/images/landingPage/TshirtCollection/2.jpg",
            "/images/landingPage/TshirtCollection/3.jpg",
            "/images/landingPage/TshirtCollection/4.jpg",
            "/images/landingPage/TshirtCollection/5.jpg"
          ]}
          useGradientOverlay={true}
        />

        <PromotionalBanner />
        <CapCarousel />
        <TshirtCarousel />
        <HoodyCarousel />
        <CollectionGrid
          title="Heat Press Hoodie Collection"
          mainImage="/images/landingPage/HoodyWithBackground/1.webp"
          galleryImages={[
            "/images/landingPage/HoodyWithBackground/2.webp",
            "/images/landingPage/HoodyWithBackground/3.webp",
            "/images/landingPage/HoodyWithBackground/4.webp",
            "/images/landingPage/HoodyWithBackground/5.webp"
          ]}
          useGradientOverlay={false}
        />
        <FaqSection />
        <FeaturesSection />
      </main>
      <CtaSection />
    </>
  );
}
