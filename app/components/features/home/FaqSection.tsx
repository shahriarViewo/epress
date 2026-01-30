"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { colors } from "../../../config/colors";
import { typography } from "../../../config/typography";

const FaqSection = () => {
  // State to track which accordion item is open.
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const faqData = [
    {
      question: "Will the prints fade or crack over time?",
      answer:
        "No. We use vibrant, long-lasting prints with superior quality designed so they won't fade, crack, or peel.",
    },
    {
      question: "Is there a minimum order quantity?",
      answer:
        "There are no minimum orders. We are perfect for both single personal projects and bulk business orders.",
    },
    {
      question: "How long does production and shipping take?",
      answer:
        "We offer fast turnaround times and quick delivery without compromising on the quality of your product.",
    },
    {
      question: "Are your printing methods eco-friendly?",
      answer:
        "Yes. We prioritize eco-friendly printing, using safe, sustainable, and environmentally friendly practices.",
    },
    {
      question: "Can you help me if I don't have a design ready?",
      answer:
        "Absolutely. We offer custom design support, and our design team is here to assist you.",
    },
  ];

  return (
    <div className={`w-full ${typography.fontFamily} py-4 md:py-20 px-4 lg:px-16`}>
      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Text and Image */}
          <div>
            {/* FAQ Text */}
            <div className="w-full mb-8 lg:mb-12">
              <h2 className={`${typography.sectionTitle} ${colors.textStrong} mb-4`}>
                Discover More in Our Faq
              </h2>
              <p className={`${typography.body} ${colors.textMuted} leading-relaxed`}>
                Find quick answers to the most common questions about our
                T-shirts, caps, mugs, shipping, returns, and more — everything
                you need for a smooth shopping experience.
              </p>
            </div>

            {/* Image Banner */}
            {/* UPDATED: Changed h-[500px] to h-[350px] lg:h-[500px] to fix mobile height */}
            <div className="relative w-full h-[350px] lg:h-[500px] rounded-3xl overflow-hidden shadow-lg group">
              <img
                src="/images/landingPage/common/Humen.png"
                alt="Support representative"
                className="absolute -top-[8%] left-0 w-full h-auto object-top object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Black Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90">
                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                  <h3 className={`${typography.h3} leading-tight mb-6`} style={{ color: colors.textPrimary }}>
                    We'd love to <br />
                    hear from you <br />
                    let's talk!
                  </h3>
                  <button
                    type="button"
                    className="relative flex items-center justify-center overflow-hidden text-white hover:text-white font-semibold py-2.5 px-6 rounded-full gap-2 transition-all duration-200 before:absolute before:h-0 before:w-0 before:rounded-full before:bg-white before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56 hover:border focus:outline-none focus:ring-2 focus:ring-offset-2"
                    style={{ backgroundColor: colors.button }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = colors.buttonHover;
                      e.currentTarget.style.color = colors.primary;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = colors.button;
                      e.currentTarget.style.color = 'white';
                    }}
                  >
                    <span className="relative z-10">
                      Contact Us
                    </span>
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
                    <span className={`${typography.body} ${colors.textStrong} font-medium`}>
                      {item.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5" style={{ color: colors.textMuted }} />
                    ) : (
                      <ChevronDown className="w-5 h-5" style={{ color: colors.textMuted }} />
                    )}
                  </button>

                  {/* Content with simple animation logic */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                      }`}
                  >
                    <div className={`p-5 pt-0 ${typography.body} leading-relaxed`} style={{ color: `${colors.textStrong} !important` }}>
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