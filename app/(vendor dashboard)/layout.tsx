"use client";

import { SidebarProvider, useSidebar } from "@/context/SidebarContext";
import { ThemeProvider } from "@/context/ThemeContext";
import AppHeader from "../../components/layout/admin/AppHeader";
import AppSidebar from "../../components/layout/admin/AppSidebar";
import Backdrop from "../../components/layout/admin/Backdrop";
import React from "react";

function AdminLayoutContent({
    children,
  }: {
    children: React.ReactNode;
  }) {
    const { isExpanded, isHovered, isMobileOpen } = useSidebar();
  
    // Dynamic class for main content margin based on sidebar state
    const mainContentMargin = isMobileOpen
      ? "ml-0"
      : isExpanded || isHovered
      ? "lg:ml-[290px]"
      : "lg:ml-[90px]";
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-cyan-50 xl:flex">
        {/* Sidebar and Backdrop */}
        <AppSidebar />
        <Backdrop />
        {/* Main Content Area */}
        <div
          className={`flex-1 transition-all  duration-300 ease-in-out ${mainContentMargin}`}
        >
          {/* Header */}
          <AppHeader />
          {/* Page Content */}
          <div className="p-4 mx-auto max-w-screen-2xl md:p-6">{children}</div>
        </div>
      </div>
    );
  }

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
        <SidebarProvider>
            <AdminLayoutContent>
                {children}
            </AdminLayoutContent>
        </SidebarProvider>
    </ThemeProvider>
  );
}
