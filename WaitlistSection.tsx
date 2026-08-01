import React, { useState, useEffect } from 'react';
import { WaitlistFormData } from '../types';
import { Sparkles, CheckCircle, Heart, Palmtree, ArrowRight, Shield } from 'lucide-react';

export const WaitlistSection: React.FC = () => {
  const [formData, setFormData] = useState<WaitlistFormData>({
    firstName: '',
    lastName: '',
    email: '',
    location: '',
    numChildren: 2,
    childrenAges: '',
    stayDuration: '4 Weeks',
    priorities: ['Kids Spanish & Marine Program', 'Fast Wi-Fi Co-working'],
    comments: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load saved waitlist response if present
  useEffect(() => {
    const saved = localStorage.getItem('local_summer_waitlist');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setFormData(parsed);
        setSubmitted(true);
      } catch (e) {
        // ignore error
      }
    }
  }, []);

  const handlePriorityToggle = (priority: string) => {
    setFormData((prev) => {
      const exists = prev.priorities.includes(priority);
      return {
        ...prev,
        priorities: exists
          ? prev.priorities.filter((p) => p !== priority)
          : [...prev.priorities, priority],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      localStorage.setItem('local_summer_waitlist', JSON.stringify(formData));
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    localStorage.removeItem('local_summer_waitlist');
    setSubmitted(false);
  };

  return (
    <section id="waitlist" className="bg-[#FDFBF7] py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-t border-[#016278]/20 scroll-mt-12">
      <div className="max-w-2xl mx-auto space-y-8">
        
        {/* Title */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold tracking-widest text-[#016278] uppercase inline-flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#D97757]" />
            LIMITED INAUGURAL COHORT
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl text-[#016278] font-normal tracking-tight">
            Join the waitlist
          </h2>
          <p className="text-sm sm:text-base text-[#5A5A40] max-w-lg mx-auto">
            Receive priority access to official dates, apartment previews, and early-bird registration for Summer 2027 in Spain.
          </p>
        </div>

        {/* Form Container Card */}
        <div className="bg-[#F5F0E6] rounded-3xl shadow-sm border border-[#016278]/20 p-6 sm:p-10 transition-all">
          
          {submitted ? (
            /* Success State */
            <div className="text-center space-y-6 py-6 animate-fadeIn">
              <div className="w-16 h-16 bg-[#016278] text-white rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-10 h-10 text-[#D97757]" />
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-3xl text-[#016278] font-normal">
                  ¡Bienvenidos, {formData.firstName}!
                </h3>
                <p className="text-sm text-[#5A5A40] max-w-md mx-auto">
                  You are officially on the priority list for the Local Summer 2027 Spain cohort.
                </p>
              </div>

              <div className="bg-[#FDFBF7] border border-[#016278]/20 rounded-2xl p-5 text-left text-xs space-y-2.5 max-w-md mx-auto shadow-sm">
                <div className="flex justify-between border-b border-[#5A5A40]/15 pb-2">
                  <span className="text-[#5A5A40]/70">Email:</span>
                  <span className="font-semibold text-[#016278]">{formData.email}</span>
                </div>
                <div className="flex justify-between border-b border-[#5A5A40]/15 pb-2">
                  <span className="text-[#5A5A40]/70">Location:</span>
                  <span className="font-semibold text-[#016278]">{formData.location || 'US'}</span>
                </div>
                <div className="flex justify-between border-b border-[#5A5A40]/15 pb-2">
                  <span className="text-[#5A5A40]/70">Children Traveling:</span>
                  <span className="font-semibold text-[#016278]">{formData.numChildren} {formData.childrenAges ? `(${formData.childrenAges})` : ''}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5A5A40]/70">Preferred Stay:</span>
                  <span className="font-semibold text-[#016278]">{formData.stayDuration}</span>
                </div>
              </div>

              <p className="text-xs text-[#016278] italic font-semibold">
                We'll email you at {formData.email} as soon as housing previews and launch dates open up.
              </p>

              <div className="pt-2 flex justify-center gap-4">
                <button
                  onClick={handleReset}
                  className="text-xs text-[#5A5A40] hover:text-[#016278] underline font-medium"
                >
                  Edit my submission
                </button>
              </div>
            </div>
          ) : (
            /* Interactive Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="firstName" className="block text-xs font-bold text-[#016278] uppercase tracking-wider">
                    First name <span className="text-[#D97757]">*</span>
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="e.g. Sarah"
                    className="w-full px-4 py-3 rounded-xl border border-[#016278]/20 focus:border-[#D97757] focus:ring-2 focus:ring-[#D97757]/30 outline-none transition-all text-sm bg-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="lastName" className="block text-xs font-bold text-[#016278] uppercase tracking-wider">
                    Last name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder="e.g. Jenkins"
                    className="w-full px-4 py-3 rounded-xl border border-[#016278]/20 focus:border-[#D97757] focus:ring-2 focus:ring-[#D97757]/30 outline-none transition-all text-sm bg-white"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="block text-xs font-bold text-[#016278] uppercase tracking-wider">
                  Email <span className="text-[#D97757]">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-[#016278]/20 focus:border-[#D97757] focus:ring-2 focus:ring-[#D97757]/30 outline-none transition-all text-sm bg-white"
                />
              </div>

              {/* Current Location */}
              <div className="space-y-1.5">
                <label htmlFor="location" className="block text-xs font-bold text-[#016278] uppercase tracking-wider">
                  Where do you currently live?
                </label>
                <input
                  id="location"
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="City, State / Country (e.g. Austin, TX)"
                  className="w-full px-4 py-3 rounded-xl border border-[#016278]/20 focus:border-[#D97757] focus:ring-2 focus:ring-[#D97757]/30 outline-none transition-all text-sm bg-white"
                />
              </div>

              {/* How many children */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-[#016278] uppercase tracking-wider">
                  How many children would travel with you?
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[1, 2, 3, 4].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setFormData({ ...formData, numChildren: num })}
                      className={`py-2.5 rounded-xl text-sm font-bold border transition-all ${
                        formData.numChildren === num
                          ? 'bg-[#016278] text-white border-[#016278] shadow-sm'
                          : 'bg-white text-[#5A5A40] border-[#016278]/20 hover:border-[#D97757]'
                      }`}
                    >
                      {num === 4 ? '4+' : num}
                    </button>
                  ))}
                </div>
              </div>

              {/* Children Ages */}
              <div className="space-y-1.5">
                <label htmlFor="childrenAges" className="block text-xs font-bold text-[#016278] uppercase tracking-wider">
                  Ages of children (in 2027)
                </label>
                <input
                  id="childrenAges"
                  type="text"
                  value={formData.childrenAges}
                  onChange={(e) => setFormData({ ...formData, childrenAges: e.target.value })}
                  placeholder="e.g. 5, 8, and 12"
                  className="w-full px-4 py-3 rounded-xl border border-[#016278]/20 focus:border-[#D97757] focus:ring-2 focus:ring-[#D97757]/30 outline-none transition-all text-sm bg-white"
                />
              </div>

              {/* Target Duration */}
              <div className="space-y-1.5">
                <label htmlFor="stayDuration" className="block text-xs font-bold text-[#016278] uppercase tracking-wider">
                  Ideal stay duration
                </label>
                <select
                  id="stayDuration"
                  value={formData.stayDuration}
                  onChange={(e) => setFormData({ ...formData, stayDuration: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#016278]/20 focus:border-[#D97757] focus:ring-2 focus:ring-[#D97757]/30 outline-none transition-all text-sm bg-white text-[#5A5A40]"
                >
                  <option value="2 Weeks">2 Weeks</option>
                  <option value="4 Weeks">4 Weeks (Recommended)</option>
                  <option value="6 Weeks">6 Weeks</option>
                  <option value="Full Summer">Full Summer (8+ Weeks)</option>
                </select>
              </div>

              {/* Priorities */}
              <div className="space-y-2 pt-2">
                <label className="block text-xs font-bold text-[#016278] uppercase tracking-wider">
                  What matters most for your family?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {[
                    'Kids Spanish & Marine Program',
                    'Fast Wi-Fi Co-working',
                    'Curated Family Apartment',
                    'Local Cultural Experiences',
                  ].map((item) => {
                    const checked = formData.priorities.includes(item);
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => handlePriorityToggle(item)}
                        className={`text-left p-3 rounded-xl border transition-all flex items-center gap-2 ${
                          checked
                            ? 'bg-[#016278]/10 border-[#016278] text-[#016278] font-bold'
                            : 'bg-white border-[#016278]/20 text-[#5A5A40] hover:border-[#D97757]'
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center text-white text-[10px] ${
                            checked ? 'bg-[#016278]' : 'border border-[#016278]/30'
                          }`}
                        >
                          {checked && '✓'}
                        </div>
                        {item}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Comments */}
              <div className="space-y-1.5 pt-1">
                <label htmlFor="comments" className="block text-xs font-bold text-[#016278] uppercase tracking-wider">
                  Any specific questions or thoughts?
                </label>
                <textarea
                  id="comments"
                  rows={3}
                  value={formData.comments}
                  onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                  placeholder="Tell us about what would make this summer perfect for your family..."
                  className="w-full px-4 py-3 rounded-xl border border-[#016278]/20 focus:border-[#D97757] focus:ring-2 focus:ring-[#D97757]/30 outline-none transition-all text-sm bg-white"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#D97757] hover:bg-[#c46142] text-white font-bold text-xs sm:text-sm uppercase tracking-widest py-4 rounded-full shadow-md hover:shadow-lg transition-all transform active:scale-95 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Securing your spot...</span>
                ) : (
                  <>
                    <span>JOIN THE SUMMER 2027 WAITLIST</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="text-center text-[11px] text-[#5A5A40]/70 flex items-center justify-center gap-1">
                <Shield className="w-3.5 h-3.5 text-[#016278]" />
                No spam. No commitment. We respect your family's privacy.
              </p>

            </form>
          )}

        </div>
      </div>
    </section>
  );
};
