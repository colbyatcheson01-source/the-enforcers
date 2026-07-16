'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.length > 2000) newErrors.message = 'Message must be under 2000 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError('');
    if (!validate()) return;
    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
      if (!res.ok) { const data = await res.json(); throw new Error(data.error || 'Something went wrong'); }
      setSubmitted(true);
    } catch (err) { setServerError(err.message); }
    finally { setSubmitting(false); }
  };

  if (submitted) {
    return (
      <>
        <section className="bg-guardian-void py-20">
          <div className="container-custom text-center">
            <div className="shield-badge mb-4 inline-flex">Message Sent</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white font-display">Your Message Reaches Us</h1>
          </div>
        </section>
        <section className="section bg-guardian-midnight">
          <div className="container-custom max-w-xl mx-auto text-center">
            <div className="w-20 h-20 bg-guardian-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-guardian-gold/30">
              <svg className="w-10 h-10 text-guardian-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4 font-display">We Heard You</h2>
            <p className="text-neutral-300">Your message has been received. We will respond within 2-3 business days.</p>
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
          <div className="shield-badge mb-4 inline-flex">Reach Out</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white font-display">Contact the Guardian</h1>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Have a question, partnership idea, or need support? We&apos;re here to help.
          </p>
        </div>
      </section>

      <section className="section bg-guardian-midnight">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 font-display">Send a Message</h2>
              {serverError && <div className="bg-red-950/50 border border-red-800/50 rounded-lg p-4 mb-6 text-red-300 text-sm">{serverError}</div>}
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label htmlFor="name" className="label">Full Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={`input ${errors.name ? 'input-error' : ''}`} placeholder="Your name" />
                  {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="label">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`input ${errors.email ? 'input-error' : ''}`} placeholder="your@email.com" />
                    {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="label">Phone (Optional)</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="input" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="label">Message</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={6} className={`input ${errors.message ? 'input-error' : ''}`} placeholder="How can we help you?" />
                  {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
                  <p className="mt-1 text-xs text-neutral-600">{formData.message.length}/2000</p>
                </div>
                <button type="submit" disabled={submitting} className="btn-primary w-full">{submitting ? 'Sending...' : 'Send Message'}</button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-6 font-display">Other Ways to Reach Us</h2>
              <div className="space-y-6">
                <div className="card">
                  <h3 className="font-semibold text-white mb-2 font-display">Email</h3>
                  <p className="text-neutral-400 text-sm">
                    General Inquiries: <span className="text-guardian-gold">[insert email]</span>
                  </p>
                  <p className="text-neutral-400 text-sm">
                    Volunteer Program: <span className="text-guardian-gold">[insert email]</span>
                  </p>
                </div>
                <div className="card">
                  <h3 className="font-semibold text-white mb-2 font-display">Phone</h3>
                  <p className="text-neutral-400 text-sm">
                    <span className="text-guardian-gold">[insert phone number]</span>
                  </p>
                </div>
                <div className="card">
                  <h3 className="font-semibold text-white mb-2 font-display">Anonymous Tip</h3>
                  <p className="text-neutral-400 text-sm mb-4">Have information about a safety concern? Submit an anonymous tip. Your identity will be protected.</p>
                  <a href="/contact/tip" className="btn-secondary text-sm">Submit Anonymous Tip</a>
                </div>
                <div className="bg-red-950/30 border border-red-800/40 rounded-xl p-6">
                  <h3 className="font-semibold text-red-300 mb-2 font-display">In an Emergency</h3>
                  <p className="text-red-400/80 text-sm">Do not use this form for emergencies. <a href="tel:911" className="text-red-300 font-bold hover:underline">Call 911 immediately.</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
