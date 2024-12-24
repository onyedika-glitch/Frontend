import React from 'react';

const ProfileHeader = () => {
    return (
        <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
                <img src="https://placehold.co/50x50" alt="Jane Reyes" className="rounded-full w-12 h-12 mr-4" />
                <div>
                    <h2 className="text-xl font-semibold">Jane Reyes</h2>
                    <p className="text-gray-500">COO, Northwind Traders</p>
                </div>
            </div>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">Edit</button>
        </div>
    );
};

export default ProfileHeader;
