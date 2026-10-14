'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles, ArrowRight, Check, ShieldCheck, HeartPulse, MessageCircle } from 'lucide-react';
import AppointmentModal from './AppointmentModal';

// Lotus Yoga Silhouette SVG matching the screenshot
const LotusYogaIcon = ({ className = "w-24 h-24" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Colored Lotus Petals */}
    <path d="M50 20C40 32 35 48 50 65C65 48 60 32 50 20Z" fill="#a3e635" fillOpacity="0.4" />
    <path d="M50 65C30 60 18 42 22 30C28 42 38 56 50 65Z" fill="#38bdf8" fillOpacity="0.4" />
    <path d="M50 65C70 60 82 42 78 30C72 42 62 56 50 65Z" fill="#f472b6" fillOpacity="0.4" />
    <path d="M50 65C22 68 10 52 12 40C20 54 32 64 50 65Z" fill="#34d399" fillOpacity="0.3" />
    <path d="M50 65C78 68 90 52 88 40C80 54 68 64 50 65Z" fill="#fb923c" fillOpacity="0.3" />
    
    {/* Meditating Figure Silhouette */}
    <circle cx="50" cy="30" r="5" fill="#2d3748" />
    <path d="M45 37C42 40 40 46 40 54L30 62C28 64 32 68 36 65L44 58L44 68H56L56 58L64 65C68 68 72 64 70 62L60 54C60 46 58 40 55 37H45Z" fill="#2d3748" />
    <circle cx="50" cy="45" r="3.5" fill="#ffffff" />
    <path d="M48.5 44C49 43.5 50 43.5 50.5 44C51 44.5 51 45.5 50 46L49 46.5H51" stroke="#2d3748" strokeWidth="0.6" />
  </svg>
);

const bottomGallery = [
  {
    id: 1,
    title: 'Nature Foods for Health',
    image: '/images/gallery-1.jpg',
    alt: 'Mindful wellness and outdoor movement - Nutrition By Durdana',
    highlighted: false,
  },
  {
    id: 2,
    title: 'Expert Health Advisor',
    image: '/images/gallery-2.jpg',
    alt: 'Guided wellness and posture coaching by certified health advisor in Mumbai',
    highlighted: false,
  },
  {
    id: 3,
    title: 'Nature Foods for Health',
    image: '/images/gallery-3.jpg',
    alt: 'One-on-one clinical nutrition consultation with Dt. Durdana in Malad West',
    highlighted: true,
  },
  {
    id: 4,
    title: 'Drink with Salads',
    image: '/images/gallery-4.jpg',
    alt: 'Fresh antioxidant nutritious meals and balanced diet plan',
    highlighted: false,
  },
];

export default function WhyChooseUs() {
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section id="why-us" className="py-16 md:py-24 bg-white relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          {/* Top Row: Left Green Card with Yoga Silhouette & Right Why Choose Us Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-14 md:mb-20">
            
            {/* Left Box: Green Card with Lotus Silhouette */}
            <div className="lg:col-span-5 relative h-[320px] sm:h-[380px] rounded-sm overflow-hidden shadow-lg bg-[#5c8d37] flex flex-col justify-between p-8 text-center">
              {/* Background Image with Green Color Multiply Blend */}
              <Image
                src="/images/why-us-main.jpg"
                alt="Health consultation and holistic wellness"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover opacity-25 mix-blend-overlay"
              />
              
              {/* Center Yoga Lotus Graphic */}
              <div className="relative z-10 flex-1 flex items-center justify-center pt-4">
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-md transform hover:scale-105 transition-transform duration-300">
                  <LotusYogaIcon className="w-20 h-20 sm:w-24 sm:h-24" />
                </div>
              </div>

              {/* Bottom Quote: "Feel complete Inside and Outside" */}
              <div className="relative z-10">
                <h3 className="font-serif text-2xl sm:text-[28px] font-semibold text-white tracking-wide leading-snug drop-shadow-sm">
                  Feel complete Inside and Outside
                </h3>
              </div>
            </div>

            {/* Right Box: Why Choose Us Content & CTAs */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#1e231e] leading-[1.2] tracking-tight">
                Why People need a <br />
                <span className="text-[#5c8d37]">Health Adviser</span>
              </h2>

              <p className="text-gray-500 text-sm sm:text-[15.5px] leading-relaxed mt-5 font-normal">
                Navigating conflicting diet trends and health advice can be overwhelming. A dedicated health adviser provides tailored, science-backed guidance that bridges your biological individuality, clinical needs, and everyday lifestyle into clear, empowering habits.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-xs sm:text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#5c8d37]" />
                  <span>Personalized Medical Nutrition</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#5c8d37]" />
                  <span>Ayurvedic Mind-Body Synergy</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#5c8d37]" />
                  <span>Sustainable Weight Management</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#5c8d37]" />
                  <span>Continuous 1-on-1 Accountability</span>
                </div>
              </div>

              {/* Action Buttons: WhatsApp & Contact Redirects */}
              <div className="flex flex-wrap items-center gap-4 mt-8 pt-2">
                <a
                  href="https://wa.me/919619997901?text=Hello%20Dt.%20Durdana,%20I%20am%20interested%20in%20consulting%20with%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1faa4e] text-white px-7 py-3 rounded-[3px] text-sm font-semibold tracking-wide transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#1c221b] hover:bg-[#5c8d37] text-white px-6 py-3 rounded-[3px] text-sm font-semibold tracking-wide transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
                >
                  <span>Contact Clinic</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Row: 4 Image Thumbnail Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bottomGallery.map((item) => (
              <div key={item.id} className="group flex flex-col cursor-pointer">
                {/* Image Container */}
                <div className="relative h-44 sm:h-48 w-full rounded-[2px] overflow-hidden bg-gray-100 shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
                </div>

                {/* Title */}
                <h4
                  className={`font-serif text-base sm:text-[17px] font-medium mt-3.5 transition-colors duration-200 ${
                    item.highlighted
                      ? 'text-[#5c8d37] font-semibold'
                      : 'text-[#1e231e] group-hover:text-[#5c8d37]'
                  }`}
                >
                  {item.title}
                </h4>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Read More Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full overflow-hidden p-6 sm:p-8 border border-gray-100 relative">
            <h3 className="font-serif text-2xl font-bold text-[#48732c] mb-3">
              Why Partner with a Health Adviser?
            </h3>
            <div className="text-sm text-gray-600 space-y-3 leading-relaxed mb-6">
              <p>
                Generic diets fail 95% of the time because they treat all human bodies as identical. A health adviser analyzes your biochemical individuality, stress levels, sleep cycles, and daily demands.
              </p>
              <p>
                By blending traditional Ayurvedic Food Science with clinical nutritional medicine, we restore metabolic vitality from within—without restrictive deprivation.
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setModalOpen(false);
                  setAppointmentOpen(true);
                }}
                className="flex-1 bg-[#5c8d37] hover:bg-[#48732c] text-white py-2.5 rounded font-medium text-sm transition"
              >
                Schedule Consultation
              </button>
              <button
                onClick={() => setModalOpen(false)}
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
