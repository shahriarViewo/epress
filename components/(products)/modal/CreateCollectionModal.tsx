'use client';

import React, { useState } from 'react';

interface CreateCollectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreateCollectionModal({ isOpen, onClose }: CreateCollectionModalProps) {
  const [title, setTitle] = useState('');
  const [collectionType, setCollectionType] = useState<'manual' | 'smart'>('manual');
  const [publishOnline, setPublishOnline] = useState(true);
  const [publishPOS, setPublishPOS] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm sm:p-6 font-sans">
      {/* Modal Container */}
      <div className="flex w-full max-w-5xl max-h-[95vh] flex-col overflow-hidden rounded-xl bg-gray-50 shadow-2xl dark:bg-gray-900">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4 dark:border-gray-800 dark:bg-gray-900">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">Create collection</h2>
          <button 
            onClick={onClose}
            className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300 transition-colors"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            
            {/* Left Column - Main Content */}
            <div className="space-y-6 lg:col-span-2">
              
              {/* Title Input */}
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800/50">
                <label className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Summer collection, Under $100"
                  className="w-full rounded-lg border border-gray-300 bg-transparent px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 dark:border-gray-600 dark:text-white dark:placeholder:text-gray-500"
                />
              </div>

              {/* Description (Rich Text Mockup) */}
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800/50">
                <label className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Description
                </label>
                <div className="overflow-hidden rounded-lg border border-gray-300 dark:border-gray-600">
                  {/* Toolbar */}
                  <div className="flex flex-wrap items-center gap-1 border-b border-gray-300 bg-gray-50 p-1 px-2 dark:border-gray-600 dark:bg-gray-800">
                    <button className="p-1.5 text-xs font-semibold text-gray-600 hover:bg-gray-200 rounded dark:text-gray-300 dark:hover:bg-gray-700">H1</button>
                    <button className="p-1.5 text-xs font-semibold text-gray-600 hover:bg-gray-200 rounded dark:text-gray-300 dark:hover:bg-gray-700">H2</button>
                    <div className="mx-1 h-4 w-px bg-gray-300 dark:bg-gray-600"></div>
                    <button className="p-1.5 font-serif text-sm font-bold text-gray-600 hover:bg-gray-200 rounded dark:text-gray-300 dark:hover:bg-gray-700">B</button>
                    <button className="p-1.5 font-serif text-sm italic text-gray-600 hover:bg-gray-200 rounded dark:text-gray-300 dark:hover:bg-gray-700">I</button>
                    <button className="p-1.5 font-serif text-sm underline text-gray-600 hover:bg-gray-200 rounded dark:text-gray-300 dark:hover:bg-gray-700">U</button>
                    <button className="p-1.5 font-serif text-sm line-through text-gray-600 hover:bg-gray-200 rounded dark:text-gray-300 dark:hover:bg-gray-700">S</button>
                    <div className="mx-1 h-4 w-px bg-gray-300 dark:bg-gray-600"></div>
                    <button className="p-1.5 text-gray-600 hover:bg-gray-200 rounded dark:text-gray-300 dark:hover:bg-gray-700">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                    </button>
                    <button className="p-1.5 text-gray-600 hover:bg-gray-200 rounded dark:text-gray-300 dark:hover:bg-gray-700">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </button>
                    <div className="mx-1 h-4 w-px bg-gray-300 dark:bg-gray-600"></div>
                    <button className="p-1.5 text-gray-600 hover:bg-gray-200 rounded dark:text-gray-300 dark:hover:bg-gray-700">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                    </button>
                  </div>
                  {/* Editor Area */}
                  <textarea 
                    rows={6}
                    placeholder="Tell customers about this collection"
                    className="w-full resize-y bg-transparent p-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none dark:text-white"
                  ></textarea>
                </div>
              </div>

              {/* Collection Type */}
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800/50">
                <label className="mb-3 block text-[13px] font-semibold text-gray-900 dark:text-gray-200">
                  Collection type
                </label>
                <div className="space-y-3">
                  {/* Manual Option */}
                  <label 
                    className={`flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-colors ${
                      collectionType === 'manual' 
                        ? 'border-teal-600 bg-[#F3FDF8] dark:bg-teal-900/10 dark:border-teal-500' 
                        : 'border-transparent hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                  >
                    <div className="relative flex items-center justify-center mt-0.5">
                      <input 
                        type="radio" 
                        name="collectionType" 
                        className="peer h-4 w-4 appearance-none rounded-full border border-gray-300 bg-white checked:border-teal-600 dark:border-gray-600 dark:bg-gray-700 dark:checked:border-teal-500 transition-all"
                        checked={collectionType === 'manual'}
                        onChange={() => setCollectionType('manual')}
                      />
                      <div className="pointer-events-none absolute h-2 w-2 rounded-full bg-teal-600 opacity-0 peer-checked:opacity-100 dark:bg-teal-500 transition-opacity"></div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">Manual</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Add products to this collection one by one.</p>
                    </div>
                  </label>

                  {/* Smart Option */}
                  <label 
                    className={`flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-colors ${
                      collectionType === 'smart' 
                        ? 'border-teal-600 bg-[#F3FDF8] dark:bg-teal-900/10 dark:border-teal-500' 
                        : 'border-transparent hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                  >
                    <div className="relative flex items-center justify-center mt-0.5">
                      <input 
                        type="radio" 
                        name="collectionType" 
                        className="peer h-4 w-4 appearance-none rounded-full border border-gray-300 bg-white checked:border-teal-600 dark:border-gray-600 dark:bg-gray-700 dark:checked:border-teal-500 transition-all"
                        checked={collectionType === 'smart'}
                        onChange={() => setCollectionType('smart')}
                      />
                      <div className="pointer-events-none absolute h-2 w-2 rounded-full bg-teal-600 opacity-0 peer-checked:opacity-100 dark:bg-teal-500 transition-opacity"></div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">Smart</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Automatically add products matching your conditions.</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Products Section */}
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800/50">
                <label className="mb-3 block text-[13px] font-semibold text-gray-900 dark:text-gray-200">
                  Products
                </label>
                
                {/* Search Bar Row */}
                <div className="flex flex-wrap items-center gap-3 mb-8">
                  <div className="relative flex-1 min-w-[200px]">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </div>
                    <input 
                      type="text" 
                      placeholder="Search products" 
                      className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm text-gray-900 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
                    />
                  </div>
                  <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 shadow-sm dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 transition-colors">
                    Browse
                  </button>
                  <div className="relative">
                    <select className="appearance-none rounded-lg border border-gray-300 bg-white py-2 pl-4 pr-8 text-sm font-medium text-gray-700 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 shadow-sm dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200">
                      <option>Sort: Newest</option>
                      <option>Sort: Oldest</option>
                      <option>Sort: A-Z</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                </div>

                {/* Empty State */}
                <div className="flex flex-col items-center justify-center py-10">
                  <div className="mb-3 text-gray-300 dark:text-gray-600">
                    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 8h-2V5c0-2.8-2.2-5-5-5S7 2.2 7 5v3H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-7-6c1.7 0 3 1.3 3 3v3H9V5c0-1.7 1.3-3 3-3z"/>
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">No products selected</p>
                </div>
              </div>

              {/* Search Engine Listing Accordion */}
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800/50">
                <button className="flex w-full items-center justify-between text-left">
                  <span className="text-[13px] font-semibold text-gray-900 dark:text-gray-200">Search engine listing</span>
                  <svg className="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
              </div>

            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              
              {/* Publishing */}
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800/50">
                <label className="mb-4 block text-[13px] font-semibold text-gray-900 dark:text-gray-200">
                  Publishing
                </label>
                <div className="space-y-3">
                  <label className="flex cursor-pointer items-center gap-3">
                    <div className="relative flex items-center justify-center">
                      <input 
                        type="checkbox" 
                        checked={publishOnline}
                        onChange={() => setPublishOnline(!publishOnline)}
                        className="peer h-4 w-4 appearance-none rounded border border-gray-300 bg-white checked:border-teal-600 checked:bg-teal-600 dark:border-gray-600 dark:bg-gray-900 dark:checked:border-teal-500 dark:checked:bg-teal-500"
                      />
                      <svg className="pointer-events-none absolute h-3 w-3 text-white opacity-0 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">Online Store</span>
                  </label>

                  <label className="flex cursor-pointer items-center gap-3">
                    <div className="relative flex items-center justify-center">
                      <input 
                        type="checkbox" 
                        checked={publishPOS}
                        onChange={() => setPublishPOS(!publishPOS)}
                        className="peer h-4 w-4 appearance-none rounded border border-gray-300 bg-white checked:border-teal-600 checked:bg-teal-600 dark:border-gray-600 dark:bg-gray-900 dark:checked:border-teal-500 dark:checked:bg-teal-500"
                      />
                      <svg className="pointer-events-none absolute h-3 w-3 text-white opacity-0 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">Point of Sale</span>
                  </label>
                </div>
              </div>

              {/* Collection Image */}
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800/50">
                <label className="mb-4 block text-[13px] font-semibold text-gray-900 dark:text-gray-200">
                  Collection image
                </label>
                <button className="flex w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-200 bg-gray-50 py-10 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700/80">
                  <div className="mb-2 rounded-full border border-gray-200 bg-white p-2 shadow-sm dark:border-gray-600 dark:bg-gray-900">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                  </div>
                  <span className="text-sm font-semibold text-teal-600 dark:text-teal-400">Add image</span>
                  <span className="mt-1 text-xs text-gray-500 dark:text-gray-400">or drop an image to upload</span>
                </button>
              </div>

              {/* Theme Template */}
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800/50">
                <label className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Theme template
                </label>
                <div className="relative mt-2">
                  <select className="w-full appearance-none rounded-lg border border-gray-300 bg-white py-2 pl-3 pr-8 text-sm text-gray-900 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 dark:border-gray-600 dark:bg-gray-900 dark:text-white">
                    <option>Default collection</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-3 border-t border-gray-200 bg-white px-6 py-4 dark:border-gray-800 dark:bg-gray-900">
          <button 
            onClick={onClose}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            Cancel
          </button>
          <button 
            disabled={!title}
            className={`rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors ${
              title ? 'bg-[#1a1a1a] hover:bg-black dark:bg-teal-600 dark:hover:bg-teal-500' : 'bg-gray-200 text-gray-400 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500'
            }`}
          >
            Save
          </button>
        </div>

      </div>
    </div>
  );
}