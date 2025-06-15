// SearchBar component with a search icon and rounded input field.
// It accepts `value` and `onChange` props to control input from the parent component.

import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="mt-10 flex justify-center">
  <div className="relative w-full max-w-md">
    <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500" />
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search by name or specialization..."
      className="w-full pl-12 pr-4 py-3 rounded-full 
                 bg-blue-50 text-blue-900 placeholder-blue-400 
                 shadow-md outline-none
                 transition duration-300
                 hover:border-2 hover:border-blue-400 
                 focus:border-2 focus:border-blue-500"
    />
  </div>
</div>


  );
};

export default SearchBar;


