import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full">
      <div className="container mx-auto flex justify-between items-center p-1">
        {/* Logo */}
        <div className="flex items-center text-xl font-bold text-green-800 p-2 rounded">
          <img
            src=".../images/white.png"
            alt="Logo"
            className="w-10 h-10 mr-2 object-cover shadow-lg rounded-full"
          />
        </div>

        {/* Primary Links beside the Logo */}
        <ul className="flex flex-row gap-4 ml-4">
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
        <ul className="flex flex-row gap-4 ml-auto">
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
