'use client'
import React, { useContext } from 'react';
import { CardContext } from './context/CardContext';

const SavedButton = ({ data }) => {
    const { saved, setSaved } = useContext(CardContext);

    if (!data) return null;

    // 🔍 এই কার্ডটা আগে save করা হয়েছে কিনা চেক
    const isSaved = saved.some((item) => item.id === data.id);

    const handleSaved = () => {
        if (isSaved) return; // safety guard
        setSaved([...saved, data]);
    };

    return (
        <div>
            <button
                disabled={isSaved}
                onClick={handleSaved}
                className={`flex items-center gap-2 font-bold py-3 px-6 rounded-xl border transition ${
                    isSaved
                        ? 'bg-[#1A1A1A] border-white/5 text-gray-500 cursor-not-allowed opacity-60'
                        : 'bg-[#1A1A1A] hover:bg-white/10 border-white/5 text-white cursor-pointer'
                }`}
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
                {isSaved ? '✓ Saved' : 'Save for later'}
            </button>
        </div>
    );
};

export default SavedButton;