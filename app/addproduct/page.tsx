'use client';

import React, { useState, useRef } from 'react';
import { Upload, X, Save, Plus, FileVideo, Trash2 } from 'lucide-react';

interface ProductFormData {
  productName: string;
  category: string;
  gender: string;
  size: string;
  brand: string;
  colors: string[];
  actualPrice: string;
  dealerPrice: string;
  discount: string;
  productType: string;
  itemWeight: string;
  description: string;
  publishDate: string;
  publishTime: string;
  publishedStatus: string;
  productTags: string[];
  availability: string;
}

export default function AddProductPage() {
  // 1. Form Data State
  const [formData, setFormData] = useState<ProductFormData>({
    productName: '',
    category: '',
    gender: '',
    size: '',
    brand: '',
    colors: [],
    actualPrice: '',
    dealerPrice: '',
    discount: '',
    productType: '',
    itemWeight: '',
    description: '',
    publishDate: new Date().toISOString().split('T')[0],
    publishTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    publishedStatus: 'Published',
    productTags: ['Relaxed', 'Plain'],
    availability: 'In Stock',
  });

  // 2. File Handling State
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);
  
  // New: Image Handling Refs
  const imageInputRef = useRef<HTMLInputElement>(null);

  // 3. Handlers
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setVideoFile(e.target.files[0]);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Placeholder for image upload logic (e.g., store in state)
    console.log("Images selected:", e.target.files);
  };

  const removeVideo = () => {
    setVideoFile(null);
    if (videoInputRef.current) {
      videoInputRef.current.value = ''; 
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    console.log('Video File:', videoFile);
    alert('Product saved! Check console for data.');
  };

  // Helper classes
  const inputClass = "w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-sm text-gray-700 bg-white";
  const labelClass = "block text-sm font-semibold text-gray-700 mb-2";

  return (
    <div className="min-h-screen bg-gray-50/50 p-4 md:p-6 pb-20 font-sans">
      
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800">Add Products</h1>
        <div className="text-sm text-gray-400 hidden sm:block">Ecommerce &gt; Add Products</div>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        
        {/* --- LEFT COLUMN --- */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-6">
          
          {/* Product Name */}
          <div>
            <label className={labelClass}>Product Name</label>
            <input
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleInputChange}
              placeholder="Name"
              className={inputClass}
            />
            <p className="text-xs text-gray-400 mt-1">*Product Name should not exceed 30 characters</p>
          </div>

          {/* Row: Category & Gender */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Category</label>
              <select name="category" value={formData.category} onChange={handleInputChange} className={inputClass}>
                <option value="">Select Category</option>
                <option value="clothing">Clothing</option>
                <option value="electronics">Electronics</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Gender</label>
              <select name="gender" value={formData.gender} onChange={handleInputChange} className={inputClass}>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="unisex">Unisex</option>
              </select>
            </div>
          </div>

          {/* Row: Size & Brand */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Size</label>
              <select name="size" value={formData.size} onChange={handleInputChange} className={inputClass}>
                <option value="">Select Size</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Brand</label>
              <select name="brand" value={formData.brand} onChange={handleInputChange} className={inputClass}>
                <option value="">Select Brand</option>
                <option value="nike">Nike</option>
                <option value="adidas">Adidas</option>
              </select>
            </div>
          </div>

          {/* Row: Colors & Cost */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div>
              <label className={labelClass}>Colors</label>
              <select className={inputClass}>
                <option>Select Color</option>
                <option>Red</option>
                <option>Blue</option>
              </select>
            </div>
             <div>
              <label className={labelClass}>Enter Cost</label>
               <input type="text" placeholder="Cost" className={inputClass} />
              <p className="text-xs text-gray-400 mt-1">*Mention final price of the product</p>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className={labelClass}>Product Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={4}
              className={inputClass}
              placeholder="Enter description..."
            />
            <p className="text-xs text-gray-400 mt-1">*Description should not exceed 500 letters</p>
          </div>

          {/* Features Editor Placeholder */}
          <div>
            <label className={labelClass}>Product Features</label>
            <div className="w-full h-32 border border-gray-200 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 text-sm">
              [Rich Text Editor Component Here]
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN --- */}
        <div className="space-y-6">
          
          {/* Pricing Card */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div>
                <label className={labelClass}>Actual Price</label>
                <input
                  type="text"
                  name="actualPrice"
                  value={formData.actualPrice}
                  onChange={handleInputChange}
                  placeholder="$0.00"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Dealer Price</label>
                <input
                  type="text"
                  name="dealerPrice"
                  value={formData.dealerPrice}
                  onChange={handleInputChange}
                  placeholder="$0.00"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Discount</label>
                <input
                  type="text"
                  name="discount"
                  value={formData.discount}
                  onChange={handleInputChange}
                  placeholder="0%"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Product Type</label>
                <input
                  type="text"
                  name="productType"
                  value={formData.productType}
                  onChange={handleInputChange}
                  placeholder="Type"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Item Weight</label>
                <input
                  type="text"
                  name="itemWeight"
                  value={formData.itemWeight}
                  onChange={handleInputChange}
                  placeholder="Weight (g)"
                  className={inputClass}
                />
              </div>
            </div>
          </div>

          {/* Product Images (UPDATED with Hover Effects) */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <label className={labelClass}>Product Images</label>
            
            {/* Hidden Input for Images */}
            <input 
              type="file" 
              accept="image/*" 
              multiple 
              ref={imageInputRef}
              onChange={handleImageUpload}
              className="hidden" 
            />

            <div 
              onClick={() => imageInputRef.current?.click()}
              className="border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-purple-50 hover:border-purple-200 transition-colors cursor-pointer group"
            >
              <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-purple-200 transition-colors">
                <Upload className="text-purple-600" size={20} />
              </div>
              <p className="text-sm text-gray-600 font-medium">Drag & Drop or Browse</p>
            </div>
          </div>

          {/* Product Video Section */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <label className={labelClass}>Product Video</label>
            
            <input 
              type="file" 
              accept="video/*" 
              ref={videoInputRef}
              onChange={handleVideoUpload}
              className="hidden" 
            />

            <div 
              onClick={() => videoInputRef.current?.click()}
              className="border-2 border-dashed border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-purple-50 hover:border-purple-200 transition-colors cursor-pointer group"
            >
              <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-purple-200 transition-colors">
                 <FileVideo className="text-purple-600" size={20} />
              </div>
              <p className="text-sm text-gray-600 font-medium">Click to upload Product Video</p>
              <p className="text-xs text-gray-400 mt-1">MP4, MOV up to 10MB</p>
            </div>

            {videoFile && (
              <div className="mt-4 p-3 bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="h-8 w-8 bg-purple-600 rounded flex items-center justify-center flex-shrink-0">
                    <FileVideo className="text-white" size={16} />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-sm font-medium text-gray-700 truncate">{videoFile.name}</span>
                    <span className="text-xs text-gray-400">{(videoFile.size / 1024 / 1024).toFixed(2)} MB</span>
                  </div>
                </div>
                <button 
                  type="button" 
                  onClick={removeVideo}
                  className="p-1.5 hover:bg-red-100 text-gray-400 hover:text-red-500 rounded-md transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            )}
          </div>

          {/* Publishing Info Card */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className={labelClass}>Publish Date</label>
                <input
                  type="date"
                  name="publishDate"
                  value={formData.publishDate}
                  onChange={handleInputChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Publish Time</label>
                <input
                  type="text"
                  name="publishTime"
                  value={formData.publishTime}
                  onChange={handleInputChange}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <div>
                  <label className={labelClass}>Published Status</label>
                  <select
                    name="publishedStatus"
                    value={formData.publishedStatus}
                    onChange={handleInputChange}
                    className={`${inputClass} appearance-none cursor-pointer`}
                    style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em', paddingRight: '2.5rem' }}
                  >
                    <option value="Published">Published</option>
                    <option value="Draft">Draft</option>
                    <option value="Scheduled">Scheduled</option>
                  </select>
               </div>
               <div>
                  <label className={labelClass}>Product Tags</label>
                  <div className="w-full px-2 py-1.5 border border-gray-200 rounded-lg min-h-[42px] flex flex-wrap gap-2 items-center bg-white">
                    {formData.productTags.map((tag) => (
                      <span key={tag} className="bg-purple-100 text-purple-600 text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                        {tag} <X size={12} className="cursor-pointer hover:text-purple-800"/>
                      </span>
                    ))}
                  </div>
               </div>
            </div>

             <div className="mt-4">
                <label className={labelClass}>Availability</label>
                <select
                    name="availability"
                    value={formData.availability}
                    onChange={handleInputChange}
                    className={inputClass}
                  >
                    <option value="In Stock">In Stock</option>
                    <option value="Out of Stock">Out of Stock</option>
                  </select>
             </div>
          </div>

        </div>

        {/* --- Action Buttons --- */}
        <div className="xl:col-span-2 flex justify-end gap-3 mt-4">
          <button type="button" className="px-6 py-2.5 rounded-lg border border-purple-100 text-purple-600 font-semibold text-sm hover:bg-purple-50 transition-colors">
            Add Product <Plus size={16} className="inline ml-1" />
          </button>
          <button type="submit" className="px-6 py-2.5 rounded-lg bg-emerald-100 text-emerald-600 font-semibold text-sm hover:bg-emerald-200 transition-colors shadow-sm">
            Save Product <Save size={16} className="inline ml-1" />
          </button>
        </div>

      </form>
    </div>
  );
}