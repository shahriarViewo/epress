import React from 'react';
import Image from 'next/image';

interface OrderItemProps {
  name: string;
  category: string;
  price: string;
  imageSrc: string;
}

const OrderItem: React.FC<OrderItemProps> = ({ name, category, price, imageSrc }) => {
  return (
    <div className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
      <div className="flex items-center gap-4">
        {/* Image Container with generic styling */}
        <div className="relative h-12 w-12 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        
        {/* Text Info */}
        <div className="flex flex-col">
          <h4 className="text-gray-900 font-semibold text-sm">{name}</h4>
          <span className="text-gray-500 text-xs">{category}</span>
        </div>
      </div>

      {/* Price */}
      <span className="text-emerald-500 font-bold text-sm">
        {price}
      </span>
    </div>
  );
};

export default OrderItem;