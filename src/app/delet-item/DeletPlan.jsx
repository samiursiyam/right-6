import React from 'react';

const DeletPlan = ({ onDelete }) => {
    return (
        <button 
            onClick={onDelete} 
            title="Delete item"
            className="text-gray-500 hover:text-red-500 p-2 transition-colors duration-200"
        >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
    );
};

export default DeletPlan;