// import React from 'react';
// import { ShoppingBag, FileText, Users, ShoppingCart } from 'lucide-react';

// // Components
// import StatCard from './components/StatCard';
// import EarningsChart from './components/EarningsChart';
// import RecentOrders from './components/RecentOrders';
// import TopSellingProducts from './components/TopSellingProducts';
// import OrdersList from './components/OrdersList';
// import ProductsOverview from './components/ProductsOverview';

// export default function VendorDashboardPage() {
//   const statsData = [
//     {
//       title: 'Total Sales',
//       value: '14,732',
//       percentage: 4.2,
//       isIncrease: true,
//       icon: ShoppingBag,
//       color: 'purple' as const,
//     },
//     {
//       title: 'Total Expenses',
//       value: '$28,346',
//       percentage: 12.0,
//       isIncrease: true,
//       icon: FileText, 
//       color: 'blue' as const,
//     },
//     {
//       title: 'Total Visitors',
//       value: '1,29,368',
//       percentage: 7.6,
//       isIncrease: false,
//       icon: Users,
//       color: 'green' as const,
//     },
//     {
//       title: 'Total Orders',
//       value: '35,367',
//       percentage: 2.5,
//       isIncrease: true,
//       icon: ShoppingCart,
//       color: 'orange' as const,
//     },
//   ];

//   return (
//     <div className="p-4 md:p-6 min-h-screen bg-gray-50/50 text-gray-800 font-sans">
      
//       {/* --- Page Header --- */}
//       <div className="mb-6 md:mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//         <div>
//           <h1 className="text-xl md:text-2xl font-bold text-gray-900">Dashboard</h1>
//           <p className="text-xs md:text-sm text-gray-500 mt-1">
//             Welcome back, Nissin Vendor!
//           </p>
//         </div>
//         <div className="hidden sm:block">
//            <span className="text-xs text-gray-500 font-medium border border-gray-200 px-3 py-1.5 rounded-md bg-white shadow-sm">
//              Oct 2025 - Dec 2025
//            </span>
//         </div>
//       </div>

//       {/* --- Main Responsive Grid --- */}
//       <div className="flex flex-col gap-6">
        
//         {/* SECTION 1: STATS CARDS */}
//         {/* - Mobile (<640px): 1 Column (Stacked vertical)
//            - Tablet (640px - 1280px): 2 Columns (2x2 Grid) -> Best for tablets
//            - Desktop (>1280px): 4 Columns (All in one row)
//         */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
//           {statsData.map((stat, index) => (
//             <StatCard
//               key={index}
//               title={stat.title}
//               value={stat.value}
//               percentage={stat.percentage}
//               isIncrease={stat.isIncrease}
//               icon={stat.icon}
//               color={stat.color}
//             />
//           ))}
//         </div>

//         {/* SECTION 2: CHARTS & RECENT ORDERS */}
//         {/* - Mobile & Tablet: Stacked (1 Column). 
//              Reason: Charts need width. If we split screen on a tablet, the chart bars get too thin.
//            - Desktop (>1280px): Split 8 cols (Chart) / 4 cols (List).
//         */}
//         <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 min-w-0">
//           <div className="xl:col-span-8 w-full min-w-0">
//             <EarningsChart />
//           </div>
//           <div className="xl:col-span-4 w-full min-w-0">
//             <RecentOrders />
//           </div>
//         </div>

//         {/* SECTION 3: TOP SELLING & ORDER TABS */}
//         {/* - Mobile & Tablet: Stacked (1 Column).
//              Reason: Data Tables need horizontal space. Stacking them ensures no horizontal scrolling on iPad.
//            - Desktop (>1280px): Split 50% / 50%.
//         */}
//         <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 min-w-0">
//           {/* Wrapped in overflow-hidden to prevent table from breaking layout */}
//           <div className="w-full min-w-0 overflow-hidden rounded-2xl">
//             <TopSellingProducts />
//           </div>
//           <div className="w-full min-w-0 overflow-hidden rounded-2xl">
//             <OrdersList />
//           </div>
//         </div>

//         {/* SECTION 4: PRODUCTS OVERVIEW */}
//         {/* Always Full Width, but internal table allows horizontal scroll */}
//         <div className="w-full min-w-0 overflow-hidden rounded-2xl">
//           <ProductsOverview />
//         </div>

//       </div>
      
//       {/* --- Footer --- */}
//       <div className="mt-8 pt-6 border-t border-gray-200 text-center text-gray-400 text-xs">
//         &copy; 2026 Nissin MultiVendor Project. All rights reserved.
//       </div>
//     </div>
//   );
// }
//-----------------------------------------------------------------------------------------------------------


export default function VendorDashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Overview</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-gray-500 text-sm font-medium">Total Sales</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">$1,240.00</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-gray-500 text-sm font-medium">Active Products</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">12</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-gray-500 text-sm font-medium">Pending Orders</h3>
          <p className="text-3xl font-bold text-orange-600 mt-2">5</p>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
        <div className="h-32 flex items-center justify-center text-gray-400 bg-gray-50 rounded border border-dashed border-gray-200">
          No recent orders to display
        </div>
      </div>
    </div>
  );
}