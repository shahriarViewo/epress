import React from 'react';
import { Search, Heart, ShoppingBag, User } from 'lucide-react';

interface NavLink {
  name: string;
  href: string;
}

const NavBar: React.FC = () => {
  const navLinks: NavLink[] = [
    { name: 'Products', href: '#' },
    { name: 'Shop', href: '#' },
    { name: 'Custom Orders', href: '#' },
    { name: 'Deal', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <nav className="w-full bg-white py-4 px-16 shadow-sm border-b border-gray-100 font-sans">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between gap-4">
        
        {/* 1. Logo Section */}
        <div className="flex-shrink-0">
          <a href="/" className="text-3xl font-bold text-[#F24E1E] tracking-tight">
            Printpress
          </a>
        </div>

        {/* 2. Navigation Links (Hidden on small screens) */}
        <div className="hidden lg:flex items-center gap-8 ml-[56px]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-900 text-[17px] font-medium hover:text-[#F24E1E] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* 3. Search Bar and Actions */}
        <div className="flex items-center gap-6 flex-1 justify-end">
          
          {/* Search Input */}
          <div className="relative hidden md:block w-full max-w-md">
            <input
              type="text"
              placeholder="Search for any product"
              className="w-full bg-gray-100/80 text-gray-600 rounded-full py-3 px-6 pr-12 outline-none focus:ring-2 focus:ring-[#F24E1E]/20 transition-all placeholder:text-gray-400"
            />
            <button 
              type="button"
              className="absolute right-1 top-1 bottom-1 bg-[#F24E1E] hover:bg-[#d63f14] text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors shadow-sm"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
          </div>

          {/* Icon Buttons */}
          <div className="flex items-center gap-3">
            {/* Wishlist */}
            <button 
              type="button"
              className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors"
            >
              <Heart size={22} />
            </button>

            {/* Cart with Badge */}
            <button 
              type="button"
              className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors relative"
            >
              <ShoppingBag size={22} />
              {/* Notification Badge */}
              <span className="absolute top-0 right-0 transform translate-x-[-2px] translate-y-[2px] bg-[#F24E1E] text-white text-[11px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                1
              </span>
            </button>

            {/* User Profile */}
            <button 
              type="button"
              className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors"
            >
              <User size={22} />
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default NavBar;