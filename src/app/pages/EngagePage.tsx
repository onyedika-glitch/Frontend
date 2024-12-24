import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Header from '../components/Header';
import LeadInfo from '../components/LeadInfo';
import LeadDetails from '../components/LeadDetails';
import AboutJane from '../components/AboutJane';

const EngagePage: React.FC = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto">
            <Header />
            <LeadInfo />
            <div className="flex items-center mb-4">
                <button className="px-4 py-2 border-b-2 border-blue-600 text-blue-600">Engage</button>
                <button className="px-4 py-2 text-gray-500">Research</button>
            </div>
            <LeadDetails />
            <AboutJane />
            <Link to="/another" className="text-blue-600 mt-4 inline-block">Go to Another Page</Link> {/* Add a link to the new page */}
        </div>
    );
};

export default EngagePage;
