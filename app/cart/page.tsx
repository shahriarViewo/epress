'use client'

import React, { useState } from 'react'
import { Trash2, Minus, Plus } from 'lucide-react'
import Link from 'next/link'
import Breadcrumbs from '@/app/components/ui/layout/Breadcrumbs'
import RelatedProducts from '@/app/components/features/product/RelatedProducts'

// --- Mock Data ---
const INITIAL_CART = [
  {
    id: 1,
    name: "Press Power Snapback Cap",
    color: "Dark Red",
    size: "22.05in",
    price: 9.99,
    originalPrice: 16.99,
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

export default function CartPage() {
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

  const subTotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0)
  const discount = 0
  const total = subTotal - discount

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 font-sans text-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <Breadcrumbs />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-8">
          Your Cart ({totalItems} items)
        </h1>

        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-start">
          
          {/* --- LEFT COLUMN: Cart Items --- */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              
              {/* Desktop Header */}
              <div className="hidden sm:grid grid-cols-12 gap-4 p-6 border-b border-gray-100 text-sm font-semibold text-gray-900">
                <div className="col-span-6">Product Name</div>
                <div className="col-span-2 text-center">Unit Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right">Total Price</div>
              </div>

              {/* Items List */}
              <div className="divide-y divide-gray-100">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-6 flex flex-col sm:grid sm:grid-cols-12 gap-6 sm:items-center">
                    
                    {/* Product Info */}
                    <div className="sm:col-span-6 flex gap-4">
                      <div className="w-20 h-20 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden border border-gray-200">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply" />
                      </div>
                      <div className="flex flex-col justify-between py-1">
                        <div>
                          <h3 className="font-semibold text-gray-900 text-base">{item.name}</h3>
                          <p className="text-sm text-gray-500 mt-1">Color: {item.color}</p>
                          {item.size && <p className="text-sm text-gray-500">Size: {item.size}</p>}
                        </div>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-[#F15A24] hover:text-red-700 text-sm flex items-center gap-1 mt-2 sm:mt-0 w-fit transition-colors"
                        >
                          <Trash2 size={16} />
                          <span className="sm:hidden text-xs">Remove</span>
                        </button>
                      </div>
                    </div>

                    {/* Unit Price */}
                    <div className="sm:col-span-2 flex sm:flex-col items-center justify-between sm:justify-center">
                      <span className="sm:hidden text-sm text-gray-500 font-medium">Unit Price:</span>
                      <div className="text-center">
                        <div className="font-semibold text-gray-900">${item.price.toFixed(2)}</div>
                        <div className="text-xs text-gray-400 line-through">${item.originalPrice.toFixed(2)}</div>
                      </div>
                    </div>

                    {/* Quantity */}
                    <div className="sm:col-span-2 flex sm:justify-center justify-between items-center">
                       <span className="sm:hidden text-sm text-gray-500 font-medium">Quantity:</span>
                       <div className="flex items-center border border-gray-200 rounded-full h-9">
                        <button onClick={() => updateQuantity(item.id, -1)} className="w-8 h-full flex items-center justify-center text-gray-500 hover:bg-gray-50 rounded-l-full transition-colors"><Minus size={14} /></button>
                        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="w-8 h-full flex items-center justify-center text-gray-500 hover:bg-gray-50 rounded-r-full transition-colors"><Plus size={14} /></button>
                      </div>
                    </div>

                    {/* Total Price */}
                    <div className="sm:col-span-2 flex sm:flex-col items-center justify-between sm:justify-end sm:items-end">
                       <span className="sm:hidden text-sm text-gray-500 font-medium">Total:</span>
                       <span className="font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>

                  </div>
                ))}

                {cartItems.length === 0 && (
                  <div className="p-12 text-center text-gray-500">
                    Your cart is empty.
                  </div>
                )}
              </div>
            </div>

            {/* --- CONTINUE SHOPPING BUTTON --- */}
            {/* Outline -> Solid Orange Fill */}
            <div className="mt-6">
              <Link href="/products" className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden rounded-full border border-[#F15A24] text-[#F15A24] font-bold text-sm transition-all duration-300 hover:text-white hover:shadow-lg hover:shadow-orange-200">
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-0 w-0 rounded-full bg-[#F15A24] transition-all duration-500 ease-out group-hover:h-56 group-hover:w-56"></span>
                <span className="relative z-10">Continue Shopping</span>
              </Link>
            </div>
          </div>

          {/* --- RIGHT COLUMN: Order Summary --- */}
          <div className="lg:col-span-4 mt-8 lg:mt-0">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 sticky top-6">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Order Summary</h2>

              {/* Coupon Code */}
              <div className="mb-8">
                <div className="relative flex items-center">
                  <input 
                    type="text" 
                    placeholder="Enter coupon code" 
                    className="w-full h-11 pl-4 pr-36 rounded-full border border-gray-200 focus:outline-none focus:border-[#F15A24] focus:ring-1 focus:ring-[#F15A24] text-sm"
                  />
                  {/* --- APPLY COUPON BUTTON --- */}
                  {/* Solid Orange -> White Fill (Text turns Orange) */}
                  <button className="group absolute right-1 top-1 bottom-1 overflow-hidden bg-[#F15A24] text-white px-5 rounded-full text-xs font-bold transition-all duration-300 hover:text-[#F15A24] hover:shadow-md border border-transparent hover:border-[#F15A24]">
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-0 w-0 rounded-full bg-white transition-all duration-500 ease-out group-hover:h-32 group-hover:w-32"></span>
                    <span className="relative z-10">Apply Coupon</span>
                  </button>
                </div>
              </div>

              {/* Summary Rows */}
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
                  <span className="font-medium text-gray-900">-${discount.toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t border-gray-100 my-6"></div>

              <div className="flex justify-between items-center mb-8">
                <span className="font-bold text-gray-900 text-base">Total Price</span>
                <span className="font-bold text-gray-900 text-xl">${total.toFixed(2)}</span>
              </div>

              {/* --- PROCEED TO CHECKOUT BUTTON --- */}
              {/* Solid Orange -> White Fill (Text turns Orange) */}
              <button className="group relative w-full overflow-hidden bg-[#F15A24] text-white h-12 rounded-full font-bold shadow-lg shadow-orange-100 transition-all duration-300 hover:text-[#F15A24] hover:shadow-orange-200 hover:border-2 hover:border-[#F15A24]">
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-0 w-0 rounded-full bg-white transition-all duration-500 ease-out group-hover:h-80 group-hover:w-90"></span>
                <span className="relative z-10">Proceed to Checkout</span>
              </button>

            </div>
          </div>
        </div>
      </div>
      
      {/* Related Products Section */}
      <div className="mt-16">
        <RelatedProducts />
      </div>
    </div>
  )
}