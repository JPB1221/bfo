import React from 'react';
import { Globe, Smartphone, CreditCard, RefreshCw, Link2, TrendingUp } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import { BtnPrimary, BtnOutline } from '../components/Buttons';

const SERVICES = [
  { icon: Globe, title: 'Responsive Websites', body: 'Modern, mobile-ready designs that convert visitors into customers.' },
  { icon: Smartphone, title: 'Mobile Applications', body: 'Customer-facing and field team apps accessible from anywhere.' },
  { icon: CreditCard, title: 'Booking & Payment Portals', body: 'Online scheduling, billing, and invoicing that reduce admin overhead.' },
  { icon: RefreshCw, title: 'Automated Workflows', body: 'Contracts, intake forms, approvals, and reminders without manual work.' },
  { icon: Link2, title: 'Integrations', body: 'CRM systems, marketing tools, and payment processors in one workflow.' },
  { icon: TrendingUp, title: 'Growth Strategy', body: 'Technology roadmaps designed to scale with your business.' },
];

const REASONS = [
  { metric: 'Clear ROI', desc: 'Every project scoped to deliver measurable results.' },
  { metric: 'Direct Communication', desc: 'Simple, transparent process from start to finish.' },
  { metric: 'Flexible Pricing', desc: 'Structured for smaller projects and growing budgets.' },
  { metric: 'Built to Grow', desc: 'Systems designed to scale with your business.' },
];

export default function LocalBusiness() {
  return (
    <>
      <PageHeader
        eyebrow="Local Business"
        title="Fast, Secure Solutions for Growth-Focused Businesses"
        subtitle="Websites, mobile apps, and automation that help service businesses save time, increase revenue, and deliver a better customer experience."
      />

      <section data-testid="lb-services" className="bg-[#070b16] border-b border-slate-800/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-28">
          <Reveal>
            <span className="section-number block mb-3">/01</span>
            <h2 className="font-heading font-[800] text-3xl md:text-4xl uppercase tracking-wide text-slate-50 mb-2">
              Tools That Drive <span className="gradient-text">Revenue</span>
            </h2>
            <div className="line-draw w-16 mb-12" />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} direction={i % 2 === 0 ? 'up' : 'scale'}>
                <div data-testid={`lb-service-${i}`} className="glow-card bg-[#0c1222]/50 border border-slate-800/40 p-7 h-full">
                  <s.icon className="text-blue-500 mb-4 w-5 h-5 relative z-10" strokeWidth={1.5} />
                  <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-slate-50 mb-2 relative z-10">{s.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed relative z-10">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="lb-reasons" className="bg-[#090e1a] border-b border-slate-800/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-28">
          <Reveal>
            <span className="section-number block mb-3">/02</span>
            <h2 className="font-heading font-[800] text-3xl md:text-4xl uppercase tracking-wide text-slate-50 mb-2">
              Results You Can <span className="gradient-text">Measure</span>
            </h2>
            <div className="line-draw w-16 mb-12" />
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {REASONS.map((r, i) => (
              <Reveal key={r.metric} delay={i * 0.1} direction="left">
                <div data-testid={`lb-reason-${i}`} className="border-l-2 border-blue-500 pl-6 py-3 hover:border-slate-50 transition-colors">
                  <h3 className="font-heading font-bold text-lg uppercase tracking-wide text-slate-50 mb-1">{r.metric}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <div className="mt-12 flex gap-4 flex-wrap">
              <BtnPrimary to="/contact" data-testid="lb-cta-contact">Get a Quote</BtnPrimary>
              <BtnOutline to="/capabilities" data-testid="lb-cta-capabilities">View Capabilities</BtnOutline>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
