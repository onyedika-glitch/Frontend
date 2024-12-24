import React from 'react';
                
            const LeadDetails: React.FC = () => {
                    return (
                        <div className="bg-gray-50 p-4 rounded-lg mb-4">
                            <h3 className="text-lg font-semibold mb-2">Why I picked this lead</h3>
                            <ul className="list-disc list-inside text-gray-700 mb-4">
                                <li>Jane is a key decision maker and was browsing <span className="font-semibold">‘espresso machines’</span> on First Coffee’s website.</li>
                                <li>Multiple people at her company have reported <span className="font-semibold">‘slowness’</span> during service requests.</li>
                                <li>Northwind Traders currently see <span className="font-semibold">$200M</span> in revenue from their in-store coffee shops.</li>
                            </ul>
                            <div className="flex space-x-4 mb-4">
                                <div className="flex items-center space-x-2">
                                    <img src="https://placehold.co/50x50" alt="Decision maker" className="w-12 h-12" />
                                    <div>
                                        <p className="text-gray-500">Decision maker</p>
                                        <p className="font-semibold">Yes</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <img src="https://placehold.co/50x50" alt="Potential deal value" className="w-12 h-12" />
                                    <div>
                                        <p className="text-gray-500">Potential deal value</p>
                                        <p className="font-semibold">$1M</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <img src="https://placehold.co/50x50" alt="Intent" className="w-12 h-12" />
                                    <div>
                                        <p className="text-gray-500">Intent</p>
                                        <p className="font-semibold">High</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                    );
                }             
                export default LeadDetails;