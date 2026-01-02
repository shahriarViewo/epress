"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
// Import the utils we just created
import { getCart, removeFromCart, clearCart, CartItem } from "@/app/lib/cartUtils";

export default function CartPage() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  // 1. Load real data from LocalStorage when the page mounts
  useEffect(() => {
    setCartItems(getCart());
    setIsPageLoaded(true);
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    phone: "",
    paymentMethod: "cod",
  });

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shippingCost = 60; 
  const total = subtotal + shippingCost;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 2. Remove item handler
  const handleRemoveItem = (itemId: string) => {
    removeFromCart(itemId);       // Update storage
    setCartItems(getCart());      // Update state UI
  };

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const orderPayload = {
      items: cartItems.map((item) => ({
        product_id: item.product_id,
        quantity: item.quantity,
        price: item.price,
      })),
      shipping_address: {
        full_name: formData.fullName,
        address: formData.address,
        phone: formData.phone,
      },
      payment_method: formData.paymentMethod,
      total_amount: total,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/orders/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderPayload),
      });

      if (!response.ok) {
        throw new Error("Failed to place order");
      }

      const data = await response.json();
      
      // 3. Success! Clear the cart and redirect
      clearCart(); 
      alert("Order Placed Successfully!");
      router.push("/customer/orders"); 
      
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Prevent hydration mismatch (don't render until client loads)
  if (!isPageLoaded) return null;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold text-gray-800">Your cart is empty</h2>
        <Link
          href="/"
          className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT COLUMN: Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 py-4 border-b last:border-0"
              >
                <div className="relative w-24 h-24 bg-gray-100 rounded-md overflow-hidden shrink-0">
                  {/* Image handling - fallback to gray box if no image URL */}
                  {item.image ? (
                     <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-xs text-gray-500">
                      Img
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    {/* Remove Button */}
                    <button 
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-red-500 text-sm hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                  <p className="text-gray-500 text-sm">Product ID: {item.product_id}</p>
                  <div className="flex justify-between items-center mt-2">
                    <p className="font-medium text-gray-900">
                      ${item.price} x {item.quantity}
                    </p>
                    <p className="font-bold text-lg">
                      ${item.price * item.quantity}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Checkout Form */}
        <div className="lg:col-span-1">
          <form
            onSubmit={handlePlaceOrder}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 sticky top-24"
          >
            <h2 className="text-xl font-bold mb-4">Checkout Details</h2>

            {/* Shipping Info */}
            <div className="space-y-3 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="123 Street Name, City"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="+880 1..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Payment Method
                </label>
                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="cod">Cash on Delivery (COD)</option>
                  <option value="online">Online Payment (Coming Soon)</option>
                </select>
              </div>
            </div>

            {/* Order Summary */}
            <div className="border-t pt-4 space-y-2 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>${shippingCost}</span>
              </div>
              <div className="flex justify-between text-xl font-bold text-gray-900 border-t pt-2 mt-2">
                <span>Total</span>
                <span>${total}</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Processing..." : "Place Order"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}