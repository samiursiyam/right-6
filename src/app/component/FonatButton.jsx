'use client';
import React, { useContext } from 'react';
import { CardContext } from './context/CardContext';

const FonatButton = ({data}) => {
  
const {plan , setPlan} = useContext(CardContext)
// console.log("read book button " ,data);
// console.log("button ", plan);    

    const hendleReadBook =()=>{
    setPlan([...plan, data])
}

    
    return (
        <div>
            <button className="flex items-center gap-2 bg-[#C2F800] hover:bg-[#aad600] text-black font-bold py-3 px-6 rounded-xl transition cursor-pointer" onClick={()=> hendleReadBook()}>
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
              Add to todays plan
            </button>
        </div>
    );
};

export default FonatButton;