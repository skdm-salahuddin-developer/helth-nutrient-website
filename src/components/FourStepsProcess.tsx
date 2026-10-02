'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FileText, Clock, Heart, ShieldCheck } from 'lucide-react';
import AppointmentModal from './AppointmentModal';

const steps = [
  {
    id: 1,
    title: 'Contact Us',
    description: 'Reach out and share your lifestyle goals, food habits, and any specific health challenges.',
    icon: FileText,
  },
  {
    id: 2,
    title: 'Appointment',
    description: 'Schedule your comprehensive 1-on-1 discovery consultation at your preferred time.',
    icon: Clock,
  },
  {
    id: 3,
    title: 'Analysis',
    description: 'In-depth assessment of your medical history, metabolic pace, and Ayurvedic body constitution.',
    icon: Heart,
  },
  {
    id: 4,
    title: 'Happy Life',
    description: 'Follow your tailored, sustainable nutrition blueprint and experience lasting daily vitality.',
    icon: ShieldCheck,
  },
];

export default function FourStepsProcess() {
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  return (
    <>
      <section className="relative py-20 md:py-28 overflow-hidden bg-[#181d18]">
        {/* Background Image with Dark Tint */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=2000&auto=format&fit=crop"
            alt="Healthy living lifestyle background"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
          
          {/* Main Headline */}
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-semibold text-white tracking-tight leading-[1.2]">
              Solution In 4 Easy Steps <br />
              <span className="text-emerald-100 font-normal">Successful life</span>
            </h2>
            <div className="w-16 h-[2px] bg-[#5c8d37] mx-auto mt-4" />
          </div>

          {/* 4 Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.id}
                  onClick={() => setAppointmentOpen(true)}
                  className="group bg-[#222222]/95 hover:bg-[#1f281e] border border-white/5 hover:border-[#5c8d37]/60 rounded-[2px] p-8 sm:p-9 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1.5 shadow-xl cursor-pointer"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-full bg-white/10 group-hover:bg-[#5c8d37] text-white flex items-center justify-center mb-6 transition-all duration-300">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl sm:text-[22px] font-medium text-[#7bb84f] group-hover:text-[#8fd15f] transition-colors mb-3.5">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-[13.5px] text-gray-300 leading-relaxed font-normal">
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
