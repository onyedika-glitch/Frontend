// src/components/LeadList.js
import React, { useState } from 'react';
import LeadDetailsModal from './leaddetailsmodaleaddetailsmodal';

const mockLeads = [
  { id: 1, name: 'Jane Reyes', value: '$10,000', decisionMaker: 'Yes' },
  { id: 2, name: 'John Doe', value: '$5,000', decisionMaker: 'No' },
  // Add more mock leads as needed
];

const LeadList = () => {
  const [selectedLead, setSelectedLead] = useState(null);

  const handleLeadClick = (lead) => {
    setSelectedLead(lead);
  };

  const closeModal = () => {
    setSelectedLead(null);
  };
  return (
    <LeadListContainer>
      <ul>
        {mockLeads.map((lead) => (
          <LeadItem key={lead.id} onClick={() => handleLeadClick(lead)}>
            {lead.name}
          </LeadItem>
        ))}
      </ul>
      {selectedLead && (
        <LeadDetailsModal lead={selectedLead} onClose={closeModal} />
    )}
  </LeadListContainer>
);
};

  return (
    <div>
      <ul>
        {mockLeads.map((lead) => (
          <li key={lead.id} onClick={() => handleLeadClick(lead)}>
            {lead.name}
          </li>
        ))}
      </ul>
      {selectedLead && (
        <LeadDetailsModal lead={selectedLead} onClose={closeModal} />
      )}
    </div>
  );

export default LeadList;