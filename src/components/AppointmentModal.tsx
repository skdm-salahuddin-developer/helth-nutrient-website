'use client';

import React, { useState } from 'react';
import { X, Calendar, User, Mail, Phone, CheckCircle2, MessageCircle, FileText } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    service: 'Custom Meal Plans',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const text = `*New Consultation Enquiry*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📱 *Phone:* ${formData.phone}\n` +
      (formData.email ? `📧 *Email:* ${formData.email}\n` : '') +
      (formData.date ? `📅 *Preferred Date:* ${formData.date}\n` : '') +
      `🥗 *Program:* ${formData.service}\n` +
      (formData.message ? `💬 *Health Goal:* ${formData.message}\n` : '');

    const waUrl = `https://wa.me/919619997901?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      window.open(waUrl, '_blank');
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 1200);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full overflow-hidden relative border border-gray-100">
        
        {/* Clean Header */}
        <div className="bg-[#5c8d37] px-6 py-5 flex justify-between items-center text-white">
          <div>
            <h3 className="font-serif text-xl font-bold">Book A Consultation</h3>
            <p className="text-xs text-emerald-100 mt-0.5">Personalized nutrition & lifestyle guidance</p>
          </div>
          <button 
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 rounded-full hover:bg-black/10 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-3">
              <CheckCircle2 className="w-14 h-14 text-[#25D366] mx-auto animate-bounce" />
              <h4 className="text-xl font-serif font-bold text-gray-800">Opening WhatsApp...</h4>
              <p className="text-sm text-gray-600">
                Connecting you directly to schedule your consultation.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Priya Sharma"
                    className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:border-[#5c8d37] focus:ring-1 focus:ring-[#5c8d37]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:border-[#5c8d37] focus:ring-1 focus:ring-[#5c8d37]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address (Optional)</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:border-[#5c8d37] focus:ring-1 focus:ring-[#5c8d37]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Preferred Date (Optional)</label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:border-[#5c8d37] focus:ring-1 focus:ring-[#5c8d37]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Select Program</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:border-[#5c8d37] focus:ring-1 focus:ring-[#5c8d37] bg-white"
                  >
                    <option>Custom Meal Plans</option>
                    <option>Balanced Nutrition</option>
                    <option>Sustainable Lifestyle Habits</option>
                    <option>No Fads, No Gimmicks Program</option>
                    <option>90-Day Practice Transformation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Health Goal or Notes (Optional)</label>
                <div className="relative">
                  <FileText className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <textarea
                    rows={2}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="e.g. Weight management, PCOS, gut health, daily nutrition..."
                    className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:border-[#5c8d37] focus:ring-1 focus:ring-[#5c8d37] resize-none"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#25D366] hover:bg-[#1faa4e] text-white py-3 rounded-md font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Send on WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
