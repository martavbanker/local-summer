import React, { useState } from 'react';
import { WaitlistFormData } from '../types';
import { Sparkles, CheckCircle, ArrowRight, Shield } from 'lucide-react';

export const WaitlistSection: React.FC = () => {
  const [formData, setFormData] = useState<WaitlistFormData>({
    firstName: '',
    lastName: '',
    email: '',
    location: '',
    numChildren: '2',
    childrenAges: [],
    comments: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const toggleAgeRange = (ageRange: string) => {
    setFormData((prev) => {
      const exists = prev.childrenAges.includes(ageRange);
      return {
        ...prev,
        childrenAges: exists
          ? prev.childrenAges.filter((a) => a !== ageRange)
          : [...prev.childrenAges, ageRange],
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim()) {
      setErrorMessage('Please fill in all required contact information.');
      return;
    }

    if (!formData.numChildren) {
      setErrorMessage('Please select how many children will travel with you.');
      return;
    }

    if (formData.childrenAges.length === 0) {
      setErrorMessage('Please select at least one age range for your children.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('https://formspree.io/f/xeeyyapg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          location: formData.location,
          numChildren: formData.numChildren,
          childrenAges: formData.childrenAges.length > 0 ? formData.childrenAges.join(', ') : 'None selected',
          comments: formData.comments,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        // Clear the form state after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          location: '',
          numChildren: '2',
          childrenAges: [],
          comments: '',
        });
      } else {
        const data = await response.json().catch(() => ({}));
        if (data && data.errors && Array.isArray(data.errors)) {
          setErrorMessage(data.errors.map((err: { message: string }) => err.message).join(', '));
        } else {
          setErrorMessage('There was an issue submitting your request. Please try again.');
        }
      }
    } catch (err) {
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
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

              <div className="space-y-3">
                <h3 className="font-serif text-3xl sm:text-4xl text-[#016278] font-normal">
                  You’re on the list.
                </h3>
                <p className="text-base sm:text-lg text-[#5A5A40] max-w-md mx-auto leading-relaxed">
                  We’ll be in touch as plans for Summer 2027 take shape.
                </p>
              </div>

              <div className="pt-4 flex justify-center">
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-[#5A5A40] hover:text-[#016278] underline font-medium"
                >
                  Submit another response
                </button>
              </div>
            </div>
          ) : (
            /* Interactive Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {errorMessage && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                  {errorMessage}
                </div>
              )}

              {/* Hidden inputs to ensure form parameters are sent in standard serialization */}
              <input type="hidden" name="numChildren" value={formData.numChildren} />
              <input type="hidden" name="childrenAges" value={formData.childrenAges.join(', ')} />

              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="firstName" className="block text-xs font-bold text-[#016278] uppercase tracking-wider">
                    First name <span className="text-[#D97757]">*</span>
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    disabled={isSubmitting}
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="e.g. Sarah"
                    className="w-full px-4 py-3 rounded-xl border border-[#016278]/20 focus:border-[#D97757] focus:ring-2 focus:ring-[#D97757]/30 outline-none transition-all text-sm bg-white disabled:opacity-60"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="lastName" className="block text-xs font-bold text-[#016278] uppercase tracking-wider">
                    Last name <span className="text-[#D97757]">*</span>
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    disabled={isSubmitting}
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder="e.g. Jenkins"
                    className="w-full px-4 py-3 rounded-xl border border-[#016278]/20 focus:border-[#D97757] focus:ring-2 focus:ring-[#D97757]/30 outline-none transition-all text-sm bg-white disabled:opacity-60"
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
                  name="email"
                  type="email"
                  required
                  disabled={isSubmitting}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-[#016278]/20 focus:border-[#D97757] focus:ring-2 focus:ring-[#D97757]/30 outline-none transition-all text-sm bg-white disabled:opacity-60"
                />
              </div>

              {/* Current Location */}
              <div className="space-y-1.5">
                <label htmlFor="location" className="block text-xs font-bold text-[#016278] uppercase tracking-wider">
                  Where do you currently live?
                </label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  disabled={isSubmitting}
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="City, State / Country (e.g. Austin, TX)"
                  className="w-full px-4 py-3 rounded-xl border border-[#016278]/20 focus:border-[#D97757] focus:ring-2 focus:ring-[#D97757]/30 outline-none transition-all text-sm bg-white disabled:opacity-60"
                />
              </div>

              {/* How many children */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-[#016278] uppercase tracking-wider">
                  How many children will travel with you? <span className="text-[#D97757]">*</span>
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {['1', '2', '3', '4+'].map((num) => (
                    <button
                      key={num}
                      type="button"
                      disabled={isSubmitting}
                      onClick={() => setFormData({ ...formData, numChildren: num })}
                      className={`py-2.5 rounded-xl text-sm font-bold border transition-all disabled:opacity-60 ${
                        formData.numChildren === num
                          ? 'bg-[#016278] text-white border-[#016278] shadow-sm'
                          : 'bg-white text-[#5A5A40] border-[#016278]/20 hover:border-[#D97757]'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              {/* What are their ages? (Multi-select) */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="block text-xs font-bold text-[#016278] uppercase tracking-wider">
                    What are their ages? <span className="text-[#D97757]">*</span>
                  </label>
                  <span className="text-[11px] text-[#5A5A40]/70 font-medium">Select all that apply</span>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {['0-2', '3-4', '5-6', '7-9', '10-12', '13+'].map((age) => {
                    const isSelected = formData.childrenAges.includes(age);
                    return (
                      <button
                        key={age}
                        type="button"
                        disabled={isSubmitting}
                        onClick={() => toggleAgeRange(age)}
                        className={`py-2.5 px-2 rounded-xl text-xs sm:text-sm font-bold border transition-all disabled:opacity-60 ${
                          isSelected
                            ? 'bg-[#016278] text-white border-[#016278] shadow-sm'
                            : 'bg-white text-[#5A5A40] border-[#016278]/20 hover:border-[#D97757]'
                        }`}
                      >
                        {age}
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
                  name="comments"
                  rows={3}
                  disabled={isSubmitting}
                  value={formData.comments}
                  onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                  placeholder="Tell us about what would make this summer perfect for your family..."
                  className="w-full px-4 py-3 rounded-xl border border-[#016278]/20 focus:border-[#D97757] focus:ring-2 focus:ring-[#D97757]/30 outline-none transition-all text-sm bg-white disabled:opacity-60"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#D97757] hover:bg-[#c46142] text-white font-bold text-xs sm:text-sm uppercase tracking-widest py-4 rounded-full shadow-md hover:shadow-lg transition-all transform active:scale-95 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
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

