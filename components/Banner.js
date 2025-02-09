import React from 'react';

export default function Banner() {
  return (
    <div className="bg-lightGreenOne flex justify-between items-center px-8 py-4 shadow-md w-full h-18 max-w-5xl mx-auto mt-10 rounded-full">
      <p className="text-brown-800 font-bold text-lg">Create your own portfolio now</p>
      <button className="flex items-center text-white bg-greenone hover:bg-brown-800 px-6 py-2 font-medium w-40 h-18 rounded-full -mr-7 ">
        Sign Up <span className="ml-7">→</span>
      </button>
    </div>
  );
}
