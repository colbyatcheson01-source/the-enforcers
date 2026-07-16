'use client';

import { useState } from 'react';

export default function VolunteerPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    availability: '',
    skills: '',
    consentGiven: false,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.availability.trim()) newErrors.availability = 'Please tell us your availability';
    if (!formData.skills.trim()) newErrors.skills = 'Please describe your skills and experience';
    if (!formData.consentGiven) newErrors.consentGiven = 'You must consent to background screening';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError('');
    if (!validate()) return;
    setSubmitting(true);
    try {
      const res = await fetch('/api/volunteer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Something went wrong');
      }
      setSubmitted(true);
    } catch (err) {
      setServerError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <>
        <section className="bg-guardian-void py-20">
          <div className="container-custom text-center">
            <div className="shield-badge mb-4 inline-flex">Application Received</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white font-display">Your Oath is Received</h1>
          </div>
        </section>
        <section className="section bg-guardian-midnight">
          <div className="container-custom max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-guardian-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-guardian-gold/30">
              <svg className="w-10 h-10 text-guardian-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4 font-display">Welcome, Guardian</h2>
            <p className="text-neutral-300 mb-8 leading-relaxed">
              Thank you for your interest in standing with The Protectors. Our team will review your application and contact you within 5-7 business days regarding next steps, including the background screening process.
            </p>
            <p className="text-sm text-neutral-500">
              Questions? <span className="text-guardian-gold">[insert volunteer email]</span>
            </p>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="bg-guardian-void relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-guardian-gold/5 via-transparent to-transparent"></div>
        <div className="container-custom relative z-10 text-center">
          <div className="shield-badge mb-4 inline-flex">Join the Cause</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white font-display">Become a Guardian</h1>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Join our network of dedicated volunteers working to build safer communities across Canada. Stand for what&rsquo;s right.
          </p>
        </div>
      </section>

      <section className="section bg-guardian-midnight">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="bg-guardian-gold/5 border border-guardian-gold/20 rounded-xl p-6 mb-12">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-guardian-gold mt-0.5 flex-shrink-0" viewBox="0 0 100 100" fill="currentColor">
                <path d="M50,10 L70,25 L70,55 Q70,75 50,85 Q30,75 30,55 L30,25Z" fill="none" stroke="currentColor" strokeWidth="6"/>
                <line x1="50" y1="20" x2="50" y2="75" stroke="currentColor" strokeWidth="5"/>
                <line x1="35" y1="42" x2="65" y2="42" stroke="currentColor" strokeWidth="5"/>
              </svg>
              <div>
                <h2 className="font-semibold text-white mb-2 font-display">Before You Apply</h2>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  All volunteers are subject to background checks in compliance with Canadian laws and privacy standards. This includes a criminal record check and vulnerable sector screening. Your personal information will be kept confidential and used only for the purposes of processing your volunteer application.
                </p>
              </div>
            </div>
          </div>

          {serverError && (
            <div className="bg-red-950/50 border border-red-800/50 rounded-lg p-4 mb-6 text-red-300 text-sm">{serverError}</div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div>
              <label htmlFor="fullName" className="label">Full Name</label>
              <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className={`input ${errors.fullName ? 'input-error' : ''}`} placeholder="John Smith" autoComplete="name" />
              {errors.fullName && <p className="mt-1 text-sm text-red-400">{errors.fullName}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="label">Email Address</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`input ${errors.email ? 'input-error' : ''}`} placeholder="john@example.com" autoComplete="email" />
                {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="phone" className="label">Phone Number</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={`input ${errors.phone ? 'input-error' : ''}`} placeholder="+1 (555) 000-0000" autoComplete="tel" />
                {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="availability" className="label">Availability</label>
              <textarea id="availability" name="availability" value={formData.availability} onChange={handleChange} rows={3} className={`input ${errors.availability ? 'input-error' : ''}`} placeholder="e.g., Weekday evenings after 6pm, weekends, 10-15 hours per week" />
              {errors.availability && <p className="mt-1 text-sm text-red-400">{errors.availability}</p>}
            </div>

            <div>
              <label htmlFor="skills" className="label">Skills & Experience</label>
              <textarea id="skills" name="skills" value={formData.skills} onChange={handleChange} rows={4} className={`input ${errors.skills ? 'input-error' : ''}`} placeholder="Describe your relevant skills, experience, and why you want to stand with The Protectors" />
              {errors.skills && <p className="mt-1 text-sm text-red-400">{errors.skills}</p>}
            </div>

            <div className="bg-guardian-void/80 border border-guardian-iron/60 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <input type="checkbox" id="consentGiven" name="consentGiven" checked={formData.consentGiven} onChange={handleChange} className="mt-1 w-4 h-4 text-guardian-gold border-guardian-iron rounded focus:ring-guardian-gold bg-guardian-void" />
                <label htmlFor="consentGiven" className="text-sm text-neutral-300 leading-relaxed cursor-pointer">
                  <span className="font-medium text-guardian-gold">I consent to lawful background screening conducted through approved third-party providers.</span>
                  {' '}I understand that a criminal record check and vulnerable sector screening will be required as part of the volunteer application process. I authorize The Protectors to conduct these checks through approved, compliant third-party screening providers in accordance with Canadian laws and privacy standards.
                </label>
              </div>
              {errors.consentGiven && <p className="mt-2 text-sm text-red-400 ml-7">{errors.consentGiven}</p>}
            </div>

            <div className="bg-guardian-gold/5 border border-guardian-gold/20 rounded-lg p-4 text-sm text-neutral-400">
              <strong className="text-guardian-gold">Privacy Notice:</strong> All volunteers are subject to background checks in compliance with Canadian laws and privacy standards. Your information will be stored securely and encrypted at rest.
            </div>

            <button type="submit" disabled={submitting} className="btn-primary w-full text-lg py-4">
              {submitting ? 'Swearing In...' : 'Take the Oath — Submit Application'}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
