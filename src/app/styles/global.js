// src/styles/global.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  li:hover {
    background-color: #f0f0f0;
  }

  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
`;

export default GlobalStyle;