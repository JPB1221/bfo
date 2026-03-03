import React from 'react';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import { BtnPrimary } from '../components/Buttons';

const TEAM_BG = 'https://images.unsplash.com/photo-1758691737182-d42aefd6dee8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBtZWV0aW5nJTIwZGl2ZXJzZSUyMHRlYW0lMjBzZXJpb3VzfGVufDB8fHx8MTc3MjU2NTcwOXww&ixlib=rb-4.1.0&q=85';

export default function About() {
  return (
    <>
      <PageHeader
        bg={TEAM_BG}
        eyebrow="About"
        title="Bare Force One LLC"
        subtitle="Software development and digital transformation firm specializing in mission-ready solutions for government, enterprise, and growth-focused businesses."
      />

      {/* What we are */}
      <section data-testid="about-identity" className="bg-navy border-b border-slate-800/40">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <Reveal>
              <span className="font-heading text-[0.65rem] font-bold uppercase tracking-[0.2em] text-accent mb-3 block">
                What We Are
              </span>
              <h2 className="font-heading font-[800] text-3xl md:text-4xl uppercase tracking-wide text-slate-50 mb-6">
                High-Performance, Mission-Driven Software Engineers
              </h2>
              <p className="text-slate-400 text-base leading-relaxed mb-4">
                We design and build custom software, mobile applications, and cloud-based systems
                engineered for performance and security. Our systems are documented, maintainable,
                and built to last.
              </p>
              <p className="text-slate-400 text-base leading-relaxed">
                Bare Force One LLC brings focused engineering capabilities to complex technical
                challenges — from modernizing government operations to building enterprise-scale
                automation to launching growth-focused business tools.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <span className="font-heading text-[0.65rem] font-bold uppercase tracking-[0.2em] text-accent mb-3 block">
                What We Are Not
              </span>
              <div className="space-y-4 mt-2">
                {[
                  'Not a flashy design agency',
                  'Not a generic web dev freelancer',
                  'Not overly corporate and stiff',
                  'Not playful SaaS startup pastel branding',
                ].map((item, i) => (
                  <div key={i} data-testid={`about-not-${i}`} className="border-l-2 border-slate-700 pl-5 py-1">
                    <p className="text-slate-400 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section data-testid="about-info" className="bg-surface/30 border-b border-slate-800/40">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-surface/40 border border-slate-800/50 p-8">
                <h3 className="font-heading font-bold text-xs uppercase tracking-[0.15em] text-accent mb-4">Company</h3>
                <p className="text-slate-300 text-sm font-medium mb-1">Bare Force One LLC</p>
                <p className="text-slate-500 text-xs">U.S.-Registered Limited Liability Company</p>
              </div>
              <div className="bg-surface/40 border border-slate-800/50 p-8">
                <h3 className="font-heading font-bold text-xs uppercase tracking-[0.15em] text-accent mb-4">Location</h3>
                <p className="text-slate-300 text-sm font-medium mb-1">Fort Lauderdale, Florida</p>
                <p className="text-slate-500 text-xs font-mono">UEI: FJRRJ6JNJ375</p>
              </div>
              <div className="bg-surface/40 border border-slate-800/50 p-8">
                <h3 className="font-heading font-bold text-xs uppercase tracking-[0.15em] text-accent mb-4">Contact</h3>
                <p className="text-slate-300 text-sm font-medium mb-1">
                  <a href="mailto:contracts@bareforceone.com" className="hover:text-accent transition-colors">
                    contracts@bareforceone.com
                  </a>
                </p>
                <p className="text-slate-500 text-xs">954-296-9953</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-12">
              <BtnPrimary to="/contact" data-testid="about-cta-contact">Start a Project</BtnPrimary>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
