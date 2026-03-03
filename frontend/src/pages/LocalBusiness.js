import React from 'react';
import { Globe, Smartphone, CreditCard, RefreshCw, Link2, TrendingUp } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import { BtnPrimary, BtnOutline } from '../components/Buttons';

const SERVICES = [
  { icon: Globe, title: 'Responsive Websites', body: 'Modern, mobile-ready designs that convert visitors into customers and reflect your brand.' },
  { icon: Smartphone, title: 'Mobile Applications', body: 'Customer-facing and field team apps that keep your business accessible from anywhere.' },
  { icon: CreditCard, title: 'Booking & Payment Portals', body: 'Online scheduling, billing, and invoicing that reduce administrative overhead.' },
  { icon: RefreshCw, title: 'Automated Workflows', body: 'Contracts, intake forms, approvals, and reminders that run without manual intervention.' },
  { icon: Link2, title: 'Integrations', body: 'CRM systems, marketing tools, and payment processors connected into a single workflow.' },
  { icon: TrendingUp, title: 'Growth Strategy', body: 'Technology roadmaps designed to scale with your business as you grow.' },
];

const REASONS = [
  { metric: 'Clear ROI', desc: 'Every project is scoped to deliver measurable results.' },
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
        subtitle="We build websites, mobile apps, and back-office automation that help service businesses save time, increase revenue, and deliver a better customer experience."
      />

      {/* Services */}
      <section data-testid="lb-services" className="bg-navy border-b border-slate-800/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <Reveal>
            <span className="font-heading text-[0.65rem] font-bold uppercase tracking-[0.2em] text-accent mb-3 block">
              Services
            </span>
            <h2 className="font-heading font-[800] text-3xl md:text-4xl uppercase tracking-wide text-slate-50 mb-12">
              Tools That Drive Revenue
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div data-testid={`lb-service-${i}`} className="group bg-surface/40 border border-slate-800/50 p-7 hover:border-accent/30 transition-all duration-300 relative">
                  <div className="absolute inset-[-1px] bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  <s.icon className="text-accent mb-4 w-5 h-5 relative z-10" strokeWidth={1.5} />
                  <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-slate-50 mb-2 relative z-10">{s.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed relative z-10">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section data-testid="lb-reasons" className="bg-surface/30 border-b border-slate-800/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <Reveal>
            <span className="font-heading text-[0.65rem] font-bold uppercase tracking-[0.2em] text-accent mb-3 block">
              Why Local Businesses Choose Us
            </span>
            <h2 className="font-heading font-[800] text-3xl md:text-4xl uppercase tracking-wide text-slate-50 mb-12">
              Results You Can Measure
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {REASONS.map((r, i) => (
              <Reveal key={r.metric} delay={i * 0.1}>
                <div data-testid={`lb-reason-${i}`} className="border-l-2 border-accent pl-6 py-3">
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
