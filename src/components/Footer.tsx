'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Phone, Mail, Clock, Calendar, ChevronDown, ChevronUp, ArrowUp } from 'lucide-react';
import AppointmentModal from './AppointmentModal';

const locations = [
  {
    name: 'Malad West, Mumbai',
    mall: 'Rustomjee Eaze Zone Mall',
    address: 'Shop No.3087, 1st floor, Rustomjee Eaze Zone Mall, Malad, Sunder Nagar, Malad West, Mumbai, Maharashtra 400064',
    phone: '+91 96199 97901',
    email: 'info@dtdurdana.in',
    hours: 'Mon - Sat : 10.00am - 08.00pm',
    mapUrl: 'https://maps.google.com/maps?q=Shop%20No.3087%2C%201st%20floor%2C%20Rustomjee%20Eaze%20Zone%20Mall%2C%20Malad%20West%2C%20Mumbai&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  {
    name: 'Mindspace, Malad',
    mall: 'Link House',
    address: '1st Floor, Link House, New Link Rd, Malad, Rajan Pada, Mindspace, Malad West, Mumbai, Maharashtra 400064',
    phone: '+91 96199 97901',
    email: 'info@dtdurdana.in',
    hours: 'Mon - Sat : 10.00am - 07.00pm',
    mapUrl: 'https://maps.google.com/maps?q=Link%20House%2C%20New%20Link%20Rd%2C%20Malad%20West%2C%20Mumbai&t=&z=15&ie=UTF8&iwloc=&output=embed',
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
      <footer id="contact" className="bg-[#5c8d37] pt-12 sm:pt-16 pb-6 relative text-white scroll-mt-20">
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
                    <a href={`tel:${loc.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-[#5c8d37] font-medium transition-colors">
                      {loc.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#5c8d37] flex-shrink-0" />
                    <a href={`mailto:${loc.email}`} className="hover:text-[#5c8d37] transition-colors">
                      {loc.email}
                    </a>
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
                    className="w-full bg-[#1c221b] hover:bg-[#5c8d37] text-white py-3 px-6 rounded-[3px] font-semibold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2.5 transition-colors duration-300 shadow-sm hover:shadow-md cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Now</span>
                  </button>
                </div>

              </div>

            </div>
          </div>

          {/* Bottom Copyright & Credit Bar */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-[13px] text-emerald-50 gap-4 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <div className="bg-white p-1.5 rounded shadow-sm flex items-center justify-center">
                <Image
                  src="/logo3.png"
                  alt="Nutrition By Durdana"
                  width={160}
                  height={50}
                  className="h-10 sm:h-12 w-auto object-contain"
                  unoptimized
                />
              </div>
              <div>
                <p>
                  Shop No.3087, 1st floor, Rustomjee Eaze Zone Mall, Malad West, Mumbai
                </p>
                <p className="text-[11px] text-emerald-100/80 mt-0.5">
                  © {new Date().getFullYear()} Dt. Durdana. All rights reserved. Holistic Clinical Nutrition & Ayurveda.
                </p>
              </div>
            </div>

            {/* Quick Links & Back to Top */}
            <div className="flex items-center gap-5">
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="#why-us" className="hover:text-white transition-colors">Why Us</a>
              <button
                onClick={scrollToTop}
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#5c8d37] flex items-center justify-center transition-all duration-200"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
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
