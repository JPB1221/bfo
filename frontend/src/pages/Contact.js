import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';

const API = process.env.REACT_APP_BACKEND_URL;

const SECTORS = ['Government', 'Enterprise', 'Local Business', 'Other'];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', organization: '', sector: '', message: '' });
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(`${API}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      setForm({ name: '', email: '', organization: '', sector: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const inputCls = 'w-full bg-void/60 border border-slate-800 text-slate-200 placeholder-slate-600 p-4 text-sm font-body focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all';

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Start a Conversation"
        subtitle="Email us directly or use the form below. We respond to all inquiries within one business day."
      />

      <section data-testid="contact-section" className="bg-navy">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <Reveal>
                {status === 'success' ? (
                  <div data-testid="contact-success" className="bg-surface/40 border border-emerald-500/30 p-10 text-center">
                    <CheckCircle className="text-emerald-500 mx-auto mb-4 w-8 h-8" />
                    <h3 className="font-heading font-bold text-xl uppercase tracking-wide text-slate-50 mb-2">
                      Message Received
                    </h3>
                    <p className="text-slate-400 text-sm">Thank you. We'll be in touch shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={submit} data-testid="contact-form" className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block font-heading text-[0.65rem] font-bold uppercase tracking-[0.15em] text-slate-400 mb-2">
                          Name *
                        </label>
                        <input
                          data-testid="contact-name"
                          type="text"
                          required
                          value={form.name}
                          onChange={update('name')}
                          placeholder="Your name"
                          className={inputCls}
                        />
                      </div>
                      <div>
                        <label className="block font-heading text-[0.65rem] font-bold uppercase tracking-[0.15em] text-slate-400 mb-2">
                          Email *
                        </label>
                        <input
                          data-testid="contact-email"
                          type="email"
                          required
                          value={form.email}
                          onChange={update('email')}
                          placeholder="email@company.com"
                          className={inputCls}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block font-heading text-[0.65rem] font-bold uppercase tracking-[0.15em] text-slate-400 mb-2">
                          Organization
                        </label>
                        <input
                          data-testid="contact-organization"
                          type="text"
                          value={form.organization}
                          onChange={update('organization')}
                          placeholder="Company or agency"
                          className={inputCls}
                        />
                      </div>
                      <div>
                        <label className="block font-heading text-[0.65rem] font-bold uppercase tracking-[0.15em] text-slate-400 mb-2">
                          Sector
                        </label>
                        <select
                          data-testid="contact-sector"
                          value={form.sector}
                          onChange={update('sector')}
                          className={inputCls}
                        >
                          <option value="">Select sector</option>
                          {SECTORS.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block font-heading text-[0.65rem] font-bold uppercase tracking-[0.15em] text-slate-400 mb-2">
                        Message *
                      </label>
                      <textarea
                        data-testid="contact-message"
                        required
                        rows={6}
                        value={form.message}
                        onChange={update('message')}
                        placeholder="Tell us about your project — what you're building, timeline, and any constraints."
                        className={inputCls + ' resize-none'}
                      />
                    </div>

                    {status === 'error' && (
                      <div data-testid="contact-error" className="flex items-center gap-2 text-red-400 text-sm">
                        <AlertCircle size={16} />
                        Something went wrong. Please try again or email us directly.
                      </div>
                    )}

                    <button
                      type="submit"
                      data-testid="contact-submit"
                      disabled={status === 'sending'}
                      className="inline-flex items-center gap-2 bg-accent hover:bg-accent-h text-white font-heading font-bold text-xs uppercase tracking-[0.18em] py-3.5 px-8 transition-all duration-300 hover:shadow-[0_0_24px_rgba(59,130,246,0.4)] disabled:opacity-50"
                    >
                      <Send size={14} />
                      {status === 'sending' ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </Reveal>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <Reveal delay={0.15}>
                <div className="space-y-8">
                  <div>
                    <h3 className="font-heading font-bold text-xs uppercase tracking-[0.15em] text-accent mb-4">
                      Direct Contact
                    </h3>
                    <div className="space-y-3 text-sm">
                      <p>
                        <a href="mailto:contracts@bareforceone.com" className="text-slate-300 hover:text-accent transition-colors">
                          contracts@bareforceone.com
                        </a>
                      </p>
                      <p className="text-slate-400">954-296-9953</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-heading font-bold text-xs uppercase tracking-[0.15em] text-accent mb-4">
                      Location
                    </h3>
                    <p className="text-slate-400 text-sm">Fort Lauderdale (Broward County), Florida</p>
                  </div>

                  <div>
                    <h3 className="font-heading font-bold text-xs uppercase tracking-[0.15em] text-accent mb-4">
                      What to Include
                    </h3>
                    <ul className="space-y-2 text-slate-400 text-sm">
                      <li>Your organization</li>
                      <li>What you're trying to build or modernize</li>
                      <li>Timeline and any constraints</li>
                      <li>Security or integration requirements</li>
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
