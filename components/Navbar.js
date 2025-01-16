import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full">
      <div className="container mx-auto flex justify-between items-center p-1">
        {/* Logo */}
        <div className="text-xl font-bold text-green-800 p-2 rounded">
          <a href="#" className="hover:text-green-600 ">
            Porvocad
          </a>
        </div>

        {/* Image between Logo and Primary Links */}
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/002/497/229/small_2x/avocado-fruit-logo-healthy-food-symbols-free-vector.jpg"
          alt="Icon"
          className="w-8 h-8 mx-4 object-cover"
        />

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
