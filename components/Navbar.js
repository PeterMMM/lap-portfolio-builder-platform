import React from "react";

export default function Navbar() {
  return (
<nav className="w-full">
      <div className="container mx-auto flex justify-between items-center p-1">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/images/white.png"
            alt="Logo"
            className="w-32 h-16" // Adjust size as necessary
          />
        </div>

        {/* Primary Links beside the Logo */}
        <ul className="flex flex-row gap-4 ml-4 items-center">
          <li>
            <a
              href="#"
              className="hover:text-gray-200 transition-colors duration-300"
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
        <ul className="flex flex-row gap-4 ml-auto items-center">
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
    </nav>
  );
}
