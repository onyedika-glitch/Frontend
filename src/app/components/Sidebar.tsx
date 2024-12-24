import React from 'react';

const Sidebar: React.FC = () => {
  return (
<aside className="w-64 bg-gray-800 text-white flex flex-col">
 <div className="p-4 text-lg font-bold">
  Dynamics 365 | Sales hub
 </div>
 <nav className="flex-1">
  <ul>
   <li className="p-4 hover:bg-gray-700">
    Home
   </li>
   <li className="p-4 hover:bg-gray-700">
    Recent
   </li>
   <li className="p-4 hover:bg-gray-700">
    Pinned
   </li>
   <li className="p-4 hover:bg-gray-700">
    My work
   </li>
   <li className="pl-8 p-2 hover:bg-gray-700">
    Sales accelerator
   </li>
   <li className="pl-8 p-2 hover:bg-gray-700">
    Dashboards
   </li>
   <li className="pl-8 p-2 hover:bg-gray-700">
    Activities
   </li>
   <li className="p-4 hover:bg-gray-700">
    Customers
   </li>
   <li className="pl-8 p-2 hover:bg-gray-700">
    Accounts
   </li>
   <li className="pl-8 p-2 hover:bg-gray-700">
    Contacts
   </li>
   <li className="p-4 hover:bg-gray-700">
    Sales
   </li>
   <li className="pl-8 p-2 bg-gray-700">
    Leads
   </li>
   <li className="pl-8 p-2 hover:bg-gray-700">
    Opportunities
   </li>
   <li className="pl-8 p-2 hover:bg-gray-700">
    Competitors
   </li>
   <li className="p-4 hover:bg-gray-700">
    Collateral
   </li>
   <li className="pl-8 p-2 hover:bg-gray-700">
    Quotes
   </li>
   <li className="pl-8 p-2 hover:bg-gray-700">
    Orders
   </li>
   <li className="pl-8 p-2 hover:bg-gray-700">
    Invoices
   </li>
   <li className="pl-8 p-2 hover:bg-gray-700">
    Products
   </li>
   <li className="pl-8 p-2 hover:bg-gray-700">
    Sales Literature
   </li>
   <li className="p-4 hover:bg-gray-700">
    Marketing
   </li>
   <li className="pl-8 p-2 hover:bg-gray-700">
    Marketing lists
   </li>
   <li className="pl-8 p-2 hover:bg-gray-700">
    Quick Campaigns
   </li>
   <li className="p-4 hover:bg-gray-700">
    Performance
   </li>
   <li className="pl-8 p-2 hover:bg-gray-700">
    Sales
   </li>
  </ul>
 </nav>
</aside>
);
};

export default Sidebar;
