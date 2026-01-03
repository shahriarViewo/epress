"use client";

import { useState, useEffect } from 'react';
import { Trash2, FolderTree, Folder, ChevronRight } from 'lucide-react';

interface Category {
  id: number;
  category_name: string;
  parent_category: number | null;
  subcategories?: Category[];
}

export default function AdminCategoriesPage() {
  // --- STATE ---
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    category_name: '',
    parent_category: '', // stored as string for select input, converted to int for API
  });
  const [message, setMessage] = useState('');

  // --- 1. FETCH CATEGORIES ---
  const fetchCategories = async () => {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/v1/catalog/categories/');
      const data = await res.json();
      setCategories(data);
    } catch (error) {
      console.error("Failed to load categories", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // --- 2. CREATE CATEGORY ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    // Payload: If parent_category is empty string, send null (for Root category)
    const payload = {
      category_name: formData.category_name,
      parent_category: formData.parent_category ? parseInt(formData.parent_category) : null,
      icon: "default-icon" // Dummy value for now
    };

    const basicAuth = btoa("admin@gmail.com:admin");

    try {
      const res = await fetch('http://127.0.0.1:8000/api/v1/catalog/categories/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${basicAuth}`,
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setMessage('✅ Category Created Successfully!');
        setFormData({ category_name: '', parent_category: '' }); // Reset form
        fetchCategories(); // Refresh the tree
      } else {
        const errorData = await res.json();
        setMessage(`❌ Error: ${JSON.stringify(errorData)}`);
      }
    } catch (error) {
      setMessage('❌ Network Error');
    } finally {
      setLoading(false);
    }
  };

  // --- 3. DELETE CATEGORY ---
  const handleDelete = async (id: number) => {
    if(!confirm("Are you sure? Deleting a parent will delete all sub-categories!")) return;

    const basicAuth = btoa("admin@gmail.com:admin");
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/v1/catalog/categories/${id}/`, {
        method: 'DELETE',
        headers: { 'Authorization': `Basic ${basicAuth}` },
      });
      if (res.ok) {
        fetchCategories(); // Refresh
      } else {
        alert("Failed to delete");
      }
    } catch (err) {
      console.error(err);
    }
  };

  // --- HELPER: Recursive Dropdown Options ---
  // Flattens the tree into a list of options with indentation
  const renderDropdownOptions = (cats: Category[], depth = 0): React.ReactNode[] => {
    return cats.flatMap((cat) => [
      <option key={cat.id} value={cat.id}>
        {'\u00A0\u00A0'.repeat(depth * 2)} {depth > 0 ? '└ ' : ''} {cat.category_name}
      </option>,
      ...(cat.subcategories ? renderDropdownOptions(cat.subcategories, depth + 1) : [])
    ]);
  };

  // --- HELPER: Recursive Tree Visualization ---
  const renderTree = (cats: Category[]) => {
    return (
      <ul className="pl-4 space-y-2 border-l border-gray-200 ml-2">
        {cats.map((cat) => (
          <li key={cat.id} className="relative">
            <div className="flex items-center justify-between group p-2 bg-white border border-gray-100 rounded hover:border-blue-300 transition-colors">
              <div className="flex items-center gap-2">
                {cat.subcategories && cat.subcategories.length > 0 ? 
                  <FolderTree className="w-4 h-4 text-blue-500" /> : 
                  <Folder className="w-4 h-4 text-gray-400" />
                }
                <span className="font-medium text-gray-700">{cat.category_name}</span>
                <span className="text-[10px] text-gray-400 bg-gray-50 px-1.5 rounded border">ID: {cat.id}</span>
              </div>
              
              <button 
                onClick={() => handleDelete(cat.id)}
                className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-600 p-1"
                title="Delete Category"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            {/* Recursive Children */}
            {cat.subcategories && cat.subcategories.length > 0 && renderTree(cat.subcategories)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-blue-100 rounded-lg">
           <FolderTree className="w-6 h-6 text-blue-700" />
        </div>
        <div>
           <h1 className="text-2xl font-bold text-gray-900">Category Manager</h1>
           <p className="text-gray-500 text-sm">Create and organize your product categories.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT: Create Form */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 sticky top-6">
            <h2 className="text-lg font-bold mb-4 text-gray-800">Add New Category</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Name</label>
                <input
                  type="text"
                  required
                  value={formData.category_name}
                  onChange={(e) => setFormData({ ...formData, category_name: e.target.value })}
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition text-black"
                  placeholder="e.g. Men's Clothing"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Parent Category</label>
                <select
                  value={formData.parent_category}
                  onChange={(e) => setFormData({ ...formData, parent_category: e.target.value })}
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 bg-white outline-none"
                >
                  <option value="">(None) Set as Root Category</option>
                  {renderDropdownOptions(categories)}
                </select>
                <p className="text-xs text-gray-500 mt-2">
                  Select a parent to make this a sub-category. Leave empty to create a main category.
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white font-bold py-3 rounded-md hover:bg-gray-800 transition-all disabled:opacity-50 mt-2"
              >
                {loading ? 'Saving...' : '+ Create Category'}
              </button>

              {message && (
                <div className={`text-sm p-3 rounded font-medium ${message.includes('Error') ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-700'}`}>
                  {message}
                </div>
              )}
            </form>
          </div>
        </div>

        {/* RIGHT: Visual Tree */}
        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 min-h-[500px]">
            <h2 className="text-lg font-bold mb-4 text-gray-800 flex items-center gap-2">
              Current Structure
              <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full font-normal">
                {categories.length} Roots
              </span>
            </h2>
            
            {categories.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-64 text-gray-400 border-2 border-dashed border-gray-100 rounded-lg">
                <Folder className="w-12 h-12 mb-2 opacity-20" />
                <p>No categories found.</p>
                <p className="text-sm">Create one to get started.</p>
              </div>
            ) : (
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                {/* We render the tree starting with margin-left 0 */}
                <ul className="space-y-2">
                  {categories.map((cat) => (
                    <li key={cat.id} className="relative">
                      {/* Root Item */}
                      <div className="flex items-center justify-between group p-3 bg-white border border-gray-200 rounded-lg shadow-sm mb-2 hover:border-blue-400 transition-all">
                        <div className="flex items-center gap-3">
                           <div className="bg-blue-50 p-1.5 rounded text-blue-600">
                             {cat.subcategories && cat.subcategories.length > 0 ? <FolderTree size={18}/> : <Folder size={18}/>}
                           </div>
                           <span className="font-bold text-gray-800">{cat.category_name}</span>
                        </div>
                        <button onClick={() => handleDelete(cat.id)} className="text-gray-300 hover:text-red-500 transition"><Trash2 size={16}/></button>
                      </div>
                      
                      {/* Children */}
                      {cat.subcategories && cat.subcategories.length > 0 && renderTree(cat.subcategories)}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}