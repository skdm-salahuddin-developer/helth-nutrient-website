'use client';

import React from 'react';
import Image from 'next/image';

const featureCards = [
  {
    id: 1,
    title: 'Healthy Meals Tips',
    image: '/images/hero-slide-1.jpg',
    alt: 'Healthy organic clinical nutrition and meal planning tips - Nutrition By Durdana',
  },
  {
    id: 2,
    title: 'Recipes Idea',
    image: '/images/gallery-4.jpg',
    alt: 'Nutrient dense recipes and balanced diet ideas by Dietitian Dt. Durdana',
  },
  {
    id: 3,
    title: 'Healthy Meals Tips',
    image: '/images/gallery-1.jpg',
    alt: 'Mindful wellness and natural lifestyle health advice in Malad West Mumbai',
  },
];

export default function FeatureImageCards() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {featureCards.map((card) => (
            <div
              key={card.id}
              className="group relative h-64 sm:h-72 lg:h-80 w-full rounded-sm overflow-hidden shadow-md cursor-pointer transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <Image
                src={card.image}
                alt={card.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark Gradient Overlay for Readability */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/35 transition-colors duration-300 flex flex-col items-center justify-center p-6 text-center" />

              {/* Text Content */}
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Horizontal Accent Line */}
                <div className="w-12 h-[2px] bg-white/80 mb-3 group-hover:w-16 transition-all duration-300" />
                
                {/* Title */}
                <h3 className="font-serif text-2xl sm:text-[26px] md:text-2xl lg:text-[28px] font-semibold text-white tracking-wide drop-shadow-sm">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
