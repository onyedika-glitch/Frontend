import React from 'react';

const SkillCheck = () => {
    return (
        <div className="mb-6">
            <p className="text-sm mb-2">Check if on-hand inventory will allow all sales orders to ship without delay</p>
            <p className="text-sm mb-2">
                When <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">any vendor</span> sends an email with changes to <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">confirmed purchase orders</span>, check if the resulting <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">on-hand inventory</span> will allow <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">all sales orders</span> to <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">ship without delay</span>. If so, <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">update the purchase order</span> to reflect the change.
            </p>
        </div>
    );
};

export default SkillCheck;
