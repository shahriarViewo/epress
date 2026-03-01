"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Dropdown } from "../../../ui/dropdown/Dropdown";
import { DropdownItem } from "../../../ui/dropdown/DropdownItem";

export default function NotificationDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifying, setNotifying] = useState(true);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  const handleClick = () => {
    toggleDropdown();
    setNotifying(false);
  };
  return (
    <div className="relative">
      <button
        className="relative dropdown-toggle flex items-center justify-center text-gray-500 transition-colors bg-white border border-gray-200 rounded-full hover:text-gray-700 h-11 w-11 hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
        onClick={handleClick}
      >
        <span
          className={`absolute right-0 top-0.5 z-10 h-2 w-2 rounded-full bg-orange-400 ${
            !notifying ? "hidden" : "flex"
          }`}
        >
          <span className="absolute inline-flex w-full h-full bg-orange-400 rounded-full opacity-75 animate-ping"></span>
        </span>
        <svg
          className="fill-current"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.75 2.29248C10.75 1.87827 10.4143 1.54248 10 1.54248C9.58583 1.54248 9.25004 1.87827 9.25004 2.29248V2.83613C6.08266 3.20733 3.62504 5.9004 3.62504 9.16748V14.4591H3.33337C2.91916 14.4591 2.58337 14.7949 2.58337 15.2091C2.58337 15.6234 2.91916 15.9591 3.33337 15.9591H4.37504H15.625H16.6667C17.0809 15.9591 17.4167 15.6234 17.4167 15.2091C17.4167 14.7949 17.0809 14.4591 16.6667 14.4591H16.375V9.16748C16.375 5.9004 13.9174 3.20733 10.75 2.83613V2.29248ZM14.875 14.4591V9.16748C14.875 6.47509 12.6924 4.29248 10 4.29248C7.30765 4.29248 5.12504 6.47509 5.12504 9.16748V14.4591H14.875ZM8.00004 17.7085C8.00004 18.1228 8.33583 18.4585 8.75004 18.4585H11.25C11.6643 18.4585 12 18.1228 12 17.7085C12 17.2943 11.6643 16.9585 11.25 16.9585H8.75004C8.33583 16.9585 8.00004 17.2943 8.00004 17.7085Z"
            fill="currentColor"
          />
        </svg>
      </button>

      <Dropdown
        isOpen={isOpen}
        onClose={closeDropdown}
        className="absolute right-0 mt-2.5 flex h-90 w-75 flex-col rounded-2xl border border-gray-200 bg-white shadow-theme-lg dark:border-gray-800 dark:bg-gray-900 sm:w-80"
      >
        <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-800">
          <h5 className="text-lg font-medium text-gray-800 dark:text-gray-200">
            Notification
          </h5>
        </div>

        <div className="flex flex-col h-full overflow-y-auto">
          {/* Notification List can be updated to point to # */}
          <Link
            href="#"
            className="flex items-center gap-4 px-4 py-3 border-b border-gray-200 hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800/50"
          >
            <div className="relative w-10 h-10 overflow-hidden rounded-full shrink-0">
              <Image
                width={40}
                height={40}
                src="/images/user/owner.jpg" // Assuming image exists
                alt="User"
              />
              <span className="absolute bottom-0 right-0 z-10 w-3 h-3 bg-green-500 border-2 border-white rounded-full dark:border-gray-900"></span>
            </div>

            <div>
              <p className="mb-0.5 text-sm font-semibold text-gray-700 dark:text-gray-300">
                Someone
                <span className="font-normal text-gray-500 dark:text-gray-400">
                  mentioned you in a comment.
                </span>
              </p>
              <p className="text-xs text-gray-400">10:48 PM</p>
            </div>
          </Link>
          
          {/* Add more notification items if needed */}

        </div>
      </Dropdown>
    </div>
  );
}
