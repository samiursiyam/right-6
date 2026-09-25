import Image from 'next/image';
import React from 'react';

const cardId = async({params}) => {
const {id} = await params;
   



const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);

  if (!res.ok) {
    throw new Error("Failed to load data");
  }

  const data = await res.json();

console.log(data);
    return (
        <div>
       <div className=" bg-[#0f0f0f] text-white p-4 md:p-8 lg:p-12 font-sans flex justify-center">
      
      {/* Grid container: items-stretch default thakbe */}
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
        
        {/* Left Column: Image (h-full thakbe jate right column er sathe match kore) */}
        <div className="relative w-full h-[400px] lg:h-full bg-[#1A1A1A] rounded-3xl overflow-hidden border border-white/5">
          <Image
            src={data.image} 
            alt="Barbell Bench Press"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Right Column: Content (h-fit add kora hoyeche) */}
        <div className="flex flex-col justify-start pt-2 h-fit">
          
          {/* Title & Description */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight mb-4">
            Barbell Bench Press
          </h1>
          <p className="text-[#9CA3AF] text-sm md:text-base mb-6 max-w-xl leading-relaxed">
            A compound press that builds chest thickness, triceps, and pressing power from a stable bench.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-10">
            <span className="bg-[#C2F800] text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
              Chest
            </span>
            <span className="bg-[#C2F800] text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
              Arms
            </span>
          </div>

          {/* Details Table */}
          <div className="bg-[#161616] border border-white/5 rounded-2xl overflow-hidden mb-10">
            
            <div className="flex justify-between items-center p-4 md:px-6 border-b border-white/5">
              <span className="text-xs font-bold text-[#6B7280] tracking-widest uppercase">EQUIPMENT</span>
              <span className="text-sm md:text-base text-[#D1D5DB] font-medium">Barbell, Bench</span>
            </div>

            <div className="flex justify-between items-center p-4 md:px-6 border-b border-white/5">
              <span className="text-xs font-bold text-[#6B7280] tracking-widest uppercase">DIFFICULTY</span>
              <span className="text-sm md:text-base text-[#D1D5DB] font-medium">Intermediate</span>
            </div>

            <div className="flex justify-between items-center p-4 md:px-6 border-b border-white/5">
              <span className="text-xs font-bold text-[#6B7280] tracking-widest uppercase">SETS</span>
              <span className="text-sm md:text-base text-[#D1D5DB] font-medium">4</span>
            </div>

            <div className="flex justify-between items-center p-4 md:px-6 border-b border-white/5">
              <span className="text-xs font-bold text-[#6B7280] tracking-widest uppercase">REPS</span>
              <span className="text-sm md:text-base text-[#D1D5DB] font-medium">6-8</span>
            </div>

            <div className="flex justify-between items-center p-4 md:px-6 border-b border-white/5">
              <span className="text-xs font-bold text-[#6B7280] tracking-widest uppercase">DURATION</span>
              <span className="text-sm md:text-base text-[#D1D5DB] font-medium">25 min</span>
            </div>

            <div className="flex justify-between items-center p-4 md:px-6 border-b border-white/5">
              <span className="text-xs font-bold text-[#6B7280] tracking-widest uppercase">CALORIES</span>
              <span className="text-sm md:text-base text-[#D1D5DB] font-medium">180 kcal</span>
            </div>

            <div className="flex justify-between items-center p-4 md:px-6">
              <span className="text-xs font-bold text-[#6B7280] tracking-widest uppercase">RATING</span>
              <span className="text-sm md:text-base text-[#D1D5DB] font-medium">4.8</span>
            </div>

          </div>

          {/* Instructions */}
          <h3 className="text-sm font-bold text-white tracking-widest uppercase mb-4">
            Instructions
          </h3>
          <ol className="list-decimal list-inside space-y-3 text-[#D1D5DB] text-sm md:text-base leading-relaxed mb-10 pl-1">
            <li className="pl-2">Lie on the bench with eyes under the bar and feet planted.</li>
            <li className="pl-2">Unrack with locked elbows and lower the bar to mid-chest.</li>
            <li className="pl-2">Press up in a slight arc until elbows lock without bouncing.</li>
            <li className="pl-2">Keep shoulder blades pinched and a natural arch in the back.</li>
          </ol>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button className="flex items-center gap-2 bg-[#C2F800] hover:bg-[#aad600] text-black font-bold py-3 px-6 rounded-xl transition cursor-pointer">
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
              Add to today's plan
            </button>

            <button className="flex items-center gap-2 bg-[#1A1A1A] hover:bg-white/10 border border-white/5 text-white font-bold py-3 px-6 rounded-xl transition cursor-pointer">
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

        </div>
      </div>
    </div>
        </div>
    );
};

export default cardId;