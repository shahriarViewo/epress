import React from 'react';
import Image from 'next/image';

export interface ProductData {
  id: string;
  name: string;
  imageSrc: string;
  productId: string;
  price: string;
  status: 'Available' | 'Not Available' | 'Limited Deal' | 'In Offer';
  sales: number;
  revenue: string;
}

const statusStyles = {
  'Available': 'bg-emerald-100 text-emerald-600',
  'Not Available': 'bg-red-100 text-red-500',
  'Limited Deal': 'bg-amber-100 text-amber-600',
  'In Offer': 'bg-purple-100 text-purple-600',
};

const ProductOverviewRow: React.FC<ProductData> = ({
  name,
  imageSrc,
  productId,
  price,
  status,
  sales,
  revenue,
}) => {
  return (
    <tr className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
      {/* Product Name & Image */}
      <td className="py-4 pl-6">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 flex-shrink-0">
            <Image
              src={imageSrc}
              alt={name}
              fill
              className="object-contain" // Preserves aspect ratio like the camera/bag images
            />
          </div>
          <span className="text-gray-900 font-medium text-sm">{name}</span>
        </div>
      </td>

      {/* Product ID */}
      <td className="py-4 text-gray-500 text-sm font-medium">
        {productId}
      </td>

      {/* Price */}
      <td className="py-4 text-gray-900 text-sm font-medium">
        {price}
      </td>

      {/* Status Badge */}
      <td className="py-4">
        <span
          className={`px-3 py-1 rounded text-xs font-bold inline-block whitespace-nowrap ${statusStyles[status]}`}
        >
          {status}
        </span>
      </td>

      {/* Sales */}
      <td className="py-4 text-gray-900 text-sm font-medium">
        {sales.toLocaleString()}
      </td>

      {/* Revenue */}
      <td className="py-4 pr-6 text-gray-900 text-sm font-medium">
        {revenue}
      </td>
    </tr>
  );
};

export default ProductOverviewRow;