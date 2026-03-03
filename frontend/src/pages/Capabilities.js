import React from 'react';
import { Globe, Cpu, Server, Zap, Link2, BarChart3, Shield, Wrench } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import { BtnPrimary } from '../components/Buttons';

const CAPABILITIES = [
  { icon: Globe, title: 'Custom Software Development', body: 'Web platforms, portals, internal tools, and citizen-facing applications designed for reliability and scale.' },
  { icon: Cpu, title: 'Mobile Application Development', body: 'Native and cross-platform mobile apps that put critical tools in the hands of field teams and end users.' },
  { icon: Server, title: 'Cloud Architecture', body: 'Cloud migration, secure deployment, and infrastructure designed for compliance and performance on AWS and Azure.' },
  { icon: Zap, title: 'AI & Automation', body: 'Document processing, intelligent search, decision support, and workflow automation that improve speed and accuracy.' },
  { icon: Link2, title: 'Systems Integration', body: 'Secure connectors with CRMs, ERPs, payment systems, document management, and third-party APIs via RESTful interfaces.' },
  { icon: BarChart3, title: 'Digital Transformation Strategy', body: 'End-to-end modernization planning and execution for organizations replacing legacy systems.' },
  { icon: Shield, title: 'Secure Backend & API Development', body: 'Security-first API design with role-based access, encryption, audit logging, and NIST-informed practices.' },
  { icon: Wrench, title: 'Vendor & Procurement Portal Development', body: 'Custom procurement platforms, vendor management systems, and bidding portals for public and private sector clients.' },
];

const DIFFERENTIATORS = [
  'Secure-by-design architecture',
  'Agile development process with clear milestones',
  'Performance-focused engineering',
  'Mission-driven execution',
  'Maintainable, documented systems',
  'Reliable long-term support and maintenance',
];

export default function Capabilities() {
  return (
    <>
      <PageHeader
        eyebrow="Capabilities"
        title="Core Capabilities"
        subtitle="High-performance, mission-driven engineering across every engagement."
      />

      {/* Capabilities Grid */}
      <section data-testid="cap-grid" className="bg-navy border-b border-slate-800/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {CAPABILITIES.map((cap, i) => (
              <Reveal key={cap.title} delay={i * 0.06}>
                <div data-testid={`cap-item-${i}`} className="group bg-surface/40 border border-slate-800/50 p-8 hover:border-accent/30 transition-all duration-300 relative">
                  <div className="absolute inset-[-1px] bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  <div className="flex items-start gap-5 relative z-10">
                    <cap.icon className="text-accent flex-shrink-0 mt-1 w-6 h-6" strokeWidth={1.5} />
                    <div>
                      <h3 className="font-heading font-bold text-base uppercase tracking-wider text-slate-50 mb-2">{cap.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{cap.body}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section data-testid="cap-diff" className="bg-surface/30 border-b border-slate-800/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <Reveal>
            <span className="font-heading text-[0.65rem] font-bold uppercase tracking-[0.2em] text-accent mb-3 block">
              Differentiators
            </span>
            <h2 className="font-heading font-[800] text-3xl md:text-4xl uppercase tracking-wide text-slate-50 mb-12">
              What Sets Us Apart
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DIFFERENTIATORS.map((d, i) => (
              <Reveal key={d} delay={i * 0.08}>
                <div data-testid={`cap-diff-${i}`} className="border-l-2 border-accent pl-5 py-2">
                  <p className="text-slate-300 text-sm font-medium">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="mt-12">
              <BtnPrimary to="/contact" data-testid="cap-cta-contact">Start a Project</BtnPrimary>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
