'use client';

import React, { useContext, useState, useMemo, useRef, useEffect } from 'react';
import { CardContext } from '../component/context/CardContext';
import WorkoutCard from './WorkoutCard';
import StatsCard from './StatsCard';
import Toast from '../component/Toast';
import Link from 'next/link';

const SORT_OPTIONS = ['Duration', 'Calories', 'Rating'];

const Planpage = () => {
  const {
    plan = [],
    saved = [],
    done = [],
    removeFromPlan = () => {},
    removeFromSaved = () => {},
    markAsDone = () => {},
    isDone: checkIsDone = () => false,
  } = useContext(CardContext);

  const [activeTab, setActiveTab] = useState('plan');
  const [sortBy, setSortBy] = useState('Duration');
  const [isSortOpen, setIsSortOpen] = useState(false);

  // 🔔 Toast state
  const [toast, setToast] = useState(null);
  const showToast = (message, type = 'success') => setToast({ message, type });

  // dropdown click outside
  const sortRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sortRef.current && !sortRef.current.contains(e.target)) {
        setIsSortOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // 1. Active list
  const currentList = activeTab === 'plan' ? plan : saved;

  // 2. Sort (ascending)
  const sortedList = useMemo(() => {
    const list = [...currentList];
    return list.sort((a, b) => {
      if (sortBy === 'Duration') return (Number(a.duration) || 0) - (Number(b.duration) || 0);
      if (sortBy === 'Calories') return (Number(a.caloriesBurned) || 0) - (Number(b.caloriesBurned) || 0);
      if (sortBy === 'Rating') return (Number(a.rating) || 0) - (Number(b.rating) || 0);
      return 0;
    });
  }, [currentList, sortBy]);

  // 3. Stats
  const totalExercises = currentList.length;
  const totalMinutes = currentList.reduce((acc, item) => acc + (Number(item.duration) || 0), 0);
  const totalCalories = currentList.reduce((acc, item) => acc + (Number(item.caloriesBurned) || 0), 0);

  // 4. Remove Handler + toast
  const handleRemove = (id) => {
    if (!id) return;

    // Find the workout name for the toast message
    const target = currentList.find((i) => (i.id || i._id) === id);
    const name = target?.name || 'Workout';

    if (activeTab === 'plan') {
      removeFromPlan(id);
      showToast(`"${name}" removed from plan`, 'info');
    } else {
      removeFromSaved(id);
      showToast(`"${name}" removed from saved`, 'info');
    }
  };

  // 5. Done Handler + toast
  const handleDone = (workout) => {
    const nowDone = markAsDone(workout);
    if (nowDone) {
      showToast(`"${workout.name}" marked as done! 💪`, 'success');
    } else {
      showToast(`"${workout.name}" unmarked`, 'info');
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

      {/* Stats Bar */}
      <div className="mb-8">
        <StatsCard
          exercises={totalExercises}
          minutes={totalMinutes}
          calories={totalCalories}
        />
      </div>

      {/* Tabs & Sort */}
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
            Saved  ( {saved?.length || 0} )
          </button>
        </div>

        {/* Sort By Dropdown */}
        <div className="flex items-center gap-3 text-sm text-gray-400 w-full sm:w-auto justify-end">
          <span>Sort By</span>

          <div className="relative" ref={sortRef}>
            <button
              onClick={() => setIsSortOpen((v) => !v)}
              className="flex items-center gap-2 bg-[#141414] border border-gray-800 rounded-lg px-4 py-2 text-white hover:border-gray-600 transition-colors min-w-[130px] justify-between"
            >
              {sortBy}
              <svg
                className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isSortOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>

            {isSortOpen && (
              <div className="absolute right-0 mt-2 w-full min-w-[130px] bg-[#141414] border border-gray-800 rounded-lg overflow-hidden shadow-xl z-20">
                {SORT_OPTIONS.map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSortBy(option);
                      setIsSortOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                      sortBy === option
                        ? 'bg-[#252525] text-[#D4FF00] font-semibold'
                        : 'text-gray-300 hover:bg-[#1f1f1f] hover:text-white'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Cards List */}
      <div className="flex flex-col gap-4">
        {sortedList.length > 0 ? (
          sortedList.map((data, ind) => (
            <WorkoutCard
              key={data.id || data._id || ind}
              workout={data}
              onRemove={handleRemove}
              onDone={handleDone}
              isDone={checkIsDone(data)}
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-24 bg-[#141414] border border-gray-800 rounded-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 uppercase tracking-wider">NOTHING HERE YET</h2>
            <p className="text-gray-400 mb-8 text-center max-w-md text-sm md:text-base">
              Browse the library and add a lift to get today moving.
            </p>
            <Link href="/">
              <button className="bg-[#D4FF00] text-black font-bold px-8 py-3 rounded-full hover:bg-[#b3d600] transition-all duration-200 shadow-[0_0_15px_rgba(212,255,0,0.3)]">
                Go to workouts
              </button>
            </Link>
          </div>
        )}
      </div>

      {/* 🔔 Toast */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
};

export default Planpage;