"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Plus, Search, AlertCircle, Package } from 'lucide-react';

// Types matching your Django Serializer
interface Product {
  id: number;
  product_name: string;
  status: string;
  price_range: string;
  category_details?: { category_name: string };
  images: Array<{
    image_details: { file: string }
  }>;
}

export default function VendorProductListPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // CONFIG
  const API_BASE = "http://127.0.0.1:8000/api/v1";
  const BASIC_AUTH = btoa("admin@gmail.com:admin"); // TEMP: Replace with real auth later

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(`${API_BASE}/products/`, {
          headers: {
            'Authorization': `Basic ${BASIC_AUTH}`,
          }
        });
        
        if (!res.ok) throw new Error("Failed to fetch products");
        
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error:", error);
        setError("Could not load products. Ensure backend is running.");
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) return <div className="p-10 text-center">Loading your catalog...</div>;

  if (error) return (
    <div className="p-8 text-center text-red-500 flex flex-col items-center">
      <AlertCircle size={32} className="mb-2" />
      {error}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
           <h1 className="text-2xl font-bold text-gray-800">My Products</h1>
           <p className="text-sm text-gray-500 mt-1">Manage catalog, prices, and inventory.</p>
        </div>
        <Link 
          href="/vendor/products/create" 
          className="bg-black text-white px-6 py-2.5 rounded-lg hover:bg-gray-800 transition shadow-lg flex items-center gap-2 font-medium text-sm"
        >
          <Plus size={18} /> Add New Product
        </Link>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        
        {/* Search Bar (Visual only for now) */}
        <div className="p-4 border-b border-gray-100">
           <div className="relative w-full max-w-sm">
             <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
             <input 
               type="text" 
               placeholder="Search products..." 
               className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
             />
           </div>
        </div>

        <table className="min-w-full divide-y divide-gray-100">
          <thead className="bg-gray-50/50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Product</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Price Range</th>
              <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {products.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-16 text-center text-gray-400">
                  <div className="flex flex-col items-center">
                    <Package className="h-12 w-12 text-gray-200 mb-3" />
                    <p className="font-medium text-gray-600">No products found</p>
                    <Link href="/vendor/products/create" className="text-blue-600 hover:underline text-sm mt-2">Create your first product</Link>
                  </div>
                </td>
              </tr>
            ) : (
              products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                  
                  {/* Name & Image */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-12 w-12 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                        {product.images && product.images.length > 0 ? (
                           <img 
                             src={product.images[0].image_details?.file || "/placeholder.png"} 
                             alt="" 
                             className="h-full w-full object-cover" 
                           />
                        ) : (
                          <div className="h-full w-full flex items-center justify-center text-[10px] text-gray-400">No Img</div>
                        )}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-bold text-gray-900">{product.product_name}</div>
                        <div className="text-xs text-gray-400 font-mono">ID: #{product.id}</div>
                      </div>
                    </div>
                  </td>

                  {/* Category */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {product.category_details?.category_name || "Uncategorized"}
                  </td>

                  {/* Status */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2.5 py-1 inline-flex text-xs leading-5 font-bold rounded-full capitalize
                      ${product.status === 'active' ? 'bg-emerald-100 text-emerald-700' : 
                        product.status === 'draft' ? 'bg-gray-100 text-gray-700' : 
                        'bg-yellow-100 text-yellow-700'}`}>
                      {product.status}
                    </span>
                  </td>

                  {/* Price */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {product.price_range === "N/A" ? <span className="text-gray-400 text-xs italic">No Variants</span> : `$${product.price_range}`}
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link 
                      href={`/vendor/products/${product.id}/variants`} 
                      className="text-blue-600 hover:text-blue-800 bg-blue-50 px-3 py-1.5 rounded-md text-xs font-bold transition-colors"
                    >
                      Manage Variants
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}