"use client";

import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import TopBar from "./components/ui/layout/topbar";
import Navbar from "./components/ui/layout/navbar";
import Footer from "./components/ui/layout/Footer";
import { usePathname } from "next/navigation";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument-sans",
});



export default function ClientRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={`${instrumentSans.className} bg-white`}>
        {!pathname.startsWith("/vendor") && <TopBar />}
        {!pathname.startsWith("/vendor") && <Navbar />}
        <main className="bg-white">{children}</main>
        {!pathname.startsWith("/vendor") && <Footer />}
      </body>
    </html>
  );
}
