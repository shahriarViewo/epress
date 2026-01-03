"use client";

import { useState, useEffect } from 'react';
import { Plus, Trash2, AlertCircle } from 'lucide-react';

const API_BASE = "http://127.0.0.1:8000/api/v1/catalog";
const BASIC_AUTH = btoa("admin@gmail.com:admin");
const HEADERS = {
  'Content-Type': 'application/json',
  'Authorization': `Basic ${BASIC_AUTH}`
};

export default function AttributesView() {
  const [attributes, setAttributes] = useState<any[]>([]);
  const [selectedAttr, setSelectedAttr] = useState<any | null>(null);
  
  // Forms
  const [newName, setNewName] = useState('');
  const [newType, setNewType] = useState('text');
  
  // Option Form State
  const [newOptValue, setNewOptValue] = useState('');
  const [newOptColor, setNewOptColor] = useState('#000000'); // Default Black

  const fetchAttrs = async () => {
    try {
      const res = await fetch(`${API_BASE}/attributes/`, { headers: HEADERS });
      const data = await res.json();
      setAttributes(data.results || data);
    } catch (e) { console.error(e); }
  };
  
  useEffect(() => { fetchAttrs(); }, []);

  // --- 1. Create Attribute ---
  const createAttr = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch(`${API_BASE}/attributes/`, { 
      method: 'POST', headers: HEADERS, 
      body: JSON.stringify({ name: newName, display_mode: newType, is_global: true }) 
    });
    setNewName(''); fetchAttrs();
  };

  // --- 2. Create Option ---
  const createOption = async (e: React.FormEvent) => {
    e.preventDefault();
    if(!selectedAttr) return;

    const payload: any = { variation: selectedAttr.id, value: newOptValue };
    if(selectedAttr.display_mode === 'color') payload.color_code = newOptColor;
    
    try {
      const res = await fetch(`${API_BASE}/options/`, { 
        method: 'POST', 
        headers: HEADERS, 
        body: JSON.stringify(payload) 
      });

      if (res.ok) {
        setNewOptValue('');
        // Refresh selected attribute to see new options
        const updatedRes = await fetch(`${API_BASE}/attributes/${selectedAttr.id}/`, { headers: HEADERS });
        const updatedData = await updatedRes.json();
        
        setSelectedAttr(updatedData);
        fetchAttrs(); 
      } else {
        const err = await res.json();
        alert("❌ Failed to add: " + JSON.stringify(err));
      }
    } catch (err) {
      alert("Network Error");
    }
  };

  // --- 3. Delete Attribute ---
  const deleteAttr = async (id: number) => {
    if(!confirm("Delete this attribute?")) return;
    await fetch(`${API_BASE}/attributes/${id}/`, { method: 'DELETE', headers: HEADERS });
    if(selectedAttr?.id === id) setSelectedAttr(null);
    fetchAttrs();
  };

  // --- 4. Delete Option ---
  const deleteOpt = async (id: number) => {
    if(!confirm("Delete this option?")) return;
    
    const res = await fetch(`${API_BASE}/options/${id}/`, { method: 'DELETE', headers: HEADERS });
    
    if (res.ok) {
        const updatedRes = await fetch(`${API_BASE}/attributes/${selectedAttr.id}/`, { headers: HEADERS });
        setSelectedAttr(await updatedRes.json());
    } else {
        alert("❌ Failed to delete option. It might be used by a product.");
    }
  };

  // --- Helper: Handle Hex Change ---
  const handleHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setNewOptColor(val); // Always update text input
    // Only update color picker if it's a valid hex length
    // (Browsers auto-fix invalid hex in color inputs, but better to be safe)
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Col: Attributes List */}
      <div className="lg:col-span-1 space-y-4">
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
           <form onSubmit={createAttr} className="flex gap-2">
             <input 
                className="w-full p-2 border border-gray-300 rounded text-sm bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Name (e.g. Size)" 
                value={newName} 
                onChange={e=>setNewName(e.target.value)} 
                required
             />
             <select 
                className="p-2 border border-gray-300 rounded text-sm bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
                value={newType} 
                onChange={e=>setNewType(e.target.value)}
             >
               <option value="text">Text</option><option value="color">Color</option>
             </select>
             <button className="bg-black text-white p-2 rounded hover:bg-gray-800 transition"><Plus size={16}/></button>
           </form>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          {attributes.map(a => (
            <div key={a.id} onClick={() => setSelectedAttr(a)} 
              className={`p-3 border-b border-gray-100 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors ${selectedAttr?.id===a.id ? 'bg-purple-50 border-l-4 border-l-purple-600':''}`}>
               <span className="text-sm font-medium text-gray-800">{a.name}</span>
               <button onClick={(e)=>{e.stopPropagation(); deleteAttr(a.id)}} className="text-gray-300 hover:text-red-500"><Trash2 size={14}/></button>
            </div>
          ))}
          {attributes.length === 0 && <p className="p-4 text-sm text-gray-400 text-center">No attributes found.</p>}
        </div>
      </div>

      {/* Right Col: Options Manager */}
      <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-200 min-h-[400px] shadow-sm">
        {selectedAttr ? (
          <>
            <h3 className="font-bold text-lg mb-4 text-gray-900">{selectedAttr.name} Options</h3>
            
            {/* Add Option Form */}
            <form onSubmit={createOption} className="flex flex-col md:flex-row gap-3 mb-6 md:items-end">
              <div className="flex-1">
                <label className="text-xs font-bold text-gray-500 uppercase mb-1 block">
                    {selectedAttr.display_mode === 'color' ? 'Color Name' : 'Value'}
                </label>
                <input 
                    className="w-full p-2 border border-gray-300 rounded text-sm bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder={selectedAttr.display_mode === 'color' ? "e.g. Red" : "e.g. Small, XL"} 
                    value={newOptValue} 
                    onChange={e=>setNewOptValue(e.target.value)} 
                    required
                />
              </div>
              
              {/* Conditional Inputs for Color Mode */}
              {selectedAttr.display_mode === 'color' && (
                 <div className="flex gap-2 w-full md:w-auto">
                    {/* 1. Color Picker */}
                    <div>
                        <label className="text-xs font-bold text-gray-500 uppercase mb-1 block">Pick</label>
                        <input 
                            type="color" 
                            className="block w-10 h-10 p-1 border border-gray-300 rounded cursor-pointer" 
                            value={newOptColor} 
                            onChange={e=>setNewOptColor(e.target.value)}
                        />
                    </div>
                    {/* 2. Hex Text Input */}
                    <div className="flex-1 md:w-28">
                        <label className="text-xs font-bold text-gray-500 uppercase mb-1 block">Hex Code</label>
                        <input 
                            type="text" 
                            className="w-full h-10 p-2 border border-gray-300 rounded text-sm uppercase bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 font-mono"
                            placeholder="#000000"
                            value={newOptColor} 
                            onChange={handleHexChange}
                            maxLength={7}
                        />
                    </div>
                 </div>
              )}
              
              <button className="bg-purple-600 text-white px-6 py-2 rounded font-bold text-sm h-10 hover:bg-purple-700 transition shadow-sm w-full md:w-auto">
                Add
              </button>
            </form>

            {/* Options Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {selectedAttr.options && selectedAttr.options.length > 0 ? (
                  selectedAttr.options.map((o: any) => (
                    <div key={o.id} className="p-2 border border-gray-200 rounded flex justify-between items-center bg-gray-50 hover:border-purple-300 transition group">
                       <div className="flex items-center gap-2 overflow-hidden">
                          {selectedAttr.display_mode === 'color' && (
                            <div className="w-6 h-6 rounded-full border border-gray-300 shrink-0 shadow-sm" style={{background: o.color_code}}></div>
                          )}
                          <div className="flex flex-col min-w-0">
                              <span className="text-sm font-medium text-gray-800 truncate">{o.value}</span>
                              {selectedAttr.display_mode === 'color' && (
                                <span className="text-[10px] text-gray-400 font-mono">{o.color_code}</span>
                              )}
                          </div>
                       </div>
                       <button type="button" onClick={()=>deleteOpt(o.id)} className="text-gray-300 hover:text-red-500 p-1 opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 size={14}/></button>
                    </div>
                  ))
              ) : (
                  <div className="col-span-3 py-10 text-center border-2 border-dashed border-gray-100 rounded-lg">
                      <p className="text-gray-500 font-medium">No options yet.</p>
                  </div>
              )}
            </div>
          </>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-gray-400">
              <Plus className="w-12 h-12 mb-2 opacity-10"/>
              <p>Select an attribute from the left to manage options</p>
          </div>
        )}
      </div>
    </div>
  );
}