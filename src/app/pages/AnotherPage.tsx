import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import MainLayout from '../Layout/MainLayout';

const AnotherPage: React.FC = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto">
            <h1 className="text-2xl font-semibold mb-4">Another Page</h1>
            <p>This is another page in the application.</p>
            <Link to="/" className="text-blue-600 mt-4 inline-block">Go back to Engage Page</Link> {/* Add a link back to the Engage Page */}
            <MainLayout>
            <h2 className="text-lg font-semibold mb-4">Another Page</h2>
            <p>This is another page.</p>
        </MainLayout>
        </div>
    );
};

export default AnotherPage;
