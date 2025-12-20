import React from "react";
import { Award, Leaf, Zap, Palette } from "lucide-react";

// Define the shape of a single feature item
interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    icon: <Award className="w-8 h-8 text-[#F35824]" strokeWidth={1.5} />,
    title: "Vibrant Quality",
    description:
      "Our advanced heat press ensures colors pop and prints last, turning heads and driving sales.",
  },
  {
    icon: <Leaf className="w-8 h-8 text-[#F35824]" strokeWidth={1.5} />,
    title: "Eco-Friendly",
    description:
      "Sustainable materials that resonate with conscious buyers and boost your brand's appeal.",
  },
  {
    icon: <Zap className="w-8 h-8 text-[#F35824]" strokeWidth={1.5} />,
    title: "Fast Turnaround",
    description:
      "Lightning-fast printing and shipping to keep your customers coming back for more.",
  },
  {
    icon: <Palette className="w-8 h-8 text-[#F35824]" strokeWidth={1.5} />,
    title: "Easy Design Tools",
    description:
      "Upload, preview, and perfect your designs in seconds with our intuitive platform.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-4 lg:py-16 px-4 lg:px-10 xl:px-16 font-sans w-full">
      {/* Changed max-w-7xl/mx-auto to w-full and added generous padding for edge-to-edge look */}
      <div className="w-full md:px-10  xl:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 tracking-tight">
          Why OnePrint Fuels Your Success
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 flex flex-col items-center h-full w-full"
            >
              <div className="mb-6 p-4 bg-orange-50 rounded-full flex items-center justify-center">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-500 text-[15px] leading-relaxed">
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
