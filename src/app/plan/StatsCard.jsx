import React from 'react';

const StatsCard = ({ exercises = 0, minutes = 0, calories = 0 }) => {
  return (
    <div className="bg-[#141414] border border-gray-800 rounded-2xl w-full flex items-center divide-x divide-gray-800 shadow-lg">
      {/* Exercises Section */}
      <div className="flex-1 flex flex-col p-6">
        <span className="text-gray-400 text-sm mb-1">Exercises</span>
        <span className="text-[#D4FF00] text-3xl font-bold">{exercises}</span>
      </div>

      {/* Minutes Section */}
      <div className="flex-1 flex flex-col p-6">
        <span className="text-gray-400 text-sm mb-1">Minutes</span>
        <span className="text-white text-3xl font-bold">{minutes}</span>
      </div>

      {/* Calories Section */}
      <div className="flex-1 flex flex-col p-6">
        <span className="text-gray-400 text-sm mb-1">Calories</span>
        <span className="text-white text-3xl font-bold">{calories}</span>
      </div>
    </div>
  );
};

export default StatsCard;