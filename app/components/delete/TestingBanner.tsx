'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TestingBanner() {
  
  // FIX: Added 'as any' here. This forces TypeScript to accept the object 
  // regardless of strict type checks.
  const floatAnimation = {
    y: [0, -20, 0], 
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  } as any;

  return (
    <section className="relative w-full min-h-screen bg-[#F0FBFF] overflow-hidden flex items-center justify-center font-sans">
      
      {/* --- Floating Decorations --- */}
      
      {/* Top Left Sphere */}
      <motion.div 
        animate={floatAnimation}
        className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full blur-[1px] opacity-60" 
      />
      
      {/* Middle Left Triangle */}
      <motion.div 
        animate={{
          y: [0, -15, 0],
          rotate: [-15, -10, -15]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-[5%] w-0 h-0 
        border-l-[15px] border-l-transparent
        border-r-[15px] border-r-transparent
        border-b-[25px] border-b-blue-500
        opacity-80" 
      />

      {/* Center Left Sphere (Blurry) */}
      <motion.div 
        animate={floatAnimation}
        // You don't need transition here because it's already inside 'floatAnimation' above
        // But if you want to override it, you can keep it.
        transition={{ delay: 1, duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-[15%] w-8 h-8 bg-blue-400 rounded-full blur-sm opacity-50" 
      />

      {/* Right Side Triangle */}
      <motion.div 
        animate={{ y: [0, -25, 0], rotate: [15, 20, 15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[40%] w-0 h-0 
        border-l-[20px] border-l-transparent
        border-r-[20px] border-r-transparent
        border-b-[35px] border-b-cyan-400
        z-0" 
      />

      {/* --- Main Content --- */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
        
        {/* LEFT COLUMN: Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
            The leader in <br />
            quality <span className="text-gray-900">custom T-Shirts</span>
          </h1>
          
          <p className=" text-lg md:text-xl max-w-lg leading-relaxed">
            Turn your ideas into premium products that leave a lasting impression
          </p>

          <div className="pt-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-[#623CEA] to-[#8E2DE2] text-white rounded-full font-semibold shadow-lg shadow-purple-200 flex items-center gap-3"
            >
              Shop Now
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Image */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center items-center h-full min-h-[500px]"
        >
          {/* Gradient Circle */}
          <div className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-gradient-to-b from-[#28A5F5] to-[#1E60F0] rounded-full opacity-90 translate-x-10 md:translate-x-0" />
          
          {/* Image */}
          <div className="relative z-10 w-full max-w-[500px]">
            <Image 
              src="/images/test/1.png" 
              alt="Couple wearing custom t-shirts" 
              width={600} 
              height={800}
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>

          {/* Floating Bubble Right */}
          <motion.div 
             animate={{ y: [0, -30, 0] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             className="absolute bottom-20 right-0 w-12 h-12 bg-blue-500 rounded-full blur-md opacity-60" 
          />
        </motion.div>

      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        <div className="w-4 h-4 rounded-full border-2 border-purple-600 flex items-center justify-center p-0.5">
            <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
        </div>
        <div className="w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400 transition-colors cursor-pointer"></div>
        <div className="w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400 transition-colors cursor-pointer"></div>
      </div>

    </section>
  );
}