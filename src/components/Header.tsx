'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Menu, X, ChevronRight } from 'lucide-react';
import AppointmentModal from './AppointmentModal';
import SearchModal from './SearchModal';

// Custom Organic Leaf SVG that precisely matches the logo style
const DurdanaLeafLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg 
    viewBox="0 0 48 48" 
    className={className} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M38 8C23 8 10 21 10 36C25 36 38 23 38 8Z" 
      fill="#5c8d37" 
    />
    <path 
      d="M23 23C15 25 10 32 10 36C14 36 21 31 23 23Z" 
      fill="#456c28" 
    />
    <path 
      d="M10 36C18 30 28 20 38 8" 
      stroke="#ffffff" 
      strokeWidth="1.2" 
      strokeLinecap="round" 
    />
  </svg>
);

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Programs', href: '#programs' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-40 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 sm:py-4 flex items-center justify-between">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="transform group-hover:rotate-6 transition-transform duration-300">
              <DurdanaLeafLogo className="w-9 h-9 sm:w-10 sm:h-10" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl sm:text-[26px] font-bold text-[#48732c] tracking-tight leading-none">
                Nutrition
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold text-gray-700 tracking-[0.24em] uppercase mt-1">
                By Durdana
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7 xl:space-x-8 text-[14.5px] font-medium text-gray-600">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith('#') && link.href.length > 1) {
                    const el = document.getElementById(link.href.substring(1));
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                  setActiveNav(link.name);
                }}
                className={`transition-colors duration-200 hover:text-[#5c8d37] relative py-1 ${
                  activeNav === link.name 
                    ? 'text-[#5c8d37] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#5c8d37]' 
                    : 'text-gray-700'
                }`}
              >
                {link.name}
              </a>
            ))}

            {/* Search Icon Button */}
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="text-gray-700 hover:text-[#5c8d37] p-1.5 transition-colors duration-200"
            >
              <Search className="w-4 h-4 stroke-[2.2]" />
            </button>
          </nav>

          {/* Right Action Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setAppointmentOpen(true)}
              className="hidden sm:inline-flex items-center justify-center bg-[#1c221b] hover:bg-[#5c8d37] text-white text-xs sm:text-[13px] font-semibold px-5 sm:px-6 py-3 rounded-[3px] tracking-wide transition-all duration-300 shadow-sm active:scale-95"
            >
              Book An Appointment
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-[#5c8d37] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white/98 backdrop-blur-md px-6 py-5 shadow-xl transition-all">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith('#') && link.href.length > 1) {
                      const el = document.getElementById(link.href.substring(1));
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }
                    setActiveNav(link.name);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-between py-2 text-base font-medium border-b border-gray-50 ${
                    activeNav === link.name ? 'text-[#5c8d37] font-semibold' : 'text-gray-700'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </a>
              ))}
              
              <div className="pt-2 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setSearchOpen(true);
                  }}
                  className="flex items-center gap-2 text-gray-600 hover:text-[#5c8d37] py-2 text-sm font-medium"
                >
                  <Search className="w-4 h-4" />
                  <span>Search nutrition guides</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setAppointmentOpen(true);
                  }}
                  className="w-full bg-[#1c221b] hover:bg-[#5c8d37] text-white text-center py-3 rounded-[3px] font-semibold text-sm transition-colors mt-2"
                >
                  Book An Appointment
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Modals */}
      <AppointmentModal 
        isOpen={appointmentOpen} 
        onClose={() => setAppointmentOpen(false)} 
      />
      <SearchModal 
        isOpen={searchOpen} 
        onClose={() => setSearchOpen(false)} 
      />
    </>
  );
}
