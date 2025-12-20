"use client";

import React, { useState, useEffect } from "react";
import { Search, Heart, ShoppingBag, User, Menu, X } from "lucide-react";

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

  const navLinks: NavLink[] = [
    { name: "Products", href: "#" },
    { name: "Shop", href: "#" },
    { name: "Custom Orders", href: "#" },
    { name: "Deal", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white py-4 shadow-sm border-b border-gray-100 font-sans relative">
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
              className="text-3xl font-bold text-[#F24E1E] tracking-tight"
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
          {/* Backdrop Overlay */}
          <div
            className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
              isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={toggleMenu}
            aria-hidden="true"
          />

          {/* Mobile Menu */}
          <div
            className={`fixed left-0 w-4/5 max-w-sm bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            style={{
              top: 0,
              bottom: 0,
              paddingTop: "64px", // Push content down by navbar height
              marginTop: 0,
            }}
          >
            <div className="h-full overflow-y-auto px-4 pt-2">
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block py-3 px-4 text-lg font-medium text-gray-800 hover:bg-gray-50 hover:text-[#F24E1E] rounded-lg transition-all duration-200 transform hover:translate-x-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Additional Mobile Actions */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <button className="flex items-center gap-2 text-gray-700 hover:text-[#F24E1E] transition-colors">
                    <User size={20} />
                    <span>My Account</span>
                  </button>
                </div>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-gray-700 hover:text-[#F24E1E] transition-colors">
                    <ShoppingBag size={20} />
                    <span>Cart (1)</span>
                  </button>
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
              </span>
            </button> */}

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
