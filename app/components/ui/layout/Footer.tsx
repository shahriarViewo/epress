import React from 'react';
import { 
  Mail, 
  Phone, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram 
} from 'lucide-react';
import Link from 'next/link';

// --- Data for the Links ---
const companyLinks = [
  { name: 'About Us', href: '#' },
  { name: 'News & Blog', href: '#' },
  { name: 'All Brands Lists', href: '#' },
  { name: 'Flash Sale', href: '#' },
  { name: 'My Account', href: '#' },
];

const categoryLinks = [
  { name: 'Hats Collection', href: '#' },
  { name: 'T-Shirt Collection', href: '#' },
  { name: 'Mug Collection', href: '#' },
  { name: 'Women Collection', href: '#' },
  { name: 'Men Collection', href: '#' },
  { name: 'Kids Collection', href: '#' },
  { name: 'Toy Collection', href: '#' },
];

const serviceLinks = [
  { name: 'Faq', href: '#' },
  { name: 'Return Policy', href: '#' },
  { name: 'Shipping Policy', href: '#' },
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms & Condition', href: '#' },
];

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-white pt-16 pb-8 border-t border-white/10 font-sans">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* === TOP SECTION === */}
        {/* We use a 12-column grid. Left side takes 4 cols, Right side takes 8 cols */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0">
          
          {/* 1. Left Column: Brand & Contact */}
          {/* Use lg:border-r to create the vertical divider line */}
          <div className="lg:col-span-4 flex flex-col gap-8 lg:pr-12 lg:border-r border-white/10">
            
            {/* Logo */}
            <h2 className="text-4xl font-medium tracking-tight">OnePrint</h2>
            
            {/* Contact Info Grid (Email & Call) */}
            <div className="flex flex-col sm:flex-row gap-6 mt-2">
              {/* Email Block */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1F1F1F] flex items-center justify-center text-gray-400 shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-semibold tracking-wider">Email</p>
                  <a href="mailto:info@OnePrint.net" className="text-sm hover:text-orange-500 transition-colors">
                    info@OnePrint.net
                  </a>
                </div>
              </div>

              {/* Phone Block */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1F1F1F] flex items-center justify-center text-gray-400 shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-semibold tracking-wider">Call Us</p>
                  <a href="tel:7186632848" className="text-sm hover:text-orange-500 transition-colors">
                    7186632848
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-2">
              <h3 className="text-lg font-medium mb-4">Social Media</h3>
              <div className="flex gap-3">
                {[
                  { Icon: Facebook, href: '#' },
                  { Icon: Twitter, href: '#' }, // Using Twitter icon for 'X' as standard lucide replacement
                  { Icon: Linkedin, href: '#' },
                  { Icon: Instagram, href: '#' }
                ].map(({ Icon, href }, idx) => (
                  <Link 
                    key={idx} 
                    href={href}
                    className="w-10 h-10 rounded-full bg-[#1F1F1F] flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all duration-300"
                  >
                    <Icon size={18} />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* 2. Right Column: Navigation Links */}
          {/* Nested Grid for the 3 Link Columns */}
          <div className="lg:col-span-8 lg:pl-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              
              {/* Company */}
              <div>
                <h3 className="text-xl font-medium mb-6">Company</h3>
                <ul className="space-y-4">
                  {companyLinks.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Categories */}
              <div>
                <h3 className="text-xl font-medium mb-6">Popular Categories</h3>
                <ul className="space-y-4">
                  {categoryLinks.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Customer Service */}
              <div>
                <h3 className="text-xl font-medium mb-6">Customer Service</h3>
                <ul className="space-y-4">
                  {serviceLinks.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* === MIDDLE SECTION: Copyright & Payment === */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          
          <div className="text-gray-400 text-sm">
            © All Right reserved by <span className="text-orange-500 font-semibold">OnePrint</span> | 2025
          </div>
          
          {/* Payment Icons (Simulated with simple badges for this demo) */}
          <div className="flex items-center gap-2">
            {['PayPal', 'Mastercard', 'Visa', 'Discover'].map((brand) => (
              <div key={brand} className="bg-white px-2 py-1 rounded shadow-sm">
                 {/* In a real app, use <Image src="/visa.png" ... /> here */}
                 <span className="text-[10px] font-bold text-black uppercase tracking-tighter">{brand}</span>
              </div>
            ))}
          </div>
        </div>

        {/* === BOTTOM SECTION: About Description === */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <h3 className="text-lg font-medium mb-4">About Description</h3>
          <p className="text-gray-400 text-xs leading-relaxed max-w-4xl mx-auto">
            We're committed to delivering a seamless shopping experience with fast shipping, secure payments, and dedicated customer support. Whether you're shopping for the latest trends or everyday essentials, we ensure quality, reliability, and satisfaction. Join thousands of happy customers and discover the difference today!
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;