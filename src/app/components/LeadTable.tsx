import React from 'react';

interface Lead {
  name: string;
  topic: string;
  status: string;
  date: string;
}

const leads: Lead[] = [
  { name: 'Winford Asher', topic: 'Cafe A100 for commercial use', status: 'New', date: '4/02/2024 12:00 PM' },
  { name: 'Josia Love', topic: 'Upgrading service plan', status: 'New', date: '3/30/2024 7:45 AM' },
  { name: 'Harrison Curtis', topic: 'Issue with throughput on EspressoMaster', status: 'New', date: '3/28/2024 3:30 PM' },
  { name: 'Jermaine Berrett', topic: 'New roaster in distribution facility', status: 'New', date: '3/25/2024 11:05 AM' },
  { name: 'Gerald Stephens', topic: 'Concerns on current machines', status: 'New', date: '3/23/2024 4:50 PM' },
  { name: 'Halle Griffiths', topic: 'Expanding business', status: 'New', date: '3/21/2024 10:20 AM' },
  { name: 'Rachel Michael', topic: 'Addressing service concerns', status: 'New', date: '3/21/2024 1:15 PM' },
  { name: 'Alex Baker', topic: 'Premium coffee beans', status: 'New', date: '3/19/2024 8:00 AM' },
  { name: 'Lilly Pyles', topic: 'Cafe A100 bulk rate', status: 'New', date: '3/17/2024 2:45 PM' },
  { name: 'Jane Reyes', topic: 'Improving cost per cup', status: 'New', date: '3/17/2024 9:30 AM' },
];

const LeadTable: React.FC = () => {
  return (
  <section className="bg-white p-6 rounded-lg shadow">
   <div className="flex items-center mb-4">
    <input className="flex-1 p-2 border rounded" placeholder="Sort, filter and search with Copilot" type="text"/>
    <img alt="Copilot icon" className="ml-2" height="20" src="https://storage.googleapis.com/a1aa/image/LAee0yLDUOvULU5Ll8rWvHEyepeeFCcMDXJzjv4RNodscyvfE.jpg" width="20"/>
   </div>
   <table className="w-full text-left">
    <thead>
     <tr>
      <th className="p-2 border-b">
       Name
      </th>
      <th className="p-2 border-b">
       Topic
      </th>
      <th className="p-2 border-b">
       Status reason
      </th>
      <th className="p-2 border-b">
       Created on
      </th>
     </tr>
    </thead>
    <tbody>
     {leads.map((lead, index) => (
     <tr key={index}>
      <td className="p-2 border-b">
       {lead.name}
      </td>
      <td className="p-2 border-b">
       {lead.topic}
      </td>
      <td className="p-2 border-b">
       {lead.status}
      </td>
      <td className="p-2 border-b">
       {lead.date}
      </td>
     </tr>
     ))}
    </tbody>
   </table>
  </section>
  );
};

export default LeadTable;
