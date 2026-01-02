import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export interface OrderProps {
  id: string;
  customerName: string;
  customerAvatar: string;
  isOnline: boolean; // Controls the green/gray dot
  price: string;
  deliveryDate: string;
  productImage: string;
}

const OrderRow: React.FC<OrderProps> = ({
  customerName,
  customerAvatar,
  isOnline,
  price,
  deliveryDate,
  productImage,
}) => {
  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors cursor-pointer group">
      {/* Customer Info */}
      <div className="flex items-center gap-4 w-[200px]">
        <div className="relative">
          <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200">
            <Image 
              src={customerAvatar} 
              alt={customerName} 
              width={48} 
              height={48} 
              className="object-cover"
            />
          </div>
          {/* Status Dot */}
          <span 
            className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
              isOnline ? 'bg-emerald-500' : 'bg-gray-400'
            }`}
          ></span>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-400 text-xs">Name</span>
          <h4 className="font-bold text-gray-800 text-sm">{customerName}</h4>
        </div>
      </div>

      {/* Price */}
      <div className="flex flex-col w-[120px]">
        <span className="text-gray-400 text-xs">Price</span>
        <span className="font-bold text-gray-800 text-sm">{price}</span>
      </div>

      {/* Delivery Date */}
      <div className="flex flex-col w-[150px]">
        <span className="text-gray-400 text-xs">Delivery Date</span>
        <span className="font-bold text-gray-800 text-sm">{deliveryDate}</span>
      </div>

      {/* Product Image & Action */}
      <div className="flex items-center gap-6">
        <div className="h-10 w-10 rounded-lg overflow-hidden bg-gray-100">
          <Image 
            src={productImage} 
            alt="Product" 
            width={40} 
            height={40} 
            className="object-cover" 
          />
        </div>
        <ChevronRight className="text-gray-400 group-hover:text-blue-600 transition-colors" size={20} />
      </div>
    </div>
  );
};

export default OrderRow;