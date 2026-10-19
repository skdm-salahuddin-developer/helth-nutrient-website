'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CheckCircle, ArrowRight, MessageCircle, Leaf } from 'lucide-react';
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
      <section id="nutritionist-in-malad" className="py-16 md:py-24 bg-white relative overflow-hidden scroll-mt-20">
        {/* Backward-compatible anchor for #about */}
        <span id="about" className="block relative -top-24 invisible" />
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Left Image Column - Dt. Durdana seamlessly merged with background */}
            <div className="lg:col-span-5 relative flex items-start justify-center">
              <div className="relative h-[480px] sm:h-[560px] lg:h-[620px] w-full -mt-2 sm:-mt-6">
                <Image
                  src="/about1.webp"
                  alt="Dt. Durdana - Clinical Nutritionist and Health Advisor in Malad West, Mumbai"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-contain object-top"
                  priority
                  unoptimized
                />
              </div>
            </div>

            {/* Right Text & Philosophy Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              
              {/* Target Keyword Showcase with Leaf */}
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#5c8d37] mb-2.5">
                <Leaf className="w-4 h-4 text-[#5c8d37]" />
                <span>Nutritionist in Malad</span>
              </div>

              {/* Main Headline */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-semibold text-[#1e231e] leading-[1.25] tracking-tight">
                Welcome to <span className="text-[#48732c]">Nutrition By Durdana</span>
              </h2>

              {/* Tagline / Subtitle */}
              <p className="font-serif italic text-base sm:text-lg text-[#5c8d37] mt-3 font-medium">
                “Attain sustainable weight loss and lifelong vitality with custom diet plans rooted in clinical nutrition & Ayurveda.”
              </p>

              {/* Main Body Paragraph */}
              <div className="space-y-3 mt-4 text-gray-600 text-sm sm:text-[15px] leading-relaxed">
                <p>
                  As one of the trusted <strong className="text-gray-800 font-semibold">nutrition clinics in Malad</strong>, Nutrition By Durdana is your destination for permanent health transformation. Whether you are seeking the <strong className="text-gray-800 font-semibold">best nutritionist in Malad</strong> or a dedicated <strong className="text-gray-800 font-semibold">weight loss coach in Malad</strong>, we are here to support your journey.
                </p>
                <p>
                  Specializing in <strong className="text-gray-800 font-semibold">custom diet plans in Malad for weight loss</strong>, gut restoration, PCOS, and lifestyle disorders, Dt. Durdana bridges ancient <strong className="text-gray-800 font-semibold">Ayurveda Food Science</strong> with modern <strong className="text-gray-800 font-semibold">Medical Nutrition</strong> to deliver results that are enjoyable, realistic, and lifelong.
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
                <a
                  href="https://wa.me/919619997901?text=Hello%20Dt.%20Durdana,%20I%20would%20like%20to%20start%20my%20personalized%20nutrition%20plan."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1faa4e] text-white px-7 py-3 rounded-[3px] text-sm font-semibold tracking-wide transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Start Plan on WhatsApp</span>
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
