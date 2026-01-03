"use client";

import { useState, useEffect } from 'react';
import { Tag, Trash2, AlertCircle, Image as ImageIcon, Upload } from 'lucide-react';

const API_BASE = "http://127.0.0.1:8000/api/v1/catalog";
const BASIC_AUTH = btoa("admin@gmail.com:admin");
// ⚠️ Note: For file uploads, we do NOT set 'Content-Type': 'application/json'
// The browser sets the correct boundary automatically when using FormData.
const AUTH_HEADER = { 'Authorization': `Basic ${BASIC_AUTH}` };

export default function BrandsView() {
  const [brands, setBrands] = useState<any[]>([]);
  
  // Form State
  const [brandName, setBrandName] = useState('');
  const [priority, setPriority] = useState('1');
  const [logoFile, setLogoFile] = useState<File | null>(null); // Store the actual file

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const fetchBrands = async () => {
    try {
      const res = await fetch(`${API_BASE}/brands/`, { headers: AUTH_HEADER });
      if(res.ok) setBrands(await res.json());
    } catch (e) { console.error(e); }
  };

  useEffect(() => { fetchBrands(); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // 1. Create FormData object (Required for Files)
    const formData = new FormData();
    formData.append('brand_name', brandName);
    formData.append('priority', priority);
    formData.append('is_global', 'true');
    
    // Only append logo if user selected one
    if (logoFile) {
      formData.append('logo', logoFile);
    }

    try {
      const res = await fetch(`${API_BASE}/brands/`, { 
        method: 'POST', 
        headers: AUTH_HEADER, // NO 'Content-Type': 'application/json'
        body: formData 
      });

      if (res.ok) {
        // Reset Form
        setBrandName('');
        setPriority('1');
        setLogoFile(null);
        // Reset the file input visually
        (document.getElementById('brandLogoInput') as HTMLInputElement).value = ''; 
        
        fetchBrands();
      } else {
        const err = await res.json();
        setError("Error: " + JSON.stringify(err));
      }
    } catch (e) {
      setError("Network Error");
    } finally {
        setLoading(false);
    }
  };

  const deleteBrand = async (id: number) => {
    if(!confirm("Delete Brand?")) return;
    await fetch(`${API_BASE}/brands/${id}/`, { method: 'DELETE', headers: AUTH_HEADER });
    fetchBrands();
  };

  return (
    <div className="space-y-8">
      
      {/* 1. Add Brand Form */}
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
         <h3 className="font-bold text-gray-800 mb-4 text-sm uppercase">Add Global Brand</h3>
         
         {error && (
            <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded flex items-center gap-2">
                <AlertCircle size={16}/> {error}
            </div>
         )}

         <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-end">
            <div className="flex-1 w-full">
              <label className="text-xs font-bold text-gray-500 uppercase mb-1 block">Brand Name</label>
              <input 
                className="w-full p-2.5 border border-gray-300 rounded text-sm bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
                required 
                placeholder="e.g. Nike"
                value={brandName} 
                onChange={e => setBrandName(e.target.value)} 
              />
            </div>
            
            <div className="flex-1 w-full">
              <label className="text-xs font-bold text-gray-500 uppercase mb-1 block">Brand Logo</label>
              <div className="relative">
                <input 
                  id="brandLogoInput"
                  type="file" 
                  accept="image/*"
                  className="w-full p-2 border border-gray-300 rounded text-sm bg-white text-gray-500 file:mr-4 file:py-1 file:px-2 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
                  onChange={e => {
                    if (e.target.files && e.target.files[0]) {
                        setLogoFile(e.target.files[0]);
                    }
                  }} 
                />
              </div>
            </div>
            
            <div className="w-full md:w-24">
              <label className="text-xs font-bold text-gray-500 uppercase mb-1 block">Priority</label>
              <input 
                type="number" 
                className="w-full p-2.5 border border-gray-300 rounded text-sm bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
                value={priority} 
                onChange={e => setPriority(e.target.value)} 
              />
            </div>
            
            <button 
                disabled={loading}
                className="w-full md:w-auto bg-black text-white px-6 py-2.5 rounded font-bold text-sm h-[42px] hover:bg-gray-800 transition-colors shadow-sm flex items-center justify-center gap-2"
            >
                {loading ? 'Uploading...' : <><Upload size={16}/> Add Brand</>}
            </button>
         </form>
      </div>

      {/* 2. Brand Grid */}
      <div>
        <h3 className="font-bold text-gray-800 mb-4 text-lg">Existing Brands ({brands.length})</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {brands.map(b => (
            <div key={b.id} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm relative group hover:border-gray-400 hover:shadow-md transition-all">
                <div className="h-16 w-full flex items-center justify-center mb-3 bg-gray-50 rounded-lg overflow-hidden p-2">
                    {/* The API now returns a real image URL */}
                    {b.logo ? (
                        <img src={b.logo} className="h-full w-full object-contain" alt={b.brand_name}/>
                    ) : (
                        <ImageIcon className="text-gray-300" size={24}/>
                    )}
                </div>
                
                <p className="font-bold text-center text-sm text-gray-900 truncate" title={b.brand_name}>
                    {b.brand_name}
                </p>
                <button 
                    onClick={() => deleteBrand(b.id)} 
                    className="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow-sm text-gray-400 hover:text-red-600 hover:bg-red-50 opacity-0 group-hover:opacity-100 transition-all"
                >
                    <Trash2 size={14}/>
                </button>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
}