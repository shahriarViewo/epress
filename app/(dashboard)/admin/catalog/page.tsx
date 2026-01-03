"use client";

import { useState } from 'react';
import { FolderTree, Settings, Tag } from 'lucide-react';

// Import the smaller components
import CategoriesView from './components/CategoriesView';
import AttributesView from './components/AttributesView';
import BrandsView from './components/BrandsView';

export default function AdminCatalogPage() {
  const [activeTab, setActiveTab] = useState<'categories' | 'attributes' | 'brands'>('categories');

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Catalog Configuration</h1>
        <p className="text-sm text-gray-500">Manage the structure of your marketplace.</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-gray-100 p-1 rounded-lg w-fit mb-8">
        <button onClick={() => setActiveTab('categories')} className={`px-4 py-2 rounded-md text-sm font-bold flex items-center gap-2 transition ${activeTab==='categories' ? 'bg-white shadow text-black' : 'text-gray-500 hover:text-black'}`}>
          <FolderTree size={16}/> Categories
        </button>
        <button onClick={() => setActiveTab('attributes')} className={`px-4 py-2 rounded-md text-sm font-bold flex items-center gap-2 transition ${activeTab==='attributes' ? 'bg-white shadow text-black' : 'text-gray-500 hover:text-black'}`}>
          <Settings size={16}/> Attributes
        </button>
        <button onClick={() => setActiveTab('brands')} className={`px-4 py-2 rounded-md text-sm font-bold flex items-center gap-2 transition ${activeTab==='brands' ? 'bg-white shadow text-black' : 'text-gray-500 hover:text-black'}`}>
          <Tag size={16}/> Brands
        </button>
      </div>

      {/* Content */}
      <div className="min-h-[500px]">
        {activeTab === 'categories' && <CategoriesView />}
        {activeTab === 'attributes' && <AttributesView />}
        {activeTab === 'brands' && <BrandsView />}
      </div>
    </div>
  );
}