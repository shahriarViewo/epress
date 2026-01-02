import React from 'react';
import ProductRow from './microComponents/ProductRow';

const TopSellingProducts = () => {
  // Mock Data: This will be replaced by your API call
  const products = [
    {
      id: 101,
      name: 'Ethnic School bag for children (24L)',
      category: 'Bags',
      stockStatus: 'In Stock' as const,
      totalSales: 5093,
      imageSrc: 'https://placehold.co/100x100/e0f2fe/0369a1?text=Bag',
    },
    {
      id: 102,
      name: 'Leather jacket for men (S,M,L,XL)',
      category: 'Clothing',
      stockStatus: 'In Stock' as const,
      totalSales: 6890,
      imageSrc: 'https://placehold.co/100x100/1e293b/cbd5e1?text=Jacket',
    },
    {
      id: 103,
      name: 'Childrens Teddy toy of high quality',
      category: 'Toys',
      stockStatus: 'Stock Out' as const,
      totalSales: 5423,
      imageSrc: 'https://placehold.co/100x100/fef3c7/d97706?text=Teddy',
    },
    {
      id: 104,
      name: 'Orange smart watch with square dial (24mm)',
      category: 'Fashion',
      stockStatus: 'Stock Out' as const,
      totalSales: 10234,
      imageSrc: 'https://placehold.co/100x100/fee2e2/ef4444?text=Watch',
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 w-full overflow-hidden flex flex-col h-[450px]">
      {/* Widget Header */}
      <div className="p-6 pb-0 mb-4 flex items-center gap-3">
        <div className="w-1 h-6 bg-blue-500 rounded-full"></div>
        <h2 className="text-lg font-bold text-gray-800">Top Selling Products</h2>
      </div>

      {/* Responsive Table Container */}
      <div className="overflow-x-auto flex-1 overflow-y-auto">
        <table className="w-full min-w-[600px] text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="py-4 pl-6 text-sm font-semibold text-gray-800 w-16">S.no</th>
              <th className="py-4 text-sm font-semibold text-gray-800">Product Name</th>
              <th className="py-4 text-sm font-semibold text-gray-800">Category</th>
              <th className="py-4 text-sm font-semibold text-gray-800">Stock</th>
              <th className="py-4 pr-6 text-sm font-semibold text-gray-800">Total Sales</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <ProductRow
                key={product.id}
                serialNumber={index + 1}
                name={product.name}
                category={product.category}
                stockStatus={product.stockStatus}
                totalSales={product.totalSales}
                imageSrc={product.imageSrc}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopSellingProducts;