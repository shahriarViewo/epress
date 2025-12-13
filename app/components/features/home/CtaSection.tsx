import React from 'react';

const CtaSection = () => {
  return (
    // The section has a solid red background matching the image.
    // It uses flexbox to center all content horizontally and vertically.
    <section className="bg-[#EF4447] py-20 px-4">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Main headline, large and bold, in white. */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to Create a Buzz?
        </h2>
        
        {/* Subheadline paragraph, white text, with a max-width for readability. */}
        <p className="text-white text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          Join thousands of creators turning ideas into profits with PrintPress. Sign up now for exclusive deals and daily inspiration!
        </p>
        
        {/* Call-to-action button. White background with red text, pill-shaped. */}
        <button className="bg-white text-[#161617] font-bold text-lg px-10 py-4 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300">
          First Order 15% Off
        </button>
        
      </div>
    </section>
  );
};

export default CtaSection;