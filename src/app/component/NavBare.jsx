'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { CardContext } from './context/CardContext';

const NavBare = () => {

  const { plan ,  saved } = useContext(CardContext);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-[#1D232A] px-6 py-3 shadow-lg shadow-black/40 border-b border-white/5">

        <nav className="container mx-auto">

          <div className="flex items-center justify-between">

            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/assets/logo.png"
                width={28}
                height={28}
                alt="Logo"
              />

              <h2 className="font-bold text-2xl text-white tracking-wide">
                FITLOG
              </h2>
            </Link>

            <div className="flex items-center gap-4">

              <Link
                href="/"
                className="font-bold py-0.5 px-3 text-sm rounded-2xl text-[#9CA3AF] cursor-pointer transition hover:bg-[#313f24] hover:text-[#C2F800]"
              >
                Workouts
              </Link>

              <Link
                href="http://localhost:3000/plan"
                className="font-bold py-0.5 px-3 text-sm rounded-2xl text-[#9CA3AF] cursor-pointer transition hover:bg-[#313f24] hover:text-[#C2F800]"
              >
                My Plan
              </Link>

            </div>

            <div className="flex items-center gap-3">

              <Link
                href="/plan"
                className="flex items-center gap-2 font-bold py-0.5 px-3 rounded-2xl text-[#9CA3AF] cursor-pointer transition hover:bg-[#313f24] hover:text-[#C2F800]"
              >
                <span>Plan</span>

                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#313f24] text-[#C2F800] text-xs font-bold">
                  {plan?.length || 0}
                </div>
              </Link>

              <Link
                href="/plan"
                className="flex items-center gap-2 font-bold py-0.5 px-3 rounded-2xl text-[#9CA3AF] cursor-pointer transition hover:bg-[#313f24] hover:text-[#C2F800]"
              >
                <span>Saved</span>

                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#313f24] text-[#C2F800] text-xs font-bold">
                  {saved?.length || 0}
                </div>
              </Link>

            </div>

          </div>

        </nav>

      </div>

      <div className="h-[72px]"></div>
    </>
  );
};

export default NavBare;