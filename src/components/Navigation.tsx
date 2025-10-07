'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${scrolled ? 'backdrop-blur-sm shadow-md' : ''} sticky top-0 z-50 transition-all duration-300`} style={{ backgroundColor: '#1D63FF' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-white hover:text-blue-100 transition-colors duration-200">
                McKenzie White
              </Link>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/about" className="text-white/90 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-white hover:text-white transition-all duration-200">
                About
              </Link>
              <Link href="/papers" className="text-white/90 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-white hover:text-white transition-all duration-200">
                Academic Papers
              </Link>
              <Link href="/consulting" className="text-white/90 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-white hover:text-white transition-all duration-200">
                Consulting
              </Link>
              <Link href="/media" className="text-white/90 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-white hover:text-white transition-all duration-200">
                Media
              </Link>
              <Link href="/repositories" className="text-white/90 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-white hover:text-white transition-all duration-200">
                Code Repositories
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white/80 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} sm:hidden border-t border-white/20`} style={{ backgroundColor: '#1D63FF' }}>
        <div className="pt-2 pb-3 space-y-1">
          <Link
            href="/about"
            className="block px-3 py-2 text-base font-medium text-white/90 hover:text-white hover:bg-white/10 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/papers"
            className="block px-3 py-2 text-base font-medium text-white/90 hover:text-white hover:bg-white/10 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Academic Papers
          </Link>
          <Link
            href="/consulting"
            className="block px-3 py-2 text-base font-medium text-white/90 hover:text-white hover:bg-white/10 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Consulting
          </Link>
          <Link
            href="/media"
            className="block px-3 py-2 text-base font-medium text-white/90 hover:text-white hover:bg-white/10 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Media
          </Link>
          <Link
            href="/repositories"
            className="block px-3 py-2 text-base font-medium text-white/90 hover:text-white hover:bg-white/10 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Code Repositories
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 