// src/components/LeadDetailsModal.js
import React from 'react';
import styled from 'styled-components';

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;
const LeadDetailsModal = ({ lead, onClose }) => {
  return (
    <div className="modal">
      <h2>Engage with {lead.name}</h2>
      <p>Deal Value: {lead.value}</p>
      <p>Decision Maker: {lead.decisionMaker}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default LeadDetailsModal;