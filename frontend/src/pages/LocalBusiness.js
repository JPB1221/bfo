import React from 'react';
import { Globe, Smartphone, CreditCard, RefreshCw, Link2, TrendingUp, ExternalLink, HardHat, Car, Calculator, GraduationCap } from 'lucide-react';
import SEO from '../components/SEO';
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
      <SEO
        title="Local Business Website & Custom Software Development | Bare Force One"
        description="Bare Force One builds local business websites, small business websites, mobile apps, and custom software for service-based businesses. Fast, affordable, and built to grow. Fort Lauderdale, FL."
        path="/local-business"
      />
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

      {/* Example Business Solutions */}
      <section data-testid="lb-example-solutions" className="bg-[#070b16] border-b border-slate-800/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-28">
          <Reveal>
            <span className="section-number block mb-3">/02</span>
            <h2 className="font-heading font-[800] text-3xl md:text-4xl uppercase tracking-wide text-slate-50 mb-2">
              Example Business <span className="gradient-text">Solutions</span>
            </h2>
            <div className="line-draw w-16 mb-4" />
            <p className="text-slate-400 text-base leading-relaxed max-w-2xl mb-12">
              The following platforms were designed and built by Bare Force One to demonstrate the type of digital solutions we deliver for local businesses.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 stagger-children">
            {[
              {
                icon: HardHat,
                label: 'Construction',
                title: 'Construction Company Website',
                desc: 'Lead generation and project showcase for contractors and home service businesses.',
                href: '/demo/construction',
                color: 'text-orange-400',
                bg: 'bg-orange-500/10 border-orange-500/20',
              },
              {
                icon: Car,
                label: 'Automotive',
                title: 'Custom Automotive Website',
                desc: 'High-conversion platform for detailing shops, garages, and automotive service providers.',
                href: '/demo/custom-car',
                color: 'text-purple-400',
                bg: 'bg-purple-500/10 border-purple-500/20',
              },
              {
                icon: Calculator,
                label: 'Tax & Accounting',
                title: 'Tax Firm Website',
                desc: 'Professional platform with appointment booking for tax and accounting practices.',
                href: '/demo/tax',
                color: 'text-emerald-400',
                bg: 'bg-emerald-500/10 border-emerald-500/20',
              },
              {
                icon: GraduationCap,
                label: 'Education',
                title: 'Education & Training Portal',
                desc: 'Modern digital platform for schools and training organizations.',
                href: '/demo/education',
                color: 'text-teal-400',
                bg: 'bg-teal-500/10 border-teal-500/20',
              },
            ].map((item, i) => (
              <Reveal key={item.label} direction={i % 2 === 0 ? 'up' : 'scale'}>
                <div className="glow-card bg-[#0c1222]/50 border border-slate-800/40 p-7 h-full flex flex-col">
                  <div className={`inline-flex items-center gap-2 border text-xs font-semibold px-2.5 py-1 mb-5 uppercase tracking-wider w-fit ${item.bg} ${item.color}`}>
                    <item.icon className="w-3.5 h-3.5" strokeWidth={1.5} />
                    {item.label}
                  </div>
                  <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-slate-50 mb-2 relative z-10">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed relative z-10 flex-1">{item.desc}</p>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 text-xs font-semibold mt-5 transition-colors"
                  >
                    View Demo <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="lb-reasons" className="bg-[#090e1a] border-b border-slate-800/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-28">
          <Reveal>
            <span className="section-number block mb-3">/03</span>
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
