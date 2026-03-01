"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSidebar } from "@/context/SidebarContext";
import NotificationDropdown from "./header/NotificationDropdown"; // Adjusted path
import UserDropdown from "./header/UserDropdown"; // Adjusted path
import { SearchIcon, MenuIcon } from "lucide-react"; // Using lucide-react since it is generally available

const AppHeader: React.FC = () => {
  const [isApplicationMenuOpen, setApplicationMenuOpen] = useState(false);

  // useSidebar hook for sidebar control
  const { isMobileOpen, toggleSidebar, toggleMobileSidebar } = useSidebar();

  const handleToggle = () => {
    if (window.innerWidth >= 1024) {
      toggleSidebar();
    } else {
      toggleMobileSidebar();
    }
  };

  const toggleApplicationMenu = () => {
    setApplicationMenuOpen(!isApplicationMenuOpen);
  };
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="sticky top-0 flex w-full bg-white border-gray-200 z-99999 lg:border-b">
      <div className="flex flex-col items-center justify-between grow lg:flex-row lg:px-6">
        <div className="flex items-center justify-between w-full gap-2 px-3 py-3 border-b border-gray-200 sm:gap-4 lg:justify-normal lg:border-b-0 lg:px-0 lg:py-4">
          <button
            className="items-center justify-center w-10 h-10 text-gray-500 border-gray-200 rounded-lg z-99999 lg:flex lg:h-11 lg:w-11 lg:border"
            onClick={handleToggle}
            aria-label="Toggle Sidebar"
          >
           <MenuIcon />
          </button>

          <Link href="/" className="lg:hidden text-2xl font-bold text-brand-500 tracking-tight">
            OnePrint
          </Link>
        </div>

        <div className="hidden items-center justify-between w-full gap-4 px-3 py-2 sm:px-4 lg:flex lg:justify-end lg:px-0 lg:py-0">
            {/* Search Input */}
          <div className="hidden relative sm:block">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"/>
            <input
               ref={inputRef}
              type="text"
              placeholder="Search (Ctrl+K)"
              className="w-full py-2.5 pl-10 pr-4 text-sm text-gray-700 bg-gray-50 border border-transparent rounded-lg focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-0"
            />
          </div>

          <div className="flex items-center gap-3 lg:gap-4">
            <NotificationDropdown />
            <UserDropdown />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
