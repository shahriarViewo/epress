"use client";

import React, { useState, useEffect } from "react";
import { Search, Heart, ShoppingBag, User, Menu, X, Home, ShoppingCart, Tag, Info, Phone, Gift, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Define the structure for sub-menu items
interface SubMenuItem {
  name: string;
  href: string;
}

interface NavLink {
  name: string;
  href: string;
  icon: React.ReactNode;
  submenu?: SubMenuItem[];
}

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);
  const pathname = usePathname();

  // Handle resizing
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
        setMobileSubmenuOpen(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isMenuOpen]);

  const toggleMobileSubmenu = (name: string) => {
    setMobileSubmenuOpen(mobileSubmenuOpen === name ? null : name);
  };

  const navLinks: NavLink[] = [
    { name: "Home", href: "/", icon: <Home size={18} className="mr-3" /> },
    {
      name: "Products",
      href: "/products",
      icon: <ShoppingBag size={18} className="mr-3" />,
      // Dropdown menu items
      submenu: [
        { name: "T-Shirt", href: "/all-tshirt" },
        { name: "Hat", href: "/all-cap" },
        { name: "Mug", href: "/all-mug" },


      ]
    },
    // { name: "Shop", href: "#shop", icon: <ShoppingCart size={18} className="mr-3" /> },
    // { name: "Custom Orders", href: "#custom", icon: <Gift size={18} className="mr-3" /> },
    // { name: "Deals", href: "#deals", icon: <Tag size={18} className="mr-3" /> },
    {
      name: "About",
      href: "/about",
      icon: <Info size={18} className="mr-3" />,
      // Dropdown menu items
      submenu: [
        // { name: "Contact us", href: "/contact" },
        { name: "Our Mission", href: "/mission" },
        { name: "Our Vision", href: "/vision" },
        { name: "Values", href: "/values", },
        { name: "Why Choose us", href: "/why-choose-us" },
      ]
    },
    { name: "Contact", href: "/contact", icon: <Phone size={18} className="mr-3" /> },
    // { name: "Vision", href: "/mission-and-vision", icon: <Phone size={18} className="mr-3" /> },
    // { name: "Why Choose us", href: "/why-choose-us", icon: <Phone size={18} className="mr-3" /> },
    // { name: "FAQ", href: "/faq", icon: <Phone size={18} className="mr-3" /> },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search triggered");
  };

  return (
    <nav className="bg-white py-2 md:py-4 shadow-sm border-b border-gray-100 font-sans relative z-50">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between md:px-16 px-4">

        {/* Left side - Hamburger and Logo */}
        <div className="flex items-center">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden mr-4 text-gray-700 hover:text-[#F24E1E] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Logo Section */}
          <div className="shrink-0">
            <Link
              href="/"
              className="text-2xl md:text-3xl font-bold text-[#F24E1E] tracking-tight"
            >
              OnePrint
            </Link>
          </div>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden lg:flex items-center justify-center flex-1 gap-8 px-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const hasSubmenu = link.submenu && link.submenu.length > 0;

            return (
              <div key={link.name} className="relative group h-full flex items-center">
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 text-[17px] font-medium transition-colors py-4 ${isActive ? "text-[#F24E1E]" : "text-gray-900 hover:text-[#F24E1E]"
                    }`}
                >
                  {link.name}
                  {hasSubmenu && <ChevronDown size={14} className="mt-[2px] group-hover:rotate-180 transition-transform duration-200" />}
                </Link>

                {/* Dropdown Menu */}
                {hasSubmenu && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out z-50 min-w-[200px]">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden p-2">
                      {link.submenu!.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-3 text-[15px] text-gray-600 hover:text-[#F24E1E] hover:bg-gray-50 rounded-lg transition-colors font-medium"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ${isMenuOpen ? 'visible' : 'invisible'
          }`}>

          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'
              }`}
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div
            className={`absolute left-0 top-0 w-4/5 max-w-xs h-full bg-white/95 backdrop-blur-md shadow-2xl transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
              }`}
          >
            <div className="h-full flex flex-col">
              {/* Menu Header */}
              <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">Menu</h3>
                <button onClick={() => setIsMenuOpen(false)}>
                  <X size={24} className="text-gray-500 hover:text-[#F24E1E]" />
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex-1 overflow-y-auto py-2 px-3">
                <ul className="space-y-1.5">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    const hasSubmenu = link.submenu && link.submenu.length > 0;
                    const isSubmenuOpen = mobileSubmenuOpen === link.name;

                    return (
                      <li key={link.name} className="block">
                        <div className="flex items-center justify-between">
                          <Link
                            href={link.href}
                            onClick={() => !hasSubmenu && setIsMenuOpen(false)}
                            className={`flex-1 flex items-center py-3 px-3 rounded-lg transition-all duration-200 group ${isActive ? "bg-[#F24E1E]/10 text-[#F24E1E]" : "text-gray-700 hover:bg-gray-50 hover:text-[#F24E1E]"
                              }`}
                          >
                            <span className={`mr-3 ${isActive ? "text-[#F24E1E]" : "text-[#F24E1E]/70 group-hover:text-[#F24E1E]"}`}>
                              {link.icon}
                            </span>
                            <span className="font-medium">{link.name}</span>
                          </Link>

                          {/* Mobile Dropdown Toggle */}
                          {hasSubmenu && (
                            <button
                              onClick={() => toggleMobileSubmenu(link.name)}
                              className="p-3 text-gray-500 hover:text-[#F24E1E]"
                            >
                              <ChevronDown size={18} className={`transition-transform duration-200 ${isSubmenuOpen ? "rotate-180" : ""}`} />
                            </button>
                          )}
                        </div>

                        {/* Mobile Submenu Items */}
                        {hasSubmenu && (
                          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isSubmenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
                            <ul className="pl-12 pr-2 pb-2 space-y-1 bg-gray-50/50 rounded-b-lg">
                              {link.submenu!.map((subItem) => (
                                <li key={subItem.name}>
                                  <Link
                                    href={subItem.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block py-2.5 px-3 text-sm font-medium text-gray-500 hover:text-[#F24E1E] hover:bg-gray-100 rounded-md transition-colors"
                                  >
                                    {subItem.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>

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

        {/* 3. Search Bar and Actions */}
        <div className="flex items-center gap-6">
          {/* Search Input - Hidden below 1400px */}
          <form onSubmit={handleSearch} className="relative hidden [@media(min-width:1400px)]:block w-[380px]">
            <input
              type="text"
              placeholder="Search for any product"
              className="w-full bg-gray-100/80 text-gray-600 rounded-full py-3 px-6 pr-12 outline-none focus:ring-2 focus:ring-[#F24E1E]/20 transition-all placeholder:text-gray-400"
            />
            <button
              type="submit"
              className="absolute right-1 top-1 bottom-1 bg-[#F24E1E] hover:bg-[#d63f14] text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors shadow-sm"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
          </form>

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
            <Link href="/cart">
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
            </Link>

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