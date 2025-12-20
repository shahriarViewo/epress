"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FaqSection = () => {
  // State to track which accordion item is open.
  // We initialize with 0 so the first item is open by default, matching the image.
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const faqData = [
    {
      question: "What materials do you use for your T-shirts?",
      answer:
        "Our T-shirts are crafted using soft, breathable, premium cotton blends to ensure comfort, durability, and long-lasting print quality.",
    },
    {
      question: "Are the caps adjustable?",
      answer:
        "Yes, our caps feature adjustable straps to ensure a perfect fit for all head sizes.",
    },
    {
      question: "Are the mug prints dishwasher safe?",
      answer:
        "Absolutely. Our mugs use high-quality sublimation printing that is both dishwasher and microwave safe.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Standard shipping typically takes 3-5 business days, while express options are available at checkout.",
    },
    {
      question: "Can I return or exchange my order?",
      answer:
        "We offer a 30-day return policy for unused items in their original packaging. Please visit our returns page for more info.",
    },
    {
      question: "Will I receive a tracking number for my order?",
      answer:
        "Yes, a tracking number will be sent to your email immediately after your order has been shipped.",
    },
  ];

  return (
    <div className="w-full font-sans py-4 md:py-20 px-4 lg:px-16">
      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Text and Image */}
          <div>
            {/* FAQ Text */}
            <div className="w-full mb-8 lg:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Discover More in Our Faq
              </h2>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                Find quick answers to the most common questions about our
                T-shirts, caps, mugs, shipping, returns, and more — everything
                you need for a smooth shopping experience.
              </p>
            </div>

            {/* Image Banner */}
            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-lg group">
              <img
                src="/images/landingPage/common/Humen.png"
                alt="Support representative"
                className="absolute -top-[8%] left-0 w-full h-auto object-top object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Black Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90">
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-white text-3xl md:text-4xl font-bold leading-tight mb-6">
                    We'd love to <br />
                    hear from you <br />
                    let's talk!
                  </h3>
                  <button className="bg-[#F35824] hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300 shadow-md">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: FAQ List */}
          <div className="flex flex-col gap-4">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`border rounded-xl transition-all duration-300 ${
                    isOpen
                      ? "bg-white border-gray-200 shadow-sm"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                  >
                    <span className="text-lg font-medium text-gray-900">
                      {item.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>

                  {/* Content with simple animation logic */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="p-5 pt-0 text-gray-500 leading-relaxed">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
