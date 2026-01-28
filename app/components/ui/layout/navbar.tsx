"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search, ShoppingBag, User, Menu, X, Home, Info, Phone, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  
  // 1. STATE: Tracks if a menu was explicitly clicked
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isMenuOpen]);

  // 2. CLICK OUTSIDE: Closes the clicked menu if you click elsewhere
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMobileSubmenu = (name: string) => {
    setMobileSubmenuOpen(mobileSubmenuOpen === name ? null : name);
  };

  // 3. HANDLER: Toggles state on click
  const handleDesktopLinkClick = (e: React.MouseEvent, link: NavLink) => {
    if (link.submenu && link.submenu.length > 0) {
      e.preventDefault();
      // If it's already open, close it. If closed, open it.
      setActiveDropdown(activeDropdown === link.name ? null : link.name);
    }
  };

  const navLinks: NavLink[] = [
    { name: "Home", href: "/", icon: <Home size={18} className="mr-3" /> },
    {
      name: "Products",
      href: "",
      icon: <ShoppingBag size={18} className="mr-3" />,
      submenu: [
        { name: "All Products", href: "/products" },
        { name: "T-Shirt", href: "/all-tshirt" },
        { name: "Hat", href: "/all-cap" },
        { name: "Mug", href: "/all-mug" },
      ]
    },
    {
      name: "About",
      href: "",
      icon: <Info size={18} className="mr-3" />,
      submenu: [
        { name: "About us", href: "/about" },
        { name: "Our Mission", href: "/mission" },
        { name: "Our Vision", href: "/vision" },
        { name: "Values", href: "/values", },
        { name: "Why Choose us", href: "/why-choose-us" },
      ]
    },
    { name: "Contact us", href: "/contact", icon: <Phone size={18} className="mr-3" /> },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search triggered");
  };

  return (
    <nav ref={navRef} className="bg-white py-2 md:py-4 shadow-sm border-b border-gray-100 font-sans relative z-50">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between md:px-16 px-4">

        {/* Left side - Hamburger and Logo */}
        <div className="flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden mr-4 text-gray-700 hover:text-[#F24E1E] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

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
            const isClickedOpen = activeDropdown === link.name;

            return (
              // 'group' class enables the CSS hover effect
              <div key={link.name} className="relative group h-full flex items-center">
                <Link
                  href={link.href}
                  onClick={(e) => handleDesktopLinkClick(e, link)}
                  className={`flex items-center gap-1 text-[17px] font-medium transition-colors py-4 ${
                    isActive || isClickedOpen ? "text-[#F24E1E]" : "text-gray-900 hover:text-[#F24E1E]"
                  }`}
                >
                  {link.name}
                  {hasSubmenu && (
                    <ChevronDown 
                      size={14} 
                      // Rotate on Hover (group-hover) OR Click (isClickedOpen)
                      className={`mt-[2px] transition-transform duration-200 group-hover:rotate-180 ${isClickedOpen ? "rotate-180" : ""}`} 
                    />
                  )}
                </Link>

                {/* Dropdown Menu - THE HYBRID FIX */}
                {hasSubmenu && (
                  <div 
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 ease-out z-50 min-w-[200px]
                    
                    /* 1. Default State: Hidden */
                    opacity-0 invisible translate-y-2 pointer-events-none

                    /* 2. Hover State: Visible via CSS */
                    group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:pointer-events-auto

                    /* 3. Click State: Visible via React State (overrides default) */
                    ${isClickedOpen ? "!opacity-100 !visible !translate-y-0 !pointer-events-auto" : ""}
                    `}
                  >
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden p-2">
                      {link.submenu!.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => setActiveDropdown(null)} // Close on selection
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
        <div className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ${isMenuOpen ? 'visible' : 'invisible'}`}>
          <div
            className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
            onClick={() => setIsMenuOpen(false)}
          />
          <div
            className={`absolute left-0 top-0 w-4/5 max-w-xs h-full bg-white/95 backdrop-blur-md shadow-2xl transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
          >
            <div className="h-full flex flex-col">
              <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">Menu</h3>
                <button onClick={() => setIsMenuOpen(false)}>
                  <X size={24} className="text-gray-500 hover:text-[#F24E1E]" />
                </button>
              </div>
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
                            className={`flex-1 flex items-center py-3 px-3 rounded-lg transition-all duration-200 group ${isActive ? "bg-[#F24E1E]/10 text-[#F24E1E]" : "text-gray-700 hover:bg-gray-50 hover:text-[#F24E1E]"}`}
                          >
                            <span className={`mr-3 ${isActive ? "text-[#F24E1E]" : "text-[#F24E1E]/70 group-hover:text-[#F24E1E]"}`}>
                              {link.icon}
                            </span>
                            <span className="font-medium">{link.name}</span>
                          </Link>
                          {hasSubmenu && (
                            <button
                              onClick={() => toggleMobileSubmenu(link.name)}
                              className="p-3 text-gray-500 hover:text-[#F24E1E]"
                            >
                              <ChevronDown size={18} className={`transition-transform duration-200 ${isSubmenuOpen ? "rotate-180" : ""}`} />
                            </button>
                          )}
                        </div>
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
            </div>
          </div>
        </div>

        {/* Search Bar and Actions */}
        <div className="flex items-center gap-6">
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

          <button className="[@media(min-width:1400px)]:hidden w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors">
            <Search size={22} />
          </button>

          <div className="flex items-center gap-3">
            <Link href="/cart">
              <button className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors relative">
                <ShoppingBag size={22} />
                <span className="absolute top-0 right-0 transform translate-x-[-2px] translate-y-[2px] bg-[#F24E1E] text-white text-[11px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                  1
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
