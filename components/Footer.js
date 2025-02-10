import React from 'react'
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook, FaFacebookF } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-customGreen text-white py-6 w-full">
      <div className="container mx-auto">
        <nav className="p-8">
          {/* Parent grid container */}
          <ul className="grid grid-cols-4 gap-8 justify-items-start">

            {/* Column 1 */}
            <li className="flex">
              <img
                src="/images/green.png"
                alt="Logo"
                className="w-80 h-32 mt-[-50px] -ml-29" // Adjust the negative margin to move it up
              />
            </li>


            {/* Column 2 */}
            <li>
              <h3 className="font-bold text-lg mb-4">Social</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="flex items-center hover:underline"> <FaLinkedin className='mr-1' /> Linked In</a></li>
                <li><a href="/cookies" className="flex items-center hover:underline"><FaInstagram className='mr-1' />Instagram</a></li>
                <li><a href="/team" className="flex items-center hover:underline"><FaTwitter className='mr-1' />Twitter</a></li>
                <li><a href="/careers" className="flex items-center hover:underline"><FaFacebook className='mr-1' />Facebook</a></li>
              </ul>
            </li>

            {/* Column 3 */}
            <li>
              <h3 className="font-bold text-lg mb-4">Find Talent</h3>
              <ul className="space-y-2">
                <li><a href="/contact" className="hover:underline">Post a Job</a></li>
                <li><a href="/faq" className="hover:underline">Web Designers</a></li>
                <li><a href="/help" className="hover:underline">Illustrators</a></li>
                <li><a href="/cookies" className="hover:underline">Photographers</a></li>
              </ul>
            </li>

            {/* Column 4 */}
            <li>
              <h3 className="font-bold text-lg mb-4">About</h3>
              <ul className="space-y-2">
                <li><a href="/privacy" className="hover:underline">Blog</a></li>
                <li><a href="/terms" className="hover:underline">Careers</a></li>
                <li><a href="/cookies" className="hover:underline">Help Center</a></li>
                <li><a href="/cookies" className="hover:underline">Contact Us</a></li>
              </ul>
            </li>
          </ul>
        </nav>

        <p>&copy; {new Date().getFullYear()} <span className="">Porvocad Inc. All rights reserved</span></p>

      </div>
    </footer>
  )
}
