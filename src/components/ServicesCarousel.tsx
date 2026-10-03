'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Leaf, ArrowUpRight, ExternalLink, X, Calendar, CheckCircle2, ChevronRight, MessageCircle } from 'lucide-react';
import AppointmentModal from './AppointmentModal';

export interface ServiceItem {
  id: number;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  link: string;
  image: string;
  fallbackImage: string;
  benefits: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: 'Custom Meal Plans',
    badge: 'Tailored Diet',
    tagline: 'Personalized to your biological individuality and daily schedule',
    description:
      'Individually tailored meal schedules crafted around your metabolic rate, work hours, clinical history, and dietary preferences for consistent, lifelong results.',
    link: 'https://dtdurdana.in/personalized-diet-plans/',
    image: '/images/service-custom-meal-plans.jpg',
    fallbackImage: '/images/hero-slide-1.jpg',
    benefits: [
      'Macronutrient & calorie balanced',
      'Accommodates busy work schedules',
      'No starvation or nutrient deficiencies',
    ],
  },
  {
    id: 2,
    title: 'Balanced Nutrition',
    badge: 'Daily Lifestyle',
    tagline: 'Harmonious plates rooted in clinical science & Ayurveda',
    description:
      'Nutrient-dense daily meal combinations designed to stabilize insulin levels, heal the gut microbiome, and sustain energy from morning to evening.',
    link: 'https://dtdurdana.in/balanced-diet-plan-for-daily-lifestyle/',
    image: '/images/service-balanced-nutrition.avif',
    fallbackImage: '/images/gallery-4.jpg',
    benefits: [
      'Clinically guided diabetes & lipid balance',
      'Ayurvedic food combining principles',
      'Supports natural cellular detoxification',
    ],
  },
  {
    id: 3,
    title: 'Sustainable Lifestyle Habits',
    badge: 'Habit Transformation',
    tagline: 'Small mindful shifts that compound into lifelong vitality',
    description:
      'Build long-term mindful habits that seamlessly integrate into your social life and routine, preventing yo-yo weight cycles and burnout.',
    link: 'https://dtdurdana.in/healthy-lifestyle-changes/',
    image: '/images/service-sustainable-habits.jpg',
    fallbackImage: '/images/gallery-1.jpg',
    benefits: [
      'Mindful eating & craving management',
      'Circadian rhythm and sleep synchronization',
      'Permanent behavioral adherence',
    ],
  },
  {
    id: 4,
    title: 'No Fads, No Gimmicks',
    badge: 'Evidence-Based',
    tagline: 'Authentic science-backed guidance with real whole foods',
    description:
      'Pure evidence-based nutritional medicine free from magic pills, crash cleanses, or unsustainable deprivation. Just wholesome, nourishing food that works.',
    link: 'https://dtdurdana.in/no-fad-diets-plan/',
    image: '/images/service-no-fads.webp',
    fallbackImage: '/images/why-us-main.jpg',
    benefits: [
      'Zero restrictive juice fasts or pills',
      'Transparent, medically sound methodology',
      'Safe for thyroid, PCOS, and fatty liver',
    ],
  },
];

export default function ServicesCarousel() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (id: number) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <>
      <section id="services" className="py-16 md:py-24 bg-[#fafbfa] relative overflow-hidden">
        {/* Subtle decorative background blur */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#5c8d37]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -right-20 w-96 h-96 bg-[#5c8d37]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#5c8d37] mb-2.5">
              <Leaf className="w-4 h-4 text-[#5c8d37]" />
              <span>Specialized Services</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#1e231e] tracking-tight leading-[1.25]">
              Personalized Programs For <br className="hidden sm:inline" />
              <span className="text-[#5c8d37]">Lifelong Health & Vitality</span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-[15px] leading-relaxed mt-4">
              Explore our core pillars of nutritional wellness, custom designed to deliver real, sustainable results without fad diets or false promises.
            </p>
          </div>

          {/* 4 Core Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {servicesData.map((service) => {
              const currentSrc = imageErrors[service.id] ? service.fallbackImage : service.image;

              return (
                <div
                  key={service.id}
                  className="group relative bg-white rounded-lg border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-[#5c8d37] transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1.5"
                >
                  {/* Top Image Container - Clean image with NO overlays or text */}
                  <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={currentSrc}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={() => handleImageError(service.id)}
                    />
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Title */}
                      <h3 className="font-serif text-xl sm:text-[22px] font-semibold text-[#1e231e] group-hover:text-[#48732c] transition-colors leading-snug mb-2.5">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed line-clamp-3">
                        {service.description}
                      </p>
                    </div>

                    {/* Action Button: Direct WhatsApp Redirect */}
                    <div className="pt-4 mt-4 border-t border-gray-100">
                      <a
                        href={`https://wa.me/919619997901?text=Hello%20Dt.%20Durdana,%20I%20would%20like%20to%20enquire%20about%20${encodeURIComponent(service.title)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1faa4e] text-white py-2.5 px-4 rounded-[4px] text-xs font-semibold tracking-wide transition-all duration-200 shadow-sm hover:shadow active:scale-95"
                      >
                        <MessageCircle className="w-4 h-4 fill-white" />
                        <span>Enquire on WhatsApp</span>
                      </a>
                    </div>
                  </div>

                  {/* Bottom Hover Accent Bar */}
                  <div className="h-1 w-0 bg-[#5c8d37] group-hover:w-full transition-all duration-300" />
                </div>
              );
            })}
          </div>

          {/* Bottom Banner Call to Action */}
          <div className="mt-14 bg-gradient-to-r from-[#1c221b] via-[#242e23] to-[#1c221b] rounded-lg p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
            <div className="text-center sm:text-left">
              <h4 className="font-serif text-xl sm:text-2xl font-semibold text-white">
                Not sure which service suits your health goals?
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">
                Consult directly with Dt. Durdana at our Malad West clinic or book an online session.
              </p>
            </div>
            <button
              onClick={() => setAppointmentOpen(true)}
              className="bg-[#5c8d37] hover:bg-[#6ba341] text-white px-6 py-3 rounded-[3px] font-semibold text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2 transition-all shadow-md flex-shrink-0 active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Book A Consultation</span>
            </button>
          </div>

        </div>
      </section>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full overflow-hidden border border-gray-100 relative">
            
            {/* Modal Image Header - Clean image without text overlay */}
            <div className="relative h-48 w-full bg-gray-100">
              <Image
                src={imageErrors[selectedService.id] ? selectedService.fallbackImage : selectedService.image}
                alt={selectedService.title}
                fill
                className="object-cover"
              />
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-3.5 right-3.5 bg-black/60 hover:bg-black/80 text-white rounded-full p-1.5 transition-colors z-10"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-7 space-y-4">
              <h4 className="font-serif text-2xl font-bold text-[#1e231e] leading-snug">
                {selectedService.title}
              </h4>
              <p className="text-xs sm:text-sm font-medium text-[#48732c] italic">
                “{selectedService.tagline}”
              </p>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {selectedService.description}
              </p>

              <div className="bg-[#f5f9f2] p-4 rounded-lg border border-[#e2edd8] space-y-2">
                <p className="text-xs font-bold text-[#355520] uppercase tracking-wider">
                  Program Highlights:
                </p>
                {selectedService.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-[#5c8d37] flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              {/* Action Buttons: WhatsApp & Contact Redirects */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/919619997901?text=Hello%20Dt.%20Durdana,%20I%20would%20like%20to%20enquire%20about%20${encodeURIComponent(selectedService.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#25D366] hover:bg-[#1faa4e] text-white py-2.5 px-4 rounded text-center font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-sm active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Enquire on WhatsApp</span>
                </a>

                <a
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className="bg-[#1c221b] hover:bg-[#5c8d37] text-white py-2.5 px-4 rounded text-center font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition"
                >
                  <span>Contact Clinic</span>
                </a>
              </div>
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
