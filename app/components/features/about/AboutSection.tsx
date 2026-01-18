import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  // Checkmark list items from the image
  const features = [
    "Ready T-Shirt Design",
    "Design. Press. Impress.",
    "Turning Heat into Art.",
  ];

  return (
    <section className="w-full py-4 lg:py-12 px-3 lg:px-16 mx-auto">
      {/* Responsive Grid Layout:
        - Mobile: Single column (1 col)
        - Desktop: Two columns (2 col) split 50/50
        - Gap: Large gap (gap-12 to gap-20) for that premium whitespace look
      */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* === LEFT COLUMN: Image === */}
        {/* Using aspect ratio to keep the image shape consistent */}
        <div className="relative w-full aspect-square lg:aspect-[4/3.5] rounded-3xl overflow-hidden bg-gray-100 shadow-sm">
          <Image
            src="/images/about/1.png" // Replace with your actual image path
            alt="Model wearing orange OnePrint hoodie"
            fill
            className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
            priority
          />
        </div>

        {/* === RIGHT COLUMN: Content === */}
        <div className="space-y-8">
          
          {/* H2: Section Heading -> text-4xl */}
          <h2 className="text-4xl font-bold text-gray-900">
            About OnePrint
          </h2>

          {/* Body Text Wrapper */}
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              We're not just here to print your merch – we're here to power your vision. 
              At OnePrint, we believe creativity should be effortless, fun, and full of possibilities. 
              That's why we built a print-on-demand platform made for the new generation of designers, 
              influencers, hustlers, artists, and side-hustlers.
            </p>
            <p>
              Whether you're printing your art on a hoodie, starting a streetwear brand from your dorm, 
              or making custom gifts for your crew – we're here for all of it.
            </p>
            <p>
              No upfront costs. No inventory stress. No gatekeepers. Just your ideas, our platform, 
              and unlimited potential.
            </p>
          </div>

          {/* Feature List */}
          <ul className="space-y-4 pt-2">
            {features.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                {/* Icon: Using the brand orange color */}
                <CheckCircle2 className="w-6 h-6 text-[#EF5A2B] shrink-0" />
                
                {/* List Item Text: text-lg (matching body scale) but slightly weightier */}
                <span className="text-lg font-medium text-gray-900">
                  {item}
                </span>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
}