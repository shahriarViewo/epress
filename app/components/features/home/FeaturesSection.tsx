import React from "react";
// Icons commented out as we're using images now
// import { Award, Leaf, Zap, Palette } from "lucide-react";
import Image from "next/image";
import { getPageContent } from '@/config/pageContent';

// Define the shape of a single feature item
interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  pageType?: string;
}

const FeaturesSection = ({ pageType = 'home' }: FeaturesSectionProps) => {
  const content = getPageContent(pageType);
  const features = content.features?.items || [
    {
      icon: "/images/landingPage/FeaturesSection/1.png",
      title: "Vibrant Quality",
      description:
        "Our advanced heat press ensures colors pop and prints last, turning heads and driving sales.",
    },
    {
      icon: "/images/landingPage/FeaturesSection/2.png",
      title: "Eco-Friendly",
      description:
        "Sustainable materials that resonate with conscious buyers and boost your brand's appeal.",
    },
    {
      icon: "/images/landingPage/FeaturesSection/3.png",
      title: "Fast Turnaround",
      description:
        "Lightning-fast printing and shipping to keep your customers coming back for more.",
    },
    {
      icon: "/images/landingPage/FeaturesSection/4.png",
      title: "Easy Design Tools",
      description:
        "Upload, preview, and perfect your designs in seconds with our intuitive platform.",
    },
  ];
  return (
    <section className="py-4 lg:py-16 px-4 lg:px-10 xl:px-16 font-sans w-full">
      {/* Changed max-w-7xl/mx-auto to w-full and added generous padding for edge-to-edge look */}
      <div className="w-full md:px-10  xl:px-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12 tracking-tight">
          {content.features?.title || "Why OnePrint Fuels Your Success"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 flex flex-col items-center h-full w-full"
            >
              <div className="mb-6 w-20 h-20 relative">
                <Image 
                  src={feature.icon} 
                  alt={feature.title}
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="text-sm lg:text-base font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-600 text-xs lg:text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
