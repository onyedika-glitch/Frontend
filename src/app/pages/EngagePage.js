import React from 'react';
                import Header from '../components/Header';
                import LeadInfo from '../components/LeadInfo';
                import LeadDetails from '../components/LeadDetails';
                import AboutJane from '../components/AboutJane';
                
                const EngagePage = () => {
                    return (
                <div classname="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto">
                 <header>
                 </header>
                 <leadinfo>
                 </leadinfo>
                 <div classname="flex items-center mb-4">
                  <button classname="px-4 py-2 border-b-2 border-blue-600 text-blue-600">
                   Engage
                  </button>
                  <button classname="px-4 py-2 text-gray-500">
                   Research
                  </button>
                            </div>
                            <Header>
                            </Header>
                            <LeadInfo>
                            </LeadInfo>
                 <LeadDetails>
                 </LeadDetails>
                 <AboutJane>
                 </AboutJane>
                </div>
                );
                };
                
                export default EngagePage;
                