import React, { useState } from 'react';
import './SearchBar.css'; // Make sure to create a corresponding CSS file

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    // Implement your search logic here
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="search-container">
      <h2>Search our courses</h2>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search by course name, interest area or career"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
      </div>
    </div>
  );
};

export default SearchBar;