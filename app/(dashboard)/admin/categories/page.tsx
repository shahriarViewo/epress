"use client";

import { useState, useEffect } from 'react';

export default function AdminCategoriesPage() {
  // 1. State
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    category_name: '',
    parent_category: '', // This will hold the ID of the parent
    icon: '',
  });
  const [message, setMessage] = useState('');

  // 2. Fetch Categories (Used on load and after updates)
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

  // 3. Handle Form Submit (Create Category)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    // Prepare payload (convert empty string to null for backend)
    const payload = {
      ...formData,
      parent_category: formData.parent_category ? parseInt(formData.parent_category) : null
    };

    // AUTH: Using Basic Auth (admin:admin) for now
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
        setMessage('✅ Category Created!');
        setFormData({ category_name: '', parent_category: '', icon: '' }); // Reset form
        fetchCategories(); // Refresh list immediately
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

  // 4. Helper to render Dropdown Options (Recursive)
  const renderCategoryOptions = (cats: any[], depth = 0): React.ReactNode[] => {
    return cats.flatMap((cat) => [
      <option key={cat.id} value={cat.id}>
        {depth > 0 ? '— '.repeat(depth) : ''} {cat.category_name}
      </option>,
      ...(cat.subcategories ? renderCategoryOptions(cat.subcategories, depth + 1) : [])
    ]);
  };

  // 5. Helper to render the Visual Tree List (Recursive)
  const renderCategoryTree = (cats: any[], depth = 0) => {
    return (
      <ul className={`space-y-2 ${depth > 0 ? 'ml-6 border-l-2 border-gray-200 pl-4' : ''}`}>
        {cats.map((cat) => (
          <li key={cat.id} className="relative">
            <div className="flex items-center gap-2 p-2 bg-white rounded border border-gray-100 shadow-sm">
              <span className="font-medium text-gray-800">{cat.category_name}</span>
              <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded border">ID: {cat.id}</span>
            </div>
            {/* Recursively show children */}
            {cat.subcategories && cat.subcategories.length > 0 && renderCategoryTree(cat.subcategories, depth + 1)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Category Management</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* LEFT COLUMN: Create Form */}
        <div className="bg-white p-6 rounded-lg shadow-md h-fit">
          <h2 className="text-lg font-semibold mb-4 border-b pb-2 text-black">Add New Category</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Category Name</label>
              <input
                type="text"
                required
                value={formData.category_name}
                onChange={(e) => setFormData({ ...formData, category_name: e.target.value })}
                className="w-full mt-1 px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none text-gray-900"
                placeholder="e.g. Footwear"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Parent Category (Optional)</label>
              <select
                value={formData.parent_category}
                onChange={(e) => setFormData({ ...formData, parent_category: e.target.value })}
                className="w-full mt-1 px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 bg-white text-gray-900"
              >
                <option value="">None (Root Category)</option>
                {renderCategoryOptions(categories)}
              </select>
              <p className="text-xs text-gray-500 mt-1">Select "None" to make this a top-level category.</p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              {loading ? 'Creating...' : '+ Create Category'}
            </button>

            {message && (
              <div className={`text-sm p-2 rounded ${message.includes('Error') ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                {message}
              </div>
            )}
          </form>
        </div>

        {/* RIGHT COLUMN: Visual Tree */}
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Existing Structure</h2>
          {categories.length === 0 ? (
            <p className="text-gray-400 italic">No categories found.</p>
          ) : (
            renderCategoryTree(categories)
          )}
        </div>

      </div>
    </div>
  );
}