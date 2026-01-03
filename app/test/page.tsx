// "use client";

// import React, { useState, useRef, useEffect } from 'react';
// import { Save, Info, ArrowRight } from 'lucide-react';
// import { useRouter } from 'next/navigation';

// // --- Types ---
// interface Category {
//   id: number;
//   category_name: string;
// }
// interface Brand {
//   id: number;
//   brand_name: string;
// }

// export default function AddProductPage() {
//   const router = useRouter();
  
//   // --- 1. Form State (Matches ProductSerializer) ---
//   const [formData, setFormData] = useState({
//     product_name: '',
//     category: '', // ID as string
//     brand: '',    // ID as string
//     short_description: '', // Required by your model
//     description: '',       // Required by your model
    
//     // Physical Specs (Optional but in your model)
//     weight_name: 'kg', 
//     weight_value: '',
//     length: '',
//     width: '',
//     height: '',
    
//     status: 'draft',
//   });

//   const [categories, setCategories] = useState<Category[]>([]); 
//   const [brands, setBrands] = useState<Brand[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState('');

//   // --- 2. Mock Data Load (Replace with API fetch later) ---
//   useEffect(() => {
//     // You will later replace this with: fetch('/api/v1/catalog/categories/')
//     setCategories([
//       { id: 1, category_name: "Electronics" },
//       { id: 2, category_name: "Clothing" }
//     ]);
//     setBrands([
//       { id: 1, brand_name: "Nike" },
//       { id: 2, brand_name: "Samsung" }
//     ]);
//   }, []);

//   // --- 3. Handlers ---
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage('');

//     // Prepare Payload for API
//     // Note: We convert empty strings to null for optional numbers
//     const payload = {
//       ...formData,
//       category: parseInt(formData.category),
//       brand: formData.brand ? parseInt(formData.brand) : null,
//       weight_value: formData.weight_value ? parseFloat(formData.weight_value) : null,
//       length: formData.length ? parseFloat(formData.length) : null,
//       width: formData.width ? parseFloat(formData.width) : null,
//       height: formData.height ? parseFloat(formData.height) : null,
//     };

//     console.log("Submitting Payload:", payload);

//     // --- MOCK API CALL (To be replaced) ---
//     setTimeout(() => {
//       // Simulate Success: backend returns { id: 123, ... }
//       alert("✅ Product Container Created! Now Redirecting to Add Variants & Price...");
//       router.push(`/vendor/products/123/variants`); // Redirect with Fake ID for now
//       setLoading(false);
//     }, 1000);
//   };

//   // Helper classes
//   const inputClass = "w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-sm text-gray-700 bg-white placeholder-gray-400";
//   const labelClass = "block text-sm font-semibold text-gray-700 mb-2";

//   return (
//     <div className="min-h-screen bg-gray-50/50 p-4 md:p-6 pb-20 font-sans">
      
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <div>
//           <h1 className="text-xl md:text-2xl font-bold text-gray-800">Create Product</h1>
//           <p className="text-sm text-gray-500 mt-1">Step 1: General Information</p>
//         </div>
//         <div className="hidden sm:flex items-center gap-2 text-sm text-gray-500">
//           <span className="text-purple-600 font-bold">1. Info</span>
//           <ArrowRight size={14} />
//           <span>2. Variants & Price</span>
//           <ArrowRight size={14} />
//           <span>3. Media</span>
//         </div>
//       </div>

//       <form onSubmit={handleSubmit} className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
//         {/* --- LEFT COLUMN (Main Details) --- */}
//         <div className="xl:col-span-2 space-y-6">
//           <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-6">
            
//             {/* Name */}
//             <div>
//               <label className={labelClass}>Product Name <span className="text-red-500">*</span></label>
//               <input
//                 type="text"
//                 name="product_name"
//                 value={formData.product_name}
//                 onChange={handleInputChange}
//                 placeholder="e.g. Wireless Noise Cancelling Headphones"
//                 className={inputClass}
//                 required
//               />
//             </div>

//             {/* Category & Brand */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className={labelClass}>Category <span className="text-red-500">*</span></label>
//                 <select 
//                   name="category" 
//                   value={formData.category} 
//                   onChange={handleInputChange} 
//                   className={inputClass}
//                   required
//                 >
//                   <option value="">Select Category</option>
//                   {categories.map(cat => (
//                     <option key={cat.id} value={cat.id}>{cat.category_name}</option>
//                   ))}
//                 </select>
//               </div>
//               <div>
//                 <label className={labelClass}>Brand (Optional)</label>
//                 <select 
//                   name="brand" 
//                   value={formData.brand} 
//                   onChange={handleInputChange} 
//                   className={inputClass}
//                 >
//                   <option value="">Select Brand</option>
//                   {brands.map(brand => (
//                     <option key={brand.id} value={brand.id}>{brand.brand_name}</option>
//                   ))}
//                 </select>
//               </div>
//             </div>

//             {/* Short Description */}
//             <div>
//               <label className={labelClass}>Short Description <span className="text-red-500">*</span></label>
//               <input
//                 type="text"
//                 name="short_description"
//                 value={formData.short_description}
//                 onChange={handleInputChange}
//                 placeholder="Brief summary for list views (e.g. 'Best-in-class audio')"
//                 className={inputClass}
//                 required
//               />
//             </div>

//             {/* Full Description */}
//             <div>
//               <label className={labelClass}>Full Description <span className="text-red-500">*</span></label>
//               <textarea
//                 name="description"
//                 value={formData.description}
//                 onChange={handleInputChange}
//                 rows={6}
//                 className={inputClass}
//                 placeholder="Detailed product information..."
//                 required
//               />
//             </div>
//           </div>
//         </div>

//         {/* --- RIGHT COLUMN (Specs & Status) --- */}
//         <div className="space-y-6">
          
//           {/* NOTICE CARD */}
//           <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
//              <div className="flex gap-3">
//                <Info className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
//                <div>
//                  <h4 className="text-sm font-bold text-blue-800">Missing Price?</h4>
//                  <p className="text-xs text-blue-600 mt-1 leading-relaxed">
//                    In our system, Price, Stock, and Images are attached to <strong>Variants</strong>. 
//                    <br/><br/>
//                    Click "Save & Continue" to go to <strong>Step 2</strong>, where you can add the price and upload media.
//                  </p>
//                </div>
//              </div>
//           </div>

//           {/* Shipping Specs (From your Product Model) */}
//           <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
//             <h3 className="font-bold text-gray-800 mb-4 text-sm">Shipping Dimensions (Optional)</h3>
            
//             <div className="grid grid-cols-2 gap-3 mb-4">
//                <div>
//                  <label className="text-xs font-semibold text-gray-600 mb-1 block">Weight Unit</label>
//                  <select name="weight_name" value={formData.weight_name} onChange={handleInputChange} className={inputClass}>
//                    <option value="kg">kg</option>
//                    <option value="gm">gm</option>
//                    <option value="lb">lb</option>
//                  </select>
//                </div>
//                <div>
//                  <label className="text-xs font-semibold text-gray-600 mb-1 block">Value</label>
//                  <input type="number" name="weight_value" value={formData.weight_value} onChange={handleInputChange} placeholder="0.0" className={inputClass} />
//                </div>
//             </div>

//             <div className="grid grid-cols-3 gap-2">
//                <div>
//                  <label className="text-xs font-semibold text-gray-600 mb-1 block">L</label>
//                  <input type="number" name="length" value={formData.length} onChange={handleInputChange} placeholder="0.0" className={inputClass} />
//                </div>
//                <div>
//                  <label className="text-xs font-semibold text-gray-600 mb-1 block">W</label>
//                  <input type="number" name="width" value={formData.width} onChange={handleInputChange} placeholder="0.0" className={inputClass} />
//                </div>
//                <div>
//                  <label className="text-xs font-semibold text-gray-600 mb-1 block">H</label>
//                  <input type="number" name="height" value={formData.height} onChange={handleInputChange} placeholder="0.0" className={inputClass} />
//                </div>
//             </div>
//           </div>

//           {/* Status */}
//           <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
//              <label className={labelClass}>Initial Status</label>
//              <select name="status" value={formData.status} onChange={handleInputChange} className={inputClass}>
//                <option value="draft">Draft (Private)</option>
//                <option value="pending">Submit for Review</option>
//              </select>
//           </div>

//           <button 
//             type="submit" 
//             disabled={loading}
//             className="w-full py-3.5 rounded-xl bg-black text-white font-bold text-sm hover:bg-gray-800 transition-all shadow-lg flex items-center justify-center gap-2"
//           >
//             {loading ? "Saving..." : "Save & Continue to Step 2"}
//             <ArrowRight size={18} />
//           </button>

//         </div>
//       </form>
//     </div>
//   );
// }
"use client";

import React, { useState, useEffect } from 'react';
import { 
  Plus, Trash2, Image as ImageIcon, FileVideo, 
  Save, ArrowLeft, CheckCircle 
} from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';

// --- TYPES (Mocking your Backend) ---
interface Attribute {
  id: number;
  name: string; // e.g. "Size", "Color"
  options: { id: number; value: string; color_code?: string }[];
}

interface Variant {
  id: number;
  sku: string;
  price: string;
  stock: number;
  attributes: string[]; // Display string e.g. ["Red", "XL"]
}

export default function ProductVariantsPage() {
  const params = useParams(); // Get product ID from URL
  const router = useRouter();
  
  // --- STATE ---
  const [attributes, setAttributes] = useState<Attribute[]>([]);
  
  // Form State for NEW Variant
  const [newVariant, setNewVariant] = useState({
    sku: '',
    price: '',
    stock: '',
    selectedOptions: {} as Record<string, string>, // { "Size": "1", "Color": "5" }
  });

  // List of added Variants
  const [variantsList, setVariantsList] = useState<Variant[]>([]);

  // Media State
  const [images, setImages] = useState<File[]>([]);
  const [video, setVideo] = useState<File | null>(null);

  // --- MOCK DATA LOAD ---
  useEffect(() => {
    // 1. Fetch Available Attributes from Backend
    setAttributes([
      {
        id: 1,
        name: "Size",
        options: [
          { id: 10, value: "S" },
          { id: 11, value: "M" },
          { id: 12, value: "L" },
          { id: 13, value: "XL" }
        ]
      },
      {
        id: 2,
        name: "Color",
        options: [
          { id: 20, value: "Red", color_code: "#FF0000" },
          { id: 21, value: "Blue", color_code: "#0000FF" },
          { id: 22, value: "Black", color_code: "#000000" }
        ]
      }
    ]);
  }, []);

  // --- HANDLERS ---
  
  const handleAddVariant = () => {
    // Simple Validation
    if (!newVariant.price || !newVariant.stock) {
      alert("Please enter Price and Stock");
      return;
    }

    // Create a mock variant object for UI list
    const addedVariant: Variant = {
      id: Date.now(), // Fake ID
      sku: newVariant.sku || `GEN-${Date.now()}`,
      price: newVariant.price,
      stock: parseInt(newVariant.stock),
      attributes: Object.values(newVariant.selectedOptions).map(optId => {
        // Find label for display (Complex lookup just for demo)
        for (const attr of attributes) {
          const found = attr.options.find(o => o.id.toString() === optId);
          if (found) return found.value;
        }
        return "Unknown";
      })
    };

    setVariantsList([...variantsList, addedVariant]);
    // Reset Form
    setNewVariant({ sku: '', price: '', stock: '', selectedOptions: {} });
  };

  const handleDeleteVariant = (id: number) => {
    setVariantsList(variantsList.filter(v => v.id !== id));
  };

  const handleFinish = () => {
    alert("🎉 Product Creation Complete! Redirecting to List...");
    router.push('/vendor/products');
  };

  // Styles
  const inputClass = "w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm";
  const labelClass = "block text-xs font-bold text-gray-500 uppercase mb-1";

  return (
    <div className="min-h-screen bg-gray-50/50 p-4 md:p-6 pb-20 font-sans">
      
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">Add Variants & Media</h1>
          <p className="text-sm text-gray-500 mt-1">Step 2: Define Price, Stock and Visuals</p>
        </div>
        <div className="flex items-center gap-3">
           <button onClick={() => router.back()} className="text-gray-500 text-sm hover:underline flex items-center gap-1">
             <ArrowLeft size={16}/> Back
           </button>
           <button 
             onClick={handleFinish}
             className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg text-sm flex items-center gap-2 shadow-sm transition-colors"
           >
             <CheckCircle size={16} /> Publish Product
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        {/* --- LEFT COLUMN: VARIANT CREATOR --- */}
        <div className="xl:col-span-2 space-y-6">
          
          {/* 1. ADD NEW VARIANT FORM */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">1</span>
              Add a Variant (SKU)
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* Dynamic Attributes (Size/Color) */}
              {attributes.map(attr => (
                <div key={attr.id}>
                  <label className={labelClass}>{attr.name}</label>
                  <select 
                    className={inputClass}
                    value={newVariant.selectedOptions[attr.id] || ""}
                    onChange={(e) => setNewVariant({
                      ...newVariant,
                      selectedOptions: { ...newVariant.selectedOptions, [attr.id]: e.target.value }
                    })}
                  >
                    <option value="">Select {attr.name}</option>
                    {attr.options.map(opt => (
                      <option key={opt.id} value={opt.id}>{opt.value}</option>
                    ))}
                  </select>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
               <div className="col-span-1">
                  <label className={labelClass}>Price ($)</label>
                  <input 
                    type="number" 
                    className={inputClass} 
                    placeholder="0.00"
                    value={newVariant.price}
                    onChange={(e) => setNewVariant({...newVariant, price: e.target.value})}
                  />
               </div>
               <div className="col-span-1">
                  <label className={labelClass}>Stock Qty</label>
                  <input 
                    type="number" 
                    className={inputClass} 
                    placeholder="0" 
                    value={newVariant.stock}
                    onChange={(e) => setNewVariant({...newVariant, stock: e.target.value})}
                  />
               </div>
               <div className="col-span-1">
                  <label className={labelClass}>SKU (Optional)</label>
                  <input 
                    type="text" 
                    className={inputClass} 
                    placeholder="Auto-generated"
                    value={newVariant.sku}
                    onChange={(e) => setNewVariant({...newVariant, sku: e.target.value})}
                  />
               </div>
            </div>

            <button 
              onClick={handleAddVariant}
              className="w-full py-2.5 border-2 border-dashed border-gray-300 text-gray-600 font-bold rounded-lg hover:border-purple-500 hover:text-purple-600 hover:bg-purple-50 transition-all flex items-center justify-center gap-2"
            >
              <Plus size={18} /> Add This Variant
            </button>
          </div>

          {/* 2. VARIANT LIST TABLE */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
              <h3 className="font-bold text-gray-700 text-sm">Created Variants ({variantsList.length})</h3>
            </div>
            
            {variantsList.length === 0 ? (
              <div className="p-8 text-center text-gray-400 text-sm">
                No variants added yet. Add one above!
              </div>
            ) : (
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-gray-500 uppercase bg-gray-50 border-b border-gray-100">
                  <tr>
                    <th className="px-4 py-3">Attributes</th>
                    <th className="px-4 py-3">Price</th>
                    <th className="px-4 py-3">Stock</th>
                    <th className="px-4 py-3">SKU</th>
                    <th className="px-4 py-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {variantsList.map((v) => (
                    <tr key={v.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">
                        {v.attributes.join(" / ")}
                      </td>
                      <td className="px-4 py-3">${v.price}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 rounded text-xs font-bold ${v.stock > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                          {v.stock}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-500 font-mono text-xs">{v.sku}</td>
                      <td className="px-4 py-3 text-right">
                        <button onClick={() => handleDeleteVariant(v.id)} className="text-red-400 hover:text-red-600 transition">
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {/* --- RIGHT COLUMN: MEDIA --- */}
        <div className="space-y-6">
          
          {/* 3. IMAGE UPLOAD */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">2</span>
              Gallery Images
            </h2>
            
            <div className="grid grid-cols-3 gap-2 mb-4">
              {/* Preview Grid */}
              {images.map((img, idx) => (
                <div key={idx} className="aspect-square rounded-lg bg-gray-100 relative overflow-hidden group border border-gray-200">
                  <img src={URL.createObjectURL(img)} alt="preview" className="w-full h-full object-cover" />
                  <button 
                    onClick={() => setImages(images.filter((_, i) => i !== idx))}
                    className="absolute top-1 right-1 bg-white/80 p-1 rounded-full text-red-500 opacity-0 group-hover:opacity-100 transition"
                  >
                    <Trash2 size={12} />
                  </button>
                </div>
              ))}
              
              {/* Upload Button */}
              <label className="aspect-square rounded-lg border-2 border-dashed border-gray-200 flex flex-col items-center justify-center cursor-pointer hover:bg-purple-50 hover:border-purple-200 transition-colors">
                <ImageIcon className="text-gray-400 mb-1" size={20} />
                <span className="text-[10px] text-gray-500 font-bold uppercase">Add</span>
                <input 
                  type="file" 
                  multiple 
                  accept="image/*" 
                  className="hidden" 
                  onChange={(e) => {
                    if (e.target.files) setImages([...images, ...Array.from(e.target.files)]);
                  }}
                />
              </label>
            </div>
            <p className="text-xs text-gray-400">Supported: JPG, PNG, WEBP</p>
          </div>

          {/* 4. VIDEO UPLOAD */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">3</span>
              Video (Optional)
            </h2>
            
            {!video ? (
              <label className="w-full h-32 border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:bg-purple-50 hover:border-purple-200 transition-colors">
                <FileVideo className="text-gray-400 mb-2" size={24} />
                <span className="text-sm text-gray-600 font-medium">Upload Video</span>
                <span className="text-xs text-gray-400 mt-1">MP4, MOV (Max 50MB)</span>
                <input 
                  type="file" 
                  accept="video/*" 
                  className="hidden" 
                  onChange={(e) => e.target.files && setVideo(e.target.files[0])}
                />
              </label>
            ) : (
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="bg-purple-600 text-white p-2 rounded">
                    <FileVideo size={16}/>
                  </div>
                  <span className="text-sm text-gray-700 truncate">{video.name}</span>
                </div>
                <button onClick={() => setVideo(null)} className="text-red-400 hover:text-red-600">
                  <Trash2 size={16}/>
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}