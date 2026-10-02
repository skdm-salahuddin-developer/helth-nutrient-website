'use client';

import React, { useState } from 'react';
import { Phone, Mail, Clock, Calendar, ChevronDown, ChevronUp, ArrowUp } from 'lucide-react';
import AppointmentModal from './AppointmentModal';

const locations = [
  {
    name: 'California',
    address: '20, First Avenue, California - USA',
    phone: '(00) 123 456 7890',
    email: 'contact@nutritionbydurdana.com',
    hours: 'Mon - Fri : 09.00am - 06.00pm',
    mapUrl: 'https://maps.google.com/maps?q=California,%20USA&t=&z=10&ie=UTF8&iwloc=&output=embed',
  },
  {
    name: 'New York',
    address: '450 Lexington Ave, New York, NY 10017 - USA',
    phone: '(00) 987 654 3210',
    email: 'ny@nutritionbydurdana.com',
    hours: 'Mon - Sat : 08.30am - 07.00pm',
    mapUrl: 'https://maps.google.com/maps?q=New%20York,%20USA&t=&z=10&ie=UTF8&iwloc=&output=embed',
  },
];

export default function Footer() {
  const [selectedLocIndex, setSelectedLocIndex] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  const loc = locations[selectedLocIndex];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer id="contact" className="bg-[#5c8d37] pt-12 sm:pt-16 pb-6 relative text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          
          {/* Main Floating White Contact & Location Card */}
          <div className="bg-white rounded-[3px] shadow-2xl p-6 sm:p-10 lg:p-12 mb-12 text-gray-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Left Column: Embedded Styled Map */}
              <div className="lg:col-span-7 h-[280px] sm:h-[340px] w-full rounded-[2px] overflow-hidden border border-gray-200 relative bg-gray-50 shadow-inner">
                <iframe
                  title="Location Map"
                  src={loc.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Right Column: Location Details */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
                
                {/* Location Title & Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center justify-between w-full text-left font-serif text-3xl sm:text-[32px] font-semibold text-[#1e231e] hover:text-[#5c8d37] transition-colors"
                  >
                    <span>{loc.name}</span>
                    <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50">
                      {dropdownOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {/* Dropdown Menu */}
                  {dropdownOpen && (
                    <div className="absolute top-12 left-0 right-0 bg-white border border-gray-100 shadow-xl rounded py-2 z-20 animate-fadeIn">
                      {locations.map((item, idx) => (
                        <button
                          key={item.name}
                          onClick={() => {
                            setSelectedLocIndex(idx);
                            setDropdownOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2.5 text-sm font-medium hover:bg-themeGreen-50 hover:text-[#5c8d37] transition ${
                            selectedLocIndex === idx ? 'bg-themeGreen-50 text-[#5c8d37] font-bold' : 'text-gray-700'
                          }`}
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  )}

                  <p className="text-xs sm:text-[13px] text-gray-500 mt-1.5 font-normal">
                    {loc.address}
                  </p>
                </div>

                {/* Divider Line */}
                <div className="w-full h-[1px] bg-gray-200" />

                {/* Contact Items */}
                <div className="space-y-3.5 text-xs sm:text-[13.5px] text-gray-600">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#5c8d37] flex-shrink-0" />
                    <span>{loc.phone}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#5c8d37] flex-shrink-0" />
                    <span>{loc.email}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[#5c8d37] flex-shrink-0" />
                    <span>{loc.hours}</span>
                  </div>
                </div>

                {/* Social Square Outline Buttons */}
                <div className="flex items-center gap-2.5 pt-1">
                  {['f', 't', 'g+', 't_'].map((iconKey, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-8 h-8 rounded-[2px] border border-gray-300 hover:border-[#5c8d37] hover:bg-[#5c8d37] text-gray-600 hover:text-white flex items-center justify-center text-xs font-bold transition-colors uppercase"
                    >
                      {iconKey === 'f' && 'f'}
                      {iconKey === 't' && '𝕏'}
                      {iconKey === 'g+' && 'G+'}
                      {iconKey === 't_' && 'in'}
                    </a>
                  ))}
                </div>

                {/* Book Now Button */}
                <div className="pt-2">
                  <button
                    onClick={() => setAppointmentOpen(true)}
                    className="w-full bg-[#1c221b] hover:bg-[#5c8d37] text-white py-3 px-6 rounded-[3px] font-semibold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2.5 transition-colors duration-300 shadow-sm hover:shadow-md"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Now</span>
                  </button>
                </div>

              </div>

            </div>
          </div>

          {/* Bottom Copyright & Credit Bar */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-[13px] text-emerald-50 gap-3 text-center sm:text-left">
            <div>
              <p>
                © {new Date().getFullYear()} <strong className="font-semibold text-white">Nutrition By Durdana</strong>. All Rights Reserved.
              </p>
              <p className="text-[11px] text-emerald-100/90 mt-0.5 font-medium">
                Developed and Designed by <span className="font-bold text-white tracking-wide">Shree Krishna Digital Marketing</span>
              </p>
            </div>

            {/* Back to Top Leaf Button */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 bg-[#49702a] hover:bg-[#3b5d20] text-white px-3.5 py-2 rounded-full text-xs font-semibold shadow-sm transition-all duration-300 hover:scale-105"
              aria-label="Scroll to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </footer>

      {/* Appointment Modal */}
      <AppointmentModal 
        isOpen={appointmentOpen} 
        onClose={() => setAppointmentOpen(false)} 
      />
    </>
  );
}
