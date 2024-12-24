// src/components/ViewToggle.js
import React, { useState } from 'react';
import styled from 'styled-components';

const ToggleButton = styled.button`
  padding: 10px 20px;
  margin: 20px;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #005bb5;
  }
`;
const ViewToggle = ({ onToggle }) => {
  const [isListView, setIsListView] = useState(true);

  const toggleView = () => {
    setIsListView(!isListView);
    onToggle(!isListView);
  };

  return (
    <button onClick={toggleView}>
      {isListView ? 'Switch to Chart View' : 'Switch to List View'}
    </button>
  );
};

export default ViewToggle;