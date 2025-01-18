'use client';

import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Import the search icon from react-icons

const Search = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    // Implement your search logic here
    console.log('Search query:', query);
  };

  return (
    <div className="flex items-center bg-white text-gray-700 shadow-md rounded-full w-full max-w-3xl mx-auto py-2">
      <input
        type="text"
        placeholder="What are you looking for?"
        className="bg-transparent outline-none placeholder-gray-500 text-lg w-full py-2 px-4"  // Full width input
      />
      
      <div className="flex items-center justify-center bg-green-600 rounded-full p-3 mr-4 cursor-pointer" onClick={handleSearch}>
        <FaSearch size={20} className="text-white" />
      </div>
    </div>
  );
};

export default Search;
