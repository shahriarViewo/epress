import GridShape from "@/components/common/GridShape";
import ThemeTogglerTwo from "@/components/common/ThemeTogglerTwo";
import { ThemeProvider } from "@/context/ThemeContext";
import Link from "next/link";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative p-6 bg-white z-1 dark:bg-gray-900 sm:p-0">
      <ThemeProvider>
        <div className="relative flex lg:flex-row w-full h-screen justify-center flex-col dark:bg-gray-900 sm:p-0">
          {children}
          <div className="lg:w-1/2 w-full h-full bg-blue-950 dark:bg-white/5 lg:grid items-center hidden">
            <div className="relative items-center justify-center flex z-1">
              {/* Grid Shape Background */}
              <GridShape />
              <div className="flex flex-col items-center max-w-xs">
                {/* OnePrint Logo */}
                <div className="mb-4 text-center">
                  <h2 className="text-4xl font-bold text-white mb-2">OnePrint</h2>
                  <div className="h-1 w-16 bg-blue-500 mx-auto"></div>
                </div>
                {/* Branding Text */}
                <p className="text-center text-gray-300 dark:text-white/60 text-sm leading-relaxed">
                  OnePrint - Custom Printed Merchandise
                </p>
              </div>
            </div>
          </div>
          <div className="fixed bottom-6 right-6 z-50 hidden sm:block">
            <ThemeTogglerTwo />
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}
