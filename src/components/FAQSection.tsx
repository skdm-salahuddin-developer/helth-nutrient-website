'use client';

import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react';
import AppointmentModal from './AppointmentModal';

const faqs = [
  {
    id: 1,
    question: 'How does Nutrition By Durdana differ from generic diet plans?',
    answer:
      'Unlike restrictive fad diets or generic meal templates, our approach integrates ancient Ayurveda Food Science with modern clinical Medical Nutrition. We analyze your unique bio-individuality, metabolic rhythm, health history, and daily lifestyle to craft sustainable habits that heal from within.',
  },
  {
    id: 2,
    question: 'Can you help manage specific medical conditions (PCOS, Diabetes, Gut Issues)?',
    answer:
      'Yes, absolutely. We specialize in clinical nutrition therapy for gut health (IBS, bloating, acid reflux), hormonal balance (PCOS, thyroid), metabolic health (Type 2 diabetes, insulin resistance, cholesterol), and chronic inflammation through personalized anti-inflammatory dietary strategies.',
  },
  {
    id: 3,
    question: 'What is included in the 90-Day Practice Transformation program?',
    answer:
      'The 90-day program includes a comprehensive initial metabolic assessment, personalized weekly meal blueprints, grocery guides, mindful eating rituals, intuitive movement guidelines, and dedicated 1-on-1 weekly consultations with continuous WhatsApp/email accountability.',
  },
  {
    id: 4,
    question: 'Will I have to eliminate all my favorite foods?',
    answer:
      'No! True wellness is sustainable and enjoyable. We believe in addition over deprivation. Our goal is to introduce nutrient-dense, gut-loving foods and mindful cooking techniques while helping you enjoy social dining and treats without guilt or metabolic crashes.',
  },
  {
    id: 5,
    question: 'How do I get started with an initial consultation?',
    answer:
      'You can easily book an appointment by clicking the "Book An Appointment" button on this page. We will schedule a 1-on-1 discovery session to review your health history, current habits, and craft your step-by-step roadmap.',
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      <section id="faq" className="py-16 md:py-24 bg-[#fbfdf9] relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-[#5c8d37]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-[#5c8d37]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#5c8d37] mb-2.5">
              <HelpCircle className="w-4 h-4 text-[#5c8d37]" />
              <span>Got Questions?</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#1e231e] tracking-tight leading-[1.25]">
              Frequently Asked <span className="text-[#5c8d37]">Questions</span>
            </h2>
            
            <p className="text-gray-500 text-sm sm:text-[15px] mt-4 leading-relaxed font-normal">
              Everything you need to know about our personalized nutrition plans, Ayurvedic principles, and habit transformation process.
            </p>
          </div>

          {/* Accordion FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-sm transition-all duration-300 border ${
                    isOpen
                      ? 'bg-white border-[#5c8d37] shadow-md'
                      : 'bg-white/90 border-gray-200/80 hover:border-gray-300 shadow-sm'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-6 py-5 sm:py-6 flex items-center justify-between text-left gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`font-serif text-base sm:text-lg font-medium transition-colors duration-200 ${
                        isOpen ? 'text-[#48732c]' : 'text-[#1e231e]'
                      }`}
                    >
                      {faq.question}
                    </span>

                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isOpen
                          ? 'bg-[#5c8d37] text-white rotate-180'
                          : 'bg-[#f4f8f0] text-[#5c8d37]'
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {/* Answer */}
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-[14.5px] text-gray-600 leading-relaxed border-t border-gray-100/60 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Help Callout */}
          <div className="mt-12 text-center bg-white p-6 sm:p-8 rounded border border-gray-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 text-left">
              <div className="w-12 h-12 rounded-full bg-themeGreen-50 text-[#5c8d37] flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-base sm:text-lg font-semibold text-gray-900">
                  Have a specific question not listed here?
                </h4>
                <p className="text-xs text-gray-500">
                  Speak directly with Durdana during a discovery call.
                </p>
              </div>
            </div>

            <button
              onClick={() => setAppointmentOpen(true)}
              className="bg-[#1c221b] hover:bg-[#5c8d37] text-white px-6 py-2.5 rounded-[3px] font-semibold text-xs tracking-wider uppercase transition-colors whitespace-nowrap"
            >
              Ask a Question
            </button>
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
