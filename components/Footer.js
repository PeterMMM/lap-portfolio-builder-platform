import React from 'react';
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-customGreen text-white py-6 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <nav className="p-6">
          {/* Responsive Grid Layout */}
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">

            {/* Column 1 - Logo */}
            <li className="flex items-center">
              <img
                src="/images/green.png"
                alt="Logo"
                className="w-[120px] sm:w-[180px] md:w-[200px] lg:w-[250px] h-auto object-contain"
              />
            </li>

            {/* Column 2 - Social */}
            <li>
              <h3 className="font-bold text-lg mb-4">Social</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex items-center hover:underline">
                    <FaLinkedin className='mr-2' /> LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex items-center hover:underline">
                    <FaInstagram className='mr-2' /> Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="flex items-center hover:underline">
                    <FaTwitter className='mr-2' /> Twitter
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex items-center hover:underline">
                    <FaFacebook className='mr-2' /> Facebook
                  </a>
                </li>
              </ul>
            </li>

            {/* Column 3 - Find Talent */}
            <li>
              <h3 className="font-bold text-lg mb-4">Find Talent</h3>
              <ul className="space-y-2">
                <li><a href="/contact" className="hover:underline">Post a Job</a></li>
                <li><a href="/faq" className="hover:underline">Web Designers</a></li>
                <li><a href="/help" className="hover:underline">Illustrators</a></li>
                <li><a href="/photographers" className="hover:underline">Photographers</a></li>
              </ul>
            </li>

            {/* Column 4 - About */}
            <li>
              <h3 className="font-bold text-lg mb-4">About</h3>
              <ul className="space-y-2">
                <li><a href="/blog" className="hover:underline">Blog</a></li>
                <li><a href="/careers" className="hover:underline">Careers</a></li>
                <li><a href="/help-center" className="hover:underline">Help Center</a></li>
                <li><a href="/contact-us" className="hover:underline">Contact Us</a></li>
              </ul>
            </li>
          </ul>
        </nav>

        {/* Footer Bottom Section */}
        <p className="text-center mt-6 text-sm">&copy; {new Date().getFullYear()} Porvocad Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
