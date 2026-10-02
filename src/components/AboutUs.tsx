'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CheckCircle, Leaf, ArrowRight } from 'lucide-react';
import AppointmentModal from './AppointmentModal';

export default function AboutUs() {
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  const pillars = [
    {
      title: 'Simple, Sustainable Health Habits',
      desc: 'No restrictive fads. Easy-to-follow daily shifts that effortlessly blend into your real-world routine.',
    },
    {
      title: 'Long-Term Wellness Focus',
      desc: 'A permanent lifestyle evolution prioritizing restorative gut health, vitality, and cellular healing.',
    },
    {
      title: 'Results Tailored to You',
      desc: 'Customized nutritional bio-individuality based on your medical history, metabolic pace, and lifestyle goals.',
    },
  ];

  return (
    <>
      <section id="about" className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Image Column - Confident, Professional Indian Nutritionist & Wellness Consultant */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[430px] sm:h-[500px] w-full rounded-md overflow-hidden shadow-lg bg-emerald-50/30">
                <Image
                  src={
                    imgError
                      ? 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop'
                      : 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop'
                  }
                  alt="Durdana - Professional Nutritionist and Health Advisor"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-top"
                  onError={() => setImgError(true)}
                  priority
                />
              </div>
            </div>

            {/* Right Text & Philosophy Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              
              {/* Section Subtitle */}
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#5c8d37] mb-2.5">
                <Leaf className="w-4 h-4 text-[#5c8d37]" />
                <span>About Us</span>
              </div>

              {/* Main Headline */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-semibold text-[#1e231e] leading-[1.25] tracking-tight">
                Welcome to <span className="text-[#48732c]">Nutrition By Durdana</span>
              </h2>

              {/* Tagline / Subtitle */}
              <p className="font-serif italic text-base sm:text-lg text-[#5c8d37] mt-3 font-medium">
                “Attain long-term health and wellness via individualized, holistic nutrition.”
              </p>

              {/* Main Body Paragraph */}
              <div className="space-y-3 mt-4 text-gray-600 text-sm sm:text-[15px] leading-relaxed">
                <p>
                  Your trusted partner in achieving long-term health, healing, and wellness through personalised nutrition. Whether you want to improve your lifestyle, manage a medical condition, or simply build healthier habits, you’re in the right place.
                </p>
                <p>
                  With expert guidance rooted in <strong className="text-gray-800 font-semibold">Ayurveda Food Science</strong> and modern <strong className="text-gray-800 font-semibold">Medical Nutrition</strong>, I help individuals transform their health with plans that are simple, sustainable, and tailored to their unique needs.
                </p>
              </div>

              {/* Key 3 Pillars */}
              <div className="mt-7 space-y-3.5 pt-2 border-t border-gray-100">
                {pillars.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 group">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-themeGreen-100 text-[#48732c] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#5c8d37] group-hover:text-white transition-colors duration-200">
                      <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-[#48732c] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-[13px] text-gray-500 mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Section */}
              <div className="mt-8 pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setAppointmentOpen(true)}
                  className="inline-flex items-center gap-2 bg-[#1c221b] hover:bg-[#5c8d37] text-white px-7 py-3 rounded-[3px] text-sm font-semibold tracking-wide transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
                >
                  <span>Start Your Personal Plan</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#services"
                  className="text-xs sm:text-sm font-semibold text-gray-700 hover:text-[#5c8d37] px-3 py-2 transition-colors"
                >
                  Explore All Programs →
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
