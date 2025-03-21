"use client";

import React from 'react';
import Link from 'next/link';

import { useState } from 'react';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-foreground/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/itworld.svg" alt="IT World" className="h-8 w-auto" />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-foreground/80 hover:text-foreground hover:bg-gradient-to-r hover:from-orange-400 hover:to-amber-500 hover:bg-clip-text hover:text-transparent transition-all">
              Services
            </Link>
            <Link href="/about" className="text-foreground/80 hover:text-foreground hover:bg-gradient-to-r hover:from-orange-400 hover:to-amber-500 hover:bg-clip-text hover:text-transparent transition-all">
              About
            </Link>
            <Link href="/portfolio" className="text-foreground/80 hover:text-foreground hover:bg-gradient-to-r hover:from-orange-400 hover:to-amber-500 hover:bg-clip-text hover:text-transparent transition-all">
              Portfolio
            </Link>
            <Link href="/contact" className="text-foreground/80 hover:text-foreground hover:bg-gradient-to-r hover:from-orange-400 hover:to-amber-500 hover:bg-clip-text hover:text-transparent transition-all">
              Contact
            </Link>
          </div>

          <button 
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-foreground/10 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-sm rounded-lg border border-foreground/10 mt-2">
            <Link
              href="/services"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:text-foreground hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-amber-500/20 transition-all"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:text-foreground hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-amber-500/20 transition-all"
            >
              About
            </Link>
            <Link
              href="/portfolio"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:text-foreground hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-amber-500/20 transition-all"
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:text-foreground hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-amber-500/20 transition-all"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}