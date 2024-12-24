// src/components/SearchFilter.js
import React, { useState } from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
  padding: 10px;
  margin: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: calc(100% - 40px);
`;
const SearchFilter = ({ onFilter }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search leads..."
      value={query}
      onChange={handleInputChange}
    />
  );
};

export default SearchFilter;