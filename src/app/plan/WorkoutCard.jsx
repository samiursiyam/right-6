import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import DeletPlan from '../delet-item/DeletPlan';

const WorkoutCard = ({ workout, onRemove, onDone, isDone = false }) => {
  if (!workout) return null;

  return (
    <div
      className={`border rounded-2xl p-4 w-full flex flex-col md:flex-row items-center justify-between gap-5 shadow-lg transition-all ${
        isDone
          ? 'bg-[#0f1a0f] border-[#C2F800]/30'
          : 'bg-[#141414] border-gray-800 hover:border-gray-700'
      }`}
    >

      {/* Left Side: Image and Details */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 w-full md:w-auto">

        {/* Image */}
        <div className="relative w-full sm:w-32 h-24 shrink-0 rounded-xl overflow-hidden">
          <Image
            src={workout.image}
            alt={workout.name || "Workout Image"}
            fill
            className={`object-cover transition-all duration-300 ${isDone ? 'grayscale opacity-60' : ''}`}
          />

          {/* Done overlay */}
          {isDone && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#C2F800] text-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
            </div>
          )}
        </div>

        {/* Details */}
        <div className="flex flex-col text-center sm:text-left w-full">
          <h2 className={`font-bold text-lg uppercase tracking-wider transition-all ${
            isDone ? 'text-gray-500 line-through' : 'text-white'
          }`}>
            {workout.name}
          </h2>

          <p className="text-gray-400 text-sm mb-3">
            {workout.equipment} • {workout.difficulty}
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 text-sm font-medium text-gray-300">

            {/* Duration */}
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-[#D4FF00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{workout.duration} min</span>
            </div>

            {/* Calories */}
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-[#D4FF00]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11.667a7 7 0 0014 0c0-1.366-.4-2.63-1.082-3.688a13.97 13.97 0 00-2.628-3.21 1 1 0 01-.145-1.45c.242-.324.542-.654.874-.917l.072-.057a1 1 0 001.06-1.345z" clipRule="evenodd" />
              </svg>
              <span>{workout.caloriesBurned} kcal</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-[#D4FF00]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>{workout.rating}</span>
            </div>

          </div>
        </div>
      </div>

      {/* Right Side: Action Buttons */}
      <div className="flex flex-wrap sm:flex-nowrap items-center justify-center md:justify-end gap-3 w-full md:w-auto shrink-0 mt-4 md:mt-0">

        <Link href={`/card/${workout.id || workout._id}`}>
          <button className="px-5 py-2 rounded-full border border-gray-600 text-gray-300 text-sm font-medium hover:bg-gray-800 hover:text-white transition-colors duration-200">
            View Details
          </button>
        </Link>

        {/* 🔹 Mark as Done */}
        <button
          onClick={() => onDone?.(workout)}
          className={`px-5 py-2 rounded-full text-sm font-bold flex items-center gap-1.5 transition-colors duration-200 ${
            isDone
              ? 'bg-[#1f2a1f] text-[#C2F800] border border-[#C2F800]/30 hover:bg-[#263426]'
              : 'bg-[#D4FF00] text-black hover:bg-[#b3d600] shadow-[0_0_10px_rgba(212,255,0,0.2)]'
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
          </svg>
          {isDone ? 'Completed' : 'Mark as Done'}
        </button>

        {/* 🔹 Remove button */}
        <DeletPlan onDelete={() => onRemove(workout.id || workout._id)} />

      </div>
    </div>
  );
};

export default WorkoutCard;