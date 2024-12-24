import React from 'react';

const EmailAccess = () => {
    return (
        <div className="mb-6">
            <h3 className="text-sm font-semibold mb-2">Enable email access</h3>
            <p className="text-sm mb-2">Allow the agent to access email inboxes to read mail from known vendors</p>
            <div className="flex items-center border rounded p-2">
                <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded mr-2">P</span>
                <span className="text-sm">purchasing@contoso.com</span>
                <button className="ml-auto text-gray-500 hover:text-gray-700">
                    <i className="fas fa-times"></i>
                </button>
            </div>
        </div>
    );
};

export default EmailAccess;
