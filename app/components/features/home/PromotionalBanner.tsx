import React from "react";
import Image from "next/image";

const PromotionalBanner = () => {
  return (
    <div className="px-4 lg:px-16">
      <div className="relative w-full min-h-[500px] bg-[#6a2615] overflow-hidden flex items-center justify-center p-4 lg:p-16 rounded-2xl">
        {/* --- Floating Images Group (Left Side) --- */}
        {/* We use a fixed width container for the images to ensure they stay grouped relative to each other */}
        <div className="hidden lg:block absolute left-[5%] top-1/2 -translate-y-1/2 w-[350px] h-[400px]">
          {/* Cap Image (Back Layer) */}
          {/* Positioned top-right of this group */}
          <div className="absolute top-0 right-0 z-0 shadow-2xl rounded-2xl overflow-hidden w-48 h-48 bg-[#347358] rotate-3 transform transition-transform hover:scale-105 duration-300">
            <Image
              src="https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=300&h=300"
              alt="Cap"
              width={192}
              height={192}
              className="object-cover w-full h-full"
            />
          </div>

          {/* T-Shirt Image (Front Layer) */}
          {/* Positioned bottom-left, overlapping the Cap */}
          <div className="absolute bottom-0 left-0 z-10 shadow-2xl rounded-2xl overflow-hidden w-56 h-64 bg-blue-100 -rotate-2 transform transition-transform hover:scale-105 duration-300 border-4 border-[#6a2615]/20">
            <Image
              src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=400&h=500"
              alt="T-shirt"
              width={224}
              height={256}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* --- Main Content (Center) --- */}
        <div className="relative z-20 flex flex-col items-center text-center max-w-2xl mx-auto">
          <h1 className=" text-3xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-tight tracking-tight mb-6 drop-shadow-lg">
            Get UP TO 30% OFF on <br />
            T-Shirts, Caps & Mugs
          </h1>

          <p className="text-white/90 md:text-base mb-10 max-w-lg leading-relaxed font-medium">
            Premium T-shirts, stylish caps, and creative mugs — all at special
            weekly prices.
          </p>

          <button className="bg-white text-black font-bold text-base py-3.5 px-10 rounded-full hover:bg-gray-100 active:scale-95 transition-all duration-200 shadow-xl">
            Shop Now
          </button>
        </div>

        {/* --- Floating Images Group (Right Side) --- */}
        <div className="hidden lg:block absolute right-[5%] top-1/2 -translate-y-1/2 w-[350px] h-[400px]">
          {/* Model Image (Back Layer) */}
          {/* Positioned top-left of this group */}
          <div className="absolute top-0 left-0 z-0 shadow-2xl rounded-2xl overflow-hidden w-52 h-52 bg-gray-200 -rotate-3 transform transition-transform hover:scale-105 duration-300">
            <Image
              src="https://images.unsplash.com/photo-1569388330292-79cc1ec67270?auto=format&fit=crop&q=80&w=400&h=400"
              alt="Model"
              width={208}
              height={208}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Mug Image (Front Layer) */}
          {/* Positioned bottom-right, overlapping the Model */}
          <div className="absolute bottom-10 right-0 z-10 shadow-2xl rounded-2xl overflow-hidden w-44 h-44 bg-[#fceee9] rotate-2 transform transition-transform hover:scale-105 duration-300 border-4 border-[#6a2615]/20">
            <div className="w-full h-full flex items-center justify-center p-4">
              <Image
                src="https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&q=80&w=300&h=300"
                alt="Mug"
                width={176}
                height={176}
                className="object-contain w-full h-full mix-blend-multiply"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionalBanner;
