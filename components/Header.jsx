// components/Header.jsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const router = useRouter();

  const handleFilterToggle = () => {
    setMobileFiltersOpen(!mobileFiltersOpen);

    if (window.location.pathname === '/') {
      router.replace(`/?showFilters=${!mobileFiltersOpen}`, { scroll: false });
    }
  };

  return (
    <header className="bg-gray-800 py-4 px-4 shadow-lg sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
<Link href="/" >
<h1 className="text-xl md:text-2xl font-bold text-purple-400">Book App</h1>
</Link>
        <div className="flex items-center space-x-2 md:space-x-4">
          <button 
            onClick={handleFilterToggle}
            className="md:hidden bg-gray-700 p-2 rounded-lg"
            aria-label="Toggle filters"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 px-3 py-1 md:px-4 md:py-2 rounded-lg transition text-sm md:text-base">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
}