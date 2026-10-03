'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import AppointmentModal from './AppointmentModal';

const slides = [
  {
    id: 1,
    title: 'You Can Transform Health Through Habit Change!',
    subtitle:
      'Learn about the best creative fitness & diet courses & get the most of it. Enroll in our programs & get the best offers & tips for limited time.',
    ctaText: 'Learn More About Our Program',
    image: '/images/hero-slide-1.jpg',
    imageAlt: 'Healthy organic nutrition and salad',
  },
  {
    id: 2,
    title: 'Nourish Your Body With Clean & Balanced Meals',
    subtitle:
      'Personalized nutrition guidance crafted for your lifestyle. Build intuitive wellness habits with certified nutritionists by your side.',
    ctaText: 'Discover Nutrition Plans',
    image: '/images/hero-slide-2.jpg',
    imageAlt: 'Fresh vegetable meal prep and herbs',
  },
  {
    id: 3,
    title: 'Mindful Daily Habits For Lasting Vitality',
    subtitle:
      'Reclaim your natural energy with sustainable routines. Small daily shifts that compound into lifelong vitality and confidence.',
    ctaText: 'Explore Mindful Living',
    image: '/images/hero-slide-3.jpg',
    imageAlt: 'Fresh organic greens and smoothies',
  },
];

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [programModalOpen, setProgramModalOpen] = useState(false);
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  // Auto slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <section id="home" className="relative w-full min-h-[580px] lg:min-h-[660px] xl:min-h-[720px] overflow-hidden flex items-center bg-[#f8f9f6] scroll-mt-20">
        {/* Background Images - Clean, without any text overlays on the image */}
        <div className="absolute inset-0 z-0">
          {slides.map((s, idx) => (
            <div
              key={s.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
              } transition-transform duration-1000`}
            >
              <Image
                src={s.image}
                alt={s.imageAlt}
                fill
                priority={idx === 0}
                className="object-cover object-center lg:object-[left_center]"
                sizes="100vw"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-white/10 to-white/70 lg:to-white/40" />
            </div>
          ))}
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 py-12 md:py-20 flex justify-end">
          
          {/* Floating Card */}
          <div className="w-full lg:w-[540px] xl:w-[580px] bg-white/95 backdrop-blur-md rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.12)] p-7 sm:p-10 md:p-12 transition-all duration-500">
            
            {/* Main Headline */}
            <h1 className="font-serif text-2xl sm:text-3xl md:text-[38px] xl:text-[42px] font-semibold text-[#48732c] leading-[1.25] tracking-tight">
              {slide.title}
            </h1>

            {/* Subtext */}
            <p className="text-gray-500 text-sm sm:text-[15.5px] leading-relaxed mt-4 sm:mt-5 font-normal">
              {slide.subtitle}
            </p>

            {/* CTA Link with red dot */}
            <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-4 sm:gap-6 pt-1">
              <button
                onClick={() => setProgramModalOpen(true)}
                className="group inline-flex items-center text-gray-800 hover:text-[#48732c] font-medium text-sm sm:text-[15px] tracking-wide transition-colors duration-200"
              >
                <span>{slide.ctaText}</span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#d6453d] inline-block ml-3 transform group-hover:scale-125 transition-transform duration-200 shadow-sm shadow-[#d6453d]/40" />
              </button>

              <button
                onClick={() => setAppointmentOpen(true)}
                className="sm:hidden w-full text-center bg-[#1c221b] text-white py-2.5 rounded font-semibold text-xs tracking-wider uppercase mt-2"
              >
                Book An Appointment
              </button>
            </div>

            {/* Slide Navigation Dots */}
            <div className="mt-8 sm:mt-10 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
              <div className="flex items-center gap-2">
                {slides.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setCurrentSlide(dotIdx)}
                    className={`transition-all duration-300 rounded-full ${
                      dotIdx === currentSlide
                        ? 'w-6 h-2 bg-[#5c8d37]'
                        : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next arrows */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handlePrev}
                  className="p-1.5 rounded hover:bg-gray-100 text-gray-500 hover:text-gray-800 transition"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-1.5 rounded hover:bg-gray-100 text-gray-500 hover:text-gray-800 transition"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Program Details Modal */}
      {programModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full overflow-hidden p-6 sm:p-8 border border-gray-100 relative">
            <h3 className="font-serif text-2xl font-bold text-[#48732c] mb-2">
              Habit Change Program
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Our signature 8-week habit transformation is built on behavioral science and nutritional medicine.
            </p>

            <div className="space-y-3 mb-6">
              {[
                '1-on-1 weekly video session with certified coach',
                'Personalized meal plan & grocery guidelines',
                'Mindful eating strategies to eliminate stress cravings',
                'Continuous WhatsApp & email support',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-themeGreen-100 text-themeGreen-700 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setProgramModalOpen(false);
                  setAppointmentOpen(true);
                }}
                className="flex-1 bg-[#5c8d37] hover:bg-[#48732c] text-white py-2.5 rounded font-medium text-sm transition"
              >
                Enroll Now
              </button>
              <button
                onClick={() => setProgramModalOpen(false)}
                className="px-4 py-2.5 border border-gray-200 text-gray-600 rounded font-medium text-sm hover:bg-gray-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Appointment Modal */}
      <AppointmentModal 
        isOpen={appointmentOpen} 
        onClose={() => setAppointmentOpen(false)} 
      />
    </>
  );
}
