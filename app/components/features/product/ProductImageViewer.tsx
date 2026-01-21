'use client'

import React, { useState, useRef, MouseEvent } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ProductImageViewerProps {
  images: string[]
}

export default function ProductImageViewer({ images }: ProductImageViewerProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  
  // Zoom State
  const [showZoom, setShowZoom] = useState(false)
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 })
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const imgContainerRef = useRef<HTMLDivElement>(null)

  const handlePrevImage = () => setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  const handleNextImage = () => setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!imgContainerRef.current) return
    
    const { left, top, width, height } = imgContainerRef.current.getBoundingClientRect()
    
    const x = e.pageX - left - window.scrollX
    const y = e.pageY - top - window.scrollY

    let xPercent = (x / width) * 100
    let yPercent = (y / height) * 100

    // Clamp values (0-100%)
    xPercent = Math.max(0, Math.min(100, xPercent))
    yPercent = Math.max(0, Math.min(100, yPercent))

    setZoomPosition({ x: xPercent, y: yPercent })
    setCursorPosition({ x, y })
  }

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4 h-fit relative z-20">
      {/* --- Thumbnails Strip --- */}
      <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible lg:w-24 flex-shrink-0 scrollbar-hide px-1">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedImage(idx)}
            className={`relative w-16 h-16 lg:w-20 lg:h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
              selectedImage === idx ? 'border-gray-900' : 'border-transparent hover:border-gray-300'
            }`}
          >
            <img src={img} alt={`View ${idx}`} className="w-full h-full object-cover bg-gray-100" />
          </button>
        ))}
      </div>

      {/* --- Main Image Area --- */}
      <div 
        className="relative flex-1 bg-gray-50 rounded-2xl aspect-square lg:aspect-auto lg:h-[600px] group cursor-crosshair"
        ref={imgContainerRef}
        onMouseEnter={() => setShowZoom(true)}
        onMouseLeave={() => setShowZoom(false)}
        onMouseMove={handleMouseMove}
      >
        {/* Inner wrapper for image rounding */}
        <div className="w-full h-full overflow-hidden rounded-2xl relative">
          <img 
            src={images[selectedImage]} 
            alt="Product Main" 
            className="w-full h-full object-contain mix-blend-multiply p-8"
          />
          
          {/* The "Lens" (Visual guide on hover) */}
          {showZoom && (
            <div 
              className="absolute pointer-events-none border border-gray-400 bg-white/20 hidden lg:block"
              style={{
                left: cursorPosition.x - 75,
                top: cursorPosition.y - 75,
                width: '150px',
                height: '150px',
              }}
            />
          )}
        </div>

        {/* Mobile Navigation Arrows */}
        <button onClick={handlePrevImage} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 lg:hidden z-10">
            <ChevronLeft size={20} />
        </button>
        <button onClick={handleNextImage} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 lg:hidden z-10">
            <ChevronRight size={20} />
        </button>

        {/* --- THE FLYOUT ZOOM WINDOW --- */}
        {showZoom && (
          <div 
            className="absolute z-50 overflow-hidden rounded-xl border border-gray-200 shadow-2xl bg-white hidden lg:block"
            style={{
              // Position: Right side of the main image container
              left: '105%', 
              top: 0,
              width: '500px', // Fixed size for zoom window
              height: '600px', // Match main image height roughly
            }}
          >
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url(${images[selectedImage]})`,
                backgroundSize: '250%', // 2.5x Zoom factor
                backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                backgroundRepeat: 'no-repeat',
              }}
            />
          </div>
        )}
      </div>
    </div>
  )
}