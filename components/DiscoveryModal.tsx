'use client';

import React, { useState } from 'react';
import { X, CheckCircle, Calendar, User, Mail, Phone, Hash, ChevronRight, Send, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface DiscoveryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DiscoveryModal({ isOpen, onClose }: DiscoveryModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: 'Undecided / Curious',
    struggle: '',
    timeframe: 'As soon as possible',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending real data to the backend / API
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      experience: 'Undecided / Curious',
      struggle: '',
      timeframe: 'As soon as possible',
    });
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="discovery-modal-backing" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#322C2B]/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="bg-[#FBF8F3] w-full max-w-lg rounded-2xl shadow-2xl relative overflow-hidden text-[#322C2B] border border-[#F2ECE3] z-10 max-h-[90vh] flex flex-col"
          >
            {/* Soft decorative light-bloom on top right corner */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#D9A38A]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="p-6 md:p-8 flex items-center justify-between border-b border-[#F2ECE3] shrink-0">
              <div>
                <h3 className="font-display text-2xl font-light text-[#322C2B] leading-tight">
                  Start your journey
                </h3>
                <p className="font-body text-xs text-[#6E655E] mt-1 font-light tracking-wide uppercase">
                  Book a free discovery call
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-[#F2ECE3] rounded-full text-[#6E655E] hover:text-[#322C2B] transition-colors cursor-pointer"
                aria-label="Close form"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form body */}
            <div className="overflow-y-auto flex-1 p-6 md:p-8">
              {!isSubmitted ? (
                <form id="discovery-form" onSubmit={handleSubmit} className="space-y-5">
                  <p className="font-body text-sm font-light text-[#6E655E] leading-relaxed">
                    Tell me what is going on. I listen properly, and we will feel out together whether I am the right person to guide you on this stretch of the path. No pressure, no scripts.
                  </p>

                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#6E655E] flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#C08264]" /> Complete Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jacqueline de Boer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-[#F2ECE3] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C08264] font-body transition-colors"
                    />
                  </div>

                  {/* Contact Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#6E655E] flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-[#C08264]" /> Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white border border-[#F2ECE3] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C08264] font-body transition-colors"
                      />
                    </div>
                    {/* WhatsApp */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#6E655E] flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-[#C08264]" /> WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+31 6 12345678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white border border-[#F2ECE3] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C08264] font-body transition-colors"
                      />
                    </div>
                  </div>

                  {/* Path Choice Dropdown */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#6E655E] flex items-center gap-1.5">
                      <HelpCircle className="w-3.5 h-3.5 text-[#C08264]" /> Area of Interest
                    </label>
                    <div className="relative">
                      <select
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        className="w-full bg-white border border-[#F2ECE3] rounded-lg px-4 py-3 text-sm appearance-none focus:outline-none focus:border-[#C08264] font-body text-[#322C2B] transition-colors"
                      >
                        <option>Private Retreat (Bali, One-on-One)</option>
                        <option>Group Retreat (Bali & Worldwide)</option>
                        <option>Transformative Breathwork</option>
                        <option>Body Reset Therapy</option>
                        <option>Massages & Chi Core Release</option>
                        <option>Harmonic Flow Aquatic/Water Healing</option>
                        <option>Coaching & Mentoring</option>
                        <option>Undecided / Curious</option>
                      </select>
                      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-[#6E655E]">
                        <ChevronRight className="w-4 h-4 rotate-90" />
                      </div>
                    </div>
                  </div>

                  {/* Short description of struggle */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#6E655E] flex items-center gap-1.5">
                      What are you working through or seeking?
                    </label>
                    <div className="bg-[#F2ECE3]/30 border border-[#F2ECE3] rounded-lg p-4 space-y-2 text-xs text-[#6E655E] font-light leading-relaxed">
                      <p className="font-medium text-[#322C2B]">Please consider sharing:</p>
                      <ul className="list-disc pl-4 space-y-1">
                        <li>What is it that you need support with?</li>
                        <li>Do you have any health challenges?</li>
                        <li>Are you willing to put in the work, and invest your time and energy?</li>
                        <li>What is the financial investment you can and want to commit to your journey?</li>
                      </ul>
                    </div>
                    <textarea
                      rows={4}
                      placeholder="e.g. I've been feeling physically weary / stuck in burnout patterns..."
                      value={formData.struggle}
                      onChange={(e) => setFormData({ ...formData, struggle: e.target.value })}
                      className="w-full bg-white border border-[#F2ECE3] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C08264] font-body transition-colors"
                    />
                  </div>

                  {/* Booking Timeframe */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#6E655E]">
                      Desired Call Schedule Timeframe
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['This week', 'Next 2 weeks', 'Anytime'].map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setFormData({ ...formData, timeframe: opt })}
                          className={`py-2 px-3 text-xs border rounded-lg transition-all font-body ${
                            formData.timeframe === opt
                              ? 'border-[#C08264] bg-[#D9A38A]/10 text-[#C08264] font-semibold'
                              : 'border-[#F2ECE3] bg-white text-[#6E655E] hover:border-[#C08264]/50'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#D9A38A] text-[#1E1918] hover:bg-[#C08264] hover:text-[#1E1918] disabled:bg-[#D9A38A]/50 disabled:text-[#1E1918]/50 disabled:cursor-not-allowed font-body text-sm py-4 rounded-full transition-all duration-300 ease-out hover:-translate-y-0.5 active:scale-95 tracking-wide shadow-md flex items-center justify-center gap-2 cursor-pointer mt-4"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 border-2 border-[#1E1918] border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Application & Plan Call
                      </>
                    )}
                  </button>
                </form>
              ) : (
                /* Success screen */
                <div id="success-screen" className="text-center py-8 space-y-6 flex flex-col items-center">
                  <div className="p-4 bg-[#D9A38A]/10 text-[#C08264] rounded-full">
                    <CheckCircle className="w-16 h-16" />
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-display text-3xl font-light text-[#322C2B]">
                      Thank you, {formData.name.split(' ')[0]}
                    </h4>
                    <p className="font-body text-[#6E655E] text-sm tracking-wide uppercase">
                      Your query has been received
                    </p>
                  </div>

                  <p className="font-body text-[#322C2B] leading-relaxed max-w-sm text-sm font-light">
                    &ldquo;I read everything myself. I will reach out over WhatsApp or email as soon as possible to schedule our call. I look forward to hearing your story and finding out how we can walk this stretch together.&rdquo;
                  </p>

                  <div className="pt-4 flex flex-col items-center">
                    <span className="font-display italic text-lg text-[#6E655E] block">Warmly,</span>
                    <span className="font-display text-xl font-light mt-0.5 text-[#322C2B]">Miro Kloosterman</span>
                  </div>

                  <button
                    onClick={handleReset}
                    className="border border-[#D9A38A]/40 text-[#D9A38A] hover:bg-[#D9A38A] hover:text-[#1E1918] px-8 py-3 rounded-full transition-all duration-300 ease-out hover:-translate-y-0.5 active:scale-95 text-sm font-medium mt-4 cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
