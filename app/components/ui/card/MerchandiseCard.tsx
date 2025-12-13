import React from 'react';
import Image from 'next/image';

interface MerchandiseCardProps {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  description: string;
  priceText: string;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
}

const MerchandiseCard: React.FC<MerchandiseCardProps> = ({
  imageSrc,
  imageAlt = 'Merchandise Image',
  title,
  description,
  priceText,
  buttonText = 'Shop Now',
  onButtonClick,
  className = '',
}) => {
  return (
    <div
      className={`
        group relative flex flex-col 
        p-6 bg-white 
        rounded-[16px] 
        max-h-[500px]
        border border-gray-100 
        shadow-[0_8px_30px_rgb(0,0,0,0.04)] 
        hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] 
        transition-all duration-300
        ${className}
      `}
    >
      {/* Image Container */}
      <div className="relative w-full aspect-[1.15/1] bg-[#F2F4F7] rounded-2xl overflow-hidden mb-5 flex items-center justify-center">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-contain p-4 mix-blend-multiply hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col px-1">
        <h3 className="text-[26px] font-bold text-gray-900 leading-tight mb-2 tracking-tight">
          {title}
        </h3>

        <p className="text-gray-500 text-[15px] leading-relaxed mb-4">
          {description}
        </p>

        <p className="text-[#D93F3F] font-medium text-[15px] mb-6">
          {priceText}
        </p>

        {/* CTA Button */}
        <button
          onClick={onButtonClick}
          className="w-full py-3.5 rounded-full bg-[#F05A28] text-white font-semibold text-lg hover:bg-[#d64b1d] active:scale-[0.98] transition-all duration-200 shadow-sm"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default MerchandiseCard;