"use client";

import { useState, useEffect } from 'react';
import { FolderTree, Folder, Trash2, AlertCircle, Lock } from 'lucide-react';

const API_BASE = "http://127.0.0.1:8000/api/v1/catalog";
const BASIC_AUTH = btoa("admin@gmail.com:admin");
const HEADERS = {
  'Content-Type': 'application/json',
  'Authorization': `Basic ${BASIC_AUTH}`
};

export default function CategoriesView() {
  const [categories, setCategories] = useState<any[]>([]);
  const [formData, setFormData] = useState({ category_name: '', parent_category: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchCategories = async () => {
    try {
      const res = await fetch(`${API_BASE}/categories/`, { headers: HEADERS });
      if(res.ok) setCategories(await res.json());
    } catch (e) { console.error(e); }
  };

  useEffect(() => { fetchCategories(); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    const payload = {
      category_name: formData.category_name,
      parent_category: formData.parent_category ? parseInt(formData.parent_category) : null,
      icon: "default"
    };

    try {
      const res = await fetch(`${API_BASE}/categories/`, { method: 'POST', headers: HEADERS, body: JSON.stringify(payload) });
      if (res.ok) {
        setFormData({ category_name: '', parent_category: '' });
        fetchCategories();
      } else {
        const errData = await res.json();
        setError("Error creating category: " + JSON.stringify(errData));
      }
    } catch (err) {
      setError("Network error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if(!confirm("Are you sure? This will delete the category.")) return;
    
    try {
      const res = await fetch(`${API_BASE}/categories/${id}/`, { method: 'DELETE', headers: HEADERS });
      
      if (res.ok) {
        fetchCategories();
      } else {
        const errorText = await res.text();
        if (errorText.includes("product")) {
           alert("❌ Cannot delete: This category contains Products. Please delete or move them first.");
        } else if (errorText.includes("variation") || errorText.includes("attribute")) {
           alert("❌ Cannot delete: An Attribute (Size/Color) is linked to this category.");
        } else {
           alert(`❌ Backend Error: ${errorText.substring(0, 100)}...`);
        }
      }
    } catch (err) {
      alert("Network error while deleting.");
    }
  };

  const renderOptions = (cats: any[], depth = 0): React.ReactNode[] => {
    return cats.flatMap((cat) => [
      <option key={cat.id} value={cat.id} className="text-gray-900">
        {'\u00A0'.repeat(depth*2)} {depth>0?'└ ':''} {cat.category_name}
      </option>,
      ...(cat.subcategories ? renderOptions(cat.subcategories, depth + 1) : [])
    ]);
  };

  const renderTree = (cats: any[]) => {
    // Note: No sorting needed here! The API sends them Newest First.
    return (
      <ul className="pl-4 space-y-2 border-l border-gray-200 ml-2">
        {cats.map((cat) => {
          const hasChildren = cat.subcategories && cat.subcategories.length > 0;

          return (
            <li key={cat.id}>
              <div className="flex justify-between items-center group p-2 bg-white border border-gray-100 rounded hover:border-blue-300 transition-colors">
                <div className="flex items-center gap-2">
                  {hasChildren ? <FolderTree className="text-blue-500" size={16}/> : <Folder className="text-gray-400" size={16}/>}
                  <span className="text-sm font-medium text-gray-700">{cat.category_name}</span>
                </div>
                
                {/* BUTTON LOGIC: Lock if parent, Delete if safe */}
                {hasChildren ? (
                   <div className="text-gray-300 p-1 cursor-not-allowed" title="Delete sub-categories first">
                      <Lock size={14} />
                   </div>
                ) : (
                   <button 
                    type="button"
                    onClick={(e) => { e.stopPropagation(); handleDelete(cat.id); }} 
                    className="opacity-100 sm:opacity-0 sm:group-hover:opacity-100 text-gray-300 hover:text-red-600 transition-all p-1"
                    title="Delete Category"
                  >
                    <Trash2 size={15}/>
                  </button>
                )}
              </div>
              
              {/* Recursive Call for Children */}
              {hasChildren && renderTree(cat.subcategories)}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* LEFT: Create Form */}
      <div className="lg:col-span-1 bg-white p-5 rounded-xl border border-gray-200 h-fit shadow-sm sticky top-6">
        <h3 className="font-bold text-gray-800 mb-4 text-sm uppercase">Add Category</h3>
        
        {error && (
          <div className="mb-3 p-2 bg-red-50 text-red-600 text-xs rounded flex items-start gap-1">
             <AlertCircle size={14} className="mt-0.5 shrink-0"/> {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="text-xs font-bold text-gray-500 mb-1 block">Category Name</label>
            <input 
              type="text" 
              required 
              className="w-full p-2 border border-gray-300 rounded text-sm bg-white text-gray-900 focus:ring-2 focus:ring-black outline-none"
              value={formData.category_name} 
              onChange={e => setFormData({...formData, category_name: e.target.value})} 
            />
          </div>
          <div>
             <label className="text-xs font-bold text-gray-500 mb-1 block">Parent (Optional)</label>
             <select 
                className="w-full p-2 border border-gray-300 rounded text-sm bg-white text-gray-900 focus:ring-2 focus:ring-black outline-none"
                value={formData.parent_category} 
                onChange={e => setFormData({...formData, parent_category: e.target.value})}
              >
                <option value="" className="text-gray-500">(None) Root Category</option>
                {renderOptions(categories)}
              </select>
          </div>
          <button disabled={loading} className="w-full bg-black text-white py-2.5 rounded text-sm font-bold hover:bg-gray-800 transition-colors shadow-sm mt-2">
            {loading ? 'Saving...' : '+ Create Category'}
          </button>
        </form>
      </div>

      {/* RIGHT: Structure (Scrollable & Auto-Sorted by Backend) */}
      <div className="lg:col-span-2 bg-white p-5 rounded-xl border border-gray-200 h-[600px] shadow-sm flex flex-col">
        <div className="flex justify-between items-center mb-4 border-b pb-2">
            <h3 className="font-bold text-gray-800 text-sm uppercase">Structure</h3>
            <span className="text-xs text-gray-400">Newest on Top</span>
        </div>
        
        {/* Scrollable Container */}
        <div className="overflow-y-auto flex-1 pr-2">
            {categories.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-40 text-gray-400">
                <Folder className="w-10 h-10 mb-2 opacity-20"/>
                <p className="text-sm">No categories found.</p>
            </div>
            ) : renderTree(categories)}
        </div>
      </div>
    </div>
  );
}