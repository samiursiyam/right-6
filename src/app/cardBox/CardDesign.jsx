import Image from 'next/image';
import React from 'react';

const WorkoutCard = ({ data }) => { // data প্রপ্স হিসেবে নিচ্ছি
  return (
    // max-w-sm এর জায়গায় w-full করা হয়েছে
    <div className="w-full bg-[#18181b] rounded-[2rem] overflow-hidden shadow-xl font-sans">

      {/* Image Section */}
      <div className="h-76 w-full relative">
         <Image
    src={data.image}
    alt={data.title}
    fill
    sizes="(max-width: 768px) 100vw, 400px"
    className="object-cover"
  />
      </div>

      {/* Content Section */}
      <div className="p-5">

        {/* Tags */}
        <div className="flex gap-2 mb-4">
          <span className="bg-[#bcfb4c] text-black text-[11px] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider">
            {data.muscleGroups[0]}
          </span>
          <span className="bg-[#bcfb4c] text-black text-[11px] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider">
            {data.muscleGroups[1]}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h2 className="text-white text-3xl font-extrabold uppercase mb-1 tracking-tight truncate">
          {data?.name || "Overhead Press"}
        </h2>
        <p className="text-gray-400 text-sm font-medium mb-6">
          {data?.equipment || "Barbell"}
        </p>

        {/* Divider Line */}
        <div className="border-t border-[#698d9b] mb-4"></div>

        {/* Stats Footer */}
        <div className="flex items-center gap-5 text-gray-400 text-sm font-semibold">

          {/* Time */}
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>{data?.duration || "20 min"}</span>
          </div>

          {/* Calories */}
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path>
            </svg>
            <span>{data?.caloriesBurned || "150 kcal"}</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
            </svg>
            <span>{data?.rating || "4.6"}</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;