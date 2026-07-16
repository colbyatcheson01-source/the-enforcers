'use client';

import { useState } from 'react';

export default function TipPage() {
  const [formData, setFormData] = useState({ content: '', category: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!formData.content.trim()) newErrors.content = 'Please provide details in your tip';
    else if (formData.content.length > 5000) newErrors.content = 'Tip must be under 5000 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError('');
    if (!validate()) return;
    setSubmitting(true);
    try {
      const res = await fetch('/api/tips', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
      if (!res.ok) throw new Error('Something went wrong');
      setSubmitted(true);
    } catch (err) { setServerError(err.message); }
    finally { setSubmitting(false); }
  };

  if (submitted) {
    return (
      <section className="section bg-guardian-midnight">
        <div className="container-custom max-w-xl mx-auto text-center">
          <div className="w-20 h-20 bg-guardian-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-guardian-gold/30">
            <svg className="w-10 h-10 text-guardian-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-4 font-display">Tip Received</h2>
          <p className="text-neutral-300">Your anonymous tip has been received and will be reviewed privately by our team. Stand for what&rsquo;s right.</p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="bg-guardian-void relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-guardian-gold/5 via-transparent to-transparent"></div>
        <div className="container-custom relative z-10 text-center">
          <div className="shield-badge mb-4 inline-flex">Speak in Confidence</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white font-display">Anonymous Tip</h1>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">Submit information about a safety concern. Your identity is completely protected.</p>
        </div>
      </section>

      <section className="section bg-guardian-midnight">
        <div className="container-custom max-w-2xl mx-auto">
          <div className="bg-guardian-gold/5 border border-guardian-gold/20 rounded-xl p-6 mb-8">
            <h2 className="font-semibold text-white mb-3 font-display">How It Works</h2>
            <ul className="text-sm text-neutral-400 space-y-2">
              <li className="flex items-start gap-2"><svg className="w-4 h-4 text-guardian-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg> No personal information is collected or stored</li>
              <li className="flex items-start gap-2"><svg className="w-4 h-4 text-guardian-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg> Your IP address is not logged with your tip</li>
              <li className="flex items-start gap-2"><svg className="w-4 h-4 text-guardian-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg> Tips are reviewed privately by our team</li>
              <li className="flex items-start gap-2"><svg className="w-4 h-4 text-guardian-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg> If there is an immediate danger, call 911 instead</li>
            </ul>
          </div>

          {serverError && <div className="bg-red-950/50 border border-red-800/50 rounded-lg p-4 mb-6 text-red-300 text-sm">{serverError}</div>}

          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div>
              <label htmlFor="category" className="label">Category (Optional)</label>
              <select id="category" name="category" value={formData.category} onChange={(e) => setFormData(p => ({ ...p, category: e.target.value }))} className="input">
                <option value="">Select a category...</option>
                <option value="safety_concern">Safety Concern</option>
                <option value="suspicious_activity">Suspicious Activity</option>
                <option value="violence_prevention">Violence Prevention</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="content" className="label">Your Tip</label>
              <textarea id="content" name="content" value={formData.content} onChange={(e) => setFormData(p => ({ ...p, content: e.target.value }))} rows={8} className={`input ${errors.content ? 'input-error' : ''}`} placeholder="Please provide as much detail as possible, including dates, locations, and descriptions of what you have observed." />
              {errors.content && <p className="mt-1 text-sm text-red-400">{errors.content}</p>}
              <p className="mt-1 text-xs text-neutral-600">{formData.content.length}/5000</p>
            </div>
            <button type="submit" disabled={submitting} className="btn-primary w-full">{submitting ? 'Submitting...' : 'Submit Anonymous Tip'}</button>
          </form>
        </div>
      </section>
    </>
  );
}
