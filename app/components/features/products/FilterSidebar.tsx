"use client";

import React from "react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FilterSidebar() {
  const [priceRange, setPriceRange] = React.useState([0, 899]);

  return (
    <div className="w-full space-y-8 pb-10"> {/* Increased space-y for breathing room */}
      
      {/* Price Range Section */}
      <div className="space-y-6">
        {/* H4 Title: text-xl */}
        <h3 className="text-xl font-bold text-gray-900">Price Range</h3>
        <Slider
          defaultValue={[0, 899]}
          max={1000}
          step={1}
          value={priceRange}
          onValueChange={setPriceRange}
          className="py-4"
        />
        <div className="flex items-center justify-between gap-4">
          <div className="px-4 py-2 border rounded-full text-base text-gray-600 w-full text-center">
            ${priceRange[0]}
          </div>
          <div className="px-4 py-2 border rounded-full text-base text-gray-600 w-full text-center">
            ${priceRange[1]}
          </div>
        </div>
      </div>

      <hr className="border-gray-100" />

      {/* Accordion Filters */}
      <Accordion type="multiple" defaultValue={["type", "availability", "color", "size"]} className="w-full">
        
        {/* Product Type */}
        <AccordionItem value="type" className="border-none">
          {/* H4 Title: text-xl */}
          <AccordionTrigger className="text-xl font-bold hover:no-underline py-4">
            Product Type
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pt-2">
            {[
              { id: "t-shirt", label: "T-Shirt", count: 1664 },
              { id: "hat", label: "Hat", count: 521 },
              { id: "mug", label: "Mug", count: 345 },
            ].map((item) => (
              <div key={item.id} className="flex items-center space-x-3">
                <Checkbox id={item.id} className="w-5 h-5" /> {/* Larger Checkbox */}
                {/* Body Text: text-base */}
                <label
                  htmlFor={item.id}
                  className="text-base text-gray-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {item.label} <span className="text-gray-400">({item.count})</span>
                </label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>

        {/* Availability */}
        <AccordionItem value="availability" className="border-none">
          <AccordionTrigger className="text-xl font-bold hover:no-underline py-4">
            Availability
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pt-2">
            <div className="flex items-center space-x-3">
              <Checkbox id="instock" className="w-5 h-5" />
              <label htmlFor="instock" className="text-base text-gray-600">
                In Stock <span className="text-gray-400">(955)</span>
              </label>
            </div>
            <div className="flex items-center space-x-3">
              <Checkbox id="outstock" className="w-5 h-5" />
              <label htmlFor="outstock" className="text-base text-gray-600">
                Out of Stock <span className="text-gray-400">(12)</span>
              </label>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Color Palette */}
        <AccordionItem value="color" className="border-none">
          <AccordionTrigger className="text-xl font-bold hover:no-underline py-4">
            Color
          </AccordionTrigger>
          <AccordionContent className="pt-2">
            <div className="flex flex-wrap gap-3">
              {[
                "bg-red-700", "bg-yellow-400", "bg-orange-500", "bg-blue-900",
                "bg-purple-700", "bg-green-800", "bg-pink-400", "bg-blue-400",
                "bg-amber-700", "bg-black", "bg-gray-100", "bg-orange-400"
              ].map((colorClass, idx) => (
                // Increased circle size to w-8 h-8
                <button
                  key={idx}
                  className={`w-8 h-8 rounded-full ${colorClass} ring-1 ring-gray-200 hover:ring-2 hover:ring-offset-1 hover:ring-gray-400 transition-all`}
                  aria-label="Select color"
                />
              ))}
              <button className="text-base text-[#EF5A2B] font-medium flex items-center mt-2">
                + Show More
              </button>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Size */}
        <AccordionItem value="size" className="border-none">
          <AccordionTrigger className="text-xl font-bold hover:no-underline py-4">
            Size
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pt-2">
            {[
              { id: "s", label: "S", count: 64 },
              { id: "m", label: "M", count: 45 },
              { id: "l", label: "L", count: 51 },
              { id: "xl", label: "XL", count: 39 },
              { id: "xxl", label: "XXL", count: 22 },
            ].map((item) => (
              <div key={item.id} className="flex items-center space-x-3">
                <Checkbox id={item.id} className="w-5 h-5" />
                <label htmlFor={item.id} className="text-base text-gray-600">
                  {item.label} <span className="text-gray-400">({item.count})</span>
                </label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}