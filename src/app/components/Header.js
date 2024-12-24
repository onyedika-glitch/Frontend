import React from 'react';
                
const Header = () => {
    return (
<div classname="flex items-center justify-between mb-4">
 <div classname="flex items-center">
  <img alt="Jane Reyes" classname="rounded-full w-12 h-12 mr-4" height="50" src="https://storage.googleapis.com/a1aa/image/cjRoG7WgOF6nCpaIGMWJeXUfYaMVZ9P7drNP8YG6Gx3eje3PB.jpg" width="50"/>
  <div>
   <h2 classname="text-xl font-semibold">
    Jane Reyes
   </h2>
   <p classname="text-gray-500">
    COO, Northwind Traders
   </p>
  </div>
 </div>
 <button classname="bg-purple-600 text-white px-4 py-2 rounded-lg">
  Edit
 </button>
</div>
);
};

export default Header;
