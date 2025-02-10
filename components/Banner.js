import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

export default function Banner() {
  return (
    <div className="bg-[#E4F5DE] flex justify-between items-center px-8 py-4 shadow-md w-full h-18 max-w-5xl mx-auto mt-10 rounded-full">
      <p className="text-[#537156] font-bold text-lg">Create your own portfolio now</p>
      <button className="flex items-center text-white font-bold bg-[#4A7337] hover:bg-[#9EDF9C] pl-10 py-2 font-medium w-40 h-18 rounded-full -mr-8">
        Sign Up <span className="ml-2"><FaArrowRight /></span>
      </button>
    </div>
  );
}
