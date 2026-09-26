import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-6 py-12 relative overflow-hidden">

      {/* Background glow effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#C2F800]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#C2F800]/5 rounded-full blur-[120px]" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative max-w-2xl w-full text-center">

        {/* 404 Big Number */}
        <div className="relative mb-8">
          <h1 className="text-[120px] sm:text-[180px] md:text-[220px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#C2F800] to-[#C2F800]/20 select-none">
            
          </h1>

          {/* Dumbbell icon overlapping */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#1D232A] border border-white/10 flex items-center justify-center shadow-2xl shadow-black/60 rotate-[-8deg]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C2F800"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6.5 6.5h11v11h-11z" />
                <path d="M3 9v6M21 9v6M9 3h6M9 21h6" />
              </svg>
            </div>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight uppercase">
          Page Not <span className="text-[#C2F800]">Found</span>
        </h2>

        {/* Description */}
        <p className="text-[#9CA3AF] text-sm sm:text-base max-w-md mx-auto mb-10 leading-relaxed">
          Looks like this lift doesn&apos;t exist in our library. The page you&apos;re looking for might have been moved, deleted, or never existed.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/"
            className="group flex items-center justify-center gap-2 w-full sm:w-auto bg-[#C2F800] hover:bg-[#aad600] text-black font-bold py-3.5 px-8 rounded-xl transition-all duration-200 shadow-[0_0_20px_rgba(194,248,0,0.25)] hover:shadow-[0_0_30px_rgba(194,248,0,0.4)]"
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
              className="transition-transform duration-200 group-hover:-translate-x-1"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            Back to Home
          </Link>

          <Link
            href="/plan"
            className="group flex items-center justify-center gap-2 w-full sm:w-auto bg-[#1A1A1A] hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-bold py-3.5 px-8 rounded-xl transition-all duration-200"
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
            </svg>
            View My Plan
          </Link>
        </div>

        {/* Bottom hint */}
        <p className="mt-12 text-xs text-[#4B5563] tracking-widest uppercase">
          Error Code: 404 · Route Not Found
        </p>

      </div>
    </div>
  );
};

export default NotFound;