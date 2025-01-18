import React from 'react';

export default function Grid() {
  return (
    <div className="grid grid-cols-4 gap-6 px-8 py-8 ">
      {/* Card 1 */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src="https://i.pinimg.com/736x/7e/d4/db/7ed4db2eec6fcbd1e54c829faacbd203.jpg"
          alt="Portfolio Preview"
          className="w-full h-48 object-cover"
        />
        <div className="p-4 flex items-center">
          {/* Avocado SVG Icon */}
          <svg
            xmlns=""
            className="w-6 h-6 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 1C7.58 1 4 4.58 4 9C4 11.92 5.61 14.42 8 16.04C9.38 16.78 11 17.29 12 18C13 17.29 14.62 16.78 16 16.04C18.39 14.42 20 11.92 20 9C20 4.58 16.42 1 12 1ZM12 14C10.95 14 10 13.05 10 12C10 10.95 10.95 10 12 10C13.05 10 14 10.95 14 12C14 13.05 13.05 14 12 14Z" />
          </svg>
          <h3 className="text-lg font-bold text-gray-800">User brand name</h3>
        </div>
      
      </div>

      {/* Repeat the above block for more cards */}
      {Array.from({ length: 11 }).map((_, index) => (
        <div className="bg-white shadow-md rounded-lg overflow-hidden" key={index}>
          <img
            src="https://i.pinimg.com/736x/7e/d4/db/7ed4db2eec6fcbd1e54c829faacbd203.jpg"
            alt={`Portfolio Preview ${index + 2}`}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 flex items-center">
            {/* Avocado SVG Icon */}
            <svg
              xmlns="https://www.svgrepo.com/show/395799/avocado.svg"
              className="w-6 h-6 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 1C7.58 1 4 4.58 4 9C4 11.92 5.61 14.42 8 16.04C9.38 16.78 11 17.29 12 18C13 17.29 14.62 16.78 16 16.04C18.39 14.42 20 11.92 20 9C20 4.58 16.42 1 12 1ZM12 14C10.95 14 10 13.05 10 12C10 10.95 10.95 10 12 10C13.05 10 14 10.95 14 12C14 13.05 13.05 14 12 14Z" />
            </svg>
            <h3 className="text-lg font-bold text-gray-800">User brand name</h3>
          </div>
         
        </div>
      ))}
    </div>
  );
}
