'use client'

import React, { useState } from 'react'
import { Trash2, Minus, Plus } from 'lucide-react'
import PaymentMethod from '../components/features/checkout/PaymentMethod'
import ShippingAddress from '../components/features/checkout/ShippingAddress'
import Breadcrumbs from '../components/ui/layout/Breadcrumbs'
// --- Mock Data (Same as Cart) ---
const INITIAL_CART = [
  {
    id: 1,
    name: "Press Power Snapback Cap",
    color: "Dark Red",
    size: "22.05in",
    price: 9.99,
    originalPrice: 18.99, // Updated mock price from screenshot
    quantity: 1,
    image: "/images/cart/cart selected images/1.png"
  },
  {
    id: 2,
    name: "Pure Press Tee",
    color: "Blue",
    size: "22.05in",
    price: 9.99,
    originalPrice: 16.99,
    quantity: 1,
    image: "/images/cart/cart selected images/2.png"
  },
  {
    id: 3,
    name: "Platinum pour Cup",
    color: "Red",
    size: null,
    price: 9.99,
    originalPrice: 16.99,
    quantity: 1,
    image: "/images/cart/cart selected images/3.png"
  }
]

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState(INITIAL_CART)

  const updateQuantity = (id: number, change: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + change)
        return { ...item, quantity: newQty }
      }
      return item
    }))
  }

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  // --- Calculations ---
  const subTotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0)
  const discount = 0
  const shippingCost = 100.00 // Fixed shipping cost from screenshot
  const total = subTotal - discount + shippingCost

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 font-sans text-gray-900">
      <div className="max-w-[1400px] mx-auto">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <Breadcrumbs />
        </div>
        
        {/* Main Grid: Left (List + Address) | Right (Payment + Summary) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* --- LEFT COLUMN (Cart Items & Address) --- */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* 1. Cart Items List (Reused UI) */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
               {/* Header */}
               <div className="hidden sm:grid grid-cols-12 gap-4 p-6 border-b border-gray-100 text-sm font-semibold text-gray-900">
                <div className="col-span-6">Product Name</div>
                <div className="col-span-2 text-center">Unit Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right">Total Price</div>
              </div>

              {/* Items */}
              <div className="divide-y divide-gray-100">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-6 flex flex-col sm:grid sm:grid-cols-12 gap-6 sm:items-center">
                    
                    {/* Info */}
                    <div className="sm:col-span-6 flex gap-4">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden border border-gray-200">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply" />
                      </div>
                      <div className="flex flex-col justify-between py-1">
                        <div>
                          <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{item.name}</h3>
                          <p className="text-xs sm:text-sm text-gray-500 mt-1">Color: {item.color}</p>
                          {item.size && <p className="text-xs sm:text-sm text-gray-500">Size: {item.size}</p>}
                        </div>
                        <button onClick={() => removeItem(item.id)} className="text-[#F15A24] hover:text-red-700 text-xs sm:text-sm flex items-center gap-1 mt-2 w-fit">
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>

                    {/* Unit Price */}
                    <div className="sm:col-span-2 flex sm:flex-col items-center justify-between sm:justify-center">
                      <span className="sm:hidden text-sm text-gray-500 font-medium">Unit Price:</span>
                      <div className="text-center">
                        <div className="font-semibold text-gray-900 text-sm sm:text-base">${item.price.toFixed(2)}</div>
                        <div className="text-xs text-gray-400 line-through">${item.originalPrice.toFixed(2)}</div>
                      </div>
                    </div>

                    {/* Quantity */}
                    <div className="sm:col-span-2 flex sm:justify-center justify-between items-center">
                       <span className="sm:hidden text-sm text-gray-500 font-medium">Quantity:</span>
                       <div className="flex items-center border border-gray-200 rounded-full h-8 sm:h-9 bg-white">
                        <button onClick={() => updateQuantity(item.id, -1)} className="w-8 h-full flex items-center justify-center text-gray-500 hover:bg-gray-50 rounded-l-full"><Minus size={12} /></button>
                        <span className="w-6 sm:w-8 text-center text-xs sm:text-sm font-medium">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="w-8 h-full flex items-center justify-center text-gray-500 hover:bg-gray-50 rounded-r-full"><Plus size={12} /></button>
                      </div>
                    </div>

                    {/* Total */}
                    <div className="sm:col-span-2 flex sm:flex-col items-center justify-between sm:justify-end sm:items-end">
                       <span className="sm:hidden text-sm text-gray-500 font-medium">Total:</span>
                       <span className="font-bold text-gray-900 text-sm sm:text-base">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>

                  </div>
                ))}
              </div>
            </div>

            {/* 2. Shipping Address (New Component) */}
            <ShippingAddress />

          </div>


          {/* --- RIGHT COLUMN (Payment & Summary) --- */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* 3. Payment Method (New Component) */}
            <PaymentMethod />

            {/* 4. Order Summary */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 sticky top-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

              {/* Coupon */}
              <div className="mb-8">
                <div className="relative flex items-center">
                  <input 
                    type="text" 
                    placeholder="Enter coupon code" 
                    className="w-full h-11 pl-4 pr-32 rounded-full border border-gray-200 focus:outline-none focus:border-[#F15A24] focus:ring-1 focus:ring-[#F15A24] text-sm placeholder:text-gray-400"
                  />
                  {/* Apply Button (Small Hover) */}
                  <button className="group absolute right-1 top-1 bottom-1 overflow-hidden bg-[#F15A24] text-white px-4 rounded-full text-xs font-bold transition-all duration-300 hover:text-[#F15A24] border border-transparent hover:border-[#F15A24]">
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-0 w-0 rounded-full bg-white transition-all duration-500 ease-out group-hover:h-32 group-hover:w-32"></span>
                    <span className="relative z-10">Apply Coupon</span>
                  </button>
                </div>
              </div>

              {/* Rows */}
              <div className="space-y-4 text-sm text-gray-600 mb-6">
                <div className="flex justify-between">
                  <span>Total Items</span>
                  <span className="font-medium text-gray-900">{totalItems.toString().padStart(2, '0')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Sub Total</span>
                  <span className="font-medium text-gray-900">${subTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Promo Discount</span>
                  <span className="font-medium text-gray-900">${discount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping Cost</span>
                  <span className="font-medium text-gray-900">${shippingCost.toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t border-gray-100 my-6"></div>

              <div className="flex justify-between items-center mb-8">
                <span className="font-bold text-gray-900 text-base">Total Price</span>
                <span className="font-bold text-gray-900 text-xl">${total.toFixed(2)}</span>
              </div>

              {/* CHECKOUT BUTTON (Main Hover Effect) */}
              <button className="group relative w-full overflow-hidden bg-[#F15A24] text-white h-12 rounded-full font-bold shadow-lg shadow-orange-100 transition-all duration-300 hover:text-[#F15A24] hover:shadow-orange-200 hover:border-2 hover:border-[#F15A24]">
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-0 w-0 rounded-full bg-white transition-all duration-500 ease-out group-hover:h-[600px] group-hover:w-[600px]"></span>
                <span className="relative z-10">Proceed to Checkout</span>
              </button>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}