import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

type MissionVisionProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  isReversed?: boolean; 
};

export default function MissionVisionSection({
  title,
  description,
  imageSrc,
  imageAlt,
  isReversed = false,
}: MissionVisionProps) {
  
  const features = [
    "Ready T-Shirt Design",
    "Design. Press. Impress.",
    "Turning Heat into Art.",
  ];

  return (
    <section className="w-full py-16 lg:py-24">
      <div className="max-w-[1600px] mx-auto px-4 md:px-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-center">
        
          {/* === IMAGE COLUMN === */}
          <div 
            className={`relative w-full lg:w-1/2 aspect-video lg:aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100 shadow-sm order-1 ${
              isReversed ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              /* ADDED: 'object-top' 
                 This ensures the crop starts from the top, saving the head/face.
              */
              className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-in-out"
            />
          </div>

          {/* === TEXT COLUMN === */}
          <div 
            className={`space-y-6 lg:space-y-8 w-full lg:w-1/2 order-2 ${
              isReversed ? "lg:order-1" : "lg:order-2"
            }`}
          >
            
            <h2 className="text-4xl font-bold text-gray-900">
              {title}
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              {description}
            </p>

            <ul className="space-y-4 pt-2">
              {features.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#EF5A2B] shrink-0" />
                  <span className="text-lg font-medium text-gray-900">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Button className="h-12 px-8 text-base font-bold bg-[#EF5A2B] hover:bg-[#d94a1f] text-white rounded-full transition-transform hover:scale-[1.02]">
                Shop Now
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
} 