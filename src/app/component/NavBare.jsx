'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useState, useRef, useEffect } from 'react';
import { CardContext } from './context/CardContext';

const NavBare = () => {

  const { plan, saved } = useContext(CardContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // বাইরে ক্লিক করলে menu বন্ধ
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-[#1D232A] px-3 sm:px-6 py-3 shadow-lg shadow-black/40 border-b border-white/5">

        <nav className="container mx-auto">

          <div className="flex items-center justify-between gap-2">

            <Link href="/" className="flex items-center gap-2 sm:gap-3 shrink-0">
              <Image
                src="/assets/logo.png"
                width={28}
                height={28}
                alt="Logo"
                className="w-6 h-6 sm:w-7 sm:h-7"
              />

              <h2 className="font-bold text-lg sm:text-2xl text-white tracking-wide">
                FITLOG
              </h2>
            </Link>

            {/* ডেস্কটপে মাঝের লিংক */}
            <div className="hidden md:flex items-center gap-4">

              <Link
                href="/"
                className="font-bold py-0.5 px-3 text-sm rounded-2xl text-[#9CA3AF] cursor-pointer transition hover:bg-[#313f24] hover:text-[#C2F800]"
              >
                Workouts
              </Link>

              <Link
                href="/plan"
                className="font-bold py-0.5 px-3 text-sm rounded-2xl text-[#9CA3AF] cursor-pointer transition hover:bg-[#313f24] hover:text-[#C2F800]"
              >
                My Plan
              </Link>

            </div>

            <div className="flex items-center gap-1.5 sm:gap-3">

              <Link
                href="/plan"
                className="flex items-center gap-1.5 sm:gap-2 font-bold py-0.5 px-2 sm:px-3 rounded-2xl text-[#9CA3AF] cursor-pointer transition hover:bg-[#313f24] hover:text-[#C2F800] text-xs sm:text-sm"
              >
                <span>Plan</span>
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#313f24] text-[#C2F800] text-xs font-bold">
                  {plan?.length || 0}
                </div>
              </Link>

              <Link
                href="/plan"
                className="flex items-center gap-1.5 sm:gap-2 font-bold py-0.5 px-2 sm:px-3 rounded-2xl text-[#9CA3AF] cursor-pointer transition hover:bg-[#313f24] hover:text-[#C2F800] text-xs sm:text-sm"
              >
                <span>Saved</span>
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#313f24] text-[#C2F800] text-xs font-bold">
                  {saved?.length || 0}
                </div>
              </Link>

              {/* 🔹 3-Dot Button (মোবাইলে দেখা যাবে) */}
              <div className="relative md:hidden" ref={menuRef}>
                <button
                  onClick={() => setIsMenuOpen((v) => !v)}
                  aria-label="Menu"
                  className="flex items-center justify-center w-8 h-8 rounded-lg text-[#9CA3AF] hover:bg-[#313f24] hover:text-[#C2F800] transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="19" cy="12" r="1" />
                    <circle cx="5" cy="12" r="1" />
                  </svg>
                </button>

                {isMenuOpen && (
                  <div className="absolute right-0 top-full mt-2 w-40 bg-[#1D232A] border border-white/10 rounded-xl overflow-hidden shadow-xl shadow-black/50 z-50">
                    <Link
                      href="/"
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-2.5 text-sm font-bold text-[#9CA3AF] hover:bg-[#313f24] hover:text-[#C2F800] transition"
                    >
                      Workouts
                    </Link>
                    <Link
                      href="/plan"
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-2.5 text-sm font-bold text-[#9CA3AF] hover:bg-[#313f24] hover:text-[#C2F800] transition border-t border-white/5"
                    >
                      My Plan
                    </Link>
                  </div>
                )}
              </div>

            </div>

          </div>

        </nav>

      </div>

      <div className="h-[64px] sm:h-[72px]"></div>
    </>
  );
};

export default NavBare;