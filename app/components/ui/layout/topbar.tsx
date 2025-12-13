"use client";

import { FC } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoMdArrowDropdown } from 'react-icons/io';

const Topbar: FC = () => {
  return (
    <div className="w-full text-white text-sm bg-black">
      <div className="w-full px-16 py-2 flex justify-between items-center">
        {/* Left Side */}
        <div className="flex space-x-6 items-center">
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-white text-xs" />
            <span>+880 1711 738135</span>
          </div>
          <div className="flex items-center space-x-2">
            <MdEmail className="text-white text-base" />
            <span>info@printpress.net</span>
          </div>
        </div>
        
        {/* Right Side */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-1 cursor-pointer">
            <span>Eng</span>
            <IoMdArrowDropdown className="text-white" />
          </div>
          <div className="border-l border-white h-4" />
          <button className="hover:underline">
            Track Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;