"use client";

import React, { useState, useEffect } from "react";
import { Search, Heart, ShoppingBag, User, Menu, X, Home, ShoppingCart, Tag, Info, Phone, Gift } from "lucide-react";

interface NavLink {
  name: string;
  href: string;
}

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1100);
    };

    // Set initial value
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "Home", href: "#", icon: <Home size={18} className="mr-3" /> },
    { name: "Products", href: "#products", icon: <ShoppingBag size={18} className="mr-3" /> },
    { name: "Shop", href: "#shop", icon: <ShoppingCart size={18} className="mr-3" /> },
    { name: "Custom Orders", href: "#custom", icon: <Gift size={18} className="mr-3" /> },
    { name: "Deals", href: "#deals", icon: <Tag size={18} className="mr-3" /> },
    { name: "About", href: "#about", icon: <Info size={18} className="mr-3" /> },
    { name: "Contact", href: "#contact", icon: <Phone size={18} className="mr-3" /> },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white py-2 md:py-4 shadow-sm border-b border-gray-100 font-sans relative">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between md:px-16 px-4">
        {/* Left side - Hamburger and Logo */}
        <div className="flex items-center">
          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden mr-4 text-gray-700 hover:text-[#F24E1E] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Logo Section */}
          <div className="shrink-0">
            <a
              href="/"
              className="text-2xl md:text-3xl font-bold text-[#F24E1E] tracking-tight"
            >
              OnePrint
            </a>
          </div>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden lg:flex items-center justify-center flex-1 gap-8 px-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-900 text-[17px] font-medium hover:text-[#F24E1E] transition-colors"
              onClick={() => isMobile && setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Overlay */}
        <div className="lg:hidden">

          {/* Mobile Menu */}
          <div
            className={`fixed inset-0 z-40 flex justify-start ${
              isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            } transition-all duration-300`}
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
              onClick={toggleMenu}
            />
            
            {/* Menu Panel */}
            <div 
              className={`relative w-4/5 max-w-xs h-full bg-white/95 backdrop-blur-md shadow-2xl transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'translate-x-0' : '-translate-x-full'
              }`}
            >
              <div className="h-full flex flex-col">
                {/* Menu Header */}
                <div className="p-4 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-800">Menu</h3>
                </div>
                
                {/* Menu Items */}
                <nav className="flex-1 overflow-y-auto py-2 px-3">
                  <ul className="space-y-1.5">
                    {navLinks.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="flex items-center py-3 px-3 text-gray-700 hover:bg-gray-50 hover:text-[#F24E1E] rounded-lg transition-all duration-200 group"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span className="text-[#F24E1E]/70 group-hover:text-[#F24E1E] transition-colors">
                            {link.icon}
                          </span>
                          <span className="font-medium">{link.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Footer Actions */}
                <div className="p-4 border-t border-gray-100 bg-gray-50/50">
                  <div className="space-y-3">
                    <button className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#F24E1E] hover:bg-[#e04517] text-white rounded-lg font-medium transition-colors">
                      <User size={18} />
                      <span>My Account</span>
                    </button>
                    <button className="w-full flex items-center justify-center gap-2 py-2.5 px-4 border border-gray-200 hover:border-[#F24E1E]/40 hover:bg-[#F24E1E]/5 text-gray-700 rounded-lg font-medium transition-colors">
                      <ShoppingBag size={18} />
                      <span>Cart (1)</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Search Bar and Actions */}
        <div className="flex items-center gap-6">
          {/* Search Input - Hidden below 1400px */}
          <div className="relative hidden [@media(min-width:1400px)]:block w-[380px]">
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

          {/* Search Icon - Shown below 1400px */}
          <button
            className="[@media(min-width:1400px)]:hidden w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors"
            aria-label="Open search"
          >
            <Search size={22} />
          </button>

          {/* Icon Buttons */}
          <div className="flex items-center gap-3">
            {/* Wishlist */}
            {/* <button
              type="button"
              className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors"
            >
              <Heart size={22} />
            </button> */}

            {/* Cart with Badge */}
            {/* <button
              type="button"
              className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors relative"
            >
              <ShoppingBag size={22} />
              {/* Notification Badge */}
              {/* <span className="absolute top-0 right-0 transform translate-x-[-2px] translate-y-[2px] bg-[#F24E1E] text-white text-[11px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                1
              </span> */}
            {/* </button> */}

            {/* User Profile */}
            {/* <button
              type="button"
              className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors"
            >
              <User size={22} />
            </button> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
