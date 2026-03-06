'use client'
import TestingBanner from '@/app/components/delete/TestingBanner'
import ProductCard from "@/app/components/ui/card/ProductCard";
import { FilterSidebar } from "@/app/components/features/products/FilterSidebar";
import BentoGridBanner from "@/app/components/banners/BentoGridBanner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react"; 


// Mock Data
const PRODUCTS = [
  { id: 1, title: "Legends T-Shirt", description: "Sustainable, soft, simple & stylish", price: 9.99, rating: 4.5, imageUrl: "/images/products/1.png" },
  { id: 2, title: "Ink Hustle Cap", description: "Hustle hard looks harder", price: 9.99, rating: 4.5, imageUrl: "/images/products/2.png" },
  { id: 3, title: "Legends T-Shirt", description: "Sustainable, soft, simple & stylish", price: 9.99, rating: 4.5, imageUrl: "/images/products/3.png" },
  { id: 4, title: "Daily Grind Cup", description: "Fuel your hustle in style", price: 9.99, rating: 4.5, imageUrl: "/images/products/4.png" },
  { id: 5, title: "Legends T-Shirt", description: "Sustainable, soft, simple & stylish", price: 9.99, rating: 4.5, imageUrl: "/images/products/5.png" },
  { id: 6, title: "Pure Press Tee", description: "Sustainable, soft, simple & stylish", price: 9.99, rating: 4.5, imageUrl: "/images/products/6.png" },
  { id: 7, title: "Drip Ambition T-Shirt", description: "Sustainable, soft, simple & stylish", price: 9.99, rating: 4.5, imageUrl: "/images/products/7.png" },
  { id: 8, title: "Drip Ambition T-Shirt", description: "Sustainable, soft, simple & stylish", price: 9.99, rating: 4.5, imageUrl: "/images/products/8.png" },
  { id: 9, title: "Drip Ambition T-Shirt", description: "Sustainable, soft, simple & stylish", price: 9.99, rating: 4.5, imageUrl: "/images/products/9.png" },
];

export default function AllTshirtPage() {
    return (
      <>
          <TestingBanner />
    <div className="min-h-screen bg-gray-50/50 p-4 lg:p-8 font-sans">
      
      {/* --- Header Section --- */}
      <div className="max-w-[1400px] mx-auto mb-8 lg:mb-10">
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">All Products</h1>
            <p className="text-lg text-gray-500 mt-2">
              676 products are available
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            
            {/* Mobile Filter Trigger */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="lg:hidden flex-1 gap-2 h-12 text-base">
                  <SlidersHorizontal className="w-5 h-5" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="overflow-y-auto w-[320px]">
                <div className="mt-8">
                  <FilterSidebar />
                </div>
              </SheetContent>
            </Sheet>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-3 flex-1 sm:flex-none justify-end">
              <span className="text-base text-gray-500 hidden sm:inline">Sort By:</span>
              <Select defaultValue="best-match">
                <SelectTrigger className="w-[140px] sm:w-[200px] h-11 text-base">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="best-match" className="text-base">Best Match</SelectItem>
                  <SelectItem value="price-low" className="text-base">Price: Low to High</SelectItem>
                  <SelectItem value="price-high" className="text-base">Price: High to Low</SelectItem>
                  <SelectItem value="newest" className="text-base">Newest Arrivals</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* --- Main Content Layout --- */}
      <div className="max-w-[1400px] mx-auto flex gap-8 items-start">
        
        {/* SIDEBAR CHANGES:
           1. Increased width to w-[320px] (was 280px)
        */}
        <aside className="hidden lg:block w-[320px] shrink-0 sticky top-4 h-[calc(100vh-2rem)] overflow-y-auto pr-2 custom-scrollbar">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <FilterSidebar />
          </div>
        </aside>

        {/* GRID CHANGES:
           1. Removed `xl:grid-cols-4`.
           2. It now maxes out at `lg:grid-cols-3`.
           This forces the cards to be bigger, showing only 3 per row on Desktop.
        */}
        <main className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                rating={product.rating}
                imageUrl={product.imageUrl}
                onAddToCart={() => console.log("Added", product.title)}
                onWishlistToggle={() => console.log("Wishlisted", product.title)}
              />
            ))}
          </div>
        </main>

      </div>
    </div>
    </>
  );
}