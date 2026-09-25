'use client'
import React, { useContext } from 'react';
import { CardContext } from './context/CardContext';

const SavedButton = ({ data }) => {
    const { saved, setSaved } = useContext(CardContext);

    if (!data) return null;

    const handleSaved = () => {
        setSaved([...saved, data]);
    };

    return (
        <div>
            <button 
                onClick={handleSaved}
                className="flex items-center gap-2 bg-[#1A1A1A] hover:bg-white/10 border border-white/5 text-white font-bold py-3 px-6 rounded-xl transition cursor-pointer"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                </svg>
                Save for later
            </button>
        </div>
    );
};

export default SavedButton;