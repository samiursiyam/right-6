import SavedButton from '../../component/SavedButton';
import FonatButton from '../../component/FonatButton';
import Image from 'next/image';
import React from 'react';

const cardId = async ({ params }) => {
  const { id } = await params;




  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);

  if (!res.ok) {
    throw new Error("Failed to load data");
  }

  const data = await res.json();



  // console.log( 'data form single page ',data);


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
              {data.name}
            </h1>
            <p className="text-[#9CA3AF] text-sm md:text-base mb-6 max-w-xl leading-relaxed">
              {data.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-10">
              {data.muscleGroups?.[0] && (<span className="bg-[#C2F800] text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
              {data.muscleGroups[0]}
              </span>)}

              {data.muscleGroups?.[1] && (
                <span className="bg-[#C2F800] text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                   {data.muscleGroups[1] }
                </span>
              )}

            </div>

            {/* Details Table */}
            <div className="bg-[#161616] border border-white/5 rounded-2xl overflow-hidden mb-10">

              <div className="flex justify-between items-center p-4 md:px-6 border-b border-white/5">
                <span className="text-xs font-bold text-[#6B7280] tracking-widest uppercase">EQUIPMENT</span>
                <span className="text-sm md:text-base text-[#D1D5DB] font-medium">{data.equipment}</span>
              </div>

              <div className="flex justify-between items-center p-4 md:px-6 border-b border-white/5">
                <span className="text-xs font-bold text-[#6B7280] tracking-widest uppercase">DIFFICULTY</span>
                <span className="text-sm md:text-base text-[#D1D5DB] font-medium">{data.difficulty}</span>
              </div>

              <div className="flex justify-between items-center p-4 md:px-6 border-b border-white/5">
                <span className="text-xs font-bold text-[#6B7280] tracking-widest uppercase">SETS</span>
                <span className="text-sm md:text-base text-[#D1D5DB] font-medium">{data.sets}</span>
              </div>

              <div className="flex justify-between items-center p-4 md:px-6 border-b border-white/5">
                <span className="text-xs font-bold text-[#6B7280] tracking-widest uppercase">REPS</span>
                <span className="text-sm md:text-base text-[#D1D5DB] font-medium">{data.reps}</span>
              </div>

              <div className="flex justify-between items-center p-4 md:px-6 border-b border-white/5">
                <span className="text-xs font-bold text-[#6B7280] tracking-widest uppercase">DURATION</span>
                <span className="text-sm md:text-base text-[#D1D5DB] font-medium">{data.duration}</span>
              </div>

              <div className="flex justify-between items-center p-4 md:px-6 border-b border-white/5">
                <span className="text-xs font-bold text-[#6B7280] tracking-widest uppercase">CALORIES</span>
                <span className="text-sm md:text-base text-[#D1D5DB] font-medium">{data.caloriesBurned}</span>
              </div>

              <div className="flex justify-between items-center p-4 md:px-6">
                <span className="text-xs font-bold text-[#6B7280] tracking-widest uppercase">RATING</span>
                <span className="text-sm md:text-base text-[#D1D5DB] font-medium">{data.rating}</span>
              </div>

            </div>

            {/* Instructions */}
            <h3 className="text-sm font-bold text-white tracking-widest uppercase mb-4">
              Instructions
            </h3>
            <ol className="list-decimal list-inside space-y-3 text-[#D1D5DB] text-sm md:text-base leading-relaxed mb-10 pl-1">
              <li className="pl-2">{data.instructions[0]}</li>
              <li className="pl-2">{data.instructions[1]}</li>
              <li className="pl-2">{data.instructions[2]}</li>
              <li className="pl-2">{data.instructions[3]}</li>
            </ol>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">

              <FonatButton data={data}></FonatButton>
              <SavedButton data={data}></SavedButton>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default cardId;