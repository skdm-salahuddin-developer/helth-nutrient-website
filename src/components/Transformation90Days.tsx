'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Dumbbell, Atom, ArrowRight, MessageCircle } from 'lucide-react';
import AppointmentModal from './AppointmentModal';

export default function Transformation90Days() {
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  return (
    <>
      <section id="transformation" className="py-16 md:py-24 bg-[#fbfdf9] relative overflow-hidden scroll-mt-20">
        {/* Subtle background glow */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-[#5c8d37]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#5c8d37]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Image: Clean photo with ZERO text overlay */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[440px] sm:h-[500px] w-full rounded-md overflow-hidden shadow-lg bg-emerald-50/50">
                <Image
                  src="/images/transformation-90days.jpg"
                  alt="90 Days Nutrition Transformation Program by Dt. Durdana - Clinical Dietitian Mumbai"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Right Text & 2 Feature Columns */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              
              {/* Main Headline */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#1e231e] leading-[1.2] tracking-tight">
                Change your life in the next <br className="hidden sm:inline" />
                <span className="text-[#5c8d37]">90 days of Practice</span>
              </h2>

              {/* Subtitle / Paragraph */}
              <p className="text-gray-500 text-sm sm:text-[15px] leading-relaxed mt-4 max-w-2xl font-normal">
                Discover how tailored Ayurvedic principles combined with evidence-based metabolic nutrition can restore your natural gut microbiome, optimize your daily energy, and build sustainable healthy habits that last a lifetime.
              </p>

              {/* 2 Feature Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 pt-2">
                
                {/* Column 1: Personalized Nutrition Plan */}
                <div className="flex items-start gap-4 group">
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#5c8d37] text-white flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-300">
                    <Atom className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl sm:text-[22px] font-medium text-[#1e231e] group-hover:text-[#5c8d37] transition-colors">
                      Personalized <br className="hidden sm:inline" /> Nutrition Plan
                    </h3>
                    <div className="w-10 h-[2px] bg-[#1e231e] my-2.5 group-hover:w-14 group-hover:bg-[#5c8d37] transition-all duration-300" />
                    <p className="text-xs sm:text-[13px] text-gray-500 leading-relaxed">
                      Customized macronutrient balancing and gut-healing recipes built around your lifestyle, food allergies, and metabolic goals.
                    </p>
                  </div>
                </div>

                {/* Column 2: Personalized Exercise Plan */}
                <div className="flex items-start gap-4 group">
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#5c8d37] text-white flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-300">
                    <Dumbbell className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl sm:text-[22px] font-medium text-[#1e231e] group-hover:text-[#5c8d37] transition-colors">
                      Personalized <br className="hidden sm:inline" /> Exercise Plan
                    </h3>
                    <div className="w-10 h-[2px] bg-[#1e231e] my-2.5 group-hover:w-14 group-hover:bg-[#5c8d37] transition-all duration-300" />
                    <p className="text-xs sm:text-[13px] text-gray-500 leading-relaxed">
                      Intuitive movement and strength routines designed to energize your body without burnout or excessive fatigue.
                    </p>
                  </div>
                </div>

              </div>

              {/* Action Buttons: WhatsApp & Contact Redirects */}
              <div className="mt-8 pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/919619997901?text=Hello%20Dt.%20Durdana,%20I%20am%20interested%20in%20the%2090-Day%20Transformation%20program."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1faa4e] text-white px-7 py-3 rounded-[3px] text-sm font-semibold tracking-wide transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Start 90-Day on WhatsApp</span>
                </a>
                <a
                  href="#nutritionist-near-malad"
                  className="inline-flex items-center gap-2 bg-[#1c221b] hover:bg-[#5c8d37] text-white px-6 py-3 rounded-[3px] text-sm font-semibold tracking-wide transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
                >
                  <span>Contact Clinic</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Appointment Modal */}
      <AppointmentModal 
        isOpen={appointmentOpen} 
        onClose={() => setAppointmentOpen(false)} 
      />
    </>
  );
}
