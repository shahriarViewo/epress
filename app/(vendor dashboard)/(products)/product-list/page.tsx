'use client';

import React, { useState } from 'react';

// --- Mock Data ---
const MOCK_PRODUCTS = [
  {
    id: 1,
    name: "ASUS ROG Gaming Laptop",
    image: "https://placehold.co/40x40/e2e8f0/64748b?text=PC",
    category: "Laptop",
    brand: "ASUS",
    price: "$2,199",
    stockStatus: "Out of Stock",
    createdAt: "01 Dec, 2027",
  },
  {
    id: 2,
    name: "Airpods Pro 2nd Gen",
    image: "https://placehold.co/40x40/e2e8f0/64748b?text=POD",
    category: "Accessories",
    brand: "Apple",
    price: "$839",
    stockStatus: "In Stock",
    createdAt: "29 Jun, 2027",
  },
  {
    id: 3,
    name: "Apple Watch Ultra",
    image: "https://placehold.co/40x40/e2e8f0/64748b?text=AW",
    category: "Watch",
    brand: "Apple",
    price: "$1,579",
    stockStatus: "Out of Stock",
    createdAt: "13 Mar, 2027",
  },
  {
    id: 4,
    name: "Bose QuietComfort Earbuds",
    image: "https://placehold.co/40x40/e2e8f0/64748b?text=BO",
    category: "Audio",
    brand: "Bose",
    price: "$279",
    stockStatus: "In Stock",
    createdAt: "18 Nov, 2027",
  },
  {
    id: 5,
    name: "Canon EOS R5 Camera",
    image: "https://placehold.co/40x40/e2e8f0/64748b?text=CAM",
    category: "Camera",
    brand: "Canon",
    price: "$3,899",
    stockStatus: "In Stock",
    createdAt: "28 Sep, 2027",
  },
  {
    id: 6,
    name: "Dell XPS 13 Laptop",
    image: "https://placehold.co/40x40/e2e8f0/64748b?text=XPS",
    category: "Laptop",
    brand: "Dell",
    price: "$1,299",
    stockStatus: "In Stock",
    createdAt: "18 Aug, 2027",
  },
  {
    id: 7,
    name: "Google Pixel 8 Pro",
    image: "https://placehold.co/40x40/e2e8f0/64748b?text=G",
    category: "Phone",
    brand: "Google",
    price: "$899",
    stockStatus: "Out of Stock",
    createdAt: "02 Sep, 2027",
  },
];

export default function ProductsList() {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]);
    } else {
      setSelectedItems(MOCK_PRODUCTS.map((p) => p.id));
    }
    setSelectAll(!selectAll);
  };

  const toggleItem = (id: number) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
      setSelectAll(false);
    } else {
      const newSelected = [...selectedItems, id];
      setSelectedItems(newSelected);
      if (newSelected.length === MOCK_PRODUCTS.length) {
        setSelectAll(true);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] p-6 font-sans text-gray-800 dark:bg-gray-950 dark:text-gray-200">
      <div className="mx-auto max-w-7xl">
        
        {/* Page Header */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Products</h1>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span>Home</span>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="font-medium text-gray-900 dark:text-white">Products</span>
          </div>
        </div>

        {/* Main Card */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
          
          {/* Card Header */}
          <div className="flex flex-col gap-4 border-b border-gray-200 p-6 sm:flex-row sm:items-center sm:justify-between dark:border-gray-800">
            <div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Products List</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Track your store's progress to boost your sales.</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800">
                Export 
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              </button>
              <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                Add Product
              </button>
            </div>
          </div>

          {/* Toolbar (Search & Filter) */}
          <div className="flex items-center justify-between p-4">
            <div className="relative w-full max-w-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </div>
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500"
              />
            </div>
            <button className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h18l-7 9v8l-4-2v-6L3 4z" /></svg>
              Filter
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-600 dark:text-gray-400">
              <thead className="border-y border-gray-200 bg-gray-50 text-xs text-gray-500 dark:border-gray-800 dark:bg-gray-800/50">
                <tr>
                  <th className="px-6 py-4 font-medium">
                    <input 
                      type="checkbox" 
                      checked={selectAll}
                      onChange={handleSelectAll}
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
                    />
                  </th>
                  <th className="px-6 py-4 font-medium hover:text-gray-700 cursor-pointer">
                    <div className="flex items-center gap-1">Products <SortIcon /></div>
                  </th>
                  <th className="px-6 py-4 font-medium hover:text-gray-700 cursor-pointer">
                    <div className="flex items-center gap-1">Category <SortIcon /></div>
                  </th>
                  <th className="px-6 py-4 font-medium hover:text-gray-700 cursor-pointer">
                    <div className="flex items-center gap-1">Brand <SortIcon /></div>
                  </th>
                  <th className="px-6 py-4 font-medium hover:text-gray-700 cursor-pointer">
                    <div className="flex items-center gap-1">Price <SortIcon /></div>
                  </th>
                  <th className="px-6 py-4 font-medium">Stock</th>
                  <th className="px-6 py-4 font-medium hover:text-gray-700 cursor-pointer">
                    <div className="flex items-center gap-1">Created At <SortIcon /></div>
                  </th>
                  <th className="px-6 py-4 font-medium"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                {MOCK_PRODUCTS.map((product) => (
                  <tr key={product.id} className="transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="px-6 py-4">
                      <input 
                        type="checkbox" 
                        checked={selectedItems.includes(product.id)}
                        onChange={() => toggleItem(product.id)}
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img src={product.image} alt={product.name} className="h-10 w-10 rounded-md object-cover border border-gray-200 dark:border-gray-700" />
                        <span className="font-semibold text-gray-900 dark:text-white">{product.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">{product.category}</td>
                    <td className="px-6 py-4">{product.brand}</td>
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{product.price}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${
                        product.stockStatus === 'In Stock' 
                          ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400' 
                          : 'bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400'
                      }`}>
                        {product.stockStatus}
                      </span>
                    </td>
                    <td className="px-6 py-4">{product.createdAt}</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Footer */}
          <div className="flex items-center justify-between border-t border-gray-200 px-6 py-4 dark:border-gray-800">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Showing <span className="font-medium text-gray-900 dark:text-white">1</span> to <span className="font-medium text-gray-900 dark:text-white">7</span> of <span className="font-medium text-gray-900 dark:text-white">20</span>
            </span>
            <div className="flex items-center gap-1">
              <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-sm font-medium text-white hover:bg-blue-700">1</button>
              <button className="flex h-9 w-9 items-center justify-center rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800">2</button>
              <button className="flex h-9 w-9 items-center justify-center rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800">3</button>
              <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// Helper component for the little up/down sort arrows in the table header
const SortIcon = () => (
  <svg className="h-3.5 w-3.5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
  </svg>
);