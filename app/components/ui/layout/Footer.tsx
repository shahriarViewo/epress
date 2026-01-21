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
import Image from 'next/image';

// // Optimized Payment Logo Component
// const PaymentLogo = ({
//   src,
//   alt,
// }: {
//   src: string;
//   alt: string;
// }) => (
//   // Added 'relative' so the 'fill' image knows its boundaries
//   <div className="relative bg-white rounded shadow-sm w-16 h-10 flex items-center justify-center overflow-hidden">
//     <Image
//       src={src}
//       alt={alt}
//       fill // Automatically fills the parent container
//       sizes="64px" // Optimization: tells browser the image is small (w-16)
//       className="object-contain p-1" // Ensures the logo scales correctly without cropping
//       loading="lazy"
//     />
//   </div>
// );

// Optimized Payment Logo Component
const PaymentLogo = ({
  src,
  alt,
  color = 'white', // Default is white
}: {
  src: string;
  alt: string;
  color?: 'white' | 'blue'; // Allow white or blue
}) => {
  // Switch background based on color prop
  const bgClass = color === 'blue' ? 'bg-blue-600' : 'bg-white';

  return (
    <div className={`relative ${bgClass} rounded shadow-sm w-16 h-10 flex items-center justify-center overflow-hidden`}>
      <Image
        src={src}
        alt={alt}
        fill 
        sizes="64px" 
        className="object-contain p-1" 
        loading="lazy"
      />
    </div>
  );
};

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
                    info@oneprint.ai
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
            &copy; All Right reserved by <span className="text-orange-500 font-semibold">OnePrint</span> | {new Date().getFullYear()}
          </div>
          
          {/* Payment Icons */}
          <div className="flex items-center gap-2">
            <PaymentLogo 
              src="/images/footer/american_express.png"
              alt="American Express"
            />
            <PaymentLogo 
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" 
              alt="Mastercard" 
            />
            <PaymentLogo 
              src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" 
              alt="Visa" 
            />
            <PaymentLogo 
              src="https://upload.wikimedia.org/wikipedia/commons/5/57/Discover_Card_logo.svg" 
              alt="Discover" 
            />
          </div>
        </div>

        {/* === BOTTOM SECTION: About OnePrint === */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <h3 className="text-lg font-medium mb-4">About OnePrint</h3>
          <p className="text-gray-400 text-xs leading-relaxed max-w-4xl mx-auto">
We're not just here to print your merch - we're here to power your vision. At OnePrint, we believe creativity should be effortless, fun, and full of possibilities. That's why we built a print-on-demand platform made for the new generation of designers, influencers, hustlers, artists, and side-hustlers. Whether you're printing your art on a hoodie, starting a streetwear brand from your dorm, or making custom gifts for your crew - we're here for all of it. No upfront costs. No inventory stress. No gatekeepers. Just your ideas, our platform, and unlimited potential.           </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;