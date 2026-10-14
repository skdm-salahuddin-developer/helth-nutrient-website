'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FileText, Clock, Heart, ShieldCheck } from 'lucide-react';
import AppointmentModal from './AppointmentModal';

const steps = [
  {
    id: 1,
    title: 'Contact Us',
    description: 'Reach out via Call or WhatsApp to share your health goals and lifestyle concerns.',
    icon: FileText,
  },
  {
    id: 2,
    title: 'Appointment',
    description: 'Schedule a 1-on-1 personalized discovery session with Clinical Nutritionist Dt. Durdana.',
    icon: Clock,
  },
  {
    id: 3,
    title: 'Analysis',
    description: 'Comprehensive metabolic, gut health, and body constitution assessment to pinpoint root causes.',
    icon: Heart,
  },
  {
    id: 4,
    title: 'Happy Life',
    description: 'Follow your sustainable Ayurvedic and medical nutrition blueprint for long-term health.',
    icon: ShieldCheck,
  },
];

export default function FourStepsProcess() {
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  return (
    <>
      <section className="relative py-20 md:py-28 overflow-hidden bg-gray-900">
        {/* Background Image - Clear, bright & clearly visible */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/four-steps.jpg"
            alt="Healthy living lifestyle background"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-85"
            quality={90}
          />
          {/* Subtle overlay so text is readable while photo remains fully visible */}
          <div className="absolute inset-0 bg-black/35 backdrop-brightness-90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
          
          {/* Main Headline */}
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-semibold text-white tracking-tight leading-[1.2] drop-shadow-md">
              Solution In 4 Easy Steps <br />
              <span className="font-normal text-emerald-50">Successful life</span>
            </h2>
          </div>

          {/* 4 Steps Grid - Solid dark cards matching screenshot */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.id}
                  onClick={() => setAppointmentOpen(true)}
                  className="group bg-[#222222]/95 hover:bg-[#1a2319] border border-black/20 hover:border-[#5c8d37] rounded-[2px] p-8 sm:p-9 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1.5 shadow-2xl cursor-pointer"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-full bg-white/10 group-hover:bg-[#5c8d37] text-white flex items-center justify-center mb-6 transition-all duration-300">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl sm:text-[22px] font-medium text-[#7bb84f] group-hover:text-[#90d65e] transition-colors mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-gray-300 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              );
            })}
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
