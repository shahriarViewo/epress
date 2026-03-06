"use client";

import React, { useState } from "react";

// --- Icons (Darkened for better visibility) ---
const PencilIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
  </svg>
);

const TrashBinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);

const SortIcon = () => (
  <svg className="h-4 w-4 text-slate-500 group-hover:text-slate-950 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
  </svg>
);

// --- Reusable Custom Checkbox (Darker Border) ---
const CustomCheckbox = ({ checked, onChange }: { checked: boolean; onChange: () => void }) => (
  <label className="relative flex items-center cursor-pointer">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border-2 border-slate-400 bg-white transition-all checked:border-indigo-600 checked:bg-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-500/20"
    />
    <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-3.5 w-3.5 pointer-events-none stroke-white opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  </label>
);

// --- Mock Data ---
const MOCK_PRODUCTS = [
  { id: 1, name: "ASUS ROG Gaming Laptop", image: "https://placehold.co/100x100/e2e8f0/0f172a?text=PC", category: "Laptop", brand: "ASUS", price: "$2,199", stockStatus: "Out of Stock", createdAt: "01 Dec, 2027" },
  { id: 2, name: "Airpods Pro 2nd Gen", image: "https://placehold.co/100x100/e2e8f0/0f172a?text=POD", category: "Accessories", brand: "Apple", price: "$839", stockStatus: "In Stock", createdAt: "29 Jun, 2027" },
  { id: 3, name: "Apple Watch Ultra", image: "https://placehold.co/100x100/e2e8f0/0f172a?text=AW", category: "Watch", brand: "Apple", price: "$1,579", stockStatus: "Out of Stock", createdAt: "13 Mar, 2027" },
  { id: 4, name: "Bose QuietComfort Earbuds", image: "https://placehold.co/100x100/e2e8f0/0f172a?text=BO", category: "Audio", brand: "Bose", price: "$279", stockStatus: "In Stock", createdAt: "18 Nov, 2027" },
  { id: 5, name: "Canon EOS R5 Camera", image: "https://placehold.co/100x100/e2e8f0/0f172a?text=CAM", category: "Camera", brand: "Canon", price: "$3,899", stockStatus: "In Stock", createdAt: "28 Sep, 2027" },
  { id: 6, name: "Dell XPS 13 Laptop", image: "https://placehold.co/100x100/e2e8f0/0f172a?text=XPS", category: "Laptop", brand: "Dell", price: "$1,299", stockStatus: "In Stock", createdAt: "18 Aug, 2027" },
  { id: 7, name: "Google Pixel 8 Pro", image: "https://placehold.co/100x100/e2e8f0/0f172a?text=G", category: "Phone", brand: "Google", price: "$899", stockStatus: "Out of Stock", createdAt: "02 Sep, 2027" },
];

export default function ProductsList() {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const itemsPerPage = 7;
  const totalPages = Math.ceil(MOCK_PRODUCTS.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = MOCK_PRODUCTS.slice(startIndex, endIndex);

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

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-cyan-50 text-slate-950 font-sans p-4 sm:p-8">
      <main className="max-w-screen-2xl mx-auto">
        
        {/* Page Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-3xl font-black text-slate-950 tracking-tight">
            Products
          </h2>

          <div className="flex items-center gap-3">
            <button className="rounded-xl bg-white border-2 border-slate-300 px-5 py-2.5 text-sm font-bold text-slate-800 hover:bg-slate-50 hover:border-indigo-400 hover:text-indigo-700 transition-all shadow-sm flex items-center gap-2">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              Export
            </button>
            <button className="rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 px-6 py-2.5 text-sm font-bold text-white hover:from-indigo-700 hover:to-cyan-700 transition-all shadow-lg shadow-indigo-500/40 hover:-translate-y-0.5 flex items-center gap-2">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" /></svg>
              Add Product
            </button>
          </div>
        </div>

        {/* Main List Card (Indigo Theme) */}
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl shadow-indigo-100/60 border border-slate-300 border-t-4 border-t-indigo-600 p-6 sm:p-8">
          
          {/* Card Toolbar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-100 text-indigo-700 rounded-lg shadow-sm border border-indigo-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-slate-950 tracking-tight">Products List</h3>
                <p className="text-sm font-semibold text-slate-600 mt-0.5">Manage your store's inventory and track sales.</p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="relative w-full md:w-72">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-500">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </div>
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-11 pl-11 pr-4 bg-white border-2 border-slate-300 rounded-xl text-sm text-slate-950 font-bold placeholder:text-slate-500 placeholder:font-medium focus:outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-200 shadow-sm"
                />
              </div>
              <button className="flex items-center gap-2 h-11 rounded-xl bg-slate-50 border-2 border-slate-300 px-5 text-sm font-bold text-slate-800 hover:bg-white hover:border-indigo-400 hover:text-indigo-700 transition-all shadow-sm shrink-0">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 4h18l-7 9v8l-4-2v-6L3 4z" /></svg>
                Filter
              </button>
            </div>
          </div>

          {/* Table Container */}
          <div className="border-2 border-slate-200 rounded-xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-800">
                <thead className="bg-slate-100 text-xs uppercase tracking-wider text-slate-700 border-b-2 border-slate-200">
                  <tr>
                    <th className="px-5 py-4 w-12">
                      <CustomCheckbox checked={selectAll} onChange={handleSelectAll} />
                    </th>
                    <th className="px-5 py-4 font-extrabold group cursor-pointer hover:text-slate-950 transition-colors">
                      <div className="flex items-center gap-1.5">Products <SortIcon /></div>
                    </th>
                    <th className="px-5 py-4 font-extrabold group cursor-pointer hover:text-slate-950 transition-colors">
                      <div className="flex items-center gap-1.5">Category <SortIcon /></div>
                    </th>
                    <th className="px-5 py-4 font-extrabold group cursor-pointer hover:text-slate-950 transition-colors">
                      <div className="flex items-center gap-1.5">Brand <SortIcon /></div>
                    </th>
                    <th className="px-5 py-4 font-extrabold group cursor-pointer hover:text-slate-950 transition-colors">
                      <div className="flex items-center gap-1.5">Price <SortIcon /></div>
                    </th>
                    <th className="px-5 py-4 font-extrabold">Stock</th>
                    <th className="px-5 py-4 font-extrabold group cursor-pointer hover:text-slate-950 transition-colors">
                      <div className="flex items-center gap-1.5">Created At <SortIcon /></div>
                    </th>
                    <th className="px-5 py-4 font-extrabold text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-slate-100 bg-white">
                  {currentProducts.map((product) => (
                    <tr key={product.id} className={`transition-colors hover:bg-slate-50 ${selectedItems.includes(product.id) ? 'bg-indigo-50/50' : ''}`}>
                      <td className="px-5 py-4">
                        <CustomCheckbox checked={selectedItems.includes(product.id)} onChange={() => toggleItem(product.id)} />
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 shrink-0 rounded-lg border-2 border-slate-200 bg-white p-0.5 shadow-sm">
                            <img src={product.image} alt={product.name} className="h-full w-full object-cover rounded-md" />
                          </div>
                          <span className="font-extrabold text-slate-950">{product.name}</span>
                        </div>
                      </td>
                      <td className="px-5 py-4 font-semibold text-slate-700">{product.category}</td>
                      <td className="px-5 py-4 font-semibold text-slate-700">{product.brand}</td>
                      <td className="px-5 py-4 font-extrabold text-slate-950">{product.price}</td>
                      <td className="px-5 py-4">
                        <span className={`inline-flex items-center gap-1.5 rounded-lg border-2 px-2.5 py-1 text-[11px] font-black uppercase tracking-wider shadow-sm ${
                          product.stockStatus === 'In Stock' 
                            ? 'bg-emerald-50 text-emerald-800 border-emerald-300' 
                            : 'bg-rose-50 text-rose-800 border-rose-300'
                        }`}>
                          <span className={`h-1.5 w-1.5 rounded-full ${product.stockStatus === 'In Stock' ? 'bg-emerald-600' : 'bg-rose-600'}`} />
                          {product.stockStatus}
                        </span>
                      </td>
                      <td className="px-5 py-4 font-semibold text-slate-700">{product.createdAt}</td>
                      <td className="px-5 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button className="group flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-200 bg-indigo-50 text-indigo-700 transition-all duration-200 hover:bg-indigo-600 hover:border-indigo-600 hover:text-white hover:shadow-md hover:-translate-y-0.5" title="Edit Product">
                            <PencilIcon className="h-5 w-5 group-hover:text-white transition-colors" />
                          </button>
                          <button className="group flex h-10 w-10 items-center justify-center rounded-xl border border-rose-200 bg-rose-50 text-rose-700 transition-all duration-200 hover:bg-rose-600 hover:border-rose-600 hover:text-white hover:shadow-md hover:-translate-y-0.5" title="Delete Product">
                            <TrashBinIcon className="h-5 w-5 group-hover:text-white transition-colors" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Pagination Footer */}
            <div className="flex flex-col sm:flex-row items-center justify-between border-t-2 border-slate-200 bg-slate-50 px-5 py-4 gap-4">
              <span className="text-sm font-semibold text-slate-700">
                Showing <span className="font-extrabold text-slate-950">{startIndex + 1}</span> to <span className="font-extrabold text-slate-950">{Math.min(endIndex, MOCK_PRODUCTS.length)}</span> of <span className="font-extrabold text-slate-950">{MOCK_PRODUCTS.length}</span>
              </span>
              <div className="flex items-center gap-1.5">
                <button 
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border-2 border-slate-300 bg-white text-slate-800 shadow-sm transition-all hover:border-indigo-400 hover:text-indigo-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-slate-300 disabled:hover:text-slate-800"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button 
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`flex h-9 w-9 items-center justify-center rounded-xl text-sm font-extrabold shadow-sm transition-all duration-200 border-2 ${
                      currentPage === page
                        ? 'bg-indigo-600 border-indigo-600 text-white shadow-indigo-500/30'
                        : 'bg-white border-slate-300 text-slate-800 hover:border-indigo-400 hover:text-indigo-700'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button 
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border-2 border-slate-300 bg-white text-slate-800 shadow-sm transition-all hover:border-indigo-400 hover:text-indigo-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-slate-300 disabled:hover:text-slate-800"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>      
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}