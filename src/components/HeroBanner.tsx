'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Check, Leaf } from 'lucide-react';
import AppointmentModal from './AppointmentModal';

const slides = [
  {
    id: 1,
    title: 'Mindful Daily Habits For Lasting Vitality',
    subtitle:
      'Reclaim your natural energy with sustainable routines. Custom diet plans in Malad for weight loss, hormonal balance, and lifelong confidence.',
    ctaText: 'Explore Mindful Living',
    image: '/images/hero-slide-3.jpg',
    imageAlt: 'Mindful Daily Habits For Lasting Vitality - Nutrition By Durdana Mumbai',
  },
  {
    id: 2,
    title: 'Nourish Your Body With Clean & Balanced Meals',
    subtitle:
      'Personalized nutrition guidance crafted for your lifestyle. Build intuitive wellness habits with top-rated nutritionists in Malad by your side.',
    ctaText: 'Discover Nutrition Plans',
    image: '/images/hero-slide-2.jpg',
    imageAlt: 'Custom diet plans for weight loss in Malad - Dt. Durdana',
  },
  {
    id: 3,
    title: 'You Can Transform Health Through Habit Change!',
    subtitle:
      'Consult Dt. Durdana, the best nutritionist & weight loss coach in Malad. Personalized dietary programs rooted in Ayurveda and medical science to heal your body naturally.',
    ctaText: 'Learn More About Our Program',
    image: '/images/hero-slide-1.jpg',
    imageAlt: 'Best Nutritionist in Malad - Nutrition By Durdana Clinic',
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
      <section id="best-nutritionist-in-malad" className="relative w-full min-h-[580px] lg:min-h-[660px] xl:min-h-[720px] overflow-hidden flex items-center bg-[#f8f9f6] scroll-mt-20">
        {/* Backward-compatible anchor for #home */}
        <span id="home" className="block relative -top-24 invisible" />
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
              {/* Clean, natural image with subtle contrast - zero white wash over whole photo */}
              <div className="absolute inset-0 bg-black/15" />
            </div>
          ))}
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 py-12 md:py-20 flex justify-end">
          
          {/* Pure Floating Text - STRICTLY ZERO BOX SHAPE, NO BORDERS, NO CARDS */}
          <div className="relative w-full lg:w-[560px] xl:w-[620px] transition-all duration-500">
            
            {/* Seamless boundary-free soft ambient glow behind text only - zero edges or box lines */}
            <div className="absolute -inset-8 bg-white/75 blur-3xl pointer-events-none -z-10 rounded-full" />

            {/* Target Keyword Showcase with Leaf */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[#34581c] uppercase mb-2">
              <Leaf className="w-4 h-4 text-[#5c8d37]" />
              <span>Best Nutritionist in Malad</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-[44px] xl:text-[48px] font-semibold text-[#274413] leading-[1.2] tracking-tight drop-shadow-sm">
              {slide.title}
            </h1>

            {/* Subtext */}
            <p className="text-[#1c2419] text-base sm:text-[17px] font-medium leading-relaxed mt-4 sm:mt-5 max-w-xl drop-shadow-sm">
              {slide.subtitle}
            </p>

            {/* Slide Navigation Dots */}
            <div className="mt-8 sm:mt-10 flex items-center justify-between text-xs text-gray-700">
              <div className="flex items-center gap-2">
                {slides.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setCurrentSlide(dotIdx)}
                    className={`transition-all duration-300 rounded-full ${
                      dotIdx === currentSlide
                        ? 'w-6 h-2 bg-[#5c8d37]'
                        : 'w-2 h-2 bg-gray-500 hover:bg-gray-700'
                    }`}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next arrows */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handlePrev}
                  className="p-1.5 rounded-full hover:bg-black/10 text-gray-700 hover:text-black transition"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-1.5 rounded-full hover:bg-black/10 text-gray-700 hover:text-black transition"
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
