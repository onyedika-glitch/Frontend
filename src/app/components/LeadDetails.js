import React from 'react';
                
const LeadDetails = () => {
    return (
<div classname="bg-gray-50 p-4 rounded-lg mb-4">
 <h3 classname="text-lg font-semibold mb-2">
  Why I picked this lead
 </h3>
 <ul classname="list-disc list-inside text-gray-700 mb-4">
  <li>
   Jane is a key decision maker and was browsing
   <span classname="font-semibold">
    ‘espresso machines’
   </span>
   on First Coffee’s website.
  </li>
  <li>
   Multiple people at her company have reported
   <span classname="font-semibold">
    ‘slowness’
   </span>
   during service requests.
  </li>
  <li>
   Northwind Traders currently see
   <span classname="font-semibold">
    $200M
   </span>
   in revenue from their in-store coffee shops.
  </li>
 </ul>
 <div classname="flex space-x-4 mb-4">
  <div classname="flex items-center space-x-2">
   <img alt="Decision maker" classname="w-12 h-12" height="50" src="https://storage.googleapis.com/a1aa/image/islq0cHRWfTXUidbEr4lEtmVqIdw9UZD58qKAkR2UpTeRf7nA.jpg" width="50"/>
   <div>
    <p classname="text-gray-500">
     Decision maker
    </p>
    <p classname="font-semibold">
     Yes
    </p>
   </div>
  </div>
  <div classname="flex items-center space-x-2">
   <img alt="Potential deal value" classname="w-12 h-12" height="50" src="https://storage.googleapis.com/a1aa/image/cLU51n7Xb24vO9f9AoGfIF2bILtAVNRH4VQb8xKT7FS5Rf7nA.jpg" width="50"/>
   <div>
    <p classname="text-gray-500">
     Potential deal value
    </p>
    <p classname="font-semibold">
     $1M
    </p>
   </div>
  </div>
  <div classname="flex items-center space-x-2">
   <img alt="Intent" classname="w-12 h-12" height="50" src="https://storage.googleapis.com/a1aa/image/Uq2RKahZ1161F5bTIuv2rX9pQfrcsZH4MQNi2U3PTAO9of9TA.jpg" width="50"/>
   <div>
    <p classname="text-gray-500">
     Intent
    </p>
    <p classname="font-semibold">
     High
    </p>
   </div>
  </div>
 </div>
 <div classname="flex items-center space-x-2">
  <i classname="fas fa-thumbs-up text-gray-500">
  </i>
  <i classname="fas fa-thumbs-down text-gray-500">
  </i>
 </div>
</div>
);
};

export default LeadDetails;
