import React from 'react';

const Header: React.FC = () => {
  return (
<header className="flex justify-between items-center mb-4">
 <h1 className="text-2xl font-bold">
  My open leads
 </h1>
 <div className="flex space-x-2">
  <button className="px-4 py-2 bg-gray-200 rounded">
   Show chart
  </button>
  <button className="px-4 py-2 bg-gray-200 rounded">
   Focused view
  </button>
  <button className="px-4 py-2 bg-gray-200 rounded">
   New
  </button>
  <button className="px-4 py-2 bg-gray-200 rounded">
   Refresh
  </button>
  <button className="px-4 py-2 bg-gray-200 rounded">
   Collaborate
  </button>
  <button className="px-4 py-2 bg-gray-200 rounded">
   Delete
  </button>
  <button className="px-4 py-2 bg-gray-200 rounded">
   Smart data
  </button>
  <button className="px-4 py-2 bg-gray-200 rounded">
   Edit filters
  </button>
  <button className="px-4 py-2 bg-gray-200 rounded">
   Edit columns
  </button>
 </div>
</header>
);
};

export default Header;
