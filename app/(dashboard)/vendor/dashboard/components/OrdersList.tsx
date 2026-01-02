'use client'; // Needed because we use useState for tabs

import React, { useState } from 'react';
import OrderRow, { OrderProps } from './microComponents/OrderRow';

const OrdersList = () => {
  const [activeTab, setActiveTab] = useState<'Active' | 'Completed' | 'Cancelled'>('Active');

  // Mock Data: In the future, this comes from your API
  // Note: I added a 'status' field to the data to simulate filtering
  const allOrders = [
    {
      id: '1',
      customerName: 'Amanda Nanes',
      customerAvatar: 'https://placehold.co/100x100/ffedd5/9a3412?text=AN',
      isOnline: true,
      price: '$229.99',
      deliveryDate: '24 May 2022',
      productImage: 'https://placehold.co/100x100/1e293b/cbd5e1?text=Jacket',
      status: 'Active',
    },
    {
      id: '2',
      customerName: 'Peter Parkour',
      customerAvatar: 'https://placehold.co/100x100/dbeafe/1e40af?text=PP',
      isOnline: true,
      price: '$135.29',
      deliveryDate: '18 May 2022',
      productImage: 'https://placehold.co/100x100/78350f/fffbeb?text=Leather',
      status: 'Active',
    },
    {
      id: '3',
      customerName: 'Jackie Chen',
      customerAvatar: 'https://placehold.co/100x100/e0e7ff/3730a3?text=JC',
      isOnline: false,
      price: '$1,299.99',
      deliveryDate: '29 May 2022',
      productImage: 'https://placehold.co/100x100/064e3b/ecfdf5?text=Coat',
      status: 'Active',
    },
    {
      id: '4',
      customerName: 'Ryan Gercia',
      customerAvatar: 'https://placehold.co/100x100/fce7f3/db2777?text=RG',
      isOnline: true,
      price: '$249.29',
      deliveryDate: '05 Jun 2022',
      productImage: 'https://placehold.co/100x100/f3f4f6/1f2937?text=Hoodie',
      status: 'Completed', 
    },
    {
      id: '5',
      customerName: 'Hugh Jackma',
      customerAvatar: 'https://placehold.co/100x100/ede9fe/5b21b6?text=HJ',
      isOnline: false,
      price: '$499.99',
      deliveryDate: '15 May 2022',
      productImage: 'https://placehold.co/100x100/171717/fafafa?text=Puffer',
      status: 'Active',
    },
  ];

  // Logic to filter orders based on the selected tab
  // (In real API integration, you would fetch data here instead)
  const displayedOrders = allOrders.filter(
    (order) => order.status === activeTab || (activeTab === 'Active' && order.status === 'Active')
  );

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 w-full flex flex-col h-[450px]">
      {/* Header & Tabs */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-1 h-6 bg-blue-500 rounded-full"></div>
          <h2 className="text-xl font-bold text-gray-800">Orders</h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-2">
          {['Active', 'Completed', 'Cancelled'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-purple-100 text-purple-600'
                  : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              {tab === 'Active' ? 'Active Orders' : tab}
            </button>
          ))}
        </div>
      </div>

      {/* List Container */}
      <div className="flex flex-col flex-1 overflow-y-auto pr-2">
        {displayedOrders.length > 0 ? (
          displayedOrders.map((order) => (
            <OrderRow
              key={order.id}
              id={order.id}
              customerName={order.customerName}
              customerAvatar={order.customerAvatar}
              isOnline={order.isOnline}
              price={order.price}
              deliveryDate={order.deliveryDate}
              productImage={order.productImage}
            />
          ))
        ) : (
          <div className="py-8 text-center text-gray-400">
            No {activeTab.toLowerCase()} orders found.
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdersList;