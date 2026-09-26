import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="w-full bg-[#0a0a0a] border-t border-gray-800 px-6 md:px-10 py-6">
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">


                <Link href="/" className="flex items-center gap-3">
                    <div className="relative w-9 h-9">
                        <Image
                            src="/assets/logo.png"
                            alt="FitLog Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="text-white font-bold text-lg tracking-wide">
                        FitLog
                    </span>
                </Link>


                <p className="text-sm text-[#9CA3AF] text-center sm:text-right">
                    © 2026 FitLog — Workout Library. Train hard, log honest.        </p>

            </div>
        </footer>
    );
};

export default Footer;