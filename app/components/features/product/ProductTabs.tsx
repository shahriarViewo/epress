'use client'

import React, { useState } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState('review')

  const tabs = [
    { id: 'description', label: 'Product Description' },
    { id: 'specs', label: 'Specification' },
    { id: 'review', label: 'Review(12)' },
  ]

  const specifications = [
    { label: "Head Circumference", value: "Adjustable" },
    { label: "Fabric Type", value: "Canvas, Mesh" },
    { label: "Material", value: "100% Cotton" },
    { label: "Panel Style", value: "5-Panel Hat" },
    { label: "Style", value: "Fashion, Sporty, Casual, Party, Street Style" },
    { label: "Decoration", value: "Button, Embroidery" },
    { label: "Age Group", value: "Adults" },
    { label: "Gender", value: "Unisex" },
    { label: "Fabric Feature", value: "COMMON" },
    { label: "Printing Methods", value: "Other, None" },
    { label: "Place of Origin", value: "USA" },
    { label: "Brand Name", value: "OnePrint" },
  ]

  const reviews = [
    {
      name: "Ahmed R.",
      date: "24 Nov 2025",
      rating: 5,
      text: "This cap exceeded my expectations. The material feels premium and comfortable, and it fits perfectly with the adjustable strap. I've worn it daily for a week, and it still looks brand new. Highly recommended!"
    },
    {
      name: "Sarah M.",
      date: "12 Nov 2025",
      rating: 5,
      text: "Very comfortable and lightweight. I use it for walking and casual outings. Would have loved a slightly softer inner lining, but overall a great product."
    },
    {
      name: "John K.",
      date: "11 Nov 2025",
      rating: 5,
      text: "This cap exceeded my expectations. The material feels premium and comfortable, and it fits perfectly with the adjustable strap. I've worn it daily for a week, and it still looks brand new. Highly recommended!"
    },
    {
      name: "Faisal H.",
      date: "08 Nov 2025",
      rating: 5,
      text: "We ordered this cap for logo embroidery, and the quality was excellent. The fabric is smooth and sturdy, making it perfect for branding. Will order again."
    },
    {
      name: "Lina S.",
      date: "24 Oct 2025",
      rating: 5,
      text: "The cap is breathable and doesn't feel heavy even after hours of wear. The ventilation holes really help in warm weather. Great everyday cap!"
    },
    {
      name: "Daniel T.",
      date: "11 Oct 2025",
      rating: 5,
      text: "This is exactly what I was looking for—simple, comfortable, and durable. The adjustable strap makes it easy to fit, and the black color stays rich after washing."
    }
  ]

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 h-full">
      {/* --- Tab Header --- */}
      <div className="flex flex-wrap items-center gap-6 border-b border-gray-100 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-3 text-base sm:text-lg font-medium transition-all relative ${
              activeTab === tab.id
                ? 'text-[#F15A24]'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#F15A24] rounded-t-full" />
            )}
          </button>
        ))}
      </div>

      {/* --- Tab Content --- */}
      <div className="text-gray-600 leading-relaxed">
        
        {activeTab === 'description' && (
          <div className="animate-in fade-in duration-300 space-y-4">
            <p>Complete your look with this classic black baseball cap, designed to offer the perfect balance of style, comfort, and durability.</p>
            <p>Made from premium-quality fabric, the cap provides a soft and breathable feel while maintaining its shape throughout the day.</p>
            <p>The solid black color adds a refined and modern touch, making it easy to pair with any wardrobe.</p>
          </div>
        )}

        {activeTab === 'specs' && (
          <div className="animate-in fade-in duration-300">
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                 <div className="divide-y divide-gray-200">
                    {specifications.filter((_, i) => i % 2 === 0).map((spec, idx) => (
                      <div key={idx} className="grid grid-cols-2 p-4">
                        <span className="font-semibold text-gray-900">{spec.label}</span>
                        <span className="text-gray-700">{spec.value}</span>
                      </div>
                    ))}
                 </div>
                 <div className="divide-y divide-gray-200">
                    {specifications.filter((_, i) => i % 2 !== 0).map((spec, idx) => (
                      <div key={idx} className="grid grid-cols-2 p-4">
                         <span className="font-semibold text-gray-900">{spec.label}</span>
                         <span className="text-gray-700">{spec.value}</span>
                      </div>
                    ))}
                 </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'review' && (
          <div className="animate-in fade-in duration-300">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Reviews (12)</h3>
                <p className="text-gray-500 text-sm mt-1">Get specific details about this product from customers who own it.</p>
              </div>
              
              {/* --- WRITE REVIEW BUTTON --- */}
              {/* Updated: hover:before:h-[400px] w-[400px] to ensure corners are covered */}
              <button className="relative overflow-hidden px-6 py-2.5 rounded-full border border-[#F15A24] text-[#F15A24] font-semibold transition-all duration-300 hover:text-white hover:shadow-lg hover:shadow-orange-200 before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:h-0 before:w-0 before:rounded-full before:bg-[#F15A24] before:duration-500 before:ease-out hover:before:h-[400px] hover:before:w-[400px]">
                <span className="relative z-10">Write a Review</span>
              </button>
            </div>

            <div className="flex items-center gap-3 mb-8 pb-8 border-b border-gray-100">
              <div className="flex text-[#F15A24]">
                {[...Array(5)].map((_, i) => (<Star key={i} size={20} fill="currentColor" />))}
              </div>
              <span className="text-lg font-bold text-gray-900">5 out of 5</span>
            </div>

            <div className="space-y-8">
              {reviews.map((review, idx) => (
                <div key={idx} className="space-y-3 pb-8 border-b border-gray-100 last:border-0 last:pb-0">
                  <div className="flex text-[#F15A24]">
                    {[...Array(5)].map((_, i) => (<Star key={i} size={16} fill={i < review.rating ? "currentColor" : "none"} />))}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{review.text}</p>
                  <div className="text-sm text-gray-500">
                    Reviewed by <span className="font-semibold text-gray-900">{review.name}</span> on {review.date}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 mt-12 pt-4">
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 text-gray-600 transition-colors"><ChevronLeft size={18} /></button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F15A24] text-white font-medium shadow-md shadow-orange-200">1</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium transition-colors">2</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium transition-colors">3</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 text-gray-600 transition-colors"><ChevronRight size={18} /></button>
            </div>

          </div>
        )}

      </div>
    </div>
  )
}