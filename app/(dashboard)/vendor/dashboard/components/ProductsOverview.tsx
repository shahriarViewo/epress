import React from 'react';
import { ChevronDown, Search } from 'lucide-react';
import ProductOverviewRow, { ProductData } from './microComponents/ProductOverviewRow';

const ProductsOverview = () => {
  // Mock Data
  const products: ProductData[] = [
    {
      id: '1',
      name: 'Niker College Bag',
      imageSrc: 'https://placehold.co/100x100/e2e8f0/1e293b?text=Bag',
      productId: '#1734-9743',
      price: '$199.99',
      status: 'Available',
      sales: 3903,
      revenue: '$67,899.24',
    },
    {
      id: '2',
      name: 'Dslr Camera (50mm f/1.9 HRM Lens)',
      imageSrc: 'https://placehold.co/100x100/1e293b/cbd5e1?text=Camera',
      productId: '#1234-4567',
      price: '$1,299.99',
      status: 'Available',
      sales: 12435,
      revenue: '$3,24,781.92',
    },
    {
      id: '3',
      name: 'Outdoor Bomber Jacket',
      imageSrc: 'https://placehold.co/100x100/3f3f46/fafafa?text=Jacket',
      productId: '#1902-9883',
      price: '$99.99',
      status: 'Not Available',
      sales: 5143,
      revenue: '$76,102.76',
    },
    {
      id: '4',
      name: 'Light Blue Teddy',
      imageSrc: 'https://placehold.co/100x100/fef3c7/d97706?text=Teddy',
      productId: '#8745-1232',
      price: '$79.00',
      status: 'Limited Deal',
      sales: 7183,
      revenue: '$78,211.83',
    },
    {
      id: '5',
      name: 'Orange Smart Watch (24mm)',
      imageSrc: 'https://placehold.co/100x100/fee2e2/ef4444?text=Watch',
      productId: '#1962-9033',
      price: '$199.99',
      status: 'In Offer',
      sales: 10287,
      revenue: '$2,32,982.99',
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 w-full">
      {/* Header Section */}
      <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Title */}
        <div className="flex items-center gap-3">
          <div className="w-1 h-6 bg-blue-500 rounded-full"></div>
          <h2 className="text-xl font-bold text-gray-800">Products Overview</h2>
        </div>

        {/* Controls (Search & Sort) */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search Here" 
              className="pl-4 pr-10 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-64"
            />
            {/* Search Icon (optional, positioned absolutely if needed) */}
          </div>
          
          <button className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">
            Sort By <ChevronDown size={16} />
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/50">
              <th className="py-4 pl-6 text-sm font-semibold text-gray-600">Name</th>
              <th className="py-4 text-sm font-semibold text-gray-600">Product Id</th>
              <th className="py-4 text-sm font-semibold text-gray-600">Price</th>
              <th className="py-4 text-sm font-semibold text-gray-600">Status</th>
              <th className="py-4 text-sm font-semibold text-gray-600">Sales</th>
              <th className="py-4 pr-6 text-sm font-semibold text-gray-600">Revenue</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <ProductOverviewRow key={product.id} {...product} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Pagination */}
      <div className="p-6 flex flex-col sm:flex-row items-center justify-between border-t border-gray-100 gap-4">
        <span className="text-sm text-gray-500">
          Showing 5 Entries <span className="ml-1">→</span>
        </span>

        <div className="flex items-center gap-2">
          <button className="text-gray-500 hover:text-gray-700 text-sm font-medium px-2">
            Prev
          </button>
          
          {/* Active Page */}
          <button className="w-8 h-8 rounded-lg bg-purple-600 text-white text-sm font-bold flex items-center justify-center">
            1
          </button>
          
          {/* Inactive Page */}
          <button className="w-8 h-8 rounded-lg hover:bg-gray-50 text-gray-600 text-sm font-bold flex items-center justify-center">
            2
          </button>
          
          <button className="text-purple-600 hover:text-purple-700 text-sm font-medium px-2">
            next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsOverview;