'use client';

import React, { useContext, useState } from 'react';
import { CardContext } from '../component/context/CardContext';
import WorkoutCard from './WorkoutCard';
import StatsCard from './StatsCard';
import Link from 'next/link';

const Planpage = () => {
  const { 
    plan = [], 
    saved = [], 
    removeFromPlan = () => {}, 
    removeFromSaved = () => {} 
  } = useContext(CardContext);
  
  const [activeTab, setActiveTab] = useState('plan');
  const [sortBy, setSortBy] = useState('Duration');

  // 1. Active list nikalna (plan ba saved)
  const currentList = activeTab === 'plan' ? plan : saved;

  // 2. Stats Calculate kora (Dynamic)
  // Number() use kora hoyeche jate string holeo number hishebe jog hoy
  const totalExercises = currentList.length;
  const totalMinutes = currentList.reduce((acc, item) => acc + (Number(item.duration) || 0), 0);
  const totalCalories = currentList.reduce((acc, item) => acc + (Number(item.caloriesBurned) || 0), 0);

  // 3. Delete Handler
  const handleRemove = (id) => {



    if (!id) return;
    if (activeTab === 'plan') {
      removeFromPlan(id);
    } else {
      removeFromSaved(id);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] p-6 md:p-10 font-sans">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className='text-3xl md:text-4xl text-white font-bold tracking-wide'>MY PLAN</h1>
        <p className='text-sm md:text-base mt-2 text-[#c3c8c9]'>
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* Stats Bar (Dynamic Data Pass) */}
      <div className="mb-8">
        <StatsCard 
          exercises={totalExercises} 
          minutes={totalMinutes} 
          calories={totalCalories} 
        />
      </div>

      {/* Tabs & Sort By */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
        <div className="flex bg-[#141414] border border-gray-800 rounded-xl p-1 w-full sm:w-auto">
          <button
            onClick={() => setActiveTab('plan')}
            className={`flex-1 sm:flex-none px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeTab === 'plan' ? 'bg-[#252525] text-white shadow-md' : 'text-gray-400 hover:text-white hover:bg-[#1a1a1a]'
            }`}
          >
            Today&apos;s Plan  ( {plan?.length || 0} )
          </button>
          <button
            onClick={() => setActiveTab('saved')}
            className={`flex-1 sm:flex-none px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeTab === 'saved' ? 'bg-[#252525] text-white shadow-md' : 'text-gray-400 hover:text-white hover:bg-[#1a1a1a]'
            }`}
          >
            Saved  ( {saved?.length || 0 } )
          </button>
        </div>

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





      {/* Cards List */}
      <div className="flex flex-col gap-4">
        {currentList.length > 0 ? (
          currentList.map((data, ind) => (
            <WorkoutCard 
              key={data.id || data._id || ind} 
              workout={data} 
              onRemove={handleRemove} 
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-24 bg-[#141414] border border-gray-800 rounded-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 uppercase tracking-wider">NOTHING HERE YET</h2>
            <p className="text-gray-400 mb-8 text-center max-w-md text-sm md:text-base">Browse the library and add a lift to get today moving.</p>
            <Link href={"http://localhost:3000"}>
              <button className="bg-[#D4FF00] text-black font-bold px-8 py-3 rounded-full hover:bg-[#b3d600] transition-all duration-200 shadow-[0_0_15px_rgba(212,255,0,0.3)]">
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