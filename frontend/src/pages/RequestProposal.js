import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, FileText } from 'lucide-react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';

const API = process.env.REACT_APP_BACKEND_URL || '';

const SECTORS = ['Government / Public Sector', 'Enterprise', 'Local Business', 'Nonprofit', 'Other'];
const PROJECT_TYPES = ['Custom Software Development', 'Mobile Application', 'Cloud Migration', 'Systems Integration', 'AI & Automation', 'Digital Transformation', 'Website / Web Application', 'Other'];
const TIMELINES = ['Immediate (< 1 month)', '1-3 months', '3-6 months', '6-12 months', 'Flexible / Planning Phase'];
const BUDGETS = ['Under $10,000', '$10,000 - $25,000', '$25,000 - $50,000', '$50,000 - $100,000', '$100,000+', 'To Be Determined'];

export default function RequestProposal() {
  const [form, setForm] = useState({
    name: '', email: '', organization: '', sector: '',
    project_type: '', timeline: '', budget_range: '',
    description: '', security_requirements: '', integration_needs: '',
  });
  const [status, setStatus] = useState(null);

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(`${API}/api/request-proposal`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const inputCls = 'w-full bg-[#070b16]/80 border border-slate-800/60 text-slate-200 placeholder-slate-600 p-4 text-sm font-body focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 outline-none transition-all duration-300';

  return (
    <>
      <SEO
        title="Request Proposal"
        description="Request a tailored capability statement from Bare Force One LLC. Tell us about your project and receive a structured proposal within 24 hours."
        path="/request-proposal"
      />
      <PageHeader
        eyebrow="Request Proposal"
        title="Request a Tailored Capability Statement"
        subtitle="Tell us about your project requirements and we'll respond with a structured proposal aligned to your budget, timeline, and security needs."
      />

      <section data-testid="proposal-section" className="bg-[#070b16]">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 py-24 lg:py-28">
          {status === 'success' ? (
            <Reveal direction="scale">
              <div data-testid="proposal-success" className="glow-card bg-[#0c1222]/50 border border-emerald-500/30 p-12 text-center relative z-10">
                <CheckCircle className="text-emerald-500 mx-auto mb-5 w-10 h-10" />
                <h3 className="font-heading font-bold text-2xl uppercase tracking-wide text-slate-50 mb-3">
                  Proposal Request Received
                </h3>
                <p className="text-slate-400 text-sm max-w-md mx-auto mb-2">
                  We'll review your requirements and respond with a tailored capability statement within 24 hours.
                </p>
                <p className="text-slate-500 text-xs font-mono">
                  A confirmation has been logged. For urgent requests, call <a href="tel:+19542969953" className="text-blue-400 hover:underline">954-296-9953</a>.
                </p>
              </div>
            </Reveal>
          ) : (
            <Reveal>
              <div className="flex items-center gap-3 mb-8">
                <FileText className="text-blue-500 w-5 h-5" strokeWidth={1.5} />
                <span className="font-heading text-[0.6rem] font-bold uppercase tracking-[0.2em] text-blue-400">
                  Structured Intake Form
                </span>
              </div>

              <form onSubmit={submit} data-testid="proposal-form" className="space-y-6">
                {/* Contact info */}
                <div>
                  <h3 className="font-heading font-bold text-xs uppercase tracking-[0.15em] text-slate-300 mb-4">Contact Information</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-heading text-[0.55rem] font-bold uppercase tracking-[0.18em] text-slate-500 mb-2">Full Name *</label>
                      <input data-testid="proposal-name" type="text" required value={form.name} onChange={update('name')} placeholder="Your name" className={inputCls} />
                    </div>
                    <div>
                      <label className="block font-heading text-[0.55rem] font-bold uppercase tracking-[0.18em] text-slate-500 mb-2">Email *</label>
                      <input data-testid="proposal-email" type="email" required value={form.email} onChange={update('email')} placeholder="email@organization.com" className={inputCls} />
                    </div>
                    <div>
                      <label className="block font-heading text-[0.55rem] font-bold uppercase tracking-[0.18em] text-slate-500 mb-2">Organization *</label>
                      <input data-testid="proposal-organization" type="text" required value={form.organization} onChange={update('organization')} placeholder="Company, agency, or department" className={inputCls} />
                    </div>
                    <div>
                      <label className="block font-heading text-[0.55rem] font-bold uppercase tracking-[0.18em] text-slate-500 mb-2">Sector *</label>
                      <select data-testid="proposal-sector" required value={form.sector} onChange={update('sector')} className={inputCls}>
                        <option value="">Select sector</option>
                        {SECTORS.map((s) => (<option key={s} value={s}>{s}</option>))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="w-full h-px bg-slate-800/40" />

                {/* Project details */}
                <div>
                  <h3 className="font-heading font-bold text-xs uppercase tracking-[0.15em] text-slate-300 mb-4">Project Details</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    <div>
                      <label className="block font-heading text-[0.55rem] font-bold uppercase tracking-[0.18em] text-slate-500 mb-2">Project Type</label>
                      <select data-testid="proposal-type" value={form.project_type} onChange={update('project_type')} className={inputCls}>
                        <option value="">Select type</option>
                        {PROJECT_TYPES.map((t) => (<option key={t} value={t}>{t}</option>))}
                      </select>
                    </div>
                    <div>
                      <label className="block font-heading text-[0.55rem] font-bold uppercase tracking-[0.18em] text-slate-500 mb-2">Timeline</label>
                      <select data-testid="proposal-timeline" value={form.timeline} onChange={update('timeline')} className={inputCls}>
                        <option value="">Select timeline</option>
                        {TIMELINES.map((t) => (<option key={t} value={t}>{t}</option>))}
                      </select>
                    </div>
                    <div>
                      <label className="block font-heading text-[0.55rem] font-bold uppercase tracking-[0.18em] text-slate-500 mb-2">Budget Range</label>
                      <select data-testid="proposal-budget" value={form.budget_range} onChange={update('budget_range')} className={inputCls}>
                        <option value="">Select range</option>
                        {BUDGETS.map((b) => (<option key={b} value={b}>{b}</option>))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block font-heading text-[0.55rem] font-bold uppercase tracking-[0.18em] text-slate-500 mb-2">Project Description *</label>
                    <textarea data-testid="proposal-description" required rows={5} value={form.description} onChange={update('description')} placeholder="Describe what you're trying to build or modernize. Include any specific goals, pain points, or user requirements." className={inputCls + ' resize-none'} />
                  </div>
                </div>

                <div className="w-full h-px bg-slate-800/40" />

                {/* Technical requirements */}
                <div>
                  <h3 className="font-heading font-bold text-xs uppercase tracking-[0.15em] text-slate-300 mb-4">Technical Requirements (Optional)</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-heading text-[0.55rem] font-bold uppercase tracking-[0.18em] text-slate-500 mb-2">Security Requirements</label>
                      <textarea data-testid="proposal-security" rows={3} value={form.security_requirements} onChange={update('security_requirements')} placeholder="E.g., HIPAA, NIST, MFA, encryption, audit logging..." className={inputCls + ' resize-none'} />
                    </div>
                    <div>
                      <label className="block font-heading text-[0.55rem] font-bold uppercase tracking-[0.18em] text-slate-500 mb-2">Integration Needs</label>
                      <textarea data-testid="proposal-integrations" rows={3} value={form.integration_needs} onChange={update('integration_needs')} placeholder="E.g., CRM, ERP, payment systems, existing databases..." className={inputCls + ' resize-none'} />
                    </div>
                  </div>
                </div>

                {status === 'error' && (
                  <div data-testid="proposal-error" className="flex items-center gap-2 text-red-400 text-sm">
                    <AlertCircle size={16} /> Something went wrong. Please try again or email contracts@bareforceone.com directly.
                  </div>
                )}

                <div className="pt-2">
                  <button type="submit" data-testid="proposal-submit" disabled={status === 'sending'}
                    className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-heading font-bold text-[0.65rem] uppercase tracking-[0.2em] py-4 px-10 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)] disabled:opacity-50">
                    <Send size={14} />
                    {status === 'sending' ? 'Submitting...' : 'Request Capability Statement'}
                  </button>
                  <p className="text-slate-600 text-xs mt-3">
                    We'll respond within 24 hours with a tailored capability statement.
                  </p>
                </div>
              </form>
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}
