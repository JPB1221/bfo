import React from 'react';
import { ExternalLink, Building2, Car, Calculator } from 'lucide-react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import { BtnPrimary } from '../components/Buttons';

// TODO: Replace '#' href values with the actual deployed Vercel URLs once available.
const DEMOS = [
  {
    id: 'tax',
    icon: Calculator,
    label: 'Accounting & Tax',
    title: 'Premier Accounting Demo',
    description:
      'A full-featured website for an accounting and income tax firm. Includes a rotating hero, service pages, team profiles, contact form, newsletter section, map embed, and a client testimonials section.',
    stack: 'React, TypeScript, Tailwind CSS, Vite',
    features: ['Hero slider', 'Contact form', 'Services section', 'Team profiles', 'Map integration', 'Newsletter sign-up'],
    href: '#',
    color: '#1B4F72',
    accent: '#D4A843',
    industry: 'Financial Services',
  },
  {
    id: 'concrete',
    icon: Building2,
    label: 'Contractor',
    title: 'Concrete Pro Demo',
    description:
      'A professional site for a licensed general contractor specializing in concrete restoration, waterproofing, flatwork, and foundations. Features a project gallery, service breakdown, and quote request flow.',
    stack: 'React, TypeScript, Tailwind CSS, Vite',
    features: ['Project gallery', 'Service pages', 'Quote request', 'Testimonials', 'Before & after photos', 'Contact form'],
    href: '#',
    color: '#2D3748',
    accent: '#E67E22',
    industry: 'Construction',
  },
  {
    id: 'car',
    icon: Car,
    label: 'Automotive',
    title: 'Miami Vice Customs Demo',
    description:
      'A sleek, high-energy site for an elite car styling studio offering vinyl wraps, ceramic coatings, PPF, and window tinting. Showcases a portfolio of completed vehicles and a booking flow.',
    stack: 'React, TypeScript, Tailwind CSS, Vite',
    features: ['Vehicle portfolio', 'Service pricing', 'Booking form', 'Before & after gallery', 'Video showcases', 'Contact'],
    href: '#',
    color: '#1A1A2E',
    accent: '#E94560',
    industry: 'Automotive',
  },
];

function DemoCard({ demo, index }) {
  const Icon = demo.icon;
  return (
    <Reveal delay={index * 0.08} direction={index % 2 === 0 ? 'left' : 'right'}>
      <article
        data-testid={`demo-card-${demo.id}`}
        className="glow-card bg-[#0c1222]/50 border border-slate-800/40 overflow-hidden"
      >
        {/* Header bar */}
        <div className="bg-[#0a1020] border-b border-slate-800/30 px-8 py-5 flex items-center justify-between relative z-10">
          <div className="flex items-center gap-3">
            <Icon className="text-blue-400 w-5 h-5" strokeWidth={1.5} />
            <span className="font-heading font-bold text-[0.55rem] uppercase tracking-[0.2em] text-blue-400">
              {demo.label}
            </span>
          </div>
          <span className="font-mono text-[0.55rem] text-slate-500">{demo.industry}</span>
        </div>

        <div className="p-8 md:p-10 relative z-10">
          <h3 className="font-heading font-bold text-xl md:text-2xl uppercase tracking-wide text-slate-50 mb-3">
            {demo.title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">{demo.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-heading text-[0.6rem] font-bold uppercase tracking-[0.18em] text-blue-400 mb-3">
                Features
              </h4>
              <ul className="space-y-1.5">
                {demo.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-slate-400 text-xs">
                    <span className="w-1 h-1 rounded-full bg-blue-500 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-[0.6rem] font-bold uppercase tracking-[0.18em] text-blue-400 mb-3">
                Tech Stack
              </h4>
              <p className="text-slate-400 text-xs leading-relaxed">{demo.stack}</p>

              <div className="mt-5">
                <a
                  href={demo.href}
                  target={demo.href !== '#' ? '_blank' : undefined}
                  rel={demo.href !== '#' ? 'noopener noreferrer' : undefined}
                  data-testid={`demo-link-${demo.id}`}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 text-xs font-heading font-bold uppercase tracking-[0.12em] transition-all duration-200 border ${
                    demo.href !== '#'
                      ? 'bg-blue-500 hover:bg-blue-400 text-white border-blue-500 hover:border-blue-400'
                      : 'bg-transparent text-slate-500 border-slate-700 cursor-not-allowed'
                  }`}
                  aria-disabled={demo.href === '#'}
                >
                  <ExternalLink size={13} />
                  {demo.href !== '#' ? 'View Live Demo' : 'Coming Soon'}
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800/30 pt-4">
            <span className="font-mono text-[0.6rem] text-slate-500 uppercase tracking-wider">
              Deliverable time:{' '}
            </span>
            <span className="font-mono text-[0.6rem] text-blue-400">48 hours</span>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Demos() {
  return (
    <>
      <SEO
        title="Demo Sites"
        description="Live demo websites built by Bare Force One — accounting firm, contractor, and automotive styling. See what we can build for your business in 48 hours."
        path="/demos"
      />
      <PageHeader
        eyebrow="Portfolio Demos"
        title="See What We Can Build"
        subtitle="Full-featured demo websites across multiple industries. We can build something like this for your business in 48 hours."
      />

      <section data-testid="demos-list" className="bg-[#070b16]">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 py-24 lg:py-28 space-y-6">
          {DEMOS.map((demo, i) => (
            <DemoCard key={demo.id} demo={demo} index={i} />
          ))}

          <Reveal delay={0.3}>
            <div className="text-center pt-8">
              <p className="text-slate-400 text-sm mb-6">
                Ready to get a site like one of these for your business?
              </p>
              <BtnPrimary to="/contact" data-testid="demos-cta-contact">
                Get Started in 48 Hours
              </BtnPrimary>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
