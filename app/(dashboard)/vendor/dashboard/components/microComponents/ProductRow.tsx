import React from 'react';
import Image from 'next/image';

interface ProductRowProps {
  serialNumber: number;
  name: string;
  category: string;
  stockStatus: 'In Stock' | 'Stock Out';
  totalSales: number;
  imageSrc: string;
}

const ProductRow: React.FC<ProductRowProps> = ({
  serialNumber,
  name,
  category,
  stockStatus,
  totalSales,
  imageSrc,
}) => {
  // Helper for Badge Styles
  const getStatusStyles = (status: string) => {
    if (status === 'In Stock') {
      return 'bg-emerald-100 text-emerald-600';
    }
    return 'bg-orange-100 text-orange-600';
  };

  return (
    <tr className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
      {/* S.no */}
      <td className="py-4 pl-6 text-gray-500 font-medium w-16">
        {serialNumber}.
      </td>

      {/* Product Name & Image */}
      <td className="py-4">
        <div className="flex items-center gap-4">
          <div className="relative h-10 w-10 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
            <Image
              src={imageSrc}
              alt={name}
              fill
              className="object-cover"
              sizes="40px"
            />
          </div>
          
          {/* UPDATED HERE: 
             1. line-clamp-2: Forces text to max 2 lines with '...'
             2. max-w-[200px]: Prevents table cell from expanding indefinitely
             3. title={name}: Shows full name on hover
          */}
          <span 
            className="text-gray-900 font-medium text-sm line-clamp-2 max-w-[150px] sm:max-w-[220px]" 
            title={name}
          >
            {name}
          </span>
        </div>
      </td>

      {/* Category */}
      <td className="py-4 text-gray-500 text-sm font-medium">
        {category}
      </td>

      {/* Stock Status Badge */}
      <td className="py-4">
        <span
          className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap ${getStatusStyles(stockStatus)}`}
        >
          {stockStatus}
        </span>
      </td>

      {/* Total Sales */}
      <td className="py-4 pr-6 text-gray-900 font-bold text-sm">
        {totalSales.toLocaleString()}
      </td>
    </tr>
  );
};

export default ProductRow;