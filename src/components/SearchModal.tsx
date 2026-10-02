'use client';

import React, { useState } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const popularSearches = [
    'Habit change courses',
    'Detox nutrition plans',
    'Weight management',
    'Morning wellness routine',
    'Personal coach consultation',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl max-w-xl w-full overflow-hidden p-6 border border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs uppercase tracking-wider font-semibold text-gray-500">
            Search Aarogya Health Coach
          </span>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="relative mb-6">
          <Search className="w-5 h-5 text-gray-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type course name, topic, or question..."
            className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-lg text-base focus:outline-none focus:border-[#5c8d37] focus:ring-2 focus:ring-[#5c8d37]/20"
          />
        </div>

        <div>
          <p className="text-xs font-semibold text-gray-400 mb-2">POPULAR TOPICS</p>
          <div className="flex flex-wrap gap-2">
            {popularSearches.map((topic, index) => (
              <button
                key={index}
                onClick={() => setQuery(topic)}
                className="text-xs bg-gray-50 hover:bg-themeGreen-50 hover:text-themeGreen-700 text-gray-600 px-3 py-1.5 rounded-full border border-gray-200 hover:border-themeGreen-200 transition-colors flex items-center gap-1.5"
              >
                <span>{topic}</span>
                <ArrowRight className="w-3 h-3 text-gray-400" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
