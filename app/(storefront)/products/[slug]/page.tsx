"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { addToCart, CartItem } from "@/app/lib/cartUtils";

// Define the shape of your Product data
interface Product {
  id: number;
  name: string;
  description: string;
  price: number; // in cents or currency units
  image: string;
  // Add other fields from your API if needed
}

export default function ProductDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string; // This grabs "101-cool-shirt" or just "cool-shirt"

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    // LOGIC: Extract ID from slug if your URL is like "101-product-name"
    // If your URL is just "product-name", you need an API that searches by slug.
    
    // For MVP, let's assume we try to fetch by the ID embedded in the slug
    // OR we just fetch the slug and the backend handles it.
    
    const fetchProduct = async () => {
      try {
        // OPTION A: If your API works with ID, try to parse it from the start of the string
        // const id = parseInt(slug.split("-")[0]); 
        // const url = `http://127.0.0.1:8000/api/products/${id}/`;

        // OPTION B: If your API works with SLUG (Recommended for this folder structure)
        // const url = `http://127.0.0.1:8000/api/products/${slug}/`;
        
        // --- MOCK FETCH FOR DEMO (Replace this block with real fetch) ---
        // Simulating an API call to get product details
        await new Promise((resolve) => setTimeout(resolve, 500)); 
        const mockProduct: Product = {
          id: 101, // In real app, this comes from API
          name: `Product: ${slug}`,
          description: "This is a high-quality product from our vendor collection. Durable, stylish, and perfect for everyday use.",
          price: 2500,
          image: "https://placehold.co/600x400/png",
        };
        setProduct(mockProduct);
        // -------------------------------------------------------------

        /* // REAL FETCH CODE (Uncomment when API is ready):
        const res = await fetch(`http://127.0.0.1:8000/api/products/${slug}`); // or ID
        if (!res.ok) throw new Error("Product not found");
        const data = await res.json();
        setProduct(data);
        */

      } catch (error) {
        console.error("Failed to fetch product", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchProduct();
    }
  }, [slug]);

  const handleAddToCart = () => {
    if (!product) return;
    setAdding(true);

    const itemToAdd: CartItem = {
      id: product.id.toString(), // Cart uses string IDs usually
      product_id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1, // Default to 1
      image: product.image,
    };

    addToCart(itemToAdd);

    // Visual feedback
    setTimeout(() => {
      setAdding(false);
      // Optional: Redirect to cart or just show alert
      if (confirm("Item added! Go to cart?")) {
        router.push("/cart");
      }
    }, 500);
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading product...</div>;
  }

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center">Product not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Image */}
        <div className="bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center aspect-square relative">
            {/* If using Next/Image, you need width/height or fill */}
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
        </div>

        {/* Right: Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold text-gray-900 mb-6">${product.price}</p>
          
          <p className="text-gray-600 mb-8 leading-relaxed">
            {product.description}
          </p>

          <div className="flex gap-4">
            <button
              onClick={handleAddToCart}
              disabled={adding}
              className="px-8 py-4 bg-black text-white rounded-md font-semibold hover:bg-gray-800 transition disabled:opacity-70"
            >
              {adding ? "Adding..." : "Add to Cart"}
            </button>
            <button className="px-8 py-4 border border-gray-300 text-gray-700 rounded-md font-semibold hover:bg-gray-50 transition">
              Wishlist
            </button>
          </div>
          
          <div className="mt-8 border-t pt-6 text-sm text-gray-500">
            <p>Category: Unisex / T-Shirts</p>
            <p>ID: {product.id}</p>
          </div>
        </div>
      </div>
    </div>
  );
}