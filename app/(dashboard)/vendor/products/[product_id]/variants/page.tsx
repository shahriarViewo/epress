"use client";

import { useState, useEffect, use } from 'react';
import { Wand2 } from 'lucide-react'; // Icon for magic/auto generation

// --- Types ---
interface AttributeOption {
  id: number;
  value: string;
}

interface Attribute {
  id: number;
  name: string;
  options: AttributeOption[];
}

interface Variant {
  id: number;
  sku: string;
  price: string;
  stock_qty: number;
}

// --- Configuration ---
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api/v1';

export default function ProductVariantsPage({ params }: { params: Promise<{ product_id: string }> }) {
  // Unwrap params (Next.js 15 requirement)
  const resolvedParams = use(params);
  const productId = resolvedParams.product_id;

  // --- State ---
  const [attributes, setAttributes] = useState<Attribute[]>([]); 
  const [existingVariants, setExistingVariants] = useState<Variant[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Form State
  const [variantForm, setVariantForm] = useState({
    sku: '',
    price: '',
    stock_qty: '',
  });

  // Helper State for Dropdowns (e.g., { "Color": "1", "Size": "5" })
  const [selectedAttributeMap, setSelectedAttributeMap] = useState<Record<string, string>>({});

  // 1. Fetch Data (Attributes & Existing Variants)
  useEffect(() => {
    // TEMP: Hardcoded Auth
    const basicAuth = btoa("admin@gmail.com:admin"); 

    async function fetchData() {
      try {
        const headers = { 'Authorization': `Basic ${basicAuth}` };

        // Parallel fetch for better performance
        const [attrRes, prodRes] = await Promise.all([
          fetch(`${API_BASE_URL}/catalog/attributes/`, { headers }),
          fetch(`${API_BASE_URL}/products/${productId}/`, { headers })
        ]);

        if (attrRes.ok) {
          const attrData = await attrRes.json();
          // Handle pagination vs direct array
          if (Array.isArray(attrData)) {
            setAttributes(attrData);
          } else if (attrData.results && Array.isArray(attrData.results)) {
            setAttributes(attrData.results);
          } else {
            setAttributes([]); 
          }
        }

        if (prodRes.ok) {
          const prodData = await prodRes.json();
          setExistingVariants(prodData.variants || []);
        }

      } catch (error) {
        console.error("Error loading data", error);
      }
    }
    fetchData();
  }, [productId]);

  // --- HELPER: Auto Generate SKU ---
  const generateAutoSKU = () => {
    // Logic: P-{ProductId}-{OptionName}-{OptionName}-{Random4Digits}
    // Example: P-4-RED-LRG-4021
    
    let parts = [`P${productId}`];

    // Loop through selected attributes to find their text labels (e.g. "Red")
    Object.entries(selectedAttributeMap).forEach(([attrName, selectedId]) => {
        // Find the attribute object (e.g. Color)
        const attrObj = attributes.find(a => a.name === attrName);
        if (attrObj) {
            // Find the selected option (e.g. Red)
            const optionObj = attrObj.options.find(o => o.id.toString() === selectedId);
            if (optionObj) {
                // Add first 3 letters of option value (RED, S, LRG)
                parts.push(optionObj.value.substring(0, 3).toUpperCase());
            }
        }
    });

    // Add random suffix for uniqueness
    const randomSuffix = Math.floor(1000 + Math.random() * 9000); // 4 digit random
    parts.push(randomSuffix.toString());

    setVariantForm(prev => ({ ...prev, sku: parts.join('-') }));
  };


  // 2. Handle Variant Submission
  const handleCreateVariant = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const basicAuth = btoa("admin@gmail.com:admin");

    // Convert map values to integers
    const optionIds = Object.values(selectedAttributeMap)
      .map(id => parseInt(id))
      .filter(id => !isNaN(id));

    const payload = {
      sku: variantForm.sku,
      price: variantForm.price,
      stock_qty: parseInt(variantForm.stock_qty),
      variation_option_ids: optionIds
    };

    try {
      const res = await fetch(`${API_BASE_URL}/products/${productId}/variants/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${basicAuth}`,
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setMessage('✅ Variant Added!');
        // Refresh variants list
        const prodRes = await fetch(`${API_BASE_URL}/products/${productId}/`, {
             headers: { 'Authorization': `Basic ${basicAuth}` }
        });
        const prodData = await prodRes.json();
        setExistingVariants(prodData.variants || []);
        
        // Reset form
        setVariantForm({ sku: '', price: '', stock_qty: '' });
        setSelectedAttributeMap({});
      } else {
        const err = await res.json();
        setMessage('❌ Error: ' + JSON.stringify(err));
      }
    } catch (error) {
      setMessage('❌ Network Error');
    } finally {
      setLoading(false);
    }
  };

  // 3. Handle Media Upload
  const handleUpload = async (e: React.FormEvent, type: 'image' | 'video') => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form); 

    const endpoint = type === 'image' 
      ? `${API_BASE_URL}/products/${productId}/images/`
      : `${API_BASE_URL}/products/${productId}/videos/`;

    const basicAuth = btoa("admin@gmail.com:admin");

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Authorization': `Basic ${basicAuth}` }, 
        body: formData,
      });

      if (res.ok) {
        alert(`${type === 'image' ? 'Image' : 'Video'} uploaded successfully!`);
        form.reset();
      } else {
        const errorData = await res.json();
        alert(`Upload failed: ${JSON.stringify(errorData)}`);
      }
    } catch (error) {
      console.error(error);
      alert('Network Error during upload');
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* HEADER */}
      <div className="flex justify-between items-center border-b pb-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Manage Variants & Media</h1>
          <p className="text-gray-500 text-sm mt-1">Product ID: #{productId}</p>
        </div>
        <button 
            onClick={() => window.location.href = '/vendor/products'}
            className="text-sm font-medium text-gray-600 hover:text-black hover:underline"
        >
            ← Back to Product List
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* LEFT COLUMN: Add Variant */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 h-fit">
          <h2 className="text-xl font-bold mb-6 text-gray-800 flex items-center gap-2">
            <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">1</span>
            Create Variant
          </h2>
          
          <form onSubmit={handleCreateVariant} className="space-y-5">
            
            {/* Dynamic Attribute Selectors (MOVED UP so SKU gen works better) */}
            <div className="p-4 bg-gray-50 rounded-md border border-gray-100">
              <h3 className="text-sm font-bold text-gray-800 mb-3">Select Attributes First</h3>
              
              {attributes.length === 0 && (
                <p className="text-xs text-gray-400 italic">
                   Loading attributes... (or none found in database)
                </p>
              )}
              
              <div className="grid grid-cols-2 gap-4">
                {attributes.map(attr => (
                  <div key={attr.id}>
                    <label className="block text-xs font-medium text-gray-600 mb-1">{attr.name}</label>
                    <select 
                      className="w-full p-2 text-sm border border-gray-300 rounded bg-white outline-none focus:ring-1 focus:ring-black text-black"
                      value={selectedAttributeMap[attr.name] || ""}
                      onChange={(e) => setSelectedAttributeMap({ ...selectedAttributeMap, [attr.name]: e.target.value })}
                    >
                      <option value="">Select {attr.name}</option>
                      {attr.options?.map((opt) => (
                        <option key={opt.id} value={opt.id}>{opt.value}</option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                   <label className="block text-xs font-bold text-gray-700 uppercase">SKU Code</label>
                   <button 
                     type="button" 
                     onClick={generateAutoSKU}
                     className="text-[10px] flex items-center gap-1 text-blue-600 hover:text-blue-800 font-bold bg-blue-50 px-2 py-0.5 rounded"
                     title="Generate Random SKU based on attributes"
                   >
                     <Wand2 size={10} /> Auto
                   </button>
                </div>
                <input 
                  type="text" required placeholder="e.g. TSHIRT-BLK-S"
                  className="w-full p-2.5 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-black transition text-black"
                  value={variantForm.sku}
                  onChange={e => setVariantForm({...variantForm, sku: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Stock</label>
                <input 
                  type="number" required placeholder="100"
                  className="w-full p-2.5 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-black transition text-black"
                  value={variantForm.stock_qty}
                  onChange={e => setVariantForm({...variantForm, stock_qty: e.target.value})}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Price Override ($)</label>
              <input 
                type="number" step="0.01" required placeholder="25.00"
                className="w-full p-2.5 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-black transition text-black"
                value={variantForm.price}
                onChange={e => setVariantForm({...variantForm, price: e.target.value})}
              />
            </div>

            <button 
              type="submit" 
              disabled={loading} 
              className="w-full bg-black text-white py-3 rounded-md font-bold hover:bg-gray-800 transition-all disabled:opacity-50"
            >
              {loading ? 'Saving...' : '+ Add Variant'}
            </button>
            
            {message && (
              <div className={`p-3 rounded text-sm font-medium ${message.includes('Error') ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-700'}`}>
                {message}
              </div>
            )}
          </form>

          {/* List Existing Variants */}
          <div className="mt-8 border-t pt-6">
            <h3 className="text-sm font-bold text-gray-900 mb-3">Existing Variants ({existingVariants.length})</h3>
            <div className="max-h-64 overflow-y-auto space-y-2 pr-1">
                {existingVariants.length === 0 && <p className="text-sm text-gray-400">No variants created yet.</p>}
                {existingVariants.map((v) => (
                    <div key={v.id} className="flex justify-between items-center bg-gray-50 p-3 rounded border border-gray-100">
                      <span className="font-semibold text-gray-800 text-sm">{v.sku}</span>
                      <span className="font-mono text-gray-600 text-sm">${v.price}</span>
                    </div>
                ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Media Uploads */}
        <div className="space-y-6">
          
          {/* Image Upload */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
              <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">2</span>
              Upload Images
            </h2>
            <form onSubmit={(e) => handleUpload(e, 'image')} className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center hover:bg-gray-50 transition">
                <input type="file" name="file_upload" accept="image/*" required className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-black file:text-white hover:file:bg-gray-800"/>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Assign to Variant (Optional)</label>
                <select name="variant" className="w-full p-2 border rounded text-sm bg-white outline-none focus:ring-1 focus:ring-black text-black">
                  <option value="">Apply to All Variants (Global)</option>
                  {existingVariants.map((v) => (
                    <option key={v.id} value={v.id}>{v.sku}</option>
                  ))}
                </select>
              </div>

              <button type="submit" className="w-full border border-black text-black py-2 rounded font-semibold hover:bg-black hover:text-white transition-colors">
                Upload Image
              </button>
            </form>
          </div>

          {/* Video Upload */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
              <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">3</span>
              Upload Video
            </h2>
            <form onSubmit={(e) => handleUpload(e, 'video')} className="space-y-4">
              
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center hover:bg-gray-50 transition">
                <input 
                  type="file" 
                  name="file_upload" 
                  accept="video/*" 
                  required 
                  className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-black file:text-white hover:file:bg-gray-800"
                />
              </div>
              
              <input 
                type="text" 
                name="title" 
                required
                placeholder="Video Title (e.g. 360 View)" 
                className="w-full p-2 border rounded text-sm outline-none focus:ring-1 focus:ring-black text-black" 
              />
              
              <textarea 
                name="description" 
                placeholder="Video Description (Optional)" 
                rows={2}
                className="w-full p-2 border rounded text-sm resize-none outline-none focus:ring-1 focus:ring-black text-black" 
              />

              <button type="submit" className="w-full border border-black text-black py-2 rounded font-semibold hover:bg-black hover:text-white transition-colors">
                Upload Video
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}