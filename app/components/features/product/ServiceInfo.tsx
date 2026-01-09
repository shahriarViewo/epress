'use client'

import React from 'react'
import { CalendarDays, Truck, CreditCard, RefreshCcw, ShieldCheck } from 'lucide-react'

export default function ServiceInfo() {
  
  const services = [
    {
      icon: CalendarDays,
      title: "Estimated Delivery Date",
      desc: "Arrives between Thu, Dec 18 - Mon, Dec 22"
    },
    {
      icon: Truck,
      title: "Free Shipping",
      desc: "Buy product over $50 and get free shipping"
    },
    {
      icon: CreditCard,
      title: "Secure Payment",
      desc: "We confirm that payment system are totally secure"
    },
    {
      icon: RefreshCcw,
      title: "Easy Return Policy",
      desc: "Hassle-free exchanges and a friendly support team."
    },
    {
      icon: ShieldCheck,
      title: "Money-back protection",
      desc: "Claim a refund if your order doesn't ship, is missing, or arrives with product issues"
    }
  ]

  // Updated classes to match ProductTabs (bg-white, shadow-sm, p-6)
  // Removed 'mt-8' so it aligns with the top of the left column
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
      <div className="space-y-6">
        {services.map((item, idx) => (
          <div key={idx} className="flex gap-4 items-start">
            {/* Icon Box */}
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-[#F15A24]">
              <item.icon size={20} strokeWidth={1.5} />
            </div>
            
            {/* Text Content */}
            <div className="pt-0.5">
              <h4 className="text-base font-semibold text-gray-900 leading-none mb-1.5">
                {item.title}
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}