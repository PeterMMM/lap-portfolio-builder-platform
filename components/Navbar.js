"use client";
import React, { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full bg-[#364C39] text-white">
      <div className="w-full mx-auto flex justify-between items-center pl-0 pr-4">
        {/* Logo */}
        <div className="flex items-center bg-white px-2">
          <img
            src="/images/green.svg"
            alt="Logo"
            className="w-32 h-16"
          />
        </div>

        {/* Hamburger Icon for mobile */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Primary Links beside the Logo */}
        <ul className="hidden lg:flex flex-row gap-5 ml-4 items-center">
          <li>
            <a
              href="#"
              className="hover:text-gray-200 transition-colors duration-300 font-bold"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-gray-200 transition-colors duration-300"
            >
              Profiles
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-gray-200 transition-colors duration-300"
            >
              Blog
            </a>
          </li>
        </ul>

        {/* Secondary Links on the Right */}
        <ul className="hidden lg:flex flex-row gap-5 ml-auto items-center">
          <li>
            <a
              href="#"
              className="hover:text-gray-200 transition-colors duration-300"
            >
              Sign up
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-gray-200 transition-colors duration-300"
            >
              Login
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden ${isMobileMenuOpen ? "block" : "hidden"} bg-[#364C39] p-4`}
      >
        <ul className="flex flex-col gap-4">
          <li>
            <a
              href="#"
              className="text-white hover:text-gray-200 transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-gray-200 transition-colors duration-300"
            >
              Profiles
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-gray-200 transition-colors duration-300"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-gray-200 transition-colors duration-300"
            >
              Sign up
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-gray-200 transition-colors duration-300"
            >
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
