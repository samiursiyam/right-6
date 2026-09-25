'use client';

import React, { useContext, useState } from 'react';
import { CardContext } from '../component/context/CardContext';
import WorkoutCard from './WorkoutCard';
import Link from 'next/link';

const Planpage = () => {
  const { plan = [], saved = [] } = useContext(CardContext); // Default empty array taaki crash na ho
  
  // State for Tabs aur Sorting
  const [activeTab, setActiveTab] = useState('plan'); // 'plan' or 'saved'
  const [sortBy, setSortBy] = useState('Duration');

  // Active list nikalna
  const currentList = activeTab === 'plan' ? plan : saved;

  return (
    <div className="min-h-screen bg-[#0a0a0a] p-6 md:p-10 font-sans">
      
      {/* Header Section */}
      <div className="mb-8">
        <h1 className='text-3xl md:text-4xl text-white font-bold tracking-wide'>MY PLAN</h1>
        <p className='text-sm md:text-base mt-2 text-[#c3c8c9]'>
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* Controls Bar (Tabs + Sort By) */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
        
        {/* Custom Tabs */}
        <div className="flex bg-[#141414] border border-gray-800 rounded-xl p-1 w-full sm:w-auto">
          <button
            onClick={() => setActiveTab('plan')}
            className={`flex-1 sm:flex-none px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeTab === 'plan' 
                ? 'bg-[#252525] text-white shadow-md' 
                : 'text-gray-400 hover:text-white hover:bg-[#1a1a1a]'
            }`}
          >
            Todays Plan
          </button>
          <button
            onClick={() => setActiveTab('saved')}
            className={`flex-1 sm:flex-none px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeTab === 'saved' 
                ? 'bg-[#252525] text-white shadow-md' 
                : 'text-gray-400 hover:text-white hover:bg-[#1a1a1a]'
            }`}
          >
            Saved
          </button>
        </div>

        {/* Sort By Dropdown (Visual only) */}
        <div className="flex items-center gap-3 text-sm text-gray-400 w-full sm:w-auto justify-end">
          <span>Sort By</span>
          <button className="flex items-center gap-2 bg-[#141414] border border-gray-800 rounded-lg px-4 py-2 text-white hover:border-gray-600 transition-colors">
            {sortBy}
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Content Area (Cards or Empty State) */}
      <div className="flex flex-col gap-4">
        {currentList && currentList.length > 0 ? (
          // Agar data hai toh cards render karo
          currentList.map((data, ind) => (
            <WorkoutCard key={data.id || ind} workout={data} />
          ))
        ) : (
          // Empty State (Jab koi data na ho)
          <div className="flex flex-col items-center justify-center py-24 bg-[#141414] border border-gray-800 rounded-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 uppercase tracking-wider">
              NOTHING HERE YET
            </h2>
            <p className="text-gray-400 mb-8 text-center max-w-md text-sm md:text-base">
              Browse the library and add a lift to get today moving.
            </p>


            <Link href={"http://localhost:3000"}>
            <button className="bg-[#D4FF00] text-black font-bold px-8 py-3 rounded-full hover:bg-[#b3d600] transition-all duration-200 shadow-[0_0_15px_rgba(212,255,0,0.3)] hover:shadow-[0_0_25px_rgba(212,255,0,0.5)]">
              Go to workouts
            </button>
            </Link>
          </div>
        )}
      </div>

    </div>
  );
};

export default Planpage;