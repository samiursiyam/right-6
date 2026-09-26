'use client';
import React, { useEffect, useState } from 'react';

const Toast = ({ message, type = 'success', onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setVisible(true), 10);
    const t2 = setTimeout(() => setVisible(false), 2400);
    const t3 = setTimeout(() => onClose?.(), 2700);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onClose]);

  const isSuccess = type === 'success';
  const isInfo = type === 'info';
  const isError = type === 'error';

  const accent = isSuccess ? '#C2F800' : isInfo ? '#60A5FA' : '#EF4444';

  return (
    <div
      className={`fixed bottom-6 right-6 z-[100] transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <div
        className="flex items-center gap-3 px-4 py-3 rounded-xl border shadow-2xl backdrop-blur-md bg-[#141414]/95 min-w-[240px] max-w-[360px]"
        style={{ borderColor: `${accent}40` }}
      >
        <div
          className="flex items-center justify-center w-9 h-9 rounded-lg shrink-0"
          style={{ backgroundColor: accent, color: '#000' }}
        >
          {isSuccess && (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          )}
          {isInfo && (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4M12 8h.01" />
            </svg>
          )}
          {isError && (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          )}
        </div>

        <p className="text-sm font-bold text-white flex-1 leading-snug">{message}</p>

        <button
          onClick={() => { setVisible(false); setTimeout(() => onClose?.(), 300); }}
          className="text-gray-500 hover:text-white transition-colors shrink-0"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Toast;