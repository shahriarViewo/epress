'use client'

import React from 'react'
import { ChevronDown } from 'lucide-react'

export default function ShippingAddress() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Shipping Address</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Full Name */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-900">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input 
            type="text" 
            placeholder="Enter your full name" 
            className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:outline-none focus:border-[#F15A24] focus:ring-1 focus:ring-[#F15A24] text-sm transition-all placeholder:text-gray-400"
          />
        </div>

        {/* Phone Number */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-900">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input 
            type="tel" 
            placeholder="Enter your phone number" 
            className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:outline-none focus:border-[#F15A24] focus:ring-1 focus:ring-[#F15A24] text-sm transition-all placeholder:text-gray-400"
          />
        </div>

        {/* Email */}
        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-bold text-gray-900">
            Email <span className="text-red-500">*</span>
          </label>
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:outline-none focus:border-[#F15A24] focus:ring-1 focus:ring-[#F15A24] text-sm transition-all placeholder:text-gray-400"
          />
        </div>

        {/* Address */}
        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-bold text-gray-900">
            Address <span className="text-red-500">*</span>
          </label>
          <input 
            type="text" 
            placeholder="Enter your address" 
            className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:outline-none focus:border-[#F15A24] focus:ring-1 focus:ring-[#F15A24] text-sm transition-all placeholder:text-gray-400"
          />
        </div>

        {/* City */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-900">
            City <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select 
              className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:outline-none focus:border-[#F15A24] focus:ring-1 focus:ring-[#F15A24] text-sm transition-all appearance-none text-gray-500 bg-white cursor-pointer"
              defaultValue=""
            >
              <option value="" disabled>Select City</option>
              <option value="ny">New York</option>
              <option value="la">Los Angeles</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
          </div>
        </div>

        {/* State */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-900">
            State <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select 
              className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:outline-none focus:border-[#F15A24] focus:ring-1 focus:ring-[#F15A24] text-sm transition-all appearance-none text-gray-500 bg-white cursor-pointer"
              defaultValue=""
            >
              <option value="" disabled>Select State</option>
              <option value="ny">NY</option>
              <option value="ca">CA</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
          </div>
        </div>

        {/* Zipcode */}
        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-bold text-gray-900">
            Zipcode <span className="text-red-500">*</span>
          </label>
          <input 
            type="text" 
            placeholder="Zipcode" 
            className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:outline-none focus:border-[#F15A24] focus:ring-1 focus:ring-[#F15A24] text-sm transition-all placeholder:text-gray-400"
          />
        </div>

      </div>
    </div>
  )
}