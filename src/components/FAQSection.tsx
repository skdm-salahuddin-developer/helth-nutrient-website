'use client';

import React, { useState } from 'react';
import { Plus, Minus, Leaf } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: 'How do custom diet plans in Malad for weight loss work?',
    answer:
      'Our custom diet plans in Malad for weight loss are 100% personalized to your unique metabolic pace, daily lifestyle, and food preferences. Rather than restrictive calorie cutting, Dt. Durdana combines clinical medical nutrition with Ayurvedic metabolic balancing to help you shed fat permanently while preserving muscle and energy.',
  },
  {
    id: 2,
    question: 'How does Nutrition By Durdana differ from generic diet clinics?',
    answer:
      'Unlike restrictive fad diets or generic templates, Nutrition By Durdana ranks among the best nutrition clinics in Malad because we address the root causes of weight gain, gut disorders, and hormonal imbalances. We craft sustainable habits that heal your metabolism from within.',
  },
  {
    id: 3,
    question: 'Can you help manage specific medical conditions (PCOS, Diabetes, Gut Issues)?',
    answer:
      'Yes, absolutely. As a certified Clinical Nutritionist and Weight Loss Coach in Malad, Dt. Durdana specializes in medical nutrition therapy for gut health (IBS, acid reflux), PCOS, thyroid, insulin resistance, cholesterol, and chronic inflammation.',
  },
  {
    id: 4,
    question: 'What is included in the 90-Day Practice Transformation program?',
    answer:
      'The 90-day program includes a comprehensive initial metabolic assessment, personalized weekly meal blueprints, grocery guides, mindful eating rituals, intuitive movement guidelines, and dedicated 1-on-1 weekly consultations with continuous WhatsApp/email accountability.',
  },
  {
    id: 5,
    question: 'Will I have to eliminate all my favorite foods?',
    answer:
      'No! True wellness is sustainable and enjoyable. We believe in addition over deprivation. Our goal is to introduce nutrient-dense, gut-loving foods and mindful cooking techniques while helping you enjoy social dining and treats without guilt or metabolic crashes.',
  },
  {
    id: 6,
    question: 'Where is your clinic located, and can I visit from Malad or nearby areas?',
    answer:
      'Our physical clinic is located at Shop No.3087, 1st floor, Rustomjee Eaze Zone Mall, Sunder Nagar, Malad West, Mumbai — easily reachable for residents searching for a top nutritionist near Malad, Goregaon, and Kandivali. You can view our verified Google Business Profile and get 1-click driving directions right from the map below.',
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      <section id="weight-loss-coach-in-malad" className="py-16 md:py-24 bg-[#fbfdf9] relative overflow-hidden scroll-mt-20">
        {/* Backward-compatible anchor for #faq */}
        <span id="faq" className="block relative -top-24 invisible" />
        {/* Decorative background glow */}
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-[#5c8d37]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-[#5c8d37]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            {/* Target Keyword Showcase with Leaf */}
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#5c8d37] mb-2.5">
              <Leaf className="w-4 h-4 text-[#5c8d37]" />
              <span>Weight Loss Coach in Malad</span>
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

        </div>
      </section>
    </>
  );
}
