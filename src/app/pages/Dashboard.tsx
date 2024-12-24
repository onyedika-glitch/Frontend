import React from 'react';
import LeadCard from '../components/LeadCard';
import ActivityCard from '../components/ActivityCard';
import LeadTable from '../components/LeadTable';

const Dashboard: React.FC = () => {
  return (
  <div>
   <section className="bg-white p-6 rounded-lg shadow mb-6">
    <h2 className="text-xl font-bold mb-2">
     Hi Mona,
     <span className="text-blue-600">
      68% of goal achieved
     </span>
     and rest can be achieved by focusing on 20 top leads.
    </h2>
    <p className="mb-4">
     Copilot has pinpointed 20 key leads that show strong purchase intent and are actively engaging. These leads need your focus.
    </p>
    <div className="flex space-x-4">
     <LeadCard buttonText="Engage with Jane Reyes" description="Jane may be interested in upgrading espresso machines for her in-store coffee shops." imageUrl="https://placehold.co/40x40" name="Jane Reyes" title="COO - Northwind Traders">
     </LeadCard>
     <LeadCard buttonText="Prepare for meeting with Allan" description="Prepare for high-buying intent meeting Copilot scheduled for 2 PM regarding upgrading service contract." imageUrl="https://placehold.co/40x40" name="Allan Munger" title="Head of Real Estate Development - Contoso Coffee">
     </LeadCard>
    </div>
   </section>
   <section className="bg-white p-6 rounded-lg shadow mb-6">
    <h2 className="text-xl font-bold mb-2">
     Other key activities
    </h2>
    <div className="space-y-4">
     <ActivityCard description="Review draft and reply to Chris Naido" imageUrl="https://placehold.co/40x40" title="Cafe A100 for Woodland Bank">
     </ActivityCard>
     <ActivityCard description="Prepare me for Fabrikam's key stakeholder meeting" imageUrl="https://placehold.co/40x40" title="Partnership opportunity for Fabrikam">
     </ActivityCard>
    </div>
    <button className="text-blue-600 mt-4">
     Show all key activities
    </button>
   </section>
   <LeadTable>
   </LeadTable>
  </div>
  );
};

export default Dashboard;
