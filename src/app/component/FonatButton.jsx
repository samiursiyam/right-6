'use client';

import React, { useContext } from 'react';
import { CardContext } from './context/CardContext';
import { toast, Bounce } from 'react-toastify';

const FonatButton = ({ data }) => {
  const { plan, setPlan } = useContext(CardContext);

  const isAdded = plan.some((item) => item.id === data.id);

  const hendleReadBook = () => {


    toast(`${data.name} 🤗  is added to your Today's plan .....`, {
      position: 'top-right',
      autoClose: 5000,
      
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
       style: {
    background: '#0F0F0F',
    color: '#D8EB7F',
  },
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Bounce,
    });

    setPlan([...plan, data]);
  };

  return (
    <div>
      <button
        disabled={isAdded}
        onClick={hendleReadBook}
        className={`flex items-center gap-2 font-bold py-3 px-6 rounded-xl transition ${
          isAdded
            ? 'bg-gray-700 text-gray-400 cursor-not-allowed opacity-60'
            : 'bg-[#C2F800] hover:bg-[#aad600] text-black cursor-pointer'
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
          <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
          <line x1="16" x2="16" y1="2" y2="6" />
          <line x1="8" x2="8" y1="2" y2="6" />
          <line x1="3" x2="21" y1="10" y2="10" />
          <path d="M8 14h.01" />
          <path d="M12 14h.01" />
          <path d="M16 14h.01" />
          <path d="M8 18h.01" />
          <path d="M12 18h.01" />
          <path d="M16 18h.01" />
        </svg>

        {isAdded ? '✓ Added to plan' : 'Add to todays plan'}
      </button>
    </div>
  );
};

export default FonatButton;