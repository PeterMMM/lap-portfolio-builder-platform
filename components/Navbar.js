import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#364C39] h-14 flex items-center">
      {/* Logo - Stuck to the Left */}
      <div className="h-14 flex items-center absolute left-0">
        <img
          src="/images/white.png"
          alt="Logo"
          className="h-14 object-contain" // Matches navbar height
        />
      </div>

      {/* Main Content (Centering & Spacing) */}
      <div className="w-full flex justify-center -ml-96">
        {/* Primary Links beside the Logo */}
        <ul className="flex flex-row gap-14 items-center text-white  ">
          <li>
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">
              Profiles
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">
              Blog
            </a>
          </li>
        </ul>
      </div>

      {/* Secondary Links on the Right */}
      <div className="absolute right-0 flex items-center pr-4">
        <ul className="flex flex-row gap-4 items-center text-white">
          <li>
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">
              Sign up
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
