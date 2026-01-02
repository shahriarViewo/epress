// "use client";

// import { useState } from 'react';
// import Link from 'next/link';
// import { Menu, X } from 'lucide-react';

// export default function VendorLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   return (
//     <div className="min-h-screen flex bg-gray-50">
//       {/* Mobile Overlay */}
//       {isSidebarOpen && (
//         <div 
//           className="fixed inset-0 bg-black/50 z-40 md:hidden"
//           onClick={() => setIsSidebarOpen(false)}
//         />
//       )}
//       {/* --- Sidebar --- */}
//       <aside className={`
//         fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out
//         md:translate-x-0 md:static md:w-48
//         ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
//       `}>
//         <div className="h-16 flex items-center justify-between px-6 border-b border-gray-200">
//           <span className="text-xl font-bold text-blue-600">Vendor</span>
//           <button 
//             onClick={() => setIsSidebarOpen(false)}
//             className="md:hidden text-gray-500 hover:text-gray-700"
//           >
//             <X size={24} />
//           </button>
//         </div>
        
//         <nav className="p-4 space-y-1">
//           <Link 
//             href="/vendor/dashboard" 
//             className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md font-medium"
//           >
//             📊 Dashboard
//           </Link>
//           <Link 
//             href="/vendor/products" 
//             className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md font-medium"
//           >
//             📦 Products
//           </Link>
//           <Link 
//             href="/vendor/orders" 
//             className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md font-medium"
//           >
//             🛍️ Orders
//           </Link>
//           <Link 
//             href="/vendor/products/create" 
//             className="block px-4 py-2 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-md font-medium mt-4"
//           >
//             + Add New Product
//           </Link>
//         </nav>
//       </aside>

//       {/* --- Main Content Area --- */}
//       <div className="flex-1 flex flex-col min-w-0">
//         {/* Top Header */}
//         <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-8">
//           <div className="flex items-center gap-4">
//             <button 
//               onClick={() => setIsSidebarOpen(true)}
//               className="md:hidden text-gray-500 hover:text-gray-700"
//             >
//               <Menu size={24} />
//             </button>
//             <h2 className="text-lg font-semibold text-gray-800">Vendor Portal</h2>
//           </div>
//           <div className="flex items-center gap-4">
//              <button className="text-sm text-gray-500 hover:text-gray-700">Notifications</button>
//              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
//                V
//              </div>
//           </div>
//         </header>

//         {/* Page Content (The 'children' is where page.tsx goes) */}
//         <main className="flex-1 p-4 md:p-8 overflow-y-auto">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// }



import Link from 'next/link';

export default function VendorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* --- Sidebar --- */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:block">
        <div className="h-16 flex items-center px-6 border-b border-gray-200">
          <span className="text-xl font-bold text-blue-600">Nissin Vendor</span>
        </div>
        
        <nav className="p-4 space-y-1">
          <Link 
            href="/vendor/dashboard" 
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md font-medium"
          >
            📊 Dashboard
          </Link>
          <Link 
            href="/vendor/products" 
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md font-medium"
          >
            📦 Products
          </Link>
          <Link 
            href="/vendor/orders" 
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md font-medium"
          >
            🛍️ Orders
          </Link>
          <Link 
            href="/vendor/products/create" 
            className="block px-4 py-2 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-md font-medium mt-4"
          >
            + Add New Product
          </Link>
        </nav>
      </aside>

      {/* --- Main Content Area --- */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8">
          <h2 className="text-lg font-semibold text-gray-800">Vendor Portal</h2>
          <div className="flex items-center gap-4">
             <button className="text-sm text-gray-500 hover:text-gray-700">Notifications</button>
             <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
               V
             </div>
          </div>
        </header>

        {/* Page Content (The 'children' is where page.tsx goes) */}
        <main className="flex-1 p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}