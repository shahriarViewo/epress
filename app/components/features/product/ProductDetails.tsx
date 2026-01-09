'use client'

import React, { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Minus, Plus, ShoppingBag } from 'lucide-react'
import ServiceInfo from './ServiceInfo' // 1. Restore this import

interface ProductProps {
  product: {
    id: string
    title: string
    price: number
    originalPrice: number
    rating: number
    stock: number
    description: string
    sizes: string[]
    colors: { name: string; class: string }[]
    images: string[]
  }
}

export default function ProductDetails({ product }: ProductProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name)
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [quantity, setQuantity] = useState(1)

  const handlePrevImage = () => setSelectedImage((prev) => (prev === 0 ? product.images.length - 1 : prev - 1))
  const handleNextImage = () => setSelectedImage((prev) => (prev === product.images.length - 1 ? 0 : prev + 1))

  return (
    <div className="bg-white font-sans text-gray-900 pb-20 lg:pb-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-16">
        
        {/* --- LEFT: Image Gallery --- */}
        <div className="flex flex-col-reverse lg:flex-row gap-4 h-fit">
          <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible lg:w-24 flex-shrink-0 scrollbar-hide px-1">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`relative w-16 h-16 lg:w-20 lg:h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${selectedImage === idx ? 'border-gray-900' : 'border-transparent hover:border-gray-300'}`}
              >
                <img src={img} alt={`View ${idx}`} className="w-full h-full object-cover bg-gray-100" />
              </button>
            ))}
          </div>

          <div className="relative flex-1 bg-gray-50 rounded-2xl overflow-hidden aspect-square lg:aspect-auto lg:h-[600px] group">
            <img src={product.images[selectedImage]} alt="Main" className="w-full h-full object-contain mix-blend-multiply p-8"/>
            <button onClick={handlePrevImage} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100"><ChevronLeft size={20} /></button>
            <button onClick={handleNextImage} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100"><ChevronRight size={20} /></button>
          </div>
        </div>

        {/* --- RIGHT: Details --- */}
        <div className="flex flex-col gap-6 pt-2">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">{product.title}</h1>
            <div className="flex items-center gap-2">
              <div className="flex text-orange-500">
                {[...Array(5)].map((_, i) => (<Star key={i} size={16} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />))}
              </div>
              <span className="text-sm text-gray-500">({product.rating})</span>
            </div>
          </div>

          <div className="space-y-3 border-b border-gray-100 pb-6">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-gray-900">${product.price}</span>
              <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
            </div>
            <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
              <div className="w-2.5 h-2.5 rounded-full bg-green-600 animate-pulse"></div>
              Available in stock ({product.stock})
            </div>
          </div>

          <div>
            <span className="font-semibold block mb-3">Color: <span className="font-normal text-gray-600">{selectedColor}</span></span>
            <div className="flex flex-wrap gap-3">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`w-8 h-8 rounded-full ring-2 ring-offset-2 transition-all ${selectedColor === color.name ? 'ring-gray-900 scale-110' : 'ring-transparent hover:ring-gray-300'} ${color.class}`}
                />
              ))}
            </div>
          </div>

          <div>
            <span className="font-semibold block mb-3">Size: <span className="font-normal text-gray-600">{selectedSize}</span></span>
            <div className="flex flex-wrap gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${selectedSize === size ? 'bg-black text-white border-black shadow-lg' : 'bg-white text-gray-700 border-gray-200 hover:border-gray-900'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4">
             <div className="flex items-center border border-gray-200 rounded-full w-fit mb-4">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="w-12 h-10 flex items-center justify-center hover:bg-gray-50 rounded-l-full text-gray-600"><Minus size={16} /></button>
                <span className="w-8 text-center font-medium">{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)} className="w-12 h-10 flex items-center justify-center hover:bg-gray-50 rounded-r-full text-gray-600"><Plus size={16} /></button>
              </div>
          </div>

          {/* --- STICKY MOBILE ACTION BAR --- */}
          <div className="fixed bottom-0 left-0 right-0 p-4 lg:static lg:bg-transparent lg:border-none lg:p-0 z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] lg:shadow-none">
            <div className="grid grid-cols-2 gap-3 max-w-7xl mx-auto">
              
              {/* Button: ADD TO CART */}
              {/* Circle: Black fill. Text: Turns White. Size: 500px */}
              <button className="relative flex-1 overflow-hidden bg-white border-2 border-gray-900 text-gray-900 h-12 rounded-full font-bold transition-all duration-300 hover:text-white before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:h-0 before:w-0 before:rounded-full before:bg-gray-900 before:duration-500 before:ease-out hover:before:h-[500px] hover:before:w-[500px]">
                <span className="relative z-10 flex items-center justify-center gap-2">
                    <ShoppingBag size={18} /> 
                    <span className="hidden sm:inline">Add To Cart</span>
                    <span className="sm:hidden">Add</span>
                </span>
              </button>

              {/* Button: BUY NOW */}
              {/* Circle: White fill. Text: Turns Orange. Size: 500px */}
              <button className="relative flex-1 overflow-hidden bg-[#F15A24] text-white h-12 rounded-full font-bold shadow-lg shadow-orange-200 transition-all duration-300 hover:text-[#F15A24] hover:shadow-orange-600 hover:border-2 hover:border-[#F15A24] before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:h-0 before:w-0 before:rounded-full before:bg-white before:duration-500 before:ease-out hover:before:h-[500px] hover:before:w-[500px]">
                <span className="relative z-10">Buy Now</span>
              </button>
              
            </div>
          </div>

        </div>
      </div>
      
      {/* Spacer div for mobile so sticky bar doesn't overlap content */}
      <div className="h-24 lg:hidden" />
    </div>
  )
}