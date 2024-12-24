import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <main className="flex-1 p-6">
                <Header />
                <div className="bg-gray-100 flex items-center justify-center h-screen">
                    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                        {children}
                        <div className="flex justify-end space-x-2 mt-4">
                            <Link to="/another-page" className="bg-blue-600 text-white px-4 py-2 rounded">Allow access</Link>
                            <Link to="/" className="bg-gray-200 text-gray-700 px-4 py-2 rounded">Close</Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default MainLayout;
