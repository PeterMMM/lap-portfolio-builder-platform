import React from 'react';

export default function Grid() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-12 py-8 ">
      {/* Card 1 */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer">
        <img
          src="/images/portfo.png" // Ensure correct image path here
          alt="Portfolio Preview"
          className="w-full h-48 object-cover" // Adjusted size
        />
        <div className="pt-0 pl-2 flex items-center">
          {/* Avocado Icon */}
          <img
            src="/images/avoIcon.png" // Correct icon path here
            alt="Avocado Icon"
            className="w-16 h-16 mt-2 -ml-2 -mr-3" // Adjusted size for the icon
          />
          <h3 className="text-lg font-bold text-gray-800 ">User brand name</h3>
        </div>
      </div>

      {/* Repeat the above block for more cards */}
      {Array.from({ length: 11 }).map((_, index) => (
        <div className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer" key={index}>
          <img
            src="/images/portfo.png" // Ensure correct image path here
            alt={`Portfolio Preview ${index + 2}`}
            className="w-full h-48 object-cover" // Adjusted size
          />
          <div className="pt-0 pl-2 flex items-center">
            {/* Replace Avocado SVG Icon with Image */}
            <img
              src="/images/avoIcon.png" // Correct icon path here
              alt="Avocado Icon"
              className="w-16 h-16 mt-2 -ml-2 -mr-3" // Adjusted size for the icon
            />
            <h3 className="text-lg font-bold text-gray-800">User brand name</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
