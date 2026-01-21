import FaqSection from "@/app/components/features/home/FaqSection";
import HelpBanner from "../components/banners/HelpBanner";

const FaqPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
                <HelpBanner
            title="We’re Here to Help"
            subtitle={`Need product info or support? Contact us anytime.\nYour satisfaction is our priority.`}
            images={{
                leftMain: "/images/banners/Frame 1171278359.jpg",
                leftCard: "/images/banners/Frame 1171278360.jpg",
                rightMain: "/images/banners/Frame 1171278361.jpg",
                rightCard: "/images/banners/Frame 1171278362.jpg"
            }}
        />
      <FaqSection />
    </div>
  );
};

export default FaqPage;