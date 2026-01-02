import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // -------------------------------------------------------------------------
  // ⚠️ CRITICAL CHANGE: 
  // We disabled 'export' because your Dashboard needs to handle Dynamic IDs 
  // (like product IDs) that don't exist yet at build time.
  // -------------------------------------------------------------------------
  
  // output: 'export',   <-- COMMENTED OUT
  // distDir: 'dist',    <-- COMMENTED OUT (Standard .next folder is better for dev)

  images: {
    // unoptimized: true, // You can keep this if you plan to deploy to cPanel later, but generally false is better for performance.
    domains: ['placehold.co', 'images.unsplash.com', 'cdn.pixabay.com', '127.0.0.1', 'localhost'], // Added localhost for testing
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;