import React from 'react';

interface HelpBannerProps {
  title: string;
  subtitle: string;
  images: {
    leftMain: string;
    leftCard: string;
    rightMain: string;
    rightCard: string;
  };
}

const HelpBanner: React.FC<HelpBannerProps> = ({ title, subtitle, images }) => {
  return (
    // 1. OUTER CONTAINER: Matches your NavBar exactly
    // NavBar uses: max-w-[1600px] mx-auto md:px-16 px-4
    <section className="w-full max-w-[1600px] mx-auto px-4 md:px-16 py-8">
      
      {/* 2. BANNER CARD */}
      {/* Removed 'max-w-7xl' so it fills the 1600px width defined above */}
      <div className="relative w-full rounded-[16px] overflow-hidden bg-[#451812] py-12 text-white font-sans shadow-2xl">
        
        {/* Background Gradient */}
        <div className="absolute inset-0 z-0 h-full w-full bg-[radial-gradient(circle_at_bottom,_#FC5C269C_0%,_#5e231b_45%,_#451812_100%)]"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between min-h-[350px] px-6 md:px-12">

          {/* LEFT CLUSTER */}
          <div className="hidden md:block relative w-[220px] h-[260px] flex-shrink-0">
            <div className="absolute top-0 right-0 w-44 h-56 rounded-xl overflow-hidden shadow-2xl z-10 border border-white/5">
              <img 
                src={images.leftMain} 
                alt="Left Main Visual" 
                className="w-full h-full object-cover" 
              />
            </div>

            <div className="absolute bottom-0 left-0 w-32 h-36 bg-[#FFF5EB] rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-20 flex items-center justify-center transform hover:scale-105 transition-transform duration-300 overflow-hidden">
              <img 
                src={images.leftCard} 
                alt="Left Product Card" 
                className="w-full h-full object-cover mix-blend-multiply" 
              />
            </div>
          </div>

          {/* CENTER TEXT */}
          <div className="max-w-xl text-center z-30 mx-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight drop-shadow-lg">
              {title}
            </h2>
            <p className="text-orange-100/90 text-sm md:text-base leading-relaxed whitespace-pre-line">
              {subtitle}
            </p>
          </div>

          {/* RIGHT CLUSTER */}
          <div className="hidden md:block relative w-[220px] h-[260px] flex-shrink-0">
            <div className="absolute top-0 left-0 w-44 h-56 rounded-xl overflow-hidden shadow-2xl z-10 border border-white/5">
              <img 
                src={images.rightMain} 
                alt="Right Main Visual" 
                className="w-full h-full object-cover" 
              />
            </div>

            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-20 flex items-center justify-center transform hover:scale-105 transition-transform duration-300 overflow-hidden">
              <img 
                src={images.rightCard} 
                alt="Right Product Card" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

          {/* MOBILE GRID FALLBACK */}
          <div className="md:hidden grid grid-cols-2 gap-3 mt-6 w-full max-w-sm mx-auto">
             <div className="rounded-lg overflow-hidden h-40 shadow-lg">
               <img 
                 src={images.leftMain} 
                 className="w-full h-full object-cover" 
                 alt="Left Visual Mobile"
               />
             </div>
             <div className="rounded-lg overflow-hidden h-40 shadow-lg">
               <img 
                 src={images.rightMain} 
                 className="w-full h-full object-cover" 
                 alt="Right Visual Mobile"
               />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HelpBanner;