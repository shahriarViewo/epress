import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { 
  Truck, 
  CreditCard, 
  CircleDollarSign, 
  PackageSearch 
} from "lucide-react";

export default function WhyChooseUsSection() {
  
  const features = [
    {
      icon: PackageSearch,
      title: "Choose your product",
      desc: "We'll Design, print & ship it to your door!"
    },
    {
      icon: CircleDollarSign,
      title: "Affordable Price",
      desc: "No minimum order requirements"
    },
    {
      icon: Truck,
      title: "Fast delivery",
      desc: "Fast shipping nationwide"
    },
    {
      icon: CreditCard,
      title: "Secure Payment",
      desc: "We confirm that payment system are totally secure"
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24">
      <div className="max-w-[1600px] mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* === LEFT COLUMN: Image === 
              Symmetry Note: Matches the 'Mission' section aspect ratio 
              and corner rounding for a consistent feel.
          */}
          <div className="relative w-full aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100 shadow-sm">
            <Image
              src="/images/why-choose-us/1.png" // Replace with your bag image path
              alt="Premium shopping bag representing quality"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
            />
          </div>

          {/* === RIGHT COLUMN: Content === */}
          <div className="space-y-10">
            
            {/* Header Group */}
            <div className="space-y-4">
              {/* H2 Rule: text-4xl */}
              <h2 className="text-4xl font-bold text-gray-900">
                Why Choose Us
              </h2>
              {/* Body Rule: text-lg */}
              <p className="text-lg text-gray-600 leading-relaxed">
                At OnePrint, we combine top-tier materials with efficient production to deliver 
                exceptional prints—on time, every time. From custom designs to flawless fulfillment, 
                OnePrint ensures consistency, precision, and customer satisfaction at every step.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-8">
              {features.map((item, index) => (
                <div key={index} className="flex gap-5">
                  {/* Icon Wrapper */}
                  <div className="shrink-0 mt-1">
                    <item.icon className="w-8 h-8 text-[#EF5A2B]" />
                  </div>
                  
                  {/* Text Content */}
                  <div>
                    {/* H3 Rule: text-2xl */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    {/* Sub-text Rule: text-base (using text-gray-500 for contrast) */}
                    <p className="text-base text-gray-500">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2">
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