import React from 'react';

export default function Banner() {
  return (
    <div className="bg-beige flex justify-between items-center px-8 py-4  shadow-md w-full h-18 max-w-5xl mx-auto mt-10">
      <p className="text-brown-800 font-bold text-lg">Create your own portfolio now</p>
      <button className="flex items-center text-white bg-brown-700 hover:bg-brown-800 px-6 py-2 font-medium w-40 h-18 -mr-8">
        Sign Up <span className="ml-2">→</span>
      </button>
    </div>
  );
}
