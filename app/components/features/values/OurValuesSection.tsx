import React from "react";
import Image from "next/image";

export default function OurValuesSection() {
  const values = [
    {
      title: "Ready T-Shirt Design",
      desc: "We champion creativity as the heart of everything we do. We believe in transforming ideas into beautiful, tangible prints that inspire and elevate.",
    },
    {
      title: "Quality Matters",
      desc: "We never compromise on quality. Every product we deliver—from t-shirts to custom prints—meets the highest standards of craftsmanship and care.",
    },
    {
      title: "Customer-Centric",
      desc: "Your vision is our priority. We work closely with you to bring your ideas to life, ensuring a seamless, satisfying experience from start to finish.",
    },
    {
      title: "Sustainability Always",
      desc: "We are committed to sustainable printing practices, using eco-friendly materials and processes wherever possible. Because we believe in leaving a positive mark on the planet.",
    },
    {
      title: "Integrity & Transparency",
      desc: "Honesty is the backbone of our business. We communicate openly, deliver on our promises, and build trust with every interaction.",
    },
    {
      title: "Innovation & Adaptability",
      desc: "In a fast-moving world, we embrace innovation and adapt to new challenges, always finding fresh ways to bring your designs to life.",
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24">
      <div className="max-w-[1600px] mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* === LEFT COLUMN: Image === 
              Responsive Logic:
              - Mobile: aspect-video (Short & wide)
              - Desktop: aspect-[3/4] (Tall portrait) + sticky positioning
          */}
          <div className="relative w-full aspect-video lg:aspect-[3/4] rounded-3xl overflow-hidden bg-gray-100 shadow-sm lg:sticky lg:top-24">
            <Image
              src="/images/values/1.png" // Replace with your 'hands stacking' image
              alt="Team putting hands together"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
            />
          </div>

          {/* === RIGHT COLUMN: Content === */}
          <div className="space-y-12">
            
            {/* Header Area */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Our Values
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At OnePrint, our values guide every decision we make and every product we craft. 
                They define who we are, how we serve our customers, and how we shape the future of printing.
              </p>
            </div>

            {/* Values List */}
            <div className="space-y-10">
              {values.map((item, index) => (
                <div key={index} className="space-y-3">
                  {/* H3: Item Titles -> text-2xl */}
                  <h3 className="text-2xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                  {/* Body: Description -> text-lg */}
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}