import React from 'react';
import { MoreVertical } from 'lucide-react'; // The three-dots menu icon
import OrderItem from './microComponents/OrderItem';

const RecentOrders = () => {
  // Mock Data - In your real app, this comes from your API
  const orders = [
    {
      id: 1,
      name: 'Smart Phone',
      category: 'Mobiles',
      price: '$199.99',
      imageSrc: 'https://placehold.co/100x100/e2e8f0/64748b?text=Phone', 
    },
    {
      id: 2,
      name: 'White Headphones',
      category: 'Music',
      price: '$79.49',
      imageSrc: 'https://placehold.co/100x100/f1f5f9/64748b?text=Headphones',
    },
    {
      id: 3,
      name: 'Stop Watch',
      category: 'Electronics',
      price: '$49.29',
      imageSrc: 'https://placehold.co/100x100/dbeafe/3b82f6?text=Watch',
    },
    {
      id: 4,
      name: 'Kikon Camera',
      category: 'Electronics',
      price: '$1,699.00',
      imageSrc: 'https://placehold.co/100x100/dcfce7/16a34a?text=Camera',
    },
    {
      id: 5,
      name: 'Photo Frame',
      category: 'Furniture',
      price: '$29.99',
      imageSrc: 'https://placehold.co/100x100/e0f2fe/0ea5e9?text=Frame',
    },
    {
      id: 6,
      name: 'Canvas Shoes',
      category: 'Footwear',
      price: '$89.99',
      imageSrc: 'https://placehold.co/100x100/fce7f3/db2777?text=Shoes',
    },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 w-full h-full flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          {/* Blue Vertical Pill */}
          <div className="w-1 h-6 bg-blue-500 rounded-full"></div>
          <h2 className="text-lg font-bold text-gray-800">Recent Orders</h2>
        </div>
        
        {/* Menu Button */}
        <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors text-gray-400">
          <MoreVertical size={20} />
        </button>
      </div>

      {/* Scrollable List Area */}
      <div className="flex flex-col gap-4 flex-1 overflow-y-auto pr-2">
        {orders.map((order) => (
          <OrderItem
            key={order.id}
            name={order.name}
            category={order.category}
            price={order.price}
            imageSrc={order.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentOrders;