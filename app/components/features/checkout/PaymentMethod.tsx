'use client'

import React, { useState } from 'react'

export default function PaymentMethod() {
  const [selected, setSelected] = useState('cod')

  const methods = [
    { id: 'cod', label: 'Cash on Delivery' },
    { id: 'credit', label: 'Credit Card' },
    { id: 'google', label: 'Google Pay' },
    { id: 'apple', label: 'Apple Pay' },
  ]

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
      <h2 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">
        Payment Method
      </h2>
      
      <p className="text-sm font-semibold text-gray-900 mb-4">Select Payment Method</p>

      <div className="space-y-4">
        {methods.map((method) => (
          <label 
            key={method.id} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative flex items-center justify-center">
              <input 
                type="radio" 
                name="payment" 
                value={method.id}
                checked={selected === method.id}
                onChange={() => setSelected(method.id)}
                className="peer appearance-none w-5 h-5 rounded-full border-2 border-gray-300 checked:border-[#F15A24] checked:border-4 transition-all"
              />
            </div>
            <span className={`text-sm ${selected === method.id ? 'text-gray-900 font-medium' : 'text-gray-600 group-hover:text-gray-900'} transition-colors`}>
              {method.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  )
}