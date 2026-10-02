'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// Custom Dual-tone/Outline Icons with hover transition support
const CalendarExerciseIcon = ({ className = "w-14 h-14" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="14" width="44" height="40" rx="6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <line x1="10" y1="26" x2="54" y2="26" stroke="currentColor" strokeWidth="3" />
    <line x1="22" y1="8" x2="22" y2="18" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
    <line x1="42" y1="8" x2="42" y2="18" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
    <circle cx="22" cy="36" r="2.5" fill="currentColor" />
    <circle cx="32" cy="36" r="2.5" fill="currentColor" />
    <circle cx="42" cy="36" r="2.5" fill="currentColor" />
    <circle cx="22" cy="44" r="2.5" fill="currentColor" />
    {/* Check badge */}
    <circle cx="46" cy="46" r="10" fill="currentColor" />
    <path d="M41.5 46.5L44.5 49.5L50.5 43.5" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const HeartPinIcon = ({ className = "w-14 h-14" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M32 8C22.059 8 14 16.059 14 26C14 39.2 32 56 32 56C32 56 50 39.2 50 26C50 16.059 41.941 8 32 8Z" 
      stroke="currentColor" 
      strokeWidth="3.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M32 32.5C32 32.5 24 27.5 24 22.5C24 19.5 26.5 17.5 29 17.5C30.5 17.5 31.5 18.5 32 19.5C32.5 18.5 33.5 17.5 35 17.5C37.5 17.5 40 19.5 40 22.5C40 27.5 32 32.5 32 32.5Z" 
      fill="currentColor"
    />
  </svg>
);

const JuiceGlassIcon = ({ className = "w-14 h-14" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M18 16L24 54C24.5 57 27 59 30 59H36C39 59 41.5 57 42 54L48 16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <line x1="16" y1="16" x2="50" y2="16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <line x1="22" y1="28" x2="44" y2="28" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
    <path d="M30 6L38 18L32 46" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <circle cx="45" cy="18" r="9" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <circle cx="45" cy="18" r="7" stroke="currentColor" strokeWidth="1.5" />
    <line x1="45" y1="11" x2="45" y2="25" stroke="currentColor" strokeWidth="1.5" />
    <line x1="38" y1="18" x2="52" y2="18" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const allServices = [
  {
    id: 1,
    title: 'Daily Exercise',
    description: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.',
    icon: CalendarExerciseIcon,
    hasRedDot: true,
  },
  {
    id: 2,
    title: 'Natural Foods',
    description: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.',
    icon: HeartPinIcon,
    hasRedDot: false,
  },
  {
    id: 3,
    title: 'Nutrition Plans',
    description: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.',
    icon: JuiceGlassIcon,
    hasRedDot: false,
  },
  {
    id: 4,
    title: 'Mindful Habits',
    description: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.',
    icon: HeartPinIcon,
    hasRedDot: false,
  },
  {
    id: 5,
    title: 'Medical Dietetics',
    description: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.',
    icon: JuiceGlassIcon,
    hasRedDot: false,
  },
];

export default function ServicesCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedService, setSelectedService] = useState<typeof allServices[0] | null>(null);

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % (allServices.length - 2));
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + (allServices.length - 2)) % (allServices.length - 2));
  };

  const visibleCards = allServices.slice(startIndex, startIndex + 3);

  return (
    <section id="services" className="py-12 md:py-20 bg-[#fafbfa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative">
        
        {/* Main Carousel Wrapper */}
        <div className="flex items-center justify-between gap-2 sm:gap-6">
          
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-[#f0f3ec] text-gray-600 hover:bg-[#5c8d37] hover:text-white transition-all duration-300 shadow-sm flex-shrink-0"
            aria-label="Previous service"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Cards Grid - Color only on HOVER */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full">
            {visibleCards.map((card) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={card.id}
                  className="group relative bg-white rounded-[2px] p-8 sm:p-10 flex flex-col items-center text-center border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-[#5c8d37] hover:bg-[#5c8d37] transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
                  onClick={() => setSelectedService(card)}
                >
                  {/* Icon - Green by default, white on hover */}
                  <div className="mb-6 flex items-center justify-center text-[#5c8d37] group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-16 h-16" />
                  </div>

                  {/* Title - Dark by default, white on hover */}
                  <h3 className="font-serif text-2xl sm:text-[26px] font-medium tracking-tight mb-4 text-[#1e231e] group-hover:text-white transition-colors duration-300">
                    {card.title}
                  </h3>

                  {/* Red dot accent (if present) */}
                  {card.hasRedDot && (
                    <div className="w-1.5 h-1.5 rounded-full bg-[#d6453d] group-hover:bg-white mb-3 transition-colors duration-300" />
                  )}

                  {/* Description - Gray by default, white/90 on hover */}
                  <p className="text-xs sm:text-[13.5px] leading-relaxed mb-8 text-gray-500 group-hover:text-white/95 transition-colors duration-300">
                    {card.description}
                  </p>

                  {/* More Details Action Link */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedService(card);
                    }}
                    className="text-xs font-semibold uppercase tracking-wider text-gray-700 group-hover:text-white underline-offset-4 group-hover:underline transition-colors duration-300 mt-auto"
                  >
                    More Details
                  </button>
                </div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-[#f0f3ec] text-gray-600 hover:bg-[#5c8d37] hover:text-white transition-all duration-300 shadow-sm flex-shrink-0"
            aria-label="Next service"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

        {/* Mobile Carousel Controls */}
        <div className="flex sm:hidden justify-center items-center gap-4 mt-6">
          <button
            onClick={handlePrev}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#f0f3ec] text-gray-600 hover:bg-[#5c8d37] hover:text-white transition-all shadow-sm"
            aria-label="Previous service"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>
          <span className="text-xs text-gray-500 font-medium">Tap card to view details</span>
          <button
            onClick={handleNext}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#f0f3ec] text-gray-600 hover:bg-[#5c8d37] hover:text-white transition-all shadow-sm"
            aria-label="Next service"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

      </div>

      {/* Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden p-6 sm:p-8 border border-gray-100 relative">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 p-1"
            >
              <X className="w-5 h-5" />
            </button>
            <h4 className="font-serif text-2xl font-bold text-[#48732c] mb-3">
              {selectedService.title}
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              {selectedService.description}
            </p>
            <div className="bg-[#f4f8f0] p-4 rounded-lg mb-6 text-xs text-[#48732c] space-y-1">
              <p className="font-semibold">Key Highlights:</p>
              <p>• Rooted in Ayurveda Food Science & modern clinical nutrition</p>
              <p>• Tailored to individual dietary preferences & medical conditions</p>
              <p>• Simple, sustainable habit progression</p>
            </div>
            <button
              onClick={() => setSelectedService(null)}
              className="w-full bg-[#5c8d37] hover:bg-[#48732c] text-white py-2.5 rounded font-semibold text-xs tracking-wider uppercase transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
