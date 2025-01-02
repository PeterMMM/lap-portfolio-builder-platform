import React from "react";

export default function Navbar() {
  return (
<nav className="w-full">
  <div className="container mx-auto flex justify-between items-center p-1">
    {/* Logo */}
    <div className="text-xl font-bold bg-green-700 text-white p-2 rounded">
      <a href="#" className="hover:text-gray-200">
        Logo
      </a>
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
