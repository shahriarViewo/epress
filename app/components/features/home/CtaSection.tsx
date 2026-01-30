"use client";

import React from 'react';
import { colors } from "../../../config/colors";
import { typography } from "../../../config/typography";

const CtaSection = () => {
  return (
    // The section has a solid red background matching the image.
    // It uses flexbox to center all content horizontally and vertically.
    <section className={`py-20 px-4`} style={{ backgroundColor: colors.ctaBackground }}>
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Main headline, large and bold, in white. */}
        <h2 className={`${typography.sectionTitle} ${colors.textPrimary} mb-6 leading-tight`}>
          Ready to Create a Buzz?
        </h2>
        
        {/* Subheadline paragraph, white text, with a max-width for readability. */}
        <p className={`${typography.bodyLarge} max-w-2xl mb-10 leading-relaxed`} style={{ color: colors.textPrimary }}>
          Join thousands of creators turning ideas into profits with OnePrint. Sign up now for exclusive deals and daily inspiration!
        </p>
        
        {/* Call-to-action button. White background with red text, pill-shaped. */}
        <button className={`${colors.textDefault} font-bold ${typography.buttonText} px-10 py-4 rounded-full shadow-md hover:scale-105 hover:shadow-lg transform transition-all duration-300 ease-in-out`}
                style={{ backgroundColor: colors.background }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.backgroundSecondary}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = colors.background}>
          Get Started - First Order 15% Off
        </button>
        
        
      </div>
    </section>
  );
};

export default CtaSection;